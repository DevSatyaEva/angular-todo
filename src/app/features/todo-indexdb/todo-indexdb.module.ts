import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoIndexdbRoutingModule } from './todo-indexdb-routing.module';
import { TodoIndexdbComponent } from './todo-indexdb.component';


@NgModule({
  declarations: [
    TodoIndexdbComponent
  ],
  imports: [
    CommonModule,
    TodoIndexdbRoutingModule
  ]
})
export class TodoIndexdbModule { }
