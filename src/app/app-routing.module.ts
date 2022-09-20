import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { lab1routing } from "./lab1/lab1.module";

const routes: Routes = [
  lab1routing,
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
