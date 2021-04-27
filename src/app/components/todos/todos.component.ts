import { Component, OnInit } from '@angular/core';
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor() { } // For importing services

  ngOnInit() { // Runs right away (lifecycle method)
    this.todos = [
      {
        id: 1,
        title: 'Test Todo 1',
        completed: false
      },
      {
        id: 2,
        title: 'Test Todo 2',
        completed: true
      },
      {
        id: 3,
        title: 'Test Todo 3',
        completed: false
      }
    ]
  }

}
