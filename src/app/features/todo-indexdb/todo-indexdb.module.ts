import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoIndexdbRoutingModule } from './todo-indexdb-routing.module';
import { TodoIndexdbComponent } from './todo-indexdb.component';
import { IconModule } from 'src/app/shared/icon/icon.module';

@NgModule({
  declarations: [TodoIndexdbComponent],
  imports: [CommonModule, TodoIndexdbRoutingModule, IconModule],
})
export class TodoIndexdbModule {}
