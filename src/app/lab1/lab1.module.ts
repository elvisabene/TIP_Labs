import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IndexComponent} from "./index/index.component";
import {Route, RouterLinkWithHref, RouterOutlet, Routes} from "@angular/router";
import { AdsComponent } from './ads/ads.component';
import { AddressComponent } from './address/address.component';
import { CatalogComponent } from './catalog/catalog.component';

export const lab1routing: Route = {
    path: 'lab1', component: IndexComponent, children: [
      {path: '', redirectTo: 'address', pathMatch: 'full'},
      {path: 'ads', component: AdsComponent, pathMatch: 'full',},
      {path: 'home', component: AddressComponent, pathMatch: 'full'},
      {path: 'catalog', component: CatalogComponent, pathMatch: 'full'}
    ],
  }

@NgModule({
  declarations: [
    IndexComponent,
    AdsComponent,
    AddressComponent,
    CatalogComponent,
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    RouterLinkWithHref
  ],
})
export class Lab1Module { }
