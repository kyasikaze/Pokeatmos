import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Weather from "./Weather";
import pokeatmos from "./pokeatmos.png";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <img
      src={pokeatmos}
      alt="pokeatmos"
      className="logo img-fluid mx-auto d-block"
    />
    <Weather />
    <footer class="footer">
      Open-source
      <a
        href="https://github.com/kyasikaze/weather-app-react"
        target="_blank"
        rel="noopener noreferrer"
        class="foot"
      >
        code
      </a>
      by kyasikaze
    </footer>
  </React.StrictMode>
);
