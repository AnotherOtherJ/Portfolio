import App from "app";
import Projects from "pages/Projects";
import Skills from "pages/Skills";
import { createBrowserRouter } from "react-router-dom";
import loadable from "@loadable/component";

const AboutMe = loadable(() => import("pages/AboutMe"));
const Experience = loadable(() => import("pages/Experience"));
const Error404 = loadable(() => import("pages/Error404"));

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
      { path: "*", element: <Error404 /> },
    ],
  },
]);

export default router;
