import { IconPrefix, IconPrefixType } from '../models/icon.model';

export const tiltDesignIconKeys = {
  T_AND_S_LEFT_HANDLE: 'tAndSLeftHandle', // left handle , the tAndSRightHandle can be used as mirror image of this one.

  // all below images here used as mirror images // these are the outside view for inside need to be flipped(by conditional) all 4 means 8( 4*2) images
  T_AND_T_RIGHT_HANDLE_ARROW_AWAY_OUTSIDE: 'tAndTRightHandleArrowAwayOutside',
  T_AND_T_RIGHT_HANDLE_ARROW_TOWARDS_OUTSIDE: 'tAndTRightHandleArrowTowardsOutside',

  T_AND_T_LEFT_HANDLE__ARROW_AWAY_OUTSIDE: 'tAndTLeftHandleArrowAwayOutside',
  T_AND_T_LEFT_HANDLE__ARROW_TOWARDS_OUTSIDE: 'tAndTLeftHandleArrowTowardsOutside',
  //til here

  T_AND_T_FRENCH_WINDOW_ARROW_TOWARDS: 'tAndTFrenchWindowArrowTowards', // arrowTowardsHandle
  T_AND_T_FRENCH_WINDOW_NOT_ARROW_TOWARDS: 'tAndTFrenchWindowNotArrowTowards', // !arrowTowardsHandle

  T_AND_T_WITH_OPENABLE_FRENCH: 'tAndTWithLeftOpenableFrench', //tAndTWithLeftOpenableFrench and tAndTWithRightOpenableFrench ( each have mirrored versions ) all using same image.
} as const;

export type IconKey = typeof tiltDesignIconKeys[keyof typeof tiltDesignIconKeys];

