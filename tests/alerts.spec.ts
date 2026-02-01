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

  // Navegamos a la URL base definida en playwright.config.ts.
  // Usar '/' evita hardcodear la URL completa.
  await page.goto('/');

  // Registramos un listener para el próximo diálogo del navegador.
  // Usamos page.once porque esperamos que se dispare UNA sola vez.
  // Este listener debe declararse ANTES del click.
  page.once('dialog', async (dialog) => {

    // Validamos que el tipo de diálogo sea "alert".
    // Esto asegura que estamos manejando el evento correcto.
    expect(dialog.type()).toBe('alert');

    // Aceptamos el alert.
    // Si no lo hacemos, el navegador queda bloqueado
    // y el test no puede continuar.
    await dialog.accept();
  });

  // Localizamos el botón por rol y nombre exacto.
  // Usar el nombre completo evita errores de strict mode.
  await page.getByRole('button', { name: 'Simple Alert' }).click();
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

  // Abrimos la página nuevamente para asegurar aislamiento del test.
  // Cada test debe ser independiente.
  await page.goto('/');

  // Registramos el listener para el confirm.
  page.once('dialog', async (dialog) => {

    // Validamos que el tipo sea "confirm".
    expect(dialog.type()).toBe('confirm');

    // Aceptamos el confirm (equivalente a presionar OK).
    await dialog.accept();
  });

  // Click en el botón que dispara el confirmation alert.
  await page.getByRole('button', { name: 'Confirmation Alert' }).click();

  // Nota:
  // Si la página muestra un texto de resultado (ej: "You pressed OK"),
  // acá sería el lugar correcto para validarlo con expect().
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

  // Navegamos nuevamente para mantener el test aislado.
  await page.goto('/');

  // Listener del diálogo de confirmación.
  page.once('dialog', async (dialog) => {

    // Validamos el tipo de diálogo.
    expect(dialog.type()).toBe('confirm');

    // Rechazamos el confirm (equivalente a Cancel).
    await dialog.dismiss();
  });

  // Disparamos el confirmation alert.
  await page.getByRole('button', { name: 'Confirmation Alert' }).click();

  // Acá también podríamos validar el texto resultante si existe.
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

  // Texto que vamos a ingresar en el prompt.
  const inputText = 'Dome';

  // Navegamos a la página.
  await page.goto('/');

  // Listener para el prompt.
  page.once('dialog', async (dialog) => {

    // Validamos que el diálogo sea de tipo "prompt".
    expect(dialog.type()).toBe('prompt');

    // Aceptamos el prompt ingresando texto.
    // accept(value) simula escribir y presionar OK.
    await dialog.accept(inputText);
  });

  // Click en el botón que dispara el prompt.
  await page.getByRole('button', { name: 'Prompt Alert' }).click();

  // Si la página refleja el texto ingresado,
  // este sería el lugar para validarlo con expect().
});
