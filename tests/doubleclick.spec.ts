// Importamos test y expect desde Playwright Test.
// test define el caso de prueba.
// expect se usa para aserciones con auto-wait.
import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| DOUBLE CLICK - COPY TEXT
|--------------------------------------------------------------------------
| Escenario:
| - Escribimos texto en Field1
| - Hacemos doble click en "Copy Text"
| - Verificamos que Field2 tenga el mismo valor
*/
test('double click copies text from Field1 to Field2', async ({ page }) => {
  // TODO: Implementar la lógica del test
  // - Navegar a la página
  // - Localizar elementos
  // - Escribir en field1
  // - Doble click en botón
  // - Validar field2
});
