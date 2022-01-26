import { configureStore } from '@reduxjs/toolkit';
import candidatesReducer from '../features/candidates/candidates-slice';
import modalReducer from '../features/modal/modal-slice';

export const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
    modal: modalReducer,
  },
});
