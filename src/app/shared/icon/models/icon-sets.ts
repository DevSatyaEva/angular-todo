import { DESIGN_ICONS } from '../utils/design-icons';
import { MULLION_ICONS } from '../utils/mullion-icons';
import { SLIDING_DESIGN_ICONS } from '../utils/sliding-design-icons';
import { ZIGZAG_DESIGNS_ICONS } from '../utils/zigzag-design-icons';
import { IconCategoryType, IconPrefixType } from './icon.model';
import { ADD_ONS_ICONS } from '../utils/add-ons-icons';
import { COUPLER_ICONS } from '../utils/coupler-icons';
import { CUSTOM_ICONS } from '../utils/custom-icons';
import { LIFT_AND_SLIDE_ICONS } from '../utils/lift-and-slide-icons';
import { MONORAIL_ICONS } from '../utils/monorail-icons';
import { TILT_DESIGN_ICONS } from '../utils/tilt-design-icons';
import { POCKET_DESIGN_ICONS } from '../utils/pocket-design-icons';
import { SASH_DESIGN_ICONS } from '../utils/sash-design-icons';
import { SHEET_BOUNDED_DESIGN_ICONS } from '../utils/sheet-bounded-design.icons';
import { WALL_DESIGN_ICONS } from '../utils/wall-design-icons';
import { PARTITION_ICONS } from '../utils/partition-icons';
import { PIVOT_ICONS } from '../utils/pivot-icons';
import { PLEATED_AND_PULL_DOWN_MESH_ICONS } from '../utils/pleated-and-pull-down-mesh-icons';
import { OTHER_ICONS } from '../utils/other-icons';
import { IconCategory } from './icon-category';

export const ICON_SETS: Record<IconCategoryType, Partial<Record<IconPrefixType, Record<string, string>>>> = {
  [IconCategory.WALL_DESIGN]: WALL_DESIGN_ICONS,
  [IconCategory.SHEET_BOUNDED]: SHEET_BOUNDED_DESIGN_ICONS,
  [IconCategory.POCKET_DESIGN]: POCKET_DESIGN_ICONS,
  [IconCategory.TILT_DESIGN]: TILT_DESIGN_ICONS,
  [IconCategory.MULLION]: MULLION_ICONS,
  [IconCategory.ADD_ONS]: ADD_ONS_ICONS,
  [IconCategory.COUPLER]: COUPLER_ICONS,
  [IconCategory.CUSTOM]: CUSTOM_ICONS,
  [IconCategory.DESIGN]: DESIGN_ICONS,
  [IconCategory.LIFT_AND_SLIDE]: LIFT_AND_SLIDE_ICONS,
  [IconCategory.MONORAIL]: MONORAIL_ICONS,
  [IconCategory.PARTITION]: PARTITION_ICONS,
  [IconCategory.ZIGZAG_DESIGN]: ZIGZAG_DESIGNS_ICONS,
  [IconCategory.SASH_DESIGN]: SASH_DESIGN_ICONS,
  [IconCategory.SLIDING]: SLIDING_DESIGN_ICONS,
  [IconCategory.PIVOT]: PIVOT_ICONS,
  [IconCategory.PLEATED_AND_PULL_DOWN_MESH]: PLEATED_AND_PULL_DOWN_MESH_ICONS,
  [IconCategory.OTHER_ICONS]: OTHER_ICONS,
};
