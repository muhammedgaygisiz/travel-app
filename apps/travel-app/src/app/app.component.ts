import { Component } from '@angular/core';

@Component({
  selector: 'travel-app-root',
  template: `
    <mat-sidenav-container hasBackdrop autosize>
      <mat-sidenav mode="side" #sidenav>
        <div class="menu-item">
          <span class="filler"></span>
          <button mat-icon-button (click)="sidenav.close()">
            <mat-icon>close</mat-icon>
          </button>
        </div>
        <p>Drawer Content</p>
      </mat-sidenav>
      <mat-sidenav-content>
        <mat-toolbar color="primary">
          <button mat-icon-button (click)="sidenav.toggle()">
            <mat-icon>menu</mat-icon>
          </button>
          <span>Travel App</span>
        </mat-toolbar>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
  styles: [
    `
      .mat-sidenav-container {
        height: 100vh;
      }

      .mat-sidenav {
        padding: 20px;
      }

      .menu-item {
        display: flex;
      }

      .filler {
        flex: 1 1 auto;
      }
    `,
  ],
})
export class AppComponent {}
