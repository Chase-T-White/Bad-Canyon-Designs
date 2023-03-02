import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
  },
});
