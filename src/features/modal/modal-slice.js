import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  show: false,
  candidate: undefined,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    showCandidateCard(state, action) {
      state.show = true;
      state.candidate = action.payload;
    },
    closeModal(state) {
      state.show = false;
    },
  },
});

export const { showCandidateCard, closeModal } = modalSlice.actions;
export const selectModal = (state) => state.modal.show;
export const selectFeaturedCandidate = (state) => state.modal.candidate

export default modalSlice.reducer;
