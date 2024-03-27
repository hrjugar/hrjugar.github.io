import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useRef } from "react";

export default function App() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}