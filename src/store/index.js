import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import userReducer from "./userSlice";
import cartSlice from "./cartSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productSlice,
    cart: cartSlice
  }
})