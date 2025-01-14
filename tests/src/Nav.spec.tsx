import { test, expect } from '@playwright/experimental-ct-react';
import Nav from '../../src/components/Nav';
import { MemoryRouter } from 'react-router';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });
const API_URL = process.env.REACT_APP_API_URL;

test('has navigation', async ({ mount, page }) => {
  const NavComponent = await mount(
    <MemoryRouter initialEntries={['/']}>
      <Nav />
    </MemoryRouter>
  );

  // Wait for the "About" link to become visible
  const aboutLink = NavComponent.locator('a:has-text("About")');
  await expect(aboutLink).toBeVisible();

  // Click the About link and wait for the page content to update
  await aboutLink.click();

  await page.goto(`${API_URL}/about`);

  // Wait for the page to render the About section
  // Check for a heading in the "About" page
  const aboutContent = page.locator('h1:has-text("About Page")');
  await expect(aboutContent).toBeVisible({ timeout: 5000 });

  // Check if the URL has changed as expected
  const currentURL = page.url();
  expect(currentURL).toMatch(/.*about/);
});
