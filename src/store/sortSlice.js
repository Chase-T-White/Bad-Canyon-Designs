import { createSlice } from "@reduxjs/toolkit";
import products from "../data/products.json";
import categories from "../data/productFields.json";

const sortSlice = createSlice({
  name: "sort",
  initialState: {
    all_products: products,
    filtered_products: products,
    sort: "none",
    filter: "none",
    subCategories: [],
    subFiltered_products: [],
    featured_products: [],
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
      if (action.payload !== "none") {
        const categoryDetails = categories.find((category) => {
          return category.category === action.payload;
        });
        state.subCategories = categoryDetails.subcategories;
      } else {
        state.subCategories = [];
      }

      if (action.payload === "none") {
        state.filtered_products = state.all_products;
      } else {
        state.filtered_products = state.filtered_products.filter((product) => {
          return product.category === state.filter;
        });
        state.subFiltered_products = state.filtered_products;
      }
    },
    filterSubProducts(state, action) {
      if (action.payload.toLowerCase() === "all") {
        state.filtered_products = state.subFiltered_products;
      } else {
        state.filtered_products = state.subFiltered_products;
        state.filtered_products = state.filtered_products.filter((product) => {
          return product.subcategory === action.payload;
        });
      }
    },
    pullFeaturedProducts(state) {
      state.featured_products = state.all_products.filter((product) => {
        return product.featured === true;
      });
    },
  },
});

export const sortActions = sortSlice.actions;

export default sortSlice.reducer;
