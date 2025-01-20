import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoStatus', // This is the pipe's name for usage in templates
})
export class TodoStatusPipe implements PipeTransform {
  transform(isCompleted: boolean): string {
    return isCompleted ? 'Completed' : 'Pending';
  }
}

// using pipe like this

// <ul>
//   <li *ngFor="let todo of todos">
//     {{ todo.text }} - <strong>{{ todo.completed | todoStatus }}</strong>
//   </li>
// </ul>
