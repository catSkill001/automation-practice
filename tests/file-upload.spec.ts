import { test, expect } from '@playwright/test';
import path from 'path';

/*
|--------------------------------------------------------------------------
| FILE UPLOAD - UPLOAD SINGLE FILE
|--------------------------------------------------------------------------
| Escenario:
| - Seleccionar y subir un archivo
| - Validar que el archivo se subió correctamente
*/
test('upload single file', async ({ page }) => {
  await page.goto('/');

  // Localizar el input de tipo file
  const fileInput = page.locator('input[type="file"]').first();

  // Crear un archivo de prueba temporal
  const filePath = path.join(__dirname, '../test-files/test.txt');
  
  // O usar un archivo existente o crear uno en memoria
  await fileInput.setInputFiles({
    name: 'test.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('Test file content')
  });

  // Validar que el archivo se seleccionó (el nombre aparece)
  await expect(page.locator('text=test.txt, text=/test/i')).toBeVisible();
});

/*
|--------------------------------------------------------------------------
| FILE UPLOAD - UPLOAD MULTIPLE FILES
|--------------------------------------------------------------------------
| Escenario:
| - Seleccionar y subir múltiples archivos
| - Validar que todos se subieron
*/
test('upload multiple files', async ({ page }) => {
  await page.goto('/');

  const fileInput = page.locator('input[type="file"][multiple]');

  // Subir múltiples archivos
  await fileInput.setInputFiles([
    { name: 'file1.txt', mimeType: 'text/plain', buffer: Buffer.from('File 1') },
    { name: 'file2.txt', mimeType: 'text/plain', buffer: Buffer.from('File 2') }
  ]);

  // Validar que ambos archivos se subieron
  await expect(page.locator('text=file1.txt')).toBeVisible();
  await expect(page.locator('text=file2.txt')).toBeVisible();
});

/*
|--------------------------------------------------------------------------
| FILE UPLOAD - REMOVE UPLOADED FILE
|--------------------------------------------------------------------------
| Escenario:
| - Subir archivo
| - Remover el archivo
| - Validar que se removió
*/
test('remove uploaded file', async ({ page }) => {
  await page.goto('/');

  const fileInput = page.locator('input[type="file"]').first();
  await fileInput.setInputFiles({
    name: 'test.txt',
    mimeType: 'text/plain',
    buffer: Buffer.from('Test content')
  });

  // Remover el archivo
  await fileInput.setInputFiles([]);

  // Validar que el archivo se removió
  const files = await fileInput.inputValue();
  expect(files).toBe('');
});
