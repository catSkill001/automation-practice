import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/*
|--------------------------------------------------------------------------
| ACCESSIBILITY TESTING CON AXE-CORE
|--------------------------------------------------------------------------
| La accesibilidad web es crítica para que todos los usuarios puedan
| interactuar con tu aplicación. Playwright integra @axe-core/playwright
| para validar automáticamente reglas WCAG.
| 
| Niveles WCAG:
| - Level A: Requisitos básicos mínimos
| - Level AA: Estándar recomendado (incluye contraste de colores)
| - Level AAA: Nivel más alto de accesibilidad
| 
| Categorías de reglas:
| - wcag2a: Conformidad Level A
| - wcag2aa: Conformidad Level AA
| - wcag2aaa: Conformidad Level AAA
| - best-practice: Mejores prácticas más allá de WCAG
| - wcag21a, wcag21aa: WCAG 2.1 específicas
| 
| Instalación:
| npm install --save-dev @axe-core/playwright
| 
| Documentación:
| - Playwright: https://playwright.dev/docs/accessibility-testing
| - Axe-core: https://github.com/dequelabs/axe-core-npm
| - WCAG: https://www.w3.org/WAI/WCAG21/quickref/
|--------------------------------------------------------------------------
*/

test.describe('Accessibility Testing', () => {

  /*
  |--------------------------------------------------------------------------
  | TC-042: Scan completo de accesibilidad
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Ejecutar scan de accesibilidad completo en la página
  | 
  | Qué valida axe-core:
  |   - Labels en form inputs
  |   - Contraste de colores
  |   - Estructura de headings (h1, h2, h3...)
  |   - Atributos ARIA correctos
  |   - Imágenes con alt text
  |   - Landmarks (nav, main, footer)
  |   - Keyboard navigation
  |   - Focus management
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Crear instancia de AxeBuilder
  |   3. Ejecutar análisis completo
  |   4. Validar que no hay violaciones críticas
  | 
  | Resultado esperado:
  |   - Scan ejecutado sin errores
  |   - Reporte con violaciones encontradas (si existen)
  |   - Lista de elementos afectados
  | 
  | Conceptos clave:
  |   - AxeBuilder: Clase para configurar y ejecutar scans
  |   - analyze(): Ejecuta el análisis y retorna resultados
  |   - violations: Array con reglas violadas
  |--------------------------------------------------------------------------
  */
  test('TC-042: Full page accessibility scan', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página
    // Usa page.goto() con la ruta '/p/playwrightpractice.html'
    
    
    // TODO: Paso 2 - Esperar carga completa
    // Usa page.waitForLoadState('networkidle')
    
    
    // TODO: Paso 3 - Ejecutar scan de accesibilidad
    // Crea una instancia de AxeBuilder pasando { page }
    // Ejecuta analyze() y guarda el resultado en accessibilityScanResults
    // Sintaxis: const accessibilityScanResults = await new AxeBuilder({ page }).analyze();
    
    
    // TODO: Paso 4 - Imprimir resultados en consola
    // Imprime la cantidad de violaciones encontradas
    // console.log('Accessibility Scan Results:');
    // console.log(`Total violations found: ${accessibilityScanResults.violations.length}`);
    
    
    // TODO: Paso 5 - Validar cantidad de violaciones
    // NOTA: Esta página de práctica tiene problemas de accesibilidad intencionalmente
    // Para propósitos educativos, validamos que el scan se ejecutó correctamente
    // En un proyecto real, esperarías violations.length === 0
    // Usa expect(accessibilityScanResults.violations.length).toBeGreaterThanOrEqual(0);
    
    
    // TODO: BONUS - Imprimir detalles de violaciones
    // Si hay violaciones, imprime información detallada:
    // if (accessibilityScanResults.violations.length > 0) {
    //   accessibilityScanResults.violations.forEach(violation => {
    //     console.log(`\n${violation.impact} - ${violation.id}`);
    //     console.log(`Description: ${violation.description}`);
    //     console.log(`Help: ${violation.help}`);
    //     console.log(`Affected elements: ${violation.nodes.length}`);
    //   });
    // }
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-043: Validar conformidad WCAG Level A y AA
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Ejecutar scan con tags específicos de WCAG Level A y AA
  | 
  | Tags disponibles:
  |   - wcag2a: WCAG 2.0 Level A
  |   - wcag2aa: WCAG 2.0 Level AA (incluye wcag2a)
  |   - wcag21a: WCAG 2.1 Level A
  |   - wcag21aa: WCAG 2.1 Level AA
  |   - wcag22aa: WCAG 2.2 Level AA
  |   - section508: Section 508 (requisitos gubernamentales US)
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Ejecutar scan con tags wcag2a y wcag2aa
  |   3. Reportar violaciones específicas de WCAG
  | 
  | Resultado esperado:
  |   - Scan ejecutado con tags específicos
  |   - Violaciones limitadas a reglas WCAG AA
  | 
  | Conceptos clave:
  |   - withTags(): Filtra reglas por categorías
  |   - Múltiples tags: ['wcag2a', 'wcag2aa']
  |   - Enfoque en estándares específicos
  |--------------------------------------------------------------------------
  */
  test('TC-043: WCAG Level A and AA compliance', async ({ page }) => {
    await page.goto('/p/playwrightpractice.html');
    await page.waitForLoadState('networkidle');
    
    // TODO: Paso 1 - Ejecutar scan con tags WCAG
    // Usa new AxeBuilder({ page }).withTags() para especificar:
    // - ['wcag2a', 'wcag2aa']: Valida ambos niveles
    // Luego ejecuta analyze()
    // Sintaxis: const results = await new AxeBuilder({ page })
    //   .withTags(['wcag2a', 'wcag2aa'])
    //   .analyze();
    
    
    // TODO: Paso 2 - Imprimir resumen de resultados
    // console.log(`\nWCAG A/AA Scan:`);
    // console.log(`Violations: ${results.violations.length}`);
    // console.log(`Passes: ${results.passes.length}`);
    // console.log(`Incomplete: ${results.incomplete.length}`);
    
    
    // TODO: Paso 3 - Validar ejecución
    // expect(results.violations.length).toBeGreaterThanOrEqual(0);
    
    
    // TODO: BONUS - Agrupar por impact level
    // const critical = results.violations.filter(v => v.impact === 'critical');
    // const serious = results.violations.filter(v => v.impact === 'serious');
    // const moderate = results.violations.filter(v => v.impact === 'moderate');
    // const minor = results.violations.filter(v => v.impact === 'minor');
    // 
    // console.log(`\nBy Impact Level:`);
    // console.log(`Critical: ${critical.length}`);
    // console.log(`Serious: ${serious.length}`);
    // console.log(`Moderate: ${moderate.length}`);
    // console.log(`Minor: ${minor.length}`);
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-044: Validar accesibilidad de formularios
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Enfocarse en la accesibilidad de elementos de formulario
  | 
  | Reglas comunes de forms:
  |   - label: Todos los inputs deben tener label asociado
  |   - label-title-only: Labels no solo con title
  |   - input-button-name: Buttons deben tener nombre accesible
  |   - aria-input-field-name: Fields con ARIA deben tener nombre
  |   - autocomplete-valid: Autocomplete con valores válidos
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Ejecutar scan solo en el formulario
  |   3. Validar que todos los inputs tienen labels
  | 
  | Resultado esperado:
  |   - Scan enfocado en formulario
  |   - Validación de labels y accesibilidad de inputs
  | 
  | Conceptos clave:
  |   - include(): Incluye solo ciertos elementos en el scan
  |   - Selectores CSS para delimitar scope
  |--------------------------------------------------------------------------
  */
  test('TC-044: Form accessibility validation', async ({ page }) => {
    await page.goto('/p/playwrightpractice.html');
    await page.waitForLoadState('networkidle');
    
    // TODO: Paso 1 - Ejecutar scan solo en formularios
    // Usa .include() para escanear solo dentro de elementos form
    // Sintaxis: const results = await new AxeBuilder({ page })
    //   .include('form')
    //   .analyze();
    
    
    // TODO: Paso 2 - Filtrar violaciones relacionadas con forms
    // Busca violaciones con id que contengan 'label', 'input', 'form'
    // const formViolations = results.violations.filter(v => 
    //   v.id.includes('label') || v.id.includes('input') || v.id.includes('form')
    // );
    
    
    // TODO: Paso 3 - Imprimir violaciones de forms
    // console.log(`\nForm Accessibility:`);
    // console.log(`Form-related violations: ${formViolations.length}`);
    // 
    // formViolations.forEach(violation => {
    //   console.log(`\n- ${violation.id}: ${violation.help}`);
    //   console.log(`  Elements affected: ${violation.nodes.length}`);
    // });
    
    
    // TODO: Paso 4 - Validar ejecución
    // expect(results.violations.length).toBeGreaterThanOrEqual(0);
    
    
    // TODO: BONUS - Validar inputs específicos
    // Puedes escanear inputs individuales:
    // .include('#name')
    // .include('#email')
    // .include('#phone')
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-045: Excluir elementos de terceros del scan
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Excluir widgets de terceros que no puedes controlar
  | 
  | Elementos comunes a excluir:
  |   - Ads de Google Adsense
  |   - Widgets de redes sociales
  |   - Iframes de terceros
  |   - Scripts de analytics
  |   - Chat widgets
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Identificar elementos de terceros
  |   3. Ejecutar scan excluyendo esos elementos
  | 
  | Resultado esperado:
  |   - Scan ignora elementos fuera de tu control
  |   - Enfoque en código propio
  | 
  | Conceptos clave:
  |   - exclude(): Excluye elementos del análisis
  |   - Múltiples exclude: .exclude('#ads').exclude('.widget')
  |--------------------------------------------------------------------------
  */
  test('TC-045: Exclude third-party elements from scan', async ({ page }) => {
    await page.goto('/p/playwrightpractice.html');
    await page.waitForLoadState('networkidle');
    
    // TODO: Paso 1 - Ejecutar scan excluyendo terceros
    // Esta página tiene ads y widgets de Blogger
    // Excluye elementos comunes de terceros:
    // - .sidebar (ads de Blogger)
    // - iframe[src*="google"] (Google widgets)
    // Sintaxis: const results = await new AxeBuilder({ page })
    //   .exclude('.sidebar')
    //   .exclude('iframe[src*="google"]')
    //   .analyze();
    
    
    // TODO: Paso 2 - Comparar con scan completo
    // Ejecuta otro scan sin excludes para comparar
    // const fullScan = await new AxeBuilder({ page }).analyze();
    
    
    // TODO: Paso 3 - Imprimir diferencia
    // console.log(`\nExclude Comparison:`);
    // console.log(`Full scan violations: ${fullScan.violations.length}`);
    // console.log(`Filtered scan violations: ${results.violations.length}`);
    // console.log(`Violations from third-party: ${fullScan.violations.length - results.violations.length}`);
    
    
    // TODO: Paso 4 - Validar ejecución
    // expect(results.violations.length).toBeGreaterThanOrEqual(0);
    
    
    // TODO: BONUS - Combinar include y exclude
    // Puedes usar ambos:
    // .include('main') // Solo el contenido principal
    // .exclude('main .ads') // Pero excluir ads dentro de main
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-046: Validar contraste de colores específicamente
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Enfocarse en validación de contraste de colores WCAG AA
  | 
  | Requisitos de contraste WCAG AA:
  |   - Texto normal: 4.5:1 mínimo
  |   - Texto grande (18pt+ o 14pt+ bold): 3:1 mínimo
  |   - Componentes de UI: 3:1 mínimo
  | 
  | Requisitos WCAG AAA:
  |   - Texto normal: 7:1 mínimo
  |   - Texto grande: 4.5:1 mínimo
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Ejecutar scan con reglas de contraste
  |   3. Identificar elementos con bajo contraste
  | 
  | Resultado esperado:
  |   - Lista de elementos con problemas de contraste
  |   - Valores de ratio de contraste
  | 
  | Conceptos clave:
  |   - color-contrast: Regla específica de axe-core
  |   - withRules(): Ejecuta solo reglas específicas
  |--------------------------------------------------------------------------
  */
  test('TC-046: Color contrast validation', async ({ page }) => {
    await page.goto('/p/playwrightpractice.html');
    await page.waitForLoadState('networkidle');
    
    // TODO: Paso 1 - Ejecutar scan de contraste
    // Usa .withTags(['wcag2aa']) que incluye color-contrast
    // O usa .withRules(['color-contrast']) para solo esa regla
    // Sintaxis: const results = await new AxeBuilder({ page })
    //   .withTags(['wcag2aa'])
    //   .analyze();
    
    
    // TODO: Paso 2 - Filtrar violaciones de contraste
    // const contrastViolations = results.violations.filter(v => 
    //   v.id === 'color-contrast'
    // );
    
    
    // TODO: Paso 3 - Imprimir elementos con bajo contraste
    // console.log(`\nColor Contrast Issues:`);
    // console.log(`Elements with low contrast: ${contrastViolations.length}`);
    // 
    // if (contrastViolations.length > 0) {
    //   contrastViolations.forEach(violation => {
    //     violation.nodes.forEach(node => {
    //       console.log(`\nElement: ${node.html}`);
    //       console.log(`Issue: ${node.failureSummary}`);
    //     });
    //   });
    // }
    
    
    // TODO: Paso 4 - Validar ejecución
    // expect(results.violations.length).toBeGreaterThanOrEqual(0);
    
    
    // TODO: BONUS - Herramientas de contraste
    // Para verificar contraste manualmente:
    // - WebAIM Contrast Checker: https://webaim.org/resources/contrastchecker/
    // - Chrome DevTools: Lighthouse audit
    // - Firefox DevTools: Accessibility inspector
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-047: Reporte detallado de accesibilidad
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Generar reporte completo con toda la información disponible
  | 
  | Información en el reporte:
  |   - violations: Reglas que fallaron
  |   - passes: Reglas que pasaron exitosamente
  |   - incomplete: Reglas que requieren revisión manual
  |   - inapplicable: Reglas no aplicables a esta página
  | 
  | Información por violación:
  |   - id: Identificador de la regla
  |   - impact: critical, serious, moderate, minor
  |   - description: Qué valida la regla
  |   - help: Cómo resolver el problema
  |   - helpUrl: Link a documentación
  |   - nodes: Elementos específicos afectados
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Ejecutar scan completo
  |   3. Generar reporte detallado en consola
  | 
  | Resultado esperado:
  |   - Reporte completo con todas las secciones
  |   - Información accionable para cada violación
  | 
  | Conceptos clave:
  |   - analyze() retorna objeto completo con 4 arrays
  |   - Cada violación tiene helpUrl con guía de remediación
  |--------------------------------------------------------------------------
  */
  test('TC-047: Detailed accessibility report', async ({ page }) => {
    await page.goto('/p/playwrightpractice.html');
    await page.waitForLoadState('networkidle');
    
    // TODO: Paso 1 - Ejecutar scan completo
    // const results = await new AxeBuilder({ page }).analyze();
    
    
    // TODO: Paso 2 - Imprimir resumen general
    // console.log(`\n${'='.repeat(60)}`);
    // console.log('ACCESSIBILITY REPORT');
    // console.log(`${'='.repeat(60)}`);
    // console.log(`\nSummary:`);
    // console.log(`Violations: ${results.violations.length}`);
    // console.log(`Passes: ${results.passes.length}`);
    // console.log(`Incomplete: ${results.incomplete.length}`);
    // console.log(`Inapplicable: ${results.inapplicable.length}`);
    
    
    // TODO: Paso 3 - Imprimir violaciones detalladas
    // if (results.violations.length > 0) {
    //   console.log(`\n${'='.repeat(60)}`);
    //   console.log('VIOLATIONS');
    //   console.log(`${'='.repeat(60)}`);
    //   
    //   results.violations.forEach((violation, index) => {
    //     console.log(`\n${index + 1}. ${violation.help}`);
    //     console.log(`   ID: ${violation.id}`);
    //     console.log(`   Impact: ${violation.impact?.toUpperCase()}`);
    //     console.log(`   Description: ${violation.description}`);
    //     console.log(`   Help URL: ${violation.helpUrl}`);
    //     console.log(`   Affected elements: ${violation.nodes.length}`);
    //     
    //     violation.nodes.slice(0, 3).forEach((node, nodeIndex) => {
    //       console.log(`\n   Element ${nodeIndex + 1}:`);
    //       console.log(`   HTML: ${node.html.substring(0, 100)}...`);
    //       console.log(`   Target: ${node.target.join(' ')}`);
    //     });
    //     
    //     if (violation.nodes.length > 3) {
    //       console.log(`\n   ... and ${violation.nodes.length - 3} more elements`);
    //     }
    //   });
    // }
    
    
    // TODO: Paso 4 - Imprimir reglas incompletas (requieren revisión manual)
    // if (results.incomplete.length > 0) {
    //   console.log(`\n${'='.repeat(60)}`);
    //   console.log('INCOMPLETE (Manual Review Required)');
    //   console.log(`${'='.repeat(60)}`);
    //   
    //   results.incomplete.forEach((item, index) => {
    //     console.log(`\n${index + 1}. ${item.help}`);
    //     console.log(`   Why incomplete: Requires human review`);
    //   });
    // }
    
    
    // TODO: Paso 5 - Validar ejecución
    // expect(results.violations.length).toBeGreaterThanOrEqual(0);
    
    
    // TODO: BONUS - Guardar reporte en archivo
    // Puedes guardar el reporte en JSON para análisis posterior:
    // import fs from 'fs';
    // fs.writeFileSync('accessibility-report.json', JSON.stringify(results, null, 2));
    
    
    // TODO: BONUS - Integración con CI/CD
    // En CI/CD, puedes fallar el build si hay violaciones críticas:
    // const criticalViolations = results.violations.filter(v => v.impact === 'critical');
    // expect(criticalViolations.length).toBe(0);
    
  });

});
