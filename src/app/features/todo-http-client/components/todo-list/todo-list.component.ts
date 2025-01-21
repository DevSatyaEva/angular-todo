import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IhttpTodo } from '../../models/http-todo.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss'],
})
export class TodoListComponent {
  @Input() todos: IhttpTodo[] = [];
  @Output() toggleComplete = new EventEmitter<IhttpTodo>();
  @Output() edit = new EventEmitter<IhttpTodo>();
  @Output() delete = new EventEmitter<number>();
}
