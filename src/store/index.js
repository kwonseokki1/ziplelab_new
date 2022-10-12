import { configureStore } from "@reduxjs/toolkit";
import { headerSlice } from "../slices/headerTheme";

export default configureStore({
  reducer: {
    headerSlice: headerSlice.reducer,
  },
});
