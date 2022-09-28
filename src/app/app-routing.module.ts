import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { lab1Routes } from "./lab1/lab1.module";
import {lab2Routes} from "./lab2/lab2.module";

const routes: Routes = [
  lab1Routes,
  lab2Routes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
