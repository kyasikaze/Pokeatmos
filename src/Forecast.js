import React from "react";
import "./App.css";

export default function Forecast() {
  return (
    <div className="weatherForecast">
      <div className="row">
        <div className="col">
          <div className="forecastDay">Thu</div>
          <div className="forecastIcon">
            <img
              src="http://shecodes-assets.s3.amazonaws.com/api/weather/icons/broken-clouds-day.png"
              className="img-fluid"
              alt="weather icon"
            />
          </div>
          <div className="forecastTemp">
            <span className="forecastTemp-max">19</span>{" "}
            <span className="forecastTemp-min">10</span>
          </div>
        </div>
      </div>
    </div>
  );
}
