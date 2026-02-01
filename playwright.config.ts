import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

// Cargar variables de entorno desde .env
dotenv.config();

// Configuración de entornos
const environments = {
  dev: {
    baseURL: process.env.DEV_BASE_URL || 'https://testautomationpractice.blogspot.com',
    timeout: 30000,
  },
  qa: {
    baseURL: process.env.QA_BASE_URL || 'https://testautomationpractice.blogspot.com',
    timeout: 30000,
  },
  stage: {
    baseURL: process.env.STAGE_BASE_URL || 'https://testautomationpractice.blogspot.com',
    timeout: 30000,
  },
  prod: {
    baseURL: process.env.PROD_BASE_URL || 'https://testautomationpractice.blogspot.com',
    timeout: 30000,
  },
};

// Obtener el entorno desde .env o usar 'dev' por defecto
const environment = (process.env.ENVIRONMENT || 'dev').toLowerCase() as keyof typeof environments;

// Seleccionar configuración del entorno o usar valores por defecto
const envConfig = environments[environment] || environments.dev;

export default defineConfig({
  use: {
    // Usar BASE_URL del entorno configurado, o del .env directo, o la URL por defecto
    baseURL: process.env.BASE_URL || envConfig.baseURL,
    headless: process.env.CI ? true : false, // Headless in CI, headed locally
  },
  timeout: envConfig.timeout,
  retries: 0,
  workers: 1, // para practicar estable; luego lo subimos
});
