import { Component } from '@angular/core';
import { TodoService } from 'src/app/core/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  todoText: string = '';

  constructor(private todoService: TodoService) {}

  addTodo() {
    if (this.todoText.trim()) {
      this.todoService.addTodo({ text: this.todoText, completed: false });
      this.todoText = '';
    }
  }
}
