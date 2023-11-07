import React, { useState } from "react";

export default function Degrees(props) {
  let [unit, setUnit] = useState("celsius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  if (unit === "celsius") {
    return (
      <div>
        <li>
          {Math.round(props.celsius)}
          <span className="unit">
            {" "}
            °C |{" "}
            <a href="/" onclick={showFahrenheit}>
              °F
            </a>
          </span>
        </li>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div>
        <li>
          {Math.round(fahrenheit)}
          <span className="unit">
            <a href="/" onclick={showCelsius}>
              {" "}
              °C{" "}
            </a>
            | °F
          </span>
        </li>
      </div>
    );
  }
}
