import { createSlice } from "@reduxjs/toolkit";


const filterSlice = createSlice({
  name: "filter",
  initialState: {
    genre: false,
    year: false,
    yearQuery: "",
    keyword: false,
    selectedGenre: null,
    keywordQuery: "",
    alphabetSort: false,
  },
  reducers: {
    setYear(state) {
      state.year = true;
      state.yearQuery = action.payload;
    },
    setGenre(state, action) {
      state.genre = true;
      state.selectedGenre = action.payload;
    },
    setKeyword(state, action) {
      state.keyword = true;
      state.keywordQuery = action.payload;
    },
    setAlphabetSort(state) {
      state.alphabetSort = true;
    },
  },
});

export const { setYear, setGenre, setKeyword } = filterSlice.actions;
export default filterSlice.reducer;