import { Page } from '@playwright/test';

export class StudentTravel {
  constructor(private page: Page) {}

  async fillStudentDetails() {}
  async selectDestination() {}
  async setDates() {}
  async submitForm() {}
}

































// import { Page } from '@playwright/test';

// export class StudentTravel {
//   constructor(private page: Page) {}

//   async selectDestination(popup: Page, country: string) {
//     const countryInput = popup.getByRole('textbox', { name: 'Country(ies) of visit' });
//     await countryInput.waitFor({ state: 'visible', timeout: 5000 });
//     await countryInput.fill(country);
//     await popup.getByRole('treeitem', { name: 'Germany' }).click();
//   }

//   async setDates(popup: Page, departure: string, returnDate: string) {
//     await popup.locator('#departureDate').click();
//     const departureDateInput = popup.getByRole('textbox', { name: 'dd/mm/yyyy' });
//     await departureDateInput.fill(departure);
//     await departureDateInput.press('Enter');

//     await popup.locator('#returnDate').click();
//     const returnDateInput = popup.getByRole('textbox', { name: 'dd/mm/yyyy' });
//     await returnDateInput.fill(returnDate);
//     await returnDateInput.press('Enter');
//   }
// }
