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
  await page.goto('/');

  // Crear un iframe dinámicamente en la página
  await page.evaluate(() => {
    const iframe = document.createElement('iframe');
    iframe.id = 'test-iframe';
    iframe.srcdoc = `
      <html>
        <body>
          <input type="text" id="name-input" placeholder="Enter name" />
          <button id="submit-btn">Submit</button>
          <div id="result"></div>
        </body>
      </html>
    `;
    document.body.appendChild(iframe);
  });

  // Esperar a que el iframe cargue
  await page.waitForTimeout(500);

  // Usar frameLocator para interactuar con el iframe
  const frame = page.frameLocator('#test-iframe');
  
  // Interactuar con elementos dentro del iframe
  await frame.locator('#name-input').fill('John Doe');
  await frame.locator('#submit-btn').click();

  // Validar que el input tiene el valor correcto
  await expect(frame.locator('#name-input')).toHaveValue('John Doe');
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
  await page.goto('/');

  // Crear dos iframes
  await page.evaluate(() => {
    // Primer iframe
    const iframe1 = document.createElement('iframe');
    iframe1.id = 'iframe-1';
    iframe1.srcdoc = `
      <html>
        <body>
          <input type="text" id="input-1" value="" />
        </body>
      </html>
    `;
    document.body.appendChild(iframe1);

    // Segundo iframe
    const iframe2 = document.createElement('iframe');
    iframe2.id = 'iframe-2';
    iframe2.srcdoc = `
      <html>
        <body>
          <input type="text" id="input-2" value="" />
        </body>
      </html>
    `;
    document.body.appendChild(iframe2);
  });

  await page.waitForTimeout(500);

  // Interactuar con el primer iframe
  const frame1 = page.frameLocator('#iframe-1');
  await frame1.locator('#input-1').fill('Frame 1 Content');

  // Interactuar con el segundo iframe
  const frame2 = page.frameLocator('#iframe-2');
  await frame2.locator('#input-2').fill('Frame 2 Content');

  // Validar ambos frames
  await expect(frame1.locator('#input-1')).toHaveValue('Frame 1 Content');
  await expect(frame2.locator('#input-2')).toHaveValue('Frame 2 Content');
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
  await page.goto('/');

  // Crear un iframe
  await page.evaluate(() => {
    const iframe = document.createElement('iframe');
    iframe.id = 'content-frame';
    iframe.srcdoc = `
      <html>
        <body>
          <h1 id="heading">Hello from iframe</h1>
          <input type="text" id="data-input" />
        </body>
      </html>
    `;
    document.body.appendChild(iframe);
  });

  await page.waitForTimeout(500);

  // Obtener el elemento iframe
  const iframeElement = page.locator('#content-frame');
  
  // Obtener el frame usando contentFrame()
  const frame = await iframeElement.contentFrame();
  
  if (!frame) {
    throw new Error('Frame not found');
  }

  // Interactuar con elementos dentro del frame
  await frame.locator('#data-input').fill('Test Data');
  
  // Validar el texto del heading
  await expect(frame.locator('#heading')).toHaveText('Hello from iframe');
  await expect(frame.locator('#data-input')).toHaveValue('Test Data');
});
