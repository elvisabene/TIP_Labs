import { Component, OnInit } from '@angular/core';
import { courses, CourseView } from "../models/domain-models/course-view";

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent implements OnInit {

  public tableHeaders = tableHeaders;

  public finalCost: number;

  public courses: CourseView[] = courses;

  constructor() {
    this.finalCost = 0;
  }

  ngOnInit(): void {
  }

  selectCourse(course: CourseView, event: Event): void {

    const courseCheck = event.target as HTMLInputElement;

    course.Name.IsChecked = courseCheck.checked;
    CourseView.recalculateCost(course);
    console.log(courseCheck.checked);
    this.recalculateFinalCost()
  }

  selectDuration(course: CourseView, selectedDurationIndex: number) {
    course.Durations.SelectedIndex = selectedDurationIndex;
    CourseView.recalculateCost(course);
    this.recalculateFinalCost()
  }

  selectLanguage(course: CourseView, selectedLanguageIndex: number) {
    course.Languages.SelectedIndex = selectedLanguageIndex;
    CourseView.recalculateCost(course);
    this.recalculateFinalCost()
  }

  selectReportingType(course: CourseView, selectedReportingTypeIndex: number) {
    course.ReportingTypes.SelectedIndex = selectedReportingTypeIndex;
    CourseView.recalculateCost(course);
    this.recalculateFinalCost()
  }

  recalculateFinalCost() {
    let sum = 0;

    courses.forEach(course => {
      sum += course.Cost ? course.Cost : 0;
    })

    this.finalCost = sum;
  }

  reset() {
    this.courses.forEach(course => {
      course.Name.IsChecked = false;

      this.selectLanguage(course, 0);
      this.selectDuration(course, 0);
      this.selectReportingType(course, 0);
    })
  }

}

const tableHeaders = [
  "Course",
  "Duration",
  "Language",
  "Reporting",
  "Cost",
]
