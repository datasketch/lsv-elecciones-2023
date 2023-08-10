/* eslint-disable no-param-reassign */
// eslint-disable-next-line import/no-extraneous-dependencies
import { createSelector } from 'reselect';
import { createSlice } from '@reduxjs/toolkit';
import candidates from '../../data/data.json';

const candidatesData = candidates.map((c) => ({ ...c, highlight: true }));
const EXCLUDE_COLOR = '#3d3d3d';

const initialState = {
  all: candidatesData,
  filtered: candidatesData,
  ageRanges: Array.from(
    new Set(
      candidatesData.reduce(
        (result, candidate) => [...result, candidate.ageRange],
        [],
      ),
    ),
  ).sort(),
  filters: {
    fullname: '',
    department: '',
    city: '',
    candidacy: '',
    gender: '',
    backgroundSector: '',
    ageRange: '',
    troublesOrQuestions: '',
    positionAgainstThePetroGovernment: '',
    hasHeldPublicOffice: '',
  },
};

function normalizeStr(str) {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function highlightCandidates(state) {
  return state.filtered.map((c) => ({
    ...c,
    highlight: Object.entries(state.filters).every(
      ([filterKey, filterValue]) => {
        const candidateValue = c[filterKey];
        if (Array.isArray(filterValue)) { return filterValue.includes(candidateValue); }
        return typeof candidateValue === 'object'
          ? candidateValue.label.includes(filterValue)
          : normalizeStr(candidateValue).includes(normalizeStr(filterValue));
      },
    ),
  }));
}

const candidatesSlice = createSlice({
  name: 'candidates',
  initialState,
  reducers: {
    filterByDepartment(state, action) {
      state.filters.department = action.payload;
      state.filtered = highlightCandidates(state);
    },
    filterByCity(state, action) {
      state.filters.city = action.payload;
      state.filtered = highlightCandidates(state);
    },
    filterByCandidacy(state, action) {
      state.filters.candidacy = action.payload;
      state.filtered = highlightCandidates(state);
    },
    filterBySearch(state, action) {
      state.filters.fullname = action.payload.trim();
      state.filtered = highlightCandidates(state);
    },
    filterGroup(state, action) {
      // Should we reset these filters here?
      state.filters.gender = '';
      state.filters.backgroundSector = '';
      state.filters.ageRange = '';
      state.filters.troublesOrQuestions = '';
      state.filters.positionAgainstThePetroGovernment = '';
      state.filters.hasHeldPublicOffice = '';
      Object.entries(action.payload).forEach(([key, value]) => {
        state.filters[key] = value;
      });
      state.filtered = highlightCandidates(state);
    },
  },
});

const getCategories = (data, key) => Array.from(
  new Set(
    data
      .map((record) => record[key])
      .filter((r) => r)
      .sort(),
  ),
);

export const {
  filterByOffice,
  filterByDepartment,
  filterByParty,
  filterBySupportedCandidatePresidential,
  filterGroup,
  filterBySearch,
  filterByPending,
  filterByCity,
  filterByCandidacy,
} = candidatesSlice.actions;

export const selectAllCandidates = (state) => {
  const groups = state.candidates.filtered.reduce((result, candidate) => {
    result[candidate.position] = result[candidate.position] || [];
    result[candidate.position].push(candidate);
    return result;
  }, {});
  return {
    izquierda: groups.izquierda,
    centroizquierda: groups.centroizquierda,
    centro: groups.centro,
    centroderecha: groups.centroderecha,
    derecha: groups.derecha,
  };
};

export const selectHighlightedCandidates = (state) => state.candidates.filtered
  .filter(({ highlight }) => highlight);

export const selectDepartments = (state) => getCategories(state.candidates.all, 'department');

export const selectCities = (state) => getCategories(state.candidates.all, 'city');

export const selectCandidacies = (state) => getCategories(state.candidates.all, 'candidacy');

export const selectSectors = (state) => getCategories(state.candidates.all, 'backgroundSector');

export const selectGender = (state) => getCategories(state.candidates.all, 'gender');

export const selectAgeRanges = (state) => state.candidates.ageRanges;

export const selectTroublesOrQuestions = (state) => getCategories(state.candidates.all, 'troublesOrQuestions');

export const selectPositionAgainstThePetroGovernment = (state) => getCategories(state.candidates.all, 'positionAgainstThePetroGovernment');

export const selectHasHeldPublicOffice = (state) => getCategories(state.candidates.all, 'hasHeldPublicOffice');

export const selectOffices = (state) => getCategories(state.candidates.all, 'office');

export const selectParties = (state) => Array.from(
  new Set(state.candidates.all.map(({ party }) => party.label).sort()),
);

export const selectPartiesWithColor = (state) => state.candidates.all.reduce((list, candidate) => {
  const { label, color } = candidate.party;
  if (list[label]) return list;
  if (color === EXCLUDE_COLOR) {
    list.Otro = EXCLUDE_COLOR;
    return list;
  }
  list[label] = color;
  return list;
}, {});

export const selectSupportedPresidentialCandidate = (state) => getCategories(state.candidates.all, 'supportedPresidentialCandidate');

export const selectSortedCongressCandidates = (state) => state.candidates.filtered
  .slice()
  .sort((a, b) => {
    if (a.fullname.toLowerCase() > b.fullname.toLowerCase()) return 1;
    if (a.fullname.toLowerCase() < b.fullname.toLowerCase()) return -1;
    return 0;
  });

export const selectCandidatesTo = (state) => getCategories(state.candidates.all, 'pending');

export const selectCandidateById = createSelector(
  (state) => state.candidates.all,
  (_, id) => id,
  (_candidates, id) => _candidates.find((c) => c.id === id),
);

export default candidatesSlice.reducer;
