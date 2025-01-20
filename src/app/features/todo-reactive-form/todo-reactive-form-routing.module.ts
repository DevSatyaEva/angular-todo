import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoReactiveFormComponent } from './todo-reactive-form.component';

const routes: Routes = [{ path: '', component: TodoReactiveFormComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoReactiveFormRoutingModule { }
