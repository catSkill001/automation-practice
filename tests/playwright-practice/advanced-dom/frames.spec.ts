import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| FRAMES - CREATE AND INTERACT WITH IFRAME
|--------------------------------------------------------------------------
| Escenario:
| - Crear un iframe dinámicamente para demostrar interacción
| - Usar frameLocator para acceder al contenido
*/
test('interact with dynamically created iframe', async ({ page }) => {
  // Paso 1: Navegar a la página raíz
  // Sintaxis: await page.goto('URL');
  
  

  // Paso 2: Crear un iframe dinámicamente usando page.evaluate()
  // Sintaxis: await page.evaluate(() => { código_javascript })
  // TODO: Ejecutar JavaScript para crear un iframe con id='test-iframe'
  // Hint: Usar document.createElement('iframe'), establecer srcdoc con HTML, y appendChild
  
  
  
  
  
  
  
  
  

  // Paso 3: Esperar a que el iframe cargue
  // Sintaxis: await page.waitForTimeout(milisegundos);
  
  

  // Paso 4: Obtener referencia al iframe usando frameLocator
  // Sintaxis: page.frameLocator('selector')
  // Hint: Usa '#test-iframe' como selector
  
  

  // Paso 5: Interactuar con elementos dentro del iframe
  // Sintaxis: await frame.locator('selector').fill('valor')
  // TODO: Llenar el input '#name-input' con 'John Doe'
  
  

  // Paso 6: Hacer click en el botón submit dentro del iframe
  // Sintaxis: await frame.locator('selector').click()
  
  

  // Paso 7: Validar que el input tiene el valor correcto
  // Sintaxis: await expect(locator).toHaveValue('valor')
  
  
});

/*
|--------------------------------------------------------------------------
| FRAMES - WORK WITH MULTIPLE FRAMES
|--------------------------------------------------------------------------
| Escenario:
| - Crear múltiples iframes
| - Cambiar entre frames
*/
test('work with multiple iframes', async ({ page }) => {
  // Paso 1: Navegar a la página raíz
  // Sintaxis: await page.goto('URL');
  
  

  // Paso 2: Crear dos iframes usando page.evaluate()
  // TODO: Crear iframe-1 con input id='input-1' e iframe-2 con input id='input-2'
  // Hint: Crear ambos elementos iframe dentro del mismo page.evaluate()
  
  
  
  
  
  
  
  
  
  
  
  
  

  // Paso 3: Esperar a que los iframes carguen
  
  

  // Paso 4: Obtener referencia al primer iframe
  // Sintaxis: page.frameLocator('selector')
  
  

  // Paso 5: Llenar el input en el primer iframe
  // TODO: Llenar '#input-1' con 'Frame 1 Content'
  
  

  // Paso 6: Obtener referencia al segundo iframe
  
  

  // Paso 7: Llenar el input en el segundo iframe
  // TODO: Llenar '#input-2' con 'Frame 2 Content'
  
  

  // Paso 8: Validar ambos inputs
  // Sintaxis: await expect(locator).toHaveValue('valor')
  
  
  
});

/*
|--------------------------------------------------------------------------
| FRAMES - ACCESS FRAME WITH CONTENTFRAME
|--------------------------------------------------------------------------
| Escenario:
| - Usar el método contentFrame() para acceder a frame desde elemento
| - Interactuar con contenido del frame
*/
test('access iframe using contentFrame method', async ({ page }) => {
  // Paso 1: Navegar a la página raíz
  
  

  // Paso 2: Crear un iframe con id='content-frame'
  // TODO: El iframe debe contener un h1 con id='heading' y un input con id='data-input'
  
  
  
  
  
  
  
  
  

  // Paso 3: Esperar a que el iframe cargue
  
  

  // Paso 4: Localizar el elemento iframe
  // Sintaxis: page.locator('selector')
  
  

  // Paso 5: Obtener el frame usando el método contentFrame()
  // Sintaxis: await iframeElement.contentFrame()
  // Hint: Este método devuelve el Frame o null
  
  

  // Paso 6: Validar que el frame existe
  // TODO: Si frame es null, lanzar un error
  
  
  
  

  // Paso 7: Llenar el input dentro del frame
  // TODO: Llenar '#data-input' con 'Test Data'
  
  

  // Paso 8: Validar contenido del frame
  // TODO: Verificar que '#heading' tiene texto 'Hello from iframe'
  // TODO: Verificar que '#data-input' tiene valor 'Test Data'
  
  
  
});
