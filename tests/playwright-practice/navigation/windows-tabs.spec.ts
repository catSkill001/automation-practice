import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| WINDOWS & TABS - Manejo de nuevas ventanas y pestañas
|--------------------------------------------------------------------------
| Las aplicaciones web pueden abrir nuevas ventanas o pestañas.
| Playwright maneja esto con el concepto de "pages" dentro de un "context".
| 
| Conceptos clave:
| - BrowserContext: Contenedor de múltiples páginas
| - Page: Una pestaña o ventana individual
| - context.waitForEvent('page'): Espera a que se abra una nueva página
| 
| Casos de uso:
| - Links con target="_blank"
| - window.open() en JavaScript
| - Popups de OAuth/login
| - Ventanas de ayuda o documentación
| 
| Documentación: https://playwright.dev/docs/pages
|--------------------------------------------------------------------------
*/

test.describe('Windows & Tabs', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-022: Manejar nueva pestaña
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo detectar y manejar una nueva pestaña que se abre
  | 
  | Precondiciones:
  |   - La página debe tener un link/botón que abre nueva pestaña
  |   - El elemento debe tener el texto "New Tab"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Configurar Promise para esperar el evento 'page'
  |   3. Hacer click en el botón "New Tab"
  |   4. Capturar la nueva página que se abre
  |   5. Esperar a que la nueva página cargue
  |   6. Verificar que la nueva página existe
  |   7. Cerrar la nueva página
  | 
  | Resultado esperado:
  |   - La nueva pestaña se detecta correctamente
  |   - Podemos interactuar con la nueva página
  |   - La nueva página se cierra sin errores
  | 
  | Conceptos clave:
  |   - context.waitForEvent('page'): Espera nueva página
  |   - Promise.all(): Ejecuta click y wait simultáneamente
  |   - newPage.waitForLoadState(): Espera a que cargue
  |   - newPage.close(): Cierra la pestaña
  |   - El context mantiene todas las páginas abiertas
  |--------------------------------------------------------------------------
  */
  test('handle new tab', async ({ page, context }) => {
    // Navegar a la página de práctica
    await page.goto('/p/playwrightpractice.html');
    
    // Preparar la captura de la nueva página
    // Promise.all ejecuta ambas operaciones en paralelo:
    // 1. Esperar a que se dispare el evento 'page' (nueva pestaña)
    // 2. Hacer click en el botón que abre la pestaña
    const [newPage] = await Promise.all([
      // Esperar a que se abra una nueva página en este context
      // Esto debe estar ANTES del click para no perder el evento
      context.waitForEvent('page'),
      
      // Hacer click en el botón/link que abre la nueva pestaña
      // Esto dispara window.open() o <a target="_blank">
      page.getByText('New Tab').click()
    ]);
    
    // Esperar a que la nueva página termine de cargar
    // Opciones: 'load', 'domcontentloaded', 'networkidle'
    await newPage.waitForLoadState();
    
    // Verificar que la nueva página fue creada correctamente
    // newPage es una instancia de Page, igual que page
    expect(newPage).toBeTruthy();
    
    /*
     * Interacciones útiles con la nueva página:
     * 
     * // Obtener la URL de la nueva página:
     * console.log('New page URL:', newPage.url());
     * 
     * // Interactuar con elementos en la nueva página:
     * await newPage.getByRole('button', { name: 'Accept' }).click();
     * 
     * // Tomar screenshot de la nueva página:
     * await newPage.screenshot({ path: 'new-tab.png' });
     * 
     * // Obtener el título:
     * const title = await newPage.title();
     * 
     * // Cambiar el foco a la nueva página:
     * await newPage.bringToFront();
     * 
     * // Obtener todas las páginas abiertas:
     * const allPages = context.pages();
     * console.log(`Total pages: ${allPages.length}`);
     */
    
    // Cerrar la nueva pestaña cuando terminemos de usarla
    // Esto libera recursos y mantiene limpio el context
    await newPage.close();
    
    /*
     * Nota: El context se cierra automáticamente al final del test,
     * cerrando todas las páginas abiertas. Pero es buena práctica
     * cerrar páginas que ya no necesitamos.
     */
  });
  
  /*
   * Otros escenarios comunes con múltiples ventanas:
   * 
   * test('switch between tabs', async ({ page, context }) => {
   *   // Abrir múltiples pestañas
   *   const [tab1] = await Promise.all([
   *     context.waitForEvent('page'),
   *     page.click('text=Open Tab 1')
   *   ]);
   *   
   *   const [tab2] = await Promise.all([
   *     context.waitForEvent('page'),
   *     page.click('text=Open Tab 2')
   *   ]);
   *   
   *   // Trabajar en tab1
   *   await tab1.fill('#input1', 'data for tab 1');
   *   
   *   // Cambiar a tab2
   *   await tab2.fill('#input2', 'data for tab 2');
   *   
   *   // Volver a la página original
   *   await page.fill('#input3', 'data for main page');
   *   
   *   // Cerrar todas las pestañas
   *   await tab1.close();
   *   await tab2.close();
   * });
   */
});
