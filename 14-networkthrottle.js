import { browser, networkProfiles } from 'k6/browser';

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