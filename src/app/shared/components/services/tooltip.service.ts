import { Injectable, Injector } from '@angular/core';
import { ComponentPortal } from '@angular/cdk/portal';
import { Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Injectable({ providedIn: 'root' })
export class TooltipService {
  private overlayRef!: OverlayRef;

  constructor(private overlay: Overlay, private injector: Injector) {}

  showTooltip(content: string, target: HTMLElement): void {
    // Destroy any existing tooltip
    this.hideTooltip();

    // Create a position strategy
    const positionStrategy = this.overlay
      .position()
      .flexibleConnectedTo(target)
      .withPositions([
        {
          originX: 'center',
          originY: 'top',
          overlayX: 'center',
          overlayY: 'bottom',
          offsetY: -8, // Spacing between target and tooltip
        },
      ]);

    // Create overlay
    this.overlayRef = this.overlay.create({
      positionStrategy,
      scrollStrategy: this.overlay.scrollStrategies.close(),
      hasBackdrop: false,
    });

    // Attach the portal to the overlay
    const tooltipPortal = new ComponentPortal(TooltipComponent);
    const tooltipRef = this.overlayRef.attach(tooltipPortal);

    // Pass the tooltip content
    tooltipRef.instance.content = content;
  }

  hideTooltip(): void {
    if (this.overlayRef) {
      this.overlayRef.dispose();
      this.overlayRef = null!;
    }
  }
}
