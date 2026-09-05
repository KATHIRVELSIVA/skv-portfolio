import { test, expect } from '@playwright/test';

test.describe('Device Compatibility', () => {
  test('hamburger menu is visible on mobile', async ({ page, isMobile }) => {
    if (!isMobile) return;
    
    await page.goto('/');
    
    const hamburgerBtn = page.getByRole('button', { name: 'Toggle mobile menu' });
    await expect(hamburgerBtn).toBeVisible();
  });

  test('navbar items are visible on desktop', async ({ page, isMobile }) => {
    if (isMobile) return;
    
    await page.goto('/');
    
    const homeLink = page.getByRole('button', { name: 'Home' });
    await expect(homeLink).toBeVisible();
    
    const hamburgerBtn = page.getByRole('button', { name: 'Toggle mobile menu' });
    await expect(hamburgerBtn).not.toBeVisible();
  });
});
