import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-dropdown',
  templateUrl: './todo-dropdown.component.html',
  styleUrls: ['./todo-dropdown.component.scss'],
})
export class TodoDropdownComponent implements OnInit {
  @Input() options: string[] = []; // List of dropdown options from parent todo component
  @Output() itemSelected = new EventEmitter<string>(); // Emit selected item

  searchControl = new FormControl(''); // Reactive search input FormControl
  filteredOptions: string[] = []; // Filtered options for the dropdown

  selectedIndex = 0; // Track keyboard navigation
  selectedValue: string | null = null; // Store the currently selected value

  ngOnInit() {
    console.log('Dropdown options received:', this.options);
    // Initialize the dropdown with all options visible
    this.filteredOptions = [];

    // Filter options based on search input
    this.searchControl.valueChanges.subscribe((searchText) => {
      this.filterOptions(searchText);
    });
  }

  filterOptions(searchText: string | null) {
    if (searchText) {
      this.filteredOptions = this.options.filter((option) =>
        option.toLowerCase().includes(searchText.toLowerCase())
      );
    } else {
      this.filteredOptions = this.selectedValue ? [this.selectedValue] : []; // Keep selected value if no search
    }
    console.log('Filtered options:', this.filteredOptions); // Debug log
    this.selectedIndex = 0; // Reset index when filtering
  }

  // Handle item selection
  onSelect(option: string) {
    this.selectedValue = option; // Store the selected value
    this.itemSelected.emit(option); // Emit selected value to parent
    this.searchControl.setValue(option, { emitEvent: false }); // Set selected value in input without triggering the subscription
    this.filteredOptions = []; // Close the dropdown after selection
    this.setCursorAtStart(); // Set the cursor at the start
  }

  // Handle keyboard events for navigation  (ArrowUp, ArrowDown, Enter)
  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowDown') {
      this.selectedIndex = Math.min(
        this.selectedIndex + 1,
        this.filteredOptions.length - 1
      );
    } else if (event.key === 'ArrowUp') {
      this.selectedIndex = Math.max(this.selectedIndex - 1, 0);
    } else if (event.key === 'Enter' && this.selectedIndex >= 0) {
      this.onSelect(this.filteredOptions[this.selectedIndex]);
    }
  }

  setCursorAtStart() {
    // Using setTimeout to ensure the DOM is updated before focusing
    setTimeout(() => {
      const inputElement = document.getElementById(
        'dropdownInput'
      ) as HTMLInputElement;
      if (inputElement) {
        inputElement.setSelectionRange(0, 0); // Set cursor position at the start
        inputElement.focus(); // Focus the input
      }
    }, 0);
  }

  // Triggered when input field is focused
  onFocus() {
    if (!this.searchControl.value && this.selectedValue) {
      // Restore selected value if search is empty
      this.searchControl.setValue(this.selectedValue);
    }
    this.setCursorAtStart(); // Ensure the cursor is at the start
  }

  // Handle input change and reset selected value if user starts searching
  onInputChange() {
    if (this.searchControl.value) {
      this.selectedValue = null; // Clear the selected value when typing
    }
  }
}
