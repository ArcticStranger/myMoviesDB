import { createSlice } from "@reduxjs/toolkit";
import { writeFavorites } from "../../../services/localStorage"
const buttonSlice = createSlice({
  name: "button",
  initialState: {
    hasButtonTapped: false,
  },

  reducers: {
    setButton(state, action) {
      state.hasButtonTapped = true;
      writeFavorites(action.payload)
      console.log("bruh");
    },
  },
});

export const { setButton } = buttonSlice.actions;

export default buttonSlice.reducer;