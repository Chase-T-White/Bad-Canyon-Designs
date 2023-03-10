import { createSlice } from "@reduxjs/toolkit";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    all_products: [],
    filtered_products: [],
    sort: "none",
    filters: {},
  },
  reducers: {
    sortProducts(state, action) {
      switch (action.payload) {
        case "price-lowest":
          state.filtered_products.sort((a, b) => {
            return a.price - b.price;
          });
          break;
        case "price-highest":
          state.filtered_products.sort((a, b) => {
            return b.price - a.price;
          });
          break;
        case "name-a":
          state.filtered_products.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          break;
        case "name-z":
          state.filtered_products.sort((a, b) => {
            return b.name.localeCompare(a.name);
          });
          break;

        default:
          break;
      }
    },
  },
});

export const sortActions = sortSlice.actions;

export default sortSlice;
