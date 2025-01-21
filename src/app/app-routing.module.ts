import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' }, // Redirect to todo list by default
  {
    path: 'todo',
    loadChildren: () =>
      import('./features/todo/todo.module').then((m) => m.TodoModule), // lazy loading import
  },
  {
    path: 'todo-indexdb',
    loadChildren: () =>
      import('./features/todo-indexdb/todo-indexdb.module').then(
        (m) => m.TodoIndexdbModule
      ),
  },
  {
    path: 'todo-httpClient',
    loadChildren: () =>
      import('./features/todo-http-client/todo-http-client.module').then(
        (m) => m.TodoHttpClientModule
      ),
  },
  {
    path: 'todo-rxjs',
    loadChildren: () =>
      import('./features/todo-rxjs/todo-rxjs.module').then(
        (m) => m.TodoRxjsModule
      ),
  },
  {
    path: 'todo-RBAC',
    loadChildren: () =>
      import('./features/todo-rbac/todo-rbac.module').then(
        (m) => m.TodoRBACModule
      ),
  },
  {
    path: 'todo-dynamic-component',
    loadChildren: () =>
      import(
        './features/todo-dynamic-component/todo-dynamic-component.module'
      ).then((m) => m.TodoDynamicComponentModule),
  },
  {
    path: 'shared/custom-components/card',
    loadChildren: () =>
      import('./shared/custom-components/card/card.module').then(
        (m) => m.CardModule
      ),
  },
  {
    path: 'shared/custom-components/modal',
    loadChildren: () =>
      import('./shared/custom-components/modal/modal.module').then(
        (m) => m.ModalModule
      ),
  },
  {
    path: 'shared/custom-components',
    loadChildren: () =>
      import('./shared/custom-components/custom-components.module').then(
        (m) => m.CustomComponentsModule
      ),
  },
  {
    path: 'reactive-form',
    loadChildren: () =>
      import('./features/reactive-form/reactive-form.module').then(
        (m) => m.ReactiveFormModule
      ),
  },
  { path: '**', redirectTo: '/todo' }, // Fallback for undefined routes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
