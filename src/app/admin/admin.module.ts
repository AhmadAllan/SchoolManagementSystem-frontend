import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AdminRoutingModule } from './admin-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FullCalendarModule } from '@fullcalendar/angular';
import { HttpClientModule } from '@angular/common/http';


import { DashboardComponent } from './dashboard/dashboard.component';
import { StudentsComponent } from './students/students.component';
import { ParentsComponent } from './parents/parents.component';
import { InputFieldStudentsComponent } from './common/input-field-students/input-field-students.component';
import { InputFieldParentsComponent } from './common/input-field-parents/input-field-parents.component';
import { TeachersComponent } from './teachers/teachers.component';
import { InputFieldTeachersComponent } from './common/input-field-teachers/input-field-teachers.component';
import { AdminsComponent } from './admins/admins.component';
import { InputFieldAdminsComponent } from './common/input-field-admins/input-field-admins.component';
import { StudentMarksComponent } from './student-marks/student-marks.component';
import { InputFieldStudentsMarksComponent } from './common/input-field-students-marks/input-field-students-marks.component';
import { ClassroomsComponent } from './classrooms/classrooms.component';
import { ScheduleComponent } from './schedule/schedule.component';


@NgModule({
  declarations: [
    DashboardComponent,
    StudentsComponent,
    ParentsComponent,
    InputFieldStudentsComponent,
    InputFieldParentsComponent,
    TeachersComponent,
    InputFieldTeachersComponent,
    AdminsComponent,
    InputFieldAdminsComponent,
    StudentMarksComponent,
    InputFieldStudentsMarksComponent,
    ClassroomsComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    FullCalendarModule,
    HttpClientModule
  ],
})
export class AdminModule { }
