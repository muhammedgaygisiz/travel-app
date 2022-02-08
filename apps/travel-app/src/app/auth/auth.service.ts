import { Injectable } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  signIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then(
      (creds) => console.log('Success', creds),
      (err) => console.log('Error', err)
    );
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
