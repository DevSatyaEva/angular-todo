import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  OnChanges,
} from '@angular/core';
import { Todo } from 'src/app/shared/types/todo.model';

@Directive({
  selector: '[appHighlightOverdue]',
})
export class HighlightOverdueDirective implements OnChanges {
  @Input() appHighlightOverdue: Todo | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnChanges() {
    if (
      this.appHighlightOverdue &&
      this.appHighlightOverdue.dueDate &&
      new Date(this.appHighlightOverdue.dueDate) < new Date()
    ) {
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', 'red');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'backgroundColor');
    }
  }
}
