import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products.json";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    all_products: products,
    filtered_products: products,
    sort: "none",
    filter: "none",
    subCategories: [],
  },
  reducers: {
    sortProducts(state, action) {
      switch (action.payload) {
        case "none":
          state.filtered_products = state.all_products;
          break;
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
    filterProducts(state, action) {
      state.filter = action.payload;
      switch (action.payload) {
        case "none":
          state.filtered_products = state.all_products;
          break;
        case "Phone Cases":
          state.filtered_products = state.filtered_products.filter(
            (product) => {
              console.log(product.category);
              return product.category === state.filter;
            }
          );
          break;
      }
    },
    filterSubProducts(state, action) {
      return state.filtered_products.filter((product) => {
        return product.action.payload === 
      })
    },
  },
});

export const sortActions = sortSlice.actions;

export default sortSlice;
