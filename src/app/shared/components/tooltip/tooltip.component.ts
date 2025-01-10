import { Component, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-tooltip',
  templateUrl: './tooltip.component.html',
  styleUrls: ['./tooltip.component.scss'],
})
export class TooltipComponent {
  @Input() content!: string;
  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'bottom'; // Tooltip position
}
