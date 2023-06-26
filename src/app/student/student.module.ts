import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './links/course/course.component';
import { MarksComponent } from './marks/marks.component';
import { AssignmentComponent } from './links/assignment/assignment.component';
import { QuizComponent } from './links/quiz/quiz.component';


@NgModule({
  declarations: [
    HomeComponent,
    CoursesComponent,
    CourseComponent,
    MarksComponent,
    AssignmentComponent,
    QuizComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    FontAwesomeModule,
    FormsModule
  ],
})
export class StudentModule { }