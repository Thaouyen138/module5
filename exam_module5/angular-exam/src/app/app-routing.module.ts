import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {BenXeComponent} from "./ben-xe/ben-xe.component";


const routes: Routes = [
  {
  path: '', component: HomeComponent
  },
  {
    path: 'benxe',component:BenXeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
