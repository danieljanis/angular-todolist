import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http:HttpClient) { }

  getTodos() {
    return [
      {
        id: 1,
        title: 'Test Todo 1',
        completed: false
      },
      {
        id: 2,
        title: 'Test Todo 2',
        completed: false
      },
      {
        id: 3,
        title: 'Test Todo 3',
        completed: false
      }
    ]
  }
}
