import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoReactiveFormRoutingModule } from './todo-reactive-form-routing.module';
import { TodoReactiveFormComponent } from './todo-reactive-form.component';


@NgModule({
  declarations: [
    TodoReactiveFormComponent
  ],
  imports: [
    CommonModule,
    TodoReactiveFormRoutingModule
  ]
})
export class TodoReactiveFormModule { }
