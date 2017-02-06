import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  template: `
    <div class="main-container">
      <app-header></app-header>
      <app-main>
        <ng-content></ng-content>  
      </app-main>
    </div>
  `,
  styles: []
})
export class LayoutComponent { }
