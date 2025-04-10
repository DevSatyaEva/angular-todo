import { Component, OnInit } from '@angular/core';
import {
  IconCategory,
  IconDefinition,
  IconPrefix,
} from 'src/app/shared/icon/models/icon.model';
import { IconService } from 'src/app/shared/icon/services/icon.service';
import { IconKeys } from 'src/app/shared/icon/utils/mullion-icons';

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

  get category() {
    return IconCategory;
  }
  get prefix() {
    return IconPrefix;
  }
  get iconkey() {
    return IconKeys;
  }

  arrowTowardsHandle = false;
  viewHandleFromOutside = true;

  get iconClass(): string {
    if (this.arrowTowardsHandle && this.viewHandleFromOutside) {
      return '';
    }

    if (this.arrowTowardsHandle && !this.viewHandleFromOutside) {
      return 'flip-vertical';
    }

    if (!this.arrowTowardsHandle && this.viewHandleFromOutside) {
      return 'rotate-90';
    }

    if (!this.arrowTowardsHandle && !this.viewHandleFromOutside) {
      return 'flip-horizontal';
    }
    return '';
  }

  get a() {
    return !this.arrowTowardsHandle && this.viewHandleFromOutside;
  }
  get b() {
    return !this.arrowTowardsHandle && !this.viewHandleFromOutside;
  }
  get c() {
    return this.arrowTowardsHandle && this.viewHandleFromOutside;
  }
  get d() {
    return this.arrowTowardsHandle && !this.viewHandleFromOutside;
  }

  get iconArrowToward(): string {
    return this.b ? 'flip-horizontal' : '';
  }

  get iconArrowAway(): string {
    return this.d ? 'flip-horizontal' : '';
  }

  get iconArrowTowardReverse(): string {
    return this.a ? 'flip-horizontal' : '';
  }

  get iconArrowAwayReverse(): string {
    return this.c ? 'flip-horizontal' : '';
  }

  // get iconArrowToward(): string {
  //   if (this.a) {
  //     return '';
  //   }
  //   if (this.b) {
  //     return 'flip-horizontal';
  //   }
  //   return '';
  // }

  // get iconArrowAway(): string {
  //   if (this.c) {
  //     return '';
  //   }
  //   if (this.d) {
  //     return 'flip-horizontal';
  //   }
  //   return '';
  // }

  // get iconArrowTowardReverse(): string {
  //   if (this.a) {
  //     return 'flip-horizontal';
  //   }
  //   if (this.b) {
  //     return '';
  //   }
  //   return '';
  // }

  // get iconArrowAwayReverse(): string {
  //   if (this.c) {
  //     return 'flip-horizontal';
  //   }
  //   if (this.d) {
  //     return '';
  //   }
  //   return '';
  // }

  // get insideOutsideClass(): string {
  //   if (this.viewHandleFromOutside) {
  //     return '';
  //   }

  //   if (!this.viewHandleFromOutside) {
  //     return 'flip-horizontal';
  //   }
  //   return '';
  // }
  constructor(private iconService: IconService) {}

  ngOnInit(): void {
    this.iconService.loadAllIcons();
    // this.iconService.loadIcons(
    //   IconCategory.MULLION,
    //   IconPrefix.MULLION_DROPDOWN
    // );
    // this.iconService.loadIconsByMultipleprefixes(IconCategory.MULLION, [
    //   IconPrefix.MULLION_DROPDOWN,
    //   IconPrefix.DIVIDER,
    // ]);
    // this.iconService.loadIconsByCategory(IconCategory.MULLION);
    // this.iconService.loadIcons(IconCategory.MULLION, IconPrefix.DIVIDER);
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
