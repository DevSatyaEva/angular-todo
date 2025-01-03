import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: any[] = [];

  constructor() {
    this.loadTodos();
  }

  private saveTodos() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  private loadTodos() {
    const data = localStorage.getItem('todos');
    this.todos = data ? JSON.parse(data) : [];
  }

  getTodos() {
    return this.todos;
  }

  addTodo(todo: any) {
    this.todos.push(todo);
    this.saveTodos();
  }

  updateTodo(index: number, updatedTodo: any) {
    this.todos[index] = updatedTodo;
    this.saveTodos();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }
}
