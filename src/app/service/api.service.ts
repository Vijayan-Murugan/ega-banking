import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = environment.apiUrl; 
  constructor(private http: HttpClient) { }

  withdraw(amount: string, pin: string): Observable<any> {
    const body = {
      amount: amount,
      pin: pin
    };
    return this.http.post<any>(`${this.baseUrl}/account/withdraw`, body);
  }

  deposit(amount: string, pin: string): Observable<any> {
    const body = {
      amount: amount,
      pin: pin
    };
    return this.http.post<any>(`${this.baseUrl}/account/deposit`, body);
  }

  fundTransfer(amount: string, pin: string, targetAccountNumber: number): Observable<any> {
    const body = {
      amount: amount,
      pin: pin,
      targetAccountNumber: targetAccountNumber
    };
    return this.http.post<any>(`${this.baseUrl}/account/fund-transfer`, body);
  }

  getTransactions(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/account/transactions`);
  }

  getAccountDetails(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/account`);
  }

}
