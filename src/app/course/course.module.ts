import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursepageComponent } from './coursepage.component';
import { CourselistComponent } from './courselist.component';
import { CourseService } from './course.service';
import { COURSE_ROUTES } from './course.routing';
import { CoursedetailComponent } from './coursedetail.component';

 

@NgModule({
  imports: [
    CommonModule,
    COURSE_ROUTES
  ],
  exports: [ CoursepageComponent ],
  providers:[ CourseService ],
  declarations: [CoursepageComponent, CourselistComponent, CoursedetailComponent]
})
export class CourseModule { }
