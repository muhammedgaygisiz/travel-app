import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth, private snackBar: MatSnackBar) {}

  signIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(
      (creds) => console.log('Success', creds),
      () => this.showLoginErrorSnackbar()
    );
  }

  showLoginErrorSnackbar() {
    this.snackBar.open('Could not sign in. Please try again.', undefined, {
      duration: 2500,
    });
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
