import { Component } from '@angular/core';
import { ApiService } from '../../service/api.service';

@Component({
  selector: 'app-account-detail-card',
  templateUrl: './account-detail-card.component.html',
  styleUrl: './account-detail-card.component.scss'
})
export class AccountDetailCardComponent {

  accountDetails: any; // isted of any we can have  interfae model

  constructor(private apiService: ApiService , 
    // private _toastService: ToastService 
  ) { }

  ngOnInit(): void {
    this.getAccountDetails();
  }

  getAccountDetails(): void {
    this.apiService.getAccountDetails().subscribe(
      (data: any) => {
        this.accountDetails = data?.account;
      },
      (error: any) => {
       //  this._toastService.error("Error fetching account details")
        console.log('Error fetching account details:', error);
      }
    );
  }

}
