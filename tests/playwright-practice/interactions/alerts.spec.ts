import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| ALERTS & POPUPS - Manejo de diálogos JavaScript
|--------------------------------------------------------------------------
| Los navegadores muestran tres tipos de diálogos nativos:
| 1. alert(): Solo muestra un mensaje con botón OK
| 2. confirm(): Muestra mensaje con botones OK y Cancel
| 3. prompt(): Permite al usuario ingresar texto
| 
| En Playwright:
| - Los diálogos son interceptados automáticamente
| - Usamos page.on('dialog') para manejarlos
| - Debemos aceptar o dismiss el diálogo
| - Podemos leer el mensaje y tipo del diálogo
| 
| Importante:
| - El listener debe configurarse ANTES de la acción que dispara el diálogo
| - Si no manejamos el diálogo, el test fallará
| 
| Documentación: https://playwright.dev/docs/dialogs
|--------------------------------------------------------------------------
*/

test.describe('Alerts & Popups', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-013: Manejar Simple Alert
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo interceptar y aceptar un alert() simple
  | 
  | Precondiciones:
  |   - La página debe tener un botón que dispara alert()
  |   - El botón debe tener el texto "Simple Alert"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Configurar listener para el evento 'dialog'
  |   3. Verificar que el tipo de diálogo es 'alert'
  |   4. Aceptar el diálogo
  |   5. Hacer click en el botón "Simple Alert"
  | 
  | Resultado esperado:
  |   - El evento dialog se dispara correctamente
  |   - El tipo es 'alert'
  |   - El diálogo se acepta sin errores
  | 
  | Conceptos clave:
  |   - page.on('dialog'): Escucha eventos de diálogo
  |   - dialog.type(): Retorna 'alert', 'confirm', o 'prompt'
  |   - dialog.accept(): Cierra el diálogo (equivale a click en OK)
  |   - El listener debe configurarse ANTES del click
  |--------------------------------------------------------------------------
  */
  test('handle simple alert', async ({ page }) => {
    // Paso 1: Navegar a la página de práctica
    // TODO: Usa page.goto() para navegar a '/p/playwrightpractice.html'
    // Sintaxis: await page.goto(url)



    // Paso 2: Configurar listener para interceptar el alert
    // TODO: Usa page.on('dialog', callback) ANTES del click que dispara el alert
    // Sintaxis: page.on('dialog', async dialog => { ... })
    // Hint: IMPORTANTE - El listener debe configurarse ANTES de la acción



    // Paso 2a: Dentro del callback, verificar el tipo de diálogo
    // TODO: Usa expect(dialog.type()).toBe('alert')
    // Sintaxis: expect(dialog.type()).toBe('alert')
    // Hint: Esto valida que JavaScript ejecutó window.alert()



    // Paso 2b: Aceptar el alert
    // TODO: Usa await dialog.accept() para cerrar el diálogo
    // Sintaxis: await dialog.accept()
    // Hint: Si no aceptamos, el test se bloqueará



    // Paso 3: Hacer click en el botón que dispara el alert
    // TODO: Usa page.getByText('Simple Alert').click()
    // Sintaxis: await page.getByText(texto).click()
    // Hint: Esto ejecuta window.alert('mensaje')



    /*
     * Otras acciones útiles con dialog:
     * 
     * // Leer el mensaje del alert:
     * console.log('Alert message:', dialog.message());
     * 
     * // Obtener el valor por defecto (solo para prompts):
     * console.log('Default value:', dialog.defaultValue());
     */
  });

  /*
  |--------------------------------------------------------------------------
  | TC-014: Manejar Confirmation Alert
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo manejar un confirm() y aceptarlo
  | 
  | Precondiciones:
  |   - La página debe tener un botón que dispara confirm()
  |   - El botón debe tener el texto "Confirmation Alert"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Configurar listener para 'dialog'
  |   3. Verificar que el tipo es 'confirm'
  |   4. Aceptar el confirm (click en OK)
  |   5. Hacer click en el botón
  | 
  | Resultado esperado:
  |   - El evento dialog se dispara
  |   - El tipo es 'confirm'
  |   - El diálogo se acepta correctamente
  | 
  | Conceptos clave:
  |   - confirm() tiene dos botones: OK y Cancel
  |   - dialog.accept(): Equivale a click en OK (retorna true)
  |   - dialog.dismiss(): Equivale a click en Cancel (retorna false)
  |   - El valor retornado por confirm() afecta el flujo de la app
  |--------------------------------------------------------------------------
  */
  test('handle confirmation alert', async ({ page }) => {
    // Paso 1: Navegar a la página de práctica
    // TODO: Usa page.goto() para navegar a '/p/playwrightpractice.html'
    // Sintaxis: await page.goto(url)



    // Paso 2: Configurar listener para el confirm
    // TODO: Usa page.on('dialog', callback) para interceptar el confirm
    // Sintaxis: page.on('dialog', async dialog => { ... })



    // Paso 2a: Verificar que el tipo es 'confirm'
    // TODO: Usa expect(dialog.type()).toBe('confirm')
    // Sintaxis: expect(dialog.type()).toBe('confirm')
    // Hint: confirm() muestra botones OK y Cancel



    // Paso 2b: Aceptar el confirm (equivale a click en OK)
    // TODO: Usa await dialog.accept() para aceptar el confirm
    // Sintaxis: await dialog.accept()
    // Hint: Esto hace que confirm() retorne true en JavaScript
    // Alternativa: dialog.dismiss() para cancelar (retorna false)



    // Paso 3: Hacer click en el botón que dispara confirm()
    // TODO: Usa page.getByText('Confirmation Alert').click()
    // Sintaxis: await page.getByText(texto).click()



    /*
     * Para rechazar (click en Cancel):
     * await dialog.dismiss();
     * 
     * Esto haría que confirm() retorne false
     */
  });

  /*
  |--------------------------------------------------------------------------
  | TC-015: Manejar Prompt Alert
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo manejar un prompt() e ingresar texto
  | 
  | Precondiciones:
  |   - La página debe tener un botón que dispara prompt()
  |   - El botón debe tener el texto "Prompt Alert"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Configurar listener para 'dialog'
  |   3. Verificar que el tipo es 'prompt'
  |   4. Aceptar el prompt con texto "Test Input"
  |   5. Hacer click en el botón
  | 
  | Resultado esperado:
  |   - El evento dialog se dispara
  |   - El tipo es 'prompt'
  |   - El texto se envía correctamente
  | 
  | Conceptos clave:
  |   - prompt() permite al usuario ingresar texto
  |   - dialog.accept('texto'): Envía el texto y cierra el prompt
  |   - Si accept() sin parámetro, envía string vacío
  |   - dialog.dismiss(): Cancela el prompt (retorna null)
  |--------------------------------------------------------------------------
  */
  test('handle prompt alert', async ({ page }) => {
    // Paso 1: Navegar a la página de práctica
    // TODO: Usa page.goto() para navegar a '/p/playwrightpractice.html'
    // Sintaxis: await page.goto(url)



    // Paso 2: Configurar listener para el prompt
    // TODO: Usa page.on('dialog', callback) para interceptar el prompt
    // Sintaxis: page.on('dialog', async dialog => { ... })



    // Paso 2a: Verificar que el tipo es 'prompt'
    // TODO: Usa expect(dialog.type()).toBe('prompt')
    // Sintaxis: expect(dialog.type()).toBe('prompt')
    // Hint: prompt() muestra un input field al usuario



    // Paso 2b: Aceptar el prompt con texto "Test Input"
    // TODO: Usa await dialog.accept('Test Input') para enviar el texto
    // Sintaxis: await dialog.accept(textoAEnviar)
    // Hint: Esto hace que prompt() retorne "Test Input" en JavaScript
    // Alternativas: accept() sin parámetro envía string vacío, dismiss() retorna null



    // Paso 3: Hacer click en el botón que dispara prompt()
    // TODO: Usa page.getByText('Prompt Alert').click()
    // Sintaxis: await page.getByText(texto).click()



    /*
     * Otras opciones:
     * 
     * // Aceptar sin texto (envía string vacío):
     * await dialog.accept();
     * 
     * // Cancelar el prompt (retorna null):
     * await dialog.dismiss();
     * 
     * // Leer el valor por defecto del prompt:
       * console.log('Default:', dialog.defaultValue());
       */
    });
    
    // Hacer click en el botón que dispara prompt()
    await page.getByText('Prompt Alert').click();
  });
});
