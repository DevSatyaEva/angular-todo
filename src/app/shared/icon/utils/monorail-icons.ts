import { IconPrefix } from '../models/icon-prefix';
import { IconPrefixType } from '../models/icon.model';

export const monorailIconKeys = {
  ONE_FIX_ONE_SLIDING_NOT_HANDLE_OUTSIDE: 'oneFixOneSlidingnNotHandleOutside',
  ONE_FIX_TWO_SLIDING_ONE_FIX_NOT_HANDLE_OUTSIDE: 'oneFixTwoSlidingOneFixNotHandleOutside',
  ONE_SLIDING_TWO_X_FIX_ONE_SLIDING: 'oneSlidingTwoxFixOneSliding',
  ONE_SLIDING_ONE_FIX_NOT_HANDLE_OUTSIDE: 'oneSlidingOneFixNotHandleOutside',
  VERTICAL_MONORAIL: 'verticalMonorail',
  ONE_FIX_ONE_L_AND_S_NOT_HANDLE_OUTSIDE: 'oneFixOneLAndSNotHandleOutside',
  ONE_FIX_TWO_L_AND_S_ONE_fix_NOT_HANDLE_OUTSIDE: 'oneFixTwoLAndSOneFixNotHandleOutside',
  ONE_L_AND_S_TWO_FIX_ONE_L_AND_S: 'oneLAndSTwoxFixOneLAndS',
} as const;

export type IconKey = typeof monorailIconKeys[keyof typeof monorailIconKeys];

