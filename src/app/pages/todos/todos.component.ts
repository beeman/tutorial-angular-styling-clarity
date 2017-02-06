import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService, Todo } from '../data.service';

@Component({
  selector: 'app-todos',
  template: `
    <ul class="list-unstyled">
      <li *ngFor="let todo of todos">
        <clr-checkbox
          name="{{todo.id}}"
          id="{{todo.id}}"
          [(ngModel)]="todo.completed">
          {{todo.title}}
        </clr-checkbox>
      </li>
    </ul>
  `,
  styles: []
})
export class TodosComponent {

  todos: Observable<Todo[]>;

  constructor(
    public dataService: DataService,
  ) {
    this.dataService.getTodos().subscribe(res => this.todos = res);
  }

}
