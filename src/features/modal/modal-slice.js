import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMainModalWindow: false,
  candidate: undefined,
  showComparisonModalWindow: false,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    toggleMainModalWindow(state, action) {
      if (!action.payload) {
        state.showMainModalWindow = false;
        state.candidate = undefined;
      } else {
        state.showMainModalWindow = true;
        state.candidate = action.payload;
      }
    },
    toggleComparisonModalWindow(state) {
      state.showComparisonModalWindow = !state.showComparisonModalWindow;
    },
  },
});

export const { toggleMainModalWindow, toggleComparisonModalWindow } =
  modalSlice.actions;
export const selectMainModalWindow = (state) => state.modal.showMainModalWindow;
export const selectFeaturedCandidate = (state) => state.modal.candidate;
export const selectComparisonModalWindow = (state) =>
  state.modal.showComparisonModalWindow;

export default modalSlice.reducer;
