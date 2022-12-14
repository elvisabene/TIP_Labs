import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JqueryLargeComponentComponent } from './jquery-large-component/jquery-large-component.component';
import {Route} from "@angular/router";
import {Lab11Module} from "../lab11/lab11.module";

export const lab12Routes: Route = {
  path: "lab12", component: JqueryLargeComponentComponent,
}

@NgModule({
  declarations: [
    JqueryLargeComponentComponent
  ],
    imports: [
        CommonModule,
        Lab11Module
    ]
})
export class Lab12Module { }
