import { Component, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { faAdd, faXmark } from '@fortawesome/free-solid-svg-icons';
import { CustomValidationService } from '../../services/custom-validation.service';
import { Admin } from '../../interfaces/admin';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-input-field-admins',
  templateUrl: './input-field-admins.component.html',
  styleUrls: ['./input-field-admins.component.css']
})
export class InputFieldAdminsComponent {
  faAdd = faAdd;
  faXmark = faXmark;
  isSubmitted: boolean = false;
  form!: FormGroup;
  @Input() isVisiable = false;
  @Output() sendVisiable = new EventEmitter<boolean>();
  @Output() sendSubmit = new EventEmitter<boolean>();
  @Output() adminAdded = new EventEmitter<void>();

  
  constructor (private formBuilder: FormBuilder, private customVadlidator: CustomValidationService, private adminService: AdminService) {}

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
    })    
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

  get passwordVaild(){
    return this.form.get('password')?.invalid && (this.form.get('password')?.touched || this.form.get('password')?.dirty || this.isSubmitted);
  }

  get passwordConfirmValid(){
    return this.form.get('passwordConfirm')?.invalid && (this.form.get('passwordConfirm')?.touched || this.form.get('passwordConfirm')?.dirty || this.isSubmitted);
  }

  onClick() {
    if (this.form.valid) {
      this.isSubmitted = true;
      const admin: Admin = {
        name: this.form.value.name,
        userName: this.form.value.userName,
        phoneNumber: this.form.value.phone,
        email: this.form.value.email,
        address: this.form.value.address,
        password: this.form.value.password,
      };
      this.adminService.createAdmin(admin).subscribe(
        (response) => {
          this.form.reset();
          this.isVisiable = false;
          this.sendVisiable.emit(this.isVisiable);
          this.sendSubmit.emit(this.isSubmitted);
          this.adminAdded.emit();
          console.log('Admin created successfully:', response);
        },
        (error) => {
          console.error('Failed to create admin:', error);
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
