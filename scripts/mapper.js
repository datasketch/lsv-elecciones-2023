const mapper = {
  'Apellido 1': 'firstLastName',
  'Apellido 2': 'secondLastName',
  Nombres: 'name',
  Departamento: 'department',
  TipoDoc: 'docType',
  Número: 'docNumber',
  'Perfil de quien es quien': 'externalProfileURL',
  Twitter: 'twitterHandle',
  'Página web': 'website',
  'Correo electrónico': 'email',
  'Votos más recientes': 'recentVotes',
  'En qué elección sacó los votos más recientes': 'electionOfRecentVotes',
  'Año de nacimiento': 'yearOfBirth',
  Cámara: 'office',
  Género: 'gender',
  Comisión: 'commission',
  Partido: 'party',
  'Número en el tarjetón': 'electoralNumber',
  'Posición iz/der': 'position',
  'Subregión provincia o localidad': 'province',
  'Profesión u oficio': 'profession',
  'Estudios más altos': 'higherDegree',
  'Sector del que viene': 'backgroundSector',
  'Experto en': 'areaOfExpertise',
  'Ha sido condenado': 'hasBeenConvicted',
  'Ha sido investigado': 'hasBeenInvestigated',
  'Ha sido destituido': 'hasBeenDismissed',
  'Ha sido congresista': 'hasBeenMemberOfCongress',
  'Períodos como congresista': 'termsAsMemberOfCongress',
  'Ha sido gobernador': 'hasBeenGovernor',
  'Ha sido diputado': 'hasBeenDeputy',
  'Ha sido alcalde': 'hasBeenMayor',
  'Ha sido concejal': 'hasBeenCityCouncillor',
  'Había sido candidato a cargos de elección popular':
    'hasBeenCandidateForElectedOffice',
  'Ha estado en más de dos partidos': 'hasBeenInMoreThanTwoParties',
  'Ha ocupado un cargo público': 'hasHeldPublicOffice',
  'Heredero de votos de condenados': 'heirToDoomedVows',
  'Heredero de votos de investigados': 'heirToVotesUnderInvestigation',
  Cuestionado: 'questioned',
  'Tiene familiar en la política': 'hasFamilyInPolitics',
  'Es heredero político': 'isPoliticalHeir',
  Perfilito: 'profile',
  Foto: 'photo',
  'Busca reelección': 'seeksReelection',
  'Salto Camara - Senado': 'fromChamberToSenate',
  'Precandidato que apoyaba': 'supportedPrecandidate',
  'Candidato presidencial que apoya': 'supportedPresidentialCandidate',
  'Bandera 1': 'firstRedflag',
  'Bandera 2': 'secondRedflag',
  'Bandera 3': 'thirdRedflag',
  'Es afro': 'isAfro',
  'Fórmula al Senado': 'senateFormula',
  'Fórmula a la Cámara 1': 'firstChamberFormula',
  'Fórmula a la Cámara 2': 'secondChamberFormula',
  'Fórmula a la Cámara 3': 'thirdChamberFormula',
  Edad: 'age',
  'Nivel de estudios': 'educationalLevel',
  'Tiene líos o cuestionamientos': 'hasQuestioning',
  'Tiene experiencia en el Estado': 'hasExperienceInNation',
  'Es de una minoría': 'belongsToMinority',
  'Grupo que representa': 'groupThatRepresents',
  Circunscripción: 'district',
  'Ha recibido amenazas': 'hasReceivedThreats',
  'Tipo de circunscripción': 'districtType',
  'Pendiente': 'pending',
  // Presidential specific
  'Mentiras y verdades chequeadas': 'liesAndVerifiedTruths',
  Consulta: 'coalition',
  Aval: 'guarantee',
  'Lugar de nacimiento': 'placeOfBirth',
  'Ha sido gobernador o alcalde': 'hasBeenGovernorOrMayor',
  'Se había lanzado antes a la Presidencia': 'hadPreviouslyRunForThePresidency',
  'Voto en el plebiscito': 'voteInThePlebiscite',
  'Despenalizar el aborto': 'decriminalizingAbortion',
  'Máximo de personas a su cargo': 'maximumNumberOfDependents',
  'Responsabilidad de decisiones determinantes para el país':
    'responsibilityForDecisiveDecisionsForTheCountry',
  'Oposición o apoyo Gobierno Duque': 'oppositionOrSupportToGovernment',
  'Subir el impuesto al patrimonio': 'raisingTheWealthTax',
  'Máximo cargo en el Ejecutivo': 'highestPositionInTheExecutive',
  'Máximo cargo en el sector privado': 'highestPositionInThePrivateSector',
  'Apoyó el Paro': 'supportedTheStrike',
  'Obligar a funcionarios públicos a vacunarse':
    'forcingPublicOfficialsToGetVaccinated',
  'Favorabilidad con la que terminó el más alto y reciente cargo ejecutivo':
    'mostRecentFavorability',
};

export default mapper
