import { Injectable } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ICON_SETS } from '../models/icon-sets';
import { IconCategoryType, IconDefinition, IconPrefixType, IconRegistry } from '../models/icon.model';
import { BehaviorSubject } from 'rxjs';
import { ICON_CONFIG_REGISTRY, IconConfig, IconConfigKey } from '../models/icon-config';
import { Logger } from '@app/@core';

const logger = new Logger('IconService');

@Injectable({ providedIn: 'root' })
export class IconService {
  private definitions: IconRegistry = {};
  private configs: { [key: string]: BehaviorSubject<IconConfig> } = {};

  constructor(private sanitizer: DomSanitizer) {
    const observer = new MutationObserver(() => {
      this.updateAllConfigs();
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    this.createDefaultConfigs();
  }

  private getCss(varName: string): string {
    return getComputedStyle(document.documentElement).getPropertyValue(varName).trim();
  }

  private createDefaultConfigs() {
    for (const key in ICON_CONFIG_REGISTRY) {
      if (ICON_CONFIG_REGISTRY.hasOwnProperty(key)) {
        const typedKey = key as IconConfigKey; //important cast
        this.configs[typedKey] = new BehaviorSubject<IconConfig>(this.generateConfig(ICON_CONFIG_REGISTRY[typedKey]!));
      }
    }
  }

  private updateAllConfigs() {
    for (const key in ICON_CONFIG_REGISTRY) {
      if (ICON_CONFIG_REGISTRY.hasOwnProperty(key)) {
        const typedKey = key as IconConfigKey; // cast key properly
        this.configs[typedKey]?.next(this.generateConfig(ICON_CONFIG_REGISTRY[typedKey]!));
      }
    }
  }

  private generateConfig(config: IconConfig): IconConfig {
    return {
      stroke: this.resolveCssValue(config.stroke),
      fill: this.resolveCssValue(config.fill),
      hoverStroke: this.resolveCssValue(config.hoverStroke),
      hoverFill: this.resolveCssValue(config.hoverFill),
      activeStroke: this.resolveCssValue(config.activeStroke),
      activeFill: this.resolveCssValue(config.activeFill),
      disabledStroke: this.resolveCssValue(config.disabledStroke),
      disabledFill: this.resolveCssValue(config.disabledFill),

      hoverScale: config.hoverScale,
      activeScale: config.activeScale,
      disabledScale: config.disabledScale,

      height: this.resolveCssValue(config.height),
      width: this.resolveCssValue(config.width),
      strokeWidth: this.resolveCssValue(config.strokeWidth),
      transition: this.resolveCssValue(config.transition),

      // viewBox: this.resolveCssValue(config.viewBox),
      // role: this.resolveCssValue(config.role),
      // ariaLabel: this.resolveCssValue(config.ariaLabel),
      // tabIndex: config.tabIndex, // Not a CSS value; keep as-is (number)
      customClass: this.resolveCssValue(config.customClass),
      parentSelector: this.resolveCssValue(config.parentSelector),
    };
  }

  private resolveCssValue(value: string): string {
    if (!value) return '';

    if (value.startsWith('--')) {
      return this.getCss(value);
    }
    return value;
  }

  getConfig(type: string = 'default'): IconConfig {
    return this.configs[type]?.value ?? this.generateConfig(ICON_CONFIG_REGISTRY['default']);
  }

  getConfigObservable(type: string = 'default') {
    return this.configs[type]?.asObservable();
  }

  loadIconsByPrefix(category: IconCategoryType, prefix: IconPrefixType) {
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
  }

  loadIconsByMultipleprefixes(category: IconCategoryType, prefixes: IconPrefixType | IconPrefixType[]): void {
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
    }
  }

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
      this.loadIconsByPrefix(category, prefix);
    });
  }

  loadIcons(): void {
    // Get all categories from the ICON_SETS data structure.
    const categories = Object.keys(ICON_SETS) as IconCategoryType[];

    categories.forEach((category) => {
      this.loadIconsByCategory(category);
    });
    logger.info('icons loaded.');
  }

  addIcon(category: IconCategoryType, prefix: IconPrefixType, name: string, svg: string) {
    const icon: IconDefinition = { iconName: name, icon: svg };
    this.addIcons(category, prefix, icon);
  }

  addIcons(category: IconCategoryType, prefix: IconPrefixType, ...icons: IconDefinition[]) {
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

  addIconPacks(category: IconCategoryType, prefix: IconPrefixType, pack: IconDefinition[]) {
    this.addIcons(category, prefix, ...pack);
  }

  getIcon(category: IconCategoryType, prefix: IconPrefixType, name: string): SafeHtml | null {
    if (!this.definitions[category]?.[prefix]?.[name]) {
      return null;
    }
    return this.sanitizer.bypassSecurityTrustHtml(this.definitions[category]![prefix]![name].icon);
  }
}
