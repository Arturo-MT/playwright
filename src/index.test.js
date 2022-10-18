import { test } from '@playwright/test'

test('test browser', async ({ page }) => {
  // point this to wherever you want
  await page.goto('https://docs-dev.ilforno.io/?path=/docs/ui-elements-card--regular')

  // keep browser open
  await page.pause()
})