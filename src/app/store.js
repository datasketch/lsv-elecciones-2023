import { configureStore } from '@reduxjs/toolkit';
import candidatesReducer from '../features/candidates/candidates-slice';
import modalReducer from '../features/modal/modal-slice';
import viewReducer from '../features/view/view-slice';
import navReducer from '../features/nav/nav-slice';

export const store = configureStore({
  reducer: {
    candidates: candidatesReducer,
    modal: modalReducer,
    view: viewReducer,
    nav: navReducer,
  },
});
