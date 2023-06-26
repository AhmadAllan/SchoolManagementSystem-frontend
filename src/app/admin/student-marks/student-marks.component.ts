import { Component } from "@angular/core";
import { faTrash, faEdit, faAdd } from "@fortawesome/free-solid-svg-icons";
import { Mark } from "../interfaces/mark";
import { MarksService } from "../services/marks.service";

@Component({
  selector: "app-student-marks",
  templateUrl: "./student-marks.component.html",
  styleUrls: ["./student-marks.component.css"],
})
export class StudentMarksComponent {
  isVisiable: boolean = false;
  isSubmitted: boolean = false;
  faTrash = faTrash;
  faEdit = faEdit;
  faAdd = faAdd;
  marks: Mark[] = [];

  constructor(private marksService: MarksService) {}

  ngOnInit(): void {
    this.getMarksList();
  }

  getMarksList(): void {
    this.marksService.getAllMarks().subscribe((marks) => (this.marks = marks));
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

  onDelete(markId: any) {
    this.marksService.deleteMark(markId).subscribe(() => {
      this.getMarksList();
    });
  }
}
