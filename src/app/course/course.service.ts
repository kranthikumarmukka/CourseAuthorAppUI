import { Injectable } from '@angular/core';
import { Course } from './course'

@Injectable()
export class CourseService {

  CourseList:Array<Course> = [ {courseId: "Java1", courseName: "Java"},
  {courseId: "UI2", courseName: "Web Development"},
  {courseId: "DB3", courseName: "Databases"}
  ]

  public getCourses(){
      return this.CourseList;
  }

  constructor() { }

}
