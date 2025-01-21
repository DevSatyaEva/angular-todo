import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IhttpTodo } from '../../models/http-todo.model';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo!: IhttpTodo;
  @Output() toggleComplete = new EventEmitter<IhttpTodo>();
  @Output() edit = new EventEmitter<IhttpTodo>();
  @Output() delete = new EventEmitter<number>();
}
