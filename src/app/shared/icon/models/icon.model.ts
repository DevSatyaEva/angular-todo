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
  WALL_DESIGN: 'wallDesign',
  SHEET_BOUNDED: 'sheetBounded',
  POCKET_DESIGN: 'pocketDesign',
  TILT_DESIGN: 'tiltDesign',
  MULLION: 'mullion',
  ADD_ONS: 'addOns',
  COUPLER: 'coupler',
  CUSTOM: 'custom',
  DESIGN: 'design',
  LIFT_AND_SLIDE: 'liftAndSlide',
  MONORAIL: 'monorail',
  PARTITION: 'partition',
  PIVOT: 'pivot',
  PLEATED_AND_PULL_DOWN_MESH: 'pleatedAndPullDownMesh',
  ZIGZAG_DESIGN: 'zigzagDesign',
  SASH_DESIGN: 'twinSashDesign',
  SLIDING: 'sliding',
  OTHER_ICONS: 'otherIcons',
} as const;

export type IconCategoryType = (typeof IconCategory)[keyof typeof IconCategory];

export const IconPrefix = {
  MULLION_DROPDOWN: 'mullionDropdown',
  DIVIDER: 'divider',
  STICK_CURTAIN_WALL_DESIGN: 'stickCurtainWallDesign',
  SLIDE_AND_FOLD: 'slideAndFold',
  SHEET_BOUNDED_PIVOT: 'sheetBoundedPivot',
  SHEET_BOUNDED_OPENABLE: 'sheetBoundedOpenable',
  TWIN_SASH: 'twinSash',
  ONLY_MESH_SASH: 'onlyMeshSash',
  POCKET_SLIDING: 'pocketSliding',
  POCKET_SYNCHRONIZE_SLIDING: 'pocketSynchronizeSliding',
  POCKET_TELESCOPIC_SLIDING: 'pocketTelescopicSliding',
  TILT: 'tilt',
  ADD_ONS: 'addOns',
  ADD_ON_MESH_SASH: 'addOnMeshSash',
  COUPLING: 'coupling',
  CUSTOM_DESIGNS: 'customDesigns',
  OPENABLE_DESIGNS: 'openableDesigns',
  STEEL_OPENABLE: 'steelOpenable',
  LIFT_AND_SLIDE: 'liftAndSlide',
  MONORAIL: 'monorail',
  MONORAIL_LIFT_AND_SLIDE: 'monorailLiftAndSlide',
  CUSTOM_SECTIONING: 'customSectioning',
  PARTITION: 'partition',
  PIVOT: 'pivot',
  PLEATED_AND_PULL_DOWN_MESH: 'pleatedAndPullDownMesh',
  ZIGZAG_SIDE_OPENING_SLIDING: 'zigzagSideOpeningSliding',
  ZIGZAG_CENTER_OPENING_SLIDING: 'zigzagCenterOpeningSliding',
  SLIDING_DESIGN: 'slidingDesign',
  VERTICAL_SLIDING_DESIGN: 'verticalSlidingDesign',
  TELESCOPIC_SLIDING_DESIGN: 'telescopicSlidingDesign',
  SYNCHRONIZE_SLIDING_DESIGN: 'synchronizeSlidingDesign',
  INVISIBLE_SLIDING: 'invisibleSliding',
  DROPDOWN: 'dropdown',
  UPLOAD: 'upload',
} as const;

export type IconPrefixType = (typeof IconPrefix)[keyof typeof IconPrefix];
