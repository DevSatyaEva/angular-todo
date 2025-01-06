import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TodoService } from 'src/app/core/todo.service';

@Component({
  selector: 'app-todo-detail',
  templateUrl: './todo-detail.component.html',
  styleUrls: ['./todo-detail.component.scss'],
})
export class TodoDetailComponent implements OnInit {
  todo: any; // Will hold the specific todo details

  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
  ) {}

  ngOnInit() {
    const todoId = +this.route.snapshot.paramMap.get('id')!; // Get 'id' from the URL
    this.todo = this.todoService.getTodoById(todoId); // Fetch todo by ID
  }
}
