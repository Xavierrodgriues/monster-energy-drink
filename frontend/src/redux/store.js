// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import filtersReducer from "./filtersSlice";
import cartReducer from "./CartSlice";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from "../utils/persistCart";
import couponReducer  from "./couponSlice";

const preloadedState = {
  cart: {
    cartItems: loadCartFromLocalStorage(),
  },
};

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    cart: cartReducer,
    coupon: couponReducer
  },
  preloadedState,
});


// 🔁 Subscribe to changes and save to localStorage
store.subscribe(() => {
  const { cartItems } = store.getState().cart;
  saveCartToLocalStorage(cartItems);
});