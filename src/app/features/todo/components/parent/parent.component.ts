import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss'],
})
export class ParentComponent implements OnInit {
  // testing purpose
  parentData = 'Hello from parent!'; //this is parent projected content for test
  // tetsing learn

  constructor() {}

  ngOnInit(): void {}
}
