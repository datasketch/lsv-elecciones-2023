import { readFile } from 'fs/promises';
import path from 'path'
import Handlebars from 'handlebars'
import puppeteer from 'puppeteer'
import { renderTemplate, setupHbs } from './utils.js';

(async () => {
  try {
    const congressCandidates = await readFile(path.join(process.cwd(), '..', 'src', 'data', 'candidates.json'), 'utf8')
    const presidentialCandidates = await readFile(path.join(process.cwd(), '..', 'src', 'data', 'presidential.json'), 'utf8')
    const candidates = [...JSON.parse(congressCandidates), ...JSON.parse(presidentialCandidates)]
    setupHbs()
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const html = await readFile(
      'card.tpl.hbs',
      'utf-8'
    );
    const template = Handlebars.compile(html)
    for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i];
      await page.setContent(renderTemplate(template, candidate));
      await page.screenshot({
        path: path.join(
          process.cwd(),
          '..',
          'public',
          'candidatos',
          `${candidate.id}.png`
        ),
        clip: {
          x: 0,
          y: 0,
          width: 608,
          height: 1080
        }
      });
      console.log(`${i + 1}/${candidates.length} images`);
      console.log('---------');
    }
    await browser.close();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
})();
