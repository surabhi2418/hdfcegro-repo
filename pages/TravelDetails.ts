import { Page } from '@playwright/test';

export class TravelDetails {
  constructor(private page: Page) {}

  async fillPersonalInfo() {}
  async selectCountry() {}
  async setTravelDates() {}
}
