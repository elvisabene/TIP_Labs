import { Component, OnInit } from '@angular/core';
import * as $ from "jquery";

@Component({
  selector: 'app-jquery-simple-component',
  templateUrl: './jquery-simple-component.component.html',
  styleUrls: ['./jquery-simple-component.component.css']
})
export class JquerySimpleComponentComponent implements OnInit {

  public message: string;

  constructor() { }

  ngOnInit(): void {
    this.task1();
    this.task2();
    this.task3();
  }

  task1() {
    const links = $("#my_links li:has(a)");

    console.log("Task 1");
    console.log(links);
  }

  task2() {
    const links = $("#my_links a[href^='documents']");

    console.log("Task 2");
    console.log(links);
  }

  task3() {
    const cells = $("#moto_table td:last-child:odd");

    console.log("Task 3");
    console.log(cells);
  }

}
