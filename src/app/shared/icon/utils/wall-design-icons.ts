import { IconPrefix } from '../models/icon-prefix';
import { IconPrefixType } from '../models/icon.model';

export const wallDesignIconKeys = {
  STICK_CURTAIN_WALL_FIXED_WINDOW: 'stickCurtainWallFixedWindow',
  STICK_CURTAIN_WALL_RIGHT_HANDLE_SASH_ARROW_AWAY_OUTSIDE: 'stickCurtainWallRightHandleSashArrowAwayOutside',
  STICK_CURTAIN_WALL_RIGHT_HANDLE_SASH_ARROW_TOWARDS_OUTSIDE: 'stickCurtainWallRightHandleSashArrowTowardsOutside',
  STICK_CURTAIN_WALL_BOTTOM_HANDLE_SASH: 'stickCurtainWallBottomHandleSash',
  STICK_CURTAIN_WALL_TILT_AND_TURN_RIGHT_HANDLE_ARROW_AWAY_OUTSIDE:
    'stickCurtainWallTiltAndTurnRightHandleArrowAwayOutside',
  STICK_CURTAIN_WALL_TILT_AND_TURN_RIGHT_HANDLE_ARROW_TOWARDS_OUTSIDE:
    'stickCurtainWallTiltAndTurnRightHandleArrowTowardsOutside',
} as const;

export type IconKey = typeof wallDesignIconKeys[keyof typeof wallDesignIconKeys];

export const WALL_DESIGN_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.STICK_CURTAIN_WALL_DESIGN]: {
    [wallDesignIconKeys.STICK_CURTAIN_WALL_FIXED_WINDOW]: `<svg
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
    [wallDesignIconKeys.STICK_CURTAIN_WALL_RIGHT_HANDLE_SASH_ARROW_AWAY_OUTSIDE]: `<svg
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
    [wallDesignIconKeys.STICK_CURTAIN_WALL_RIGHT_HANDLE_SASH_ARROW_TOWARDS_OUTSIDE]: `<svg
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
    [wallDesignIconKeys.STICK_CURTAIN_WALL_BOTTOM_HANDLE_SASH]: `<svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="40"
                    height="50"
                    viewBox="0 0 46 60"
                  >
                    <g id="Group_37589" data-name="Group 37589" transform="translate(-0.498 0.232)">
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
                          d="M155.813,254.858l-48.8-17.2,48.8-17.4"
                          transform="translate(-214.426 161.68) rotate(-90)"
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
                          transform="translate(18.782 59.767) rotate(-90)"
                          fill="#96a0b5"
                        />
                        <rect
                          id="Rectangle_9994"
                          data-name="Rectangle 9994"
                          width="3"
                          height="10"
                          transform="translate(34.132 51.467) rotate(90)"
                          fill="#96a0b5"
                        />
                      </g>
                    </g>
                  </svg>`,
    [wallDesignIconKeys.STICK_CURTAIN_WALL_TILT_AND_TURN_RIGHT_HANDLE_ARROW_TOWARDS_OUTSIDE]: `<svg
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
    [wallDesignIconKeys.STICK_CURTAIN_WALL_TILT_AND_TURN_RIGHT_HANDLE_ARROW_AWAY_OUTSIDE]: `<svg
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
  },
};
