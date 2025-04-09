import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { IconService } from '../services/icon.service';
import { SafeHtml } from '@angular/platform-browser';
import { IconCategoryType, IconPrefixType } from '../models/icon.model';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent implements OnChanges {
  @Input() category!: IconCategoryType;
  @Input() prefix!: IconPrefixType;
  @Input() name!: string;

  @Input() containerClass: string = '';
  @Input() containerStyle: { [key: string]: any } = {};

  icon: SafeHtml | null = null;
  constructor(private iconService: IconService) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.category && this.prefix && this.name && changes['name']?.currentValue) {
      this.icon = this.iconService.getIcon(this.category, this.prefix, this.name);
    }
  }
}
