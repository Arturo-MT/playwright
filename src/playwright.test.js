import { test } from '@playwright/test'

const url = 'https://cannoli.app/'

test('test browser', async ({ page }) => {
  // point this to wherever you want
  await page.goto(url)

  // keep browser open
  await page.pause()
})