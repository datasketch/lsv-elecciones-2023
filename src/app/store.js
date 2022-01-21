import { configureStore } from "@reduxjs/toolkit";
import candidatesReducer from "../features/candidates/candidates-slice";

export const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
  },
});
