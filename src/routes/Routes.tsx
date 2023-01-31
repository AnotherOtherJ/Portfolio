import App from "app";
import Projects from "pages/Projects";
import Skills from "pages/Skills";
import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const AboutMe = lazy(() => import("pages/AboutMe"));
const Experience = lazy(() => import("pages/Experience"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <AboutMe />,
      },
      {
        path: "skills",
        element: <Skills />,
      },
      {
        path: "projects",
        element: <Projects />,
      },
      {
        path: "experience",
        element: <Experience />,
      },
    ],
  },
]);

export default router;
