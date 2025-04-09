import { IconPrefix, IconPrefixType } from '../models/icon.model';

export const pivotIconKeys = {
  //kept these 2, for inside view of (pivotLeftOpenable) use the mirror images of the below 2.
  // For PivotRightOpenable,
  //a) for (arrowTowardsHandle && !viewHandleFromOutside) --> use pivotLeftOpenableArrowAwayOutside
  //b) for (!arrowTowardsHandle && !viewHandleFromOutside) --> use pivotLeftOpenableArrowTowardsOutside
  //for inside view of remaining 2 (PivotRightOpenable), use the mirror images of below (check the conditions properly) (2 svgs from a total of 8 (4+4))
  PIVOT_LEFT_OPENABLE_ARROW_AWAY_OUTSIDE: 'pivotLeftOpenableArrowAwayOutside',
  PIVOT_LEFT_OPENABLE_ARROW_TOWARDS_OUTSIDE: 'pivotLeftOpenableArrowTowardsOutside',

  //kept these 2, for inside view of (pivotTopOpenable) use the same below images i.e, use pivotTopOpenableArrowAwayOutside for (arrowTowardsHandle && !viewHandleFromOutside) and use pivotTopOpenableArrowTowardsOutside for (arrowTowardsHandle && !viewHandleFromOutside)
  //For pivotBottomOpenable
  // for (arrowTowardsHandle && !viewHandleFromOutside) and (!arrowTowardsHandle && viewHandleFromOutside) --> use vertical flip (mirror) image of pivotTopOpenableArrowAwayOutside
  //for (!arrowTowardsHandle && !viewHandleFromOutside) and (arrowTowardsHandle && viewHandleFromOutside)  --> use vertical flip image of pivotTopOpenableArrowTowardsOutside
  PIVOT_TOP_OPENABLE_ARROW_AWAY_OUTSIDE: 'pivotTopOpenableArrowAwayOutside',
  PIVOT_TOP_OPENABLE_ARROW_TOWARDS_OUTSIDE: 'pivotTopOpenableArrowTowardsOutside',
} as const;

export type IconKey = typeof pivotIconKeys[keyof typeof pivotIconKeys];

