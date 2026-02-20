import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "./partReducers/searchSlice.js"
import filterSlice from "./partReducers/filterSlice.js"
import buttonSlice from "./partReducers/buttonSlice.js"

export const store = configureStore({
  reducer: {
    search: searchSlice,
    filter: filterSlice,
    button: buttonSlice,
  },
})
