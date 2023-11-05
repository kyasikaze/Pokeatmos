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
      name: response.data.city,
      temperature: response.data.temperature.current,
      description: response.data.condition.description,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      icon: response.data.condition.icon_url,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.shecodes.io/weather/v1/current?query=${city}&key=b01ffcc8e0f35c8a34d9t4ee3f03o916&units=metric`;
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
      <div className="App container">
        {form}
        <div className="row infoBox shadow">
          <div className="col">
            <ul className="Description">
              <li className="cityName">{weather.name}</li>
              <li>{Math.round(weather.temperature)}°C</li>
              <li>{weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
          <div className="col align-self-center">
            <img src={weather.icon} alt="weather icon"></img>
          </div>
        </div>
      </div>
    );
  } else {
    return form;
  }
}
