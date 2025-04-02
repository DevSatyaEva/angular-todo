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
  @Input() category!: string; // social, user, etc.
  @Input() prefix!: string; // e.g., 'fa'
  @Input() name!: string; // e.g., 'home'
  icon: SafeHtml | null = null;
  constructor(private iconService: IconService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      this.category &&
      this.prefix &&
      this.name &&
      changes['name']?.currentValue
    ) {
      this.icon = this.iconService.getIcon(
        this.category,
        this.prefix,
        this.name
      );
    }
  }
}
