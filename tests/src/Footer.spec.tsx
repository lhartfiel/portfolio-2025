import { test, expect } from '@playwright/experimental-ct-react';
import Footer from '../../src/components/Footer';

test('has footer', async ({ mount }) => {
  // Mount the App component correctly by passing typeof App
  const footerComponent = await mount(<Footer />);
  // Check if the Footer contains the expected text
  await expect(footerComponent).toContainText('Lindsay Hartfiel');
  // expect(await footerComponent.toHaveText('Lindsay Hartfiel'));
});
