import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| TC-027: Acceder a elemento dentro de Shadow DOM
|--------------------------------------------------------------------------
| SHADOW DOM - ACCESS SHADOW ROOT
|--------------------------------------------------------------------------
| Objetivo:
|   Demostrar cómo acceder a elementos encapsulados en Shadow DOM
| 
| Precondiciones:
|   - La página debe tener un elemento con Shadow DOM (#shadow_host)
| 
| Pasos:
|   1. Navegar a la página de práctica
|   2. Usar page.evaluate() para acceder al shadowRoot
|   3. Buscar input dentro del Shadow DOM
|   4. Establecer valor en el input
|   5. Retornar y validar el valor
| 
| Resultado esperado:
|   - Se puede acceder al shadowRoot
|   - Se puede modificar elementos dentro del Shadow DOM
|   - El valor se establece correctamente
| 
| Conceptos clave:
|   - Shadow DOM encapsula elementos (no accesibles con selectores normales)
|   - shadowRoot: Propiedad que contiene el árbol del Shadow DOM
|   - page.evaluate(): Ejecuta JavaScript en contexto del navegador
|   - querySelector() dentro de shadowRoot para buscar elementos
|--------------------------------------------------------------------------
*/
test('TC-027: access element inside shadow dom', async ({ page }) => {
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
| TC-028: Hacer click en checkbox dentro de Shadow DOM
|--------------------------------------------------------------------------
| SHADOW DOM - CLICK ELEMENT IN SHADOW
|--------------------------------------------------------------------------
| Objetivo:
|   Demostrar cómo interactuar con checkboxes dentro de Shadow DOM
| 
| Precondiciones:
|   - La página debe tener Shadow DOM con checkbox
| 
| Pasos:
|   1. Navegar a la página de práctica
|   2. Acceder al shadowRoot del host
|   3. Localizar checkbox dentro del Shadow DOM
|   4. Hacer click en el checkbox
|   5. Validar que el checkbox está marcado
| 
| Resultado esperado:
|   - El checkbox se localiza correctamente
|   - El click se ejecuta dentro del Shadow DOM
|   - El checkbox cambia a estado checked
| 
| Conceptos clave:
|   - .click() funciona en elementos del Shadow DOM
|   - .checked: Propiedad para validar estado de checkbox
|   - Los eventos dentro de Shadow DOM funcionan normalmente
|--------------------------------------------------------------------------
*/
test('TC-028: click checkbox inside shadow dom', async ({ page }) => {
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
| TC-029: Acceder a Shadow DOM anidado
|--------------------------------------------------------------------------
| SHADOW DOM - NESTED SHADOW DOM
|--------------------------------------------------------------------------
| Objetivo:
|   Demostrar cómo trabajar con Shadow DOM anidado (shadow dentro de shadow)
| 
| Precondiciones:
|   - La página debe tener Shadow DOM con otro Shadow DOM anidado
| 
| Pasos:
|   1. Navegar a la página de práctica
|   2. Acceder al primer nivel de shadowRoot
|   3. Buscar elemento con Shadow DOM anidado
|   4. Validar que el Shadow DOM anidado existe
| 
| Resultado esperado:
|   - Se puede acceder al primer shadowRoot
|   - Se puede detectar Shadow DOM anidado dentro
|   - La estructura anidada se valida correctamente
| 
| Conceptos clave:
|   - Shadow DOM puede contener otros Shadow DOM
|   - Cada nivel requiere acceder a su shadowRoot
|   - shadowRoot.querySelector() para navegar entre niveles
|--------------------------------------------------------------------------
*/
test('TC-029: access nested shadow dom', async ({ page }) => {
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
| TC-030: Obtener texto de elemento en Shadow DOM
|--------------------------------------------------------------------------
| SHADOW DOM - GET TEXT FROM SHADOW ELEMENT
|--------------------------------------------------------------------------
| Objetivo:
|   Demostrar cómo leer textContent de elementos dentro de Shadow DOM
| 
| Precondiciones:
|   - La página debe tener Shadow DOM con elemento que contiene texto
| 
| Pasos:
|   1. Navegar a la página de práctica
|   2. Acceder al shadowRoot
|   3. Buscar elemento con selector específico
|   4. Leer textContent del elemento
|   5. Validar que el texto es el esperado
| 
| Resultado esperado:
|   - El elemento se localiza dentro del Shadow DOM
|   - Se puede leer su textContent
|   - El texto coincide con el valor esperado
| 
| Conceptos clave:
|   - textContent: Propiedad para obtener texto de elementos
|   - Los selectores dentro de shadowRoot siguen las reglas CSS normales
|   - Validación de contenido dinámico en Shadow DOM
|--------------------------------------------------------------------------
*/
test('TC-030: get text from shadow dom element', async ({ page }) => {
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
| TC-031: Consultar múltiples elementos en Shadow DOM
|--------------------------------------------------------------------------
| SHADOW DOM - QUERY MULTIPLE ELEMENTS
|--------------------------------------------------------------------------
| Objetivo:
|   Demostrar cómo buscar y contar múltiples elementos en Shadow DOM
| 
| Precondiciones:
|   - La página debe tener Shadow DOM con múltiples inputs
| 
| Pasos:
|   1. Navegar a la página de práctica
|   2. Acceder al shadowRoot
|   3. Usar querySelectorAll() para obtener todos los inputs
|   4. Contar el número de inputs encontrados
|   5. Validar que el conteo es correcto
| 
| Resultado esperado:
|   - querySelectorAll() funciona dentro de shadowRoot
|   - Se encuentran todos los inputs
|   - El conteo coincide con el número esperado
| 
| Conceptos clave:
|   - querySelectorAll(): Retorna NodeList con todos los elementos que coinciden
|   - .length: Propiedad para contar elementos en NodeList
|   - Útil para validar estructura completa del Shadow DOM
|--------------------------------------------------------------------------
*/
test('TC-031: query multiple elements in shadow dom', async ({ page }) => {
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
