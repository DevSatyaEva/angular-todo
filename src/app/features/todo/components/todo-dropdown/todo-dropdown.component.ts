import {
  Overlay,
  OverlayConfig,
  PositionStrategy,
  ScrollStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import {
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
  ViewContainerRef,
} from '@angular/core';
import { FormControl } from '@angular/forms';
import { TodoDropdownContainerComponent } from '../todo-dropdown-container/todo-dropdown-container.component'; // Import the new container component

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
  overlayRef: any;

  constructor(
    private overlay: Overlay, // Inject Angular CDK's Overlay
    private viewContainerRef: ViewContainerRef // This is needed to attach the portal dynamically
  ) {}

  ngOnInit() {
    window.addEventListener('resize', this.onResize.bind(this));
    this.filteredOptions = [];
    this.searchControl.valueChanges.subscribe((searchText) => {
      if (this.isEditing) {
        this.filterOptions(searchText || '');
      }
    });
  }

  ngOnDestroy() {
    window.removeEventListener('resize', this.onResize.bind(this));
  }

  onResize() {
    if (this.overlayRef) {
      this.hideDropdown();
      // Optionally, re-trigger showDropdown with the updated position.
    }
  }

  showDropdown(target: HTMLElement) {
    // Hide existing dropdown if any
    this.hideDropdown();

    // Get the position of the input field and the available space
    const targetRect = target.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calculate available space above and below
    const spaceBelow = viewportHeight - targetRect.bottom;
    const spaceAbove = targetRect.top;

    // Determine the position strategy based on the available space
    let positionStrategy: PositionStrategy;

    if (spaceBelow > spaceAbove) {
      // Position dropdown below
      positionStrategy = this.overlay
        .position()
        .flexibleConnectedTo(target)
        .withPositions([
          {
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top',
          },
        ]);
    } else {
      // Position dropdown above
      positionStrategy = this.overlay
        .position()
        .flexibleConnectedTo(target)
        .withPositions([
          {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom',
          },
        ]);
    }

    // Define the scroll strategy to reposition the dropdown when scrolling
    const scrollStrategy: ScrollStrategy =
      this.overlay.scrollStrategies.reposition();

    // Create an OverlayConfig to configure the overlay
    const overlayConfig: OverlayConfig = new OverlayConfig({
      positionStrategy,
      scrollStrategy,
      hasBackdrop: true, // Optional: adds a backdrop to the dropdown
    });

    // Create the overlay and attach the TodoDropdownContainerComponent dynamically
    this.overlayRef = this.overlay.create(overlayConfig);
    const portal = new ComponentPortal(
      TodoDropdownContainerComponent,
      this.viewContainerRef
    );

    // Attach the portal to the overlay
    const componentRef = this.overlayRef.attach(portal); // Attach the component using attach() method
    const dropdownComponent = componentRef.instance; // Access the component instance

    // Set the input properties for the dropdown component
    dropdownComponent.options = this.filteredOptions;
    dropdownComponent.selectedValue = this.selectedValue;

    // Listen for item selection
    dropdownComponent.itemSelected.subscribe((selected: string) => {
      this.itemSelected.emit(selected);
      this.hideDropdown();
    });
  }

  hideDropdown() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
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
