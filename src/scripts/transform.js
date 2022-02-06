const { writeFile } = require('fs').promises;
const path = require('path');
const slugify = require('slugify');
const mapper = require('./mapper');
const raw = require('../data/raw.json');
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
