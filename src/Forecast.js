import React from "react";
import "./App.css";

export default function Forecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <div className="forecastIcon">image</div>
          <div className="forecastTemp">
            <span className="forecastTemp-max">19</span>{" "}
            <span className="forecastTemp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
