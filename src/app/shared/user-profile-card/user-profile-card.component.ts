import { Component } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-user-profile-card',
  templateUrl: './user-profile-card.component.html',
  styleUrl: './user-profile-card.component.scss'
})
export class UserProfileCardComponent {

  userProfileData: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.getUserProfileData();
  }

  getUserProfileData(): void {
    this.authService.getUserDetails().subscribe(
      (data) => {
        this.userProfileData = data;
      },
      (error) => {
        console.error('Error fetching user profile data:', error);
      }
    );
  }

}
