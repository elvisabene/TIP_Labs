import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route} from "@angular/router";
import { PointCalculatorComponent } from './point-calculator/point-calculator.component';
import {FormsModule} from "@angular/forms";

export const lab3Routes: Route = {
  path: "lab3", component: PointCalculatorComponent,
}

@NgModule({
  declarations: [
    PointCalculatorComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class Lab3Module { }
