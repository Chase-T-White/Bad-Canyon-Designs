import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import viewSlice from "./viewSlice";
import sortSlice from "./sortSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
    auth: authSlice.reducer,
    cart: cartSlice.reducer,
    view: viewSlice.reducer,
    sort: sortSlice.reducer,
  },
});
