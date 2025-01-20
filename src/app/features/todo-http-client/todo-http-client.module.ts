import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoHttpClientRoutingModule } from './todo-http-client-routing.module';
import { TodoHttpClientComponent } from './todo-http-client.component';


@NgModule({
  declarations: [
    TodoHttpClientComponent
  ],
  imports: [
    CommonModule,
    TodoHttpClientRoutingModule
  ]
})
export class TodoHttpClientModule { }
