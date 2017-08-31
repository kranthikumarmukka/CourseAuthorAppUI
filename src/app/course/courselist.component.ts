import { Component, OnInit } from '@angular/core';
import { CourseService } from './course.service';
import { Course } from './course';

@Component({
  selector: 'app-courselist',
  template: `
    <h1>Courses</h1>
    <ul>
      <li *ngFor="let course of courses">
        <a [routerLink]="['/list/detail',course.courseId]">{{course.courseName}}</a>
      </li>
    </ul>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class CourselistComponent implements OnInit {
  courses:Array<Course> = [];

  constructor(private courseService:CourseService) {
 
   }

  ngOnInit() {
      this.courses = this.courseService.getCourses();
  }

}
