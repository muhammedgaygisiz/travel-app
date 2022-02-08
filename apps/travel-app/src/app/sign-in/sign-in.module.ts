import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { RouterModule, Routes } from '@angular/router';
import { SignInContainerComponent } from './sign-in-container.component';
import { SignInComponent } from './sign-in.component';

const routes: Routes = [
  {
    path: '',
    component: SignInContainerComponent,
  },
];

@NgModule({
  declarations: [SignInComponent, SignInContainerComponent],
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    RouterModule.forChild(routes),
  ],
})
export class SignInModule {}
