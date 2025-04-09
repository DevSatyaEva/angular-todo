import { IconPrefix, IconPrefixType } from '../models/icon.model';

export const dropdownIconKeys = {
  COUPLER_DROPDOWN: 'couplerDropdown',
  CUSTOM_DROPDOWN: 'customDropdown',
  DESIGN_DROPDOWN: 'designDropdown',
  MULLION_DROPDOWN: 'mullionDropdown',
  OPENING_DESIGN_DROPDOWN: 'openingDesignDropdown',
} as const;

export type IconKey = typeof dropdownIconKeys[keyof typeof dropdownIconKeys];

export const DROPDOWN_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.DROPDOWN]: {
    [dropdownIconKeys.COUPLER_DROPDOWN]: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22">
              <g transform="translate(-22 -242)">
                <g transform="translate(22 242)" class="cls-2" fill="none" stroke-width="1.5">
                  <path d="M1,0H7A0,0,0,0,1,7,0V21a1,1,0,0,1-1,1H1a1,1,0,0,1-1-1V1A1,1,0,0,1,1,0Z" stroke="none" />
                  <path
                    d="M1,.75H5.5a.75.75,0,0,1,.75.75V21a.25.25,0,0,1-.25.25H1A.25.25,0,0,1,.75,21V1A.25.25,0,0,1,1,.75Z"
                    fill="none"
                  />
                </g>
                <g transform="translate(31.375 242)" fill="none">
                  <path d="M0,0H12.625V9H0Z" stroke="none" />
                  <path
                    d="M 1.5 1.5 L 1.5 7.5 L 11.125 7.5 L 11.125 1.5 L 1.5 1.5 M 0 0 L 12.625 0 L 12.625 9 L 0 9 L 0 0 Z"
                    stroke="none"
                    class="cls-1"
                  />
                </g>
                <g transform="translate(28 242)" class="cls-2" fill="none" stroke-width="1.2">
                  <rect width="5" height="9" stroke="none" />
                  <rect x="0.6" y="0.6" width="3.8" height="7.8" fill="none" />
                </g>
              </g>
            </svg>`,
    [dropdownIconKeys.CUSTOM_DROPDOWN]: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="25" viewBox="0 0 19 25" fill="none">
              <path
                d="M6.45312 9.94238V12.6311H7.95313V9.94238H10.7553V8.44238H7.95312V5.64014H6.45312V8.44238H3.22656V9.94238H6.45312Z"
                class="cls-1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.0864 11.3451V7.2932C13.0864 4.0937 10.4927 1.5 7.2932 1.5C4.0937 1.5 1.5 4.0937 1.5 7.2932V19.7545H6.31163C6.48418 20.2883 6.7244 20.7916 7.02216 21.2545H0V7.2932C0 3.26528 3.26528 0 7.2932 0C11.3211 0 14.5864 3.26528 14.5864 7.2932V11.6754C14.1095 11.5084 13.607 11.3958 13.0864 11.3451Z"
                class="cls-1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M14.5864 11.6754C14.1095 11.5084 13.607 11.3958 13.0864 11.3451V7.2932C13.0864 4.0937 10.4927 1.5 7.2932 1.5C4.0937 1.5 1.5 4.0937 1.5 7.2932V19.7545H6.31163C6.48418 20.2883 6.7244 20.7916 7.02216 21.2545H0V7.2932C0 3.26528 3.26528 0 7.2932 0C11.3211 0 14.5864 3.26528 14.5864 7.2932V11.6754Z"
                class="cls-1"
              />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12.4532 22.7209C15.1888 22.7209 17.4064 20.5033 17.4064 17.7677C17.4064 15.0321 15.1888 12.8145 12.4532 12.8145C9.71763 12.8145 7.5 15.0321 7.5 17.7677C7.5 20.5033 9.71763 22.7209 12.4532 22.7209ZM12.4532 24.2209C16.0172 24.2209 18.9064 21.3317 18.9064 17.7677C18.9064 14.2037 16.0172 11.3145 12.4532 11.3145C8.8892 11.3145 6 14.2037 6 17.7677C6 21.3317 8.8892 24.2209 12.4532 24.2209Z"
                class="cls-1"
              />
              <path
                d="M12.0586 18.3179V20.3145H13.5586V18.3179H15.5V16.8179H13.5586V14.8145H12.0586V16.8179H10V18.3179H12.0586Z"
                class="cls-1"
              />
            </svg>`,
    [dropdownIconKeys.DESIGN_DROPDOWN]: `<svg xmlns="http://www.w3.org/2000/svg" width="17" height="23" viewBox="0 0 17 23">
              <g transform="translate(-127.993 -321.023)">
                <g transform="translate(127.993 321.023)" class="cls-2" fill="none" stroke-width="1.5">
                  <rect width="17" height="23" rx="1" stroke="none" />
                  <rect x="0.75" y="0.75" width="15.5" height="21.5" rx="0.25" fill="none" />
                </g>
                <path
                  d="M116.487,235.4l14.264-9.88-14.264-10.37"
                  class="cls-2"
                  transform="translate(12.983 107.144)"
                  fill="none"
                  stroke-width="1"
                  stroke-dasharray="3 2"
                />
                <rect width="1" height="5" transform="translate(142.993 332.023)" class="cls-1" />
              </g>
            </svg>`,
    [dropdownIconKeys.MULLION_DROPDOWN]: `<svg xmlns="http://www.w3.org/2000/svg" width="19" height="22" viewBox="0 0 19 22">
              <g transform="translate(-21 -139)">
                <g transform="translate(21 139)" class="cls-2" fill="none" stroke-width="1.5">
                  <rect width="7" height="22" rx="0.7" stroke="none" />
                  <rect x="0.75" y="0.75" width="5.5" height="20.5" rx="0.05" fill="none" />
                </g>
                <g transform="translate(33 139)" class="cls-2" fill="none" stroke-width="1.5">
                  <rect width="7" height="22" rx="0.7" stroke="none" />
                  <rect x="0.75" y="0.75" width="5.5" height="20.5" rx="0.05" fill="none" />
                </g>
              </g>
            </svg>`,
    [dropdownIconKeys.OPENING_DESIGN_DROPDOWN]: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g transform="translate(-18.5 -367.5)">
                <g transform="translate(20 369)" fill="none" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21,0,0,6V21H21Z" stroke="none" />
                  <path
                    d="M 21 -1.9073486328125e-06 L -1.9073486328125e-06 5.999999046325684 L -1.9073486328125e-06 21 L 21 21 L 21 -1.9073486328125e-06 M 20.99990463256836 -1.50001335144043 C 21.32226181030273 -1.50001335144043 21.64003944396973 -1.396095275878906 21.90328979492188 -1.197521209716797 C 22.2790584564209 -0.9140815734863281 22.5 -0.4706916809082031 22.5 -1.9073486328125e-06 L 22.5 21 C 22.5 21.82842826843262 21.82842826843262 22.5 21 22.5 L -1.9073486328125e-06 22.5 C -0.82843017578125 22.5 -1.500001907348633 21.82842826843262 -1.500001907348633 21 L -1.500001907348633 5.999999046325684 C -1.500001907348633 5.330279350280762 -1.0560302734375 4.74169921875 -0.4120807647705078 4.557708740234375 L 20.58791923522949 -1.442291259765625 C 20.72343635559082 -1.481008529663086 20.86212158203125 -1.50001335144043 20.99990463256836 -1.50001335144043 Z"
                    stroke="none"
                    class="cls-1"
                  />
                </g>
                <g transform="translate(21.131 370.669)" fill="none" stroke-linecap="square" stroke-linejoin="round">
                  <path d="M18.654,0,0,5.215V18.253H18.654Z" stroke="none" />
                  <path
                    d="M 17.15429878234863 1.976869583129883 L 1.499998092651367 6.353289604187012 L 1.499998092651367 16.7529239654541 L 17.15429878234863 16.7529239654541 L 17.15429878234863 1.976869583129883 M 18.65429878234863 3.814697265625e-06 L 18.65429878234863 18.2529239654541 L -1.9073486328125e-06 18.2529239654541 L -1.9073486328125e-06 5.215124130249023 L 18.65429878234863 3.814697265625e-06 Z"
                    stroke="none"
                    class="cls-1"
                  />
                </g>
              </g>
            </svg>`,
  },
};
