import { Component, Input, SimpleChange, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/core/todo.service';
import { Todo } from 'src/app/shared/types/todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  // testing purpose
  parentData = 'Hello from parent!';
  // tetsing learn
  @Input() searchTerm: string = ''; // search text recieved from parent
  @Input() statusFilter: string | boolean | null = ''; // Status filter received from parent

  todos: Todo[] = [];
  editTodoData: any = null; // Temporarily stores the todo being edited
  filteredTodos: Todo[] = [];

  constructor(public todoService: TodoService, private router: Router) {} // is instantiated, initializing its properties like todos, filteredTodos, and services (todoService and router).

  ngOnInit(): void {
    this.todos = this.todoService.getTodos(); // Fetch all todos initially
    this.filteredTodos = [...this.todos]; // Initialize filteredTodos
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log('running....');
    if (changes['searchTerm'] || changes['statusFilter']) {
      this.applyFilters();
    }
  }

  private applyFilters(): void {
    // Convert the filter term to lowercase for case-insensitive filtering
    const searchValue = this.searchTerm.toLowerCase();
    console.log(searchValue, 'searchTerm.......');

    this.filteredTodos = this.todos.filter((todo: Todo) => {
      const matchesSearch = todo.text?.toLowerCase().includes(searchValue);

      const matchesStatus =
        this.statusFilter === ''
          ? true
          : todo.completed === JSON.parse(this.statusFilter as string);

      return matchesSearch && matchesStatus;
    });
  }

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
