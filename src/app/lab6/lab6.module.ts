import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Route} from "@angular/router";
import { ArraysComponent } from './arrays/arrays.component';
import {FormsModule} from "@angular/forms";

export const lab6Routes: Route = {
  path: "lab6", component: ArraysComponent,
}

@NgModule({
  declarations: [
    ArraysComponent
  ],
    imports: [
        CommonModule,
        FormsModule
    ]
})
export class Lab6Module { }
