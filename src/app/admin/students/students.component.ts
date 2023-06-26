import { Component } from "@angular/core";

import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { Student } from "../interfaces/student";
import { StudentService } from "../services/student.service";

@Component({
  selector: "app-students",
  templateUrl: "./students.component.html",
  styleUrls: ["./students.component.css"],
})
export class StudentsComponent {
  isVisiable: boolean = false;
  isSubmitted: boolean = false;
  faTrash = faTrash;
  faEdit = faEdit;
  faAdd = faAdd;
  students: Student[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.getStudentsList();
  }

  getStudentsList(): void {
    this.studentService
      .getAllStudents()
      .subscribe((students) => (this.students = students));
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

  onDelete(studentId: any) {
    this.studentService.deleteStudent(studentId).subscribe(() => {
      this.getStudentsList();
    });
  }
}
