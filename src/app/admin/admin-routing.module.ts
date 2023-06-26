import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { ParentsComponent } from './parents/parents.component';
import { TeachersComponent } from './teachers/teachers.component';
import { AdminsComponent } from './admins/admins.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { ScheduleComponent } from './schedule/schedule.component';

const routes: Routes = [{path: '', children: [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'studentsInfo', component: StudentsComponent},
  {path: 'studentsMarks', component: StudentMarksComponent},
  {path: 'parents', component: ParentsComponent},
  {path: 'teachers', component: TeachersComponent},
  {path: 'classrooms', component: ClassroomsComponent},
  {path: 'schedule', component: ScheduleComponent},
  {path: 'admins', component: AdminsComponent}
]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
