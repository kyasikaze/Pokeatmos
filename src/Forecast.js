import React from "react";
import "./App.css";
import axios from "axios";

export default function Forecast(props) {
  function handleResponse() {}
  let latitude = props.coordinates.latitude;
  let longitude = props.coordinates.longitude;
  let url = `https://api.shecodes.io/weather/v1/forecast?lon=${longitude}&lat=${latitude}&key=b01ffcc8e0f35c8a34d9t4ee3f03o916`;
  axios.get(url).then(handleResponse);
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
