import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PictureMenuComponent } from './picture-menu/picture-menu.component';
import {Route} from "@angular/router";

export const lab9routes: Route = {
  path: "lab9", component: PictureMenuComponent,
};

@NgModule({
  declarations: [
    PictureMenuComponent
  ],
  imports: [
    CommonModule
  ]
})
export class Lab9Module { }
