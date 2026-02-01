import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Cargar variables de entorno desde .env
dotenv.config();

export default defineConfig({
  use: {
    // Usar BASE_URL del .env si existe, sino usar la URL por defecto
    baseURL: process.env.BASE_URL || 'https://testautomationpractice.blogspot.com',
    headless: process.env.CI ? true : false, // Headless in CI, headed locally
  },
  retries: 0,
  workers: 1, // para practicar estable; luego lo subimos
});
