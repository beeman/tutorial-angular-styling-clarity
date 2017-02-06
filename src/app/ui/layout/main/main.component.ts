import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="content-container">
      <div class="content-area">
        <router-outlet></router-outlet>
      </div>
      <app-sidebar class="sidenav"></app-sidebar>
    </div>
  `,
  styles: []
})
export class MainComponent { }
