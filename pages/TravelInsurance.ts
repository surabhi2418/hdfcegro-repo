import { Page } from '@playwright/test';

export class TravelInsurance {
  constructor(private page: Page) {}

  async startQuoteFlow() {}
  async enableAgeField() {}
  async fillAge() {}
  async continueToQuote() {}
}