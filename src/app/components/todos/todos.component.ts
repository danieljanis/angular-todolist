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
    this.todoService.getTodos().subscribe(todos => {
      this.todos = todos;
    });
  }

  deleteTodo(todo:Todo) {
    // Return all ID's other than the one being filtered out (UI)
    this.todos = this.todos.filter(t => t.id !== todo.id);
    // Remove the ID from the server
    this.todoService.deleteTodo(todo).subscribe();
  }

}
