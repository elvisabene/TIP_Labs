import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkersOutputComponent } from './worker-output/workers-output.component';
import { Route } from "@angular/router";

export const lab10Routes: Route = {
  path: "lab10", component: WorkersOutputComponent,
}

@NgModule({
  declarations: [
    WorkersOutputComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Lab10Module { }
