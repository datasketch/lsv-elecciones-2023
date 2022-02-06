import { createSlice } from '@reduxjs/toolkit';

const viewSlice = createSlice({
  name: 'view',
  initialState: {
    grid: true,
  },
  reducers: {
    toggleView(state, action) {
      state.grid = action.payload;
    },
  },
});

export const { toggleView } = viewSlice.actions;
export const selectGridView = (state) => state.view.grid;
export default viewSlice.reducer;
