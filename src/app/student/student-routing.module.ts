import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseComponent } from './links/course/course.component';
import { MarksComponent } from './marks/marks.component';
import { AssignmentComponent } from './links/assignment/assignment.component';
import { QuizComponent } from './links/quiz/quiz.component';

const routes: Routes = [
  {path: '', children: [
    {path: 'home', component: HomeComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'courses/course', component: CourseComponent},
    {path: 'courses/course/assignment', component: AssignmentComponent},
    {path: 'courses/course/quiz', component: QuizComponent},
    {path: 'marks', component: MarksComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
