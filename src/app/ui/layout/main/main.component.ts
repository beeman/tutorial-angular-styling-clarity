import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div class="content-container">
      <app-sidebar></app-sidebar>
      <div class="content-area">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: []
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
