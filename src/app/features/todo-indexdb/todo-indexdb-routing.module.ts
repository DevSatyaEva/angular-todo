import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoIndexdbComponent } from './todo-indexdb.component';

const routes: Routes = [{ path: '', component: TodoIndexdbComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoIndexdbRoutingModule { }
