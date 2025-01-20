import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRBACRoutingModule } from './todo-rbac-routing.module';
import { TodoRBACComponent } from './todo-rbac.component';


@NgModule({
  declarations: [
    TodoRBACComponent
  ],
  imports: [
    CommonModule,
    TodoRBACRoutingModule
  ]
})
export class TodoRBACModule { }
