import { test, expect } from '@playwright/test';
import fs from 'fs';
import path from 'path';

/*
|--------------------------------------------------------------------------
| FILE DOWNLOAD - DOWNLOAD FILE
|--------------------------------------------------------------------------
| Escenario:
| - Click en link/botón de descarga
| - Esperar a que el archivo se descargue
| - Validar que el archivo existe
*/
test('download file', async ({ page }) => {
  await page.goto('/');

  // Esperar a que se inicie la descarga
  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link', { name: /download|Download/i }).click()
  ]);

  // Obtener el nombre del archivo descargado
  const fileName = download.suggestedFilename();
  expect(fileName).toBeTruthy();

  // Guardar el archivo en una ubicación temporal
  const downloadPath = path.join(__dirname, '../downloads', fileName);
  await download.saveAs(downloadPath);

  // Validar que el archivo existe
  expect(fs.existsSync(downloadPath)).toBe(true);
});

/*
|--------------------------------------------------------------------------
| FILE DOWNLOAD - DOWNLOAD AND VERIFY CONTENT
|--------------------------------------------------------------------------
| Escenario:
| - Descargar archivo
| - Leer y validar contenido
*/
test('download and verify file content', async ({ page }) => {
  await page.goto('/');

  const [download] = await Promise.all([
    page.waitForEvent('download'),
    page.getByRole('link', { name: /download/i }).click()
  ]);

  const downloadPath = path.join(__dirname, '../downloads', download.suggestedFilename());
  await download.saveAs(downloadPath);

  // Leer contenido del archivo
  const content = fs.readFileSync(downloadPath, 'utf-8');
  expect(content).toBeTruthy();
  expect(content.length).toBeGreaterThan(0);
});
