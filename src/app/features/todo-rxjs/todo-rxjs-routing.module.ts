import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoRxjsComponent } from './todo-rxjs.component';

const routes: Routes = [{ path: '', component: TodoRxjsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRxjsRoutingModule { }
