import { Page } from '@playwright/test';

export class CarDummy {
  constructor(private page: Page) {}

  async fillDummyDetails() {}
  async getErrorMessage() {}
}