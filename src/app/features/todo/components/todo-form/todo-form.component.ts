import { Component, ElementRef, ViewChild } from '@angular/core';
import { TodoService } from 'src/app/core/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  @ViewChild('todoInput') todoInput!: ElementRef;
  todoText: string = '';

  constructor(private todoService: TodoService) {}

  ngAfterViewInit() {
    this.todoInput.nativeElement.focus(); // Set focus on the input field
  }

  addTodo() {
    console.log('rendering.....');
    if (this.todoText.trim()) {
      this.todoService.addTodo({ text: this.todoText, completed: false });
      this.todoText = '';
    }
  }
}
