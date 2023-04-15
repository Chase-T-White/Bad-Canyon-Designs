import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "./authSlice";
import cartReducer from "./cartSlice";
import viewReducer from "./viewSlice";
import sortReducer from "./sortSlice";
import galleryReducer from "./gallerySlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  view: viewReducer,
  sort: sortReducer,
  gallery: galleryReducer,
});

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["view", "sort", "gallery"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
