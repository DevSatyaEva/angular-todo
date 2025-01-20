import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoDynamicComponentRoutingModule } from './todo-dynamic-component-routing.module';
import { TodoDynamicComponentComponent } from './todo-dynamic-component.component';


@NgModule({
  declarations: [
    TodoDynamicComponentComponent
  ],
  imports: [
    CommonModule,
    TodoDynamicComponentRoutingModule
  ]
})
export class TodoDynamicComponentModule { }
