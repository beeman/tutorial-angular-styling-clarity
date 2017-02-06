import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { ClarityModule } from 'clarity-angular';

import { DataService } from './data.service';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PostsComponent } from './posts/posts.component';
import { SettingsComponent } from './settings/settings.component';
import { TodosComponent } from './todos/todos.component';
import { UsersComponent } from './users/users.component';

const components = [
  DashboardComponent,
  PostsComponent,
  SettingsComponent,
  TodosComponent,
  UsersComponent,
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ClarityModule,
  ],
  declarations: [
    ...components,
  ],
  exports: [
    ...components,
  ],
  providers: [
    DataService,
  ]
})
export class PagesModule { }
