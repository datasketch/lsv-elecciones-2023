const { writeFile } = require('fs').promises;
const path = require('path');
const slugify = require('slugify');
const mapper = require('./mapper');
const raw = require('../data/raw.json');

function compareFunction(key) {
  return (a, b) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  };
}

const sortByElectoralNumber = compareFunction('electoralNumber');

const partyColorMap = {
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

(async () => {
  try {
    const data = raw
      .slice(0, 144)
      .map((record) => {
        return Object.keys(record).reduce((result, key) => {
          result[mapper[key]] = record[key];
          return result;
        }, {});
      })
      .map((record) => {
        const { name, firstLastName, secondLastName } = record;
        const fullname = [name, firstLastName, secondLastName].join(' ').trim();
        return {
          ...record,
          id: slugify(fullname, { lower: true }),
          position: record.position.toLowerCase(),
          party: {
            label: record.party,
            color: partyColorMap[record.party] || partyColorMap.Otro,
          },
          supportedPresidentialCandidate:
            record.supportedPresidentialCandidate || 'Sin datos',
          fullname,
        };
      })
      .filter((record) => record.id)
      .sort(sortByElectoralNumber);
    const candidatesFile = path.resolve(
      process.cwd(),
      'src/data/candidates.json'
    );
    await writeFile(candidatesFile, JSON.stringify(data));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
