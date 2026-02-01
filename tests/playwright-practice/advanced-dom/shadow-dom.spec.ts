import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| SHADOW DOM - ACCESS SHADOW ROOT
|--------------------------------------------------------------------------
| Escenario:
| - Acceder a elementos dentro de Shadow DOM
| - Interactuar con elementos encapsulados
*/
test('access element inside shadow dom', async ({ page }) => {
  // Paso 1: Navegar a la página raíz
  
  

  // Paso 2: Usar page.evaluate() para acceder al Shadow DOM
  // Sintaxis: await page.evaluate(() => { código_javascript })
  // TODO: Dentro del evaluate:
  //   - Obtener el elemento con id='shadow_host' usando document.querySelector
  //   - Validar que shadowHost y shadowHost.shadowRoot existen
  //   - Obtener el shadowRoot del host
  //   - Buscar el input type="text" dentro del shadowRoot
  //   - Establecer input.value = 'Shadow DOM Test'
  //   - Retornar el valor del input
  // Hint: Usa shadowRoot.querySelector para buscar dentro del Shadow DOM
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  // Paso 3: Validar que el valor retornado es correcto
  // Sintaxis: expect(valor).toBe('esperado')
  
  
});

/*
|--------------------------------------------------------------------------
| SHADOW DOM - CLICK ELEMENT IN SHADOW
|--------------------------------------------------------------------------
| Escenario:
| - Hacer click en checkbox dentro de Shadow DOM
| - Validar acción
*/
test('click checkbox inside shadow dom', async ({ page }) => {
  // Paso 1: Navegar a la página raíz
  
  

  // Paso 2: Usar page.evaluate() para hacer click en checkbox del Shadow DOM
  // TODO: Dentro del evaluate:
  //   - Obtener shadowHost con id='shadow_host'
  //   - Validar que existe shadowHost y shadowRoot
  //   - Obtener el checkbox usando shadowRoot.querySelector('input[type="checkbox"]')
  //   - Hacer click en el checkbox
  //   - Retornar checkbox.checked
  
  
  
  
  
  
  
  
  
  
  
  
  

  // Paso 3: Validar que el checkbox está marcado
  // Sintaxis: expect(valor).toBe(true)
  
  
});

/*
|--------------------------------------------------------------------------
| SHADOW DOM - NESTED SHADOW DOM
|--------------------------------------------------------------------------
| Escenario:
| - Acceder a Shadow DOM anidado
| - Validar estructura
*/
test('access nested shadow dom', async ({ page }) => {
  // Paso 1: Navegar a la página raíz
  
  

  // Paso 2: Verificar que existe Shadow DOM anidado usando page.evaluate()
  // TODO: Dentro del evaluate:
  //   - Obtener shadowHost con id='shadow_host'
  //   - Si no existe shadowHost o shadowRoot, retornar false
  //   - Obtener shadowRoot del host
  //   - Buscar elemento con id='nested_shadow_host' dentro del shadowRoot
  //   - Retornar true si nestedHost existe, false si no
  
  
  
  
  
  
  
  
  

  // Paso 3: Validar que el nested shadow host existe
  // Sintaxis: expect(valor).toBe(true)
  
  
});

/*
|--------------------------------------------------------------------------
| SHADOW DOM - GET TEXT FROM SHADOW ELEMENT
|--------------------------------------------------------------------------
| Escenario:
| - Leer texto de un elemento dentro de Shadow DOM
| - Validar contenido
*/
test('get text from shadow dom element', async ({ page }) => {
  // Paso 1: Navegar a la página raíz
  
  

  // Paso 2: Obtener texto de un span dentro del Shadow DOM usando page.evaluate()
  // TODO: Dentro del evaluate:
  //   - Obtener shadowHost con id='shadow_host'
  //   - Validar que shadowHost y shadowRoot existen (lanzar error si no)
  //   - Obtener shadowRoot
  //   - Buscar el span con selector '#shadow_content .info'
  //   - Validar que el span existe (lanzar error si no)
  //   - Retornar span.textContent
  
  
  
  
  
  
  
  
  
  
  
  

  // Paso 3: Validar que el texto es 'Mobiles'
  
  
});

/*
|--------------------------------------------------------------------------
| SHADOW DOM - QUERY MULTIPLE ELEMENTS
|--------------------------------------------------------------------------
| Escenario:
| - Buscar múltiples elementos dentro de Shadow DOM
| - Contar inputs disponibles
*/
test('query multiple elements in shadow dom', async ({ page }) => {
  // Paso 1: Navegar a la página raíz
  
  

  // Paso 2: Contar todos los inputs dentro del Shadow DOM usando page.evaluate()
  // TODO: Dentro del evaluate:
  //   - Obtener shadowHost con id='shadow_host'
  //   - Validar que shadowHost y shadowRoot existen
  //   - Obtener shadowRoot
  //   - Usar querySelectorAll('input') para obtener todos los inputs
  //   - Retornar inputs.length
  // Hint: querySelectorAll retorna una NodeList con propiedad length
  
  
  
  
  
  
  
  
  

  // Paso 3: Validar que hay 3 inputs (text, checkbox, file)
  
  
});
