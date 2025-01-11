import { test, expect } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
const API_URL = process.env.REACT_APP_API_URL;

test('homepage has title', async ({ page }) => {
  await page.goto(`${API_URL}`);
  console.log('URL', API_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle('Lindsay Hartfiel - Portfolio');
});
