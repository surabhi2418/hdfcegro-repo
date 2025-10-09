import { BasePage } from './BasePage';
import locators from '../Locators/locators.json';

export class HomePage extends BasePage {
  async navigate() {
    await this.page.goto('https://www.hdfcergo.com/');
  }

  async openTravelInsurancePopup() {
    const popupPromise = this.page.waitForEvent('popup');
    await this.page.getByRole('link', { name: locators.HometravelPage.travelInsuranceLink }).click();
    return await popupPromise;
  }
}
