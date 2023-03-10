import { createSlice } from "@reduxjs/toolkit";

const viewSlice = createSlice({
  name: "view",
  initialState: {
    gridView: true,
  },
  reducers: {
    gridView(state) {
      state.gridView = true;
    },
    listView(state) {
      state.gridView = false;
    },
  },
});

export const viewActions = viewSlice.actions;

export default viewSlice;
