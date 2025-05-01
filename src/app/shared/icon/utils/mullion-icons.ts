import { IconPrefix } from '../models/icon-prefix';
import { IconPrefixType } from '../models/icon.model';

export const mullionIconKeys = {
  VERTICAL_MULLION: 'verticalMullion',
  VERTICAL_MULTIPLE_MULLION: 'verticalMultipleMullion',
  I_JOINT: 'iJoint',
  L_JOINT: 'lJoint',
  T_JOINT: 'tJoint',
  CUSTOM_MULLION: 'customMullion',
  MULTIPLE_I_JOINT: 'multipleIJoint',
} as const;

export type IconKey = typeof mullionIconKeys[keyof typeof mullionIconKeys];

export const MULLION_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.DIVIDER]: {
    [mullionIconKeys.VERTICAL_MULLION]: `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="36"
                      height="36"
                      viewBox="0 0 36 36"
                    >
                      <g transform="translate(297.912 -185) rotate(90)">
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
                          <path
                            d="M3.5,0"
                            transform="translate(217 279.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1.2"
                          />
                        </g>
                      </g>
                    </svg>`,
    [mullionIconKeys.VERTICAL_MULTIPLE_MULLION]: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36.905 36.905">
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
    [mullionIconKeys.I_JOINT]: ` <svg xmlns="http://www.w3.org/2000/svg" width="31.1" height="36" viewBox="0 0 31.1 34.999">
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
    [mullionIconKeys.L_JOINT]: `<svg xmlns="http://www.w3.org/2000/svg" width="35" height="39" viewBox="0 0 31.506 34.999">
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
    [mullionIconKeys.T_JOINT]: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40.667" viewBox="0 0 36 36.667">
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
    [mullionIconKeys.CUSTOM_MULLION]: `<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36">
                      <g transform="translate(-323 -264)">
                        <g transform="translate(72 -74)">
                          <g transform="translate(81 -6.707)">
                            <line
                              x2="3"
                              y2="3"
                              transform="translate(170.5 345.207)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <line
                              y1="3"
                              x2="3"
                              transform="translate(170.5 377.207)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <line
                              x2="3"
                              y2="3"
                              transform="translate(202.5 377.207)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <line
                              y1="3"
                              x2="3"
                              transform="translate(202.5 345.207)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <g
                              transform="translate(206 380.707) rotate(180)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1.2"
                            >
                              <rect width="36" height="36" stroke="none" />
                              <rect x="0.6" y="0.6" width="34.8" height="34.8" fill="none" />
                            </g>
                            <g
                              transform="translate(203 347.707) rotate(90)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1.2"
                            >
                              <rect width="30" height="30" stroke="none" />
                              <rect x="0.6" y="0.6" width="28.8" height="28.8" fill="none" />
                            </g>
                          </g>
                        </g>
                        <g transform="translate(342.215 277.212) rotate(45)">
                          <g transform="translate(0 0.002)">
                            <path
                              d="M15.4,2.569,13.238.41a1.47,1.47,0,0,0-2.034,0L1.542,10.169a.362.362,0,0,0-.091.155L.013,15.36a.36.36,0,0,0,.444.445L5.49,14.366a.361.361,0,0,0,.154-.091L15.4,4.6a1.439,1.439,0,0,0,0-2.035Zm-5.758.457,1.323,1.323L7.843,7.467,4.052,11.258l-.5-.992a.36.36,0,0,0-.322-.2H2.659ZM.883,14.936,1.351,13.3l1.171,1.171Zm4.15-1.185-1.72.491L1.577,12.506l.491-1.72h.945l.62,1.239a.36.36,0,0,0,.161.161l1.239.62v.945Zm.719-.591v-.576a.36.36,0,0,0-.2-.322l-.992-.5,6.908-6.908,1.323,1.323ZM14.888,4.1,13.3,5.675,10.144,2.516,11.713.932a.736.736,0,0,1,1.017,0l2.157,2.157a.719.719,0,0,1,0,1.016Z"
                              transform="translate(0 -0.002)"
                              fill="#96a0b5"
                            />
                          </g>
                        </g>
                        <line
                          y1="13"
                          x2="14"
                          transform="translate(326.5 267.5)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          y1="17"
                          x2="18"
                          transform="translate(326.5 267.5)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          x2="17"
                          y2="5"
                          transform="translate(338.5 273.5)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <path
                          d="M0,0H0L1.2.378,19.15,6.041"
                          transform="translate(336.35 275.459)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                      </g>
                    </svg>`,
    [mullionIconKeys.MULTIPLE_I_JOINT]: `<svg width="36" height="36" viewBox="0 0 45 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g clip-path="url(#clip0_302_441)">
                        <path
                          d="M22.4769 0.261822H1.10696C0.974992 0.226576 0.83639 0.22407 0.70323 0.254524C0.57007 0.284978 0.446392 0.347466 0.342973 0.436545C0.234422 0.530448 0.147555 0.646715 0.088354 0.777339C0.0291535 0.907963 -0.000972849 1.04984 4.77856e-05 1.1932V49.8068C-0.00136203 49.9503 0.028439 50.0924 0.0873936 50.2233C0.146348 50.3542 0.233053 50.4707 0.341527 50.5649C0.444945 50.654 0.568624 50.7165 0.701784 50.7469C0.834944 50.7774 0.973546 50.7749 1.10551 50.7396H22.4769C22.676 50.6791 22.8498 50.5551 22.9715 50.3866C23.0933 50.2181 23.1564 50.0145 23.1512 49.8068V1.1932C23.1564 0.985534 23.0933 0.781875 22.9715 0.613402C22.8498 0.444929 22.676 0.320927 22.4769 0.260378V0.261822ZM21.37 48.604L1.774 48.5679V2.42349L21.3642 2.3484L21.37 48.604Z"
                          fill="#96A0B5"
                        />
                        <path
                          d="M44.3259 0.261822H22.956C22.824 0.226576 22.6854 0.22407 22.5522 0.254524C22.4191 0.284978 22.2954 0.347466 22.192 0.436545C22.0834 0.530448 21.9966 0.646715 21.9374 0.777339C21.8782 0.907963 21.848 1.04984 21.8491 1.1932V49.8068C21.8477 49.9503 21.8775 50.0924 21.9364 50.2233C21.9954 50.3542 22.0821 50.4707 22.1905 50.5649C22.294 50.654 22.4176 50.7165 22.5508 50.7469C22.684 50.7774 22.8226 50.7749 22.9545 50.7396H44.3259C44.525 50.6791 44.6988 50.5551 44.8206 50.3866C44.9423 50.2181 45.0054 50.0145 45.0002 49.8068V1.1932C45.0054 0.985534 44.9423 0.781875 44.8206 0.613402C44.6988 0.444929 44.525 0.320927 44.3259 0.260378V0.261822ZM43.219 48.604L23.623 48.5679V2.42349L43.2132 2.3484L43.219 48.604Z"
                          fill="#96A0B5"
                        />
                        <line x1="12.3077" y1="2.07617" x2="12.3077" y2="49.1531" stroke="#96A0B5" stroke-width="2" />
                        <line x1="32.8462" y1="2.07617" x2="32.8462" y2="49.1531" stroke="#96A0B5" stroke-width="2" />
                      </g>
                      <defs>
                        <clipPath id="clip0_302_441">
                          <rect width="45" height="50.5385" fill="white" transform="translate(0 0.230469)" />
                        </clipPath>
                      </defs>
                    </svg>`,
  },
};
