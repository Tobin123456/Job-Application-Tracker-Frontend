import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) { }

  /** POST request */
  post<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.post<T>(url, body, { headers: this.buildHeaders(body, headers) }).pipe(
      tap(() => console.log('POST request successful', url)),
      catchError(err => {
        this.handleError(err);
        return throwError(() => err);
      })
    );
  }

  /** GET request */
  get<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.http.get<T>(url, { headers: this.buildHeaders(undefined, headers) }).pipe(
      tap(() => console.log('GET request successful', url)),
      catchError(err => {
        this.handleError(err);
        return throwError(() => err);
      })
    );
  }

  /** PUT request */
  put<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.put<T>(url, body, { headers: this.buildHeaders(body, headers) }).pipe(
      tap(() => console.log('PUT request successful', url)),
      catchError(err => {
        this.handleError(err);
        return throwError(() => err);
      })
    );
  }

  /** PATCH request */
  patch<T>(url: string, body: any, headers?: HttpHeaders): Observable<T> {
    return this.http.patch<T>(url, body, { headers: this.buildHeaders(body, headers) }).pipe(
      tap(() => console.log('PATCH request successful', url)),
      catchError(err => {
        this.handleError(err);
        return throwError(() => err);
      })
    );
  }

  /** DELETE request */
  delete<T>(url: string, headers?: HttpHeaders): Observable<T> {
    return this.http.delete<T>(url, { headers: this.buildHeaders(undefined, headers) }).pipe(
      tap(() => console.log('DELETE request successful', url)),
      catchError(err => {
        this.handleError(err);
        return throwError(() => err);
      })
    );
  }

  /** Private helper to build headers */
  private buildHeaders(body?: any, headers?: HttpHeaders): HttpHeaders {
    if (headers) {
      // Use caller-provided headers
      return headers;
    }

    // If body exists, set Content-Type
    if (body !== undefined) {
      return new HttpHeaders({ 'Content-Type': 'application/json' });
    }

    // GET/DELETE requests with no body: empty headers
    return new HttpHeaders();
  }

  /** Error handling */
  private handleError(err: any): Observable<never> {
    switch (err.status) {
      case 0: console.error('Network error'); break;
      case 400: console.error('Bad request'); break;
      case 401: console.error('Unauthorized'); break;
      case 403: console.error('Forbidden'); break;
      case 404: console.error('Not found'); break;
      case 500: console.error('Server error'); break;
      default: console.error('Unknown error', err);
    }
    return throwError(() => err);
  }
}
