import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoginPage: boolean = false;

  constructor(private authService: AuthService) {
    const route = window.location.href || '';
    if(route.includes('login')) {
      this.isLoginPage = true;
    }else {
      this.isLoginPage = false;
    }
   }
  isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  checkScreenSize() {
    return window.innerWidth < 768;
  }

  logout(): void {
    this.authService.logOutUser();
  }
}
