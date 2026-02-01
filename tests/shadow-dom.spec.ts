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

  // Localizar el elemento que contiene Shadow DOM
  const shadowHost = page.locator('#shadow-host, [data-shadow-host]');

  // Acceder al Shadow Root
  const shadowRoot = await shadowHost.evaluateHandle((el: Element) => {
    return (el as any).shadowRoot;
  });

  // Interactuar con elementos dentro del Shadow DOM
  const shadowInput = await shadowRoot.evaluateHandle((root: ShadowRoot) => {
    return root.querySelector('input');
  });

  // Escribir en el input dentro del Shadow DOM
  await shadowInput.evaluate((input: HTMLInputElement) => {
    input.value = 'Shadow DOM Test';
  });

  // Validar que el valor se ingresó
  const value = await shadowInput.evaluate((input: HTMLInputElement) => input.value);
  expect(value).toBe('Shadow DOM Test');
});

/*
|--------------------------------------------------------------------------
| SHADOW DOM - CLICK ELEMENT IN SHADOW
|--------------------------------------------------------------------------
| Escenario:
| - Hacer click en botón dentro de Shadow DOM
| - Validar acción
*/
test('click button inside shadow dom', async ({ page }) => {
  await page.goto('/');

  const shadowHost = page.locator('#shadow-host, [data-shadow-host]');

  // Acceder al Shadow Root y localizar botón
  const shadowButton = await shadowHost.evaluateHandle((el: Element) => {
    const shadowRoot = (el as any).shadowRoot;
    return shadowRoot.querySelector('button');
  });

  // Hacer click en el botón
  await shadowButton.evaluate((button: HTMLButtonElement) => {
    button.click();
  });

  // Validar que la acción se ejecutó (ajustar según la página)
  // Puede ser validar cambio de texto, estado, etc.
  await expect(page.locator('#result, [data-result]')).toBeVisible();
});

/*
|--------------------------------------------------------------------------
| SHADOW DOM - NESTED SHADOW DOM
|--------------------------------------------------------------------------
| Escenario:
| - Acceder a Shadow DOM anidado
| - Interactuar con elementos en múltiples niveles
*/
test('access nested shadow dom', async ({ page }) => {
  await page.goto('/');

  const shadowHost = page.locator('#shadow-host, [data-shadow-host]');

  // Acceder al primer nivel de Shadow DOM
  const firstShadowRoot = await shadowHost.evaluateHandle((el: Element) => {
    return (el as any).shadowRoot;
  });

  // Acceder a elemento que contiene otro Shadow DOM
  const nestedShadowHost = await firstShadowRoot.evaluateHandle((root: ShadowRoot) => {
    return root.querySelector('[data-nested-shadow]');
  });

  // Acceder al Shadow DOM anidado
  const nestedShadowRoot = await nestedShadowHost.evaluateHandle((el: Element) => {
    return (el as any).shadowRoot;
  });

  // Interactuar con elemento en el Shadow DOM anidado
  const nestedInput = await nestedShadowRoot.evaluateHandle((root: ShadowRoot) => {
    return root.querySelector('input');
  });

  await nestedInput.evaluate((input: HTMLInputElement) => {
    input.value = 'Nested Shadow DOM';
  });

  const value = await nestedInput.evaluate((input: HTMLInputElement) => input.value);
  expect(value).toBe('Nested Shadow DOM');
});

/*
|--------------------------------------------------------------------------
| SHADOW DOM - QUERY SHADOW ELEMENTS
|--------------------------------------------------------------------------
| Escenario:
| - Buscar múltiples elementos dentro de Shadow DOM
| - Validar que existen
*/
test('query multiple elements in shadow dom', async ({ page }) => {
  await page.goto('/');

  const shadowHost = page.locator('#shadow-host, [data-shadow-host]');

  // Obtener todos los elementos dentro del Shadow DOM
  const shadowElements = await shadowHost.evaluate((el: Element) => {
    const shadowRoot = (el as any).shadowRoot;
    if (!shadowRoot) return [];
    
    return Array.from(shadowRoot.querySelectorAll('input, button, div')).map((elem: Element) => ({
      tagName: elem.tagName,
      id: elem.id,
      className: elem.className
    }));
  });

  // Validar que hay elementos dentro del Shadow DOM
  expect(shadowElements.length).toBeGreaterThan(0);
});

/*
|--------------------------------------------------------------------------
| SHADOW DOM - SHADOW DOM WITH SLOTS
|--------------------------------------------------------------------------
| Escenario:
| - Trabajar con Shadow DOM que usa slots
| - Validar contenido proyectado
*/
test('work with shadow dom slots', async ({ page }) => {
  await page.goto('/');

  const shadowHost = page.locator('#shadow-host, [data-shadow-host]');

  // Acceder al Shadow Root
  const shadowRoot = await shadowHost.evaluateHandle((el: Element) => {
    return (el as any).shadowRoot;
  });

  // Buscar slot dentro del Shadow DOM
  const slot = await shadowRoot.evaluateHandle((root: ShadowRoot) => {
    return root.querySelector('slot');
  });

  // Validar que el slot existe
  const slotExists = await slot.evaluate((slot: HTMLSlotElement) => {
    return slot !== null;
  });
  expect(slotExists).toBe(true);

  // Obtener elementos asignados al slot
  const assignedNodes = await slot.evaluate((slot: HTMLSlotElement) => {
    return slot.assignedNodes().length;
  });
  expect(assignedNodes).toBeGreaterThanOrEqual(0);
});
