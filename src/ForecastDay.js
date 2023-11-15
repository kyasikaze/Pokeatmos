import React from "react";

export default function ForecastDay(props) {
  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }
  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <div className="forecastIcon">
        <img
          src={props.data.condition.icon_url}
          className="img-fluid"
          alt="weather icon"
        />
      </div>
      <div className="forecastTemp">
        <span className="forecastTemp-max">
          {Math.round(props.data.temperature.maximum)}°
        </span>{" "}
        <span className="forecastTemp-min">
          {Math.round(props.data.temperature.minimum)}°
        </span>
      </div>
    </div>
  );
}
