import { Component, OnInit } from '@angular/core';
import { TodoService } from '../../services/todo.service'
import { Todo } from '../../models/Todo'

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private todoService:TodoService) { } // For importing services

  ngOnInit() { // Runs right away (lifecycle method)
    this.todos = this.todoService.getTodos();
  }

}
