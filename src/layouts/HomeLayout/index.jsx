// import Navbar from "@/components/main/shared/Navbar";
// import ReactLenis from "lenis/react";
// import { Outlet } from "react-router";

// export default function HomeLayout() {
//   return (
//     <ReactLenis root>
//       <div className="min-h-screen bg-[#EEF0F4] dark:bg-black flex flex-col">
//         <Navbar />
//         <main className="flex-1 py-5">
//           <Outlet />
//         </main>
//       </div>
//     </ReactLenis>
//   );
// }

import Navbar from "@/components/main/shared/Navbar";
import ReactLenis from "lenis/react";
import { Outlet } from "react-router";

export default function HomeLayout() {
  return (
    <ReactLenis root>
      <div className="min-h-screen bg-[#EEF0F4] dark:bg-black">
        {/* Sticky Navbar */}
        <header className="sticky top-0 z-50">
          <Navbar />
        </header>

        {/* Main content */}
        <main className="py-5">
          <Outlet />
        </main>
      </div>
    </ReactLenis>
  );
}
