import { Page } from '@playwright/test';
import locators from '../Locators/locators.json';

export class CarInsurance {
  constructor(private page: Page) {}

  async navigateHome() {
    await this.page.goto(locators.carInsurance.homeUrl);
  }

  async selectCarDetails() {
    const popupPromise = this.page.waitForEvent('popup');
    await this.page.locator(locators.carInsurance.filtersTab).getByRole("link",{ name: locators.carInsurance.carInsuranceLinkLabel } ).click();
    return await popupPromise;
  }
}
