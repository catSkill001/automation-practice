import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| VISUAL REGRESSION TESTING
|--------------------------------------------------------------------------
| Visual regression testing detecta cambios inesperados en la UI comparando
| screenshots. Playwright incluye toHaveScreenshot() que:
| - Captura screenshot automáticamente en primera ejecución (baseline)
| - Compara con baseline en ejecuciones posteriores
| - Genera diff visual si hay diferencias
| - Permite configurar tolerancia y máscaras
| 
| Casos de uso:
| - Detectar cambios visuales no intencionales
| - Validar que nuevos features no afectan otras áreas
| - Testing cross-browser de renderizado
| - Validar responsive design
| 
| Comandos:
| - Primera vez: npx playwright test --update-snapshots
| - Validación: npx playwright test
| 
| Documentación: https://playwright.dev/docs/test-snapshots
|--------------------------------------------------------------------------
*/

test.describe('Visual Regression Testing', () => {

  test.beforeEach(async ({ page }) => {
    // Configurar viewport fijo para evitar diferencias por tamaño de ventana
    await page.setViewportSize({ width: 1280, height: 720 });
  });

  /*
  |--------------------------------------------------------------------------
  | TC-037: Screenshot de página completa
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Capturar y comparar la página completa incluyendo scroll
  | 
  | Pasos:
  |   1. Navegar a la página de práctica
  |   2. Esperar a que la página cargue completamente
  |   3. Capturar screenshot de página completa
  |   4. Comparar con baseline guardado
  | 
  | Primera ejecución:
  |   - Crea archivo .png en carpeta snapshots/
  |   - Este es el "baseline" para comparaciones futuras
  | 
  | Ejecuciones posteriores:
  |   - Compara screenshot actual con baseline
  |   - Si hay diferencias, genera diff visual
  |   - El test falla si excede el threshold de diferencias
  | 
  | Resultado esperado:
  |   - Screenshot capturado correctamente
  |   - Comparación exitosa con baseline
  |   - Sin diferencias visuales
  | 
  | Conceptos clave:
  |   - toHaveScreenshot(): Captura y compara automáticamente
  |   - fullPage: true captura toda la página incluyendo scroll
  |   - El nombre del archivo debe ser descriptivo y único
  |--------------------------------------------------------------------------
  */
  test('TC-037: Full page screenshot comparison', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página
    // Usa page.goto() con la ruta '/p/playwrightpractice.html'
    
    
    // TODO: Paso 2 - Esperar carga completa
    // Usa page.waitForLoadState('networkidle') para esperar que no haya requests pendientes
    // Esto evita capturas con contenido parcialmente cargado
    // Sintaxis: await page.waitForLoadState('networkidle');
    
    
    // TODO: Paso 3 - Capturar screenshot de página completa
    // Usa expect(page).toHaveScreenshot() con:
    // - Nombre: 'full-page.png'
    // - Option fullPage: true (captura todo incluyendo scroll)
    // - Option maxDiffPixels: 8000 (tolerancia para contenido dinámico)
    // Sintaxis: await expect(page).toHaveScreenshot('nombre.png', { fullPage: true, maxDiffPixels: numero });
    
    
    // TODO: NOTA - Primera ejecución
    // Si es la primera vez que corres este test, ejecuta:
    // npx playwright test visual --update-snapshots
    // Esto creará el baseline screenshot
    
    // TODO: NOTA - Ubicación de snapshots
    // Los screenshots se guardan en:
    // tests/playwright-practice/visual/visual-regression.spec.ts-snapshots/
    // Con nombres como: full-page-chromium-win32.png
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-038: Screenshot de elemento específico
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Capturar solo un elemento específico en lugar de toda la página
  | 
  | Ventajas:
  |   - Tests más rápidos (imagen más pequeña)
  |   - Enfoque en componente específico
  |   - Ignora cambios en otras áreas de la página
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Localizar el elemento a capturar
  |   3. Hacer screenshot solo de ese elemento
  | 
  | Resultado esperado:
  |   - Screenshot del elemento individual
  |   - Comparación exitosa
  | 
  | Conceptos clave:
  |   - locator.screenshot(): Captura solo el elemento
  |   - Útil para componentes aislados
  |   - Más resistente a cambios fuera del componente
  |--------------------------------------------------------------------------
  */
  test('TC-038: Element screenshot comparison', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página
    // Usa page.goto() con la ruta '/p/playwrightpractice.html'
    // Sintaxis: await page.goto('/p/playwrightpractice.html');
    
    
    // TODO: Paso 1b - Esperar carga completa
    // Usa page.waitForLoadState('networkidle')
    // Sintaxis: await page.waitForLoadState('networkidle');
    
    
    // TODO: Paso 2 - Localizar el header de la página
    // Usa page.locator() para encontrar el elemento con id 'header'
    // Guarda en variable llamada header
    // Sintaxis: const header = page.locator('#header');
    
    
    // TODO: Paso 3 - Capturar screenshot del elemento
    // Usa expect(header).toHaveScreenshot() con:
    // - Nombre: 'header-element.png'
    // No necesitas fullPage aquí porque solo capturas el elemento
    // Sintaxis: await expect(header).toHaveScreenshot('nombre.png');
    
    
    // TODO: BONUS - Prueba con otros elementos
    // Intenta capturar:
    // - Un botón específico: page.getByRole('button', { name: 'Submit' })
    // - Una tabla: page.locator('#productTable')
    // - Un formulario: page.locator('form')
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-039: Screenshot con elementos enmascarados
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Excluir elementos dinámicos de la comparación usando masks
  | 
  | Elementos dinámicos comunes:
  |   - Timestamps y fechas
  |   - Banners de publicidad
  |   - Contadores de visitas
  |   - Widgets de terceros
  |   - Contenido aleatorio
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Identificar elementos dinámicos a enmascarar
  |   3. Capturar screenshot con máscaras aplicadas
  | 
  | Resultado esperado:
  |   - Screenshot con áreas enmascaradas (rectángulos de color sólido)
  |   - Solo se comparan áreas no enmascaradas
  |   - Test no falla por cambios en contenido dinámico
  | 
  | Conceptos clave:
  |   - mask: [locator1, locator2]: Array de elementos a enmascarar
  |   - Las máscaras aparecen como rectángulos rosa en screenshots
  |   - Útil para contenido que cambia frecuentemente
  |--------------------------------------------------------------------------
  */
  test('TC-039: Screenshot with masked dynamic elements', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página
    // Usa page.goto() con la ruta '/p/playwrightpractice.html'
    // Sintaxis: await page.goto('/p/playwrightpractice.html');
    
    
    // TODO: Paso 1b - Esperar carga completa
    // Usa page.waitForLoadState('networkidle')
    // Sintaxis: await page.waitForLoadState('networkidle');
    
    
    // TODO: Paso 1 - Identificar elementos dinámicos
    // En esta página, podemos enmascarar:
    // - Banners de ads (si existen): page.locator('.ad-banner')
    // - Timestamps: page.locator('.timestamp')
    // - Widgets de terceros: page.locator('#third-party-widget')
    
    // TODO: Paso 2 - Capturar con máscaras
    // Usa expect(page).toHaveScreenshot() con:
    // - Nombre: 'masked-page.png'
    // - Option fullPage: true
    // - Option mask: [array de locators a enmascarar]
    // - Option maxDiffPixels: 8000
    // Ejemplo: mask: [page.locator('.ads'), page.locator('.date')]
    // Sintaxis: await expect(page).toHaveScreenshot('nombre.png', { 
    //   fullPage: true,
    //   mask: [locator1, locator2],
    //   maxDiffPixels: 8000
    // });
    
    
    // TODO: NOTA - Visualización de máscaras
    // En el screenshot generado verás rectángulos de color rosa
    // cubriendo los elementos enmascarados
    
    // TODO: BONUS - Máscaras dinámicas
    // Puedes enmascarar múltiples elementos con el mismo selector:
    // mask: [page.locator('.dynamic-content')]
    // Esto enmascarará todos los elementos que coincidan
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-040: Screenshot con threshold personalizado
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Configurar tolerancia a diferencias pixel por pixel
  | 
  | Options de threshold:
  |   - maxDiffPixels: Cantidad máxima de pixels diferentes permitidos
  |   - maxDiffPixelRatio: Porcentaje de pixels diferentes (0-1)
  |   - threshold: Tolerancia por pixel individual (0-1)
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Capturar con threshold alto para tolerar pequeñas diferencias
  |   3. Validar que pequeñas variaciones no fallan el test
  | 
  | Resultado esperado:
  |   - Test pasa con pequeñas diferencias de antialiasing
  |   - Test falla solo con cambios visuales significativos
  | 
  | Conceptos clave:
  |   - maxDiffPixels: Útil para contenido semi-dinámico
  |   - threshold: Útil para diferencias de antialiasing/fonts
  |   - Ajusta según necesidades de tu proyecto
  |--------------------------------------------------------------------------
  */
  test('TC-040: Screenshot with custom threshold', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página
    // Usa page.goto() con la ruta '/p/playwrightpractice.html'
    // Sintaxis: await page.goto('/p/playwrightpractice.html');
    
    
    // TODO: Paso 1b - Esperar carga completa
    // Usa page.waitForLoadState('networkidle')
    // Sintaxis: await page.waitForLoadState('networkidle');
    
    
    // TODO: Paso 1 - Capturar con threshold alto
    // Usa expect(page).toHaveScreenshot() con:
    // - Nombre: 'threshold-page.png'
    // - Option fullPage: true
    // - Option maxDiffPixels: 8000 (permite hasta 8000 pixels diferentes)
    // - Option threshold: 0.2 (20% de diferencia por pixel individual)
    // Sintaxis: await expect(page).toHaveScreenshot('nombre.png', {
    //   fullPage: true,
    //   maxDiffPixels: 8000,
    //   threshold: 0.2
    // });
    
    
    // TODO: NOTA - Cuándo usar cada threshold
    // maxDiffPixels:
    //   - Para páginas con contenido dinámico limitado
    //   - Valor típico: 100-5000 dependiendo del tamaño de página
    // 
    // threshold:
    //   - Para diferencias de rendering (fonts, antialiasing)
    //   - Valor típico: 0.1-0.3 (10-30%)
    // 
    // maxDiffPixelRatio:
    //   - Para comparar porcentaje de la imagen total
    //   - Valor típico: 0.01-0.05 (1-5%)
    
    // TODO: BONUS - Testing cross-browser
    // Los thresholds son especialmente útiles para testing cross-browser
    // donde los browsers renderizan con ligeras diferencias:
    // - Firefox vs Chrome font rendering
    // - Safari vs Chrome antialiasing
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-041: Screenshot de estado específico - Modal abierto
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Capturar screenshot de un estado específico de la UI (modal abierto)
  | 
  | Estados comunes a capturar:
  |   - Modals/dialogs abiertos
  |   - Dropdowns expandidos
  |   - Tooltips visibles
  |   - Tabs específicos activos
  |   - Formularios con errores
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Interactuar para mostrar el modal
  |   3. Esperar a que el modal sea visible
  |   4. Capturar screenshot con el modal abierto
  | 
  | Resultado esperado:
  |   - Modal visible en screenshot
  |   - Comparación exitosa del estado específico
  | 
  | Conceptos clave:
  |   - Capturar estados interactivos específicos
  |   - Validar comportamiento visual de componentes
  |   - Útil para componentes overlay
  |--------------------------------------------------------------------------
  */
  test('TC-041: Screenshot of specific UI state (modal opened)', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página
    // Usa page.goto() con la ruta '/p/playwrightpractice.html'
    // Sintaxis: await page.goto('/p/playwrightpractice.html');
    
    
    // TODO: Paso 1b - Esperar carga completa
    // Usa page.waitForLoadState('networkidle')
    // Sintaxis: await page.waitForLoadState('networkidle');
    
    
    // TODO: Paso 1 - Configurar handler para el alert
    // En esta página no hay modals reales, pero podemos simular
    // capturando el estado antes de que aparezca un alert
    // Por ahora, simplemente captura un estado interactivo
    
    // TODO: Paso 2 - Interactuar con la UI para cambiar estado
    // Por ejemplo, hacer hover sobre un elemento para mostrar tooltip
    // O expandir un accordion
    // Usa page.getByRole() o page.locator() para encontrar el elemento
    // Ejemplo: await page.getByRole('button', { name: 'Show' }).click();
    
    
    // TODO: Paso 3 - Esperar que el elemento sea visible
    // Si hay un modal/dropdown/tooltip, espera a que sea visible
    // Sintaxis: await page.locator('.modal').waitFor({ state: 'visible' });
    
    
    // TODO: Paso 4 - Capturar screenshot del estado
    // Usa expect(page).toHaveScreenshot() con:
    // - Nombre: 'modal-state.png'
    // - Option fullPage: true
    // - Option maxDiffPixels: 8000
    // Sintaxis: await expect(page).toHaveScreenshot('nombre.png', { 
    //   fullPage: true,
    //   maxDiffPixels: 8000
    // });
    
    
    // TODO: BONUS - Captura múltiples estados
    // Puedes crear varios tests para diferentes estados:
    // - test('tab1 active'): Click tab 1, screenshot
    // - test('tab2 active'): Click tab 2, screenshot
    // - test('form with errors'): Submit form vacío, screenshot
    
    // TODO: BONUS - Animaciones
    // Para componentes con animaciones:
    // await page.locator('.animated').waitFor({ state: 'visible' });
    // await page.waitForTimeout(500); // Espera a que termine animación
    // await expect(page).toHaveScreenshot('after-animation.png');
    
  });

});
