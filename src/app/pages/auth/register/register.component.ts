import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

function passwordMismatch(controlName: string, matchingControlName: string){
  return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors['passwordMismatch']) {
          return;
      }
      if (control.value !== matchingControl.value) {
          matchingControl.setErrors({ passwordMismatch: true });
      } else {
          matchingControl.setErrors(null);
      }
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit{

  registerForm!: FormGroup;
  showRegistrationData = false;
  registrationData: any;
  print  =  console

  constructor(private formBuilder: FormBuilder,private router: Router, private authService: AuthService) { 
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phoneNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]],
      // Add other form controls if needed
    }, { 

      validator: passwordMismatch('password', 'confirmPassword')

    }
  );
  }
  get f():any { return this.registerForm.controls; }

  onSubmit() {
    if (this.registerForm.invalid) {
      return;
    }

    // Call the API service to register the user
    this.authService.registerUser(this.registerForm.value).subscribe(
      (response: any) => {
        this.registrationData = response;
        this.showRegistrationData = true;
      },
      (error: any) => {
        console.error('Registration failed:', error);
      }
    );
  }

}
