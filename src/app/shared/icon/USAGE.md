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

### **1. `loadIcons(category: string, prefix?: string): void`**

Loads a set of icons based on category and prefix.

#### **Usage:**

```ts
this.iconService.loadIcons("user"); // Only loads the category, no prefix
```

```ts
this.iconService.loadIcons("system", "fa"); // Loads specific prefix within category
```

---

### **2. `addIcon(category: string, prefix: string, name: string, svg: string): void`**

Adds a single icon dynamically to a specified category and prefix.

#### **Usage:**

```ts
this.iconService.addIcon("user", "fa", "settings", "<svg>...</svg>");
// 'fa' is now dynamically added under 'user'
```

---

### **3. `addIcons(category: string, prefix: string, ...icons: IconDefinition[]): void`**

Adds multiple icons at once to a category and prefix.

#### **Usage:**

```ts
this.iconService.addIcons("custom", "fa", ...this.customIcons);
```

---

### **4. `addIconPacks(category: string, prefix: string, iconPack: IconDefinition[]): void`**

Adds an array of icons to a category and prefix in bulk.

#### **Usage:**

```ts
this.iconService.addIconPacks("social", "fa", [...this.userIcons, ...this.systemIcons]);
```

---

### **5. `getIcon(category: string, prefix: string, name: string): string | null`**

Retrieves the SVG content of an icon.

#### **Usage:**

```ts
this.iconService.getIcon("user", "fa", "settings"); // Returns the icon
```

```ts
this.iconService.getIcon("user", "wrong-prefix", "settings"); // Returns null
```

---

## **Component Usage**

The `<app-icon>` component is used to display icons dynamically by specifying their category, prefix, and name.

### **Example Usage:**

```html
<app-icon [category]="'social'" [prefix]="'sm'" [name]="'star'"></app-icon>
<app-icon [category]="'system'" [prefix]="'sm'" [name]="'search'"></app-icon>
<app-icon [category]="'user'" [prefix]="'fw'" [name]="'home'"></app-icon>
```

```html
<app-icon category="system" prefix="fa" name="settings" [containerStyle]="{ width: '48px', height: '48px', color: 'red' }"> </app-icon>

<app-icon category="social" prefix="fa" name="search" containerClass="rounded-icon" [containerStyle]="{ backgroundColor: 'lightgray', padding: '8px' }"> </app-icon>
```

```css
.rounded-icon {
  border-radius: 50%;
  width: 36px;
  height: 36px;
}
```

---

## **Internal Structure**

### **Icon Data Structure**

The icon data is stored in an object structure as follows:

```ts
const ICONS: Record<string, Record<string, Record<string, string>>> = {
  user: {
    fa: {
      settings: "<svg>...</svg>",
      home: "<svg>...</svg>",
    },
  },
  system: {
    sm: {
      search: "<svg>...</svg>",
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
