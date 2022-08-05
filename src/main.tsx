import "@/assets/styles/reset.css";

import ReactDOM from "react-dom/client";

import Theme from "@/assets/styles/Theme";
import App from "@/pages/app/App";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <>
    <Theme />
    <App />
  </>,
);
