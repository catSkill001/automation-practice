import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  
  /* Maximum time one test can run */
  timeout: 30 * 1000,
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  
  /* 
   * Workers configuration:
   * - Local: 4 workers (buen balance entre velocidad y estabilidad)
   * - CI: undefined (usa 50% de CPU cores automáticamente)
   * 
   * Con 53 tests y 4 workers: ~1-2 minutos
   * Con 53 tests y 1 worker: ~3-4 minutos
   */
  workers: process.env.CI ? undefined : 4,
  
  /* Reporter to use */
  reporter: 'html',
  
  use: {
    // URL hardcodeada para práctica
    baseURL: 'https://testautomationpractice.blogspot.com',
    
    /* Collect trace when retrying the failed test */
    trace: 'on-first-retry',
    
    /* Screenshot on failure */
    screenshot: 'only-on-failure',
    
    /* Headless configuration */
    headless: process.env.CI ? true : false,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
