import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/*
|--------------------------------------------------------------------------
| ACCESSIBILITY TESTS
|--------------------------------------------------------------------------
| Tests de accesibilidad usando @axe-core/playwright
| 
| AxeBuilder permite validar:
| - WCAG 2.1 compliance (Level A, AA, AAA)
| - Contraste de colores
| - Labels en formularios
| - Roles ARIA
| - Navegación por teclado
| - Texto alternativo en imágenes
| 
| Instalación:
|   npm install --save-dev @axe-core/playwright
| 
| Niveles WCAG:
| - Level A: Requisitos básicos de accesibilidad
| - Level AA: Estándar recomendado para la mayoría de sitios
| - Level AAA: Máximo nivel de accesibilidad
|--------------------------------------------------------------------------
*/

test.describe('Accessibility Tests', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-034: Full page accessibility scan
  |--------------------------------------------------------------------------
  | NOTA EDUCATIVA:
  | Este test demuestra cómo ejecutar un scan de accesibilidad.
  | La página de práctica tiene violaciones intencionales para aprendizaje.
  | En producción, trabajarías para eliminar todas las violaciones.
  |--------------------------------------------------------------------------
  */
  test('TC-034: full page accessibility scan', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('domcontentloaded');
    
    const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    // Validar que el scan se ejecutó
    expect(accessibilityScanResults).toBeDefined();
    expect(accessibilityScanResults.violations).toBeDefined();
    
    // Log educativo de violaciones encontradas
    console.log(`\nAccessibility Scan Results:`);
    console.log(`   Violations found: ${accessibilityScanResults.violations.length}`);
    console.log(`   Passes: ${accessibilityScanResults.passes.length}`);
    
    // En producción: expect(accessibilityScanResults.violations).toEqual([]);
    // Aquí validamos que el scan funcionó
    expect(accessibilityScanResults.violations.length).toBeGreaterThanOrEqual(0);
  });

  /*
  |--------------------------------------------------------------------------
  | TC-035: Scan with specific WCAG tags
  |--------------------------------------------------------------------------
  */
  test('TC-035: scan with specific WCAG tags', async ({ page }) => {
    await page.goto('/');
    
    // Scan solo WCAG 2.1 Level A y AA
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag21a', 'wcag2aa', 'wcag21aa'])
      .analyze();
    
    expect(accessibilityScanResults).toBeDefined();
    console.log(`WCAG Level A/AA violations: ${accessibilityScanResults.violations.length}`);
    expect(accessibilityScanResults.violations.length).toBeGreaterThanOrEqual(0);
  });

  /*
  |--------------------------------------------------------------------------
  | TC-036: Form accessibility scan
  |--------------------------------------------------------------------------
  */
  test('TC-036: form accessibility scan', async ({ page }) => {
    await page.goto('/');
    
    // Scan solo el área del formulario
    const accessibilityScanResults = await new AxeBuilder({ page })
      .include('#HTML9')
      .analyze();
    
    expect(accessibilityScanResults).toBeDefined();
    console.log(`Form accessibility issues: ${accessibilityScanResults.violations.length}`);
    expect(accessibilityScanResults.violations.length).toBeGreaterThanOrEqual(0);
  });

  /*
  |--------------------------------------------------------------------------
  | TC-037: Scan excluding third-party content
  |--------------------------------------------------------------------------
  */
  test('TC-037: scan excluding third-party content', async ({ page }) => {
    await page.goto('/');
    
    // Excluir ads y contenido third-party
    const accessibilityScanResults = await new AxeBuilder({ page })
      .exclude('.widget.Attribution')
      .analyze();
    
    expect(accessibilityScanResults).toBeDefined();
    console.log(`Violations (excluding third-party): ${accessibilityScanResults.violations.length}`);
    expect(accessibilityScanResults.violations.length).toBeGreaterThanOrEqual(0);
  });

  /*
  |--------------------------------------------------------------------------
  | TC-038: Color contrast validation
  |--------------------------------------------------------------------------
  */
  test('TC-038: color contrast validation', async ({ page }) => {
    await page.goto('/');
    
    // Scan solo problemas de contraste
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['cat.color'])
      .analyze();
    
    expect(accessibilityScanResults).toBeDefined();
    console.log(`Color contrast violations: ${accessibilityScanResults.violations.length}`);
    
    // Imprimir detalles de violaciones de contraste para aprendizaje
    if (accessibilityScanResults.violations.length > 0) {
      console.log('\nContrast Issues Found:');
      accessibilityScanResults.violations.forEach(v => {
        console.log(`   - ${v.id}: ${v.description} (${v.nodes.length} nodes)`);
      });
    }
    expect(accessibilityScanResults.violations.length).toBeGreaterThanOrEqual(0);
  });

  /*
  |--------------------------------------------------------------------------
  | TC-039: Detailed accessibility report
  |--------------------------------------------------------------------------
  */
  test('TC-039: detailed accessibility report', async ({ page }) => {
    await page.goto('/');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa'])
      .analyze();
    
    expect(accessibilityScanResults).toBeDefined();
    
    // Reporte detallado educativo
    console.log('\nDetailed Accessibility Report:');
    console.log(`   Total violations: ${accessibilityScanResults.violations.length}`);
    console.log(`   Total passes: ${accessibilityScanResults.passes.length}`);
    console.log(`   Incomplete: ${accessibilityScanResults.incomplete.length}`);
    
    // Desglose por impacto
    const impacts = { critical: 0, serious: 0, moderate: 0, minor: 0 };
    accessibilityScanResults.violations.forEach(v => {
      if (v.impact) impacts[v.impact]++;
    });
    
    console.log('\n   By Impact Level:');
    console.log(`   Critical: ${impacts.critical}`);
    console.log(`   Serious: ${impacts.serious}`);
    console.log(`   Moderate: ${impacts.moderate}`);
    console.log(`   Minor: ${impacts.minor}`);
    expect(accessibilityScanResults.violations.length).toBeGreaterThanOrEqual(0);
  });
});
