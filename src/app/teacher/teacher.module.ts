import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TeacherRoutingModule } from './teacher-routing.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './course/course.component';
import { AssignmentComponent } from './links/assignment/assignment.component';
import { MarksComponent } from './links/marks/marks.component';


@NgModule({
  declarations: [
    HomeComponent,
    CoursesComponent,
    CourseComponent,
    AssignmentComponent,
    MarksComponent,
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    FontAwesomeModule
  ]
})
export class TeacherModule { }
