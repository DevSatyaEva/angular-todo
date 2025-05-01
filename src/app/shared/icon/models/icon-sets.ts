import { DESIGN_ICONS } from '../utils/design-icons';
import { MULLION_ICONS } from '../utils/mullion-icons';
import { IconCategory, IconCategoryType, IconPrefixType } from './icon.model';

export const ICON_SETS: Partial<
  Record<
    IconCategoryType,
    Partial<Record<IconPrefixType, Record<string, string>>>
  >
> = {
  [IconCategory.MULLION]: MULLION_ICONS,
  [IconCategory.DESIGN]: DESIGN_ICONS,
};
