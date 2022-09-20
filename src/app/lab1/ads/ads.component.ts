import { Component, OnInit } from '@angular/core';
import {Quote, quotes} from "../models/quotes";

@Component({
  selector: 'app-ads',
  templateUrl: './ads.component.html',
  styleUrls: ['./ads.component.css', './../lab1.styles.css']
})
export class AdsComponent implements OnInit {

  public quotes: Quote[];

  constructor() {
    this.quotes = quotes;
  }

  ngOnInit(): void {
  }

}
