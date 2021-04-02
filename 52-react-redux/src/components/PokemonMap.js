import React, { useEffect } from "react";
import {
  LayersControl,
  MapContainer,
  TileLayer,
  useMapEvents,
} from "react-leaflet";
import { useDispatch, useSelector } from "react-redux";
import { getRandomPokemon } from "../api/pokemon";
import PokemonMarker from "./PokemonMarker";
import { newChallenger } from "../redux/pokemonSlice";

const tileLayers = {
  "☀️": {
    url: "https://tiles.stadiamaps.com/tiles/osm_bright/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  },
  "❄️": {
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  },
  "🌧": {
    url:
      "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  },
  "☁️": {
    url: "https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png",
    attribution:
      '&copy; <a href="https://stadiamaps.com/">Stadia Maps</a>, &copy; <a href="https://openmaptiles.org/">OpenMapTiles</a> &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
  },
};

function PokemonMap({ icon = "☀️" }) {
  const pokemons = useSelector((state) => state.pokemons);
  const { lat, lng } = useSelector((storeState) => storeState.position);

  const dispatch = useDispatch();

  function handleMapClick({ latlng: { lat, lng } }) {
    console.log("map clicked");
    getRandomPokemon()
      .then((pokemon) => {
        const pokemonWithPosition = { ...pokemon, position: [lat, lng] };

        dispatch(newChallenger(pokemonWithPosition));
        // dispatch({
        //   type: "pokemon/newChallenger",
        //   payload: pokemonWithPosition,
        // });
      })
      .catch((err) => console.error("Pokemon fetch error", err));
  }

  return (
    <MapContainer center={[lat, lng]} zoom={15} style={{ height: "84vh" }}>
      <MapEvents onClick={handleMapClick} lat={lat} lng={lng} />
      <LayersControl position="topright">
        {Object.entries(tileLayers).map(([layerIcon, tileLayer]) => (
          <LayersControl.BaseLayer
            key={layerIcon}
            name={layerIcon}
            checked={layerIcon === icon}
          >
            <TileLayer
              attribution={tileLayer.attribution}
              url={tileLayer.url}
            />
          </LayersControl.BaseLayer>
        ))}
      </LayersControl>
      {pokemons.map((pokemon, index) => (
        <PokemonMarker key={index} pokemon={pokemon} />
      ))}
    </MapContainer>
  );
}

function MapEvents({ lat, lng, onClick }) {
  const map = useMapEvents({
    click(event) {
      onClick(event);
    },
  });

  useEffect(() => {
    if (lat && lng) {
      map.flyTo({ lat, lng });
    }
  }, [lat, lng]);

  return null;
}

export default PokemonMap;
