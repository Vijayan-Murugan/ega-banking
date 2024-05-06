import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountRoutingModule } from './account-routing.module';
import { DepositComponent } from './deposit/deposit.component';
import { WithdrawComponent } from './withdraw/withdraw.component';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [
    DepositComponent,
    WithdrawComponent,
    TransactionHistoryComponent
  ],
  imports: [
    CommonModule,
    AccountRoutingModule,
    SharedModule
  ]
})
export class AccountModule { }
