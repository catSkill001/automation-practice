import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| LOCATOR: getByTestId()
|--------------------------------------------------------------------------
| getByTestId() localiza elementos por su atributo data-testid.
| 
| Ventajas:
| - Creado específicamente para testing
| - No afectado por cambios de UI o texto
| - Más estable que CSS selectors
| 
| Casos de uso:
| - Elementos dinámicos sin texto estable
| - Componentes complejos
| - Cuando otros locators no son confiables
| 
| Consideraciones:
| - Requiere que developers agreguen data-testid
| - Puede ensuciar el HTML de producción
| - Configurable para usar otro atributo (data-test, data-qa, etc.)
| 
| Documentación: https://playwright.dev/docs/locators#locate-by-test-id
|--------------------------------------------------------------------------
*/

test.describe('getByTestId Locators', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-010: Verificar sección de getByTestId
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Validar que la sección de getByTestId existe y tiene contenido
  | 
  | Precondiciones:
  |   - La página debe tener una sección explicando getByTestId()
  |   - Debe mostrar ejemplos con data-testid
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Buscar el heading "7. getByTestId() Locators"
  |   3. Verificar que es visible
  |   4. Buscar texto de ejemplo "john.doe@example.com"
  |   5. Verificar que es visible
  | 
  | Resultado esperado:
  |   - La sección de getByTestId es visible
  |   - El contenido de ejemplo se muestra
  | 
  | Conceptos clave:
  |   - getByTestId() busca elementos con data-testid attribute
  |   - Es el locator más estable pero requiere modificar el código
  |   - En este test usamos getByText porque la página no tiene data-testids reales
  |--------------------------------------------------------------------------
  */
  test('verify testid section exists', async ({ page }) => {
    // TODO: Paso 1 - Navegar a la página de práctica
    // Usa page.goto() con la ruta '/p/playwrightpractice.html'
    // Sintaxis: await page.goto(url)
    
    
    
    // TODO: Paso 2 - Verificar que el heading de la sección es visible
    // Usa page.getByText('7. getByTestId() Locators') para localizar el título
    // Luego usa expect().toBeVisible() para validar que se muestra
    // Sintaxis: await expect(page.getByText('texto')).toBeVisible()
    
    
    
    // TODO: Paso 3 - Verificar que hay contenido de ejemplo visible
    // Usa page.getByText('john.doe@example.com') para localizar el texto de ejemplo
    // Luego usa expect().toBeVisible() para validar que se muestra
    // Sintaxis: await expect(page.getByText('texto')).toBeVisible()
    
    
    
    /*
     * Nota: En una aplicación real, usaríamos:
     * page.getByTestId('user-card')
     * page.getByTestId('edit-profile-btn')
     * 
     * Pero esta página de práctica no tiene data-testid attributes,
     * por lo que validamos la sección educativa en su lugar.
     */
  });
});
