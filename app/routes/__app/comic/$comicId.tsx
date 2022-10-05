import { json } from '@remix-run/node';
import { useLoaderData, } from "@remix-run/react";
import type {  LoaderFunction } from "@remix-run/node";

import { getComicById } from "services/comics.server";

type LoaderData = {
  comic: Awaited<ReturnType<typeof getComicById>>
}

export const loader: LoaderFunction = async ({ params }) => {
  const id = params.comicId;
  const data: LoaderData = {
    comic: await getComicById(id!)
  };

  return json<LoaderData>(data);
}

const ComicPage = () => {
  const { comic } = useLoaderData<LoaderData>();
  return (
    <div className="container mx-auto mt-10 grid grid-cols-2">
      <div>
        <img
          src={comic?.imageURL}
          alt={comic?.title}
          style={{
            height: '90vh'
          }}
        />
      </div>
      <div className='ml-20'>
        <p className='text-3xl'>
          {comic?.title}
        </p>
        <div className='mt-5 p-5 mt-5 flex justify-between rounded-lg border border-gray-200 shadow-lg'>
          <span>
            Price: ${comic?.price}
          </span>
          <span>
            Pages: {comic?.pageCount}
          </span>
        </div>
        <p className='mt-5 p-5 mt-5 flex justify-between rounded-lg border border-gray-200 shadow-lg'>
          {comic?.description}
        </p>
        
        <div className='p-5 mt-5 flex justify-between rounded-lg border border-gray-200 shadow-lg'>
          <div>
            <p className='text-sm'>
              Series
            </p>
            <p>
              {comic?.series}
            </p>
          </div>
          <div>
            <p className='text-sm'>
              Art By
            </p>
            <div>
              {comic?.artists.split(', ').map((artist, index) => (
                <p key={index}>
                  {artist}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className='text-sm'>
              Written By
            </p>
            <div>
              {comic?.writer.split(', ').map((writer, index) => (
                <p key={index}>
                  {writer}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className='mt-5 p-5 mt-5 flex justify-between rounded-lg border border-gray-200 shadow-lg'>
          {comic?.starring.split(', ').map((star, index) => (
            <span key={index}>
              {star}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ComicPage;