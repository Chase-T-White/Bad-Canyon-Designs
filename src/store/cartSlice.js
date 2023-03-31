import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    itemsList: [],
    amount: 0,
    total: 0,
    isLoading: true,
  },
  reducers: {
    addToCart(state, action) {
      const newItem = action.payload;
      const existingItem = state.itemsList.find(
        (item) => item.id === newItem.id
      );

      if (existingItem) {
        existingItem.quantity++;
        state.total += existingItem.price;
        state.amount++;
      } else {
        state.itemsList.push(newItem);
        state.total += newItem.price;
        state.amount++;
      }
    },
    removeFromCart(state, action) {
      state.amount -= action.payload.quantity;
      state.total -= action.payload.price * action.payload.quantity;
      state.itemsList = state.itemsList.filter((item) => {
        return item.id !== action.payload.id;
      });
    },
    clearCart(state) {
      state.itemsList = [];
      state.amount = 0;
      state.total = 0;
    },
  },
});

export const cartActions = cartSlice.actions;

export default cartSlice;
