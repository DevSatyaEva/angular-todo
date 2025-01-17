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
  templateUrl: './child.component.html',
})
export class ChildComponent implements AfterContentInit {
  // Inputs from parent
  @Input() inputData!: string;
  @Input() isPrimary = true;

  // Message and state variables
  message: string = '';
  hasHeader = false;
  hasFooter = false;

  // Projected content queries
  @ContentChild('projectedContent', { static: false })
  projectedContent!: ElementRef;

  projectedText: string = '';
  @ContentChild('[header]') headerContent?: ElementRef;
  @ContentChild('[footer]') footerContent?: ElementRef;

  ngAfterContentInit(): void {
    // Access the projected content
    if (this.projectedContent) {
      this.projectedText = this.projectedContent.nativeElement.textContent;
      console.log('ContentChild:', this.projectedText);
    } else {
      console.log('No content found.');
    }
  }

  // ngAfterContentInit() {
  //   // Check if projected content exists
  //   this.hasHeader = !!this.headerContent;
  //   this.hasFooter = !!this.footerContent;

  //   console.log('ngAfterContentInit: Projected content initialized');
  //   console.log('Header:', this.headerContent?.nativeElement.textContent);
  //   console.log('Footer:', this.footerContent?.nativeElement.textContent);
  // }

  // constructor() {
  //   console.log('Constructor: Component instance created.');
  //   console.log('InputData in constructor:', this.inputData); // Undefined here
  // }

  // ngOnChanges(changes: SimpleChanges) {
  //   console.log('ngOnChanges: Input properties changed.');
  //   console.log('Changes:', changes);
  //   if (changes['inputData']) {
  //     this.message = `Updated inputData: ${changes['inputData'].currentValue}`;
  //   }
  // }

  // ngOnInit() {
  //   console.log('ngOnInit: Component initialized.');
  //   console.log('InputData in ngOnInit:', this.inputData); // Available here
  // }
}
