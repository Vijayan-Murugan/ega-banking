import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from '../../../../environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '../../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit{

  loginForm!: FormGroup;
  showPassword: boolean = false;
  authTokenName = environment.tokenKey;

  constructor(
    private router: Router,
    private fb: FormBuilder,
    private authService: AuthService,
    // private _toastService: ToastService,
    // private loader : LoadermodelService
  ) {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(): void {
    sessionStorage.clear();
    this.loginForm = this.fb.group({
      email: ['', [Validators.required]],
      password: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { accountNumber, password } = this.loginForm.value;
      // this.loader.show("Logging...");
      this.authService.login(this.loginForm.value).subscribe(
        (response: any) => {
          // Handle successful login here
          // Save the token from the response if needed
          console.log(response);
          // this._toastService.success('Account LoggedIn');
          const token = response.token;
          console.log(token);
          localStorage.setItem(this.authTokenName, token);
          // this.loader.hide(); // Hide the loader on successful login
          this.router.navigate(['/dashboard']);
          // Redirect to the desired page or perform any other action
        },
        (error: any) => {
          // Handle login failure here
          // this._toastService.error('Invalid Credentials');
          console.error('Login error:', error);
          // this.loader.hide(); // Hide the loader on login error
        }
      );
    }
  }
  

  togglePasswordVisibility(): void {
    this.showPassword = !this.showPassword;
  }

}
