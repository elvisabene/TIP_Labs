import { Component, OnInit } from '@angular/core';
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  public students: string[] = [];

  constructor() { }

  ngOnInit(): void {
    this.students = StudentsComponent.getStudents();
  }

  private static getStudents(): string[] {
    const studentsNumber = prompt("How many students in your group?");

    const number = Number(studentsNumber);

    if (!number) {
      return this.getStudents();
    }

    const students: string[] = [];

    for (let i = 0; i < number; i++) {
      const studentName = prompt(`${i + 1}. Enter student name:`);

      students.push(studentName ? studentName : "");
    }

    return students;
  }

}
