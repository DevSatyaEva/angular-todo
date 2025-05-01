import { IconPrefix } from '../models/icon-prefix';
import { IconPrefixType } from '../models/icon.model';

export const sashDesignIconKeys = {
  TWIN_SASH_FIXED_WINDOW: 'twinSashFixedWindow',
  TWIN_SASH_LEFT_OPENABLE_ARROW_HINGE_OUTSIDE: 'twinSashLeftOpenableArrowHingeOutside',
  TWIN_SASH_LEFT_OPENABLE_ARROW_HANDLE_OUTSIDE: 'twinSashLeftOpenableArrowHandleOutside',

  TWIN_SASH_FRENCH_OPENABLE_ARROW_HINGE_OUTSIDE: 'twinSashFrenchOpenableArrowHingeOutside',
  TWIN_SASH_FRENCH_OPENABLE_ARROW_HANDLE_OUTSIDE: 'twinSashFrenchOpenableArrowHandleOutside',

  TWIN_SASH_TOP_HUNG_ARROW_HINGE_OUTSIDE: 'twinSashTopHungArrowHingeOutside',
  TWIN_SASH_TOP_HUNG_ARROW_HANDLE_OUTSIDE: 'twinSashTopHungArrowHandleOutside',

  TWIN_SASH_BOTTOM_HUNG_ARROW_HINGE_OUTSIDE: 'twinSashBottomHungArrowHingeOutside',
  TWIN_SASH_BOTTOM_HUNG_ARROW_HANDLE_OUTSIDE: 'twinSashBottomHungArrowHandleOutside',

  //only mesh-sash
  LEFT_MESH_SASH: 'leftMeshSash',
  MEETING_MESH_SASH: 'meetingMeshSash',
} as const;

export type IconKey = typeof sashDesignIconKeys[keyof typeof sashDesignIconKeys];

