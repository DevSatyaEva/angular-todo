import { Component, Input, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent implements OnInit {
  @Input() content!: string; // Tooltip text
  @Input() position: 'top' | 'right' | 'bottom' | 'left' = 'bottom'; // Position input
  positionStyles: { [key: string]: string } = {}; // Dynamic styles

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    this.calculatePosition();
  }

  calculatePosition(): void {
    const tooltip = this.elRef.nativeElement; // Tooltip element
    const parent = tooltip.parentElement; // Parent element

    if (!parent) return;

    // Get bounding rectangles for parent and tooltip
    const parentRect = parent.getBoundingClientRect();
    const tooltipRect = tooltip.getBoundingClientRect();

    // Adjust positions based on desired placement
    switch (this.position) {
      case 'top':
        this.positionStyles = {
          top: `${parentRect.top - tooltipRect.height - 8}px`,
          left: `${
            parentRect.left + parentRect.width / 2 - tooltipRect.width / 2
          }px`,
        };
        break;
      case 'right':
        this.positionStyles = {
          top: `${
            parentRect.top + parentRect.height / 2 - tooltipRect.height / 2
          }px`,
          left: `${parentRect.right + 8}px`,
        };
        break;
      case 'bottom':
        this.positionStyles = {
          top: `${parentRect.bottom + 8}px`,
          left: `${
            parentRect.left + parentRect.width / 2 - tooltipRect.width / 2
          }px`,
        };
        break;
      case 'left':
        this.positionStyles = {
          top: `${
            parentRect.top + parentRect.height / 2 - tooltipRect.height / 2
          }px`,
          left: `${parentRect.left - tooltipRect.width - 8}px`,
        };
        break;
    }
  }
}
