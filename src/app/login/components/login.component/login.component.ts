import { Component } from '@angular/core';
import { AuthenticationService } from '../../../shared/services/authentication/authentication.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  imports: [FormsModule, CommonModule]
})
export class LoginComponent {

  public username = '';
  public password = '';

  constructor(private authService: AuthenticationService) {}

  onSubmit(): void {
    this.authService.authenticate(this.username, this.password);
  }
}


