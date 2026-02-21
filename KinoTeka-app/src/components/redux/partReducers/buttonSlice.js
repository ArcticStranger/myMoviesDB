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
  },
});

export const { setButton } = buttonSlice.actions;

export default buttonSlice.reducer;