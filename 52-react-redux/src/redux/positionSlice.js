import { createSlice } from "@reduxjs/toolkit";

export const positionSlice = createSlice({
  name: "position",
  initialState: {
    lat: 40.7008739,
    lng: -73.9875141,
  },
  reducers: {
    updatePosition(state, action) {
      state.lat = action.payload.lat;
      state.lng = action.payload.lng;
    },
    // increment: (state) => {
    //   state.value += 1
    // },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
});

// console.log(positionSlice);

// Action creators are generated for each case reducer function
// export const { increment, decrement, incrementByAmount } = positionSlice.actions

export default positionSlice.reducer;
