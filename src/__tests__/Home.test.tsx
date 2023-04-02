// import { test, expect } from '@playwright/test';

// test('should navigate to the about page', async ({ page }) => {
//   await page.goto('/');
//   await page.click('text=About');
//   await expect(page).toHaveURL('/about');
//   await expect(page.locator('h1')).toContainText('Hello World!');
// });

import { describe, it } from 'vitest';
import { render, screen } from '@testing-library/react';

import About from '../app/about/page';

describe('App', () => {
  it('Renders hello world', () => {
    // ARRANGE
    render(<About />);
    // ACT
    // EXPECT
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Hello World');
  });
});
