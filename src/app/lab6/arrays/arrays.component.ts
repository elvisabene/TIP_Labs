import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

const fruits: string[] = [
  "Apple", "Orange", "Pear", "Lemon"
]

type Generator = () => number;
type Gen = () => any;

@Component({
  selector: 'app-arrays',
  templateUrl: './arrays.component.html',
  styleUrls: ['./arrays.component.css']
})
export class ArraysComponent implements OnInit {

  public start: string = "";
  public end: string = "";
  public length: string = "";

  constructor() { }

  ngOnInit(): void {

  }

  getFruit(): void {
    const randomIndex = ArraysComponent.getRandom(1, 3);
    const randomFruit = fruits[randomIndex];

    console.log(randomFruit)
    alert(randomFruit);
  }

  createArray(myForm: NgForm): void {
    const array = ArraysComponent.getRandomArray(
      Number(myForm.value.start),
      Number(myForm.value.end),
      Number(myForm.value.length));

    alert("Created array: " + array);
  }

  createSequence() {

    const array = ArraysComponent.getRandomArray(10, 1, 100);

    const generator: Gen = ArraysComponent.sequence(10, 6);

    const resultArray = this.take(generator, 10);
    alert("Result of 'take' method: " + resultArray);
  }

  take(gen: Gen, times: number): number[] {
    const resultArray: any[] = [];

    for (let i = 0; i < times; i++) {
      const result = gen();
      resultArray.push(result);
    }

    return resultArray;
  }

  static getRandom(min: number, max: number) {
    return min + Math.floor(Math.random() * (max - min + 1));
  }

  static getRandomArray(length: number, min: number, max: number) {
    const array: number[] = [];

    for (let i = 0; i < length; i++) {
      const random = ArraysComponent.getRandom(min, max);

      array.push(random);
    }

    return array;
  }

  static sequence(start: number = 0, step: number = 1): Generator {

    let number = start;

    return () => {

      const initial = number;
      number += step

      return initial;
    };
  }

}


