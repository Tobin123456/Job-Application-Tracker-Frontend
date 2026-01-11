import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) { }

  canActivate(): boolean {
    if (this.authenticationService.isLoggedIn()) {
      return true; // allow route
    } else {
      this.router.navigate(['/login']); // redirect to login
      return false;
    }
  }
}