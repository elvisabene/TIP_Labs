import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route} from "@angular/router";
import { LoginComponent } from './login/login.component';

export const lab4Routes: Route = {
  path: "lab4", component: LoginComponent,
}

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Lab4Module { }
