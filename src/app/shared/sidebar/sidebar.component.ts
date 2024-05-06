import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  sidebarVisible = true; // Set the initial state to visible
  
  constructor(private authservice: AuthService) { }
  ngOnInit(): void {
    this.sidebarVisible =  !this.checkScreenSize();
    
  }

  checkScreenSize() {
    return window.innerWidth < 768; // Adjust the breakpoint as needed
  }
  
  isLoggedIn() {
    return this.authservice.isLoggedIn();
  }

 
  
  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
