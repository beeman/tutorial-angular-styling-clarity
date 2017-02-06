import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { DataService, Post } from '../data.service';

@Component({
  selector: 'app-posts',
  template: `
    <table class="table">
      <thead>
        <tr>
          <th class="left">Title</th>
        </tr>
      </thead>
      <tbody>
        <tr *ngFor="let post of posts">
          <td class="left">
            <a (click)="openModal($event, post)" href="">{{post.title}}</a>
          </td>
        </tr>
      </tbody>
    </table>
    <clr-modal [(clrModalOpen)]="showModal">
      <h3 class="modal-title">{{post?.title}}</h3>
      <div class="modal-body">
        <p>{{post?.body}}</p>
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
export class PostsComponent {

  posts: Observable<Post[]>;
  post: Post;
  showModal: boolean = false;

  constructor(
    public dataService: DataService,
  ) {
    this.dataService.getPosts().subscribe(res => this.posts = res);
  }

  openModal($event, post) {
    $event.preventDefault();
    this.post = post;
    this.showModal = true;
  }
  closeModal() {
    this.showModal = false;
    this.post = null;
  }

}
