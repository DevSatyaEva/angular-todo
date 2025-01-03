import { Component } from '@angular/core';
import { TodoService } from 'src/app/core/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  constructor(public todoService: TodoService) {}

  deleteTodo(index: number) {
    this.todoService.deleteTodo(index);
  }

  toggleComplete(todo: any) {
    todo.completed = !todo.completed;
    this.todoService.updateTodo(this.todoService.getTodos().indexOf(todo), todo);
  }
}
