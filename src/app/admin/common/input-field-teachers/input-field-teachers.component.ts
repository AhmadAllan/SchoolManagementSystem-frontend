import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faAdd, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CustomValidationService } from '../../services/custom-validation.service';
import { TeachersService } from '../../services/teachers.service';
import { Teacher } from '../../interfaces/teacher';

@Component({
  selector: 'app-input-field-teachers',
  templateUrl: './input-field-teachers.component.html',
  styleUrls: ['./input-field-teachers.component.css']
})
export class InputFieldTeachersComponent {
  faAdd = faAdd;
  faXmark = faXmark;
  isSubmitted: boolean = false;
  form!: FormGroup;
  @Input() isVisiable = false;
  @Output() sendVisiable = new EventEmitter<boolean>();
  @Output() sendSubmit = new EventEmitter<boolean>();
  @Output() teacherAdded = new EventEmitter<void>();

  constructor (private formBuilder: FormBuilder,private customVadlidator: CustomValidationService, private teachersService: TeachersService) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [
        '' , [Validators.required]
      ],
      userName: [
        '' , [Validators.required]
      ],
      phone: [
        '' , [
          Validators.required,
          Validators.maxLength(10),
          Validators.pattern('[0][7][7-9]([0-9]{7})')
        ]
      ],
      email: [
        '' , [
          Validators.required,
          Validators.email
        ],
      ],
      address: [
        '' , [
          Validators.required,
        ],
      ],
      // class: [
      //   '' , [
      //     Validators.required,
      //   ],
      // ],
      // material: [
      //   '' , [
      //     Validators.required,
      //   ],
      // ],
      password: [
        '' , [
          Validators.required,
        ],
      ],
      passwordConfirm: [
        '' , [
          Validators.required,
        ],
      ],
    }, {
      validator: this.customVadlidator.passwordMatchValidator("password","passwordConfirm")
    });
  }

  get nameValid(){
    return this.form.get('name')?.invalid && (this.form.get('name')?.touched || this.form.get('name')?.dirty || this.isSubmitted);
  }

  get userNameValid(){
    return this.form.get('userName')?.invalid && (this.form.get('userName')?.touched || this.form.get('userName')?.dirty || this.isSubmitted);
   }

  get phoneValid(){
    return this.form.get('phone')?.invalid && (this.form.get('phone')?.touched || this.form.get('phone')?.dirty || this.isSubmitted);
  }

  get emailValid(){
    return this.form.get('email')?.invalid && (this.form.get('email')?.touched || this.form.get('email')?.dirty || this.isSubmitted);
  }

  get addressValid(){
    return this.form.get('address')?.invalid && (this.form.get('address')?.touched || this.form.get('address')?.dirty || this.isSubmitted);
  }

  // get classValid(){
  //   return this.form.get('class')?.invalid && (this.form.get('class')?.touched || this.form.get('class')?.dirty || this.isSubmitted);
  // }

  // get materialValid(){
  //   return this.form.get('material')?.invalid && (this.form.get('material')?.touched || this.form.get('material')?.dirty || this.isSubmitted);
  // }
  
  get passwordVaild(){
    return this.form.get('password')?.invalid && (this.form.get('password')?.touched || this.form.get('password')?.dirty || this.isSubmitted);
  }

  get passwordConfirmValid(){
    return this.form.get('passwordConfirm')?.invalid && (this.form.get('passwordConfirm')?.touched || this.form.get('passwordConfirm')?.dirty || this.isSubmitted);
  }

  onClick() {
    if (this.form.valid) {
      this.isSubmitted = true;
      const teacher: Teacher = {
        name: this.form.value.name,
        userName: this.form.value.userName,
        phoneNumber: this.form.value.phone,
        email: this.form.value.email,
        address: this.form.value.address,
        password: this.form.value.password,
      };
      this.teachersService.createTeacher(teacher).subscribe(
        (response) => {
          this.form.reset();
          this.isVisiable = false;
          this.sendVisiable.emit(this.isVisiable);
          this.sendSubmit.emit(this.isSubmitted);
          this.teacherAdded.emit();
          console.log('Teacher created successfully:', response);
        },
        (error) => {
          console.error('Failed to create teacher:', error);
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
