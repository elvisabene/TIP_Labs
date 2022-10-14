import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Lab5Module } from "./lab5/lab5.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {Lab7Module} from "./lab7/lab7.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Lab5Module,
    Lab7Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
