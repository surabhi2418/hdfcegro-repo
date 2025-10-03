import { Page } from '@playwright/test';

export class InsurancePlan {
  constructor(private page: Page) {}

  async extractPlans() {}
  async sortPlansByPremium() {}
}