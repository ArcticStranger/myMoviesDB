import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
  name: "button",
  initialState: {
    hasButtonTapped: false,
    value: [],
    movieDescOpened: false,
  },
  reducers: {
    setButton(state, action) {
      state.hasButtonTapped = true;
      state.value.push(action.payload);
    },
    clearButton(state) {
      state.hasButtonTapped = false;
    },
    setDescriptionState(state) {
      state.movieDescOpened = false ? true : false;
    },
    checkDescState(state) {
      return state.movieDescOpened;
    },
  },
});

export const { setButton, clearButton, setDescriptionState, checkDescState } =
  buttonSlice.actions;

export default buttonSlice.reducer;
