import { Page } from '@playwright/test';
import { CarInsurance } from '../pages/CarInsurance';
import { CarDummy } from '../pages/CarDummy'; // ✅ Correct import path

export class PageFixture {
  carInsurance: CarInsurance;
  carDummy: CarDummy;

  constructor(page: Page) {
    this.carInsurance = new CarInsurance(page);
    this.carDummy = new CarDummy(page); // ✅ Proper constructor usage
  }
}
