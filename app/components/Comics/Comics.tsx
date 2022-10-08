import { Comic } from '../Comic';
import type { Props } from './types';

export const Comics = ({ comics }: Props) => {
  return (
    <div className='container flex gap-4 grid xl:grid-cols-7 md:grid-cols-4 sm:grid-cols-1'>
      {comics.map(comic => (
        <Comic
          key={comic.id}
          title={comic.title}
          imageURL={comic.imageURL}
          id={comic.id}
        />
      ))}
    </div>
  )
}