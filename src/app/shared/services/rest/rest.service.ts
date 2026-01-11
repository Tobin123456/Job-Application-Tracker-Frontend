import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  /** POST request */
  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, body, { headers }).pipe(
      tap(() => console.log('Request successful')),
      catchError(err => {
        this.handleError(err);
        return throwError(() => err); // stops subscriber execution
      })
    );
  }

  /** GET request */
  get<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(url, { headers }).pipe(
      tap(() => console.log('Request successful')),
      catchError(err => {
        this.handleError(err);
        return throwError(() => err);
      })
    );
  }

  private handleError(err: any): void {
    switch (err.status) {
      case 0: console.error('Network error'); break;
      case 400: console.error('Bad request'); break;
      case 401: console.error('Unauthorized'); break;
      case 403: console.error('Forbidden'); break;
      case 404: console.error('Not found'); break;
      case 500: console.error('Server error'); break;
      default: console.error('Unknown error', err);
    }
  }
}
