import { createSlice } from '@reduxjs/toolkit';
import candidates from '../../data/presidential.json';

const presidentialSlice = createSlice({
  name: 'presidential',
  initialState: {
    all: candidates,
    grouped: candidates.reduce((result, candidate) => {
      result[candidate.coalition] = result[candidate.coalition] || [];
      result[candidate.coalition].push(candidate);
      return result;
    }, {}),
  },
});

export const selectPresidentialCandidatesWithCoalition = (state) => {
  return {
    'Pacto Histórico': state.presidential.all.filter(
      (c) => c.coalition === 'Pacto Histórico'
    ),
    'Centro Esperanza': state.presidential.all.filter(
      (c) => c.coalition === 'Centro Esperanza'
    ),
    'Equipo por Colombia': state.presidential.all.filter(
      (c) => c.coalition === 'Equipo por Colombia'
    ),
  };
};

export const selectPresidentialCandidatesWithoutCoalition = (state) =>
  state.presidential.all.filter((c) => c.coalition === 'No consulta');

export default presidentialSlice.reducer;
