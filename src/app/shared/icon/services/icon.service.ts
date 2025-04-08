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

  /**
   * 1. Loads icons for a single category and a single prefix.
   */
  loadIcons(category: IconCategoryType, prefix: IconPrefixType) {
    // If the icons for this category and prefix are already loaded, do nothing.
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

    console.log(
      `Icons for category "${category}" and prefix "${prefix}" loaded.`
    );
  }
  /**
   * 2. Loads icons for a single category with one or multiple prefixes.
   *    You can pass a single prefix or an array of prefixes.
   */
  loadIconsByMultipleprefixes(
    category: IconCategoryType,
    prefixes: IconPrefixType | IconPrefixType[]
  ): void {
    // Normalize to an array for easier processing.
    const prefixArray = Array.isArray(prefixes) ? prefixes : [prefixes];
    const iconSet = ICON_SETS[category];

    if (!iconSet) {
      console.warn(`Icon category "${category}" not found`);
      return;
    }

    for (const prefix of prefixArray) {
      // Skip if already loaded.
      if (this.definitions[category]?.[prefix]) {
        continue;
      }

      const prefixIcons = iconSet[prefix];
      if (!prefixIcons) {
        console.warn(`Prefix "${prefix}" not found in category "${category}"`);
        continue;
      }

      Object.entries(prefixIcons).forEach(([name, svg]) => {
        this.addIcon(category, prefix, name, svg);
      });

      console.log(`Icons for "${category}" and prefix "${prefix}" loaded.`);
    }
  }
  /**
   * 3. Loads all prefixes for a given category.
   *    This method looks up the icon set for the category and loads every prefix available.
   */
  loadIconsByCategory(category: IconCategoryType): void {
    const iconSet = ICON_SETS[category];
    if (!iconSet) {
      console.warn(`Icon category "${category}" not found`);
      return;
    }

    // Get all prefixes available in the iconSet.
    const prefixes = Object.keys(iconSet) as IconPrefixType[];

    prefixes.forEach((prefix) => {
      // Use the single-prefix loader so that it handles caching and warnings.
      this.loadIcons(category, prefix);
    });
    console.log(`All prefixes for category "${category}" loaded.`);
  }
  /**
   * 4. Loads all icons for all categories.
   *    This method iterates over all defined categories and loads every icon.
   */
  loadAllIcons(): void {
    // Get all categories from the ICON_SETS data structure.
    const categories = Object.keys(ICON_SETS) as IconCategoryType[];

    categories.forEach((category) => {
      this.loadIconsByCategory(category);
    });
    console.log('All icons across all categories loaded.');
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

    if (!this.definitions[category]![prefix]) {
      this.definitions[category]![prefix] = {};
    }

    // Add each icon to the appropriate category and prefix
    for (const icon of icons) {
      this.definitions[category]![prefix]![icon.iconName] = icon;
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
      this.definitions[category]![prefix]![name].icon
    );
  }
}
