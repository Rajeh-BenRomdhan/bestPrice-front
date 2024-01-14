import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./productSlice";
import userReducer from "./userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    products: productSlice
  }
})