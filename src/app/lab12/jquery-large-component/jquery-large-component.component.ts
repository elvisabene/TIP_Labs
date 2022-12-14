import { Component, OnInit } from '@angular/core';
import * as $ from "jquery"

@Component({
  selector: 'app-jquery-large-component',
  templateUrl: './jquery-large-component.component.html',
  styleUrls: ['./jquery-large-component.component.css']
})
export class JqueryLargeComponentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   $(document).ready(() => {
     this.task1();
     this.task2();
     this.task3();
     this.task4();
     this.task5();
   })
  }

  task1() {
    console.log("Lab 12 - Task 1");
    const logo = $("#forheader").children().first();
    const logo2 = $("img[src$='logo.jpg']");

    console.log(logo);
    console.log(logo2);
  }

  task2() {
    console.log("Lab 12 - Task 2");
    const images = $("img");
    const selected = images.not(images.first());
    console.log(selected);

    selected.hide(5000);
    selected.show(5000);
  }

  task3() {
    setTimeout(() =>
      this.setAttribute("img_4", "src", "assets/pics/car.jpeg"), 1000);
  }

  setAttribute(elementId: string, attributeName: string, attributeValue: string) {
    $(`#${elementId}`).attr(attributeName, attributeValue);
  }

  task4() {
    $("img[src$='moto2.jpg']")
      .css('border', 'solid 2px red')
      .animate({ 'border-width': '5px' }, 5000, () => {
        $("#forheader").fadeOut(5000)
      });
  }

  task5() {
    $("<p>This is new paragraph.</p>").css({ 'font-size': '2rem' })
      .appendTo('#body')
      .attr('id', 'newparagraph')
      .css({
        'background-color': 'black',
        'color': 'white',
      })

  }

}
