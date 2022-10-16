import {Component, OnInit} from '@angular/core';
import { AutoIncrement } from "../models";

@Component({
  selector: 'app-human-resource',
  templateUrl: './human-resource.component.html',
  styleUrls: ['./human-resource.component.css']
})
export class HumanResourceComponent implements OnInit {

  public workerNumbers: number[] = [];

  private numberIncrement: AutoIncrement = new AutoIncrement();

  public addWorker() {
    this.workerNumbers.push(this.numberIncrement.next());
  }

  public removeWorker(workerNumber: number) {
    this.workerNumbers = this.workerNumbers.filter(number => number !== workerNumber);
  }

  constructor(
  ) { }

  public ngOnInit() {
    this.addWorker();
  }

}
