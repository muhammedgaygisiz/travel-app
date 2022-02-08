import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { Login } from './api/login';

@Component({
  template: `
    <travel-app-sign-in (login)="submitLogin($event)"></travel-app-sign-in>
  `,
})
export class SignInContainerComponent {
  constructor(private authService: AuthService) {}

  submitLogin(credentials: Login) {
    this.authService.signIn(credentials.username, credentials.password);
  }
}
