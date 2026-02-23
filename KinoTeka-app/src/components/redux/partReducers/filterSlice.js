import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    genre: false,
    year: false,
    keyword: false,
    selectedGenre: null,
    keywordQuery: "",
    alphabetSort: false,
    childRatingSort: false,
  },
  reducers: {
    setYear(state) {
      state.year = state.year ? false : true;
      state.alphabetSort = state.alphabetSort ? false : state.alphabetSort;
      state.genre = false;
      state.keyword = false;
    },
    setGenre(state) {
      state.genre = state.genre ? false : true;
      state.year = false;
      state.keyword = false;
    },
    setGenreQuery(state, action) {
      state.selectedGenre =
        state.selectedGenre && state.genre ? null : action.payload;
    },
    setKeyword(state) {
      state.keyword = state.keyword ? false : true;
      state.year = false;
      state.alphabetSort = false;
    },
    setKeywordQuery(state, action) {
      state.keywordQuery =
        state.keywordQuery && state.genre ? null : action.payload;
    },
    setAlphabetSort(state) {
      state.alphabetSort = state.alphabetSort ? false : true;
      state.year = state.year ? false : state.year;
    },
    setChildSort(state) {
      state.childRatingSort = state.childRatingSort ? false : true;
    },
  },
});

export const {
  setYear,
  setGenre,
  setGenreQuery,
  setKeyword,
  setKeywordQuery,
  setAlphabetSort,
  setChildSort,
} = filterSlice.actions;
export default filterSlice.reducer;
