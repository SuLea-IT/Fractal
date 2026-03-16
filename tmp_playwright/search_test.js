const { chromium } = require('playwright');
const fs = require('fs');
(async() => {
  const browser = await chromium.launch({headless:true});
  const page = await browser.newPage();
  const q = encodeURIComponent('"A genetic network for the extreme repetition and diversity of cauliflower"');
  await page.goto('https://duckduckgo.com/html/?q=' + q, {waitUntil:'domcontentloaded', timeout: 90000});
  await page.waitForTimeout(3000);
  const html = await page.content();
  fs.writeFileSync('/Users/lilabzsm/Desktop/分形/tmp_playwright/ddg_tmp.html', html);
  console.log('saved', html.length);
  await browser.close();
})();
