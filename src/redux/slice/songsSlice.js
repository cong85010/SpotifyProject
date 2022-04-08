import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { child, get, ref } from "firebase/database";
import { database } from "../../firebase";
export const getlistSongs = createAsyncThunk("songs", async (_, thunkAPI) => {
  const response = get(child(ref(database), "songs"))
    .then((snapshot) => {
      return snapshot.val();
    })
    .catch((e) => {
      console.error(e);
    });
  const value = await response;
  if (value == null) {
    return thunkAPI.reject({ status: 404, message: "FAIL" });
  }
  return value;
});

export const listSongsSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [
      {
        author: "",
        id: "",
        links: "",
        name: "",
        url: "",
      },
    ],
  },
  //sync
  reducers: {},
  //Async
  extraReducers: {
    [getlistSongs.fulfilled]: (state, action) => {
      return { songs: action.payload };
    },
    [getlistSongs.rejected]: (state, action) => {
      return action.payload;
    },
  },
});

export const songsSelector = (state) => state.songs;
