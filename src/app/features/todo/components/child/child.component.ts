import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<p>{{ message }}</p>`,
})
export class ChildComponent implements OnChanges, OnInit {
  @Input() inputData!: string;
  message: string = '';

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
