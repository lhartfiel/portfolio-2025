import { test, expect } from '@playwright/experimental-ct-react'
import Footer from '../../src/components/Footer'

test('has footer', async ({ mount }) => {
  const footerComponent = await mount(<Footer />)
  // Check if the Footer contains the expected text
  await expect(footerComponent).toContainText('Lindsay Hartfiel')
})
