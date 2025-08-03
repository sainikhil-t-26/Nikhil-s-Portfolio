import React from "react";
import ReactDOM from "react-dom/client";
import App from "./src/App";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "./App.css";

ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
