import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import Card from "./components/Card";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
    <Card />
  </React.StrictMode>
);
