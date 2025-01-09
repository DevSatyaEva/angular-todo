import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-todo-dropdown',
  templateUrl: './todo-dropdown.component.html',
  styleUrls: ['./todo-dropdown.component.scss'],
})
export class TodoDropdownComponent implements OnInit {
  @Input() options: string[] = [];
  @Output() itemSelected = new EventEmitter<string>();

  searchControl = new FormControl('');
  filteredOptions: string[] = [];
  selectedIndex = 0;
  selectedValue: string | null = null;
  isEditing = false;

  ngOnInit() {
    this.filteredOptions = [];
    this.searchControl.valueChanges.subscribe((searchText) => {
      if (this.isEditing) {
        this.filterOptions(searchText || '');
      }
    });
  }

  filterOptions(searchText: string) {
    if (searchText) {
      this.filteredOptions = this.options.filter((option) =>
        option.toLowerCase().includes(searchText.toLowerCase())
      );
    } else if (this.selectedValue) {
      // If search text is empty, show the selected value
      this.filteredOptions = [this.selectedValue];
    } else {
      this.filteredOptions = [];
    }
    this.selectedIndex = 0;
  }

  startEditing() {
    this.isEditing = true;
    this.searchControl.setValue('');
    setTimeout(() => {
      const input = document.getElementById('searchInput') as HTMLInputElement;
      input?.focus();
    }, 0);
  }

  onBlur() {
    if (!this.searchControl.value) {
      this.isEditing = false;
      this.filteredOptions = [];
    }
  }

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

  onSelect(option: string) {
    this.selectedValue = option;
    this.itemSelected.emit(option);
    this.isEditing = false;
    this.filteredOptions = [option];
  }

  resetToSelectedValue() {
    if (!this.searchControl.value && this.selectedValue) {
      this.searchControl.setValue('');
    }
  }
}
