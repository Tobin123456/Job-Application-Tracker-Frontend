import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor() {}

  /** Save a value under a key in local storage */
  setItem(key: string, value: string): void {
    localStorage.setItem(key, value);
  }

  /** Get a value by key from local storage */
  getItem(key: string): string | null {
    return localStorage.getItem(key);
  }

  /** Remove a key from local storage */
  removeItem(key: string): void {
    localStorage.removeItem(key);
  }

  /** Clear everything in local storage */
  clear(): void {
    localStorage.clear();
  }

  /** Convenience methods for JWT token */
  saveToken(token: string): void {
    this.setItem('jwt', token);
  }

  getToken(): string | null {
    return this.getItem('jwt');
  }

  removeToken(): void {
    this.removeItem('jwt');
  }

}
