import { Link } from "@remix-run/react";

import { Comics } from "../Comics";
import type { Props } from "./types";

export const Serie = ({comics, title, serieId}: Props) => {
  return (
    <>
      <div className="container mx-auto">
        <Link to={`/series?serie=${serieId}`}>
          <p className="py-5 text-lg">
            {title}
          </p>
        </Link>
        <Comics comics={comics} />
      </div>
    </>
  )
}