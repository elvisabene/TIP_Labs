import {Component, OnInit} from '@angular/core';
import {map, Observable, timer} from "rxjs";
import {Time} from "@angular/common";
import {CustomTime} from "../models";

@Component({
  selector: 'app-time-display',
  templateUrl: './time-display.component.html',
  styleUrls: ['./time-display.component.css']
})
export class TimeDisplayComponent implements OnInit {

  public timeFromLessonStart: Observable<string>;

  public lessonStartTime: CustomTime;

  constructor() { }

  ngOnInit(): void {
  }

  onTimeChange(event: Event) {

    const timePicker = event.target as HTMLInputElement;
    this.lessonStartTime = CustomTime.fromString(timePicker.value);

    this.timeFromLessonStart = timer(0, 1000).pipe(
      map(() => {

        const currentTime: CustomTime = CustomTime.fromDate(new Date());
        const difference = CustomTime.subtract(currentTime, this.lessonStartTime);

        return difference.convertToString();
      })
    );
  }

}
