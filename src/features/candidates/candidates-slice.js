import { createSlice } from '@reduxjs/toolkit';
import { createSelector } from 'reselect';
import candidates from '../../data/candidates.json';

const candidatesData = candidates.map((c) => ({ ...c, highlight: true }));

const initialState = {
  all: candidatesData,
  filtered: candidatesData,
  filters: {
    department: '',
    party: '',
    supportedPresidentialCandidate: '',
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
    filterBySupportedCandidatePresidential(state, action) {
      const { payload } = action;
      state.filters.supportedPresidentialCandidate = payload;
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

const getCategories = (data, key) =>
  Array.from(new Set(data.map((record) => record[key]).sort()));

export const {
  filterByOffice,
  filterByDepartment,
  filterByParty,
  filterBySupportedCandidatePresidential,
} = candidatesSlice.actions;

export const selectAllCandidates = (state) => {
  const groups = state.candidates.filtered.reduce((result, candidate) => {
    result[candidate.position] = result[candidate.position] || [];
    result[candidate.position].push(candidate);
    return result;
  }, {});
  return {
    izquierda: groups.izquierda,
    centro: [
      ...groups.centroizquierda,
      ...groups.centro,
      ...groups.centroderecha,
    ],
    derecha: groups.derecha,
  };
};

export const selectHighlightedCandidates = (state) =>
  state.candidates.filtered.filter(({ highlight }) => highlight);

export const selectDepartments = (state) =>
  getCategories(state.candidates.all, 'department');

export const selectOffices = (state) =>
  getCategories(state.candidates.all, 'office');

export const selectParties = (state) =>
  getCategories(state.candidates.all, 'party');

export const selectSupportedPresidentialCandidate = (state) =>
  getCategories(state.candidates.all, 'supportedPresidentialCandidate');

export const selectSectors = (state) =>
  getCategories(state.candidates.all, 'backgroundSector');

export const selectCandidateById = createSelector(
  (state) => state.candidates.all,
  (_, id) => id,
  (candidates, id) => candidates.find((c) => c.id === id)
);

export default candidatesSlice.reducer;
