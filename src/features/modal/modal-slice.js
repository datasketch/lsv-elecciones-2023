import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMainModalWindow: false,
  showComparisonModalWindow: false,
  candidates: {
    main: '',
    secondary: '',
  },
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleMainModalWindow(state, action) {
      if (!action.payload) {
        state.showMainModalWindow = false;
        state.candidates.main = undefined;
        state.candidates.secondary = undefined;
        state.showComparisonModalWindow = false;
      } else {
        state.showMainModalWindow = true;
        state.candidates.main = action.payload;
      }
    },
    toggleComparisonModalWindow(state) {
      state.showComparisonModalWindow = !state.showComparisonModalWindow;
      state.candidates.secondary = undefined;
    },
    setSecondaryCandidate(state, action) {
      if (!state.showComparisonModalWindow) {
        state.showComparisonModalWindow = true
      }
      state.candidates.secondary = action.payload;
    },
  },
});

export const {
  toggleMainModalWindow,
  toggleComparisonModalWindow,
  setSecondaryCandidate,
} = modalSlice.actions;
export const selectMainModalWindow = (state) => state.modal.showMainModalWindow;
export const selectMainCandidate = (state) => state.modal.candidates.main;
export const selectSecondaryCandidate = (state) =>
  state.modal.candidates.secondary;
export const selectComparisonModalWindow = (state) =>
  state.modal.showComparisonModalWindow;

export default modalSlice.reducer;
