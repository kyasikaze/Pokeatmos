import React from "react";
import axios from "axios";
import { Vortex } from "react-loader-spinner";

export default function Weather(props) {
  function displayForecast(response) {
    alert(
      `The weather in ${response.data.name} is ${response.data.main.temp}°C`
    );
  }
  let apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
  axios.get(url).then(displayForecast);
  return (
    <Vortex
      visible={true}
      height="100"
      width="100"
      ariaLabel="vortex-loading"
      wrapperStyle={{}}
      wrapperClass="vortex-wrapper"
      colors={["black", "green", "green", "black", "green", "black"]}
    />
  );
}
