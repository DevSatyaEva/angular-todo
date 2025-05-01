import { CssVariables } from './css-variables';

export interface IconConfig {
  stroke?: string; // ---------------->> Default stroke color of the icon
  fill?: string; // ---------------->> Default fill color of the icon
  hoverStroke?: string; // ---------------->> Stroke color on hover
  hoverFill?: string; // ---------------->> Fill color on hover
  activeStroke?: string; // ---------------->> Stroke color when active
  activeFill?: string; // ---------------->> Fill color when active
  disabledStroke?: string; // ---------------->> Stroke color when disabled
  disabledFill?: string; // ---------------->> Fill color when disabled

  hoverScale?: number; // ---------------->> Scale factor on hover (e.g., 1.1)
  activeScale?: number; // ---------------->> Scale factor when active (e.g., 1.2)
  disabledScale?: number; // ---------------->> Scale factor when disabled (e.g., 0.8)

  height?: string; // ---------------->> Height of the icon (e.g., '24px', '1rem')
  width?: string; // ---------------->> Width of the icon
  strokeWidth?: string; // ---------------->> Stroke thickness (e.g., '1.5')
  transition?: string; // ---------------->> Transition effect (e.g., 'all 0.3s ease')

  viewBox?: string; // ---------------->> SVG viewBox override
  role?: string; // ---------------->> ARIA role (e.g., 'img', 'presentation')
  ariaLabel?: string; // ---------------->> ARIA label for screen readers
  tabIndex?: number; // ---------------->> Keyboard tab navigation index
  customClass?: string; // ---------------->> Custom CSS class(es)
  parentSelector?: string;
}

export const IconConfigKeys = {
  DEFAULT: 'default',
  TEST: 'test',
  DRAWING_BOARD: 'drawingBoard',
  CUSTOM_DESIGN: 'customDesigns',
  COUPLER_CONFIG: 'couplerConfig',
} as const;

export type IconConfigKey = typeof IconConfigKeys[keyof typeof IconConfigKeys];

export const ICON_CONFIG_REGISTRY: Partial<Record<IconConfigKey, IconConfig>> = {
  [IconConfigKeys.DEFAULT]: {
    stroke: CssVariables.NONE,
    fill: CssVariables.NONE,
    hoverStroke: CssVariables.NONE,
    hoverFill: CssVariables.NONE,
    activeStroke: CssVariables.NONE,
    activeFill: CssVariables.NONE,
    disabledStroke: CssVariables.NONE,
    disabledFill: CssVariables.NONE,
  },
  [IconConfigKeys.TEST]: {
    stroke: CssVariables.COLOR_4,
    fill: CssVariables.COLOR_4,
    hoverStroke: CssVariables.COLOR_3,
    hoverFill: CssVariables.COLOR_4,
    activeStroke: CssVariables.COLOR_5,
    activeFill: CssVariables.COLOR_6,
    disabledStroke: CssVariables.COLOR_7,
    disabledFill: CssVariables.COLOR_8,
  },
  [IconConfigKeys.DRAWING_BOARD]: {
    stroke: CssVariables.SVG_DRAWING_BOARD,
    activeStroke: CssVariables.COLOR_1,
    transition: 'all 0.3s ease',
    parentSelector: '.menu-item',
  },
  [IconConfigKeys.CUSTOM_DESIGN]: {
    fill: CssVariables.SVG_DRAWING_BOARD,
    activeFill: CssVariables.COLOR_1,
    transition: 'all 0.3s ease',
    parentSelector: '.menu-item',
  },
  [IconConfigKeys.COUPLER_CONFIG]: {
    stroke: CssVariables.SVG_DRAWING_BOARD,
    fill: CssVariables.SVG_DRAWING_BOARD,
    activeFill: CssVariables.COLOR_1,
    activeStroke: CssVariables.COLOR_1,
    transition: 'all 0.3s ease',
    parentSelector: '.menu-item',
  },
};
