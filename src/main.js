import { Actor } from 'apify';
import { PlaywrightCrawler } from 'crawlee';

Actor.main(async () => {
  const input = await Actor.getInput();
  const { text = 'iphone 15', city = 'all', maxItems = 100 } = input;
  
  console.log(`Starting Milanuncios scraper for "${text}" in ${city}`);
  
  const crawler = new PlaywrightCrawler({
    maxRequestsPerCrawl: maxItems,
    async requestHandler({ page, request, pushData }) {
      const title = await page.title();
      console.log(`Processing: ${title}`);
      
      await pushData({
        url: request.url,
        title,
        scrapedAt: new Date().toISOString(),
      });
    },
  });
  
  await crawler.run([`https://www.milanuncios.com/${text}/`]);
  console.log('Milanuncios scraper finished');
});
