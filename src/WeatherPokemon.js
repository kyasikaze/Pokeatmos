import React from "react";
import altaria from "./media/altaria.gif";
import mega from "./media/altaria-mega.gif";
import blastoise from "./media/blastoise-mega.gif";
import charmander from "./media/charmander.gif";
import glaceon from "./media/glaceon.gif";
import koffing from "./media/koffing.gif";
import pikachu from "./media/pikachu.gif";
import squirtle from "./media/squirtle.gif";
import swablu from "./media/swablu.gif";
import swirlix from "./media/swirlix.gif";

export default function WeatherPokemon(props) {
  const iconMapping = {
    "clear-sky-day": charmander,
    "clear-sky-night": charmander,
    "few-clouds-day": swablu,
    "few-clouds-night": swablu,
    "scattered-clouds-day": swirlix,
    "scattered-clouds-night": swirlix,
    "broken-clouds-day": altaria,
    "broken-clouds-night": altaria,
    "overcast-clouds-day": mega,
    "overcast-clouds-night": mega,
    "shower-rain-day": squirtle,
    "shower-rain-night": squirtle,
    "rain-day": blastoise,
    "rain-night": blastoise,
    "thunderstorm-day": pikachu,
    "thunderstorm-night": pikachu,
    "snow-day": glaceon,
    "snow-night": glaceon,
    "mist-day": koffing,
    "mist-night": koffing,
  };
  return (
    <img
      src={iconMapping[props.condition.icon]}
      alt={props.condition.description}
    />
  );
}
