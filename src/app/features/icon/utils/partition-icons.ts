import { IconPrefix, IconPrefixType } from '../models/icon.model';

export const partitionIconKeys = {
  PARTITION_FIXED_WINDOW: 'partitionFixedWindow',

  //the below 2 are outside view , for inside view use the mirror (flip ) images of these below 2 (total 4 svgs were present before)
  PARTITION_RIGHT_OPENABLE_ARROW_AWAY_OUTSIDE: 'partitionRightOpenableArrowAwayOutside',
  PARTITION_RIGHT_OPENABLE_ARROW_TOWARDS_OUTSIDE: 'partitionRightOpenableArrowTowardsOutside',

  //the below 2 are outside view , for inside view use the mirror (flip ) images of these below 2 (total 4 svgs were present before)
  PARTITION_LEFT_OPENABLE_ARROW_AWAY_OUTSIDE: 'partitionLeftOpenableArrowAwayOutside',
  PARTITION_LEFT_OPENABLE_ARROW_TOWARDS_OUTSIDE: 'partitionLeftOpenableArrowTowardsOutside',

  //NOTE : partitionLeftOpenableArrowAwayOutside is the mirror image of partitionRightOpenableArrowAwayOutside and is the mirror image of partitionRightOpenableArrowTowardsOutside
  //so we can essentially remove partitionLeftOpenableArrowAwayOutside and partitionLeftOpenableArrowTowardsOutside and use only partitionRightOpenableArrowAwayOutside, partitionRightOpenableArrowTowardsOutside
  //By using the above 2 svgs with properties, we can make 8 svgs out of them

  //the below 2 are outside view , for inside view use the mirror (flip ) images of these below 2 (total 4 svgs were present before)
  PARTITION_FRENCH_OPENABLE_ARROW_TOWARDS_OUTSIDE: 'partitionFrenchOpenableArrowTowardsOutside',
  PARTITION_FRENCH_OPENABLE_ARROW_AWAY_OUTSIDE: 'partitionFrenchOpenableArrowAwayOutside',
} as const;

export type IconKey = typeof partitionIconKeys[keyof typeof partitionIconKeys];

