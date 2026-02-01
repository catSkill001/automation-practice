import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| TABLES - Interacción con tablas HTML
|--------------------------------------------------------------------------
| Trabajar con tablas es común en aplicaciones empresariales.
| Playwright ofrece varias estrategias para localizar y validar datos en tablas.
| 
| Tipos de tablas en esta práctica:
| - Static Table: Datos fijos en HTML
| - Dynamic Table: Datos que cambian por JavaScript
| - Pagination Table: Tabla con navegación por páginas
| 
| Estrategias comunes:
| - Localizar tabla: page.locator('table')
| - Buscar por contenido: getByText()
| - Usar CSS selectors para celdas específicas
| - Validar estructura con assertions
|--------------------------------------------------------------------------
*/

test.describe('Tables', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-011: Verificar datos de tabla estática
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Validar que una tabla estática contiene los datos esperados
  | 
  | Precondiciones:
  |   - La página debe tener una tabla estática con datos de libros
  |   - La tabla debe incluir "Learn Selenium" y autor "Amit"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Localizar la primera tabla en la página
  |   3. Verificar que la tabla es visible
  |   4. Verificar que contiene el texto "Learn Selenium"
  |   5. Verificar que contiene el autor "Amit"
  | 
  | Resultado esperado:
  |   - La tabla se renderiza correctamente
  |   - Los datos esperados están presentes
  |   - No hay errores de localización
  | 
  | Conceptos clave:
  |   - locator('table').first(): Localiza la primera tabla
  |   - getByText() puede buscar dentro de tablas
  |   - .first() se usa porque "Amit" aparece múltiples veces
  |   - toBeVisible() valida que el elemento está en viewport
  |--------------------------------------------------------------------------
  */
  test('verify static table data', async ({ page }) => {
    // Paso 1: Navegar a la página de práctica
    // TODO: Usa page.goto() para navegar a '/p/playwrightpractice.html'
    // Sintaxis: await page.goto(url)



    // Paso 2: Localizar la primera tabla en la página
    // TODO: Crea una constante 'table' usando page.locator('table').first()
    // Sintaxis: const table = page.locator(selector).first()
    // Hint: .first() es necesario porque hay múltiples tablas en la página



    // Paso 3: Verificar que la tabla está visible
    // TODO: Usa expect(table).toBeVisible() para validar que la tabla se renderizó
    // Sintaxis: await expect(elemento).toBeVisible()



    // Paso 4: Verificar que la tabla contiene "Learn Selenium"
    // TODO: Usa page.getByText('Learn Selenium') con expect().toBeVisible()
    // Sintaxis: await expect(page.getByText(texto)).toBeVisible()
    // Hint: getByText busca en toda la página, incluyendo dentro de la tabla



    // Paso 5: Verificar que el autor "Amit" está presente
    // TODO: Usa page.getByText('Amit').first() para localizar al autor
    // Sintaxis: await expect(page.getByText(texto).first()).toBeVisible()
    // Hint: .first() es necesario porque "Amit" aparece en múltiples filas



    /*
     * Otras validaciones útiles para tablas:
     * 
     * // Contar filas:
     * await expect(table.locator('tbody tr')).toHaveCount(6);
     * 
     * // Buscar celda específica:
     * await expect(table.locator('td:has-text("300")')).toBeVisible();
     * 
     * // Validar headers:
     * await expect(table.locator('th:has-text("Author")')).toBeVisible();
     */
  });

  /*
  |--------------------------------------------------------------------------
  | TC-012: Interactuar con tabla de paginación
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Validar que la tabla de paginación muestra los datos correctos
  | 
  | Precondiciones:
  |   - La página debe tener una tabla con paginación
  |   - La primera página debe mostrar "Smartphone" y "$10.99"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Verificar que "Smartphone" es visible
  |   3. Verificar que el precio "$10.99" es visible
  |   4. Verificar que el heading "Pagination Web Table" existe
  | 
  | Resultado esperado:
  |   - Los productos de la primera página son visibles
  |   - El heading de la sección se muestra
  |   - Los precios están formateados correctamente
  | 
  | Conceptos clave:
  |   - Tablas con paginación requieren validar página por página
  |   - En este test validamos solo la primera página
  |   - Para navegar páginas usaríamos clicks en botones de paginación
  |--------------------------------------------------------------------------
  */
  test('interact with pagination table', async ({ page }) => {
    // Paso 1: Navegar a la página de práctica
    // TODO: Usa page.goto() para navegar a '/p/playwrightpractice.html'
    // Sintaxis: await page.goto(url)



    // Paso 2: Verificar que el producto "Smartphone" está visible
    // TODO: Usa page.getByText('Smartphone') para localizar el producto
    // Sintaxis: await expect(page.getByText(texto)).toBeVisible()
    // Hint: Este es el primer producto en la tabla de paginación



    // Paso 3: Verificar que el precio "$10.99" es visible
    // TODO: Usa page.getByText('$10.99') para validar el precio
    // Sintaxis: await expect(page.getByText(precio)).toBeVisible()
    // Hint: Valida que los precios están formateados con símbolo de dólar



    // Paso 4: Verificar que el heading de la sección existe
    // TODO: Busca el texto 'Pagination Web Table' para confirmar la tabla correcta
    // Sintaxis: await expect(page.getByText(heading)).toBeVisible()



    /*
     * Para navegar entre páginas:
     * 
     * // Click en página 2:
     * await page.locator('button:has-text("2")').click();
     * 
     * // Esperar a que carguen los nuevos datos:
     * await expect(page.getByText('Producto de página 2')).toBeVisible();
     * 
     * // Validar número de página activa:
     * await expect(page.locator('.active-page')).toHaveText('2');
     */
  });
});
