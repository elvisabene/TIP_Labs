import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { lab1Routes } from "./lab1/lab1.module";
import {lab2Routes} from "./lab2/lab2.module";
import {lab3Routes} from "./lab3/lab3.module";
import {lab4Routes} from "./lab4/lab4.module";
import {lab5Routes} from "./lab5/lab5.module";

const routes: Routes = [
  lab1Routes,
  lab2Routes,
  lab3Routes,
  lab4Routes,
  lab5Routes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
