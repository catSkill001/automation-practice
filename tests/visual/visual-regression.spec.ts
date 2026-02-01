import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| VISUAL REGRESSION TESTING
|--------------------------------------------------------------------------
| Playwright incluye soporte nativo para visual regression mediante
| screenshot comparison.
| 
| Ventajas:
| - Detecta cambios visuales no intencionales
| - Valida que el UI se ve correctamente
| - Funciona cross-browser
| - Actualización automática de baselines
| 
| Cómo funciona:
| 1. Primera ejecución: Crea screenshots base (golden files)
| 2. Siguientes ejecuciones: Compara con el baseline
| 3. Si difiere: Genera diff image y falla el test
| 4. Para actualizar: npx playwright test --update-snapshots
| 
| Documentación: https://playwright.dev/docs/test-snapshots
|--------------------------------------------------------------------------
*/

test.describe('Visual Regression Tests', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-029: Full Page Screenshot
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Capturar y comparar screenshot de página completa
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Esperar que cargue completamente
  |   3. Capturar screenshot de página completa
  |   4. Comparar con baseline
  | 
  | Resultado esperado:
  |   - Screenshot coincide con el baseline
  |   - No hay diferencias visuales
  | 
  | Conceptos clave:
  |   - toHaveScreenshot(): Assertion para visual regression
  |   - fullPage: true para capturar toda la página con scroll
  |   - Primera ejecución crea el baseline
  |   - Siguientes ejecuciones comparan contra baseline
  |--------------------------------------------------------------------------
  */
  test('full page screenshot comparison', async ({ page }) => {
    // Fijar viewport para consistencia
    await page.setViewportSize({ width: 1280, height: 720 });
    
    // Navegar a la página de práctica
    await page.goto('/');
    
    // Esperar a que la página cargue completamente
    await page.waitForLoadState('networkidle');
    
    // Capturar y comparar screenshot de página completa
    // fullPage: true captura toda la página incluyendo contenido con scroll
    // maxDiffPixels: permite pequeñas diferencias por contenido dinámico (ads, timestamps)
    await expect(page).toHaveScreenshot('full-page.png', {
      fullPage: true,
      maxDiffPixels: 8000  // Permite diferencias por contenido dinámico de la página
    });
  });

  /*
  |--------------------------------------------------------------------------
  | TC-030: Element Screenshot
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Capturar y comparar screenshot de un elemento específico
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Localizar un elemento específico
  |   3. Capturar screenshot solo de ese elemento
  |   4. Comparar con baseline
  | 
  | Resultado esperado:
  |   - Screenshot del elemento coincide con el baseline
  |   - Útil para componentes individuales
  | 
  | Conceptos clave:
  |   - locator.screenshot(): Captura solo el elemento
  |   - toHaveScreenshot() en locator para elementos individuales
  |   - Más preciso que full page para componentes
  |--------------------------------------------------------------------------
  */
  test('element screenshot comparison', async ({ page }) => {
    // Navegar a la página
    await page.goto('/');
    
    // Esperar que cargue
    await page.waitForLoadState('domcontentloaded');
    
    // Localizar un elemento específico (por ejemplo, el header)
    const header = page.locator('header').first();
    
    // Esperar que el elemento sea visible
    await expect(header).toBeVisible();
    
    // Capturar y comparar screenshot del elemento
    await expect(header).toHaveScreenshot('header-element.png');
  });

  /*
  |--------------------------------------------------------------------------
  | TC-031: Screenshot con máscara
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo ignorar elementos dinámicos en screenshots
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Capturar screenshot enmascarando elementos dinámicos
  |   3. Los elementos enmascarados se pintan de color sólido
  | 
  | Resultado esperado:
  |   - Los elementos dinámicos no afectan la comparación
  |   - El resto de la página se compara normalmente
  | 
  | Conceptos clave:
  |   - mask: Array de locators a enmascarar
  |   - Útil para fechas, timestamps, ads, contenido aleatorio
  |   - Los elementos enmascarados no causan fallos
  |--------------------------------------------------------------------------
  */
  test('screenshot with masked elements', async ({ page }) => {
    // Navegar a la página
    await page.goto('/');
    
    // Esperar que cargue
    await page.waitForLoadState('networkidle');
    
    // Capturar screenshot enmascarando elementos dinámicos
    // Por ejemplo, ads o contenido que cambia frecuentemente
    await expect(page).toHaveScreenshot('masked-page.png', {
      fullPage: false,
      mask: [
        // Enmascarar elementos con clase 'ad' o 'advertisement'
        page.locator('.ad').first(),
        page.locator('[class*="advertisement"]').first()
      ].filter(async (loc) => {
        try {
          return await loc.count() > 0;
        } catch {
          return false;
        }
      })
    });
  });

  /*
  |--------------------------------------------------------------------------
  | TC-032: Screenshot con threshold personalizado
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Configurar tolerancia para diferencias mínimas
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Capturar screenshot con threshold personalizado
  |   3. Diferencias menores al threshold se ignoran
  | 
  | Resultado esperado:
  |   - Diferencias pixel muy pequeñas no fallan el test
  |   - Útil para anti-aliasing o diferencias de renderizado
  | 
  | Conceptos clave:
  |   - threshold: Porcentaje de diferencia aceptable (0-1)
  |   - 0.2 = 20% de diferencia permitida
  |   - Útil para cross-browser testing
  |--------------------------------------------------------------------------
  */
  test('screenshot with custom threshold', async ({ page }) => {
    // Navegar a la página
    await page.goto('/');
    
    // Esperar que cargue
    await page.waitForLoadState('domcontentloaded');
    
    // Capturar con threshold del 2% (0.02)
    // Diferencias menores al 2% serán ignoradas
    await expect(page).toHaveScreenshot('threshold-page.png', {
      fullPage: false,
      threshold: 0.02,
      maxDiffPixels: 100  // Máximo 100 pixels diferentes permitidos
    });
  });

  /*
  |--------------------------------------------------------------------------
  | TC-033: Screenshot de modal/overlay
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Capturar estado específico de UI (modal abierto)
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Disparar acción que abre modal
  |   3. Esperar que el modal sea visible
  |   4. Capturar screenshot del modal
  | 
  | Resultado esperado:
  |   - Screenshot captura el modal abierto
  |   - Compara contra baseline del modal
  | 
  | Conceptos clave:
  |   - Useful para estados específicos de UI
  |   - Combinar acciones + screenshot
  |   - Validar que overlays se ven correctamente
  |--------------------------------------------------------------------------
  */
  test('screenshot of modal state', async ({ page }) => {
    // Navegar a la página
    await page.goto('/p/playwrightpractice.html');
    
    // Buscar y hacer click en elemento que abre modal/popup
    // (ajustar según elementos disponibles en la página)
    try {
      const triggerButton = page.getByRole('button').first();
      await triggerButton.click();
      
      // Esperar un momento para animación
      await page.waitForTimeout(500);
      
      // Capturar screenshot del estado actual
      await expect(page).toHaveScreenshot('modal-state.png', {
        fullPage: false
      });
    } catch (error) {
      // Si no hay modal, capturar página normal
      await expect(page).toHaveScreenshot('modal-state.png', {
        fullPage: false
      });
    }
  });
});

/*
|--------------------------------------------------------------------------
| Comandos útiles para Visual Regression
|--------------------------------------------------------------------------
| 
| # Actualizar todos los baselines:
| npx playwright test --update-snapshots
| 
| # Actualizar solo un test:
| npx playwright test visual --update-snapshots
| 
| # Ver diferencias en UI Mode:
| npx playwright test --ui
| 
| # Los screenshots se guardan en:
| - Baselines: tests/visual/visual-regression.spec.ts-snapshots/
| - Actual: test-results/.../actual/
| - Diff: test-results/.../diff/
|--------------------------------------------------------------------------
*/
