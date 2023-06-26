import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  form!: FormGroup;
  isSubmitted: boolean = false;
  isUserCorrect!: boolean;
  errorMessage: string = "Please fill the your info"
  constructor (private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.form.valueChanges.subscribe()
  }

  get emailValidation() {
    return this.form.get('email')?.invalid && (this.form.get('email')?.dirty || this.form.get('email')?.touched || this.isSubmitted);
  }

  get passwordValidation() {
    return this.form.get('password')?.invalid && (this.form.get('password')?.dirty || this.form.get('password')?.touched || this.isSubmitted);
  }

  onSubmit(): void {
    this.isSubmitted = true;   
    if(this.form.valid){
      
      this.router.navigate(['/dashboard'])
    }
  }
}
