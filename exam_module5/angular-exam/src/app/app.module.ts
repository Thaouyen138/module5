import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ExamComponent } from './exam/exam.component';
import { HomeComponent } from './home/home.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import { BenXeComponent } from './ben-xe/ben-xe.component';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ExamComponent,
    HomeComponent,
    BenXeComponent
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
            timeOut: 2000,
            closeButton: true,
            progressBar: true,
            positionClass: 'toast-top-right',
        }),
        ReactiveFormsModule,
        NgxPaginationModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
