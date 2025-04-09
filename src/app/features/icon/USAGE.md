# Icon Library Documentation

## Overview

This documentation provides a detailed explanation of the icon library, including how to load, add, and retrieve icons dynamically. The library categorizes icons under different namespaces (`category`, `prefix`, `name`) and provides a reusable `<app-icon>` component for rendering icons in Angular applications.

---

## Features

- Load icons dynamically based on category and prefix.
- Add individual or multiple icons at runtime.
- Retrieve icons efficiently.
- Optimize memory by only loading necessary icons.
- Provide a reusable `<app-icon>` component for icon display.

---

## API Reference

### **1. `loadIcons()`**

Loads a set of icons

#### **Usage:**

```ts
this.iconService.loadIcons(); // loads icons
```

---

### **2. `addIcon(category: string, prefix: string, name: string, svg: string): void`**

Adds a single icon dynamically to a specified category and prefix.

#### **Usage:**

```ts
this.iconService.addIcon('user', 'fa', 'settings', '<svg>...</svg>');
// 'fa' is now dynamically added under 'user'
```

---

### **3. `addIcons(category: string, prefix: string, ...icons: IconDefinition[]): void`**

Adds multiple icons at once to a category and prefix.

#### **Usage:**

```ts
this.iconService.addIcons('custom', 'fa', ...this.customIcons);
```

---

### **4. `addIconPacks(category: string, prefix: string, iconPack: IconDefinition[]): void`**

Adds an array of icons to a category and prefix in bulk.

#### **Usage:**

```ts
this.iconService.addIconPacks('social', 'fa', [
  ...this.userIcons,
  ...this.systemIcons,
]);
```

---

### **5. `getIcon(category: string, prefix: string, name: string): string | null`**

Retrieves the SVG content of an icon.

#### **Usage:**

```ts
this.iconService.getIcon('user', 'fa', 'settings'); // Returns the icon
```

```ts
this.iconService.getIcon('user', 'wrong-prefix', 'settings'); // Returns null
```

---

## **Component Usage**

The `<app-icon>` component is used to display icons dynamically by specifying their category, prefix, and name.

### **Example Usage:**

```html
<app-icon
  [category]="category.SLIDING"
  [prefix]="prefix.SLIDING_DESIGN"
  [name]="slidingDesignIcons.TWO_TRACK_FOUR_PANEL_MEETING"
  [containerClass]="insideOutsideClass"
></app-icon>
<app-icon
  [category]="category.DESIGN"
  [prefix]="prefix.OPENABLE_DESIGNS"
  [name]="designIcons.RIGHT_OPENABLE_ARROW_AWAY_OUTSIDE"
  [containerClass]="iconArrowToward"
></app-icon>
<app-icon
  [category]="category.MULLION"
  [prefix]="prefix.DIVIDER"
  [name]="mullionIcons.VERTICAL_MULLION"
  [containerClass]="'rotate-90'"
></app-icon>
```

---

## **Internal Structure**

### **Icon Data Structure**

The icon data is stored in an object structure as follows:

```ts
const ICONS = {
  user: {
    fa: {
      settings: '<svg>...</svg>',
      home: '<svg>...</svg>',
    },
  },
  system: {
    sm: {
      search: '<svg>...</svg>',
    },
  },
};
```

---

## **Performance Considerations**

- Icons are only loaded when requested to reduce memory usage.
- Prefixes allow granular loading of icon packs.
- Retrieving icons from memory is optimized for speed.

---

## **Conclusion**

This library provides a flexible, scalable approach to handling icons in Angular applications. By dynamically loading and managing icons, developers can optimize application performance while maintaining modularity.
