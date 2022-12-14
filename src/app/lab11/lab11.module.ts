import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JquerySimpleComponentComponent } from './jquery-simple-component/jquery-simple-component.component';
import { Route } from "@angular/router";

export const lab11Routes: Route = {
  path: "lab11", component: JquerySimpleComponentComponent,
}

@NgModule({
    declarations: [
        JquerySimpleComponentComponent
    ],
    exports: [
        JquerySimpleComponentComponent
    ],
    imports: [
        CommonModule
    ]
})
export class Lab11Module { }
