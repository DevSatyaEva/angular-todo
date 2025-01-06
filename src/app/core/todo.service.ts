import { Injectable } from '@angular/core';
import { Todo } from '../shared/types/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];

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

  getTodoById(id: number) {
    return this.todos.find((todo) => todo.id === id);
  }

  addTodo(todo: any) {
    // Generate a new id for the new todo item
    const newId =
      this.todos.length > 0 ? Math.max(...this.todos.map((t) => t.id)) + 1 : 1; // Start from 1 if no todos exist

    console.log('newid', newId);

    // Create a new todo with the generated id
    const newTodo: Todo = { ...todo, id: newId }; // Ensure the id is added here

    // Push the new todo into the array
    this.todos.push(newTodo);

    // Save to local storage
    this.saveTodos();
  }

  updateTodo(index: number, updatedTodo: Todo) {
    this.todos[index] = updatedTodo;
    this.saveTodos();
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
    this.saveTodos();
  }
}
