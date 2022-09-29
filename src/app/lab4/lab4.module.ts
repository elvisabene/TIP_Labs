import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route} from "@angular/router";
import { LoginComponent } from './login/login.component';
import { StudentsComponent } from './students/students.component';

export const lab4Routes: Route = {
  path: "lab4", children: [
    { path: "", redirectTo: "login", pathMatch: "full" },
    { path: "login", component: LoginComponent, },
    { path: "students", component: StudentsComponent },
  ]
}

@NgModule({
  declarations: [
    LoginComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Lab4Module { }
