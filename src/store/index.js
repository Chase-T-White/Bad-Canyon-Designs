import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import counterReducer from "./counterSlice";
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

// // convert object to string and store in localStorage
// function saveToLocalStorage(state) {
//   try {
//     const serialisedState = JSON.stringify(state);
//     localStorage.setItem("persistantState", serialisedState);
//   } catch (e) {
//     console.warn(e);
//   }
// }

// // load string from localStarage and convert into an Object
// // invalid output must be undefined
// function loadFromLocalStorage() {
//   try {
//     const serialisedState = localStorage.getItem("persistantState");
//     if (serialisedState === null) return undefined;
//     return JSON.parse(serialisedState);
//   } catch (e) {
//     console.warn(e);
//     return undefined;
//   }
// }

export default configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
});
