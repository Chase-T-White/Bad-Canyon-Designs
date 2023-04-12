import { createSlice } from "@reduxjs/toolkit";
import gallery from "../data/gallery.json";

const gallerySlice = createSlice({
  name: "gallery",
  initialState: {
    fullGallery: gallery,
    subGallery: null,
    artPiece: null,
    showModal: false,
    modalArt: [],
  },
  reducers: {
    setSubGallery(state, action) {
      const { category } = action.payload;
      state.subGallery = state.fullGallery[0][category];
    },
    filterArtPiece(state, action) {
      const { category, id } = action.payload;
      state.artPiece = state.fullGallery[0][category].find((artPiece) => {
        return artPiece.id === id;
      });
    },
    handleClose(state) {
      state.showModal = false;
    },
    handleShow(state, action) {
      const { category, title } = action.payload;
      const pullModalArt = state.fullGallery[0][category].find((artPiece) => {
        return artPiece.title === title;
      });
      state.modalArt = pullModalArt;
      state.showModal = true;
    },
  },
});

export const galleryActions = gallerySlice.actions;

export default gallerySlice.reducer;
