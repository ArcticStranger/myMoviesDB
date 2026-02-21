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
    checkYear() {
      return state.year;
    },
    checkAlphabetSort() {
      return state.alphabetSort;
    },
    setYear(state) {
      if (this.checkAlphabetSort() === true) {
      state.alphabetSort = false;
      state.year = true;
      state.yearQuery = action.payload;
      } else return;
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
      if (this.checkYear() === true) {
      state.year = false;
      state.alphabetSort = true;
      }
      else return;
    },
   
  },
});

export const { setYear, setGenre, setKeyword } = filterSlice.actions;
export default filterSlice.reducer;