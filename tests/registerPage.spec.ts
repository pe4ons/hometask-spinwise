import { test, expect } from '@playwright/test';
import { RegistrationPage } from '../page/registerPage';

test.describe('Registration page tests', () => {
    test('Successful registration using a valid username, email, and password', async ({ page }) => {
        const registerPage = new RegistrationPage(page);

        await registerPage.openRegisterPage();
        await registerPage.fillRegistrationForm('Mike', 'mike@mike.com');
        await registerPage.registerBtn.click();
        await expect(page.getByText('You have registered successfully!')).toBeVisible();
    })
})