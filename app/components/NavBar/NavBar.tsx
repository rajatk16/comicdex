import { Link } from "@remix-run/react"
import type { Props } from "./types"

export const NavBar = (props: Props) => {
  return (
    <nav className="flex justify-between items-center bg-blue-700 px-5 text-white">
      <Link to="/" className="p-3">
        ComicDex
      </Link>
    </nav>
  )
}