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
    // Navegar a la página de práctica
    await page.goto('/p/playwrightpractice.html');
    
    // Localizar el elemento que será arrastrado
    // Este elemento debe tener draggable="true" en HTML
    const draggable = page.locator('#draggable');
    
    // Localizar la zona donde se soltará el elemento
    // Esta zona debe manejar los eventos drop
    const droppable = page.locator('#droppable');
    
    // Realizar la operación de drag and drop
    // dragTo() maneja automáticamente:
    // 1. Hacer click y mantener en el elemento draggable
    // 2. Mover el mouse hasta el elemento droppable
    // 3. Soltar el click
    // 4. Disparar todos los eventos necesarios
    await draggable.dragTo(droppable);
    
    // Validar que el drop fue exitoso
    // La zona droppable debe cambiar su contenido a "Dropped!"
    await expect(droppable).toContainText('Dropped!');
    
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
