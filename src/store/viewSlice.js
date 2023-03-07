import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "view",
  initialState: {
    gridView: true,
  },
  reducers: {
    isGridView(state) {
      state.gridView = true;
    },
    isNotGridView(state) {
      state.gridView = false;
    },
  },
});

export const viewActions = viewSlice.actions;

export default viewSlice;
