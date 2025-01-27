import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoHttpClientRoutingModule } from './todo-http-client-routing.module';
import { TodoHttpClientComponent } from './todo-http-client.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpTodoService } from './services/http-todo.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [TodoListComponent, TodoFormComponent, TodoItemComponent],
  imports: [
    CommonModule,
    TodoHttpClientRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpTodoService], // Register the service here
})
export class TodoHttpClientModule {}
