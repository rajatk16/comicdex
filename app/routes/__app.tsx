import { Outlet } from "@remix-run/react";
import { NavBar } from "../components/NavBar"

export default () => {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  )
}