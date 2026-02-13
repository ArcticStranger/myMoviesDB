import { configureStore, createSlice } from "@reduxjs/toolkit";
import searchReducer from "./partReducers/searchReducer.js"
import filterReducer from "./partReducers/filterReducer.js"


export const store = configureStore({
  reducer: {
    search: searchReducer,
    filter: filterReducer,
  }
})

const searchSlice = createSlice( {
  name: 'search',
  initialState: {
      query: "",
      hasSearched: false,
  },
  reducers: {
    onSearch(state, action) {
      state.query = action.payload;
      state.hasSearched = true;
    },
    clearSearch(state) {
      state.query = "";
      state.hasSearched = false;
    },
  },
})  