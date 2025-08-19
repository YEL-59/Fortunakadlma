import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "./components/ui/theme-provider";
import { router } from "./routes";
import { RouterProvider } from "react-router";
import { ResumeProvider } from "./pages/main/resumebuilder/resumeContext";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {" "}
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <ResumeProvider>
        {" "}
        <RouterProvider router={router} />
      </ResumeProvider>
    </ThemeProvider>
  </StrictMode>
);
