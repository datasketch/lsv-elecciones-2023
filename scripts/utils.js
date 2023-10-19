/* eslint-disable max-len */
/* eslint-disable import/order */
/* eslint-disable import/no-unresolved */
import fs from 'fs/promises';
import Handlebars from 'handlebars';
// eslint-disable-next-line import/no-extraneous-dependencies
import hexRgb from 'hex-rgb';
import path from 'path';
import puppeteer from 'puppeteer';

export const partyColorMap = {
  'Colombia Humana': '#FA00B9',
  ADA: '#FA487D',
  Mais: '#FF7474',
  'Centro Esperanza': '#75297C',
  'Dignidad y Compromiso': '#BA427B',
  'Equipo por Colombia': '#0F52B8',
  Conservador: '#012BB1',
  Liberal: '#EB1515',
  'Alianza Verde': '#35a542',
  'Verde Oxígeno': '#A9C811',
  'La U': '#FF9700',
  'Cambio Radical': '#4a4297',
  'Nuevo Liberalismo': '#A81A1A',
  'Colombia Justa Libres': '#AF4D13',
  Mira: '#202C54',
  'Centro Democrático': '#2A92FF',
  'Estamos Listas': '#B9832D',
  Comunes: '#300202',
  Polo: '#FFE600',
  'Pacto Histórico': '#FA00B9',
  'Fuerza Ciudadana': '#FF5E09',
  'Movimiento de Salvación Nacional': '#566b82',
  'Unión Patriótica': '#FF62A4',
  'Salvación Nacional': '#009EBF',
  Aico: '#338ca8',
  ASI: '#afce71',
  'Liga Anticorrupción': '#FFD800',
  'En Marcha': '#972f37',
  'Esperanza Democrática': '#C7435D',
  'Nueva Fuerza Democrática': '#003a5a',
  'Colombia Renaciente': '#E15510',
  Comunista: '#e84242',
  Creemos: '#a31751',
  'Todos Somos Colombia': '#ffb000',
  'Gente en Movimiento': '#b6cc66',
  'La Fuerza de la Paz': '#e1daed',
  'Partido Demócrata': '#5062A3',
  PTC: '#972f37',
  'Partido Ecologista': '#a0b548',
  Independientes: '#E8939A',
  Firmas: '#9f9b91',
  Otro: '#3d3d3d',
};

export const haveBeenConvictedOrInvestigated = (candidate) => {
  if (
    candidate.hasBeenConvicted === 'No'
    && candidate.hasBeenInvestigated === 'No'
  ) return 'No';
  if (
    candidate.hasBeenInvestigated === 'Sí'
    && candidate.hasBeenConvicted === 'Sí'
  ) return 'Ambas';
  if (candidate.hasBeenInvestigated === 'Sí') return 'Investigado';
  if (candidate.hasBeenConvicted === 'Sí') return 'Condenado';
  return '';
};

export const inheritVotesOfConvictedOrInvestigated = (candidate) => {
  if (
    candidate.heirToDoomedVows === 'No'
    && candidate.heirToVotesUnderInvestigation === 'No'
  ) return 'No';
  if (
    candidate.heirToDoomedVows === 'Sí'
    && candidate.heirToDoomedVows === 'Sí'
  ) return 'Ambas';
  if (candidate.heirToDoomedVows === 'Sí') return 'De condenado';
  if (candidate.heirToVotesUnderInvestigation === 'Sí') return 'De investigado';
  return '';
};

export const renderTemplate = (baseTemplate, candidate) => {
  const {
    red, green, blue, alpha,
  } = hexRgb(candidate.party.color, {
    alpha: 0.6,
  });
  // eslint-disable-next-line no-param-reassign
  candidate.bgColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`;
  return baseTemplate(candidate);
};

export const setupHbs = () => {
  Handlebars.registerHelper('electoral_card', (str) => {
    const num = parseInt(str, 10);
    if (num) return `#Tarjetón: ${str}`;
    return str;
  });
};

export const isEqual = () => {
  Handlebars.registerHelper('ifEquals', (arg1, arg2, options) => ((arg1 === arg2) ? options.fn(this) : options.inverse(this)));
};

export const getCandidates = async (filename) => {
  const candidatesRaw = await fs.readFile(path.join(process.cwd(), '..', 'src', 'data', `${filename}.json`), 'utf8');
  const candidates = JSON.parse(candidatesRaw);
  return candidates;
};

export const generateImages = async () => {
  const imageWidth = 608;
  const imageHeight = 1080;

  // Parse candidates
  const candidates = await getCandidates('data');

  // Open new page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Compile template
  setupHbs();
  isEqual();
  const html = await fs.readFile(path.join(process.cwd(), 'preview', 'card.tpl.hbs'), 'utf-8');
  const template = Handlebars.compile(html);

  const images = [];

  for (let i = 0; i < candidates.length; i += 1) {
    const candidate = candidates[i];
    console.group('Image');
    console.log(`candidate.id: ${candidate.id}`);
    candidate.imageProfile = candidate.imageProfile ? candidate.imageProfile.slice(0, 650) : candidate.profile.slice(0, 650);
    // eslint-disable-next-line no-await-in-loop
    await page.setContent(renderTemplate(template, candidate), { timeout: 0 });
    // eslint-disable-next-line no-await-in-loop
    const image = await page.screenshot({
      clip: {
        x: 0,
        y: 0,
        width: imageWidth,
        height: imageHeight,
      },
    });
    images.push({ id: candidate.id, body: image });
    console.log(`progress: ${i + 1}/${candidates.length}`);
    console.groupEnd();
  }

  await browser.close();
  return images;
};
