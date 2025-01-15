import { test, expect } from '@playwright/experimental-ct-react'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })
const API_URL = process.env.REACT_APP_API_URL

test('has About Header', async ({ page }) => {
  await page.goto(`${API_URL}/about`)

  const header = page.locator('header')
  await expect(header).toContainText('About')
})

test('nav links to Contact', async ({ page }) => {
  await page.goto(`${API_URL}/about`)

  const contactNavLink = await page.locator('a:has-text("Contact")')
  await contactNavLink.click()

  await page.waitForURL(`${API_URL}/contact`)
})
