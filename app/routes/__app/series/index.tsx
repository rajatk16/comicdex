import { json } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

import { Comics } from "~/components/Comics";
import { getSerie } from '../../../../services/series.server';

type LoaderData = {
  serie: Awaited<ReturnType<typeof getSerie>>
}

export const loader: LoaderFunction = async ({request}) => {
  const url = new URL(request.url);
  const seriesId = url.searchParams.get('serie');

  const data: LoaderData = {
    serie: await getSerie({
      seriesId,
    })
  }
  return json<LoaderData>(data);
}
const SeriesPage = () => {
  const { serie } = useLoaderData();
  return (
    <div className="container mx-auto text-center mt-5">
      <p className="text-2xl">
        {serie?.title}
      </p>
      <div className="mt-10">
        <Comics comics={serie?.comics} />
      </div>
    </div>
  )
}

export default SeriesPage;