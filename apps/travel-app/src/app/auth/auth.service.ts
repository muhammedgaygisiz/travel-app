import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  signIn(email: string, password: string) {
    console.log(email, password);
  }

  signUp(email: string, password: string) {
    console.log(email, password);
  }

  sendVerificationMail() {
    console.log('sendVerificationMail');
  }

  forgotPassword() {
    console.log('forgotPassword');
  }

  isLoggedIn(): boolean {
    return false;
  }
}
