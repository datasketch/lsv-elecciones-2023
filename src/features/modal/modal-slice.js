import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMainModalWindow: false,
  showComparisonModalWindow: false,
  blocks: {
    congress: [
      ['A Presidencia apoya a', 'supportedPresidentialCandidate'],
      ['¿Ha sido condenado o investigado?', 'haveBeenConvictedOrInvestigated'],
      [
        '¿Hereda votos de condenado o investigado?',
        'inheritVotesOfConvictedOrInvestigated',
      ],
      ['Períodos en el Congreso', 'termsAsMemberOfCongress'],
      ['Ha ocupado un cargo público', 'hasHeldPublicOffice'],
      ['Sector del que viene', 'backgroundSector'],
    ],
    presidential: [
      ['Máximo de personas que ha tenido a cargo', 'maximumNumberOfDependents'],
      ['Apoyo u oposición a Gobierno Duque', 'oppositionOrSupportToGovernment'],
      ['Máximo cargo en el Ejecutivo', 'highestPositionInTheExecutive'],
      ['Despenalización total del aborto', 'decriminalizingAbortion'],
    ],
  },
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
        state.showComparisonModalWindow = true;
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
export const selectCongressCandidatesBlocks = (state) =>
  state.modal.blocks.congress;
export const selectPresidentialCandidatesBlocks = (state) =>
  state.modal.blocks.presidential;

export default modalSlice.reducer;
