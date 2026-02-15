import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./partReducers/searchSlice.js"
import filterSlice from "./partReducers/filterSlice.js"


export const store = configureStore({
  reducer: {
    search: searchSlice,
    filter: filterSlice,
  },
})
