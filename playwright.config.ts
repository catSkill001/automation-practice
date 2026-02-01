import { defineConfig } from '@playwright/test';

export default defineConfig({
  use: {
    baseURL: 'https://testautomationpractice.blogspot.com',
    headless: false, // para practicar viendo el browser
  },
  retries: 0,
  workers: 1, // para practicar estable; luego lo subimos
});
