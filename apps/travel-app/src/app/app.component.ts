import { Component } from '@angular/core';

@Component({
  selector: 'travel-app-root',
  template: `
    <travel-app-menu>
      <router-outlet></router-outlet>
    </travel-app-menu>
  `,
})
export class AppComponent {}
