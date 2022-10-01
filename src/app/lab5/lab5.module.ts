import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImagesComponent } from './images/images.component';
import {Route} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

export const lab5Routes: Route = {
  path: "lab5", component: ImagesComponent,
}

@NgModule({
  declarations: [
    ImagesComponent,
  ],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
  ],
  exports: [
    BrowserAnimationsModule,
  ]
})
export class Lab5Module { }
