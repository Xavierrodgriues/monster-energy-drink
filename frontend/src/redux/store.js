// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import cartReducer from "./CartSlice";
export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer,
  },
});
