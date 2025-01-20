import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoHttpClientComponent } from './todo-http-client.component';

const routes: Routes = [{ path: '', component: TodoHttpClientComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoHttpClientRoutingModule { }
