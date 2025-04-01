import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { IconService } from '../services/icon.service';
import { SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnChanges {
  @Input() category!: string; // social, ui, etc.
  @Input() prefix!: string; // e.g., 'fa'
  @Input() name!: string; // e.g., 'home'
  icon: SafeHtml | null = null;
  constructor(private iconService: IconService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['name'] && changes['name'].currentValue) {
      this.icon = this.iconService.getIcon(
        this.category,
        this.prefix,
        this.name
      );
    }
  }
}
