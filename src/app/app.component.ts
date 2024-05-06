import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ega-banking';
  isAuthRoute: boolean = true;
  constructor(private router: Router) {
    const route = window.location.href || '';
    if(route.includes('auth')) {
      this.isAuthRoute = true;
    }else {
      this.isAuthRoute = false;
    }
  }

}
