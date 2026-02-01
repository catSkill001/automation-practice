// Importamos las funciones principales del runner de Playwright.
// - test: define casos de prueba
// - expect: permite hacer aserciones con auto-wait (esperas inteligentes)
import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| SIMPLE ALERT
|--------------------------------------------------------------------------
| Escenario:
| - Se hace click en "Simple Alert"
| - Aparece un alert del navegador
| - El alert se acepta
*/
test('simple alert - accept', async ({ page }) => {
  // TODO: Implementar la lógica del test
  // - Navegar a la página
  // - Registrar listener para dialog
  // - Click en botón
  // - Aceptar alert
});


/*
|--------------------------------------------------------------------------
| CONFIRMATION ALERT - ACCEPT
|--------------------------------------------------------------------------
| Escenario:
| - Se hace click en "Confirmation Alert"
| - Aparece un confirm
| - Se presiona OK (accept)
*/
test('confirmation alert - accept', async ({ page }) => {
  // TODO: Implementar la lógica del test
  // - Navegar a la página
  // - Registrar listener para confirm
  // - Click en botón
  // - Aceptar confirm
  // - Validar resultado si aplica
});


/*
|--------------------------------------------------------------------------
| CONFIRMATION ALERT - DISMISS
|--------------------------------------------------------------------------
| Escenario:
| - Se hace click en "Confirmation Alert"
| - Aparece un confirm
| - Se presiona Cancel (dismiss)
*/
test('confirmation alert - dismiss', async ({ page }) => {
  // TODO: Implementar la lógica del test
  // - Navegar a la página
  // - Registrar listener para confirm
  // - Click en botón
  // - Rechazar confirm
  // - Validar resultado si aplica
});


/*
|--------------------------------------------------------------------------
| PROMPT ALERT
|--------------------------------------------------------------------------
| Escenario:
| - Se hace click en "Prompt Alert"
| - Aparece un prompt
| - Se ingresa texto
| - Se acepta el prompt
*/
test('prompt alert - input text and accept', async ({ page }) => {
  // TODO: Implementar la lógica del test
  // - Definir texto de input
  // - Navegar a la página
  // - Registrar listener para prompt
  // - Click en botón
  // - Aceptar prompt con texto
  // - Validar resultado si aplica
});
