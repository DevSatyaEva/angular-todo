import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/core/todo.service';
import { Todo } from 'src/app/shared/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  todos = this.todoService.getTodos(); // Fetch todos from the service
  editTodoData: any = null; // Temporarily stores the todo being edited

  constructor(public todoService: TodoService, private router: Router) {}

  // Handles deletion of a to-do item
  deleteTodoHandler(index: number) {
    this.todoService.deleteTodo(index);
    this.todos = this.todoService.getTodos(); // Refresh the todos
  }

  // Opens the edit modal for the specified to-do
  editTodoHandler(index: number) {
    this.editTodoData = { ...this.todos[index], index };
  }

  navigateToDetail(todo: Todo) {
    console.log('Navigating with todo.id:', todo.id); // Check if id is valid
    if (todo && todo.id !== undefined) {
      this.router.navigate(['/todo', todo.id]); // Navigate to the detail page using the id
    } else {
      console.error('Todo id is undefined:', todo);
    }
  }

  // Saves the updated to-do item
  saveEditHandler(updatedTodo: any) {
    this.todoService.updateTodo(updatedTodo.index, updatedTodo);
    this.todos = this.todoService.getTodos(); // Refresh the todos
    this.editTodoData = null; // Close the modal
  }

  // Cancels the edit operation
  cancelEditHandler() {
    this.editTodoData = null; // Close the modal
  }

  // Handles the toggle of the "completed" checkbox
  toggleCompleteHandler(todo: any) {
    todo.completed = !todo.completed; // Toggle the completed status
    this.todoService.updateTodo(this.todos.indexOf(todo), todo); // Update the todo in the service
  }
}
