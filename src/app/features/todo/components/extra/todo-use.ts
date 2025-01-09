import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, combineLatest } from 'rxjs';
import { debounceTime, map, startWith } from 'rxjs/operators';
import { DebounceHelperService } from 'src/app/shared/services/debounce-helper.service';

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

  // BehaviorSubject to hold the selected value

  private selectedValue = new BehaviorSubject<string | null>(null); // Store selected value

  // private selectedValueSubject = new BehaviorSubject<string | null>(null); // Store selected value
  // selectedValue$ = this.selectedValueSubject.asObservable();

  // searchText = ''; // Hold the input
  // selectedValue: string | null = null; // Track the currently selected value

  selectedIndex = 0; // Track the currently highlighted index for keyboard navigation
  dropdownStyle: any = {}; // Dropdown positioning style

  constructor(
    private debounceHelper: DebounceHelperService,
    private elementRef: ElementRef
  ) {}

  ngOnInit() {
    // Initialize filtering with debounce
    this.searchControl.valueChanges
      .pipe(debounceTime(300))
      .subscribe((searchText) => {
        this.filterOptions(searchText);
      });

    // Initialize filtered options
    this.filteredOptions = [...this.options];
  }

  // Filter dropdown options based on search input
  private filterOptions(searchText: string | null) {
    if (searchText) {
      this.filteredOptions = this.options.filter((option) =>
        option.toLowerCase().includes(searchText.toLowerCase())
      );
      this.selectedIndex = 0; // Reset index to the first item
    } else if (this.selectedValue.getValue()) {
      this.filteredOptions = [this.selectedValue.getValue() as string]; // Show selected value
    } else {
      this.filteredOptions = [...this.options]; // Show all options
    }
  }

  // ngOnInit() {
  //   this.initializeSearch();
  // }

  // // Initialize search functionality
  // private initializeSearch() {
  //   combineLatest([
  //     this.debounceHelper.debounce(this.searchControl.valueChanges, 300).pipe(
  //       startWith('') // Start with an empty string
  //     ),
  //     this.selectedValue$, // Track the selected value
  //   ])
  //     .pipe(
  //       map(([searchString, selectedValue]) => {
  //         if (searchString) {
  //           // Filter options by search string
  //           return this.options.filter((option) =>
  //             option.toLowerCase().includes(searchString.toLowerCase())
  //           );
  //         } else if (selectedValue) {
  //           // Show previously selected value if search is empty
  //           return [selectedValue];
  //         } else {
  //           return this.options;
  //         }
  //       })
  //     )
  //     .subscribe((filtered) => {
  //       this.filteredOptions = filtered;
  //     });
  // }

  // Handle item selection
  onSelect(option: string) {
    this.selectedValue.next(option); // Update selected value
    this.itemSelected.emit(option); // Emit selected value to parent
    this.searchControl.setValue(''); // Clear the search input
  }

  // Update filtered options based on search text
  // onSearchChange() {
  //   if (this.searchText) {
  //     this.filteredOptions = this.options.filter((item) =>
  //       item.toLowerCase().includes(this.searchText.toLowerCase())
  //     );
  //     // .sort((a, b) => a.localeCompare(b)); // Sort filtered
  //     // Highlight the first match in the filtered options
  //     this.selectedIndex = this.filteredOptions.length > 0 ? 0 : -1;
  //   } else {
  //     this.filteredOptions = []; // hide all options when searchText is empty
  //   }
  //   // this.selectedIndex = -1; // Reset keyboard selection
  // }

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

  // // Select an item
  // selectItem(item: string) {
  //   // this.itemSelected.emit(item);
  //   this.selectedValue = item; // Set the selected value
  //   this.searchText = item; // Display the selected value in the input
  //   this.filteredOptions = [];
  //   this.setCursorAtStart(); // Set the cursor at the beginning of the input field
  // }

  // Ensure the cursor is at the start when text is set in the input
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

  // Set dropdown position dynamically
  setDropdownPosition(targetElement: HTMLElement) {
    const rect = targetElement.getBoundingClientRect();
    this.dropdownStyle = {
      position: 'absolute',
      top: `${rect.bottom}px`,
      left: `${rect.left}px`,
      zIndex: 1000,
    };
  }

  // Ensure the cursor is at the start when text is set in the input
  onFocus(event: FocusEvent) {
    console.log('focusing......');
    console.log(this.options);
    const inputElement = event.target as HTMLInputElement;
    inputElement.setSelectionRange(0, 0); // Set cursor position at the start
  }
}
