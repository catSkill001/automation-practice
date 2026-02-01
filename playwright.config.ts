import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    // URL hardcodeada para práctica
    baseURL: 'https://testautomationpractice.blogspot.com',
    headless: process.env.CI ? true : false, // Headless in CI, headed locally
  },
  retries: 0,
  workers: 1, // para practicar estable; luego lo subimos
});
