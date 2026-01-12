import { Routes } from '@angular/router';
import { AuthGuard } from './shared/guards/auth.guard';
import { HomeComponent } from './home/components/home-component/home.component';
import { LoginComponent } from './login/components/login.component/login.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard] // protected route
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '**',
    redirectTo: 'login' // fallback
  }
];
