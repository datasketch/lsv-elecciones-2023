import { writeFile, readFile } from 'fs/promises';
import path from 'path';
import slugify from 'slugify';
import mapper from './mapper.js';
import { partyColorMap, haveBeenConvictedOrInvestigated, inheritVotesOfConvictedOrInvestigated } from './utils.js'

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
      const k = key.trim()
      result[mapper[k]] = record[k];
      return result;
    }, {});
  });
}

(async () => {
  try {
    const rawCongress = await readFile(path.join(process.cwd(), '..', 'src', 'data', 'raw-congress.json'), 'utf8')
    const rawPresidential = await readFile(path.join(process.cwd(), '..', 'src', 'data', 'raw-presidential.json'), 'utf8')
    const congress = mapValues(JSON.parse(rawCongress))
      .map((record) => {
        const { name, firstLastName, secondLastName } = record;
        const fullname = [name, firstLastName, secondLastName].join(' ').trim();
        const getGroupAge = (str) => {
          const match = str.slice(0).replace(/\D/g, '');
          if (match.length === 2) return str;
          return `${match.substring(0, 2)} - ${match.substring(2)}`;
        };
        return {
          ...record,
          fullname,
          id: slugify(fullname, { lower: true }),
          position: record.position ? record.position.toLowerCase() : undefined,
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
          flags: [
            record.firstFlag,
            record.secondFlag,
            record.thirdFlag,
          ].filter((flag) => flag),
          ageRange: record.age ? (record.age.toLowerCase() === 'sin datos'
            ? record.age
            : getGroupAge(record.age)) : undefined
        };
      })
      .filter((record) => record.id)
      .sort(sortByElectoralNumber);

    const presidential = mapValues(JSON.parse(rawPresidential)).map((record) => {
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

    const candidatesFile = path.resolve(process.cwd(), '..', 'src', 'data', 'candidates.json');
    const presidentialFile = path.resolve(process.cwd(), '..', 'src', 'data', 'presidential.json');
    await writeFile(candidatesFile, JSON.stringify(congress));
    await writeFile(presidentialFile, JSON.stringify(presidential));
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
