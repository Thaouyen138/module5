import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DetailWordComponent} from "./detail-word/detail-word.component";
import {DictionaryComponent} from "./dictionary/dictionary.component";


const routes: Routes = [
  {
    path:'detail/:detail',
    component: DetailWordComponent
  },
  {
    path: '',
    component: DictionaryComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
