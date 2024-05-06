import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth-home',
  templateUrl: './auth-home.component.html',
  styleUrl: './auth-home.component.scss'
})
export class AuthHomeComponent implements OnInit{
  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/dashboard']);
    }
  }

}
