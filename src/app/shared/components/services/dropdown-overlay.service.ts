import { Injectable } from '@angular/core';
import {
  Overlay,
  OverlayConfig,
  PositionStrategy,
  ScrollStrategy,
} from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ViewContainerRef } from '@angular/core';
import { TodoDropdownComponent } from 'src/app/features/todo/components/todo-dropdown/todo-dropdown.component';

@Injectable({
  providedIn: 'root',
})
export class DropdownOverlayService {
  private overlayRef: any;

  constructor(private overlay: Overlay) {}

  showDropdown(
    target: HTMLElement,
    options: string[],
    selectedValue: string | null,
    viewContainerRef: ViewContainerRef,
    itemSelected: (selected: string) => void
  ) {
    // Hide existing dropdown if any
    this.hideDropdown();

    // Get the position of the target (input field)
    const targetRect = target.getBoundingClientRect();
    const viewportHeight = window.innerHeight;

    // Calculate available space above and below
    const spaceBelow = viewportHeight - targetRect.bottom;
    const spaceAbove = targetRect.top;

    // Determine position strategy
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

    // Define scroll strategy to reposition dropdown when scrolling
    const scrollStrategy: ScrollStrategy =
      this.overlay.scrollStrategies.reposition();

    // Configure the overlay
    const overlayConfig: OverlayConfig = new OverlayConfig({
      positionStrategy,
      scrollStrategy,
      hasBackdrop: true,
    });

    // Create and attach the overlay
    this.overlayRef = this.overlay.create(overlayConfig);
    const portal = new ComponentPortal(TodoDropdownComponent, viewContainerRef);

    const componentRef = this.overlayRef.attach(portal);
    const dropdownComponent = componentRef.instance;

    // Set input properties for the dropdown component
    dropdownComponent.options = options;
    dropdownComponent.selectedValue = selectedValue;

    // Listen for item selection
    dropdownComponent.itemSelected.subscribe((selected: string) => {
      itemSelected(selected);
      this.hideDropdown();
    });
  }

  hideDropdown() {
    if (this.overlayRef) {
      this.overlayRef.dispose();
    }
  }
}
