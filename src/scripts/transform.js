const { writeFile } = require('fs').promises;
const path = require('path');
const slugify = require('slugify');
const mapper = require('./mapper');
const rawCongress = require('../data/raw-congress.json');
const rawPresidential = require('../data/raw-presidential.json');
const {
  partyColorMap,
  haveBeenConvictedOrInvestigated,
  inheritVotesOfConvictedOrInvestigated,
} = require('./utils');

function compareFunction(key) {
  return (a, b) => {
    if (a[key] > b[key]) return 1;
    if (a[key] < b[key]) return -1;
    return 0;
  };
}

const sortByElectoralNumber = compareFunction('electoralNumber');

function mapValues(data) {
  return data.map((record) => {
    return Object.keys(record).reduce((result, key) => {
      result[mapper[key]] = record[key];
      return result;
    }, {});
  });
}

(async () => {
  try {
    const congress = mapValues(rawCongress)
      .map((record) => {
        const { name, firstLastName, secondLastName } = record;
        const fullname = [name, firstLastName, secondLastName].join(' ').trim();
        const getGroupAge = (str) => {
          const match = str.slice(0).replace(/\D/g, '')
          if (match.length === 2) return str
          return `${match.substring(0, 2)} - ${match.substring(2)}`
        }
        return {
          ...record,
          fullname,
          id: slugify(fullname, { lower: true }),
          position: record.position.toLowerCase(),
          supportedPresidentialCandidate:
            record.supportedPresidentialCandidate || 'Sin datos',
          // Custom fields
          party: {
            label: record.party,
            color: partyColorMap[record.party] || partyColorMap.Otro,
          },
          haveBeenConvictedOrInvestigated:
            haveBeenConvictedOrInvestigated(record),
          inheritVotesOfConvictedOrInvestigated:
            inheritVotesOfConvictedOrInvestigated(record),
          redflags: [
            record.firstRedflag,
            record.secondRedflag,
            record.thirdRedflag,
          ].filter((redflag) => redflag),
          age: record.age.toLowerCase() === 'sin datos' ? record.age : getGroupAge(record.age)
        };
      })
      .filter((record) => record.id)
      .sort(sortByElectoralNumber);

    const presidential = mapValues(rawPresidential).map((record) => {
      const { name, firstLastName, secondLastName } = record;
      const fullname = [name, firstLastName, secondLastName].join(' ').trim();
      return {
        ...record,
        fullname,
        id: slugify(fullname, { lower: true }),
        party: {
          label: record.coalition,
          color: partyColorMap[record.coalition] || partyColorMap.Otro,
        },
      };
    });

    const candidatesFile = path.resolve(
      process.cwd(),
      'src/data/candidates.json'
    );
    const presidentialFile = path.resolve(
      process.cwd(),
      'src/data/presidential.json'
    );
    await writeFile(candidatesFile, JSON.stringify(congress));
    await writeFile(presidentialFile, JSON.stringify(presidential));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
