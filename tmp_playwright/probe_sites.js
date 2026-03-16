const { chromium } = require('playwright');
const urls = [
  'https://www.pnas.org/doi/10.1073/pnas.0605475103',
  'https://academic.oup.com/plphys/article/189/4/2244/6561731',
  'https://academic.oup.com/jxb/article/76/6/1806/8014650',
  'https://besjournals.onlinelibrary.wiley.com/doi/10.1111/2041-210X.14491',
  'https://nph.onlinelibrary.wiley.com/doi/10.1111/nph.17509',
  'https://hal.science/hal-03291136',
];
(async() => {
  const browser = await chromium.launch({headless:true});
  for (const url of urls) {
    const context = await browser.newContext({acceptDownloads:true});
    const page = await context.newPage();
    console.log('\nURL', url);
    try {
      await page.goto(url, {waitUntil:'domcontentloaded', timeout:90000});
      await page.waitForTimeout(7000);
      console.log('final', page.url());
      console.log('title', await page.title());
      const text = await page.locator('body').innerText({timeout:5000}).catch(()=> '');
      console.log('body snippet', text.slice(0,300).replace(/\s+/g,' '));
      const pdfLinks = await page.locator('a,button').evaluateAll(nodes => nodes.map(n => ({text:(n.innerText||'').trim(), href:n.href||null})).filter(x => /pdf|download/i.test(x.text) || (x.href||'').toLowerCase().includes('pdf')).slice(0,20));
      console.log('pdfLinks', JSON.stringify(pdfLinks, null, 2));
    } catch (e) {
      console.log('ERR', e.toString());
    }
    await context.close();
  }
  await browser.close();
})();
