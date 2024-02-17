"use client";
import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";
const initialState = {
  page: 0,
};

const globalState = createSlice({
  name: "global",
  initialState,
  reducers: {
    setPageNo: (state, action: PayloadAction<number>) => {
      state.page = action.payload;
    },
  },
});

export const { setPageNo } = globalState.actions;
export default globalState.reducer;
