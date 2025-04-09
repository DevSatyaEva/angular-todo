import { IconPrefix, IconPrefixType } from '../models/icon.model';

export const couplerIconKeys = {
  VERTICAL_COUPLING: 'verticalCoupling', //kept vertical_coupling, need to rotate this by 90 degrees to right for horizontal coupling
  ANGULAR_COUPLING: 'angularCoupling',
  CUSTOM_COUPLING: 'customCoupling',
  T_COUPLER: 'tCoupler',
} as const;

export type IconKey = typeof couplerIconKeys[keyof typeof couplerIconKeys];

export const COUPLER_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.COUPLING]: {
    [couplerIconKeys.VERTICAL_COUPLING]: `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="29"
                      height="37"
                      viewBox="0 0 29 35.966"
                    >
                      <g id="Rectangle_2760" data-name="Rectangle 2760" stroke="#96a0b5" stroke-width="1.2" fill="none">
                        <rect width="12" height="35.966" stroke="none" />
                        <rect x="0.6" y="0.6" width="10.8" height="34.766" fill="none" />
                      </g>
                      <g
                        id="Rectangle_2761"
                        data-name="Rectangle 2761"
                        transform="translate(13)"
                        stroke="#96a0b5"
                        stroke-width="1.2"
                        fill="none"
                      >
                        <rect width="16" height="13" stroke="none" />
                        <rect x="0.6" y="0.6" width="14.8" height="11.8" fill="none" />
                      </g>
                      <g
                        id="Rectangle_4475"
                        data-name="Rectangle 4475"
                        transform="translate(11)"
                        fill="#e5ebf0"
                        stroke="#96a0b5"
                        stroke-width="1"
                      >
                        <rect width="4" height="13" stroke="none" />
                        <rect x="0.5" y="0.5" width="3" height="12" fill="none" />
                      </g>
                    </svg>`,
    [couplerIconKeys.ANGULAR_COUPLING]: `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="35.008" viewBox="0 0 32 35.008">
                      <g id="Angular_coupler" transform="translate(5750.5 23983.664)">
                        <g id="_02_Door" data-name="02 Door" transform="translate(-5737.272 -23980.664)">
                          <g id="Group_36137" data-name="Group 36137" transform="translate(0 0)">
                            <path
                              id="Path_60042"
                              data-name="Path 60042"
                              d="M21.418,3.33,34.669-2.983a.557.557,0,0,1,.474.1.552.552,0,0,1,.213.435V23.785a.552.552,0,0,1-.686.536L21.418,32.008A.552.552,0,0,1,21,31.472V3.865a.552.552,0,0,1,.418-.536Zm.593,26.932,12.24-7.184V-1.74L22.1,4.3Z"
                              transform="translate(-16.583 -0.001)"
                              fill="#9d9da5"
                            />
                            <path
                              id="Path_60045"
                              data-name="Path 60045"
                              d="M26.656,32.313a1.656,1.656,0,1,1,1.656-1.656,1.656,1.656,0,0,1-1.656,1.656Zm0-2.209a.552.552,0,1,0,.552.552A.552.552,0,0,0,26.656,30.1Z"
                              transform="translate(-12.749 -17.809)"
                              fill="#9d9ea2"
                            />
                            <path
                              id="Path_60049"
                              data-name="Path 60049"
                              d="M26.656,32.313a1.656,1.656,0,1,1,1.656-1.656,1.656,1.656,0,0,1-1.656,1.656Zm0-2.209a.552.552,0,1,0,.552.552A.552.552,0,0,0,26.656,30.1Z"
                              transform="translate(-35.749 -13.809)"
                              fill="#9d9ea3"
                            />
                          </g>
                        </g>
                        <path
                          id="Path_60048"
                          data-name="Path 60048"
                          d="M34.937,3.33,21.686,3.017A.552.552,0,0,0,21,3.553V30.785a.552.552,0,0,0,.686.536l13.251.687a.552.552,0,0,0,.418-.536V3.865a.552.552,0,0,0-.418-.536Zm-.686,27.455L22.1,30.077V4.26l12.147.269Z"
                          transform="translate(-5771.5 -23980.666)"
                          fill="#9d9ea3"
                        />
                        <rect
                          id="Rectangle_6287"
                          data-name="Rectangle 6287"
                          width="2"
                          height="28"
                          rx="0.5"
                          transform="translate(-5735.5 -23977)"
                          fill="#121f3e"
                        />
                      </g>
                    </svg>`,
    [couplerIconKeys.CUSTOM_COUPLING]: `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      xmlns:xlink="http://www.w3.org/1999/xlink"
                      width="32.942"
                      height="39"
                      viewBox="0 0 32.942 39"
                    >
                      <path
                        id="Path_20395"
                        data-name="Path 20395"
                        d="M6125.25-6558.5h31.742v-30.25S6125.25-6591.255,6125.25-6558.5Z"
                        transform="translate(-6124.65 6592.294)"
                        stroke="#96a0b5"
                        stroke-width="1.2"
                        fill="none"
                      />
                      <g id="Path_20396" data-name="Path 20396" transform="translate(14.1)" fill="#fff">
                        <path
                          d="M 8.399999618530273 38.40000152587891 L 0.6000000238418579 38.40000152587891 L 0.6000000238418579 0.6000000238418579 L 8.399999618530273 0.6000000238418579 L 8.399999618530273 38.40000152587891 Z"
                          stroke="none"
                        />
                        <path
                          d="M 1.199999809265137 1.200000762939453 L 1.199999809265137 37.79999923706055 L 7.800000190734863 37.79999923706055 L 7.800000190734863 1.200000762939453 L 1.199999809265137 1.200000762939453 M 0 0 L 9 0 L 9 39 L 0 39 L 0 0 Z"
                          stroke="none"
                          fill="#96a0b5"
                        />
                      </g>
                    </svg>`,
    [couplerIconKeys.T_COUPLER]: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40.667" viewBox="0 0 36 36.667">
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
  },
};
