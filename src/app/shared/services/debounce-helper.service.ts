import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DebounceHelperService {
  debounce<T>(input$: Observable<T>, time: number = 300): Observable<T> {
    return input$.pipe(debounceTime(time));
  }
}
