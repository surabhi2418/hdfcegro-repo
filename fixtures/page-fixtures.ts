// // import { Page } from '@playwright/test';
// import { CarInsurance } from '../pages/CarInsurance';
// import { CarDummy } from '../pages/CarDummy'; // ✅ Correct import path
// import { test as baseTest, expect, Page } from '@playwright/test';

// export class PageFixture {
//   carInsurance: CarInsurance;
//   carDummy: CarDummy;

//   constructor(page: Page) {
//     this.carInsurance = new CarInsurance(page);
//     this.carDummy = new CarDummy(page); // ✅ Proper constructor usage
//   }
// }
// type Fixtures = {
//   pages: PageFixture;
// };
 
// export const test = baseTest.extend<Fixtures>({
//   pages: async ({ page }, use) => {
//     await use(new PageFixture(page));
//   },
// });
 
// export { expect };
import { test as baseTest, expect, Page } from '@playwright/test';
import { CarInsurance } from '../pages/CarInsurance';
import { CarDummy } from '../pages/CarDummy';
import { ExploreMenuPage } from '../pages/ExploreMenuPage';

// Page fixture combining CarInsurance and CarDummy
export class PageFixture {
  carInsurance: CarInsurance;
  carDummy: CarDummy;

  constructor(page: Page) {
    this.carInsurance = new CarInsurance(page);
    this.carDummy = new CarDummy(page);
  }
}

// Fixture types
type CombinedFixtures = {
  pages: PageFixture;
  explorePage: ExploreMenuPage;
  healthInsuranceItems: string[];
};

// Unified fixture
export const test = baseTest.extend<CombinedFixtures>({
  pages: async ({ page }, use) => {
    await use(new PageFixture(page));
  },

  explorePage: async ({ page }, use) => {
    const explorePage = new ExploreMenuPage(page);
    await explorePage.navigateToSite();
    await explorePage.openExploreMenu();
    await explorePage.waitForDropdownVisible();
    await use(explorePage);
  },

  healthInsuranceItems: async ({ explorePage }, use) => {
    const items: string[] = await explorePage.extractHealthInsuranceSubmenu();
    await use(items);
  }
});

export { expect };

