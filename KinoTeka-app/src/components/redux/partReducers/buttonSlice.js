import { createSlice } from "@reduxjs/toolkit";
import { setFavoriteFilm, getFavoriteFilms } from "../../../services/localStorage"

const buttonSlice = createSlice({
  name: "button",
  initialState: {
    hasButtonTapped: false,
    value: [],
  },
  reducers: {
    setButton(state, action) {
      state.hasButtonTapped = true;
      state.value.push(action.payload); 
    },
    clearButton(state) {
      state.hasButtonTapped = false;
    }
  },
});

export const { setButton, clearButton } = buttonSlice.actions;

export default buttonSlice.reducer;