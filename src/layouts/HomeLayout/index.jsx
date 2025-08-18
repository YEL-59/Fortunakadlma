import Navbar from "@/component/main/shared/Navbar";
import ReactLenis from "lenis/react";
import { Outlet } from "react-router";

export default function HomeLayout() {
  return (
    <ReactLenis root>
      <Navbar />
      <Outlet />
    </ReactLenis>
  );
}
