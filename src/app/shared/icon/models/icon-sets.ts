import { MULLION_ICONS } from '../utils/mullion-icons';
import { IconCategory, IconCategoryType, IconPrefixType } from './icon.model';

export const ICON_SETS: Record<IconCategoryType, Record<IconPrefixType, Record<string, string>>> = {
  [IconCategory.MULLION]: MULLION_ICONS,
};
