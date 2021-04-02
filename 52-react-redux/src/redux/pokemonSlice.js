import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: [],
  reducers: {
    newChallenger(state, action) {
      state.push(action.payload);
    },
  },
});

export const { newChallenger } = pokemonSlice.actions;

export default pokemonSlice.reducer;
