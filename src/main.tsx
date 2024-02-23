import ReactDOM from "react-dom/client";
import {Tooltip} from "react-tooltip";

import App from "./App.tsx";

import "./index.css";

import "react-tooltip/dist/react-tooltip.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <App />
    <Tooltip id="my-tooltip" />
  </>,
);
