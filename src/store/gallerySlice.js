import { createSlice } from "@reduxjs/toolkit";
import gallery from "../data/gallery.json";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    fullGallery: gallery,
  },
  reducers: {},
});

export const galleryActions = gallerySlice.actions;

export default gallerySlice;
