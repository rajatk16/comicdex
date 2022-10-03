import { json } from '@remix-run/node';
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";

import { getComics } from '../../services/comics.server';
import type { Comic } from '../../services/comics.server';
import { Comic as ComicComponent } from '../components/Comic';

type LoaderData = {
  comics: Comic[]
}

export const loader: LoaderFunction = async () => {
  const data: LoaderData = {
    comics: await getComics()
  }
  return json(data);
}

const Index = () => {
  const { comics } = useLoaderData<LoaderData>();
  return (
    <div className='container flex gap-4 mx-auto mt-20'>
      {comics.map(comic => (
        <ComicComponent
          key={comic.id}
          title={comic.title}
          imageURL={comic.imageURL}
        />
      ))}
    </div>
  )
}

export default Index;