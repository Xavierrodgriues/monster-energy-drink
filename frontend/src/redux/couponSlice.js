import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  coupon: JSON.parse(localStorage.getItem("coupon")) || null,
};

const couponSlice = createSlice({
  name: "coupon",
  initialState,
  reducers: {
    applyCoupon: (state, action) => {
      state.coupon = action.payload;
      localStorage.setItem("coupon", JSON.stringify(action.payload));
    },
    removeCoupon: (state) => {
      state.coupon = null;
      localStorage.removeItem("coupon");
    },
  },
});

export const { applyCoupon, removeCoupon } = couponSlice.actions;
export default couponSlice.reducer;