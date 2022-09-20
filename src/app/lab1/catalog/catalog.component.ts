import { Component, OnInit } from '@angular/core';
import {services} from "../models/services";

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css', './../lab1.styles.css']
})
export class CatalogComponent implements OnInit {

  services = services;

  constructor() { }

  ngOnInit(): void {
  }

}
