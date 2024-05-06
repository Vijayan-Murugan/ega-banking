import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { jwtDecode } from "jwt-decode";
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.apiUrl; // Replace with your actual API base URL
  private authtokenName = environment.tokenKey
  constructor(private http: HttpClient, private router: Router) { }

  registerUser(data: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/register`, data);
  }

  login(payload:any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/auth/login`, payload);
  }
  getUserDetails(): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/users/me`);
  }

  updateUserProfile(payload: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/users/update`, payload);
  }

  isLoggedIn() {
    const token = localStorage.getItem(this.authtokenName);
    if (token) {
      try {
        // Decode the JWT token
        const decodedToken: any = jwtDecode(token);
        // Check if the token is valid and not expired
        if (decodedToken && decodedToken.exp && decodedToken.exp * 1000 > Date.now()) {
          // Token is valid and not expired
          return true;
        }
      } catch (error) {
        console.error('Error decoding JWT token:', error);
      }
    }
    return false;
  }

  logOutUser() {
    localStorage.removeItem(this.authtokenName)
    this.router.navigate(['/auth/login']);
  }
}


