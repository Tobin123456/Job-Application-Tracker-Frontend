import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { RestService } from '../rest/rest.service';
import { StorageService } from '../storage/storage.service';
import { JwtResponse } from '../../models/jwt-response';
import { ConfigService } from '../config/config.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private configService: ConfigService,
    private restService: RestService,
    private storageService: StorageService,
    private router: Router
  ) { }

  /** Authenticate — subscribes to POST, saves token, redirects */
  authenticate(username: string, password: string): void {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa(`${username}:${password}`)
    });

    this.restService.post<JwtResponse>(this.configService.configEndpointsFullURL.auth, {}, headers)
      .subscribe({
        next: res => {
          this.storageService.saveToken(res.token);
          this.router.navigate(['/home']); // auto-redirect
        },
        error: () => {
          console.log('Login failed');
        }
      });
  }

  logout(): void {
    this.storageService.removeToken();
    this.router.navigate(['/login']);
  }

  getToken(): string | null {
    return this.storageService.getToken();
  }

  isLoggedIn(): boolean {
    return this.getToken() != null;
  }
}
