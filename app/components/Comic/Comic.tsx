import { Link } from '@remix-run/react';

import type { Props } from './types';

export const Comic = ({ title, imageURL, id }: Props) => {
  return (
    <Link to={`/comic/${id}`}>
      <div
        className='
          flex 
          flex-col 
          max-w-xs 
          bg-slate-800 
          rounded-lg 
          border 
          border-gray-200 
          shadow-2xl 
          drop-shadow-xl
          hover:scale-105
          transition duration-150 ease-in-out
        '
      >
        <img className="rounded-t-lg h-auto max-h-250 w-auto max-w-full" src={imageURL} alt={title} />
        <div className="p-5">
          <p className="mb-2 text-sm text-white text-md text-center font-bold tracking-tight">{title}</p>
        </div>
      </div>
    </Link>
  )
}