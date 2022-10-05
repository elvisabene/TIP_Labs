import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Lab5Module } from "./lab5/lab5.module";
import {FormsModule} from "@angular/forms";
import {Lab6Module} from "./lab6/lab6.module";

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    Lab5Module,
    Lab6Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
