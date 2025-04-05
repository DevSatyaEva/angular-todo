export type IconRegistry = Partial<{
  [category in IconCategoryType]: Partial<{
    [prefix in IconPrefixType]: {
      [name: string]: IconDefinition;
    };
  }>;
}>;

export interface IconDefinition {
  iconName: string;
  icon: string;
}

export const IconCategory = {
  MULLION: 'mullion',
} as const;

export type IconCategoryType = (typeof IconCategory)[keyof typeof IconCategory];

export const IconPrefix = {
  MULLION_DROPDOWN: 'mullionDropdown',
  DIVIDER: 'divider',
} as const;

export type IconPrefixType = (typeof IconPrefix)[keyof typeof IconPrefix];
