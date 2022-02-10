const { readFile } = require('fs').promises;
const path = require('path');
const puppeteer = require('puppeteer');
const candidates = require('../data/candidates.json');

const renderTemplate = (baseTemplate, candidate) => {
  let ret = baseTemplate.replace('{{fullname}}', candidate.fullname);
  ret = ret.replace('{{photo}}', candidate.photo);
  ret = ret.replace('{{party.label}}', candidate.party.label);
  ret = ret.replace('{{profile}}', candidate.profile);
  return ret;
};

(async () => {
  try {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const template = await readFile(
      path.join(__dirname, 'card.tpl.html'),
      'utf-8'
    );
    for (let i = 0; i < candidates.length; i++) {
      const candidate = candidates[i];
      await page.setContent(renderTemplate(template, candidate));
      await page.screenshot({
        path: path.join(
          process.cwd(),
          'public',
          'candidatos',
          `${candidate.id}.png`
        ),
        clip: {
          x: 0,
          y: 0,
          width: 540,
          height: 960
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
