import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.itemsList.push(newItem);
      }
    },
    removeFromCart() {},
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
