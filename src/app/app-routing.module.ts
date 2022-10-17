import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { lab1Routes } from "./lab1/lab1.module";
import { lab2Routes } from "./lab2/lab2.module";
import { lab3Routes } from "./lab3/lab3.module";
import { lab4Routes } from "./lab4/lab4.module";
import { lab5Routes } from "./lab5/lab5.module";
import { lab6Routes } from "./lab6/lab6.module";
import { lab7Routes } from "./lab7/lab7.module";
import { lab8routes } from "./lab8/lab8.module";
import { lab9routes } from "./lab9/lab9.module";
import { lab10Routes } from "./lab10/lab10.module";
import { lab11Routes } from "./lab11/lab11.module";

const routes: Routes = [
  lab1Routes,
  lab2Routes,
  lab3Routes,
  lab4Routes,
  lab5Routes,
  lab6Routes,
  lab7Routes,
  lab8routes,
  lab9routes,
  lab10Routes,
  lab11Routes,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