export const PIVOT_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.PIVOT]: {
    [pivotIconKeys.PIVOT_LEFT_OPENABLE_ARROW_AWAY_OUTSIDE]: `<svg
                        *ngIf="!arrowTowardsHandle && viewHandleFromOutside"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="50"
                        viewBox="0 0 40 50"
                      >
                        <g id="Group_37584" data-name="Group 37584" transform="translate(-0.001)">
                          <g id="Path_77877" data-name="Path 77877" transform="translate(0.001)">
                            <path id="Path_99543" data-name="Path 99543" d="M39.25,49.25H.75V.75h38.5Z" fill="#fff" />
                            <path
                              id="Path_99544"
                              data-name="Path 99544"
                              d="M1.5,1.5v47h37V1.5H1.5M0,0H40V50H0Z"
                              fill="#96a0b5"
                            />
                          </g>
                          <g id="Path_77878" data-name="Path 77878" transform="translate(4.001 4)">
                            <path id="Path_99545" data-name="Path 99545" d="M31.25,41.25H.75V.75h30.5Z" fill="#fff" />
                            <path
                              id="Path_99546"
                              data-name="Path 99546"
                              d="M1.5,1.5v39h29V1.5H1.5M0,0H32V42H0Z"
                              fill="#96a0b5"
                            />
                          </g>
                          <rect
                            id="Rectangle_9989"
                            data-name="Rectangle 9989"
                            width="3.746"
                            height="7"
                            transform="translate(1.534 22)"
                            fill="#96a0b5"
                          />
                          <rect
                            id="Rectangle_9990"
                            data-name="Rectangle 9990"
                            width="3"
                            height="11"
                            transform="translate(5.001 22)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_77879"
                            data-name="Path 77879"
                            d="M18.2,0,0,35.725"
                            transform="translate(35.499 37.003) rotate(153)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                            stroke-dasharray="3 2"
                          />
                          <path
                            id="Path_77880"
                            data-name="Path 77880"
                            d="M19.4,23.567,4.2,4.233"
                            transform="translate(14.899 0.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                            stroke-dasharray="3 2"
                          />
                          <path
                            id="Path_77881"
                            data-name="Path 77881"
                            d="M19.266.767l-15.334,20"
                            transform="translate(15.304 24.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                            stroke-dasharray="3 2"
                          />
                          <line
                            id="Line_1820"
                            data-name="Line 1820"
                            x1="16"
                            y2="21"
                            transform="translate(3.501 4.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                          />
                          <path
                            id="Path_77882"
                            data-name="Path 77882"
                            d="M15,20,0,0"
                            transform="translate(3.501 25.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                          />
                        </g>
                      </svg>`,
    [pivotIconKeys.PIVOT_LEFT_OPENABLE_ARROW_TOWARDS_OUTSIDE]: `<svg
                        *ngIf="arrowTowardsHandle && viewHandleFromOutside"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="50"
                        viewBox="0 0 40 50"
                      >
                        <g id="Group_37584" data-name="Group 37584" transform="translate(-0.001)">
                          <g id="Path_77877" data-name="Path 77877" transform="translate(0.001)">
                            <path id="Path_99543" data-name="Path 99543" d="M39.25,49.25H.75V.75h38.5Z" fill="#fff" />
                            <path
                              id="Path_99544"
                              data-name="Path 99544"
                              d="M1.5,1.5v47h37V1.5H1.5M0,0H40V50H0Z"
                              fill="#96a0b5"
                            />
                          </g>
                          <g id="Path_77878" data-name="Path 77878" transform="translate(4.001 4)">
                            <path id="Path_99545" data-name="Path 99545" d="M31.25,41.25H.75V.75h30.5Z" fill="#fff" />
                            <path
                              id="Path_99546"
                              data-name="Path 99546"
                              d="M1.5,1.5v39h29V1.5H1.5M0,0H32V42H0Z"
                              fill="#96a0b5"
                            />
                          </g>
                          <rect
                            id="Rectangle_9989"
                            data-name="Rectangle 9989"
                            width="3.746"
                            height="7"
                            transform="translate(1.534 22)"
                            fill="#96a0b5"
                          />
                          <rect
                            id="Rectangle_9990"
                            data-name="Rectangle 9990"
                            width="3"
                            height="11"
                            transform="translate(5.001 22)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_77879"
                            data-name="Path 77879"
                            d="M18.2,0,0,35.725"
                            transform="translate(3.064 12.997) rotate(-27)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                            stroke-dasharray="3 2"
                          />
                          <path
                            id="Path_77880"
                            data-name="Path 77880"
                            d="M19.4,23.567,4.2,4.233"
                            transform="translate(23.664 49.5) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                            stroke-dasharray="3 2"
                          />
                          <path
                            id="Path_77881"
                            data-name="Path 77881"
                            d="M19.266.767l-15.334,20"
                            transform="translate(23.259 25.5) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                            stroke-dasharray="3 2"
                          />
                          <line
                            id="Line_1820"
                            data-name="Line 1820"
                            x1="16"
                            y2="21"
                            transform="translate(35.062 45.5) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                          />
                          <path
                            id="Path_77882"
                            data-name="Path 77882"
                            d="M15,20,0,0"
                            transform="translate(35.062 24.5) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                          />
                        </g>
                      </svg>`,
    [pivotIconKeys.PIVOT_TOP_OPENABLE_ARROW_AWAY_OUTSIDE]: `<svg
                        *ngIf="!arrowTowardsHandle && viewHandleFromOutside"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="50"
                        viewBox="0 0 40 50"
                      >
                        <g id="Group_37585" data-name="Group 37585" transform="translate(-0.001)">
                          <g id="Path_77877" data-name="Path 77877" transform="translate(0.001)">
                            <path id="Path_99547" data-name="Path 99547" d="M39.25,49.25H.75V.75h38.5Z" fill="#fff" />
                            <path
                              id="Path_99548"
                              data-name="Path 99548"
                              d="M1.5,1.5v47h37V1.5H1.5M0,0H40V50H0Z"
                              fill="#96a0b5"
                            />
                          </g>
                          <g id="Path_77878" data-name="Path 77878" transform="translate(4.001 4)">
                            <path id="Path_99549" data-name="Path 99549" d="M31.25,41.25H.75V.75h30.5Z" fill="#fff" />
                            <path
                              id="Path_99550"
                              data-name="Path 99550"
                              d="M1.5,1.5v39h29V1.5H1.5M0,0H32V42H0Z"
                              fill="#96a0b5"
                            />
                          </g>
                          <rect
                            id="Rectangle_9989"
                            data-name="Rectangle 9989"
                            width="3.746"
                            height="7"
                            transform="translate(24.001 45.5) rotate(90)"
                            fill="#96a0b5"
                          />
                          <rect
                            id="Rectangle_9990"
                            data-name="Rectangle 9990"
                            width="3"
                            height="11"
                            transform="translate(17.001 45) rotate(-90)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_77880"
                            data-name="Path 77880"
                            d="M19.6,24.238l-15.4-20"
                            transform="translate(15.899 0.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                            stroke-dasharray="3 2"
                          />
                          <path
                            id="Path_77881"
                            data-name="Path 77881"
                            d="M19.328-.587l-15.4,20.8"
                            transform="translate(0.835 5.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                            stroke-dasharray="3 2"
                          />
                          <line
                            id="Line_1820"
                            data-name="Line 1820"
                            x1="15"
                            y2="20"
                            transform="translate(20.5 25.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                          />
                          <path
                            id="Path_77882"
                            data-name="Path 77882"
                            d="M15,20,0,0"
                            transform="translate(4.501 25.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_1821"
                            data-name="Line 1821"
                            x2="30"
                            transform="translate(4.5 25.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                            stroke-dasharray="3 2"
                          />
                        </g>
                      </svg>`,
    [pivotIconKeys.PIVOT_TOP_OPENABLE_ARROW_TOWARDS_OUTSIDE]: `<svg
                        *ngIf="arrowTowardsHandle && viewHandleFromOutside"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="50"
                        viewBox="0 0 40 50"
                      >
                        <g id="Group_37585" data-name="Group 37585" transform="translate(-0.001)">
                          <g id="Path_77877" data-name="Path 77877" transform="translate(0.001)">
                            <path id="Path_99547" data-name="Path 99547" d="M39.25,49.25H.75V.75h38.5Z" fill="#fff" />
                            <path
                              id="Path_99548"
                              data-name="Path 99548"
                              d="M1.5,1.5v47h37V1.5H1.5M0,0H40V50H0Z"
                              fill="#96a0b5"
                            />
                          </g>
                          <g id="Path_77878" data-name="Path 77878" transform="translate(4.001 4)">
                            <path id="Path_99549" data-name="Path 99549" d="M31.25,41.25H.75V.75h30.5Z" fill="#fff" />
                            <path
                              id="Path_99550"
                              data-name="Path 99550"
                              d="M1.5,1.5v39h29V1.5H1.5M0,0H32V42H0Z"
                              fill="#96a0b5"
                            />
                          </g>
                          <rect
                            id="Rectangle_9989"
                            data-name="Rectangle 9989"
                            width="3.746"
                            height="7"
                            transform="translate(24.001 45.5) rotate(90)"
                            fill="#96a0b5"
                          />
                          <rect
                            id="Rectangle_9990"
                            data-name="Rectangle 9990"
                            width="3"
                            height="11"
                            transform="translate(17.001 45) rotate(-90)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_77880"
                            data-name="Path 77880"
                            d="M19.6,24.238l-15.4-20"
                            transform="translate(24.101 49.738) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                            stroke-dasharray="3 2"
                          />
                          <path
                            id="Path_77881"
                            data-name="Path 77881"
                            d="M19.328-.587l-15.4,20.8"
                            transform="translate(39.165 44.738) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                            stroke-dasharray="3 2"
                          />
                          <line
                            id="Line_1820"
                            data-name="Line 1820"
                            x1="15"
                            y2="20"
                            transform="translate(19.5 24.738) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                          />
                          <path
                            id="Path_77882"
                            data-name="Path 77882"
                            d="M15,20,0,0"
                            transform="translate(35.499 24.738) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                          />
                          <line
                            id="Line_1821"
                            data-name="Line 1821"
                            x2="30"
                            transform="translate(35.5 24.738) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.5"
                            stroke-dasharray="3 2"
                          />
                        </g>
                      </svg>`,
  },
};
