import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@cedcommerce/ounce-ui/dist/index.css";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
