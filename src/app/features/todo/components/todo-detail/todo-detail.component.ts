import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { TodoService } from 'src/app/core/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  todo: any; // Will hold the specific todo details
  private routeSub: Subscription | undefined; // To store the subscription and clean up

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    // const todoId = +this.route.snapshot.paramMap.get('id')!; // Get 'id' from the URL
    // console.log(this.route);
    // this.todo = this.todoService.getTodoById(todoId); // Fetch todo by ID

    // Subscribe to paramMap to listen for dynamic changes in route parameters
    this.routeSub = this.route.paramMap.subscribe((paramMap) => {
      const todoId = +paramMap.get('id')!; // Get 'id' from the route parameter ,,make it number
      this.todo = this.todoService.getTodoById(todoId); // Fetch the new todo by ID
    });
  }

  ngOnDestroy() {
    // Unsubscribe when the component is destroyed to prevent memory leaks
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}
