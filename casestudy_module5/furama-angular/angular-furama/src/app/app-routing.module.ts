import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home/home.component";
import {CustomerComponent} from "./customer/customer/customer.component";
import {FacilityComponent} from "./facility/facility/facility.component";
import {ContractComponent} from "./contract/contract/contract.component";


const routes: Routes = [
  {path:'',
  component: HomeComponent},
  {path:'customer',
    component: CustomerComponent},
  {path:'facility',
    component: FacilityComponent},
  {path:'contract',
    component: ContractComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
