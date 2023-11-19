import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import TempDegrees from "./TempDegrees";
import Forecast from "./Forecast";
import WeatherPokemon from "./WeatherPokemon";

export default function Weather(props) {
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
      icon: response.data.condition.icon,
      coordinates: response.data.coordinates,
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
      <input
        type="search"
        className="searchBar shadow"
        pattern=".{3,}"
        required
        title="3 character minimum"
        onChange={updateCity}
      ></input>
      <input
        type="submit"
        value="Search"
        pattern=".{3,}"
        required
        title="3 character minimum"
        className="btn btn-outline-light shadow"
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
              <TempDegrees celsius={weather.temperature} />
              <li>{weather.description}</li>
              <li>Humidity: {weather.humidity}%</li>
              <li>Wind: {weather.wind}km/h</li>
            </ul>
          </div>
          <div className="col align-self-center">
            <WeatherPokemon condition={weather} className="pokemon" />
          </div>
        </div>
        <div className="infoBox shadow">
          <Forecast coordinates={weather.coordinates} />
        </div>
      </div>
    );
  } else {
    return form;
  }
}
