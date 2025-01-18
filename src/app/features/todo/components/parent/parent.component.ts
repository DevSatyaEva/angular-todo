import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent {
  // testing purpose
  parentData = 'Hello from parent!'; //this is parent projected content for test
  // tetsing learn
  // @ViewChild('projectedContent') projectedContent!: ElementRef;

  // ngAfterViewInit() {
  //   this.projectedContent.nativeElement.textContent =
  //     'hello this is from parent'; // Set focus on the input field
  // }
}
