import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="content-container">
      <app-sidebar></app-sidebar>
      <div class="content-area">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: []
})
export class MainComponent { }
