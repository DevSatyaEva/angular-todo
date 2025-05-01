import { IconPrefix } from '../models/icon-prefix';
import { IconPrefixType } from '../models/icon.model';

export const sheetBoundedDesignIconKeys = {
  SHEET_BOUNDED_PIVOT_LEFT_OPENABLE: 'sheetBoundedPivotLeftOpenable',
  SHEET_BOUNDED_PIVOT_TOP_OPENABLE: 'sheetBoundedPivotTopOpenable',
  SHEET_BOUNDED_LEFT_OPENABLE: 'sheetBoundedLeftOpenable',
  SHEET_BOUNDED_FRENCH_OPENABLE: 'sheetBoundedFrenchOpenable',
} as const;

export type IconKey = typeof sheetBoundedDesignIconKeys[keyof typeof sheetBoundedDesignIconKeys];

export const SHEET_BOUNDED_DESIGN_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.SHEET_BOUNDED_PIVOT]: {
    [sheetBoundedDesignIconKeys.SHEET_BOUNDED_PIVOT_LEFT_OPENABLE]: `<svg width="40" height="50" viewBox="0 0 29 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_374_342)">
                          <rect width="29" height="38" fill="white" />
                          <path
                            d="M28.4375 37.6833L0.3125 37.6833L0.312497 0.316685L28.4375 0.316682L28.4375 37.6833Z"
                            stroke="#96A0B5"
                          />
                          <path
                            d="M15 38C15 23.1601 15 14.8399 15 1.43051e-06"
                            stroke="#96A0B5"
                            stroke-dasharray="2.5 1.67"
                          />
                          <path d="M15 37L0.999997 18.9472L15 0" stroke="#96A0B5" stroke-dasharray="2.5 1.67" />
                          <path d="M15 9.6533e-07L28 18.0528L15 37" stroke="#96A0B5" />
                          <path d="M24.3125 25.2786H26.8125V18.9452H24.3125V25.2786Z" fill="#96A0B5" />
                          <path d="M26.125 22.3333H28V15.9999H26.125V22.3333Z" fill="#96A0B5" />
                        </g>
                        <defs>
                          <clipPath id="clip0_374_342">
                            <rect width="29" height="38" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>`,
    [sheetBoundedDesignIconKeys.SHEET_BOUNDED_PIVOT_TOP_OPENABLE]: `<svg width="40" height="50" viewBox="0 0 29 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_374_317)">
                        <path d="M0 38L28.75 38L28.75 0L3.32207e-06 -2.5134e-06L0 38Z" fill="white" />
                        <path
                          d="M0.3125 37.6833L28.4375 37.6833L28.4375 0.316685L0.312503 0.316682L0.3125 37.6833Z"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M28.375 19C17.4403 19 11.3097 19 0.375 19"
                          stroke="#96A0B5"
                          stroke-dasharray="2.5 1.67"
                        />
                        <path d="M28.375 19L14.7134 1L0.375 19" stroke="#96A0B5" stroke-dasharray="2.5 1.67" />
                        <path d="M0.374999 19L14.0366 38L28.375 19" stroke="#96A0B5" />
                        <path
                          d="M12.0967 37.6875L12.0967 35.1875L18.43 35.1875L18.43 37.6875L12.0967 37.6875Z"
                          fill="#96A0B5"
                        />
                        <path d="M15.042 35.875L15.042 34L21.3753 34L21.3753 35.875L15.042 35.875Z" fill="#96A0B5" />
                      </g>
                      <defs>
                        <clipPath id="clip0_374_317">
                          <rect width="29" height="38" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>`,
  },
  [IconPrefix.SHEET_BOUNDED_OPENABLE]: {
    [sheetBoundedDesignIconKeys.SHEET_BOUNDED_LEFT_OPENABLE]: `<svg
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="50"
    viewBox="0 0 46 60"
  >
    <g id="Group_178891" data-name="Group 178891" transform="translate(-53 -776)">
      <g
        id="Rectangle_4467"
        data-name="Rectangle 4467"
        transform="translate(53 776)"
        fill="#fff"
        stroke="#96a0b5"
        stroke-width="1"
      >
        <rect width="46" height="60" stroke="none" />
        <rect x="0.5" y="0.5" width="45" height="59" fill="none" />
      </g>
      <path
        id="Path_20366"
        data-name="Path 20366"
        d="M116.487,271.661l43.433-27.572-43.433-28.938"
        transform="translate(-62.28 562.357)"
        fill="none"
        stroke="#96a0b5"
        stroke-width="1"
        stroke-dasharray="3 2"
      />
      <rect
        id="Rectangle_4469"
        data-name="Rectangle 4469"
        width="4"
        height="10"
        transform="translate(95 801)"
        fill="#96a0b5"
      />
      <rect
        id="Rectangle_9994"
        data-name="Rectangle 9994"
        width="3"
        height="10"
        transform="translate(93.1 805.65)"
        fill="#96a0b5"
      />
    </g>
  </svg>`,
    [sheetBoundedDesignIconKeys.SHEET_BOUNDED_FRENCH_OPENABLE]: `<svg xmlns="http://www.w3.org/2000/svg" width="53" height="50" viewBox="0 0 53 60">
  <g id="Group_178893" data-name="Group 178893" transform="translate(-200 -776)">
    <g
      id="Rectangle_4467"
      data-name="Rectangle 4467"
      transform="translate(200 776)"
      fill="#fff"
      stroke="#96a0b5"
      stroke-width="1"
    >
      <rect width="53" height="60" stroke="none" />
      <rect x="0.5" y="0.5" width="52" height="59" fill="none" />
    </g>
    <rect
      id="Rectangle_4469"
      data-name="Rectangle 4469"
      width="4"
      height="10"
      transform="translate(228.5 811) rotate(180)"
      fill="#96a0b5"
    />
    <line
      id="Line_1823"
      data-name="Line 1823"
      y1="59"
      transform="translate(226.5 776.5)"
      fill="none"
      stroke="#96a0b5"
      stroke-width="1"
    />
    <path
      id="Path_77903"
      data-name="Path 77903"
      d="M134.894,268.829l-24.457-28.664,24.457-28.528"
      transform="translate(116.832 565.871)"
      fill="none"
      stroke="#96a0b5"
      stroke-width="1"
      stroke-dasharray="3 2"
    />
    <path
      id="Path_77904"
      data-name="Path 77904"
      d="M110.437,268.829l24.457-28.664-24.457-28.528"
      transform="translate(90.718 565.871)"
      fill="none"
      stroke="#96a0b5"
      stroke-width="1"
      stroke-dasharray="3 2"
    />
    <rect
      id="Rectangle_73894"
      data-name="Rectangle 73894"
      width="3"
      height="10"
      transform="translate(227.5 805.762)"
      fill="#96a0b5"
    />
    <rect
      id="Rectangle_73895"
      data-name="Rectangle 73895"
      width="3"
      height="10"
      transform="translate(222.5 805.762)"
      fill="#96a0b5"
    />
  </g>
</svg>`,
  },
};
