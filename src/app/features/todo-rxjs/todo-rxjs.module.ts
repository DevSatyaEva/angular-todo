import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoRxjsRoutingModule } from './todo-rxjs-routing.module';
import { TodoRxjsComponent } from './todo-rxjs.component';


@NgModule({
  declarations: [
    TodoRxjsComponent
  ],
  imports: [
    CommonModule,
    TodoRxjsRoutingModule
  ]
})
export class TodoRxjsModule { }
