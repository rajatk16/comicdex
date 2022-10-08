import { json } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

import { Series } from '~/components/Series';
import { getSeries } from '../../../services/series.server';


type LoaderData = {
  series: Awaited<ReturnType<typeof getSeries>>
}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    series: await getSeries({
      comicsTake: 7
    })
  }
  return json<LoaderData>(data);
}

const Index = () => {
  const { series } = useLoaderData();
  return (
    <div className='mt-5'>
      <Series series={series} />
    </div>
  )
}

export default Index;