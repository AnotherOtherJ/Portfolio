import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Theme from "@/assets/styles/Theme";
import App from "@/pages/app/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Theme />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </>,
);