export const SASH_DESIGN_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.TWIN_SASH]: {
    [sashDesignIconKeys.TWIN_SASH_FIXED_WINDOW]: `<svg
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
    [sashDesignIconKeys.TWIN_SASH_FRENCH_OPENABLE_ARROW_HINGE_OUTSIDE]: `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="50"
                    viewBox="0 0 40 50"
                  >
                    <g id="Group_37026" data-name="Group 37026" transform="translate(-5 -575)">
                      <g id="Group_37025" data-name="Group 37025">
                        <g id="Group_14379" data-name="Group 14379" transform="translate(-250 255)">
                          <g
                            id="Rectangle_4467"
                            data-name="Rectangle 4467"
                            transform="translate(274.649 320)"
                            fill="#fff"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                          >
                            <rect width="20.351" height="50" stroke="none" />
                            <rect x="0.5" y="0.5" width="19.351" height="49" fill="none" />
                          </g>
                          <g
                            id="Rectangle_4489"
                            data-name="Rectangle 4489"
                            transform="translate(274.649 320)"
                            fill="#fff"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                          >
                            <rect width="20.351" height="50" stroke="none" />
                            <rect x="0.5" y="0.5" width="19.351" height="49" fill="none" />
                          </g>
                          <g
                            id="Rectangle_4468"
                            data-name="Rectangle 4468"
                            transform="translate(278.158 323.816)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                          >
                            <rect width="12.5" height="42.308" stroke="none" />
                            <rect x="0.5" y="0.5" width="11.5" height="41.308" fill="none" />
                          </g>
                          <path
                            id="Path_20366"
                            data-name="Path 20366"
                            d="M129.591,234.333s-5.269-10.1-9.213-17.4c-.673-1.246-1.418-2.611-2.032-3.709"
                            transform="translate(160.063 111.268)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                            stroke-dasharray="3 2"
                          />
                          <path
                            id="Path_20438"
                            data-name="Path 20438"
                            d="M118.346,254.216l11.245-19.839"
                            transform="translate(160.063 111.224)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                            stroke-dasharray="3 2"
                          />
                          <g
                            id="Rectangle_4467-2"
                            data-name="Rectangle 4467"
                            transform="translate(255 320)"
                            fill="#fff"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                          >
                            <rect width="20.351" height="50" stroke="none" />
                            <rect x="0.5" y="0.5" width="19.351" height="49" fill="none" />
                          </g>
                          <g
                            id="Rectangle_4468-2"
                            data-name="Rectangle 4468"
                            transform="translate(258.754 323.816)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                          >
                            <rect width="12.842" height="42.308" stroke="none" />
                            <rect x="0.5" y="0.5" width="11.842" height="41.308" fill="none" />
                          </g>
                          <path
                            id="Path_20366-2"
                            data-name="Path 20366"
                            d="M132.759,252.55l-10.012-19.032L132.8,213.264"
                            transform="translate(138.2 112.446)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                            stroke-dasharray="3 2"
                          />
                          <rect
                            id="Rectangle_4492"
                            data-name="Rectangle 4492"
                            width="2.835"
                            height="7.692"
                            transform="translate(271.55 341.153)"
                            fill="#96a0b5"
                          />
                          <rect
                            id="Rectangle_4488"
                            data-name="Rectangle 4488"
                            width="1.404"
                            height="8.654"
                            transform="translate(269.2 345)"
                            fill="#96a0b5"
                          />
                        </g>
                        <g id="Group_37019" data-name="Group 37019" transform="translate(0 69.5)">
                          <path
                            id="Path_60104"
                            data-name="Path 60104"
                            d="M0,0V19.926"
                            transform="translate(40.5 535.188)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_60107"
                            data-name="Path 60107"
                            d="M0,3.688v15.8"
                            transform="translate(37.5 535.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <line
                            id="Line_1652"
                            data-name="Line 1652"
                            y2="12"
                            transform="translate(34.5 543)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <line
                            id="Line_1653"
                            data-name="Line 1653"
                            y2="8"
                            transform="translate(31.5 547)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_60103"
                            data-name="Path 60103"
                            d="M0,.824V4.937"
                            transform="translate(28.5 550.176)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_60105"
                            data-name="Path 60105"
                            d="M34,0"
                            transform="translate(10.5 533.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_60106"
                            data-name="Path 60106"
                            d="M0,24.5,18.912-.262"
                            transform="translate(25.5 530.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <line
                            id="Line_1664"
                            data-name="Line 1664"
                            y1="19"
                            x2="15"
                            transform="translate(29.5 536)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <line
                            id="Line_1665"
                            data-name="Line 1665"
                            y1="13.125"
                            x2="11"
                            transform="translate(33.5 541.875)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <line
                            id="Line_1666"
                            data-name="Line 1666"
                            y1="8.5"
                            x2="7"
                            transform="translate(37.5 546.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <line
                            id="Line_1667"
                            data-name="Line 1667"
                            y1="4.5"
                            x2="4"
                            transform="translate(40.5 550.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                        </g>
                      </g>
                      <g id="Group_37020" data-name="Group 37020" transform="translate(5.5 599.738)">
                        <path
                          id="Path_60104-2"
                          data-name="Path 60104"
                          d="M0,0V19.926"
                          transform="translate(4 4.949)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <path
                          id="Path_60107-2"
                          data-name="Path 60107"
                          d="M0,3.688v15.8"
                          transform="translate(7 5.262)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1652-2"
                          data-name="Line 1652"
                          y2="12"
                          transform="translate(10 12.762)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1653-2"
                          data-name="Line 1653"
                          y2="8"
                          transform="translate(13 16.762)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <path
                          id="Path_60103-2"
                          data-name="Path 60103"
                          d="M0,.824V4.937"
                          transform="translate(16 19.938)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <path
                          id="Path_60105-2"
                          data-name="Path 60105"
                          d="M34,0"
                          transform="translate(-34 3.262)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <path
                          id="Path_60106-2"
                          data-name="Path 60106"
                          d="M18.912,24.5,0-.262"
                          transform="translate(0.088 0.262)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1664-2"
                          data-name="Line 1664"
                          x1="15"
                          y1="19"
                          transform="translate(0 5.762)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1665-2"
                          data-name="Line 1665"
                          x1="11"
                          y1="13.125"
                          transform="translate(0 11.637)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1666-2"
                          data-name="Line 1666"
                          x1="7"
                          y1="8.5"
                          transform="translate(0 16.262)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1667-2"
                          data-name="Line 1667"
                          x1="4"
                          y1="4.5"
                          transform="translate(0 20.262)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                      </g>
                    </g>
                  </svg>`,
    [sashDesignIconKeys.TWIN_SASH_FRENCH_OPENABLE_ARROW_HANDLE_OUTSIDE]: `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="50"
                    viewBox="0 0 40 50"
                  >
                    <g id="Group_37026" data-name="Group 37026" transform="translate(-5 -575)">
                      <g id="Group_37025" data-name="Group 37025">
                        <g id="Group_14379" data-name="Group 14379" transform="translate(-250 255)">
                          <g
                            id="Rectangle_4467"
                            data-name="Rectangle 4467"
                            transform="translate(274.649 320)"
                            fill="#fff"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                          >
                            <rect width="20.351" height="50" stroke="none" />
                            <rect x="0.5" y="0.5" width="19.351" height="49" fill="none" />
                          </g>
                          <g
                            id="Rectangle_4489"
                            data-name="Rectangle 4489"
                            transform="translate(274.649 320)"
                            fill="#fff"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                          >
                            <rect width="20.351" height="50" stroke="none" />
                            <rect x="0.5" y="0.5" width="19.351" height="49" fill="none" />
                          </g>
                          <g
                            id="Rectangle_4468"
                            data-name="Rectangle 4468"
                            transform="translate(278.158 323.816)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                          >
                            <rect width="12.5" height="42.308" stroke="none" />
                            <rect x="0.5" y="0.5" width="11.5" height="41.308" fill="none" />
                          </g>
                          <g
                            id="Group_53740"
                            data-name="Group 53740"
                            transform="translate(568.063 689.932) rotate(180)"
                          >
                            <path
                              id="Path_20366"
                              data-name="Path 20366"
                              d="M129.591,234.333s-5.269-10.1-9.213-17.4c-.673-1.246-1.418-2.611-2.032-3.709"
                              transform="translate(160.063 111.268)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linejoin="round"
                              stroke-width="1"
                              stroke-dasharray="3 2"
                            />
                            <path
                              id="Path_20438"
                              data-name="Path 20438"
                              d="M118.346,254.216l11.245-19.839"
                              transform="translate(160.063 111.224)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                              stroke-dasharray="3 2"
                            />
                          </g>
                          <g
                            id="Rectangle_4467-2"
                            data-name="Rectangle 4467"
                            transform="translate(255 320)"
                            fill="#fff"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                          >
                            <rect width="20.351" height="50" stroke="none" />
                            <rect x="0.5" y="0.5" width="19.351" height="49" fill="none" />
                          </g>
                          <g
                            id="Rectangle_4468-2"
                            data-name="Rectangle 4468"
                            transform="translate(258.754 323.816)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                          >
                            <rect width="12.842" height="42.308" stroke="none" />
                            <rect x="0.5" y="0.5" width="11.842" height="41.308" fill="none" />
                          </g>
                          <path
                            id="Path_20366-2"
                            data-name="Path 20366"
                            d="M132.759,252.55l-10.012-19.032L132.8,213.264"
                            transform="translate(393.747 578.26) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linejoin="round"
                            stroke-width="1"
                            stroke-dasharray="3 2"
                          />
                          <rect
                            id="Rectangle_4492"
                            data-name="Rectangle 4492"
                            width="2.835"
                            height="7.692"
                            transform="translate(271.55 341.153)"
                            fill="#96a0b5"
                          />
                          <rect
                            id="Rectangle_4488"
                            data-name="Rectangle 4488"
                            width="1.404"
                            height="8.654"
                            transform="translate(269.2 345)"
                            fill="#96a0b5"
                          />
                        </g>
                        <g id="Group_37019" data-name="Group 37019" transform="translate(0 69.5)">
                          <path
                            id="Path_60104"
                            data-name="Path 60104"
                            d="M0,0V19.926"
                            transform="translate(40.5 535.188)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_60107"
                            data-name="Path 60107"
                            d="M0,3.688v15.8"
                            transform="translate(37.5 535.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <line
                            id="Line_1652"
                            data-name="Line 1652"
                            y2="12"
                            transform="translate(34.5 543)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <line
                            id="Line_1653"
                            data-name="Line 1653"
                            y2="8"
                            transform="translate(31.5 547)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_60103"
                            data-name="Path 60103"
                            d="M0,.824V4.937"
                            transform="translate(28.5 550.176)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_60105"
                            data-name="Path 60105"
                            d="M34,0"
                            transform="translate(10.5 533.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_60106"
                            data-name="Path 60106"
                            d="M0,24.5,18.912-.262"
                            transform="translate(25.5 530.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <line
                            id="Line_1664"
                            data-name="Line 1664"
                            y1="19"
                            x2="15"
                            transform="translate(29.5 536)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <line
                            id="Line_1665"
                            data-name="Line 1665"
                            y1="13.125"
                            x2="11"
                            transform="translate(33.5 541.875)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <line
                            id="Line_1666"
                            data-name="Line 1666"
                            y1="8.5"
                            x2="7"
                            transform="translate(37.5 546.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <line
                            id="Line_1667"
                            data-name="Line 1667"
                            y1="4.5"
                            x2="4"
                            transform="translate(40.5 550.5)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                        </g>
                      </g>
                      <g id="Group_37020" data-name="Group 37020" transform="translate(5.5 599.738)">
                        <path
                          id="Path_60104-2"
                          data-name="Path 60104"
                          d="M0,0V19.926"
                          transform="translate(4 4.949)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <path
                          id="Path_60107-2"
                          data-name="Path 60107"
                          d="M0,3.688v15.8"
                          transform="translate(7 5.262)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1652-2"
                          data-name="Line 1652"
                          y2="12"
                          transform="translate(10 12.762)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1653-2"
                          data-name="Line 1653"
                          y2="8"
                          transform="translate(13 16.762)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <path
                          id="Path_60103-2"
                          data-name="Path 60103"
                          d="M0,.824V4.937"
                          transform="translate(16 19.938)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <path
                          id="Path_60105-2"
                          data-name="Path 60105"
                          d="M34,0"
                          transform="translate(-34 3.262)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <path
                          id="Path_60106-2"
                          data-name="Path 60106"
                          d="M18.912,24.5,0-.262"
                          transform="translate(0.088 0.262)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1664-2"
                          data-name="Line 1664"
                          x1="15"
                          y1="19"
                          transform="translate(0 5.762)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1665-2"
                          data-name="Line 1665"
                          x1="11"
                          y1="13.125"
                          transform="translate(0 11.637)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1666-2"
                          data-name="Line 1666"
                          x1="7"
                          y1="8.5"
                          transform="translate(0 16.262)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1667-2"
                          data-name="Line 1667"
                          x1="4"
                          y1="4.5"
                          transform="translate(0 20.262)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                      </g>
                    </g>
                  </svg>`,
    [sashDesignIconKeys.TWIN_SASH_LEFT_OPENABLE_ARROW_HINGE_OUTSIDE]: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="50"
                  viewBox="0 0 40 50"
                >
                  <g id="Group_37024" data-name="Group 37024" transform="translate(-5 -509)">
                    <g id="Group_14376" data-name="Group 14376" transform="translate(-175 261)">
                      <g
                        id="Rectangle_4467"
                        data-name="Rectangle 4467"
                        transform="translate(180 248)"
                        fill="#fff"
                        stroke="#96a0b5"
                        stroke-linejoin="round"
                        stroke-width="1"
                      >
                        <rect width="40" height="50" stroke="none" />
                        <rect x="0.5" y="0.5" width="39" height="49" fill="none" />
                      </g>
                      <g id="Path_20488" data-name="Path 20488" transform="translate(184 251.846)">
                        <path id="Path_60099" data-name="Path 60099" d="M31.5,41.808H.5V.5h31Z" fill="none" />
                        <path
                          id="Path_60100"
                          data-name="Path 60100"
                          d="M1,1V41.308H31V1H1M0,0H32V42.308H0Z"
                          fill="#96a0b5"
                        />
                      </g>
                      <path
                        id="Path_20366"
                        data-name="Path 20366"
                        d="M117.059,253.8l29.506-19.64-30.177-19.925"
                        transform="translate(68.513 39.003)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                        stroke-dasharray="3 2"
                      />
                      <rect
                        id="Rectangle_4469"
                        data-name="Rectangle 4469"
                        width="4.04"
                        height="7.692"
                        transform="translate(180.96 269.154)"
                        fill="#96a0b5"
                      />
                      <rect
                        id="Rectangle_4488"
                        data-name="Rectangle 4488"
                        width="2"
                        height="8.654"
                        transform="translate(185 273)"
                        fill="#96a0b5"
                      />
                    </g>
                    <g id="Group_37018" data-name="Group 37018">
                      <line
                        id="Line_1649"
                        data-name="Line 1649"
                        y1="28"
                        x2="39"
                        transform="translate(5.5 530.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1650"
                        data-name="Line 1650"
                        y2="26"
                        transform="translate(40.5 532.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1651"
                        data-name="Line 1651"
                        y2="23.5"
                        transform="translate(37.5 535.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1652"
                        data-name="Line 1652"
                        y2="21"
                        transform="translate(34.5 537.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1653"
                        data-name="Line 1653"
                        y2="19.5"
                        transform="translate(31.5 539.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <path
                        id="Path_60103"
                        data-name="Path 60103"
                        d="M0,.824V16.986"
                        transform="translate(28.5 541.514)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1655"
                        data-name="Line 1655"
                        y2="15"
                        transform="translate(25.5 543.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1657"
                        data-name="Line 1657"
                        y2="12.5"
                        transform="translate(22.5 546.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1658"
                        data-name="Line 1658"
                        y2="10.5"
                        transform="translate(19.5 548.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1659"
                        data-name="Line 1659"
                        y2="8"
                        transform="translate(16.5 550.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1660"
                        data-name="Line 1660"
                        y2="5.625"
                        transform="translate(13.5 552.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1662"
                        data-name="Line 1662"
                        y2="3.25"
                        transform="translate(10.5 555.25)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1661"
                        data-name="Line 1661"
                        y1="25"
                        x2="34"
                        transform="translate(10.5 533.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1669"
                        data-name="Line 1669"
                        y1="28"
                        x2="39"
                        transform="translate(5.5 530.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1663"
                        data-name="Line 1663"
                        y1="22"
                        x2="29"
                        transform="translate(15.5 536.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1664"
                        data-name="Line 1664"
                        y1="19"
                        x2="24"
                        transform="translate(20.5 539.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1665"
                        data-name="Line 1665"
                        y1="15"
                        x2="20"
                        transform="translate(24.5 543.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1666"
                        data-name="Line 1666"
                        y1="12"
                        x2="15"
                        transform="translate(29.5 546.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1667"
                        data-name="Line 1667"
                        y1="8"
                        x2="10"
                        transform="translate(34.5 550.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1668"
                        data-name="Line 1668"
                        y1="5"
                        x2="6"
                        transform="translate(38.5 553.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1670"
                        data-name="Line 1670"
                        y1="2.25"
                        x2="3"
                        transform="translate(41.5 556.25)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                    </g>
                  </g>
                </svg>`,
    [sashDesignIconKeys.TWIN_SASH_LEFT_OPENABLE_ARROW_HANDLE_OUTSIDE]: `<svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="50"
                  viewBox="0 0 40 50"
                >
                  <g id="Group_37024" data-name="Group 37024" transform="translate(-5 -509)">
                    <g id="Group_14376" data-name="Group 14376" transform="translate(-175 261)">
                      <g
                        id="Rectangle_4467"
                        data-name="Rectangle 4467"
                        transform="translate(180 248)"
                        fill="#fff"
                        stroke="#96a0b5"
                        stroke-linejoin="round"
                        stroke-width="1"
                      >
                        <rect width="40" height="50" stroke="none" />
                        <rect x="0.5" y="0.5" width="39" height="49" fill="none" />
                      </g>
                      <g id="Path_20488" data-name="Path 20488" transform="translate(184 251.846)">
                        <path id="Path_60099" data-name="Path 60099" d="M31.5,41.808H.5V.5h31Z" fill="none" />
                        <path
                          id="Path_60100"
                          data-name="Path 60100"
                          d="M1,1V41.308H31V1H1M0,0H32V42.308H0Z"
                          fill="#96a0b5"
                        />
                      </g>
                      <path
                        id="Path_20366"
                        data-name="Path 20366"
                        d="M117.059,253.8l29.506-19.64-30.177-19.925"
                        transform="translate(331.466 507.038) rotate(180)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                        stroke-dasharray="3 2"
                      />
                      <rect
                        id="Rectangle_4469"
                        data-name="Rectangle 4469"
                        width="4.04"
                        height="7.692"
                        transform="translate(180.96 269.154)"
                        fill="#96a0b5"
                      />
                      <rect
                        id="Rectangle_4488"
                        data-name="Rectangle 4488"
                        width="2"
                        height="8.654"
                        transform="translate(185 273)"
                        fill="#96a0b5"
                      />
                    </g>
                    <g id="Group_37018" data-name="Group 37018">
                      <line
                        id="Line_1649"
                        data-name="Line 1649"
                        y1="28"
                        x2="39"
                        transform="translate(5.5 530.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1650"
                        data-name="Line 1650"
                        y2="26"
                        transform="translate(40.5 532.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1651"
                        data-name="Line 1651"
                        y2="23.5"
                        transform="translate(37.5 535.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1652"
                        data-name="Line 1652"
                        y2="21"
                        transform="translate(34.5 537.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1653"
                        data-name="Line 1653"
                        y2="19.5"
                        transform="translate(31.5 539.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <path
                        id="Path_60103"
                        data-name="Path 60103"
                        d="M0,.824V16.986"
                        transform="translate(28.5 541.514)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1655"
                        data-name="Line 1655"
                        y2="15"
                        transform="translate(25.5 543.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1657"
                        data-name="Line 1657"
                        y2="12.5"
                        transform="translate(22.5 546.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1658"
                        data-name="Line 1658"
                        y2="10.5"
                        transform="translate(19.5 548.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1659"
                        data-name="Line 1659"
                        y2="8"
                        transform="translate(16.5 550.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1660"
                        data-name="Line 1660"
                        y2="5.625"
                        transform="translate(13.5 552.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1662"
                        data-name="Line 1662"
                        y2="3.25"
                        transform="translate(10.5 555.25)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1661"
                        data-name="Line 1661"
                        y1="25"
                        x2="34"
                        transform="translate(10.5 533.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1669"
                        data-name="Line 1669"
                        y1="28"
                        x2="39"
                        transform="translate(5.5 530.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1663"
                        data-name="Line 1663"
                        y1="22"
                        x2="29"
                        transform="translate(15.5 536.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1664"
                        data-name="Line 1664"
                        y1="19"
                        x2="24"
                        transform="translate(20.5 539.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1665"
                        data-name="Line 1665"
                        y1="15"
                        x2="20"
                        transform="translate(24.5 543.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1666"
                        data-name="Line 1666"
                        y1="12"
                        x2="15"
                        transform="translate(29.5 546.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1667"
                        data-name="Line 1667"
                        y1="8"
                        x2="10"
                        transform="translate(34.5 550.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1668"
                        data-name="Line 1668"
                        y1="5"
                        x2="6"
                        transform="translate(38.5 553.5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1670"
                        data-name="Line 1670"
                        y1="2.25"
                        x2="3"
                        transform="translate(41.5 556.25)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                    </g>
                  </g>
                </svg>`,
    [sashDesignIconKeys.TWIN_SASH_TOP_HUNG_ARROW_HINGE_OUTSIDE]: `<svg  xmlns="http://www.w3.org/2000/svg" width="40" height="50"
    viewBox="0 0 40 50">
    <g id="Group_37272" data-name="Group 37272" transform="translate(4185 -2022)">
      <g id="Group_14372" data-name="Group 14372" transform="translate(-4442 1774)">
        <g id="Rectangle_4467" data-name="Rectangle 4467" transform="translate(257 248)" fill="#fff" stroke="#96a0b5"
          stroke-linejoin="round" stroke-width="1">
          <rect width="40" height="50" stroke="none" />
          <rect x="0.5" y="0.5" width="39" height="49" fill="none" />
        </g>
        <g id="Rectangle_4468" data-name="Rectangle 4468" transform="translate(261 251.846)" fill="none"
          stroke="#96a0b5" stroke-linejoin="round" stroke-width="1">
          <rect width="32" height="42.308" stroke="none" />
          <rect x="0.5" y="0.5" width="31" height="41.308" fill="none" />
        </g>
        <path id="Path_20366" data-name="Path 20366" d="M38.12,0,0,13.708,38.12,27.613"
          transform="translate(290.906 254.044) rotate(90)" fill="none" stroke="#96a0b5" stroke-width="1"
          stroke-dasharray="3 2" />
        <rect id="Rectangle_4469" data-name="Rectangle 4469" width="3.535" height="8"
          transform="translate(273.099 297.208) rotate(-90)" fill="#96a0b5" />
        <rect id="Rectangle_4488" data-name="Rectangle 4488" width="1.923" height="9"
          transform="translate(276.5 293.126) rotate(-90)" fill="#96a0b5" />
      </g>
      <g id="Group_37022" data-name="Group 37022" transform="translate(-4184.5 2043.5)">
        <line id="Line_1649" data-name="Line 1649" x1="39" y1="28" fill="none" stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1650" data-name="Line 1650" y2="26" transform="translate(4 2)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1651" data-name="Line 1651" y2="23.5" transform="translate(7 5)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1652" data-name="Line 1652" y2="21" transform="translate(10 7)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1653" data-name="Line 1653" y2="19.5" transform="translate(13 9)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <path id="Path_60103" data-name="Path 60103" d="M0,.824V16.986" transform="translate(16 11.014)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1655" data-name="Line 1655" y2="15" transform="translate(19 13)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1657" data-name="Line 1657" y2="12.5" transform="translate(22 16)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1658" data-name="Line 1658" y2="10.5" transform="translate(25 18)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1659" data-name="Line 1659" y2="8" transform="translate(28 20)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1660" data-name="Line 1660" y2="5.625" transform="translate(31 22)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1662" data-name="Line 1662" y2="3.25" transform="translate(34 24.75)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1661" data-name="Line 1661" x1="34" y1="25" transform="translate(0 3)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1669" data-name="Line 1669" x1="39" y1="28" fill="none" stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1663" data-name="Line 1663" x1="29" y1="22" transform="translate(0 6)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1664" data-name="Line 1664" x1="24" y1="19" transform="translate(0 9)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1665" data-name="Line 1665" x1="20" y1="15" transform="translate(0 13)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1666" data-name="Line 1666" x1="15" y1="12" transform="translate(0 16)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1667" data-name="Line 1667" x1="10" y1="8" transform="translate(0 20)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1668" data-name="Line 1668" x1="6" y1="5" transform="translate(0 23)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1670" data-name="Line 1670" x1="3" y1="2.25" transform="translate(0 25.75)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
      </g>
    </g>
  </svg>`,
    [sashDesignIconKeys.TWIN_SASH_TOP_HUNG_ARROW_HANDLE_OUTSIDE]: `<svg  xmlns="http://www.w3.org/2000/svg" width="40" height="50"
    viewBox="0 0 40 50">
    <g id="Group_37272" data-name="Group 37272" transform="translate(4185 -2022)">
      <g id="Group_14372" data-name="Group 14372" transform="translate(-4442 1774)">
        <g id="Rectangle_4467" data-name="Rectangle 4467" transform="translate(257 248)" fill="#fff" stroke="#96a0b5"
          stroke-linejoin="round" stroke-width="1">
          <rect width="40" height="50" stroke="none" />
          <rect x="0.5" y="0.5" width="39" height="49" fill="none" />
        </g>
        <g id="Rectangle_4468" data-name="Rectangle 4468" transform="translate(261 251.846)" fill="none"
          stroke="#96a0b5" stroke-linejoin="round" stroke-width="1">
          <rect width="32" height="42.308" stroke="none" />
          <rect x="0.5" y="0.5" width="31" height="41.308" fill="none" />
        </g>
        <path id="Path_20366" data-name="Path 20366" d="M38.12,0,0,13.708,38.12,27.613"
          transform="translate(263.293 292.164) rotate(-90)" fill="none" stroke="#96a0b5" stroke-width="1"
          stroke-dasharray="3 2" />
        <rect id="Rectangle_4469" data-name="Rectangle 4469" width="3.535" height="8"
          transform="translate(273.099 297.208) rotate(-90)" fill="#96a0b5" />
        <rect id="Rectangle_4488" data-name="Rectangle 4488" width="1.923" height="9"
          transform="translate(276.5 293.126) rotate(-90)" fill="#96a0b5" />
      </g>
      <g id="Group_37022" data-name="Group 37022" transform="translate(-4184.5 2043.5)">
        <line id="Line_1649" data-name="Line 1649" x1="39" y1="28" fill="none" stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1650" data-name="Line 1650" y2="26" transform="translate(4 2)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1651" data-name="Line 1651" y2="23.5" transform="translate(7 5)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1652" data-name="Line 1652" y2="21" transform="translate(10 7)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1653" data-name="Line 1653" y2="19.5" transform="translate(13 9)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <path id="Path_60103" data-name="Path 60103" d="M0,.824V16.986" transform="translate(16 11.014)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1655" data-name="Line 1655" y2="15" transform="translate(19 13)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1657" data-name="Line 1657" y2="12.5" transform="translate(22 16)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1658" data-name="Line 1658" y2="10.5" transform="translate(25 18)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1659" data-name="Line 1659" y2="8" transform="translate(28 20)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1660" data-name="Line 1660" y2="5.625" transform="translate(31 22)" fill="none" stroke="#96a0b5"
          stroke-width="1" />
        <line id="Line_1662" data-name="Line 1662" y2="3.25" transform="translate(34 24.75)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1661" data-name="Line 1661" x1="34" y1="25" transform="translate(0 3)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1669" data-name="Line 1669" x1="39" y1="28" fill="none" stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1663" data-name="Line 1663" x1="29" y1="22" transform="translate(0 6)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1664" data-name="Line 1664" x1="24" y1="19" transform="translate(0 9)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1665" data-name="Line 1665" x1="20" y1="15" transform="translate(0 13)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1666" data-name="Line 1666" x1="15" y1="12" transform="translate(0 16)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1667" data-name="Line 1667" x1="10" y1="8" transform="translate(0 20)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1668" data-name="Line 1668" x1="6" y1="5" transform="translate(0 23)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
        <line id="Line_1670" data-name="Line 1670" x1="3" y1="2.25" transform="translate(0 25.75)" fill="none"
          stroke="#96a0b5" stroke-width="1" />
      </g>
    </g>
  </svg>`,
    [sashDesignIconKeys.TWIN_SASH_BOTTOM_HUNG_ARROW_HINGE_OUTSIDE]: `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="50"
                viewBox="0 0 40 50"
                >
                <g id="Group_37273" data-name="Group 37273" transform="translate(4133 -2022)">
                  <g id="Group_37276" data-name="Group 37276">
                    <g id="Group_14377" data-name="Group 14377" transform="translate(-4468 1774)">
                      <g
                        id="Rectangle_4467"
                        data-name="Rectangle 4467"
                        transform="translate(335 248)"
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
                        transform="translate(339 251.846)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-linejoin="round"
                        stroke-width="1"
                      >
                        <rect width="32" height="42.308" stroke="none" />
                        <rect x="0.5" y="0.5" width="31" height="41.308" fill="none" />
                      </g>
                      <path
                        id="Path_20366"
                        data-name="Path 20366"
                        d="M38.12,27.613,0,13.9,38.12,0"
                        transform="translate(341.292 291.956) rotate(-90)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-linejoin="round"
                        stroke-width="1"
                        stroke-dasharray="3 2"
                      />
                      <rect
                        id="Rectangle_4469"
                        data-name="Rectangle 4469"
                        width="3.67"
                        height="8"
                        transform="translate(359.099 248.657) rotate(90)"
                        fill="#96a0b5"
                      />
                      <rect
                        id="Rectangle_4488"
                        data-name="Rectangle 4488"
                        width="1.923"
                        height="9"
                        transform="translate(363.5 252.874) rotate(90)"
                        fill="#96a0b5"
                      />
                    </g>
                    <g id="Group_37022" data-name="Group 37022" transform="translate(-4132.5 2043.5)">
                      <line
                        id="Line_1649"
                        data-name="Line 1649"
                        x1="39"
                        y1="28"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1650"
                        data-name="Line 1650"
                        y2="26"
                        transform="translate(4 2)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1651"
                        data-name="Line 1651"
                        y2="23.5"
                        transform="translate(7 5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1652"
                        data-name="Line 1652"
                        y2="21"
                        transform="translate(10 7)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1653"
                        data-name="Line 1653"
                        y2="19.5"
                        transform="translate(13 9)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <path
                        id="Path_60103"
                        data-name="Path 60103"
                        d="M0,.824V16.986"
                        transform="translate(16 11.014)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1655"
                        data-name="Line 1655"
                        y2="15"
                        transform="translate(19 13)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1657"
                        data-name="Line 1657"
                        y2="12.5"
                        transform="translate(22 16)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1658"
                        data-name="Line 1658"
                        y2="10.5"
                        transform="translate(25 18)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1659"
                        data-name="Line 1659"
                        y2="8"
                        transform="translate(28 20)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1660"
                        data-name="Line 1660"
                        y2="5.625"
                        transform="translate(31 22)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1662"
                        data-name="Line 1662"
                        y2="3.25"
                        transform="translate(34 24.75)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1661"
                        data-name="Line 1661"
                        x1="34"
                        y1="25"
                        transform="translate(0 3)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1669"
                        data-name="Line 1669"
                        x1="39"
                        y1="28"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1663"
                        data-name="Line 1663"
                        x1="29"
                        y1="22"
                        transform="translate(0 6)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1664"
                        data-name="Line 1664"
                        x1="24"
                        y1="19"
                        transform="translate(0 9)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1665"
                        data-name="Line 1665"
                        x1="20"
                        y1="15"
                        transform="translate(0 13)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1666"
                        data-name="Line 1666"
                        x1="15"
                        y1="12"
                        transform="translate(0 16)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1667"
                        data-name="Line 1667"
                        x1="10"
                        y1="8"
                        transform="translate(0 20)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1668"
                        data-name="Line 1668"
                        x1="6"
                        y1="5"
                        transform="translate(0 23)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1670"
                        data-name="Line 1670"
                        x1="3"
                        y1="2.25"
                        transform="translate(0 25.75)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                    </g>
                  </g>
                </g>
                </svg>`,
    [sashDesignIconKeys.TWIN_SASH_BOTTOM_HUNG_ARROW_HANDLE_OUTSIDE]: `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="40"
                height="50"
                viewBox="0 0 40 50"
                >
                <g id="Group_37273" data-name="Group 37273" transform="translate(4133 -2022)">
                  <g id="Group_37276" data-name="Group 37276">
                    <g id="Group_14377" data-name="Group 14377" transform="translate(-4468 1774)">
                      <g
                        id="Rectangle_4467"
                        data-name="Rectangle 4467"
                        transform="translate(335 248)"
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
                        transform="translate(339 251.846)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-linejoin="round"
                        stroke-width="1"
                      >
                        <rect width="32" height="42.308" stroke="none" />
                        <rect x="0.5" y="0.5" width="31" height="41.308" fill="none" />
                      </g>
                      <path
                        id="Path_20366"
                        data-name="Path 20366"
                        d="M38.12,27.613,0,13.9,38.12,0"
                        transform="translate(368.905 253.836) rotate(90)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-linejoin="round"
                        stroke-width="1"
                        stroke-dasharray="3 2"
                      />
                      <rect
                        id="Rectangle_4469"
                        data-name="Rectangle 4469"
                        width="3.67"
                        height="8"
                        transform="translate(359.099 248.657) rotate(90)"
                        fill="#96a0b5"
                      />
                      <rect
                        id="Rectangle_4488"
                        data-name="Rectangle 4488"
                        width="1.923"
                        height="9"
                        transform="translate(363.5 252.874) rotate(90)"
                        fill="#96a0b5"
                      />
                    </g>
                    <g id="Group_37022" data-name="Group 37022" transform="translate(-4132.5 2043.5)">
                      <line
                        id="Line_1649"
                        data-name="Line 1649"
                        x1="39"
                        y1="28"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1650"
                        data-name="Line 1650"
                        y2="26"
                        transform="translate(4 2)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1651"
                        data-name="Line 1651"
                        y2="23.5"
                        transform="translate(7 5)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1652"
                        data-name="Line 1652"
                        y2="21"
                        transform="translate(10 7)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1653"
                        data-name="Line 1653"
                        y2="19.5"
                        transform="translate(13 9)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <path
                        id="Path_60103"
                        data-name="Path 60103"
                        d="M0,.824V16.986"
                        transform="translate(16 11.014)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1655"
                        data-name="Line 1655"
                        y2="15"
                        transform="translate(19 13)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1657"
                        data-name="Line 1657"
                        y2="12.5"
                        transform="translate(22 16)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1658"
                        data-name="Line 1658"
                        y2="10.5"
                        transform="translate(25 18)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1659"
                        data-name="Line 1659"
                        y2="8"
                        transform="translate(28 20)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1660"
                        data-name="Line 1660"
                        y2="5.625"
                        transform="translate(31 22)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1662"
                        data-name="Line 1662"
                        y2="3.25"
                        transform="translate(34 24.75)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1661"
                        data-name="Line 1661"
                        x1="34"
                        y1="25"
                        transform="translate(0 3)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1669"
                        data-name="Line 1669"
                        x1="39"
                        y1="28"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1663"
                        data-name="Line 1663"
                        x1="29"
                        y1="22"
                        transform="translate(0 6)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1664"
                        data-name="Line 1664"
                        x1="24"
                        y1="19"
                        transform="translate(0 9)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1665"
                        data-name="Line 1665"
                        x1="20"
                        y1="15"
                        transform="translate(0 13)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1666"
                        data-name="Line 1666"
                        x1="15"
                        y1="12"
                        transform="translate(0 16)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1667"
                        data-name="Line 1667"
                        x1="10"
                        y1="8"
                        transform="translate(0 20)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1668"
                        data-name="Line 1668"
                        x1="6"
                        y1="5"
                        transform="translate(0 23)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                      <line
                        id="Line_1670"
                        data-name="Line 1670"
                        x1="3"
                        y1="2.25"
                        transform="translate(0 25.75)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-width="1"
                      />
                    </g>
                  </g>
                </g>
                </svg>`,
  },
  [IconPrefix.ONLY_MESH_SASH]: {
    [sashDesignIconKeys.LEFT_MESH_SASH]: `<svg width="39" height="50" viewBox="0 0 39 50" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clip-path="url(#clip0_383_65)">
      <path d="M38.462 0H0V50H38.462V0Z" fill="white" />
      <path d="M37.962 0.5H0.5V49.5H37.962V0.5Z" stroke="#96A0B5" />
      <path d="M34.1147 4.34595H4.3457V45.6539H34.1147V4.34595Z" stroke="#96A0B5" />
      <path
        d="M12.15 42.2519L15.187 38.6979L18.225 42.249L15.811 45.0719H17.837L19.237 43.4329L20.637 45.0719H22.663L20.248 42.249L23.289 38.6979L26.327 42.249L23.912 45.0719H25.937L33.559 36.1619V33.798L31.389 36.333L28.352 32.7819L31.39 29.2309L33.559 31.7659V29.3979L32.403 28.048L33.559 26.6979V24.3279L31.39 26.8639L28.352 23.313L31.39 19.7619L33.559 22.2979V19.9289L32.403 18.577L33.559 17.2249V14.8589L31.391 17.3979L28.353 13.8469L31.39 10.2959L33.56 12.8309V10.4599L28.801 4.89795H25.878L23.29 7.92395L20.701 4.89795H17.777L15.188 7.92395L12.6 4.89795H9.67597L4.91797 10.4599V12.827L7.08797 10.2919L10.125 13.8429L7.08697 17.3979L4.91797 14.8589V17.2259L6.07397 18.5779L4.91797 19.9289V22.2979L7.08697 19.7619L10.125 23.313L7.08697 26.8639L4.91797 24.3279V26.6979L6.07397 28.0499L4.91797 29.3979V31.7649L7.08697 29.2299L10.125 32.7809L7.08797 36.333L4.91797 33.798V36.1649L12.54 45.0749H14.565L12.15 42.2519ZM12.15 32.7829L15.188 29.2319L18.226 32.7829L15.188 36.334L12.15 32.7829ZM20.25 23.313L23.288 19.7619L26.326 23.313L23.288 26.8639L20.25 23.313ZM22.276 28.048L19.239 31.5979L16.201 28.048L19.239 24.4979L22.276 28.048ZM19.238 22.129L16.2 18.5779L19.238 15.0269L22.276 18.5779L19.238 22.129ZM18.226 23.313L15.188 26.8639L12.15 23.313L15.188 19.7619L18.226 23.313ZM19.239 41.0679L16.201 37.5179L19.239 33.9669L22.277 37.5179L19.239 41.0679ZM20.251 32.7809L23.289 29.2299L26.327 32.7819L23.289 36.333L20.251 32.7809ZM30.377 37.5159L27.339 41.0679L24.302 37.5179L27.34 33.9669L30.377 37.5159ZM30.377 28.0469L27.34 31.5979L24.302 28.048L27.34 24.4979L30.377 28.0469ZM30.377 18.577L27.339 22.1279L24.301 18.577L27.34 15.0259L30.377 18.577ZM27.339 5.55695L30.377 9.10795L27.34 12.6589L24.302 9.10795L27.339 5.55695ZM26.328 13.8429L23.289 17.3979L20.251 13.8469L23.289 10.2959L26.328 13.8429ZM19.239 5.55595L22.277 9.10695L19.239 12.6579L16.201 9.10695L19.239 5.55595ZM18.227 13.8429L15.188 17.3979L12.15 13.8459L15.188 10.2949L18.227 13.8429ZM8.09997 9.10795L11.138 5.55695L14.175 9.10795L11.137 12.6589L8.09997 9.10795ZM8.09997 18.577L11.137 15.0259L14.175 18.577L11.137 22.1279L8.09997 18.577ZM8.09997 28.0469L11.138 24.4979L14.176 28.049L11.137 31.5979L8.09997 28.0469ZM8.09997 37.5159L11.137 33.965L14.175 37.5159L11.138 41.0679L8.09997 37.5159Z"
        fill="#96A0B5"
        stroke="white"
        stroke-width="0.2"
      />
      <path d="M31.4033 38.0439L34.1343 40.8659" stroke="#96A0B5" stroke-width="1.2" />
      <path d="M4.1875 5.91992L7.0725 8.80492" stroke="#96A0B5" stroke-width="1.2" />
      <path d="M28.5186 42.1899L32.3646 45.7359" stroke="#96A0B5" stroke-width="1.2" />
      <path d="M8.0332 45.7359L10.9182 41.8899" stroke="#96A0B5" stroke-width="1.2" />
      <path d="M4.32617 41.827L7.07217 38.344" stroke="#96A0B5" stroke-width="1.2" />
      <path d="M31.4033 9.28496L34.2883 5.43896" stroke="#96A0B5" stroke-width="1.2" />
      <rect x="11" y="20" width="16" height="10" fill="white" />
      <path
        d="M24 24.9396L20.7864 28M14 24.951H23.997L20.7833 22"
        stroke="#96A0B5"
        stroke-width="1.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_383_65">
        <rect width="38.462" height="50" fill="white" />
      </clipPath>
    </defs>
  </svg>`,
    [sashDesignIconKeys.MEETING_MESH_SASH]: `<svg width="72" height="50" viewBox="0 0 72 50" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M35.5 0H1V50H35.5V0Z" fill="white" />
  <path d="M35.0474 0.5H1.44434V49.5H35.0474V0.5Z" stroke="#96A0B5" />
  <path d="M31.597 4.34595H4.89453V45.6539H31.597V4.34595Z" stroke="#96A0B5" />
  <path
    d="M11.9001 42.2519L14.6243 38.6979L17.3493 42.249L15.184 45.0719H17.0013L18.2571 43.4329L19.5129 45.0719H21.3302L19.1639 42.249L21.8917 38.6979L24.6167 42.249L22.4505 45.0719H24.2669L31.1038 36.1619V33.798L29.1573 36.333L26.4331 32.7819L29.1582 29.2309L31.1038 31.7659V29.3979L30.0668 28.048L31.1038 26.6979V24.3279L29.1582 26.8639L26.4331 23.313L29.1582 19.7619L31.1038 22.2979V19.9289L30.0668 18.577L31.1038 17.2249V14.8589L29.1591 17.3979L26.434 13.8469L29.1582 10.2959L31.1047 12.8309V10.4599L26.8359 4.89795H24.214L21.8926 7.92395L19.5703 4.89795H16.9475L14.6252 7.92395L12.3038 4.89795H9.68096L5.41309 10.4599V12.827L7.35955 10.2919L10.0837 13.8429L7.35866 17.3979L5.41309 14.8589V17.2259L6.45001 18.5779L5.41309 19.9289V22.2979L7.35866 19.7619L10.0837 23.313L7.35866 26.8639L5.41309 24.3279V26.6979L6.45001 28.0499L5.41309 29.3979V31.7649L7.35866 29.2299L10.0837 32.7809L7.35955 36.333L5.41309 33.798V36.1649L12.2499 45.0749H14.0663L11.9001 42.2519ZM11.9001 32.7829L14.6252 29.2319L17.3502 32.7829L14.6252 36.334L11.9001 32.7829ZM19.1657 23.313L21.8908 19.7619L24.6158 23.313L21.8908 26.8639L19.1657 23.313ZM20.983 28.048L18.2589 31.5979L15.5338 28.048L18.2589 24.4979L20.983 28.048ZM18.258 22.129L15.5329 18.5779L18.258 15.0269L20.983 18.5779L18.258 22.129ZM17.3502 23.313L14.6252 26.8639L11.9001 23.313L14.6252 19.7619L17.3502 23.313ZM18.2589 41.0679L15.5338 37.5179L18.2589 33.9669L20.9839 37.5179L18.2589 41.0679ZM19.1666 32.7809L21.8917 29.2299L24.6167 32.7819L21.8917 36.333L19.1666 32.7809ZM28.2495 37.5159L25.5245 41.0679L22.8003 37.5179L25.5254 33.9669L28.2495 37.5159ZM28.2495 28.0469L25.5254 31.5979L22.8003 28.048L25.5254 24.4979L28.2495 28.0469ZM28.2495 18.577L25.5245 22.1279L22.7994 18.577L25.5254 15.0259L28.2495 18.577ZM25.5245 5.55695L28.2495 9.10795L25.5254 12.6589L22.8003 9.10795L25.5245 5.55695ZM24.6176 13.8429L21.8917 17.3979L19.1666 13.8469L21.8917 10.2959L24.6176 13.8429ZM18.2589 5.55595L20.9839 9.10695L18.2589 12.6579L15.5338 9.10695L18.2589 5.55595ZM17.3511 13.8429L14.6252 17.3979L11.9001 13.8459L14.6252 10.2949L17.3511 13.8429ZM8.26731 9.10795L10.9924 5.55695L13.7165 9.10795L10.9915 12.6589L8.26731 9.10795ZM8.26731 18.577L10.9915 15.0259L13.7165 18.577L10.9915 22.1279L8.26731 18.577ZM8.26731 28.0469L10.9924 24.4979L13.7174 28.049L10.9915 31.5979L8.26731 28.0469ZM8.26731 37.5159L10.9915 33.965L13.7165 37.5159L10.9924 41.0679L8.26731 37.5159Z"
    fill="#96A0B5"
    stroke="white"
    stroke-width="0.2"
  />
  <path d="M29.1719 38.0439L31.6216 40.8659" stroke="#96A0B5" stroke-width="1.2" />
  <path d="M4.75586 5.91992L7.34367 8.80492" stroke="#96A0B5" stroke-width="1.2" />
  <path d="M26.5791 42.1899L30.0289 45.7359" stroke="#96A0B5" stroke-width="1.2" />
  <path d="M8.20898 45.7359L10.7968 41.8899" stroke="#96A0B5" stroke-width="1.2" />
  <path d="M4.87793 41.827L7.34106 38.344" stroke="#96A0B5" stroke-width="1.2" />
  <path d="M29.1719 9.28496L31.7597 5.43896" stroke="#96A0B5" stroke-width="1.2" />
  <path d="M71 0H36.5V50H71V0Z" fill="white" />
  <path d="M70.5474 0.5H36.9443V49.5H70.5474V0.5Z" stroke="#96A0B5" />
  <path d="M67.097 4.34595H40.3945V45.6539H67.097V4.34595Z" stroke="#96A0B5" />
  <path
    d="M47.4001 42.2519L50.1243 38.6979L52.8493 42.249L50.684 45.0719H52.5013L53.7571 43.4329L55.0129 45.0719H56.8302L54.6639 42.249L57.3917 38.6979L60.1167 42.249L57.9505 45.0719H59.7669L66.6038 36.1619V33.798L64.6573 36.333L61.9331 32.7819L64.6582 29.2309L66.6038 31.7659V29.3979L65.5668 28.048L66.6038 26.6979V24.3279L64.6582 26.8639L61.9331 23.313L64.6582 19.7619L66.6038 22.2979V19.9289L65.5668 18.577L66.6038 17.2249V14.8589L64.6591 17.3979L61.934 13.8469L64.6582 10.2959L66.6047 12.8309V10.4599L62.3359 4.89795H59.714L57.3926 7.92395L55.0703 4.89795H52.4475L50.1252 7.92395L47.8038 4.89795H45.181L40.9131 10.4599V12.827L42.8596 10.2919L45.5837 13.8429L42.8587 17.3979L40.9131 14.8589V17.2259L41.95 18.5779L40.9131 19.9289V22.2979L42.8587 19.7619L45.5837 23.313L42.8587 26.8639L40.9131 24.3279V26.6979L41.95 28.0499L40.9131 29.3979V31.7649L42.8587 29.2299L45.5837 32.7809L42.8596 36.333L40.9131 33.798V36.1649L47.7499 45.0749H49.5663L47.4001 42.2519ZM47.4001 32.7829L50.1252 29.2319L52.8502 32.7829L50.1252 36.334L47.4001 32.7829ZM54.6657 23.313L57.3908 19.7619L60.1158 23.313L57.3908 26.8639L54.6657 23.313ZM56.483 28.048L53.7589 31.5979L51.0338 28.048L53.7589 24.4979L56.483 28.048ZM53.758 22.129L51.0329 18.5779L53.758 15.0269L56.483 18.5779L53.758 22.129ZM52.8502 23.313L50.1252 26.8639L47.4001 23.313L50.1252 19.7619L52.8502 23.313ZM53.7589 41.0679L51.0338 37.5179L53.7589 33.9669L56.4839 37.5179L53.7589 41.0679ZM54.6666 32.7809L57.3917 29.2299L60.1167 32.7819L57.3917 36.333L54.6666 32.7809ZM63.7495 37.5159L61.0245 41.0679L58.3003 37.5179L61.0254 33.9669L63.7495 37.5159ZM63.7495 28.0469L61.0254 31.5979L58.3003 28.048L61.0254 24.4979L63.7495 28.0469ZM63.7495 18.577L61.0245 22.1279L58.2994 18.577L61.0254 15.0259L63.7495 18.577ZM61.0245 5.55695L63.7495 9.10795L61.0254 12.6589L58.3003 9.10795L61.0245 5.55695ZM60.1176 13.8429L57.3917 17.3979L54.6666 13.8469L57.3917 10.2959L60.1176 13.8429ZM53.7589 5.55595L56.4839 9.10695L53.7589 12.6579L51.0338 9.10695L53.7589 5.55595ZM52.8511 13.8429L50.1252 17.3979L47.4001 13.8459L50.1252 10.2949L52.8511 13.8429ZM43.7673 9.10795L46.4924 5.55695L49.2165 9.10795L46.4915 12.6589L43.7673 9.10795ZM43.7673 18.577L46.4915 15.0259L49.2165 18.577L46.4915 22.1279L43.7673 18.577ZM43.7673 28.0469L46.4924 24.4979L49.2174 28.049L46.4915 31.5979L43.7673 28.0469ZM43.7673 37.5159L46.4915 33.965L49.2165 37.5159L46.4924 41.0679L43.7673 37.5159Z"
    fill="#96A0B5"
    stroke="white"
    stroke-width="0.2"
  />
  <path d="M64.6719 38.0439L67.1216 40.8659" stroke="#96A0B5" stroke-width="1.2" />
  <path d="M40.2559 5.91992L42.8437 8.80492" stroke="#96A0B5" stroke-width="1.2" />
  <path d="M62.0791 42.1899L65.5289 45.7359" stroke="#96A0B5" stroke-width="1.2" />
  <path d="M43.709 45.7359L46.2968 41.8899" stroke="#96A0B5" stroke-width="1.2" />
  <path d="M40.3779 41.827L42.8411 38.344" stroke="#96A0B5" stroke-width="1.2" />
  <path d="M64.6719 9.28496L67.2597 5.43896" stroke="#96A0B5" stroke-width="1.2" />
  <path d="M40.6675 29H38.04V22.6667H40.6675V29Z" fill="#96A0B5" />
  <path d="M38.7517 26.0547H37V19.7214H38.7517V26.0547Z" fill="#96A0B5" />
  <rect x="46" y="20" width="16" height="10" fill="white" />
  <rect x="10" y="20" width="16" height="10" fill="white" />
  <path
    d="M59 24.9396L55.7864 28M49 24.951H58.997L55.7833 22"
    stroke="#96A0B5"
    stroke-width="1.5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M13 24.9396L16.2136 28M23 24.951H13.003L16.2167 22"
    stroke="#96A0B5"
    stroke-width="1.5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
</svg>`,
  },
};
