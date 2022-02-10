export const partyColorMap = {
  Liberal: '#cf2a24',
  Conservador: '#012bb3',
  Mira: '#202c54',
  'Colombia Justa Libres': '#202c54',
  'Nuevo Liberalismo': '#aa1a1a',
  'La U': '#ff9900',
  'Cambio Radical': '#4a4297',
  'Centro Esperanza': '#75297c',
  'Alianza Verde': '#03a855',
  'Centro Democrático': '#2a94ff',
  Comunes: '#300202',
  'Estamos listas': '#be8741',
  'Pacto Histórico': '#fc00bb',
  Otro: '#3d3d3d',
};

export const haveBeenConvictedOrInvestigated = (candidate) => {
  if (
    candidate.hasBeenConvicted === 'No' &&
    candidate.hasBeenInvestigated === 'No'
  )
    return 'No';
  else if (
    candidate.hasBeenInvestigated === 'Sí' &&
    candidate.hasBeenConvicted === 'Sí'
  )
    return 'Ambas';
  else if (candidate.hasBeenInvestigated === 'Sí') return 'Investigado';
  else if (candidate.hasBeenConvicted === 'Sí') return 'Condenado';
};

export const inheritVotesOfConvictedOrInvestigated = (candidate) => {
  if (
    candidate.heirToDoomedVows === 'No' &&
    candidate.heirToVotesUnderInvestigation === 'No'
  )
    return 'No';
  else if (
    candidate.heirToDoomedVows === 'Sí' &&
    candidate.heirToDoomedVows === 'Sí'
  )
    return 'Ambas';
  else if (candidate.heirToDoomedVows === 'Sí') return 'De condenado';
  else if (candidate.heirToVotesUnderInvestigation === 'Sí')
    return 'De investigado';
};
