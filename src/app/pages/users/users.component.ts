import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService, User } from '../data.service';

@Component({
  selector: 'app-users',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th class="left">Name</th>
          <th class="left">Username</th>
          <th class="left">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let user of users">
          <td class="left">
            <a (click)="openModal($event, user)" href="">{{user.name}}</a>
          </td>
          <td class="left">{{user.username}}</td>
          <td class="left">{{user.email}}</td>
        </tr>
      </tbody>
    </table>
    <clr-modal [(clrModalOpen)]="showModal">
      <h3 class="modal-title">{{user?.name}}</h3>
      <div class="modal-body">
        <pre>{{user | json}}</pre>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary" (click)="closeModal()">Ok</button>
      </div>
    </clr-modal>
  `,
  styles: [`
    table {
      margin-top: 0;
    }
  `]
})
export class UsersComponent {

  users: Observable<User[]>;
  user: User;
  showModal: boolean = false;

  constructor(
    public dataService: DataService,
  ) {
    this.dataService.getUsers().subscribe(res => this.users = res);
  }

  openModal($event, user) {
    $event.preventDefault();
    this.user = user;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.user = null;
  }
}
