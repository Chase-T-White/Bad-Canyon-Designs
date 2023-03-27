import { createSlice } from "@reduxjs/toolkit";
import gallery from "../data/gallery.json";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    fullGallery: gallery,
    subGallery: null,
    artPiece: null,
  },
  reducers: {
    filterArtPiece(state, action) {
      const { category, id } = action.payload;
      state.artPiece = state.fullGallery[0][category].find((artPiece) => {
        return artPiece.id === id;
      });
    },
  },
});

export const galleryActions = gallerySlice.actions;

export default gallerySlice;