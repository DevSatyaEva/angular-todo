import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-dropdown-container',
  templateUrl: './todo-dropdown-container.component.html',
  styleUrls: ['./todo-dropdown-container.component.scss'],
})
export class TodoDropdownContainerComponent {
  @Input() options: string[] = [];
  @Input() selectedValue: string | null = null;
  @Output() itemSelected = new EventEmitter<string>();

  // Add the searchQuery property
  searchQuery: string = ''; // Define the search query for the input field

  // Method to handle item selection
  selectOption(option: string) {
    this.itemSelected.emit(option);
  }
}
