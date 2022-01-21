import { createSlice } from "@reduxjs/toolkit";
import candidates from "../../data/candidates.json";

const initialState = {
  all: candidates,
  filtered: candidates,
  filters: {
    office: "",
    department: "",
  },
};

const candidatesSlice = createSlice({
  name: "candidates",
  initialState,
  reducers: {
    filterByOffice(state, action) {
      filter(state, action, "office");
    },
    filterByDepartment(state, action) {
      filter(state, action, "department");
    },
  },
});

function filter(state, action, key) {
  state.filters[key] = action.payload;
  state.filtered = state.all;
  Object.keys(state.filters).forEach((filterKey) => {
    const filterValue = state.filters[filterKey];
    if (filterValue) {
      state.filtered = state.filtered.filter(
        (record) => record[filterKey] === filterValue
      );
    }
  });
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
