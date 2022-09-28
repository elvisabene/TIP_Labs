import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route} from "@angular/router";
import { DialogWindowsComponent } from './dialog-windows/dialog-windows.component';

export const lab2Routes: Route = {
  path: "lab2", component: DialogWindowsComponent,
}

@NgModule({
  declarations: [
    DialogWindowsComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Lab2Module { }
