import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoDetailComponent } from './features/todo/components/todo-detail/todo-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' }, // Redirect to todo list by default
  {
    path: 'todo',
    loadChildren: () =>
      import('./features/todo/todo.module').then((m) => m.TodoModule), // lazy loading import
  },
  { path: 'todo/:id', component: TodoDetailComponent }, // Single todo item page by ID
  {
    path: 'todo-indexdb',
    loadChildren: () =>
      import('./features/todo-indexdb/todo-indexdb.module').then(
        (m) => m.TodoIndexdbModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
