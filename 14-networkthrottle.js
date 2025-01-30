import { browser, networkProfiles } from 'k6/browser';
// intentionally slow down the simulated network speed during a load test, 
// allowing you to test how your application performs under conditions of low bandwidth

export const options = {
  scenarios: {
    browser: {
      executor: 'shared-iterations',
      options: {
        browser: {
          type: 'chromium',
        },
      },
    },
  },
};

export default async function () {
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    await page.throttleNetwork(networkProfiles['Fast 3G']);

    await page.goto('https://in.pinterest.com/#search', { waitUntil: 'networkidle' });
    
  } finally {
    await page.close();
  }
}