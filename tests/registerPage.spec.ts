import { test, expect } from '@playwright/test';
import { RegisterPage } from '../page/registerPage';

test.describe('registraion page tests', () => {
    test('Successful registration using a valid username, email, and password', async ({ page }) => {
        const registerPage = new RegisterPage(page);
    })
})