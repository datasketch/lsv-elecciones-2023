/* eslint-disable max-len */
/* eslint-disable import/extensions */
import { writeFile, readFile } from 'fs/promises';
import path from 'path';
import slugify from 'slugify';
import got from 'got';
import mapper from './mapper.js';
import { partyColorMap } from './utils.js';

function mapValues(data) {
  return data.map((record) => Object.keys(record).reduce((result, key) => {
    const k = key.trim();
    // eslint-disable-next-line no-param-reassign
    result[mapper[k]] = record[k];
    return result;
  }, {}));
}

(async () => {
  try {
    const raw = await got(
      'https://script.google.com/macros/s/AKfycbwfLci6UvxSQnkioexRezpeZllwXUC6n1QWXexYPHCb6CkMEsKeujS1WfZx9x7q11w28Q/exec',
    ).json();

    const candidates = mapValues(JSON.parse(raw))
      .map((record) => {
        const { name, firstLastName, secondLastName } = record;
        const fullname = [name, firstLastName, secondLastName].join(' ').trim();
        const getGroupAge = (str) => {
          const match = str.slice(0).replace(/\D/g, '');
          if (match.length === 2) return str;
          return `${match.substring(0, 2)} - ${match.substring(2)}`;
        };
        if (!record.photo) {
          // eslint-disable-next-line no-console
          console.log(fullname);
        }
        const id = slugify(fullname, { lower: true });

        return {
          ...record,
          fullname,
          id,
          position: record.position ? record.position.toLowerCase() : undefined,
          // Custom fields
          party: {
            label: record.party,
            color: partyColorMap[record.party] || partyColorMap.Otro,
          },
          // eslint-disable-next-line no-nested-ternary
          ageRange: record.age ? (record.age.toString().toLowerCase() === 'sin datos'
            ? record.age.toString()
            : getGroupAge(record.age.toString())) : 'Sin datos',
        };
      })
      .filter((record) => record.id);
      // .sort(sortByElectoralNumber);

    const output = path.resolve(process.cwd(), 'src', 'data', 'data.json');
    await writeFile(output, JSON.stringify(candidates));
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    process.exit(1);
  }
})();
