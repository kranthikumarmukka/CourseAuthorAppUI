import { RouterModule } from '@angular/router';
import { CoursepageComponent } from './coursepage.component';
import { CourselistComponent } from './courselist.component';
import { CoursedetailComponent } from './coursedetail.component';


export const COURSE_ROUTES = RouterModule.forChild([
    {path:'', component:CoursepageComponent},
    {path:'', component:CoursepageComponent, children: [
        {path:'list', component:CourselistComponent},
        {path:'list', component:CourselistComponent, children: [
            {path:'detail/:courseId', component:CoursedetailComponent}
        ]}
    ]},
]);