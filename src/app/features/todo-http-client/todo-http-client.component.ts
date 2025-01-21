import { Component, OnInit } from '@angular/core';
import { IhttpTodo } from './models/http-todo.model';
import { HttpTodoService } from './services/http-todo.service';

@Component({
  selector: 'app-Todo-http-client',
  templateUrl: './Todo-http-client.component.html',
  styleUrls: ['./Todo-http-client.component.scss'],
})
export class TodoHttpClientComponent implements OnInit {
  todos: IhttpTodo[] = [];
  currentTodo: Partial<IhttpTodo> = {};

  constructor(private todoService: HttpTodoService) {}

  ngOnInit() {
    this.fetchTodos();
  }

  fetchTodos() {
    this.todoService.getTodos().subscribe({
      next: (data) => (this.todos = data),
      error: (err) => console.error('Error fetching todos:', err),
    });
  }

  handleFormSubmit(IhttpTodo: Partial<IhttpTodo>) {
    if (IhttpTodo.id) {
      this.todoService.updateTodo(IhttpTodo as IhttpTodo).subscribe({
        next: () => this.fetchTodos(),
        error: (err) => console.error('Error updating IhttpTodo:', err),
      });
    } else {
      this.todoService.addTodo(IhttpTodo).subscribe({
        next: () => this.fetchTodos(),
        error: (err) => console.error('Error adding IhttpTodo:', err),
      });
    }
    this.currentTodo = {};
  }

  handleToggleComplete(IhttpTodo: IhttpTodo) {
    IhttpTodo.completed = !IhttpTodo.completed;
    this.todoService.updateTodo(IhttpTodo).subscribe();
  }

  handleEdit(IhttpTodo: IhttpTodo) {
    this.currentTodo = { ...IhttpTodo };
  }

  handleDelete(id: number) {
    this.todoService.deleteTodo(id).subscribe(() => this.fetchTodos());
  }
}
