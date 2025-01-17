import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { TodoListComponent } from './components/todo-list/todo-list.component';
import { TodoFormComponent } from './components/todo-form/todo-form.component';
import { TodoItemComponent } from './components/todo-item/todo-item.component';
import { TodoDetailComponent } from './components/todo-detail/todo-detail.component';
import { HighlightOverdueDirective } from 'src/app/shared/directives/highlight-overdue.directive';
import { TodoDropdownComponent } from './components/todo-dropdown/todo-dropdown.component';
import { TodoDropdownContainerComponent } from './components/todo-dropdown-container/todo-dropdown-container.component';
import { ChildComponent } from './components/child/child.component';
import { ParentComponent } from './components/parent/parent.component';

@NgModule({
  declarations: [
    TodoComponent,
    TodoListComponent,
    TodoFormComponent,
    TodoItemComponent,
    TodoDetailComponent,
    HighlightOverdueDirective,
    TodoDropdownComponent,
    TodoDropdownContainerComponent,
    ChildComponent,
    ParentComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, TodoRoutingModule], // Import FormsModule if using two-way binding and  features service inside feature providers: [TodoService],
})
export class TodoModule {}
