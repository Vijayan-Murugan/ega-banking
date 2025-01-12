import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { catchError, throwError } from 'rxjs';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const requestInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem(environment.tokenKey);
  const authReq = req.clone({
    setHeaders: {
      Authorization:`${authToken?'Bearer '+authToken:''}`,
      "Strict-Transport-Security":"max-age=31536000; includeSubdomains"
    },
  });
  const router = inject(Router);
  return next(authReq).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        // Handle HTTP errors
        if (err.status === 401) {
          // Specific handling for unauthorized errors
          console.error('Unauthorized request:', err);
          // localStorage.clear();
          // router.navigate(['/auth/login']);
          // You might trigger a re-authentication flow or redirect the user here
        } else {
          // Handle other HTTP error codes
          console.error('HTTP error:', err);
        }
      } else {
        // Handle non-HTTP errors
        console.error('An error occurred:', err);
      }

      // Re-throw the error to propagate it further
      return throwError(() => err);
    })
  );
};
