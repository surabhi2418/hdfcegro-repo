import { Page } from '@playwright/test';
import { BasePage } from './BasePage';

export class HomePage extends BasePage {
  async navigate() {
    await this.page.goto('https://www.hdfcergo.com/');
  }

  async clickPetInsurance() {
    const popupPromise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: 'cat Pet Insurance' }).click();
    return await popupPromise;
  }
}