export const PARTITION_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.PARTITION]: {
    [partitionIconKeys.PARTITION_FIXED_WINDOW]: `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink"
                        width="40"
                        height="50"
                        viewBox="0 0 40 50"
                      >
                        <g id="Group_14380" data-name="Group 14380" transform="translate(-104 -248)">
                          <g
                            id="Rectangle_4467"
                            data-name="Rectangle 4467"
                            transform="translate(104 248)"
                            fill="#fff"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                          >
                            <rect width="40" height="50" stroke="none" />
                            <rect x="0.5" y="0.5" width="39" height="49" fill="none" />
                          </g>
                          <g
                            id="Rectangle_4468"
                            data-name="Rectangle 4468"
                            transform="translate(108 251.846)"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                            fill="none"
                          >
                            <rect width="32" height="42.308" stroke="none" />
                            <rect x="0.5" y="0.5" width="31" height="41.308" fill="none" />
                          </g>
                        </g>
                      </svg>`,
    [partitionIconKeys.PARTITION_RIGHT_OPENABLE_ARROW_AWAY_OUTSIDE]: `<svg
                        *ngIf="!arrowTowardsHandle && viewHandleFromOutside"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="50"
                        viewBox="0 0 46 60"
                      >
                        <g id="Group_37587" data-name="Group 37587" transform="translate(-0.498 0.231)">
                          <g id="Group_14072" data-name="Group 14072" transform="translate(0.216 -0.498)">
                            <g
                              id="Rectangle_4467"
                              data-name="Rectangle 4467"
                              transform="translate(0.282 0.267)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1"
                            >
                              <rect width="46" height="60" stroke="none" />
                              <rect x="0.5" y="0.5" width="45" height="59" fill="none" />
                            </g>
                            <g
                              id="Rectangle_4468"
                              data-name="Rectangle 4468"
                              transform="translate(5.282 5.267)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1"
                            >
                              <rect width="36" height="50" stroke="none" />
                              <rect x="0.5" y="0.5" width="35" height="49" fill="none" />
                            </g>
                            <path
                              id="Path_20366"
                              data-name="Path 20366"
                              d="M116.487,260.085l30.555-21.924-30.555-23.01"
                              transform="translate(154.958 267.535) rotate(180)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                              stroke-dasharray="3 2"
                            />
                            <rect
                              id="Rectangle_4469"
                              data-name="Rectangle 4469"
                              width="6"
                              height="10"
                              transform="translate(40.282 25.267)"
                              fill="#96a0b5"
                            />
                            <rect
                              id="Rectangle_9994"
                              data-name="Rectangle 9994"
                              width="3"
                              height="10"
                              transform="translate(37.382 30.267)"
                              fill="#96a0b5"
                            />
                          </g>
                        </g>
                      </svg>`,
    [partitionIconKeys.PARTITION_RIGHT_OPENABLE_ARROW_TOWARDS_OUTSIDE]: `<svg
                        *ngIf="arrowTowardsHandle && viewHandleFromOutside"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="50"
                        viewBox="0 0 46 60"
                      >
                        <g id="Group_37587" data-name="Group 37587" transform="translate(-0.498 0.231)">
                          <g id="Group_14072" data-name="Group 14072" transform="translate(0.216 -0.498)">
                            <g
                              id="Rectangle_4467"
                              data-name="Rectangle 4467"
                              transform="translate(0.282 0.267)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1"
                            >
                              <rect width="46" height="60" stroke="none" />
                              <rect x="0.5" y="0.5" width="45" height="59" fill="none" />
                            </g>
                            <g
                              id="Rectangle_4468"
                              data-name="Rectangle 4468"
                              transform="translate(5.282 5.267)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1"
                            >
                              <rect width="36" height="50" stroke="none" />
                              <rect x="0.5" y="0.5" width="35" height="49" fill="none" />
                            </g>
                            <path
                              id="Path_20366"
                              data-name="Path 20366"
                              d="M116.487,260.085l30.555-21.924-30.555-23.01"
                              transform="translate(-108.571 -207.701)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                              stroke-dasharray="3 2"
                            />
                            <rect
                              id="Rectangle_4469"
                              data-name="Rectangle 4469"
                              width="6"
                              height="10"
                              transform="translate(40.282 25.267)"
                              fill="#96a0b5"
                            />
                            <rect
                              id="Rectangle_9994"
                              data-name="Rectangle 9994"
                              width="3"
                              height="10"
                              transform="translate(37.382 30.267)"
                              fill="#96a0b5"
                            />
                          </g>
                        </g>
                      </svg>`,
    [partitionIconKeys.PARTITION_LEFT_OPENABLE_ARROW_AWAY_OUTSIDE]: `<svg
                        *ngIf="!arrowTowardsHandle && viewHandleFromOutside"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="50"
                        viewBox="0 0 46 60"
                      >
                        <g id="Group_37587" data-name="Group 37587" transform="translate(-0.498 0.231)">
                          <g id="Group_14072" data-name="Group 14072" transform="translate(0.216 -0.498)">
                            <g
                              id="Rectangle_4467"
                              data-name="Rectangle 4467"
                              transform="translate(0.282 0.267)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1"
                            >
                              <rect width="46" height="60" stroke="none" />
                              <rect x="0.5" y="0.5" width="45" height="59" fill="none" />
                            </g>
                            <g
                              id="Rectangle_4468"
                              data-name="Rectangle 4468"
                              transform="translate(5.282 5.267)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1"
                            >
                              <rect width="36" height="50" stroke="none" />
                              <rect x="0.5" y="0.5" width="35" height="49" fill="none" />
                            </g>
                            <path
                              id="Path_20366"
                              data-name="Path 20366"
                              d="M116.487,260.085l30.555-21.924-30.555-23.01"
                              transform="translate(-108.571 -207.701)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                              stroke-dasharray="3 2"
                            />
                            <rect
                              id="Rectangle_4469"
                              data-name="Rectangle 4469"
                              width="6"
                              height="10"
                              transform="translate(0.282 25.267)"
                              fill="#96a0b5"
                            />
                            <rect
                              id="Rectangle_9994"
                              data-name="Rectangle 9994"
                              width="3"
                              height="10"
                              transform="translate(6.18 30.267)"
                              fill="#96a0b5"
                            />
                          </g>
                        </g>
                      </svg>`,
    [partitionIconKeys.PARTITION_LEFT_OPENABLE_ARROW_TOWARDS_OUTSIDE]: `<svg
                        *ngIf="arrowTowardsHandle && viewHandleFromOutside"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="50"
                        viewBox="0 0 46 60"
                      >
                        <g id="Group_37587" data-name="Group 37587" transform="translate(-0.498 0.231)">
                          <g id="Group_14072" data-name="Group 14072" transform="translate(0.216 -0.498)">
                            <g
                              id="Rectangle_4467"
                              data-name="Rectangle 4467"
                              transform="translate(0.282 0.267)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1"
                            >
                              <rect width="46" height="60" stroke="none" />
                              <rect x="0.5" y="0.5" width="45" height="59" fill="none" />
                            </g>
                            <g
                              id="Rectangle_4468"
                              data-name="Rectangle 4468"
                              transform="translate(5.282 5.267)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1"
                            >
                              <rect width="36" height="50" stroke="none" />
                              <rect x="0.5" y="0.5" width="35" height="49" fill="none" />
                            </g>
                            <path
                              id="Path_20366"
                              data-name="Path 20366"
                              d="M116.487,260.085l30.555-21.924-30.555-23.01"
                              transform="translate(154.958 267.535) rotate(180)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                              stroke-dasharray="3 2"
                            />
                            <rect
                              id="Rectangle_4469"
                              data-name="Rectangle 4469"
                              width="6"
                              height="10"
                              transform="translate(0.282 25.267)"
                              fill="#96a0b5"
                            />
                            <rect
                              id="Rectangle_9994"
                              data-name="Rectangle 9994"
                              width="3"
                              height="10"
                              transform="translate(6.18 30.267)"
                              fill="#96a0b5"
                            />
                          </g>
                        </g>
                      </svg>`,
    [partitionIconKeys.PARTITION_FRENCH_OPENABLE_ARROW_TOWARDS_OUTSIDE]: `<svg
                        *ngIf="arrowTowardsHandle && viewHandleFromOutside"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="50"
                        viewBox="0 0 53 60"
                      >
                        <g id="Group_37599" data-name="Group 37599" transform="translate(-115 -510)">
                          <g id="Group_37592" data-name="Group 37592" transform="translate(115 510)">
                            <g id="Group_14072" data-name="Group 14072">
                              <g
                                id="Rectangle_4467"
                                data-name="Rectangle 4467"
                                fill="#fff"
                                stroke="#96a0b5"
                                stroke-width="1"
                              >
                                <rect width="53" height="60" stroke="none" />
                                <rect x="0.5" y="0.5" width="52" height="59" fill="none" />
                              </g>
                              <g
                                id="Rectangle_4468"
                                data-name="Rectangle 4468"
                                transform="translate(4 5)"
                                fill="#fff"
                                stroke="#96a0b5"
                                stroke-width="1"
                              >
                                <rect width="19" height="50" stroke="none" />
                                <rect x="0.5" y="0.5" width="18" height="49" fill="none" />
                              </g>
                              <g
                                id="Rectangle_9995"
                                data-name="Rectangle 9995"
                                transform="translate(30 5)"
                                fill="#fff"
                                stroke="#96a0b5"
                                stroke-width="1"
                              >
                                <rect width="19" height="50" stroke="none" />
                                <rect x="0.5" y="0.5" width="18" height="49" fill="none" />
                              </g>
                              <rect
                                id="Rectangle_4469"
                                data-name="Rectangle 4469"
                                width="4"
                                height="10"
                                transform="translate(26.5 35) rotate(180)"
                                fill="#96a0b5"
                              />
                              <line
                                id="Line_1823"
                                data-name="Line 1823"
                                y1="59"
                                transform="translate(26.5 0.5)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="1"
                              />
                              <path
                                id="Path_77903"
                                data-name="Path 77903"
                                d="M127.684,259.752l-17.247-24.115,17.247-24"
                                transform="translate(-79.484 -205.75)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="1"
                                stroke-dasharray="3 2"
                              />
                              <path
                                id="Path_77904"
                                data-name="Path 77904"
                                d="M110.437,259.752l17.246-24.115-17.246-24"
                                transform="translate(-105.438 -205.637)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="1"
                                stroke-dasharray="3 2"
                              />
                            </g>
                          </g>
                          <rect
                            id="Rectangle_10048"
                            data-name="Rectangle 10048"
                            width="3"
                            height="10"
                            transform="translate(134.3 540)"
                            fill="#96a0b5"
                          />
                        </g>
                      </svg>`,
    [partitionIconKeys.PARTITION_FRENCH_OPENABLE_ARROW_AWAY_OUTSIDE]: `<svg
                        *ngIf="!arrowTowardsHandle && viewHandleFromOutside"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="50"
                        viewBox="0 0 53 60"
                      >
                        <g id="Group_37599" data-name="Group 37599" transform="translate(-115 -510)">
                          <g id="Group_37592" data-name="Group 37592" transform="translate(115 510)">
                            <g id="Group_14072" data-name="Group 14072">
                              <g
                                id="Rectangle_4467"
                                data-name="Rectangle 4467"
                                fill="#fff"
                                stroke="#96a0b5"
                                stroke-width="1"
                              >
                                <rect width="53" height="60" stroke="none" />
                                <rect x="0.5" y="0.5" width="52" height="59" fill="none" />
                              </g>
                              <g
                                id="Rectangle_4468"
                                data-name="Rectangle 4468"
                                transform="translate(4 5)"
                                fill="#fff"
                                stroke="#96a0b5"
                                stroke-width="1"
                              >
                                <rect width="19" height="50" stroke="none" />
                                <rect x="0.5" y="0.5" width="18" height="49" fill="none" />
                              </g>
                              <g
                                id="Rectangle_9995"
                                data-name="Rectangle 9995"
                                transform="translate(30 5)"
                                fill="#fff"
                                stroke="#96a0b5"
                                stroke-width="1"
                              >
                                <rect width="19" height="50" stroke="none" />
                                <rect x="0.5" y="0.5" width="18" height="49" fill="none" />
                              </g>
                              <rect
                                id="Rectangle_4469"
                                data-name="Rectangle 4469"
                                width="4"
                                height="10"
                                transform="translate(26.5 35) rotate(180)"
                                fill="#96a0b5"
                              />
                              <line
                                id="Line_1823"
                                data-name="Line 1823"
                                y1="59"
                                transform="translate(26.5 0.5)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="1"
                              />
                              <path
                                id="Path_77903"
                                data-name="Path 77903"
                                d="M127.684,259.752l-17.247-24.115,17.247-24"
                                transform="translate(158.637 265.639) rotate(180)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="1"
                                stroke-dasharray="3 2"
                              />
                              <path
                                id="Path_77904"
                                data-name="Path 77904"
                                d="M110.437,259.752l17.246-24.115-17.246-24"
                                transform="translate(132.682 265.752) rotate(180)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="1"
                                stroke-dasharray="3 2"
                              />
                            </g>
                          </g>
                          <rect
                            id="Rectangle_10048"
                            data-name="Rectangle 10048"
                            width="3"
                            height="10"
                            transform="translate(134.3 540)"
                            fill="#96a0b5"
                          />
                        </g>
                      </svg>`,
  },
};
