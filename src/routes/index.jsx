import HomeLayout from "@/layouts/HomeLayout";
import About from "@/pages/main/about";
import Home from "@/pages/main/home";
import ResumeBuilder from "@/pages/main/resumebuilder";
import ResumeBuilderStepper from "@/pages/main/resumebuilder/stepper";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "resume-builder",
        element: <ResumeBuilder />,
      },
      {
        path: "resumeBuild-step",
        element: <ResumeBuilderStepper />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);
