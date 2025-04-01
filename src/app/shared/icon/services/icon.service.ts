import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { USER_ICONS } from '../utils/user-icons';
import { SYSTEM_ICONS } from '../utils/system-icons';
import { SOCIAL_ICONS } from '../utils/social-icons';
import { IconDefinition, IconRegistry } from '../models/icon.model';

@Injectable({ providedIn: 'root' })
export class IconService {
  // private registry = new Map<string, SafeHtml>();

  private definitions: IconRegistry = {
    social: {},
    ui: {},
    navigation: {},
    // Other categories can be added dynamically
  };
  constructor(private sanitizer: DomSanitizer) {
    this.loadIcons(USER_ICONS, 'user', 'fa'); // Example of loading icons with category & prefix
    this.loadIcons(SYSTEM_ICONS, 'system', 'fa');
    this.loadIcons(SOCIAL_ICONS, 'social', 'fa');
  }

  // Load icons from a set into the specified category and prefix
  private loadIcons(
    iconSet: { [key: string]: string },
    category: string,
    prefix: string
  ) {
    Object.entries(iconSet).forEach(([name, svg]) => {
      const icon: IconDefinition = { iconName: name, icon: svg }; // Example icon structure
      this.addIcons(category, prefix, icon);
    });
  }

  // Add icons to a specific category with prefix and name
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

  // Add icon packs (a collection of icons) to a specific category
  addIconPacks(category: string, prefix: string, pack: IconDefinition[]) {
    this.addIcons(category, prefix, ...pack);
  }

  // Retrieve icon definition by category, prefix, and name
  getIconDefinition(
    category: string,
    prefix: string,
    name: string
  ): SafeHtml | null {
    const iconDef = this.definitions[category]?.[prefix]?.[name];
    return iconDef
      ? this.sanitizer.bypassSecurityTrustHtml(iconDef.icon[0])
      : null;
  }

  // Method to fetch icon based on category, prefix, and name
  getIcon(category: string, prefix: string, name: string): SafeHtml | null {
    return this.getIconDefinition(category, prefix, name);
  }

  // Dynamically add a new icon
  addIcon(category: string, prefix: string, name: string, svg: string) {
    const icon: IconDefinition = { iconName: name, icon: svg };
    this.addIcons(category, prefix, icon);
  }
}
