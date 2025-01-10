import {
  Injectable,
  ApplicationRef,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
} from '@angular/core';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Injectable({ providedIn: 'root' })
export class TooltipService {
  private tooltipRef: ComponentRef<TooltipComponent> | null = null;

  constructor(
    private appRef: ApplicationRef,
    private componentFactoryResolver: ComponentFactoryResolver,
    private injector: Injector
  ) {}

  /**
   * Show a tooltip dynamically
   * @param content - The content to display inside the tooltip
   * @param target - The target element where the tooltip should appear
   * @param position - The position of the tooltip ('top' | 'bottom' | 'left' | 'right')
   */
  showTooltip(
    content: string,
    target: HTMLElement,
    position: 'top' | 'bottom' | 'left' | 'right' = 'bottom'
  ) {
    // Clean up any existing tooltip
    this.hideTooltip();

    // Dynamically create the tooltip component
    const factory =
      this.componentFactoryResolver.resolveComponentFactory(TooltipComponent);
    const tooltipRef = factory.create(this.injector);

    // Set content and position
    tooltipRef.instance.content = content;
    tooltipRef.instance.position = position;

    // Attach the component's view to the application
    this.appRef.attachView(tooltipRef.hostView);

    // Append the tooltip to the document body
    const tooltipElement = tooltipRef.location.nativeElement;
    document.body.appendChild(tooltipElement);

    // Position the tooltip dynamically
    const targetRect = target.getBoundingClientRect();
    this.positionTooltip(tooltipElement, targetRect, position);

    // Save a reference to the tooltip
    this.tooltipRef = tooltipRef;
  }

  /**
   * Hide the currently displayed tooltip
   */
  hideTooltip() {
    if (this.tooltipRef) {
      // Detach the view from the application
      this.appRef.detachView(this.tooltipRef.hostView);

      // Destroy the tooltip component
      this.tooltipRef.destroy();
      this.tooltipRef = null;
    }
  }

  /**
   * Position the tooltip based on the target's location and the specified position
   * @param tooltipElement - The tooltip's DOM element
   * @param targetRect - Bounding rectangle of the target element
   * @param position - The position of the tooltip ('top' | 'bottom' | 'left' | 'right')
   */
  private positionTooltip(
    tooltipElement: HTMLElement,
    targetRect: DOMRect,
    position: 'top' | 'bottom' | 'left' | 'right'
  ) {
    // Apply styles to position the tooltip
    switch (position) {
      case 'top':
        tooltipElement.style.top = `${
          targetRect.top - tooltipElement.offsetHeight - 8
        }px`;
        tooltipElement.style.left = `${
          targetRect.left +
          targetRect.width / 2 -
          tooltipElement.offsetWidth / 2
        }px`;
        break;

      case 'bottom':
        tooltipElement.style.top = `${targetRect.bottom + 8}px`;
        tooltipElement.style.left = `${
          targetRect.left +
          targetRect.width / 2 -
          tooltipElement.offsetWidth / 2
        }px`;
        break;

      case 'left':
        tooltipElement.style.top = `${
          targetRect.top +
          targetRect.height / 2 -
          tooltipElement.offsetHeight / 2
        }px`;
        tooltipElement.style.left = `${
          targetRect.left - tooltipElement.offsetWidth - 8
        }px`;
        break;

      case 'right':
        tooltipElement.style.top = `${
          targetRect.top +
          targetRect.height / 2 -
          tooltipElement.offsetHeight / 2
        }px`;
        tooltipElement.style.left = `${targetRect.right + 8}px`;
        break;
    }

    // Set tooltip visibility
    tooltipElement.style.position = 'absolute';
    tooltipElement.style.zIndex = '1000';
  }
}
