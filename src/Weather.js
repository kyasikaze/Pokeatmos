import React, { useState } from "react";
import axios from "axios";
import "./App.css";

export default function Weather() {
  let [city, setCity] = useState("");
  let [loaded, setLoaded] = useState(false);
  let [weather, setWeather] = useState({});
  function displayForecast(response) {
    setLoaded(true);
    setWeather({
      name: response.data.name,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = "eb9542c65e739e0fb25ade97c749e2aa";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(displayForecast);
  }
  function updateCity(event) {
    setCity(event.target.value);
  }
  let form = (
    <form className="App" onSubmit={handleSubmit}>
      <input type="search" className="searchBar" onChange={updateCity}></input>
      <input
        type="submit"
        value="Submit"
        className="btn btn-outline-light"
      ></input>
    </form>
  );
  if (loaded) {
    return (
      <div className="App">
        {form}
        <ul className="Description infoBox shadow">
          <li className="cityName">{weather.name}</li>
          <li>{weather.icon}</li>
          <li>{Math.round(weather.temperature)}°C</li>
          <li>{weather.description}</li>
          <li>Humidity: {weather.humidity}%</li>
          <li>Wind: {weather.wind}km/h</li>
        </ul>
      </div>
    );
  } else {
    return form;
  }
}
