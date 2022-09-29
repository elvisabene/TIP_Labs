import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-point-calculator',
  templateUrl: './point-calculator.component.html',
  styleUrls: ['./point-calculator.component.css']
})
export class PointCalculatorComponent implements OnInit {

  public points: Point[];

  public distance: number = NaN;

  public value1:string = "";

  public value2: string = "";

  constructor() {
    this.points = points;
  }

  public ngOnInit(): void {
  }

  public calculateSquare($event: Event) {
    const determinant = (points[0].X.Value - points[2].X.Value) * (points[1].Y.Value - points[2].Y.Value)
      - (points[1].X.Value - points[2].X.Value) * (points[0].Y.Value - points[2].Y.Value);

    const square = Math.abs(determinant / 2);

    const inputElement = $event.target as HTMLInputElement;
    inputElement.value = String(square);
  }

  public changeValue(event: Event) {
    const element = event.target as HTMLInputElement;
    let point = this.points.find(p => p.X.Id === element.id);

    if (point) {
      this.setValue(point.X, element);

      return;
    }

    point = this.points.find(p => p.Y.Id === element.id)

    if (point) {
      this.setValue(point.Y, element);
    }
  }

  public calculateDistance($event: Event) {

    const inputElement = $event.target as HTMLInputElement;
    const parts = inputElement.value.split(' ');

    const x = Number(parts[0]);
    const y = Number(parts[1]);

    this.distance = Math.sqrt(Math.pow(x, 2) + Math.pow(y, 2))
  }

  public swapValues() {
    if (!this.value1 || !this.value2) {
      return;
    }

    const tmp = this.value1;
    this.value1 = this.value2;
    this.value2 = tmp;
  }

  private setValue(coordinate: Coordinate, input: HTMLInputElement) {
    coordinate.Value = Number(input.value);
  }

}

interface Coordinate {
  Id: string,
  Name: string,
  Value: number,
}

interface Point {
  X: Coordinate,
  Y: Coordinate,
}

const points = [
  {
    X: {
      Id: "x1",
      Name: "X1",
      Value: 0,
    },
    Y: {
      Id: "y1",
      Name: "Y1",
      Value: 0,
    }
  },
  {
    X: {
      Id: "x2",
      Name: "X2",
      Value: 0,
    },
    Y: {
      Id: "y2",
      Name: "Y2",
      Value: 0,
    }
  },
  {
    X: {
      Id: "x3",
      Name: "X3",
      Value: 0,
    },
    Y: {
      Id: "y3",
      Name: "Y3",
      Value: 0,
    }
  }
];
