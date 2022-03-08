import Papa from 'papaparse';
import fs from 'fs';
// eslint-disable-next-line import/extensions
import { getCandidates } from './utils.js';

(async () => {
  const baseURL = 'https://dsktch-la-silla-vacia.s3.amazonaws.com/elecciones-2022/tarjetas/';
  const congress = await getCandidates('candidates');
  const presidential = await getCandidates('presidential');
  const candidates = [...presidential, ...congress];
  const data = candidates.map((candidate) => ({
    nombre_completo: candidate.fullname,
    url_imagen: `${baseURL + candidate.id}.png`,
  }));
  const csv = Papa.unparse(data);
  fs.writeFileSync('images-db.csv', csv);
})();
