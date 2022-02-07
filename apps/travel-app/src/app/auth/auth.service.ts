import { Injectable, Optional } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(@Optional() private auth: Auth) {}

  signIn(email: string, password: string) {
    signInWithEmailAndPassword(this.auth, email, password).then((creds) =>
      console.log(creds)
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
