import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faAdd, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Mark } from '../../interfaces/mark';
import { CustomValidationService } from '../../services/custom-validation.service';
import { MarksService } from '../../services/marks.service';

@Component({
  selector: 'app-input-field-students-marks',
  templateUrl: './input-field-students-marks.component.html',
  styleUrls: ['./input-field-students-marks.component.css']
})
export class InputFieldStudentsMarksComponent {
  faAdd = faAdd;
  faXmark = faXmark;
  isSubmitted: boolean = false;
  form!: FormGroup;
  @Input() isVisiable = false;
  @Output() sendVisiable = new EventEmitter<boolean>();
  @Output() sendSubmit = new EventEmitter<boolean>();
  @Output() markAdded = new EventEmitter<void>();

  constructor (private formBuilder: FormBuilder, private customVadlidator: CustomValidationService, private marksService: MarksService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      fullName: [
        '' , [Validators.required]
      ],
      quizzes: [
        '' , [Validators.required]
      ],
      midterm: [
        '' , [
          Validators.required,
        ]
      ],
      final: [
        '' , [
          Validators.required,
        ],
      ],
      material: [
        '' , [
          Validators.required,
        ],
      ],
      student: [
        '' , [
          Validators.required,
        ],
      ]
    });
  }

  get fullNameValid(){
    return this.form.get('fullName')?.invalid && (this.form.get('firstName')?.touched || this.form.get('fullName')?.dirty || this.isSubmitted);
  }

  get quizzesValid(){
    return this.form.get('quizzes')?.invalid && (this.form.get('quizzes')?.touched || this.form.get('quizzes')?.dirty || this.isSubmitted);
  }

  get midtermValid(){
    return this.form.get('midterm')?.invalid && (this.form.get('midterm')?.touched || this.form.get('midterm')?.dirty || this.isSubmitted);
  }

  get finalValid(){
    return this.form.get('final')?.invalid && (this.form.get('final')?.touched || this.form.get('final')?.dirty || this.isSubmitted);
  }

  get materaiValid(){
    return this.form.get('material')?.invalid && (this.form.get('material')?.touched || this.form.get('material')?.dirty || this.isSubmitted);
  }

  get studentValid(){
    return this.form.get('student')?.invalid && (this.form.get('student')?.touched || this.form.get('student')?.dirty || this.isSubmitted);
  }

  onClick() {
    if (this.form.valid) {
      this.isSubmitted = true;
      const mark: Mark = {
        report: this.form.value.quizzes,
        midterm: this.form.value.midterm,
        finalMark: this.form.value.final,
        materialId: this.form.value.materail,
        studentId: this.form.value.student
      };
      this.marksService.createMark(mark).subscribe(
        (response) => {
          this.form.reset();
          this.isVisiable = false;
          this.sendVisiable.emit(this.isVisiable);
          this.sendSubmit.emit(this.isSubmitted);
          this.markAdded.emit();
          console.log('Mark created successfully:', response);
        },
        (error) => {
          console.error('Failed to create mark:', error);
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
    console.log('here');
    
  }
}
