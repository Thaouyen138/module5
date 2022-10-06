import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { ContractComponent } from './contract/contract/contract.component';
import { FacilityComponent } from './facility/facility/facility.component';
import { FooterComponent } from './footer/footer/footer.component';
import { HeaderComponent } from './header/header/header.component';
import { HomeComponent } from './home/home/home.component';
import { FacilityEditComponent } from './facility/facility-edit/facility-edit.component';
import { FacilityCreateComponent } from './facility/facility-create/facility-create.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerEditComponent } from './customer/customer-edit/customer-edit.component';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { EmployeeComponent } from './employee/employee.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { TestHeaderComponent } from './test-header/test-header.component';
import { TestFooterComponent } from './test-footer/test-footer.component';
import { TestHomeComponent } from './test-home/test-home.component';

@NgModule({
  declarations: [
    AppComponent,
    CustomerComponent,
    ContractComponent,
    FacilityComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    FacilityEditComponent,
    FacilityCreateComponent,
    CustomerCreateComponent,
    CustomerEditComponent,
    EmployeeComponent,
    TestHeaderComponent,
    TestFooterComponent,
    TestHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 2000,
      closeButton: true,
      progressBar: true,
      positionClass: 'toast-top-right',
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
