import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';


@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodoRoutingModule
  ]
})
export class TodoModule { }
