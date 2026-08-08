import { createSlice } from "@reduxjs/toolkit";

const burgerSlice = createSlice({
  name: "burger",
  initialState: {
    isBurgerMode: false,
    isBurgerOpen: false,
  },
  reducers: {
    setBurgerMode(state) {
      state.isBurgerMode = state.isBurgerMode ? false : true;
    },
    setBurgerOpen(state) {
      state.isBurgerOpen = state.isBurgerOpen ? false : true;
    },
  },
});

export const { setBurgerMode, setBurgerOpen } = burgerSlice.actions;

export default burgerSlice.reducer;
