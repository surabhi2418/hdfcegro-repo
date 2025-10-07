// import { Page } from '@playwright/test';
 
// export class CarDummy {
//   constructor(private page: Page) {}
 
//   async fillDummyDetails(popup: Page) {
//     await popup.getByRole('textbox', { name: 'Name*' }).fill('Keerthana');
//     await popup.getByRole('textbox', { name: 'Mobile Number*' }).fill('123');
//     await popup.locator('#bannerjm').getByRole('combobox').selectOption({ label: 'CHENNAI' });
//     await popup.locator('#bannerjm').getByRole('button', { name: 'GET A QUOTE' }).click();
//   }
 
//   async getErrorMessage(popup: Page) {
//     const errorLocator = popup.locator('#errMobile1');
//     await errorLocator.waitFor({ state: 'visible', timeout: 5000 });
//     const errorText = await errorLocator.textContent();
//     await errorLocator.screenshot({ path: 'error-element.png' });
//     await popup.screenshot({ path: 'popup-page.png' });
//     return errorText?.trim();
//   }
// }

import { Page } from '@playwright/test';
import locators from '../locators/locators.json';
import * as fs from 'fs';

export class CarDummy {
  constructor(private page: Page) {}

  async fillDummyDetails(popup: Page) {
    const raw = fs.readFileSync('data/car_dummy_data.csv', 'utf8');
    const [_, row] = raw.trim().split('\n');
    const [name, mobile, city] = row.split(',');

    await popup.getByRole(locators.carDummy.nameTextboxRole, { name: locators.carDummy.nameTextboxLabel }).fill(name);
    await popup.getByRole(locators.carDummy.mobileTextboxRole, { name: locators.carDummy.mobileTextboxLabel }).fill(mobile);
    await popup.locator(locators.carDummy.cityDropdown).getByRole('combobox').selectOption({ label: city });
    await popup.locator(locators.carDummy.cityDropdown).getByRole(locators.carDummy.quoteButtonRole, { name: locators.carDummy.quoteButtonLabel }).click();
  }

  async getErrorMessage(popup: Page) {
    const errorLocator = popup.locator(locators.carDummy.errorMessage);
    await errorLocator.waitFor({ state: 'visible', timeout: 5000 });
    const errorText = await errorLocator.textContent();
    await errorLocator.screenshot({ path: 'error-element.png' });
    await popup.screenshot({ path: 'popup-page.png' });
    return errorText?.trim();
  }
}
