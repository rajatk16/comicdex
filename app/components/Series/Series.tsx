import { Serie } from "../Serie/Serie"
import type { Props } from "./types"

export const Series = ({series}: Props) => {
  return (
    <>
      {series.filter(serie => serie.comics.length !== 0).map(serie => (
        <Serie key={serie.id} comics={serie.comics} title={serie.title} serieId={serie.id} />
      ))}
    </>
  )
}