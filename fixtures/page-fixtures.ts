import {Page} from '@playwright/test';
import { TravelInsurance } from '../pages/TravelInsurance';
import { StudentTravel } from '../pages/StudentTravel';
import {TravelDetails} from '../pages/TravelDetails';
import {InsurancePlan} from '../pages/InsurancePlan';
import {CarInsurance} from '../pages/CarInsurance';
import {CarDummy} from '../pages/CarDummy';
import {HealthInsurance} from '../Pages/HealthInsurance';
 
 
export class PageFixture{
    readonly travelInsurance: TravelInsurance;
    readonly studentTravel: StudentTravel;
    readonly travelDetails: TravelDetails;
    readonly insurancePlan: InsurancePlan;
    readonly carInsurance: CarInsurance;
    readonly carDummy: CarDummy;
    readonly healthInsurance: HealthInsurance;
    readonly page: Page;
 
    constructor(page: Page) {
        this.page = page;
       
        this.travelInsurance = new TravelInsurance(page);
        this.studentTravel = new StudentTravel(page);
        this.travelDetails = new TravelDetails(page);
        this.insurancePlan = new InsurancePlan(page);
        this.carInsurance = new CarInsurance(page);
        this.carDummy = new CarDummy(page);
        this.healthInsurance = new HealthInsurance(page);
    }
 
    get basePage(): Page{
        return this.page;
    }
 
 
 
}