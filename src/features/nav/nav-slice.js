/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const navSlice = createSlice({
  name: 'nav',
  initialState: {
    hidden: false,
    active: 'resultados',
  },
  reducers: {
    selectTab(state, action) {
      if (state.active !== action.payload) state.active = action.payload;
    },
    hideNav(state, action) {
      state.hidden = action.payload;
    },
  },
});

export const { selectTab, hideNav } = navSlice.actions;
export const selectActiveTab = (state) => state.nav.active;
export const selectHideNav = (state) => state.nav.hidden;
export default navSlice.reducer;
