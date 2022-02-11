export const partyColorMap = {
  'Colombia Humana': '#FA00B9',
  'ADA': '#FA487D',
  'Mais': '#FF7474',
  'Centro Esperanza': '#75297C',
  'Dignidad': '#BA427B',
  'Equipo por Colombia': '#0F52B8',
  Conservador: '#012BB1',
  Liberal: '#EB1515',
  'Alianza Verde': '#03A655',
  'Verde Oxígeno': '#B1DA42',
  'La U': '#FF9700',
  'Cambio Radical': '#4a4297',
  'Nuevo Liberalismo': '#A81A1A',
  'Colombia Justa Libres': '#AF4D13',
  Mira: '#202C54',
  'Centro Democrático': '#2A92FF',
  'Estamos listas': '#BC8541',
  Comunes: '#300202',
  'Polo Democrático': '#F0DC00',
  // 'Pacto Histórico': '#fc00bb',
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
