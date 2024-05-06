import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../../../service/api.service';

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrl: './withdraw.component.scss'
})
export class WithdrawComponent {

  withdrawForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private apiService: ApiService,
    // private _toastService: ToastService,
    private router: Router,
    // private loader: LoadermodelService // Inject the LoaderService here
  ) { }

  ngOnInit(): void {
    this.initWithDrawForm();
  }

  initWithDrawForm() {
    this.withdrawForm = this.fb.group({
      amount: ['', [Validators.required, Validators.min(0)]],
      pin: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(4)]]
    });
  }

  onSubmit(): void {
    if (this.withdrawForm.valid) {
      const amount = this.withdrawForm.get('amount')?.value;
      const pin = this.withdrawForm.get('pin')?.value;

      // this.loader.show('Withdrawing...'); // Show the loader before making the API call
      this.apiService.withdraw(amount, pin).subscribe(
        (response) => {
          // this.loader.hide(); // Hide the loader on successful withdrawal
          // this._toastService.success(response.msg);
          this.withdrawForm.reset()
          console.log('Withdrawal successful!', response);
        },
        (error) => {
          // this.loader.hide(); // Hide the loader on withdrawal request failure
          // this._toastService.error(error.error);
          console.error('Withdrawal failed:', error);
        }
      );
    }
    this.initWithDrawForm();
  }

}
