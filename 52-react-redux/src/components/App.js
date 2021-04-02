import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styled, { ThemeProvider } from "styled-components";
import PokemonMap from "./PokemonMap";
import Header from "./Header";
import PokemonList from "./PokemonList";
import { getWeather } from "../api/weather";
import themes from "../styles/themes";
import GlobalStyles from "../styles/GlobalStyles";

function App() {
  // read from the store
  const position = useSelector((storeState) => storeState.position);

  // update state
  const dispatch = useDispatch();

  const [weather, setWeather] = useState({
    temperature: 65,
    temperatureUnit: "F",
    shortForecast: "Sunny",
    icon: "☀️",
  });

  // get the user's location
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      ({ coords }) => {
        const position = { lat: coords.latitude, lng: coords.longitude };
        dispatch({ type: "position/updatePosition", payload: position });
      },
      (err) => console.error("geolocation error", err),
      { timeout: 7000, enableHighAccuracy: true, maximumAge: 0 }
    );
  }, [dispatch]);

  // get the weather for that location
  // useEffect(() => {
  //   if (position.lat && position.lng) {
  //     getWeather(position.lat, position.lng).then(setWeather);
  //   }
  // }, [position]);

  if (!weather) return <h1>Loading...</h1>;

  return (
    <ThemeProvider theme={themes[weather.icon]}>
      <GlobalStyles />
      <Header weather={weather} />
      <MainContent>
        <PokemonList />
        <PokemonMap icon={weather.icon} />
      </MainContent>
    </ThemeProvider>
  );
}

const MainContent = styled.main`
  max-width: 90%;
  margin: 4vh auto;
  display: grid;
  grid-template-columns: 400px 1fr;
  column-gap: 1rem;
`;

export default App;
