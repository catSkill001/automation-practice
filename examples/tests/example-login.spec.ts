import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/example-login.page';
import { testUsers } from '../data/test-data';

test.describe('Login Tests', () => {
  let loginPage: LoginPage;

  test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.goto();
  });

  test('successful login with valid credentials', async ({ page }) => {
    await loginPage.login(testUsers.valid.username, testUsers.valid.password);
    await expect(page).toHaveURL(/.*dashboard/);
  });

  test('failed login with invalid credentials', async ({ page }) => {
    await loginPage.login(testUsers.invalid.username, testUsers.invalid.password);
    const error = await loginPage.getErrorMessage();
    expect(error).toContain('Invalid credentials');
  });

  test('login with empty fields', async ({ page }) => {
    await loginPage.login('', '');
    await expect(loginPage.usernameInput).toHaveAttribute('required', '');
  });
});
