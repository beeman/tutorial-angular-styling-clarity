import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map'

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface Post {
  id: number;
  title: string;
  body: string;
}

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const baseUrl = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class DataService {

  constructor(
    private http: Http,
  ) {
  }

  getUsers() {
    return this.http.get(`${baseUrl}/users`).map(res => res.json())
  }

  getPosts() {
    return this.http.get(`${baseUrl}/posts`).map(res => res.json())
  }

  getTodos() {
    return this.http.get(`${baseUrl}/todos`).map(res => res.json())
  }

}
