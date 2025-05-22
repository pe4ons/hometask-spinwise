import { type Locator, type Page } from '@playwright/test';
import 'dotenv/config';

export class RegisterPage {
    readonly username: Locator;
    readonly email: Locator;
    readonly password: Locator;
    readonly confirmPassword: Locator;
    readonly registerBtn: Locator;

    constructor(public readonly page: Page) {
        this.username = page.locator('input[name="username"]');
        this.email = page.locator('input[name="email"]');
        this.password = page.locator('input[name="password"]');
        this.confirmPassword = page.locator('input[name="confirmPassword"]');
        this.registerBtn = page.getByRole('button', { name: 'Register' });
    }

    async openRegisterPage() {
        await this.page.goto('https://auth-home-task.vercel.app/register');
    }

    async fillRegistrationForm(userName: string, email: string) {
        const password = process.env.USER_PASSWORD;
        if (!password) {
            throw new Error('USER_PASSWORD is not set in .env file')
        }

        await this.username.fill(userName);
        await this.email.fill(email);
        await this.password.fill(password);
        await this.confirmPassword.fill(password);
    }
}