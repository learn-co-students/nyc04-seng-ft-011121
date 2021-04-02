import { configureStore } from "@reduxjs/toolkit";
import positionReducer from "./positionSlice";
import pokemonReducer from "./pokemonSlice";

const store = configureStore({
  reducer: {
    position: positionReducer,
    pokemons: pokemonReducer,
  },
});

export default store;
