import fs from 'fs/promises'
import Handlebars from "handlebars";
import hexRgb from "hex-rgb";
import path from 'path';
import puppeteer from 'puppeteer'

export const partyColorMap = {
  'Colombia Humana': '#FA00B9',
  'ADA': '#FA487D',
  'Mais': '#FF7474',
  'Centro Esperanza': '#75297C',
  'Dignidad': '#BA427B',
  'Equipo por Colombia': '#0F52B8',
  Conservador: '#012BB1',
  Liberal: '#EB1515',
  'Alianza Verde': '#03A655',
  'Verde Oxígeno': '#B1DA42',
  'La U': '#FF9700',
  'Cambio Radical': '#4a4297',
  'Nuevo Liberalismo': '#A81A1A',
  'Colombia Justa Libres': '#AF4D13',
  Mira: '#202C54',
  'Centro Democrático': '#2A92FF',
  'Estamos Listas': '#BC8541',
  Comunes: '#300202',
  'Polo Democrático': '#F0DC00',
  'Pacto Histórico': '#FA00B9',
  'Fuerza Ciudadana': '#FF5E09',
  'Movimiento de Salvación Nacional': '#566b82',
  'Unión Patriótica': '#FF62A4',
  Otro: '#3d3d3d',
};

export const haveBeenConvictedOrInvestigated = (candidate) => {
  if (
    candidate.hasBeenConvicted === 'No' &&
    candidate.hasBeenInvestigated === 'No'
  )
    return 'No';
  else if (
    candidate.hasBeenInvestigated === 'Sí' &&
    candidate.hasBeenConvicted === 'Sí'
  )
    return 'Ambas';
  else if (candidate.hasBeenInvestigated === 'Sí') return 'Investigado';
  else if (candidate.hasBeenConvicted === 'Sí') return 'Condenado';
};

export const inheritVotesOfConvictedOrInvestigated = (candidate) => {
  if (
    candidate.heirToDoomedVows === 'No' &&
    candidate.heirToVotesUnderInvestigation === 'No'
  )
    return 'No';
  else if (
    candidate.heirToDoomedVows === 'Sí' &&
    candidate.heirToDoomedVows === 'Sí'
  )
    return 'Ambas';
  else if (candidate.heirToDoomedVows === 'Sí') return 'De condenado';
  else if (candidate.heirToVotesUnderInvestigation === 'Sí')
    return 'De investigado';
};

export const renderTemplate = (baseTemplate, candidate) => {
  const { red, green, blue, alpha } = hexRgb(candidate.party.color, {
    alpha: 0.6,
  });
  candidate.bgColor = `rgba(${red}, ${green}, ${blue}, ${alpha})`
  return baseTemplate(candidate)
};

export const setupHbs = () => {
  Handlebars.registerHelper('electoral_card', function (str) {
    const num = parseInt(str, 10)
    if (num) return `#Tarjetón: ${str}`
    return str
  })
}

export const getCandidates = async (filename) => {
  const candidatesRaw = await fs.readFile(path.join(process.cwd(), '..', 'src', 'data', `${filename}.json`), 'utf8')
  const candidates = JSON.parse(candidatesRaw)
  return candidates
}

export const generateImages = async () => {
  const imageWidth = 608
  const imageHeight = 1080

  // Parse candidates
  const congress = await getCandidates('candidates')
  const presidential = await getCandidates('presidential')
  const candidates = [...presidential, ...congress]

  // Open new page
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  // Compile template
  setupHbs()
  const html = await fs.readFile('card.tpl.hbs', 'utf-8');
  const template = Handlebars.compile(html)

  let images = []

  for (let i = 0; i < candidates.length; i++) {
    const candidate = candidates[i];
    console.group('Image');
    console.log(`candidate.id: ${candidate.id}`);
    candidate.imageProfile = candidate.imageProfile ? candidate.imageProfile.slice(0, 650) : ''
    await page.setContent(renderTemplate(template, candidate), { timeout: 0 });
    const image = await page.screenshot({
      clip: {
        x: 0,
        y: 0,
        width: imageWidth,
        height: imageHeight
      },
    });
    images.push({ id: candidate.id, body: image })
    console.log(`progress: ${i + 1}/${candidates.length}`);
    console.groupEnd()
  }

  await browser.close()

  return images
}
