import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { USER_ICONS } from '../utils/user-icons';
import { SYSTEM_ICONS } from '../utils/system-icons';
import { SOCIAL_ICONS } from '../utils/social-icons';
import { IconDefinition, IconRegistry } from '../models/icon.model';

@Injectable({ providedIn: 'root' })
export class IconService {
  private definitions: IconRegistry = {};

  constructor(private sanitizer: DomSanitizer) {}

  // Load icons from a set into the specified category and prefix
  loadIcons(category: string, prefix: string) {
    if (this.definitions[category]?.[prefix]) {
      return; // Icons already loaded, no need to load again
    }
    let iconSet: Record<string, Record<string, string>> | null = null;

    switch (category) {
      case 'user':
        iconSet = USER_ICONS;
        break;
      case 'system':
        iconSet = SYSTEM_ICONS;
        break;
      case 'social':
        iconSet = SOCIAL_ICONS;
        break;
      default:
        console.warn(`Icon category "${category}" not found`);
        return;
    }

    const prefixIcons = iconSet[prefix];
    if (!prefixIcons) {
      console.warn(`Prefix "${prefix}" not found in category "${category}"`);
      return;
    }
    // if (!this.definitions[category]) {
    //   this.definitions[category] = {}; // Ensure category exists
    // }
    // this.definitions[category][prefix] = {}; // Initialize prefix

    Object.entries(prefixIcons).forEach(([name, svg]) => {
      this.addIcon(category, prefix, name, svg);
    });

    console.log(`Icons for "${category}" loaded.`);
    console.log('updated-definitions --', this.definitions);
  }

  /** Adds an icon dynamically */
  addIcon(category: string, prefix: string, name: string, svg: string) {
    const icon: IconDefinition = { iconName: name, icon: svg };
    this.addIcons(category, prefix, icon);
  }

  /** Add multiple icons at once */
  addIcons(category: string, prefix: string, ...icons: IconDefinition[]) {
    if (!this.definitions[category]) {
      this.definitions[category] = {};
    }

    if (!this.definitions[category][prefix]) {
      this.definitions[category][prefix] = {};
    }

    // Add each icon to the appropriate category and prefix
    for (const icon of icons) {
      this.definitions[category][prefix][icon.iconName] = icon;
    }
  }

  //** Add icon packs (a collection of icons) to a specific category */
  addIconPacks(category: string, prefix: string, pack: IconDefinition[]) {
    this.addIcons(category, prefix, ...pack);
  }

  //** lazyy Loads Icons: Prevent loading an icon if the category and prefix are not loaded */
  getIcon(category: string, prefix: string, name: string): SafeHtml | null {
    if (!this.definitions[category]?.[prefix]?.[name]) {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustHtml(
      this.definitions[category][prefix][name].icon
    );
  }
}

//Example uses

// this.iconService.loadIcons('user'); // Only loads the category, no prefix

// this.iconService.addIcon('user', 'fa', 'settings', '<svg>...</svg>');
// // 'fa' is now dynamically added under 'user'

// this.iconService.getIcon('user', 'fa', 'settings'); // Returns the icon

// this.iconService.addIcons('custom', 'fa', ...this.customIcons);

// this.iconService.addIconPacks('social', 'fa', [
//   ...this.userIcons,
//   ...this.systemIcons,
// ]);

// this.iconService.getIcon('user', 'wrong-prefix', 'settings'); // Returns null
// .
// .
// .
// .
// .
// .
// .
// <app-icon [category]="'social'" [prefix]="'sm'" [name]="'star'"> </app-icon>
// <app-icon [category]="'system'" [prefix]="'sm'" [name]="'search'"> </app-icon>
// <app-icon [category]="'user'" [prefix]="'fw'" [name]="'home'"> </app-icon>
