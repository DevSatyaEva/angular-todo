import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICON_SETS } from '../models/icon-sets';
import {
  IconCategoryType,
  IconDefinition,
  IconPrefixType,
  IconRegistry,
} from '../models/icon.model';

@Injectable({ providedIn: 'root' })
export class IconService {
  private definitions: IconRegistry = {};

  constructor(private sanitizer: DomSanitizer) {}

  loadIcons(category: IconCategoryType, prefix: IconPrefixType) {
    if (this.definitions[category]?.[prefix]) {
      return;
    }
    const iconSet = ICON_SETS[category];

    if (!iconSet) {
      console.warn(`Icon category "${category}" not found`);
      return;
    }

    const prefixIcons = iconSet[prefix];
    if (!prefixIcons) {
      console.warn(`Prefix "${prefix}" not found in category "${category}"`);
      return;
    }

    Object.entries(prefixIcons).forEach(([name, svg]) => {
      this.addIcon(category, prefix, name, svg);
    });

    console.log(`Icons for "${category}" loaded.`);
  }

  /** Adds an icon dynamically */
  addIcon(
    category: IconCategoryType,
    prefix: IconPrefixType,
    name: string,
    svg: string
  ) {
    const icon: IconDefinition = { iconName: name, icon: svg };
    this.addIcons(category, prefix, icon);
  }

  /** Add multiple icons at once */
  addIcons(
    category: IconCategoryType,
    prefix: IconPrefixType,
    ...icons: IconDefinition[]
  ) {
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
  addIconPacks(
    category: IconCategoryType,
    prefix: IconPrefixType,
    pack: IconDefinition[]
  ) {
    this.addIcons(category, prefix, ...pack);
  }

  //** lazyy Loads Icons: Prevent loading an icon if the category and prefix are not loaded */
  getIcon(
    category: IconCategoryType,
    prefix: IconPrefixType,
    name: string
  ): SafeHtml | null {
    if (!this.definitions[category]?.[prefix]?.[name]) {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustHtml(
      this.definitions[category][prefix][name].icon
    );
  }
}
