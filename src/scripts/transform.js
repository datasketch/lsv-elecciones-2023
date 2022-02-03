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
  ASI: '#BFE32B',
  'Alianza Verde': '#03A855',
  'Cambio Radical': '#773AD8',
  'Centro Democrático': '#5ED9FF',
  'Colombia Renaciente': '#012BB3',
  'La U': '#D38733',
  'Liberal': '#DE2330',
  'Verde Oxígeno': '#00D200'
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
          color: partyColorMap[record.party] || '#eeeeee',
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
