const { chromium } = require('playwright');
(async() => {
  const browser = await chromium.launch({headless:true, channel:'chrome', args:['--disable-blink-features=AutomationControlled']});
  const context = await browser.newContext({
    userAgent: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    viewport: {width: 1366, height: 900},
    locale: 'en-US',
    timezoneId: 'America/Los_Angeles',
    extraHTTPHeaders: {
      'accept-language': 'en-US,en;q=0.9'
    }
  });
  await context.addInitScript(() => {
    Object.defineProperty(navigator, 'webdriver', { get: () => undefined });
    Object.defineProperty(navigator, 'plugins', { get: () => [1,2,3,4,5] });
    Object.defineProperty(navigator, 'languages', { get: () => ['en-US', 'en'] });
    window.chrome = { runtime: {} };
  });
  const page = await context.newPage();
  const url = 'https://academic.oup.com/plphys/article/189/4/2244/6561731';
  await page.goto(url, {waitUntil:'domcontentloaded', timeout:90000});
  for (let i=0; i<12; i++) {
    await page.waitForTimeout(5000);
    const title = await page.title();
    const body = await page.locator('body').innerText().catch(()=> '');
    console.log('iter', i, 'title', title, 'snippet', body.slice(0,150).replace(/\s+/g,' '));
    if (!/Just a moment|security verification/i.test(title + ' ' + body)) break;
  }
  const pdfLinks = await page.locator('a,button').evaluateAll(nodes => nodes.map(n => ({text:(n.innerText||'').trim(), href:n.href||null})).filter(x => /pdf|download/i.test(x.text) || (x.href||'').toLowerCase().includes('pdf')).slice(0,20));
  console.log(JSON.stringify(pdfLinks, null, 2));
  await browser.close();
})();
