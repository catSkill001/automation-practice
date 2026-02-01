import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| SMOKE TEST
|--------------------------------------------------------------------------
| Escenario:
| - Verificar que la página principal cargue correctamente
| - Validar elementos básicos de la UI
| - Test rápido para detectar problemas críticos
*/
test('smoke - page loads', async ({ page }) => {

  // Navegamos a la página principal.
  // Este es el primer paso de cualquier test funcional.
  await page.goto('/');

  // Validación mínima: que aparezca un título/heading visible.
  // Usamos getByRole para localizar por semántica, más robusto que selectores CSS.
  // El regex /Automation Testing Practice/i permite flexibilidad en mayúsculas/minúsculas.
  await expect(page.getByRole('heading', { name: /Automation Testing Practice/i })).toBeVisible();
});
