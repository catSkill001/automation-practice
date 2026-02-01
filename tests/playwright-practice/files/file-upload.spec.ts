import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| FILE UPLOAD - Subir archivos en formularios
|--------------------------------------------------------------------------
| Playwright maneja file uploads de manera programática sin necesidad
| de interactuar con el file picker del sistema operativo.
| 
| Métodos disponibles:
| - setInputFiles(): Establece archivos en un input type="file"
| - Acepta: paths a archivos, buffers, arrays de archivos
| 
| Ventajas:
| - No requiere archivos físicos en disco
| - Funciona en entornos CI/CD
| - Puede crear archivos dinámicamente con Buffer
| - Soporta múltiples archivos
| 
| Documentación: https://playwright.dev/docs/input#upload-files
|--------------------------------------------------------------------------
*/

test.describe('File Upload', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-020: Subir archivo único
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo subir un archivo creado dinámicamente con Buffer
  | 
  | Precondiciones:
  |   - La página debe tener un input type="file"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Localizar el primer input de tipo file
  |   3. Crear un archivo virtual usando Buffer
  |   4. Establecer el archivo en el input con setInputFiles()
  | 
  | Resultado esperado:
  |   - El archivo se carga sin errores
  |   - El input reconoce el archivo
  | 
  | Conceptos clave:
  |   - setInputFiles(): Método para establecer archivos
  |   - Buffer.from(): Crea contenido de archivo en memoria
  |   - name: Nombre del archivo (incluyendo extensión)
  |   - mimeType: Tipo MIME del archivo (text/plain, image/png, etc.)
  |   - buffer: Contenido del archivo en bytes
  |--------------------------------------------------------------------------
  */
  test('upload single file', async ({ page }) => {
    // Navegar a la página de práctica
    await page.goto('/p/playwrightpractice.html');
    
    // Localizar el primer input de tipo file en la página
    // .first() asegura que tomamos el input para archivo único
    const fileInput = page.locator('input[type="file"]').first();
    
    // Subir un archivo creado dinámicamente
    // No necesitamos tener el archivo físicamente en disco
    await fileInput.setInputFiles({
      // Nombre del archivo (con extensión)
      name: 'test.txt',
      
      // Tipo MIME que identifica el tipo de archivo
      // text/plain = archivo de texto plano
      mimeType: 'text/plain',
      
      // Contenido del archivo como Buffer
      // Buffer.from() convierte el string a bytes
      buffer: Buffer.from('This is test content')
    });
    
    /*
     * Otras formas de subir archivos:
     * 
     * // Desde un archivo físico:
     * await fileInput.setInputFiles('path/to/file.txt');
     * 
     * // Múltiples archivos desde disco:
     * await fileInput.setInputFiles([
     *   'file1.txt',
     *   'file2.pdf'
     * ]);
     * 
     * // Archivo de imagen:
     * await fileInput.setInputFiles({
     *   name: 'screenshot.png',
     *   mimeType: 'image/png',
     *   buffer: await fs.promises.readFile('screenshot.png')
     * });
     * 
     * // Limpiar el input (remover archivos):
     * await fileInput.setInputFiles([]);
     * 
     * // Validar que el archivo se cargó:
     * const fileName = await fileInput.inputValue();
     * expect(fileName).toContain('test.txt');
     */
  });

  /*
  |--------------------------------------------------------------------------
  | TC-021: Subir múltiples archivos
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo subir múltiples archivos simultáneamente
  | 
  | Precondiciones:
  |   - La página debe tener un input type="file" con atributo multiple
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Localizar el input que acepta múltiples archivos
  |   3. Crear un array con dos archivos virtuales
  |   4. Establecer ambos archivos con setInputFiles()
  | 
  | Resultado esperado:
  |   - Ambos archivos se cargan correctamente
  |   - El input reconoce 2 archivos
  | 
  | Conceptos clave:
  |   - El input debe tener attribute multiple
  |   - setInputFiles() acepta array de archivos
  |   - Cada archivo puede tener diferente mimeType
  |   - Los archivos se procesan en el orden del array
  |--------------------------------------------------------------------------
  */
  test('upload multiple files', async ({ page }) => {
    // Navegar a la página de práctica
    await page.goto('/p/playwrightpractice.html');
    
    // Localizar el input que acepta múltiples archivos
    // El selector [multiple] filtra solo inputs con atributo multiple
    const fileInput = page.locator('input[type="file"][multiple]');
    
    // Subir múltiples archivos simultáneamente
    // setInputFiles() acepta un array de objetos de archivo
    await fileInput.setInputFiles([
      // Primer archivo
      {
        name: 'file1.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('File 1 content')
      },
      // Segundo archivo
      {
        name: 'file2.txt',
        mimeType: 'text/plain',
        buffer: Buffer.from('File 2 content')
      }
    ]);
    
    /*
     * Validaciones útiles después del upload:
     * 
     * // Verificar cantidad de archivos (usando JavaScript):
     * const fileCount = await fileInput.evaluate((input: HTMLInputElement) => {
     *   return input.files?.length || 0;
     * });
     * expect(fileCount).toBe(2);
     * 
     * // Verificar nombres de archivos:
     * const fileNames = await fileInput.evaluate((input: HTMLInputElement) => {
     *   return Array.from(input.files || []).map(f => f.name);
     * });
     * expect(fileNames).toEqual(['file1.txt', 'file2.txt']);
     * 
     * // Mezclar archivos físicos y virtuales:
     * await fileInput.setInputFiles([
     *   'physical-file.pdf',
     *   { name: 'virtual.txt', mimeType: 'text/plain', buffer: Buffer.from('data') }
     * ]);
     */
  });
});
