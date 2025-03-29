import { Component, Input, OnInit } from '@angular/core';
import { IconService } from '../services/icon.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
  @Input() name!: string;
  icon: any;

  constructor(private iconService: IconService) {}

  ngOnChanges() {
    this.icon = this.iconService.getIcon(this.name);
  }
}
