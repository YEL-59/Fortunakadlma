import Navbar from "@/components/main/shared/Navbar";
import ReactLenis from "lenis/react";
import { Outlet } from "react-router";

export default function HomeLayout() {
  return (
    <ReactLenis root>
      <div className="bg-[#EEF0F4] dark:bg-black h-full py-5">
        <Navbar />
        <Outlet />
      </div>
    </ReactLenis>
  );
}
