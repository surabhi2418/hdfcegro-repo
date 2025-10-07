import { test } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { PetInsurancePage } from '../pages/PetInsurancePage';
import { PetDetailsPage } from '../pages/PetDetailsPage';
import { readTestData } from '../utils/readCSV';
import { PetData } from '../utils/types';

const testData: PetData[] = readTestData('testdata2.csv');

test('Pet Insurance Flow', async ({ page }) => {
  const home = new HomePage(page);
  await home.navigate();
  const petInsurancePopup = await home.clickPetInsurance();

  const petInsurance = new PetInsurancePage(petInsurancePopup);
  const petDetailsPopup = await petInsurance.clickBuyNow();

  const petDetails = new PetDetailsPage(petDetailsPopup);
  const data: PetData = testData[0];

  await petDetails.fillPetDetailsFromData(data);
  await petDetails.fillLocationAndQuoteFromData(data);
  await petDetails.answerQuestionsAndScreenshot();
});
