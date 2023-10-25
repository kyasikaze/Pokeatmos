import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Weather />
    <footer class="footer">
      Open-source
      <a
        href="https://github.com/kyasikaze/weather-app-react"
        target="_blank"
        without
        rel="noreferrer"
        class="foot"
      >
        code
      </a>
      by kyasikaze
    </footer>
  </React.StrictMode>
);
