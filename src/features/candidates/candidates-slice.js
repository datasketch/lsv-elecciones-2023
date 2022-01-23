import { createSlice } from '@reduxjs/toolkit';
import candidates from '../../data/candidates.json';

const candidatesData = candidates.map((c) => ({ ...c, highlight: true }));

const initialState = {
  all: candidatesData,
  filtered: candidatesData,
  filters: {
    department: '',
  },
};

const candidatesSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    filterByOffice(state, action) {
      const { payload } = action;
      state.filtered = candidatesData;
      Object.keys(state.filters).forEach((filterKey) => {
        const filterValue = state.filters[filterKey];
        state.filtered = highlightCandidates(
          state,
          filterKey,
          filterValue
        ).filter((c) => c.office.includes(payload));
      });
    },
    filterByDepartment(state, action) {
      const { payload } = action;
      state.filters.department = payload;
      state.filtered = highlightCandidates(state, 'department', payload);
    },
  },
});

function highlightCandidates(state, key, value) {
  return state.filtered.map((c) => ({
    ...c,
    highlight: c[key].includes(value),
  }));
}

export const { filterByOffice, filterByDepartment } = candidatesSlice.actions;

export const selectAllCandidates = (state) => state.candidates.filtered;
export const selectDepartments = (state) =>
  Array.from(
    new Set(state.candidates.all.map(({ department }) => department))
  ).sort();
export const selectOffices = (state) =>
  Array.from(new Set(state.candidates.all.map(({ office }) => office))).sort();

export default candidatesSlice.reducer;
