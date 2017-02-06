
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { PostsComponent } from './pages/posts/posts.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { TodosComponent } from './pages/todos/todos.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      { path: 'dashboard', component: DashboardComponent },
      { path: 'posts', component: PostsComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'todos', component: TodosComponent },
      { path: 'users', component: UsersComponent },
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
