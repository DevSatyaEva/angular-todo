import { Component, OnInit } from '@angular/core';
import {
  IconCategory,
  IconDefinition,
} from 'src/app/shared/icon/models/icon.model';
import { IconService } from 'src/app/shared/icon/services/icon.service';

@Component({
  selector: 'app-todo-indexdb',
  templateUrl: './todo-indexdb.component.html',
  styleUrls: ['./todo-indexdb.component.scss'],
})
export class TodoIndexdbComponent implements OnInit {
  // customIcons: IconDefinition[] = [
  //   { iconName: 'custom-icon1', icon: '<svg>...</svg>' },
  //   { iconName: 'custom-icon2', icon: '<svg>...</svg>' },
  // ];

  // userIcons: IconDefinition[] = [
  //   { iconName: 'home', icon: '<svg>...</svg>' },
  //   { iconName: 'user', icon: '<svg>...</svg>' },
  // ];

  // systemIcons: IconDefinition[] = [
  //   { iconName: 'settings', icon: '<svg>...</svg>' },
  //   { iconName: 'help', icon: '<svg>...</svg>' },
  // ];

  // customSvg = '<svg>...</svg>';

  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    // this.iconService.loadIcons(IconCategory.USER, 'fw');
    // this.iconService.loadIcons('user', 'sm');
    // this.iconService.loadIcons('social', 'sm');
    // this.iconService.loadIcons(IconCategory.SYSTEM, 'sm');
    // this.iconService.addIcons('custom', 'fa', ...this.customIcons);
    // this.iconService.addIconPacks('social', 'fa', [
    //   ...this.userIcons,
    //   ...this.systemIcons,
    // ]);
    // this.iconService.addIcon('custom', 'fa', 'upload-icon', this.customSvg);
  }
}
