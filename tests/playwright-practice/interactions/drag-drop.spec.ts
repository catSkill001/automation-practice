import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| DRAG AND DROP - Arrastrar y soltar elementos
|--------------------------------------------------------------------------
| Drag and drop es una interacción común en interfaces modernas.
| Playwright ofrece el método dragTo() que simplifica esta operación.
| 
| Métodos disponibles:
| - dragTo(): Arrastra un elemento hacia otro
| - drag(): Control manual con posiciones x, y
| 
| Eventos disparados:
| - dragstart, drag, dragenter, dragover, drop, dragend
| 
| Casos de uso:
| - Reordenar listas
| - Subir archivos por drag & drop
| - Kanban boards
| - Builders visuales
| 
| Documentación: https://playwright.dev/docs/input#dragging
|--------------------------------------------------------------------------
*/

test.describe('Drag and Drop', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-018: Realizar operación de drag and drop
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo arrastrar un elemento y soltarlo en una zona objetivo
  | 
  | Precondiciones:
  |   - La página debe tener un elemento draggable con id="draggable"
  |   - Debe haber una zona droppable con id="droppable"
  |   - Al soltar, debe mostrar texto "Dropped!"
  | 
  | Pasos:
  |   1. Navegar a la página
  |   2. Localizar el elemento arrastrable (#draggable)
  |   3. Localizar la zona de destino (#droppable)
  |   4. Ejecutar dragTo() del elemento a la zona
  |   5. Verificar que el texto "Dropped!" aparece
  | 
  | Resultado esperado:
  |   - El elemento se arrastra correctamente
  |   - La zona droppable detecta el drop
  |   - El texto "Dropped!" se muestra
  | 
  | Conceptos clave:
  |   - dragTo(target): Arrastra el elemento al target
  |   - Playwright simula todos los eventos de drag & drop
  |   - toContainText(): Verifica que un elemento contiene texto específico
  |   - El método espera automáticamente a que sea actionable
  |--------------------------------------------------------------------------
  */
  test('perform drag and drop operation', async ({ page }) => {
    // Paso 1: Navegar a la página de práctica
    // TODO: Usa page.goto() para navegar a '/p/playwrightpractice.html'
    // Sintaxis: await page.goto(url)



    // Paso 2: Localizar el elemento que será arrastrado
    // TODO: Crea una constante 'draggable' usando page.locator('#draggable')
    // Sintaxis: const draggable = page.locator(selector)
    // Hint: Este elemento debe tener draggable="true" en HTML



    // Paso 3: Localizar la zona donde se soltará el elemento
    // TODO: Crea una constante 'droppable' usando page.locator('#droppable')
    // Sintaxis: const droppable = page.locator(selector)
    // Hint: Esta zona debe manejar los eventos drop



    // Paso 4: Realizar la operación de drag and drop
    // TODO: Usa draggable.dragTo(droppable) para arrastrar y soltar
    // Sintaxis: await elemento.dragTo(destino)
    // Hint: dragTo() hace click, mantiene, mueve y suelta automáticamente
    // API: Dispara todos los eventos necesarios (dragstart, drag, drop, dragend)



    // Paso 5: Validar que el drop fue exitoso
    // TODO: Usa expect(droppable).toContainText('Dropped!') para verificar
    // Sintaxis: await expect(elemento).toContainText(texto)
    // Hint: La zona droppable debe cambiar su contenido a "Dropped!"



    /*
     * Otras formas de hacer drag and drop:
     * 
     * // Usando posiciones absolutas:
     * await draggable.dragTo(droppable, {
     *   targetPosition: { x: 50, y: 50 }
     * });
     * 
     * // Drag manual con mouse:
     * await draggable.hover();
     * await page.mouse.down();
     * await droppable.hover();
     * await page.mouse.up();
     * 
     * // Con steps para animación suave:
     * await draggable.dragTo(droppable, { force: true });
     */
  });
});
