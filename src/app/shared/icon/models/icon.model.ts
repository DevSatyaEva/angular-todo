import { IconCategory } from './icon-category';
import { IconPrefix } from './icon-prefix';

export type IconCategoryType = typeof IconCategory[keyof typeof IconCategory];
export type IconPrefixType = typeof IconPrefix[keyof typeof IconPrefix];
export type IconRegistry = Partial<
  {
    [category in IconCategoryType]: Partial<
      {
        [prefix in IconPrefixType]: {
          [name: string]: IconDefinition;
        };
      }
    >;
  }
>;
export interface IconDefinition {
  iconName: string;
  icon: string;
}
