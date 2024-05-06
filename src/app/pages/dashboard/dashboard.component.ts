import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  showPINCreationModel: boolean = false;

  constructor(private apiService: ApiService, private router: Router) {}

  ngOnInit(): void {
    // Check if the user has created a PIN.
    this.checkPINStatus();
  }

  checkPINStatus(): void {
    // this.apiService.checkPinCreated().subscribe(
    //   (response) => {
    //     if (response && response.hasPIN === false) {
    //       // Show the PIN creation model.
    //       this.showPINCreationModel = true;
    //     }
    //   },
    //   (error) => {
    //     console.error('Error checking PIN status:', error);
    //   }
    // );
  }

  redirectToPINCreationPage(): void {
    // Hide the PIN creation model.
    this.showPINCreationModel = false;
    // Redirect the user to the PIN creation page.
    this.router.navigate(['/account/pin']);
  }

}
