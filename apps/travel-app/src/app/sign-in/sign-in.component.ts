import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Login } from './api/login';

@Component({
  selector: 'travel-app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss'],
})
export class SignInComponent {
  @Output()
  login: EventEmitter<Login> = new EventEmitter();

  @Output()
  goToSignUp: EventEmitter<void> = new EventEmitter();

  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  onSubmit() {
    this.login.emit(this.loginForm.value);
  }

  onSignUp() {
    this.goToSignUp.emit();
  }
}
