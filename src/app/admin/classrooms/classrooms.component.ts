import { Component, OnInit } from '@angular/core';
import { faTrash, faEdit, faAdd } from '@fortawesome/free-solid-svg-icons';
import { ClassroomService } from '../services/classroom.service';
import { Classroom } from '../interfaces/classroom';

@Component({
  selector: 'app-class-rooms',
  templateUrl: './classrooms.component.html',
  styleUrls: ['./classrooms.component.css']
})
export class ClassroomsComponent implements OnInit {
  isVisiable: boolean = false;
  isSubmitted: boolean = false;
  faTrash = faTrash;
  faEdit = faEdit;
  faAdd = faAdd;
  classrooms: Classroom[] = []

  constructor(private classroomService: ClassroomService) {}

  ngOnInit(): void {

    this.getClassroomsList();
  }

  getClassroomsList(): void {
    this.classroomService.getAllClassrooms().subscribe(
      classrooms => {this.classrooms = classrooms;     console.log(this.classrooms); console.log(classrooms[0].className);
      }
    );   
  }

  handleBooleanVisiable(visiable: boolean) {
    this.isVisiable = visiable;
  }

  handleBooleanSubmit(submit: boolean) {
    this.isSubmitted = submit;
  }

  onClick() {
    this.isSubmitted = true;
    this.isVisiable = false;
  }

  onDelete(classroomId: any){
    this.classroomService.deleteClassroom(classroomId).subscribe(() => {
      this.getClassroomsList();
    });
  }
}
