import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HumanResourceComponent } from './human-resource/human-resource.component';
import { Route } from "@angular/router";
import { TimeDisplayComponent } from './time-display/time-display.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WorkerFormComponent } from './worker-form/worker-form.component';

export const lab8routes: Route = {
  path: "lab8", component: HumanResourceComponent,
}

@NgModule({
  declarations: [
    HumanResourceComponent,
    TimeDisplayComponent,
    WorkerFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class Lab8Module { }
