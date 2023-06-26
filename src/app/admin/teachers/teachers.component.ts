import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit, faAdd } from '@fortawesome/free-solid-svg-icons';
import { Teacher } from '../interfaces/teacher';
import { TeachersService } from '../services/teachers.service';

@Component({
  selector: 'app-teachers',
  templateUrl: './teachers.component.html',
  styleUrls: ['./teachers.component.css']
})
export class TeachersComponent implements OnInit {
  isVisiable: boolean = false;
  isSubmitted: boolean = false;
  faTrash = faTrash;
  faEdit = faEdit;
  faAdd = faAdd;
  teachers: Teacher[] = []

  constructor(private teachersService: TeachersService) {}

  ngOnInit(): void {

    this.getTeachersList();
  }

  getTeachersList(): void {
    this.teachersService.getAllTeachers().subscribe(
      teachers => this.teachers = teachers
    );
  }
  
  handleBooleanVisiable(visiable: boolean) {
    this.isVisiable = visiable;
  }

  handleBooleanSubmit(submit: boolean) {
    this.isSubmitted = submit;
  }

  onToggle(): void {
  this.isVisiable = !this.isVisiable;
  }

  onClick() {
    this.isSubmitted = true;
    this.isVisiable = false;
  }

  onDelete(teacherId: any){
    this.teachersService.deleteTeacher(teacherId).subscribe(() => {
      this.getTeachersList();
    });
  }
}
