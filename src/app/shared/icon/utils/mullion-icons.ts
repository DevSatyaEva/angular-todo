import { IconPrefix, IconPrefixType } from '../models/icon.model';

export const IconKeys = {
  MULLION_ICON_1: 'headIcon',
  MULLION_ICON_2: 'verticalMullion',
  MULLION_ICON_3: 'horizontalMullion',
  MULLION_ICON_4: 'verticalMultipleMullion',
  MULLION_ICON_5: 'horizontalMultipleMullion',
  MULLION_ICON_6: 'iJoint',
  MULLION_ICON_7: 'lJoint',
  MULLION_ICON_8: 'tJoint',
  MULLION_ICON_9: 'customMullion',
  MULLION_ICON_10: 'multipleIJoint',
} as const;

export type IconKey = (typeof IconKeys)[keyof typeof IconKeys];

export const MULLION_ICONS: Partial<
  Record<IconPrefixType, Partial<Record<IconKey, string>>>
> = {
  [IconPrefix.MULLION_DROPDOWN]: {
    [IconKeys.MULLION_ICON_1]: `<svg xmlns="http://www.w3.org/2000/svg" width="53" height="50" viewBox="0 0 53 60">
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
  [IconPrefix.DIVIDER]: {
    [IconKeys.MULLION_ICON_2]: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor"/>
             </svg>`,
    [IconKeys.MULLION_ICON_3]: ` <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                    >
                      <g transform="translate(-185 -261.912)">
                        <g>
                          <g>
                            <line
                              x2="3"
                              y2="3"
                              transform="translate(185.5 262.412)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <line
                              y1="3"
                              x2="3"
                              transform="translate(185.5 294.412)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <line
                              x2="3"
                              y2="3"
                              transform="translate(217.5 294.412)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <line
                              y1="3"
                              x2="3"
                              transform="translate(217.5 262.412)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <g transform="translate(496 -550.088) rotate(90)">
                              <g transform="translate(995.882 260.25) rotate(90)">
                                <g transform="translate(14.75 147.882)" fill="none" stroke="#96a0b5" stroke-width="1.2">
                                  <rect width="36" height="36" stroke="none" />
                                  <rect x="0.6" y="0.6" width="34.8" height="34.8" fill="none" />
                                </g>
                              </g>
                              <g transform="translate(815 278)" stroke="#96a0b5" stroke-width="1.2" fill="none">
                                <rect width="30" height="30" stroke="none" />
                                <rect x="0.6" y="0.6" width="28.8" height="28.8" fill="none" />
                              </g>
                            </g>
                            <g transform="translate(188 277)" fill="#fff" stroke="#96a0b5" stroke-width="1.2">
                              <rect width="30" height="5" stroke="none" />
                              <rect x="0.6" y="0.6" width="28.8" height="3.8" fill="none" />
                            </g>
                          </g>
                        </g>
                      </g>
                    </svg>`,
    [IconKeys.MULLION_ICON_4]: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36.905 36.905">
                      <g id="Group_37488" data-name="Group 37488" transform="translate(-285.01 -561.817)">
                        <g id="Group_37486" data-name="Group 37486" transform="translate(321.415 562.317) rotate(90)">
                          <g id="Group_37459" data-name="Group 37459" transform="translate(0 0)">
                            <path
                              id="path66"
                              d="M0,35.905V0H35.905V35.905H0"
                              transform="translate(35.905 0) rotate(90)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                          </g>
                          <g id="Group_37484" data-name="Group 37484" transform="translate(2.68 2.681)">
                            <path
                              id="path66-2"
                              data-name="path66"
                              d="M0,30.543V0H30.543V30.543H0"
                              transform="translate(30.543 0) rotate(90)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                          </g>
                          <g id="Group_37487" data-name="Group 37487" transform="translate(2.214 9.102)">
                            <g
                              id="Rectangle_9983"
                              data-name="Rectangle 9983"
                              transform="translate(0.001 13.407)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1"
                            >
                              <rect width="31.476" height="4.08" stroke="none" />
                              <rect x="0.5" y="0.5" width="30.476" height="3.08" fill="none" />
                            </g>
                            <g
                              id="Rectangle_9984"
                              data-name="Rectangle 9984"
                              transform="translate(0.001 6.81)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1"
                            >
                              <rect width="31.476" height="4.08" stroke="none" />
                              <rect x="0.5" y="0.5" width="30.476" height="3.08" fill="none" />
                            </g>
                            <g
                              id="Rectangle_9985"
                              data-name="Rectangle 9985"
                              transform="translate(0 0)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1"
                            >
                              <rect width="31.476" height="4.08" stroke="none" />
                              <rect x="0.5" y="0.5" width="30.476" height="3.08" fill="none" />
                            </g>
                          </g>
                        </g>
                        <line
                          id="Line_1806"
                          data-name="Line 1806"
                          y1="2.332"
                          x2="2.332"
                          transform="translate(318.608 562.647)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1809"
                          data-name="Line 1809"
                          y1="2.332"
                          x2="2.332"
                          transform="translate(286.083 595.307)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <path
                          id="Path_77834"
                          data-name="Path 77834"
                          d="M3.206,3.177,0,0"
                          transform="translate(285.5 562.53)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <path
                          id="Path_77835"
                          data-name="Path 77835"
                          d="M3.441,3.479.342.109"
                          transform="translate(317.975 594.743)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                      </g>
                    </svg>`,
    [IconKeys.MULLION_ICON_5]: ` <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36.895 36.895">
                      <g id="icon" transform="translate(598.711 -285.01) rotate(90)">
                        <g id="Group_37486" data-name="Group 37486" transform="translate(321.405 562.317) rotate(90)">
                          <g id="Group_37459" data-name="Group 37459">
                            <path
                              id="path66"
                              d="M0,35.895V0H35.895V35.895H0"
                              transform="translate(35.895 0) rotate(90)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                          </g>
                          <g id="Group_37484" data-name="Group 37484" transform="translate(2.679 2.68)">
                            <path
                              id="path66-2"
                              data-name="path66"
                              d="M0,30.534V0H30.534V30.534H0"
                              transform="translate(30.534) rotate(90)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                          </g>
                          <g id="Group_37487" data-name="Group 37487" transform="translate(2.213 9.1)">
                            <g
                              id="Rectangle_9983"
                              data-name="Rectangle 9983"
                              transform="translate(0.001 13.403)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1"
                            >
                              <rect width="31.467" height="4.079" stroke="none" />
                              <rect x="0.5" y="0.5" width="30.467" height="3.079" fill="none" />
                            </g>
                            <g
                              id="Rectangle_9984"
                              data-name="Rectangle 9984"
                              transform="translate(0.001 6.808)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1"
                            >
                              <rect width="31.467" height="4.079" stroke="none" />
                              <rect x="0.5" y="0.5" width="30.467" height="3.079" fill="none" />
                            </g>
                            <g
                              id="Rectangle_9985"
                              data-name="Rectangle 9985"
                              transform="translate(0 0)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1"
                            >
                              <rect width="31.467" height="4.079" stroke="none" />
                              <rect x="0.5" y="0.5" width="30.467" height="3.079" fill="none" />
                            </g>
                          </g>
                        </g>
                        <line
                          id="Line_1806"
                          data-name="Line 1806"
                          y1="2.331"
                          x2="2.331"
                          transform="translate(318.599 562.647)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1809"
                          data-name="Line 1809"
                          y1="2.331"
                          x2="2.331"
                          transform="translate(286.083 595.298)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <path
                          id="Path_77834"
                          data-name="Path 77834"
                          d="M3.2,3.176,0,0"
                          transform="translate(285.5 562.53)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <path
                          id="Path_77835"
                          data-name="Path 77835"
                          d="M3.44,3.478.342.109"
                          transform="translate(317.966 594.733)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                      </g>
                    </svg>`,
    [IconKeys.MULLION_ICON_6]: ` <svg xmlns="http://www.w3.org/2000/svg" width="31.1" height="36" viewBox="0 0 31.1 34.999">
                      <g id="Angular_coupler" transform="translate(5750.826 23977.664)">
                        <path
                          id="Path_60048"
                          data-name="Path 60048"
                          d="M36.534,3.022H21.765a.579.579,0,0,0-.528.121A.687.687,0,0,0,21,3.667V37.333a.687.687,0,0,0,.236.525.579.579,0,0,0,.528.121H36.534A.658.658,0,0,0,37,37.333V3.667a.658.658,0,0,0-.466-.646ZM35.769,36.5l-13.543-.025V4.519l13.539-.052Z"
                          transform="translate(-5771.826 -23980.664)"
                          fill="#96a0b5"
                        />
                        <path
                          id="Path_60048-2"
                          data-name="Path 60048"
                          d="M36.534,3.022H21.765a.579.579,0,0,0-.528.121A.687.687,0,0,0,21,3.667V37.333a.687.687,0,0,0,.236.525.579.579,0,0,0,.528.121H36.534A.658.658,0,0,0,37,37.333V3.667a.658.658,0,0,0-.466-.646ZM35.769,36.5l-13.543-.025V4.519l13.539-.052Z"
                          transform="translate(-5756.726 -23980.664)"
                          fill="#96a0b5"
                        />
                      </g>
                    </svg>`,
    [IconKeys.MULLION_ICON_7]: `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="39" viewBox="0 0 31.506 34.999">
                      <g id="Angular_coupler" transform="translate(5750.5 23983.664)">
                        <g id="_02_Door" data-name="02 Door" transform="translate(-5748.516 -23983.664)">
                          <g id="Group_36137" data-name="Group 36137" transform="translate(0 0)">
                            <path
                              id="Path_60042"
                              data-name="Path 60042"
                              d="M21.466,3.329,36.24-2.983a.678.678,0,0,1,.528.1.534.534,0,0,1,.237.435V23.779a.533.533,0,0,1-.237.435.671.671,0,0,1-.528.1L21.466,32A.567.567,0,0,1,21,31.464V3.863a.567.567,0,0,1,.466-.536Zm.661,26.926,13.647-7.182V-1.74L22.226,4.3Z"
                              transform="translate(-7.484 2.999)"
                              fill="#96a0b5"
                            />
                          </g>
                        </g>
                        <path
                          id="Path_60048"
                          data-name="Path 60048"
                          d="M36.924,3.33l-15.14-.313a.7.7,0,0,0-.541.1A.53.53,0,0,0,21,3.553V30.785a.53.53,0,0,0,.242.435.7.7,0,0,0,.541.1l15.14.687a.571.571,0,0,0,.478-.536V3.865a.571.571,0,0,0-.478-.536ZM36.14,30.785l-13.883-.708V4.26l13.879.269Z"
                          transform="translate(-5771.5 -23980.674)"
                          fill="#96a0b5"
                        />
                      </g>
                    </svg>`,
    [IconKeys.MULLION_ICON_8]: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40.667" viewBox="0 0 36 36.667">
                      <g id="Group_53935" data-name="Group 53935" transform="translate(0 -0.134)">
                        <g
                          id="Rectangle_71974"
                          data-name="Rectangle 71974"
                          transform="translate(0 0.134)"
                          fill="#fff"
                          stroke="#96a0b5"
                          stroke-width="1.2"
                        >
                          <rect width="36" height="29" stroke="none" />
                          <rect x="0.6" y="0.6" width="34.8" height="27.8" fill="none" />
                        </g>
                        <g id="Path_251419" data-name="Path 251419" transform="translate(15.841 0.134)" fill="#fff">
                          <path
                            d="M 12.23235988616943 35.59583282470703 L 0.5999996662139893 28.47346115112305 L 0.5999996662139893 1.115659236907959 L 12.23235988616943 8.802437782287598 L 12.23235988616943 35.59583282470703 Z"
                            stroke="none"
                          />
                          <path
                            d="M 11.63235950469971 34.52492523193359 L 11.63235950469971 9.125121116638184 L 1.199999690055847 2.231314420700073 L 1.199999690055847 28.13729858398438 L 11.63235950469971 34.52492523193359 M 12.83235931396484 36.66674423217773 L -3.430175752328068e-07 28.80962371826172 L -3.430175752328068e-07 4.023437668365659e-06 L 12.83235931396484 8.479754447937012 L 12.83235931396484 36.66674423217773 Z"
                            stroke="none"
                            fill="#96a0b5"
                          />
                        </g>
                      </g>
                    </svg>`,
    [IconKeys.MULLION_ICON_9]: `  <svg
                        *ngIf="!viewHandleFromOutside"
                        xmlns="http://www.w3.org/2000/svg"
                        width="40"
                        height="50"
                        viewBox="0 0 46 60"
                      >
                        <g id="Group_178892" data-name="Group 178892" transform="translate(-127 -776)">
                          <g
                            id="Rectangle_4467"
                            data-name="Rectangle 4467"
                            transform="translate(127 776)"
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
                            d="M116.487,271.661l42.663-27.572-42.664-28.938"
                            transform="translate(288.151 1049.168) rotate(180)"
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
                            transform="translate(127 801)"
                            fill="#96a0b5"
                          />
                          <rect
                            id="Rectangle_9994"
                            data-name="Rectangle 9994"
                            width="3"
                            height="10"
                            transform="translate(130 806)"
                            fill="#96a0b5"
                          />
                        </g>
                      </svg>`,
    [IconKeys.MULLION_ICON_10]: ` <svg
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
  },
};
