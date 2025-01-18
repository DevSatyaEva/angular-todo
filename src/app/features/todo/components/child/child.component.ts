import {
  Component,
  Input,
  OnChanges,
  SimpleChanges,
  OnInit,
  ContentChild,
  AfterContentInit,
  ElementRef,
  TemplateRef,
} from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent implements AfterContentInit, OnInit {
  // Inputs from parent
  @Input() inputData!: string;
  @Input() isPrimary = true;

  // Inputs for dynamic templates
  @Input() headerTemplate?: TemplateRef<any>;
  @Input() footerTemplate?: TemplateRef<any>;

  @ContentChild('header', { static: false }) headerContent?: ElementRef;
  @ContentChild('footer', { static: false }) footerContent?: ElementRef;

  // Projected content queries
  @ContentChild('projectedContent', { static: false })
  projectedContent!: ElementRef;

  // Message and state variables
  message: string = '';
  hasHeader = false;
  hasFooter = false;
  projectedText: string = '';

  ngOnInit(): void {
    console.log('....conmtnet', this.headerContent?.nativeElement.textContent);

    console.log('Has Header...ong ininit :', this.hasHeader);
    console.log('Has Footer,.l,skmjkfk', this.hasFooter);
  }

  ngAfterContentInit(): void {
    console.log(
      'Header Content:',
      this.headerContent?.nativeElement.textContent
    );
    console.log(
      'Footer Content:',
      this.footerContent?.nativeElement.textContent
    );

    //   // Check if projected content exists
    this.hasHeader = !!this.headerContent; // Detect static header content
    this.hasFooter = !!this.footerContent; // Detect static footer content

    console.log('Has Header:', this.hasHeader);
    console.log('Has Footer:', this.hasFooter);

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
