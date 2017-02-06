import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div class="row">
      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
          <div class="card-block">
            <h3 class="card-title">Posts</h3>
            <p class="card-text"></p>
          </div>
          <div class="card-footer">
            <a [routerLink]="['/', 'posts']" class="btn btn-sm btn-link">Posts</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
          <div class="card-block">
            <h3 class="card-title">Todos</h3>
            <p class="card-text"></p>
          </div>
          <div class="card-footer">
            <a [routerLink]="['/', 'todos']" class="btn btn-sm btn-link">Todos</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-12 col-sm-12 col-xs-12">
        <div class="card">
          <div class="card-block">
            <h3 class="card-title">Users</h3>
            <p class="card-text"></p>
          </div>
          <div class="card-footer">
            <a [routerLink]="['/', 'users']" class="btn btn-sm btn-link">Users</a>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
