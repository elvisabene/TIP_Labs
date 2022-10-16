import { Time } from "@angular/common";

export class CustomTime implements Time {

  constructor(
    public hours: number,
    public minutes: number,
    public seconds: number,
  ) { }

  public static fromDate(date: Date): CustomTime {
    return this.fromString(date.toLocaleTimeString());
  }

  public static fromString(time: string): CustomTime {
    const parts = time.split(':');

    return new CustomTime(
      Number(parts[0]),
      Number(parts[1]),
      parts[2] ? Number(parts[2]) : 0)
  }

  public static subtract(firstTime: CustomTime, secondTime: CustomTime): CustomTime {
    let hours = firstTime.hours - secondTime.hours;
    let minutes = firstTime.minutes - secondTime.minutes;

    if (minutes < 0) {
      hours--;
      minutes = 60 + minutes
    }

    let seconds = firstTime.seconds - secondTime.seconds;

    if (seconds < 0) {
      minutes--;
      seconds = 60 + seconds
    }

    if (hours < 0) {
      hours = 24 + hours;
    }

    return new CustomTime(hours, minutes, seconds);
  }

  public convertToString(): string {

    return `${this.format(this.hours)}:${this.format(this.minutes)}:${this.format(this.seconds)}`
  }

  private format(timeValue: number): string {
    return timeValue < 10 ? `0${timeValue}` : timeValue.toString();
  }
}

export class DateHelper {

  private static readonly millisecondsInDay = 8.64e+7;

  public static getWeekDaysNumber(startDate: Date, endDate: Date): number {

    return this.getDaysNumberByCondition(startDate, endDate, day => !day.isWeekend())
  }

  public static getWeekendDaysNumber(startDate: Date, endDate: Date): number {

    return this.getDaysNumberByCondition(startDate, endDate, day => day.isWeekend())
  }

  private static getDaysNumberByCondition(startDate: Date, endDate: Date, satisfy: (weekDay: WeekDay) => boolean) {

    const currentDay: WeekDay = new WeekDay(startDate.getDay());
    const daysInInterval = (endDate.getTime() - startDate.getTime()) / DateHelper.millisecondsInDay;

    let daysNumber = satisfy(currentDay) ? 0 : 1;

    for (let i = 1; i <= daysInInterval; i++) {
      if (satisfy(currentDay)) {
        daysNumber++;
      }

      currentDay.moveNext();
    }

    return daysNumber;
  }
}

type Delegate = (a: number) => boolean

class WeekDay {

  private current: number;

  public constructor(currentDay: number) {

    this.current = currentDay;
  }

  public get currentDay(): number {
    return this.current;
  }

  public moveNext(): void {

    if (this.current === 6) {
      this.current = 0;
    } else {
      this.current++;
    }
  }

  public isWeekend(): boolean {
    return this.current === 6
      || this.current === 0;
  }

}

export class AutoIncrement {

  private id: number = 0;

  public next(): number {
    return ++this.id;
  }

  get current(): number {
    return this.id;
  }
}
