import { json, redirect } from '@remix-run/node';
import { useActionData } from '@remix-run/react';
import type { ActionFunction } from "@remix-run/node";

import { ComicForm } from "~/components/ComicForm";
import { CreateComic } from '../../services/validations';
import { createComic } from "../../services/comics.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const title = form.get('title');
  const imageURL = form.get('imageURL');
  const price = parseFloat(form.get('price') as string);
  const description = form.get('description');
  const artists = form.get('artists');
  const writer = form.get('writer');
  const series = form.get('series');
  const onSaleDate = form.get('onSaleDate');
  const issueNo = parseInt(form.get('issueNo') as string);
  const pageCount = parseInt(form.get('pageCount') as string);
  const starring = form.get('starring');
  const result = CreateComic.safeParse({
    title,
    imageURL,
    price,
    description,
    artists,
    writer,
    series,
    onSaleDate,
    issueNo,
    pageCount,
    starring
  });

  if (!result.success) {
    return json({
      error: result.error.flatten(),
      fields: {
        title,
        imageURL,
        price,
        description,
        artists,
        writer,
        series,
        onSaleDate,
        issueNo,
        pageCount,
        starring
      }
    }, {
      status: 400
    })
  }

  await createComic({
    title: result.data.title,
    imageURL: result.data.imageURL,
    description: result.data.description ?? null,
    price: result.data.price,
    writer: result.data.writer,
    artists: result.data.artists,
    series: result.data.series,
    onSaleDate: result.data.onSaleDate ?? null,
    pageCount: result.data.pageCount,
    issueNo: result.data.issueNo,
    starring: result.data.starring
  })
  return redirect('/');
}

const NewComic = () => {
  const data = useActionData();
  return (
    <div className='container mx-auto mt-10'>
      <ComicForm method='post' error={data?.error} fields={data?.fields} action="/newComic?index" {...data} />
    </div>
  )
}

export default NewComic;