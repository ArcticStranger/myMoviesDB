import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    hasSearched: false,
  },
  reducers: {
    setText(state, action) {
      state.query = action.payload;
    },
    setQuery(state, action) {
      state.query = action.payload;
      state.hasSearched = true;
    },
    clearQuery(state) {
      state.query = "";
      state.hasSearched = false;
    },
    checkQuery(state) {
      state.query = state.query ? state.query : "";
    },
  },
});

export const { setText, setQuery, clearQuery } = searchSlice.actions;
export default searchSlice.reducer;
