import { test, expect } from '@playwright/test';
 
test('HDFC ERGO Travel Insurance flow', async ({ page }) => {
  await page.goto('https://www.hdfcergo.com/');
 
  const popupPromise = page.waitForEvent('popup');
  await page.getByRole('link', { name: '% GST Travel Insurance' }).click();
  const popup = await popupPromise;
 
  // Select traveller type to enable age field
  await popup.locator('label').nth(1).click();
  await popup.getByText('BUY NOW').first().click();
  await popup.getByText('Select Traveller').click();
 
  // Wait for age input to be enabled and visible
  const ageInput = popup.getByPlaceholder('Age');
  await ageInput.waitFor({ state: 'visible', timeout: 5000 });
  await popup.evaluate(() => {
    const ageField = document.querySelector('input[placeholder="Age"]');
    if (ageField) ageField.classList.remove('not-allowed');
  });
  await ageInput.fill('22');
 
  await popup.getByRole('button', { name: 'Continue' }).click();
 
  const countryInput = popup.getByRole('textbox', { name: 'Country(ies) of visit' });
  await countryInput.waitFor({ state: 'visible', timeout: 5000 });
  await countryInput.fill('germ');
  await popup.getByRole('treeitem', { name: 'Germany' }).click();
 
  // Fill departure and return dates
  await popup.locator('#departureDate').click();
  const departureDateInput = popup.getByRole('textbox', { name: 'dd/mm/yyyy' });
  await departureDateInput.fill('12/10/2025');
  await departureDateInput.press('Enter');
 
  await popup.locator('#returnDate').click();
  const returnDateInput = popup.getByRole('textbox', { name: 'dd/mm/yyyy' });
  await returnDateInput.fill('21/11/2025');
  await returnDateInput.press('Enter');
 
  await popup.getByRole('link', { name: 'view quote', exact: true }).click();
 
  // Fill personal details
  await popup.getByRole('textbox', { name: 'Name' }).fill('kqviyav khss');
  await popup.getByRole('textbox', { name: 'Email' }).fill('kskjshsv@gmail.com');
  await popup.getByRole('spinbutton', { name: 'Mobile Number' }).fill('9876543211');
 
  // View quote again
  await popup.getByRole('link', { name: 'view quote', exact: true }).click();
 
  // Add timeout to allow quote page to load
  await popup.waitForTimeout(5000); // Wait for 5 seconds
 
  const planElements = await popup.locator('li.plan-details').all();
  const plans: { name: string; premium: number; sumInsured: string }[] = [];
 
  for (const planEl of planElements) {
    const name = await planEl.locator('h2.plan-name').innerText();
    const premiumText = await planEl.locator('span.text-amount').innerText();
    const sumInsured = await planEl.getAttribute('plan-suminsured') || 'N/A';
 
    const premiumMatch = premiumText.match(/\d+/);
    const premium = premiumMatch ? parseInt(premiumMatch[0], 10) : Number.MAX_VALUE;
 
    plans.push({ name, premium, sumInsured });
  }
 
  // Sort by premium and display lowest 3
  const sortedPlans = plans.sort((a, b) => a.premium - b.premium).slice(0, 3);
 
  console.log('\n🧳 Lowest International Travel Insurance Plans:\n');
  sortedPlans.forEach((plan, index) => {
    console.log(`${index + 1}. ${plan.name} — ₹${plan.premium} — Coverage: ${plan.sumInsured}`);
  });
});
 