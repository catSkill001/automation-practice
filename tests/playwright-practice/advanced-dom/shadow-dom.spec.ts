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
  await page.goto('/');

  // Acceder al input de texto dentro del Shadow DOM
  const inputValue = await page.evaluate(() => {
    const shadowHost = document.querySelector('#shadow_host');
    if (!shadowHost || !(shadowHost as any).shadowRoot) {
      throw new Error('Shadow host not found');
    }
    
    const shadowRoot = (shadowHost as any).shadowRoot;
    const input = shadowRoot.querySelector('input[type="text"]') as HTMLInputElement;
    
    if (!input) {
      throw new Error('Text input not found in shadow DOM');
    }
    
    // Escribir en el input
    input.value = 'Shadow DOM Test';
    return input.value;
  });

  // Validar que el valor se ingresó
  expect(inputValue).toBe('Shadow DOM Test');
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
  await page.goto('/');

  // Hacer click en el checkbox dentro del Shadow DOM
  const isChecked = await page.evaluate(() => {
    const shadowHost = document.querySelector('#shadow_host');
    if (!shadowHost || !(shadowHost as any).shadowRoot) {
      throw new Error('Shadow host not found');
    }
    
    const shadowRoot = (shadowHost as any).shadowRoot;
    const checkbox = shadowRoot.querySelector('input[type="checkbox"]') as HTMLInputElement;
    
    if (!checkbox) {
      throw new Error('Checkbox not found in shadow DOM');
    }
    
    // Hacer click
    checkbox.click();
    return checkbox.checked;
  });

  // Validar que el checkbox fue marcado
  expect(isChecked).toBe(true);
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
  await page.goto('/');

  // Verificar que existe el Shadow DOM anidado
  const nestedExists = await page.evaluate(() => {
    const shadowHost = document.querySelector('#shadow_host');
    if (!shadowHost || !(shadowHost as any).shadowRoot) {
      return false;
    }
    
    const shadowRoot = (shadowHost as any).shadowRoot;
    const nestedHost = shadowRoot.querySelector('#nested_shadow_host');
    
    return nestedHost !== null;
  });

  // Validar que el nested shadow host existe
  expect(nestedExists).toBe(true);
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
  await page.goto('/');

  // Obtener el texto del span dentro del Shadow DOM
  const spanText = await page.evaluate(() => {
    const shadowHost = document.querySelector('#shadow_host');
    if (!shadowHost || !(shadowHost as any).shadowRoot) {
      throw new Error('Shadow host not found');
    }
    
    const shadowRoot = (shadowHost as any).shadowRoot;
    const span = shadowRoot.querySelector('#shadow_content .info') as HTMLSpanElement;
    
    if (!span) {
      throw new Error('Span not found in shadow DOM');
    }
    
    return span.textContent;
  });

  // Validar que el texto es correcto
  expect(spanText).toBe('Mobiles');
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
  await page.goto('/');

  // Obtener todos los inputs dentro del Shadow DOM
  const inputCount = await page.evaluate(() => {
    const shadowHost = document.querySelector('#shadow_host');
    if (!shadowHost || !(shadowHost as any).shadowRoot) {
      throw new Error('Shadow host not found');
    }
    
    const shadowRoot = (shadowHost as any).shadowRoot;
    const inputs = shadowRoot.querySelectorAll('input');
    
    return inputs.length;
  });

  // Validar que hay 3 inputs (text, checkbox, file)
  expect(inputCount).toBe(3);
});
