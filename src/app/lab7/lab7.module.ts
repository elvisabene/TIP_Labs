import { NgModule } from '@angular/core';
import { Route } from "@angular/router";
import { CommonModule } from '@angular/common';
import { CourseFormComponent } from './course-form/course-form.component';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";
import { ProfileFormComponent } from './profile-form/profile-form.component';

export const lab7Routes: Route = {
  path: "lab7", component: CourseFormComponent,
}

@NgModule({
  declarations: [
    CourseFormComponent,
    ProfileFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class Lab7Module { }
