import ThemeProvider from "providers/ThemeProvider";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import router from "./routes";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ThemeProvider>
    <RouterProvider router={router} />
  </ThemeProvider>,
);
