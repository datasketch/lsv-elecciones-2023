/* eslint-disable no-console */
/* eslint-disable import/extensions */
// eslint-disable-next-line import/no-unresolved
import got from 'got';
import fs from 'fs/promises';
import path from 'path';
import { getCandidates } from '../utils.js';

(async () => {
  try {
    const cacheStr = await fs.readFile(path.join(process.cwd(), 'data', 'images.json'), 'utf8');
    const cache = JSON.parse(cacheStr);
    const congress = await getCandidates('candidates');
    const presidential = await getCandidates('presidential');
    const candidates = [...presidential, ...congress];
    const filteredCandidates = candidates
      .filter((candidate) => candidate.photo);

    const results = [];

    console.group('Optimize');
    for (let i = 0; i < filteredCandidates.length; i += 1) {
      console.log(`${i + 1} / ${filteredCandidates.length}`);
      const candidate = filteredCandidates[i];
      const existsInCache = cache
        .find((entry) => entry.id === candidate.id && entry.photo === candidate.photo);
      if (existsInCache) {
        console.log('Delivered from chache');
        // eslint-disable-next-line no-continue
        continue;
      }
      try {
        // eslint-disable-next-line no-await-in-loop
        const response = await got(candidate.photo).buffer();
        const base64 = response.toString('base64');
        results.push({
          id: candidate.id,
          photo: candidate.photo,
          base64Image: `data:image/png;base64, ${base64}`,
        });
      } catch (error) {
        results.push({ id: candidate.id, photo: candidate.photo });
      }
    }
    console.groupEnd();

    // TODO: find differences and replace
    const out = [...results, ...cache];
    await fs.writeFile(path.join(process.cwd(), 'data', 'images.json'), JSON.stringify(out));
  } catch (error) {
    console.log(error.code);
    console.log(error.options);
    process.exit(1);
  }
})();
