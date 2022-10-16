import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";
import { DateHelper } from "../models";

@Component({
  selector: 'app-worker-form',
  templateUrl: './worker-form.component.html',
  styleUrls: ['./worker-form.component.css']
})
export class WorkerFormComponent implements OnInit {

  public workingDays?: number;

  public weekendDays?: number;

  public salary?: number;

  public form: FormGroup = this.formBuilder.group({
    name: [],
    paymentPerHour: [],
    startDate: [],
    endDate: [],
  });

  @Output()
  public remove: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  paymentChange(): void {
    const paymentPerHour = this.form.controls['paymentPerHour'].value;

    if (!this.workingDays || !paymentPerHour) {

      this.salary = undefined;

      return;
    }

    this.salary = this.workingDays * 8 * paymentPerHour;
  }

  dateChange(): void {

    const startDateInString = this.form.controls['startDate'].value;
    const endDateInString = this.form.controls['endDate'].value;

    if (!startDateInString || !endDateInString) {

      this.workingDays = undefined;
      this.weekendDays = undefined;

      return;
    }

    const startDate = new Date(startDateInString);
    const endDate = new Date(endDateInString);

    this.workingDays = DateHelper.getWeekDaysNumber(startDate, endDate);
    this.weekendDays = DateHelper.getWeekendDaysNumber(startDate, endDate);
    this.paymentChange();
  }

  ngOnInit(): void {
  }

  emitRemove(): void {
    this.remove.emit();
  }

}
