import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ApiService } from '../../service/api.service';
import { jwtDecode } from "jwt-decode";


@Component({
  selector: 'app-transaction-history-list',
  templateUrl: './transaction-history-list.component.html',
  styleUrl: './transaction-history-list.component.scss'
})
export class TransactionHistoryListComponent implements OnInit {
  private authtokenNameName = environment.tokenKey;

  transactionHistory: any[] = [];
  userAccountNumber: string | null = null;
  filteredTransactionHistory: any[] = [];
  filterCriteria: string = ''; // Holds the filter criteria selected by the user

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
    this.loadTransactionHistory();
    console.log(this.transactionHistory);

  }

  loadTransactionHistory(): void {
    this.userAccountNumber = this.getAccountNumberFromToken(); // Get user's account number from the token

    this.apiService.getTransactions().subscribe(
      (data) => {
        this.transactionHistory = data; // Assign the received data to the transactionHistory property
      },
      (error) => {
        console.error('Error fetching transaction history:', error);
      }
    );
  }

  getTransactionStatus(transaction: any): string {
    if (transaction.transactionType === 'Fund Transfer') {
      if (transaction.sourceAccountNumber === this.userAccountNumber) {
        return 'Transfer';
      } else if (transaction.targetAccountNumber === this.userAccountNumber) {
        return 'Credited';
      }
    } else if (transaction.transactionType === 'CASH_WITHDRAWAL') {
      return 'Withdraw';
    } else if (transaction.transactionType === 'CASH_DEPOSIT') {
      return 'Deposited';
    }
    return 'N/A'; // If no conditions are met, return 'N/A' for other types of transactions
  }

  getAccountNumberFromToken(): string | null {
    const authTokenName = localStorage.getItem(this.authtokenNameName);
    if (authTokenName) {
      const decodedToken: any = jwtDecode(authTokenName);
      return decodedToken.sub;
    }
    return null;
  }

  filterTransactions(): void {
    // Reset the filteredTransactionHistory array
    this.filteredTransactionHistory = this.transactionHistory.slice();

    if (this.filterCriteria === 'Deposit') {
      // Filter transactions for deposits
      this.filteredTransactionHistory = this.filteredTransactionHistory.filter(transaction =>
        transaction.transaction_type === 'Deposit'
      );
    } else if (this.filterCriteria === 'Withdrawal') {
      // Filter transactions for withdrawals
      this.filteredTransactionHistory = this.filteredTransactionHistory.filter(transaction =>
        transaction.transaction_type === 'Withdrawal'
      );
    } else if (this.filterCriteria === 'Transfer') {
      // Filter transactions for fund transfers
      this.filteredTransactionHistory = this.filteredTransactionHistory.filter(transaction =>
        transaction.transaction_type === 'Fund Transfer'
      );
    }
  }

  // Function to handle filter criteria changes
  onFilterCriteriaChange(event: any): void {
    this.filterCriteria = event.target.value;
    this.filterTransactions(); // Apply filtering based on the selected filter criteria
  }
}