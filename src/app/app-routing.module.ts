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
  { path: 'todo-httpClient', loadChildren: () => import('./features/todo-http-client/todo-http-client.module').then(m => m.TodoHttpClientModule) },
  { path: 'todo-rxjs', loadChildren: () => import('./features/todo-rxjs/todo-rxjs.module').then(m => m.TodoRxjsModule) },
  { path: 'todo-reavtive-form', loadChildren: () => import('./features/todo-reactive-form/todo-reactive-form.module').then(m => m.TodoReactiveFormModule) },
  { path: 'todo-RBAC', loadChildren: () => import('./features/todo-rbac/todo-rbac.module').then(m => m.TodoRBACModule) },
  { path: 'todo-dynamic-component', loadChildren: () => import('./features/todo-dynamic-component/todo-dynamic-component.module').then(m => m.TodoDynamicComponentModule) },
  { path: 'custom-component', loadChildren: () => import('./features/custom-component/custom-component.module').then(m => m.CustomComponentModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
