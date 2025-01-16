import { Component } from '@angular/core';
import { TodoService } from 'src/app/core/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  list = [
    'fix login bug',
    'fix PRs',
    'fix pp',
    'fix zxzxz',
    'Plan sprint',
    'plan docs',
    'update API',
    'Optimize DB',
    'Deploy app',
    'edit UI',
    'Write tests',
    'write feedback',
  ];
  searchTerm: string = ''; // Tracks the search term input
  completedStatus: string = ''; // variable initalization which tract the filter drop down.

  // todoList = this.todoService.getTodos(); // Fetch todos from the service

  constructor(public todoService: TodoService) {}

  onItemSelected(selectedItem: string) {
    console.log('Selected:', selectedItem);
  }
}
