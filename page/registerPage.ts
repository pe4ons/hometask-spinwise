import { expect, type Locator, type Page } from '@playwright/test';

export class RegisterPage {
    
  constructor(public readonly page: Page) {

  }

  async openRegisterPage() {
    await this.page.goto('hhttps://auth-home-task.vercel.app/register');
  }
}