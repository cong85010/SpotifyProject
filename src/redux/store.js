import { configureStore } from "@reduxjs/toolkit";
import { listSongsSlice } from "./slice/songsSlice";

export const store = configureStore({
  reducer: {
    songs: listSongsSlice.reducer,
  },
});
