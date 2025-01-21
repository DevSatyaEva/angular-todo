import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IhttpTodo } from '../../models/http-todo.model';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss'],
})
export class TodoFormComponent {
  @Input() todo: Partial<IhttpTodo> = { text: '' };
  @Output() submitForm = new EventEmitter<Partial<IhttpTodo>>();

  onSubmit() {
    this.submitForm.emit(this.todo);
    this.todo = { text: '' }; // Reset form after submission
  }
}
