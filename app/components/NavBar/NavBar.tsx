import { Link } from "@remix-run/react"

export const NavBar = () => {
  return (
    <nav className="flex justify-between items-center bg-blue-700 px-5 text-white">
      <Link to="/" className="p-3">
        ComicDex
      </Link>
    </nav>
  )
}