import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  theme: "DARK",
};

export const headerSlice = createSlice({
  name: "headerTheme",
  initialState,
  reducers: {
    toggleColor(state, action) {
      switch (action.payload.theme) {
        case "WHITE":
          state.theme = "WHITE";
          break;
        case "DARK":
          state.theme = "DARK";
          break;
        default:
          state.theme = initialState.theme;
      }
    },
  },
});
