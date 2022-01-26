import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect'
import candidates from '../../data/candidates.json';

const candidatesData = candidates.map((c) => ({ ...c, highlight: true }));

const initialState = {
  all: candidatesData,
  filtered: candidatesData,
  filters: {
    department: '',
    party: '',
  },
};

const candidatesSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    filterByOffice(state, action) {
      const { payload } = action;
      state.filtered = candidatesData;
      state.filtered = state.filtered.filter((c) => c.office.includes(payload));
      // TODO: optimize
      state.filtered = highlightCandidates(state);
    },
    filterByDepartment(state, action) {
      const { payload } = action;
      state.filters.department = payload;
      state.filtered = highlightCandidates(state);
    },
    filterByParty(state, action) {
      const { payload } = action;
      state.filters.party = payload;
      state.filtered = highlightCandidates(state);
    },
  },
});

function highlightCandidates(state) {
  return state.filtered.map((c) => ({
    ...c,
    highlight: Object.entries(state.filters).every(([filterKey, filterValue]) =>
      c[filterKey].includes(filterValue)
    ),
  }));
}

export const { filterByOffice, filterByDepartment, filterByParty } =
  candidatesSlice.actions;

export const selectAllCandidates = (state) => state.candidates.filtered;

export const selectHighlightedCandidates = (state) =>
  state.candidates.filtered.filter(({ highlight }) => highlight);

export const selectDepartments = (state) =>
  Array.from(
    new Set(state.candidates.all.map(({ department }) => department))
  ).sort();

export const selectOffices = (state) =>
  Array.from(new Set(state.candidates.all.map(({ office }) => office))).sort();

export const selectParties = (state) =>
  Array.from(new Set(state.candidates.all.map(({ party }) => party))).sort();

export const selectCandidateById = createSelector(
  state => state.candidates.all,
  (_, id) => id,
  (candidates, id) => candidates.find(c => c.id === id)
)

export default candidatesSlice.reducer;
