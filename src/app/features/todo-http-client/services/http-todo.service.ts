import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { IhttpTodo } from '../models/http-todo.model';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class HttpTodoService {
  private apiUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) {}

  getTodos(): Observable<IhttpTodo[]> {
    return this.http
      .get<IhttpTodo[]>(this.apiUrl)
      .pipe(catchError(this.handleError));
  }

  addTodo(todo: Partial<IhttpTodo>): Observable<IhttpTodo> {
    return this.http
      .post<IhttpTodo>(this.apiUrl, todo)
      .pipe(catchError(this.handleError));
  }

  updateTodo(todo: IhttpTodo): Observable<IhttpTodo> {
    return this.http
      .put<IhttpTodo>(`${this.apiUrl}/${todo.id}`, todo)
      .pipe(catchError(this.handleError));
  }

  deleteTodo(id: number): Observable<void> {
    return this.http
      .delete<void>(`${this.apiUrl}/${id}`)
      .pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'An unknown error occurred!';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.error(errorMessage);
    return throwError(() => new Error(errorMessage));
  }
}
