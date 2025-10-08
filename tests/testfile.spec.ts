import { test, expect } from '@playwright/test';
import { PageFixture } from '../fixtures/page-fixtures';

test('Car Insurance: Dummy details and error message', async ({ page }) => {
  const fixture = new PageFixture(page);
  await fixture.carInsurance.navigateHome(); 

  const popup = await fixture.carInsurance.selectCarDetails();
  await fixture.carDummy.fillDummyDetails(popup);
  const errorMessage = await fixture.carDummy.getErrorMessage(popup);

  console.log('Error Message:', errorMessage);
});
