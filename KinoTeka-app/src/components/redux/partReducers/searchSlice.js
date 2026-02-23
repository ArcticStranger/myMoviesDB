import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    hasSearched: false,
  },
  reducers: {
    setQuery(state, action) {
      state.query = action.payload;
      state.hasSearched = true;
    },
    clearQuery(state) {
      state.query = "";
      state.hasSearched = false;
    },
  },
});

export const { setQuery, clearQuery } = searchSlice.actions;
export default searchSlice.reducer;
