import http from 'http';
import path from 'path';
import { readFileSync } from 'fs';
import Handlebars from 'handlebars';
import express from 'express';
// eslint-disable-next-line import/extensions
import { renderTemplate, setupHbs } from './utils.js';

const congressCandidates = readFileSync(path.join(process.cwd(), '..', 'src', 'data', 'candidates.json'), 'utf8');
const presidentialCandidates = readFileSync(path.join(process.cwd(), '..', 'src', 'data', 'presidential.json'), 'utf8');
const candidates = [...JSON.parse(congressCandidates), ...JSON.parse(presidentialCandidates)];
const html = readFileSync('card.tpl.hbs', 'utf-8');
const template = Handlebars.compile(html);

setupHbs();

const app = express();

app.use('/', express.static('.'));

app.get('/:id', (req, res, next) => {
  const { id } = req.params;
  // eslint-disable-next-line no-shadow
  const candidate = candidates.find((candidate) => candidate.id === id);
  if (!candidate) return next();
  candidate.imageProfile = candidate.imageProfile ? candidate.imageProfile.slice(0, 650) : '';
  // eslint-disable-next-line no-shadow
  const html = renderTemplate(template, candidate);
  return res.send(html);
});

app.use((req, res) => {
  res.end('ID no existe');
});

const server = http.createServer(app);
const port = 3001;

server.listen(port, () => {
  console.log(`Dev server is up: http://localhost:${port}`);
});
