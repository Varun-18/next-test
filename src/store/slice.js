import { createSlice } from "@reduxjs/toolkit";
import { HYDRATE } from "next-redux-wrapper";

const state = {
  keyword: "no keyword",
  random: "random message",
};

const slice = createSlice({
  name: "mainSlcie",
  initialState: state,
  reducers: {
    updateMessage: (state, action) => {
      return { ...state, random: action.payload };
    },
    addKeyword: (state, action) => {
      return { ...state, keyword: action.payload };
    },
  },
//   extraReducers: {
//     [HYDRATE]: (state, action) => {
//       console.log("HYDRATE----***----", state);
//       return {
//         ...state,
//         ...action.payload.state,
//       };
//     },
//   },
});

export default slice.reducer;
export const { updateMessage, addKeyword } = slice.actions;
