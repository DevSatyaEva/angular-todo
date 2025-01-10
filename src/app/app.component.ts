import { Component } from '@angular/core';
import { TooltipService } from './shared/components/services/tooltip.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-todo-app';
  constructor(private tooltipService: TooltipService) {}

  showTooltip(target: HTMLElement) {
    this.tooltipService.showTooltip('This is a tooltip!', target, 'right');
  }

  hideTooltip() {
    this.tooltipService.hideTooltip();
  }
}