export const TILT_DESIGN_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.TILT]: {
    [tiltDesignIconKeys.T_AND_S_LEFT_HANDLE]: `<svg xmlns="http://www.w3.org/2000/svg" width="43" height="51" viewBox="0 0 42.459 51">
                        <g id="Group_178776" data-name="Group 178776" transform="translate(-337.893 -970.93)">
                          <g id="Group_178772" data-name="Group 178772" transform="translate(59.809 351.43)">
                            <g id="Group_53588" data-name="Group 53588" transform="translate(278.583 640)">
                              <rect
                                id="Rectangle_10006"
                                data-name="Rectangle 10006"
                                width="3"
                                height="8"
                                fill="#96a0b5"
                              />
                              <rect
                                id="Rectangle_10024"
                                data-name="Rectangle 10024"
                                width="2"
                                height="6"
                                transform="translate(3 4)"
                                fill="#96a0b5"
                              />
                            </g>
                            <path
                              id="path72"
                              d="M74.08-911.836V-955.52H109.3v43.684H74.08"
                              transform="translate(207.624 1578.717)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path66"
                              d="M67.36-912.4v-50h41.459v50H67.36"
                              transform="translate(211.224 1582.4)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="Path_254370"
                              data-name="Path 254370"
                              d="M3,0"
                              transform="translate(316.691 620.07)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <path
                              id="Path_254368"
                              data-name="Path 254368"
                              d="M3810.8-10410.723l17.489-42.879,17.211,42.879"
                              transform="translate(-3529.096 11077.729)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <g
                              id="Group_178774"
                              data-name="Group 178774"
                              transform="translate(345.379 622.598) rotate(90)"
                            >
                              <path
                                id="path258"
                                d="M24.7,2.151H0L2.151,0"
                                transform="translate(26.881 31.117) rotate(90)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <path
                                id="path260"
                                d="M0,0,2.151,2.23"
                                transform="translate(24.73 31.117) rotate(90)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <path
                                id="Path_254369"
                                data-name="Path 254369"
                                d="M12.924-1.7S4.131-2,0-2"
                                transform="translate(11.731 57.489)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="1"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>`,
    [tiltDesignIconKeys.T_AND_T_FRENCH_WINDOW_ARROW_TOWARDS]: `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="80"
                      height="50"
                      viewBox="0 0 80 50"
                      *ngIf="arrowTowardsHandle"
                    >
                      <g id="Group_36140" data-name="Group 36140" transform="translate(10099 19678)">
                        <g id="Group_14374" data-name="Group 14374" transform="translate(-10203 -19999.381)">
                          <g
                            id="Rectangle_4467"
                            data-name="Rectangle 4467"
                            transform="translate(104 321.381)"
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
                            transform="translate(108 325.228)"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                            fill="none"
                          >
                            <rect width="32" height="42.308" stroke="none" />
                            <rect x="0.5" y="0.5" width="31" height="41.308" fill="none" />
                          </g>
                          <path
                            id="Path_20366"
                            data-name="Path 20366"
                            d="M116.582,252.278l28.2-18.109-30.275-20.523"
                            transform="translate(-5.782 112.371)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                            stroke-dasharray="3 2"
                          />
                          <rect
                            id="Rectangle_4469"
                            data-name="Rectangle 4469"
                            width="4.048"
                            height="7.692"
                            transform="translate(139 342.535)"
                            fill="#96a0b5"
                          />
                          <rect
                            id="Rectangle_4488"
                            data-name="Rectangle 4488"
                            width="2"
                            height="8.654"
                            transform="translate(137 346.381)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_20437"
                            data-name="Path 20437"
                            d="M.823,29.825,39.968,14.29,0,0"
                            transform="translate(109.214 366.749) rotate(-90)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                            stroke-dasharray="3 2"
                          />
                        </g>
                        <g id="Group_14381" data-name="Group 14381" transform="translate(-10237.935 -20060.186)">
                          <g
                            id="Rectangle_4467-2"
                            data-name="Rectangle 4467"
                            transform="translate(178.935 382.185)"
                            fill="#fff"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                          >
                            <rect width="40" height="50" stroke="none" />
                            <rect x="0.5" y="0.5" width="39" height="49" fill="none" />
                          </g>
                          <g
                            id="Rectangle_4468-2"
                            data-name="Rectangle 4468"
                            transform="translate(182.935 386.031)"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                            fill="none"
                          >
                            <rect width="32" height="42.308" stroke="none" />
                            <rect x="0.5" y="0.5" width="31" height="41.308" fill="none" />
                          </g>
                          <path
                            id="Path_20366-2"
                            data-name="Path 20366"
                            d="M146.594,254c-7.05-4.527-30.107-19.837-30.107-19.837L146.9,213.784"
                            transform="translate(67.448 173.176)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                            stroke-dasharray="3 2"
                          />
                          <rect
                            id="Rectangle_4469-2"
                            data-name="Rectangle 4469"
                            width="4.048"
                            height="7.692"
                            transform="translate(179.887 403.339)"
                            fill="#96a0b5"
                          />
                          <rect
                            id="Rectangle_4488-2"
                            data-name="Rectangle 4488"
                            width="2"
                            height="8.654"
                            transform="translate(183.935 407.185)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_20437-2"
                            data-name="Path 20437"
                            d="M.821,0,39.658,16.223,0,29.825"
                            transform="translate(183.896 427.553) rotate(-90)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                            stroke-dasharray="3 2"
                          />
                        </g>
                      </g>
                    </svg>`,
    [tiltDesignIconKeys.T_AND_T_FRENCH_WINDOW_NOT_ARROW_TOWARDS]: `<svg
                      *ngIf="!arrowTowardsHandle"
                      xmlns="http://www.w3.org/2000/svg"
                      width="80"
                      height="50"
                      viewBox="0 0 76 60"
                    >
                      <g id="Group_14072" data-name="Group 14072" transform="translate(0 0)">
                        <g
                          id="Rectangle_4467"
                          data-name="Rectangle 4467"
                          transform="translate(0)"
                          fill="#fff"
                          stroke="#96a0b5"
                          stroke-width="1"
                        >
                          <rect width="76" height="60" stroke="none" />
                          <rect x="0.5" y="0.5" width="75" height="59" fill="none" />
                        </g>
                        <g
                          id="Rectangle_4468"
                          data-name="Rectangle 4468"
                          transform="translate(5 5)"
                          fill="#fff"
                          stroke="#96a0b5"
                          stroke-width="1"
                        >
                          <rect width="29" height="50" stroke="none" />
                          <rect x="0.5" y="0.5" width="28" height="49" fill="none" />
                        </g>
                        <g
                          id="Rectangle_9996"
                          data-name="Rectangle 9996"
                          transform="translate(42 5)"
                          fill="#fff"
                          stroke="#96a0b5"
                          stroke-width="1"
                        >
                          <rect width="29" height="50" stroke="none" />
                          <rect x="0.5" y="0.5" width="28" height="49" fill="none" />
                        </g>
                        <path
                          id="Path_20366"
                          data-name="Path 20366"
                          d="M141.594,261.528l-26.781-24.06,26.781-23.46"
                          transform="translate(-108.693 -207.968)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                          stroke-dasharray="3 2"
                        />
                        <path
                          id="Path_77906"
                          data-name="Path 77906"
                          d="M114.813,261.528l26.781-24.06-26.781-23.46"
                          transform="translate(-71.693 -207.968)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                          stroke-dasharray="3 2"
                        />
                        <rect
                          id="Rectangle_4469"
                          data-name="Rectangle 4469"
                          width="5"
                          height="10"
                          transform="translate(38 27)"
                          fill="#96a0b5"
                        />
                        <rect
                          id="Rectangle_9997"
                          data-name="Rectangle 9997"
                          width="5"
                          height="10"
                          transform="translate(33 27)"
                          fill="#96a0b5"
                        />
                        <rect
                          id="Rectangle_9994"
                          data-name="Rectangle 9994"
                          width="3"
                          height="10"
                          transform="translate(42.9 31)"
                          fill="#96a0b5"
                        />
                        <rect
                          id="Rectangle_9998"
                          data-name="Rectangle 9998"
                          width="3"
                          height="10"
                          transform="translate(30.101 31)"
                          fill="#96a0b5"
                        />
                        <path
                          id="Path_77905"
                          data-name="Path 77905"
                          d="M1.215,0l47.46,14.3L1.215,27.5"
                          transform="translate(5.799 54.775) rotate(-90)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                          stroke-dasharray="3 2"
                        />
                        <path
                          id="Path_77907"
                          data-name="Path 77907"
                          d="M1.215,0,45.571,13.366l3.1.935L1.215,27.5"
                          transform="translate(42.799 54.775) rotate(-90)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                          stroke-dasharray="3 2"
                        />
                      </g>
                      <line
                        id="Line_1824"
                        data-name="Line 1824"
                        y1="59.5"
                        transform="translate(38)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                    </svg>`,
    [tiltDesignIconKeys.T_AND_T_WITH_OPENABLE_FRENCH]: `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    width="70"
                    height="50"
                    viewBox="0 0 76.342 60.777"
                    *ngIf="!viewHandleFromOutside"
                  >
                    <g>
                      <path d="M76,.777H0v60H76Z" fill="#fff" />
                      <path d="M75.5,1.277H.5v59h75Z" fill="none" stroke="#96a0b5" stroke-width="1" />
                      <path d="M71,5.777H42v50H71Z" fill="#fff" />
                      <path d="M70.5,6.277h-28v49h28Z" fill="none" stroke="#96a0b5" stroke-width="1" />
                      <path d="M34,5.777H5v50H34Z" fill="#fff" />
                      <path d="M33.5,6.277H5.5v49h28Z" fill="none" stroke="#96a0b5" stroke-width="1" />
                      <path
                        d="M5.319,54.337,37.5,27.743.7,1.876"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                        stroke-dasharray="3 2"
                      />
                      <path d="M42,24.777H37v10h5Z" fill="#96a0b5" />
                      <path d="M37.1,28.777h-3v10h3Z" fill="#96a0b5" />
                      <path
                        d="M76,60.075,42,28.195,76,.775"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                        stroke-dasharray="3 2"
                      />
                      <path
                        d="M38.633,59.944,55.166,1.677,75.033,59.944"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                        stroke-dasharray="3 2"
                      />
                      <path d="M38,60.277V.777" fill="none" stroke="#96a0b5" stroke-width="1" />
                    </g>
                  </svg>`,
    [tiltDesignIconKeys.T_AND_T_RIGHT_HANDLE_ARROW_TOWARDS_OUTSIDE]: `<svg
                  *ngIf="arrowTowardsHandle && viewHandleFromOutside"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="50"
                  viewBox="0 0 40 50"
                >
                  <g id="Group_14381" data-name="Group 14381" transform="translate(-178.935 -382.185)">
                    <g
                      id="Rectangle_4467"
                      data-name="Rectangle 4467"
                      transform="translate(178.935 382.185)"
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
                      transform="translate(182.935 386.031)"
                      fill="none"
                    >
                      <path d="M0,0H32V42.308H0Z" stroke="none" />
                      <path
                        d="M 1 1 L 1 41.30799865722656 L 31 41.30799865722656 L 31 1 L 1 1 M 0 0 L 32 0 L 32 42.30799865722656 L 0 42.30799865722656 L 0 0 Z"
                        stroke="none"
                        fill="#96a0b5"
                      />
                    </g>
                    <path
                      id="Path_20366"
                      data-name="Path 20366"
                      d="M146.594,254c-7.05-4.527-30.107-19.837-30.107-19.837L146.9,213.784"
                      transform="translate(67.448 173.176)"
                      fill="none"
                      stroke="#96a0b5"
                      stroke-linejoin="round"
                      stroke-width="1"
                      stroke-dasharray="3 2"
                    />
                    <rect
                      id="Rectangle_4469"
                      data-name="Rectangle 4469"
                      width="4.048"
                      height="7.692"
                      transform="translate(179.887 403.339)"
                      fill="#96a0b5"
                    />
                    <rect
                      id="Rectangle_4488"
                      data-name="Rectangle 4488"
                      width="2"
                      height="8.654"
                      transform="translate(183.935 407.185)"
                      fill="#96a0b5"
                    />
                    <path
                      id="Path_20437"
                      data-name="Path 20437"
                      d="M.821,0,39.658,16.223,0,29.825"
                      transform="translate(183.896 427.553) rotate(-90)"
                      fill="none"
                      stroke="#96a0b5"
                      stroke-linejoin="round"
                      stroke-width="1"
                      stroke-dasharray="3 2"
                    />
                  </g>
                </svg>`,
    [tiltDesignIconKeys.T_AND_T_RIGHT_HANDLE_ARROW_AWAY_OUTSIDE]: `<svg
                  *ngIf="!arrowTowardsHandle && viewHandleFromOutside"
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="50"
                  viewBox="0 0 40 50"
                >
                  <g id="Group_14381" data-name="Group 14381" transform="translate(-178.935 -382.185)">
                    <g
                      id="Rectangle_4467"
                      data-name="Rectangle 4467"
                      transform="translate(178.935 382.185)"
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
                      transform="translate(182.935 386.031)"
                      fill="none"
                    >
                      <path d="M0,0H32V42.308H0Z" stroke="none" />
                      <path
                        d="M 1 1 L 1 41.30799865722656 L 31 41.30799865722656 L 31 1 L 1 1 M 0 0 L 32 0 L 32 42.30799865722656 L 0 42.30799865722656 L 0 0 Z"
                        stroke="none"
                        fill="#96a0b5"
                      />
                    </g>
                    <path
                      id="Path_20366"
                      data-name="Path 20366"
                      d="M146.594,254c-7.05-4.527-30.107-19.837-30.107-19.837L146.9,213.784"
                      transform="translate(330.835 640.96) rotate(180)"
                      fill="none"
                      stroke="#96a0b5"
                      stroke-linejoin="round"
                      stroke-width="1"
                      stroke-dasharray="3 2"
                    />
                    <rect
                      id="Rectangle_4469"
                      data-name="Rectangle 4469"
                      width="4.048"
                      height="7.692"
                      transform="translate(179.887 403.339)"
                      fill="#96a0b5"
                    />
                    <rect
                      id="Rectangle_4488"
                      data-name="Rectangle 4488"
                      width="2"
                      height="8.654"
                      transform="translate(183.935 407.185)"
                      fill="#96a0b5"
                    />
                    <path
                      id="Path_20437"
                      data-name="Path 20437"
                      d="M.821,0,39.658,16.223,0,29.825"
                      transform="translate(183.896 427.553) rotate(-90)"
                      fill="none"
                      stroke="#96a0b5"
                      stroke-linejoin="round"
                      stroke-width="1"
                      stroke-dasharray="3 2"
                    />
                  </g>
                </svg>`,
    [tiltDesignIconKeys.T_AND_T_LEFT_HANDLE__ARROW_TOWARDS_OUTSIDE]: `<svg
                *ngIf="arrowTowardsHandle && viewHandleFromOutside"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="50"
                viewBox="0 0 40 50"
              >
                <g id="Group_14374" data-name="Group 14374" transform="translate(-104 -321.381)">
                  <g
                    id="Rectangle_4467"
                    data-name="Rectangle 4467"
                    transform="translate(104 321.381)"
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
                    transform="translate(108 325.228)"
                    fill="none"
                  >
                    <path d="M0,0H32V42.308H0Z" stroke="none" />
                    <path
                      d="M 1 1 L 1 41.30799865722656 L 31 41.30799865722656 L 31 1 L 1 1 M 0 0 L 32 0 L 32 42.30799865722656 L 0 42.30799865722656 L 0 0 Z"
                      stroke="none"
                      fill="#96a0b5"
                    />
                  </g>
                  <path
                    id="Path_20366"
                    data-name="Path 20366"
                    d="M116.582,252.278l28.2-18.109-30.275-20.523"
                    transform="translate(-5.782 112.371)"
                    fill="none"
                    stroke="#96a0b5"
                    stroke-linejoin="round"
                    stroke-width="1"
                    stroke-dasharray="3 2"
                  />
                  <rect
                    id="Rectangle_4469"
                    data-name="Rectangle 4469"
                    width="4.048"
                    height="7.692"
                    transform="translate(139 342.535)"
                    fill="#96a0b5"
                  />
                  <rect
                    id="Rectangle_4488"
                    data-name="Rectangle 4488"
                    width="2"
                    height="8.654"
                    transform="translate(137 346.381)"
                    fill="#96a0b5"
                  />
                  <path
                    id="Path_20437"
                    data-name="Path 20437"
                    d="M.823,29.825,39.968,14.29,0,0"
                    transform="translate(109.214 366.749) rotate(-90)"
                    fill="none"
                    stroke="#96a0b5"
                    stroke-linejoin="round"
                    stroke-width="1"
                    stroke-dasharray="3 2"
                  />
                </g>
              </svg>`,
    [tiltDesignIconKeys.T_AND_T_LEFT_HANDLE__ARROW_AWAY_OUTSIDE]: `<svg
                *ngIf="!arrowTowardsHandle && viewHandleFromOutside"
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="50"
                viewBox="0 0 40 50"
              >
                <g id="Group_14374" data-name="Group 14374" transform="translate(-104 -321.381)">
                  <g
                    id="Rectangle_4467"
                    data-name="Rectangle 4467"
                    transform="translate(104 321.381)"
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
                    transform="translate(108 325.228)"
                    fill="none"
                  >
                    <path d="M0,0H32V42.308H0Z" stroke="none" />
                    <path
                      d="M 1 1 L 1 41.30799865722656 L 31 41.30799865722656 L 31 1 L 1 1 M 0 0 L 32 0 L 32 42.30799865722656 L 0 42.30799865722656 L 0 0 Z"
                      stroke="none"
                      fill="#96a0b5"
                    />
                  </g>
                  <path
                    id="Path_20366"
                    data-name="Path 20366"
                    d="M116.582,252.278l28.2-18.109-30.275-20.523"
                    transform="translate(253.507 578.295) rotate(180)"
                    fill="none"
                    stroke="#96a0b5"
                    stroke-linejoin="round"
                    stroke-width="1"
                    stroke-dasharray="3 2"
                  />
                  <rect
                    id="Rectangle_4469"
                    data-name="Rectangle 4469"
                    width="4.048"
                    height="7.692"
                    transform="translate(139 342.535)"
                    fill="#96a0b5"
                  />
                  <rect
                    id="Rectangle_4488"
                    data-name="Rectangle 4488"
                    width="2"
                    height="8.654"
                    transform="translate(137 346.381)"
                    fill="#96a0b5"
                  />
                  <path
                    id="Path_20437"
                    data-name="Path 20437"
                    d="M.823,29.825,39.968,14.29,0,0"
                    transform="translate(109.214 366.749) rotate(-90)"
                    fill="none"
                    stroke="#96a0b5"
                    stroke-linejoin="round"
                    stroke-width="1"
                    stroke-dasharray="3 2"
                  />
                </g>
              </svg>`,
  },
};