export const MONORAIL_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.MONORAIL]: {
    [monorailIconKeys.ONE_FIX_ONE_SLIDING_NOT_HANDLE_OUTSIDE]: `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="77.215"
                        height="51"
                        viewBox="0 0 77.215 51"
                      >
                        <g id="Group_53589" data-name="Group 53589" transform="translate(-31.335 -557.5)">
                          <path
                            id="Path_98972"
                            data-name="Path 98972"
                            d="M7.878,7.084l-.793.793L3.939,4.732.793,7.878,0,7.084,3.145,3.939,0,.793.793,0,3.939,3.145,7.084,0l.793.793L4.732,3.939Z"
                            transform="translate(50.924 577.429) rotate(45)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.3"
                          />
                          <g id="right-arrow" transform="translate(81.385 579.856)">
                            <path
                              id="Path_78108"
                              data-name="Path 78108"
                              d="M3.856-379.831a.534.534,0,0,1,.264.264.692.692,0,0,1-.008.406c-.02.046-.442.487-.952,1l-.917.914,5.452.013,5.454.013.1.061a.668.668,0,0,1,.165.163.385.385,0,0,1,.069.272.385.385,0,0,1-.069.272.668.668,0,0,1-.165.163l-.1.061-5.454.013-5.452.013.917.914c.51.508.932.95.952,1a.692.692,0,0,1,.008.406.512.512,0,0,1-.663.267c-.109-.051-2.8-2.7-2.895-2.844A.556.556,0,0,1,.571-377c.107-.16,2.778-2.783,2.887-2.834A.476.476,0,0,1,3.856-379.831Z"
                              transform="translate(-0.5 379.876)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.4"
                            />
                          </g>
                          <g id="Group_53588" data-name="Group 53588" transform="translate(102.943 578)">
                            <rect
                              id="Rectangle_10006"
                              data-name="Rectangle 10006"
                              width="3"
                              height="8"
                              transform="translate(2)"
                              fill="#96a0b5"
                            />
                            <rect
                              id="Rectangle_10024"
                              data-name="Rectangle 10024"
                              width="2"
                              height="6"
                              transform="translate(0 4)"
                              fill="#96a0b5"
                            />
                          </g>
                          <g
                            id="Group_14205"
                            data-name="Group 14205"
                            transform="translate(-7420.27 -12985.841) rotate(180)"
                          >
                            <path
                              id="path68"
                              d="M156.64-955.52H188.2v43.684H156.64"
                              transform="translate(-7643.501 -12635.124)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path72"
                              d="M74.08-911.836V-955.52H109.3v43.684H74.08"
                              transform="translate(-7599.279 -12635.124)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path66"
                              d="M67.36-912.4v-50h76.215v50H67.36"
                              transform="translate(-7595.68 -12631.44)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path70"
                              d="M67.36-912.4v-50h41.459v50H67.36"
                              transform="translate(-7595.68 -12631.44)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                          </g>
                        </g>
                      </svg>`,
    [monorailIconKeys.ONE_FIX_TWO_SLIDING_ONE_FIX_NOT_HANDLE_OUTSIDE]: `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="71"
                        height="51"
                        viewBox="0 0 71 51"
                      >
                        <g id="Group_41724" data-name="Group 41724" transform="translate(-192.033 -495.5)">
                          <g id="Group_41723" data-name="Group 41723" transform="translate(192.533 496)">
                            <path
                              id="path66"
                              d="M0,50V0H70V50H0"
                              transform="translate(70 50) rotate(180)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path66-2"
                              data-name="path66"
                              d="M0,50V0H16V50H0"
                              transform="translate(70 50) rotate(180)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path66-3"
                              data-name="path66"
                              d="M0,43.961V0H12.934V43.961H0"
                              transform="translate(50.953 46.994) rotate(180)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path66-4"
                              data-name="path66"
                              d="M0,50V0H16V50H0"
                              transform="translate(16 50) rotate(180)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path66-5"
                              data-name="path66"
                              d="M0,50V0H19V50H0"
                              transform="translate(35 50) rotate(180)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <g id="Group_41720" data-name="Group 41720" transform="translate(35 19.668)">
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
                              id="path66-6"
                              data-name="path66"
                              d="M0,43.961V0H12.978V43.961H0"
                              transform="translate(66.978 46.994) rotate(180)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path66-7"
                              data-name="path66"
                              d="M0,43.961V0H12.934V43.961H0"
                              transform="translate(31.953 46.994) rotate(180)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path66-8"
                              data-name="path66"
                              d="M0,43.961V0H12.978V43.961H0"
                              transform="translate(15.978 46.994) rotate(180)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                          </g>
                          <path
                            id="Path_78156"
                            data-name="Path 78156"
                            d="M5.975.6l-.6-.6L2.988,2.386.6,0,0,.6,2.386,2.988,0,5.374l.6.6L2.988,3.589,5.374,5.975l.6-.6L3.589,2.988Z"
                            transform="translate(206.778 520.725) rotate(135)"
                            fill="#96a0b5"
                            stroke="#97a1b5"
                            stroke-width="0.3"
                          />
                          <g id="right-arrow" transform="translate(213.274 519)">
                            <path
                              id="Path_78108"
                              data-name="Path 78108"
                              d="M2.738-379.846a.356.356,0,0,1,.176.176.461.461,0,0,1-.005.271c-.014.03-.295.325-.635.664l-.611.61,3.635.008,3.637.008.064.041a.446.446,0,0,1,.11.108.257.257,0,0,1,.046.181.257.257,0,0,1-.046.181.445.445,0,0,1-.11.108l-.064.041L5.3-377.44l-3.635.009.611.609c.34.339.621.633.635.664a.461.461,0,0,1,.005.271.341.341,0,0,1-.442.178c-.073-.034-1.869-1.8-1.93-1.9a.371.371,0,0,1,.005-.352c.071-.107,1.852-1.856,1.925-1.889A.317.317,0,0,1,2.738-379.846Z"
                              transform="translate(-0.5 379.876)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.4"
                            />
                          </g>
                          <g id="right-arrow-2" data-name="right-arrow" transform="translate(233.274 519)">
                            <path
                              id="Path_78108-2"
                              data-name="Path 78108"
                              d="M6.917-379.846a.356.356,0,0,0-.176.176.461.461,0,0,0,.005.271c.014.03.295.325.635.664l.611.609-3.635.008-3.637.008-.064.041a.446.446,0,0,0-.11.108.257.257,0,0,0-.046.181.257.257,0,0,0,.046.181.445.445,0,0,0,.11.108l.064.041,3.637.008,3.635.009-.611.609c-.34.339-.621.633-.635.664a.461.461,0,0,0-.005.271.341.341,0,0,0,.442.178c.073-.034,1.869-1.8,1.93-1.9a.371.371,0,0,0-.005-.352c-.071-.107-1.852-1.856-1.925-1.889A.317.317,0,0,0,6.917-379.846Z"
                              transform="translate(-0.5 379.876)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.4"
                            />
                          </g>
                          <path
                            id="Path_78157"
                            data-name="Path 78157"
                            d="M5.975.6l-.6-.6L2.988,2.386.6,0,0,.6,2.386,2.988,0,5.374l.6.6L2.988,3.589,5.374,5.975l.6-.6L3.589,2.988Z"
                            transform="translate(256.778 520.725) rotate(135)"
                            fill="#96a0b5"
                            stroke="#97a1b5"
                            stroke-width="0.3"
                          />
                        </g>
                      </svg>`,
    [monorailIconKeys.ONE_SLIDING_TWO_X_FIX_ONE_SLIDING]: `<svg xmlns="http://www.w3.org/2000/svg" width="71" height="51.014" viewBox="0 0 71 51.014">
                        <g id="Group_41727" data-name="Group 41727" transform="translate(-267.033 -495.5)">
                          <g id="Group_41725" data-name="Group 41725" transform="translate(75)">
                            <g id="Group_41723" data-name="Group 41723" transform="translate(192.533 496)">
                              <path
                                id="path66"
                                d="M0,50V0H70V50H0"
                                transform="translate(70 50) rotate(180)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <path
                                id="path66-2"
                                data-name="path66"
                                d="M0,50V0H21V50H0"
                                transform="translate(70 50) rotate(180)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <path
                                id="path66-3"
                                data-name="path66"
                                d="M0,50V0H21V50H0"
                                transform="translate(21 50) rotate(180)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <path
                                id="path66-4"
                                data-name="path66"
                                d="M0,50V0H28V50H0"
                                transform="translate(49 50.014) rotate(180)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <g id="Group_41720" data-name="Group 41720" transform="translate(0 19.668)">
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
                                id="path66-5"
                                data-name="path66"
                                d="M0,43.961V0H14.627V43.961H0"
                                transform="translate(66.978 46.994) rotate(180)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <path
                                id="path66-6"
                                data-name="path66"
                                d="M0,43.961V0H28V43.961H0"
                                transform="translate(49 46.994) rotate(180)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <path
                                id="path66-7"
                                data-name="path66"
                                d="M0,43.961V0H15.044V43.961H0"
                                transform="translate(18.044 46.994) rotate(180)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <g id="Group_41726" data-name="Group 41726" transform="translate(65 19.668)">
                                <rect
                                  id="Rectangle_10006-2"
                                  data-name="Rectangle 10006"
                                  width="3"
                                  height="8"
                                  transform="translate(2)"
                                  fill="#96a0b5"
                                />
                                <rect
                                  id="Rectangle_10024-2"
                                  data-name="Rectangle 10024"
                                  width="2"
                                  height="6"
                                  transform="translate(0 4)"
                                  fill="#96a0b5"
                                />
                              </g>
                            </g>
                            <g id="right-arrow" transform="translate(247.274 519)">
                              <path
                                id="Path_78108"
                                data-name="Path 78108"
                                d="M2.738-379.846a.356.356,0,0,1,.176.176.461.461,0,0,1-.005.271c-.014.03-.295.325-.635.664l-.611.61,3.635.008,3.637.008.064.041a.446.446,0,0,1,.11.108.257.257,0,0,1,.046.181.257.257,0,0,1-.046.181.445.445,0,0,1-.11.108l-.064.041L5.3-377.44l-3.635.009.611.609c.34.339.621.633.635.664a.461.461,0,0,1,.005.271.341.341,0,0,1-.442.178c-.073-.034-1.869-1.8-1.93-1.9a.371.371,0,0,1,.005-.352c.071-.107,1.852-1.856,1.925-1.889A.317.317,0,0,1,2.738-379.846Z"
                                transform="translate(-0.5 379.876)"
                                fill="#96a0b5"
                                stroke="#96a0b5"
                                stroke-width="0.4"
                              />
                            </g>
                            <g id="right-arrow-2" data-name="right-arrow" transform="translate(198.274 519)">
                              <path
                                id="Path_78108-2"
                                data-name="Path 78108"
                                d="M6.917-379.846a.356.356,0,0,0-.176.176.461.461,0,0,0,.005.271c.014.03.295.325.635.664l.611.609-3.635.008-3.637.008-.064.041a.446.446,0,0,0-.11.108.257.257,0,0,0-.046.181.257.257,0,0,0,.046.181.445.445,0,0,0,.11.108l.064.041,3.637.008,3.635.009-.611.609c-.34.339-.621.633-.635.664a.461.461,0,0,0-.005.271.341.341,0,0,0,.442.178c.073-.034,1.869-1.8,1.93-1.9a.371.371,0,0,0-.005-.352c-.071-.107-1.852-1.856-1.925-1.889A.317.317,0,0,0,6.917-379.846Z"
                                transform="translate(-0.5 379.876)"
                                fill="#96a0b5"
                                stroke="#96a0b5"
                                stroke-width="0.4"
                              />
                            </g>
                            <path
                              id="Path_78157"
                              data-name="Path 78157"
                              d="M7.182.723,6.459,0,3.591,2.868.723,0,0,.723,2.868,3.591,0,6.459l.723.723L3.591,4.314,6.459,7.182l.723-.723L4.314,3.591Z"
                              transform="translate(232.631 520.725) rotate(135)"
                              fill="#96a0b5"
                              stroke="#97a1b5"
                              stroke-width="0.3"
                            />
                          </g>
                        </g>
                      </svg>`,
    [monorailIconKeys.ONE_SLIDING_ONE_FIX_NOT_HANDLE_OUTSIDE]: `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="77.215"
                        height="51.5"
                        viewBox="0 0 77.215 51.5"
                      >
                        <g id="Group_53590" data-name="Group 53590" transform="translate(-278.084 -619.5)">
                          <path
                            id="Path_98972"
                            data-name="Path 98972"
                            d="M7.878,7.084l-.793.793L3.939,4.732.793,7.878,0,7.084,3.145,3.939,0,.793.793,0,3.939,3.145,7.084,0l.793.793L4.732,3.939Z"
                            transform="translate(335.709 650.571) rotate(-135)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.3"
                          />
                          <g id="right-arrow" transform="translate(305.248 648.144) rotate(180)">
                            <path
                              id="Path_78108"
                              data-name="Path 78108"
                              d="M3.856-379.831a.534.534,0,0,1,.264.264.692.692,0,0,1-.008.406c-.02.046-.442.487-.952,1l-.917.914,5.452.013,5.454.013.1.061a.668.668,0,0,1,.165.163.385.385,0,0,1,.069.272.385.385,0,0,1-.069.272.668.668,0,0,1-.165.163l-.1.061-5.454.013-5.452.013.917.914c.51.508.932.95.952,1a.692.692,0,0,1,.008.406.512.512,0,0,1-.663.267c-.109-.051-2.8-2.7-2.895-2.844A.556.556,0,0,1,.571-377c.107-.16,2.778-2.783,2.887-2.834A.476.476,0,0,1,3.856-379.831Z"
                              transform="translate(-0.5 379.876)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.4"
                            />
                          </g>
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
                            id="path68"
                            d="M156.64-955.52H188.2v43.684H156.64"
                            transform="translate(163.402 1578.717)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
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
                            d="M67.36-912.4v-50h76.215v50H67.36"
                            transform="translate(211.224 1582.4)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70"
                            d="M67.36-912.4v-50h41.459v50H67.36"
                            transform="translate(211.224 1582.9)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                        </g>
                      </svg>`,
    [monorailIconKeys.VERTICAL_MONORAIL]: `<svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48.121"
                        height="51.604"
                        viewBox="0 0 48.121 51.604"
                      >
                        <g id="Group_53686" data-name="Group 53686" transform="translate(-923.953 -318.502)">
                          <g
                            id="Group_53677"
                            data-name="Group 53677"
                            transform="translate(924.453 368.619) rotate(-90)"
                          >
                            <g id="Group_37499" data-name="Group 37499" transform="translate(0)">
                              <g id="Group_37496" data-name="Group 37496" transform="translate(-1)">
                                <g id="Group_37492" data-name="Group 37492" transform="translate(27.06)">
                                  <g id="Group_37490" data-name="Group 37490" transform="translate(0)">
                                    <g
                                      id="Group_37486"
                                      data-name="Group 37486"
                                      transform="translate(0 47.121) rotate(-90)"
                                    >
                                      <g id="Group_37459" data-name="Group 37459" transform="translate(0)">
                                        <path
                                          id="path66"
                                          d="M0,0V47.121H23.556V0H0"
                                          transform="translate(0 23.556) rotate(-90)"
                                          fill="none"
                                          stroke="#96a0b5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          stroke-width="1"
                                        />
                                      </g>
                                      <g id="Group_37484" data-name="Group 37484" transform="translate(3.517 0.026)">
                                        <path
                                          id="path66-2"
                                          data-name="path66"
                                          d="M0,0V40.084H20.14V0H0"
                                          transform="translate(0 20.14) rotate(-90)"
                                          fill="none"
                                          stroke="#96a0b5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          stroke-width="1"
                                        />
                                      </g>
                                    </g>
                                    <line
                                      id="Line_1806"
                                      data-name="Line 1806"
                                      x2="3.06"
                                      y2="3.06"
                                      transform="translate(20.495 43.781)"
                                      fill="none"
                                      stroke="#96a0b5"
                                      stroke-width="1"
                                    />
                                    <path
                                      id="Path_77835"
                                      data-name="Path 77835"
                                      d="M4.067,0,0,4.423"
                                      transform="translate(19.49 0.083)"
                                      fill="none"
                                      stroke="#96a0b5"
                                      stroke-width="1"
                                    />
                                  </g>
                                </g>
                                <g id="Group_37491" data-name="Group 37491">
                                  <g id="Group_37490-2" data-name="Group 37490">
                                    <g
                                      id="Group_37486-2"
                                      data-name="Group 37486"
                                      transform="translate(0.013 47.121) rotate(-90)"
                                    >
                                      <g id="Group_37459-2" data-name="Group 37459" transform="translate(0 0)">
                                        <path
                                          id="path66-3"
                                          data-name="path66"
                                          d="M0,0V47.121H27.049V0H0"
                                          transform="translate(0 27.049) rotate(-90)"
                                          fill="none"
                                          stroke="#96a0b5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          stroke-width="1"
                                        />
                                      </g>
                                      <g id="Group_37484-2" data-name="Group 37484" transform="translate(3.517 3.519)">
                                        <path
                                          id="path66-4"
                                          data-name="path66"
                                          d="M0,0V40.084H20.14V0H0"
                                          transform="translate(0 20.14) rotate(-90)"
                                          fill="none"
                                          stroke="#96a0b5"
                                          stroke-linecap="round"
                                          stroke-linejoin="round"
                                          stroke-miterlimit="10"
                                          stroke-width="1"
                                        />
                                      </g>
                                    </g>
                                    <line
                                      id="Line_1806-2"
                                      data-name="Line 1806"
                                      x2="3.06"
                                      y2="3.06"
                                      transform="translate(24.001 43.781)"
                                      fill="none"
                                      stroke="#96a0b5"
                                      stroke-width="1"
                                    />
                                    <line
                                      id="Line_1809"
                                      data-name="Line 1809"
                                      x2="3.06"
                                      y2="3.06"
                                      transform="translate(0.765 0.765)"
                                      fill="none"
                                      stroke="#96a0b5"
                                      stroke-width="1"
                                    />
                                    <path
                                      id="Path_77834"
                                      data-name="Path 77834"
                                      d="M4.207,0,0,4.169"
                                      transform="translate(0 42.672)"
                                      fill="none"
                                      stroke="#96a0b5"
                                      stroke-width="1"
                                    />
                                    <path
                                      id="Path_77835-2"
                                      data-name="Path 77835"
                                      d="M4.067,0,0,4.423"
                                      transform="translate(22.996 0.083)"
                                      fill="none"
                                      stroke="#96a0b5"
                                      stroke-width="1"
                                    />
                                  </g>
                                </g>
                                <path
                                  id="Path_99086"
                                  data-name="Path 99086"
                                  d="M3.43,6.38a.545.545,0,0,0,.27-.27.707.707,0,0,0-.008-.415c-.021-.047-.451-.5-.973-1.017l-.937-.934,5.571-.013,4.261-.013.1-.062a.683.683,0,0,0,.169-.166.394.394,0,0,0,.07-.278.394.394,0,0,0-.07-.278.683.683,0,0,0-.169-.166l-.1-.062L7.353,2.693,1.782,2.68l.937-.934c.522-.519.952-.97.973-1.017A.707.707,0,0,0,3.7.313.523.523,0,0,0,3.022.041C2.911.093.158,2.8.064,2.947a.569.569,0,0,0,.008.54c.109.163,2.839,2.844,2.95,2.9A.486.486,0,0,0,3.43,6.38Z"
                                  transform="translate(20.06 27.116) rotate(180)"
                                  fill="#96a0b5"
                                  stroke="#96a0b5"
                                  stroke-width="0.2"
                                />
                                <text
                                  id="_"
                                  data-name="+"
                                  transform="matrix(0, 1, 1, 0, 43.246, 16.903)"
                                  fill="#96a0b5"
                                  font-size="20"
                                  font-family="SegoeUI-Semibold, Segoe UI"
                                  font-weight="600"
                                >
                                  <tspan x="0" y="0">+</tspan>
                                </text>
                              </g>
                            </g>
                          </g>
                          <g id="Group_53679" data-name="Group 53679" transform="translate(954.576 363.057) rotate(90)">
                            <rect
                              id="Rectangle_10035"
                              data-name="Rectangle 10035"
                              width="3.937"
                              height="10.499"
                              transform="translate(2.625 0)"
                              fill="#96a0b5"
                            />
                            <rect
                              id="Rectangle_10036"
                              data-name="Rectangle 10036"
                              width="2.625"
                              height="7.874"
                              transform="translate(0 5.25)"
                              fill="#96a0b5"
                            />
                          </g>
                        </g>
                      </svg>`,
  },
  [IconPrefix.MONORAIL_LIFT_AND_SLIDE]: {
    [monorailIconKeys.ONE_FIX_ONE_L_AND_S_NOT_HANDLE_OUTSIDE]: `<svg  width="72" height="52" viewBox="0 0 72 52" fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path d="M71 21H68V29H71V21Z" fill="#96A0B5" />
    <path d="M68 25H66V31H68V25Z" fill="#96A0B5" />
    <path d="M71 1V51L1 51V1L71 1Z" stroke="#96A0B5" stroke-miterlimit="10" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M71 1V51L35 51L35 1L71 1Z" stroke="#96A0B5" stroke-miterlimit="10" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M68 4V48L38 48L38 4L68 4Z" stroke="#96A0B5" stroke-miterlimit="10" stroke-linecap="round"
      stroke-linejoin="round" />
    <path d="M35 4L35 48L4 48L4 4L35 4Z" stroke="#96A0B5" stroke-miterlimit="10" stroke-linecap="round"
      stroke-linejoin="round" />
    <path
      d="M50.472 26.6034C50.5285 26.578 50.5752 26.5351 50.6053 26.4811C50.6354 26.427 50.6472 26.3647 50.639 26.3033V26.1634L49.776 25.0124L49.104 24.1384L53.778 24.1493H56.465L56.565 24.0493C56.6264 23.9611 56.6588 23.8559 56.6577 23.7484C56.6566 23.6409 56.6221 23.5364 56.559 23.4494L56.476 23.3544L53.776 23.3404L49.09 23.3263L49.995 22.4264C50.495 21.9264 50.917 21.4843 50.94 21.4323C50.9615 21.3802 50.9685 21.3234 50.9603 21.2676C50.9522 21.2118 50.9291 21.1593 50.8936 21.1156C50.858 21.0719 50.8113 21.0385 50.7584 21.0191C50.7055 20.9997 50.6484 20.995 50.593 21.0054C50.1128 21.3929 49.6643 21.8182 49.252 22.2773C48.046 23.4863 48 23.5354 48 23.6384C48.0005 23.7024 48.0141 23.7657 48.04 23.8244C48.103 23.9444 50.116 26.5774 50.208 26.6114C50.2486 26.634 50.2946 26.6453 50.3411 26.6439C50.3876 26.6424 50.4328 26.6285 50.472 26.6034Z"
      fill="#96A0B5" stroke="#96A0B5" stroke-width="0.2" />
    <path
      d="M55.9082 23.6645V30.4335L56.0082 30.5335C56.082 30.5946 56.1753 30.6273 56.2711 30.6254C56.3669 30.6236 56.4588 30.5874 56.5302 30.5235L56.6232 30.4405L56.6382 27.7405L56.6472 23.6645H55.9082Z"
      fill="#96A0B5" stroke="#96A0B5" stroke-width="0.2" />
    <path
      d="M14.0078 26.0881L14.0068 25.0762L19.5766 25.0762L19.5766 19.5064H20.5894L20.5894 25.0762L26.1592 25.0762L26.1592 26.089L20.5894 26.089L20.5894 31.6588L19.5766 31.6588L19.5766 26.089L14.0078 26.0881Z"
      fill="#96A0B5" stroke="#96A0B5" stroke-width="0.3" />
  </svg>`,
    [monorailIconKeys.ONE_FIX_TWO_L_AND_S_ONE_fix_NOT_HANDLE_OUTSIDE]: `<svg
                        width="84"
                        height="52"
                        viewBox="0 0 84 52"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M42 21H45V29H42V21Z" fill="#96A0B5" />
                        <path d="M45 25H47V31H45V25Z" fill="#96A0B5" />
                        <path
                          d="M1 1L1 51L83 51V1L1 1Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 1L20 51H42L42 1H20Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M64 1V51H42L42 1H64Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23 4L23 48H39L39 4H23Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M64 4V48H80V4H64Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4 4L4 48H20L20 4H4Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M45 4L45 48H61L61 4H45Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M33.1862 26.6034C33.1297 26.578 33.083 26.5351 33.0529 26.4811C33.0228 26.427 33.011 26.3647 33.0192 26.3033V26.1634L33.8822 25.0124L34.5542 24.1384L29.8802 24.1493H27.1932L27.0932 24.0493C27.0318 23.9611 26.9994 23.8559 27.0005 23.7484C27.0016 23.6409 27.0361 23.5364 27.0992 23.4494L27.1822 23.3544L29.8822 23.3404L34.5682 23.3263L33.6632 22.4264C33.1632 21.9264 32.7412 21.4843 32.7182 21.4323C32.6967 21.3802 32.6897 21.3234 32.6979 21.2676C32.706 21.2118 32.7291 21.1593 32.7646 21.1156C32.8002 21.0719 32.8469 21.0385 32.8998 21.0191C32.9527 20.9997 33.0098 20.995 33.0652 21.0054C33.5454 21.3929 33.9939 21.8182 34.4062 22.2773C35.6122 23.4863 35.6582 23.5354 35.6582 23.6384C35.6577 23.7024 35.6441 23.7657 35.6182 23.8244C35.5552 23.9444 33.5422 26.5774 33.4502 26.6114C33.4096 26.634 33.3636 26.6453 33.3171 26.6439C33.2706 26.6424 33.2254 26.6285 33.1862 26.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M27.75 23.6645V30.4335L27.65 30.5335C27.5762 30.5946 27.4829 30.6273 27.3871 30.6254C27.2913 30.6236 27.1994 30.5874 27.128 30.5235L27.035 30.4405L27.02 27.7405L27.011 23.6645H27.75Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M51.472 26.6034C51.5285 26.578 51.5752 26.5351 51.6053 26.4811C51.6354 26.427 51.6472 26.3647 51.639 26.3033V26.1634L50.776 25.0124L50.104 24.1384L54.778 24.1493H57.465L57.565 24.0493C57.6264 23.9611 57.6588 23.8559 57.6577 23.7484C57.6566 23.6409 57.6221 23.5364 57.559 23.4494L57.476 23.3544L54.776 23.3404L50.09 23.3263L50.995 22.4264C51.495 21.9264 51.917 21.4843 51.94 21.4323C51.9615 21.3802 51.9685 21.3234 51.9603 21.2676C51.9522 21.2118 51.9291 21.1593 51.8936 21.1156C51.858 21.0719 51.8113 21.0385 51.7584 21.0191C51.7055 20.9997 51.6484 20.995 51.593 21.0054C51.1128 21.3929 50.6643 21.8182 50.252 22.2773C49.046 23.4863 49 23.5354 49 23.6384C49.0005 23.7024 49.0141 23.7657 49.04 23.8244C49.103 23.9444 51.116 26.5774 51.208 26.6114C51.2486 26.634 51.2946 26.6453 51.3411 26.6439C51.3876 26.6424 51.4328 26.6285 51.472 26.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M56.9082 23.6645V30.4335L57.0082 30.5335C57.082 30.5946 57.1753 30.6273 57.2711 30.6254C57.3669 30.6236 57.4588 30.5874 57.5302 30.5235L57.6232 30.4405L57.6382 27.7405L57.6472 23.6645H56.9082Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M77.2186 25.2824L77.2195 24.3855L72.2829 24.3855L72.2829 19.4489L71.3851 19.4489L71.3851 24.3855L66.4485 24.3855L66.4485 25.2832L71.3851 25.2833L71.3851 30.2199L72.2829 30.2199L72.2828 25.2832L77.2186 25.2824Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.3"
                        />
                        <path
                          d="M17.2186 25.2824L17.2195 24.3855L12.2829 24.3855L12.2829 19.4489L11.3851 19.4489L11.3851 24.3855L6.44847 24.3855L6.44848 25.2832L11.3851 25.2833L11.3851 30.2199L12.2829 30.2199L12.2828 25.2832L17.2186 25.2824Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.3"
                        />
                      </svg>`,
    [monorailIconKeys.ONE_L_AND_S_TWO_FIX_ONE_L_AND_S]: `<svg width="72" height="52" viewBox="0 0 72 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 21H4V29H1V21Z" fill="#96A0B5" />
                        <path d="M4 25H6V31H4V25Z" fill="#96A0B5" />
                        <path d="M71 21H68V29H71V21Z" fill="#96A0B5" />
                        <path d="M68 25H66V31H68V25Z" fill="#96A0B5" />
                        <path
                          d="M1 1L1 51L71 51V1L1 1Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M1 1L1 51H24L24 1H1Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M71 1V51H48L48 1H71Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M4 4L4 48H21L21 4H4Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M24 4L24 48H48L48 4H24Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M51 4L51 48H68V4H51Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M15.1862 27.6034C15.1297 27.578 15.083 27.5351 15.0529 27.4811C15.0228 27.427 15.011 27.3647 15.0192 27.3033V27.1634L15.8822 26.0124L16.5542 25.1384L11.8802 25.1493H9.1932L9.0932 25.0493C9.03181 24.9611 8.99941 24.8559 9.00048 24.7484C9.00156 24.6409 9.03606 24.5364 9.0992 24.4494L9.1822 24.3544L11.8822 24.3404L16.5682 24.3263L15.6632 23.4264C15.1632 22.9264 14.7412 22.4843 14.7182 22.4323C14.6967 22.3802 14.6897 22.3234 14.6979 22.2676C14.706 22.2118 14.7291 22.1593 14.7646 22.1156C14.8002 22.0719 14.8469 22.0385 14.8998 22.0191C14.9527 21.9997 15.0098 21.995 15.0652 22.0054C15.5454 22.3929 15.9939 22.8182 16.4062 23.2773C17.6122 24.4863 17.6582 24.5354 17.6582 24.6384C17.6577 24.7024 17.6441 24.7657 17.6182 24.8244C17.5552 24.9444 15.5422 27.5774 15.4502 27.6114C15.4096 27.634 15.3636 27.6453 15.3171 27.6439C15.2706 27.6424 15.2254 27.6285 15.1862 27.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M9.75 24.6645V31.4335L9.65 31.5335C9.57622 31.5946 9.48294 31.6273 9.38714 31.6254C9.29134 31.6236 9.19939 31.5874 9.128 31.5235L9.035 31.4405L9.02 28.7405L9.011 24.6645H9.75Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M57.472 27.6034C57.5285 27.578 57.5752 27.5351 57.6053 27.4811C57.6354 27.427 57.6472 27.3647 57.639 27.3033V27.1634L56.776 26.0124L56.104 25.1384L60.778 25.1493H63.465L63.565 25.0493C63.6264 24.9611 63.6588 24.8559 63.6577 24.7484C63.6566 24.6409 63.6221 24.5364 63.559 24.4494L63.476 24.3544L60.776 24.3404L56.09 24.3263L56.995 23.4264C57.495 22.9264 57.917 22.4843 57.94 22.4323C57.9615 22.3802 57.9685 22.3234 57.9603 22.2676C57.9522 22.2118 57.9291 22.1593 57.8936 22.1156C57.858 22.0719 57.8113 22.0385 57.7584 22.0191C57.7055 21.9997 57.6484 21.995 57.593 22.0054C57.1128 22.3929 56.6643 22.8182 56.252 23.2773C55.046 24.4863 55 24.5354 55 24.6384C55.0005 24.7024 55.0141 24.7657 55.04 24.8244C55.103 24.9444 57.116 27.5774 57.208 27.6114C57.2486 27.634 57.2946 27.6453 57.3411 27.6439C57.3876 27.6424 57.4328 27.6285 57.472 27.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M62.9082 24.6645V31.4335L63.0082 31.5335C63.082 31.5946 63.1753 31.6273 63.2711 31.6254C63.3669 31.6236 63.4588 31.5874 63.5302 31.5235L63.6232 31.4405L63.6382 28.7405L63.6472 24.6645H62.9082Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M41.2186 25.2824L41.2195 24.3855L36.2829 24.3855L36.2829 19.4489L35.3851 19.4489L35.3851 24.3855L30.4485 24.3855L30.4485 25.2832L35.3851 25.2833L35.3851 30.2199L36.2829 30.2199L36.2828 25.2832L41.2186 25.2824Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.3"
                        />
                      </svg>`,
  },
};
