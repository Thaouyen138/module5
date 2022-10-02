import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Todo} from "./todo";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  API_URL = 'http://localhost:3000/'
  constructor(private http: HttpClient) {}

  getAll(): Observable<Todo[]> {
    return this.http.get<Todo[]>(this.API_URL + 'todoList');
  }

  save(todo: Todo): Observable<void> {
    return this.http.post<void>(this.API_URL + 'todoList', todo);
  }
}
