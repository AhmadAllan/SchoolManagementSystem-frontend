import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faAdd, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CustomValidationService } from '../../services/custom-validation.service';
import { StudentService } from '../../services/student.service';
import { Student } from '../../interfaces/student';

@Component({
  selector: 'app-input-field-students',
  templateUrl: './input-field-students.component.html',
  styleUrls: ['./input-field-students.component.css']
})
export class InputFieldStudentsComponent {
  faAdd = faAdd;
  faXmark = faXmark;
  isSubmitted: boolean = false;
  form!: FormGroup;
  @Input() isVisiable = false;
  @Output() sendVisiable = new EventEmitter<boolean>();
  @Output() sendSubmit = new EventEmitter<boolean>();
  @Output() studentAdded = new EventEmitter<void>();
  
  constructor (private formBuilder: FormBuilder, private customVadlidator: CustomValidationService, private studentService: StudentService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: [
        '' , [Validators.required]
      ],
      lastName: [
        '' , [Validators.required]
      ],
      grade: [
        '' , [
          Validators.required,
        ]
      ],
      class: [
        '' , [
          Validators.required,
        ],
      ]
    },{
      validator: this.customVadlidator.passwordMatchValidator("password","passwordConfirm")
    });
  }

  get firstNameValid(){
    return this.form.get('firstName')?.invalid && (this.form.get('firstName')?.touched || this.form.get('firstName')?.dirty || this.isSubmitted);
  }

  get lastNameValid(){
    return this.form.get('lastName')?.invalid && (this.form.get('lastName')?.touched || this.form.get('lastName')?.dirty || this.isSubmitted);
  }

  get gradeValid(){
    return this.form.get('grade')?.invalid && (this.form.get('grade')?.touched || this.form.get('grade')?.dirty || this.isSubmitted);
  }

  get classValid(){
    return this.form.get('class')?.invalid && (this.form.get('class')?.touched || this.form.get('class')?.dirty || this.isSubmitted);
  }

  onClick() {
    if (this.form.valid) {
      this.isSubmitted = true;
      const student: Student = {
        name: this.form.value.name,
        userName: this.form.value.userName,
        email: this.form.value.email,
        password: this.form.value.password,
        grade: this.form.value.grade,
        classroom: this.form.value.classroom
      };
      this.studentService.createStudent(student).subscribe(
        (response) => {
          this.form.reset();
          this.isVisiable = false;
          this.sendVisiable.emit(this.isVisiable);
          this.sendSubmit.emit(this.isSubmitted);
          this.studentAdded.emit();
          console.log('Student created successfully:', response);
        },
        (error) => {
          console.error('Failed to create student:', error);
        }
      );
    } else {
      this.isSubmitted = true;
    }
  }

  onClose() {
    this.isVisiable = false;
    this.sendVisiable.emit(this.isVisiable);
    this.form.reset
  }
}

