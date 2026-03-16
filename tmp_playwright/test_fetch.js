const { chromium } = require('playwright');
(async() => {
  const browser = await chromium.launch({headless:true});
  const context = await browser.newContext({acceptDownloads:true});
  const page = await context.newPage();
  const url = 'https://www.nature.com/articles/s41588-024-01744-w';
  await page.goto(url, {waitUntil:'domcontentloaded', timeout: 90000});
  await page.waitForTimeout(5000);
  console.log('title=', await page.title());
  console.log('url=', page.url());
  const texts = await page.locator('a, button').evaluateAll(nodes => nodes.slice(0,200).map(n => ({text:(n.innerText||'').trim(), href:n.href||null})).filter(x => x.text));
  console.log(JSON.stringify(texts.filter(x => /pdf|download/i.test(x.text)).slice(0,20), null, 2));
  await browser.close();
})();
