// store.js
import { configureStore } from "@reduxjs/toolkit";
import dataReducer from "./dataSlice";
import cartSlice from "./cartSlice";

const store = configureStore({
  reducer: {
    data: dataReducer,
    cart: cartSlice,
  },
});

export default store;
