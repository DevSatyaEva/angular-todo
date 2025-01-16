import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  ContentChild,
  AfterContentInit,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div>
    <h3>Child Component:</h3>
    <ng-content></ng-content>
  </div>`,
})
export class ChildComponent implements OnChanges, OnInit, AfterContentInit {
  @Input() inputData!: string;
  message: string = '';
  @ContentChild('projectedContent', { static: false }) content!: ElementRef;

  ngAfterContentInit() {
    console.log(
      'Projected content initialized:',
      this.content?.nativeElement.textContent
    );
  }

  constructor() {
    console.log('Constructor: Component instance created.');
    console.log('InputData in constructor:', this.inputData); // Undefined here
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges: Input properties changed.');
    console.log('Changes:', changes);
    if (changes['inputData']) {
      this.message = `Updated inputData: ${changes['inputData'].currentValue}`;
    }
  }

  ngOnInit() {
    console.log('ngOnInit: Component initialized.');
    console.log('InputData in ngOnInit:', this.inputData); // Available here
  }
}
