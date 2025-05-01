import { IconPrefix, IconPrefixType } from '../models/icon.model';

export const designIconKeys = {
  FIXED_WINDOW: 'fixedWindow',

  //the below are outside view, for inside view use mirror images of these 2 (total 4 svgs were present in dashboard)
  LEFT_OPENABLE_ARROW_HINGE_OUTSIDE: 'leftOpenableArrowHingeOutside',
  LEFT_OPENABLE_ARROW_HANDLE_OUTSIDE: 'leftOpenableArrowHandleOutside',

  //the below are outside view, for inside view use mirror images of these 2 (total 4 svgs were present in dashboard)
  RIGHT_OPENABLE_ARROW_HINGE_OUTSIDE: 'rightOpenableArrowHingeOutside',
  RIGHT_OPENABLE_ARROW_HANDLE_OUTSIDE: 'rightOpenableArrowHandleOutside',

  TOP_HUNG_ARROW_AWAY: 'topHungArrowAway', //kept topHungArrowAway, for bottomHungArrowAway use flip image (vertical scaleY(-1)) of this
  TOP_HUNG_ARROW_TOWARDS: 'topHungArrowTowards', //kept bottomHungArrowTowards, for bottomHungArrowAway use flip image (vertical scaleY(-1)) of this

  TOP_HUNG_WITH_LEFT_HANDLE: 'topHungWithLeftHandle', //kept topHungWithLeftHandle, for topHungWithRightHandle, use the mirror (flip) image of this

  BOTTOM_HUNG_WITH_LEFT_HANDLE: 'bottomHungWithLeftHandle', //kept bottomHungWithLeftHandle, for bottomHungWithRightandle, use mirror image of this

  //the below are outside view, for inside view use mirror images of these 2 (total 4 svgs were present in dashboard)
  FRENCH_OPENABLE_ARROW_TOWARDS_OUTSIDE: 'frenchOpenableArrowTowardsOutside',
  FRENCH_OPENABLE_ARROW_AWAY_OUTSIDE: 'frenchOpenableArrowAwayOutside',

  PARALLEL_WINDOW: 'parallelWindow',

  //steel openable
  STEEL_LEFT_OPENABLE: 'steelLeftOpenable', // (can be mirrored for right + own side) — total 4 images (steelRightOpenable)
  STEEL_FRENCH_OPENABLE: 'steelFrenchOpenable',
} as const;

export type IconKey = (typeof designIconKeys)[keyof typeof designIconKeys];

export const DESIGN_ICONS: Partial<
  Record<IconPrefixType, Partial<Record<IconKey, string>>>
> = {
  [IconPrefix.OPENABLE_DESIGNS]: {
    [designIconKeys.FIXED_WINDOW]: ` <svg
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
    [designIconKeys.LEFT_OPENABLE_ARROW_HINGE_OUTSIDE]: `<svg
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
    [designIconKeys.LEFT_OPENABLE_ARROW_HANDLE_OUTSIDE]: `<svg
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
    [designIconKeys.RIGHT_OPENABLE_ARROW_HINGE_OUTSIDE]: `<svg
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
    [designIconKeys.RIGHT_OPENABLE_ARROW_HANDLE_OUTSIDE]: `<svg
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
    [designIconKeys.TOP_HUNG_ARROW_AWAY]: `<svg  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="40" height="50"
    viewBox="0 0 40 50">
    <g id="Group_14372" data-name="Group 14372" transform="translate(-257 -248)">
      <g id="Rectangle_4467" data-name="Rectangle 4467" transform="translate(257 248)" fill="#fff" stroke="#96a0b5"
        stroke-linejoin="round" stroke-width="1">
        <rect width="40" height="50" stroke="none" />
        <rect x="0.5" y="0.5" width="39" height="49" fill="none" />
      </g>
      <g id="Rectangle_4468" data-name="Rectangle 4468" transform="translate(261 251.846)" stroke="#96a0b5"
        stroke-linejoin="round" stroke-width="1" fill="none">
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
  </svg>`,
    [designIconKeys.TOP_HUNG_ARROW_TOWARDS]: `<svg  xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 46 60">
    <g id="Group_37589" data-name="Group 37589" transform="translate(-0.498 0.232)">
      <g id="Group_14072" data-name="Group 14072" transform="translate(0.216 -0.498)">
        <g id="Rectangle_4467" data-name="Rectangle 4467" transform="translate(0.282 0.267)" fill="#fff"
          stroke="#96a0b5" stroke-width="1">
          <rect width="46" height="60" stroke="none" />
          <rect x="0.5" y="0.5" width="45" height="59" fill="none" />
        </g>
        <g id="Rectangle_4468" data-name="Rectangle 4468" transform="translate(5.282 5.267)" fill="#fff"
          stroke="#96a0b5" stroke-width="1">
          <rect width="36" height="50" stroke="none" />
          <rect x="0.5" y="0.5" width="35" height="49" fill="none" />
        </g>
        <path id="Path_20366" data-name="Path 20366" d="M155.813,254.858l-48.8-17.2,48.8-17.4"
          transform="translate(-214.426 161.68) rotate(-90)" fill="none" stroke="#96a0b5" stroke-width="1"
          stroke-dasharray="3 2" />
        <rect id="Rectangle_4469" data-name="Rectangle 4469" width="5" height="10"
          transform="translate(18.782 59.767) rotate(-90)" fill="#96a0b5" />
        <rect id="Rectangle_9994" data-name="Rectangle 9994" width="3" height="10"
          transform="translate(34.132 51.467) rotate(90)" fill="#96a0b5" />
      </g>
    </g>
  </svg>`,
    [designIconKeys.TOP_HUNG_WITH_LEFT_HANDLE]: `<svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="39" height="49" stroke="#96A0B5" />
                        <path d="M2.5 26L36 4" stroke="#96A0B5" stroke-linejoin="round" stroke-dasharray="3 2" />
                        <rect x="3.5" y="3.5" width="33" height="43" stroke="#96A0B5" />
                        <path d="M1 20H4V28H1V20Z" fill="#96A0B5" />
                        <path d="M4 24H6V30H4V24Z" fill="#96A0B5" />
                      </svg>`,
    [designIconKeys.BOTTOM_HUNG_WITH_LEFT_HANDLE]: `<svg width="40" height="50" viewBox="0 0 40 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect
                          x="-0.5"
                          y="0.5"
                          width="39"
                          height="49"
                          transform="matrix(-1 0 0 1 39 0)"
                          stroke="#96A0B5"
                        />
                        <path d="M36 46L3 24.5" stroke="#96A0B5" stroke-linejoin="round" stroke-dasharray="3 2" />
                        <rect
                          x="-0.5"
                          y="0.5"
                          width="33"
                          height="43"
                          transform="matrix(-1 0 0 1 36 3)"
                          stroke="#96A0B5"
                        />
                        <path d="M1 20H4V28H1V20Z" fill="#96A0B5" />
                        <path d="M4 24H6V30H4V24Z" fill="#96A0B5" />
                      </svg>`,
    [designIconKeys.FRENCH_OPENABLE_ARROW_TOWARDS_OUTSIDE]: `<svg
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
    [designIconKeys.FRENCH_OPENABLE_ARROW_AWAY_OUTSIDE]: `<svg
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
    [designIconKeys.PARALLEL_WINDOW]: `<svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 45 50">
                        <g id="Group_53772" data-name="Group 53772" transform="translate(-297.23 -631.223)">
                          <g id="Group_53771" data-name="Group 53771" transform="translate(297.23 631.223)">
                            <g
                              id="Rectangle_71974"
                              data-name="Rectangle 71974"
                              transform="translate(0 0)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1.2"
                            >
                              <rect width="45" height="50" stroke="none" />
                              <rect x="0.6" y="0.6" width="43.8" height="48.8" fill="none" />
                            </g>
                            <g
                              id="Rectangle_71975"
                              data-name="Rectangle 71975"
                              transform="translate(4 4)"
                              fill="#fff"
                              stroke="#96a0b5"
                              stroke-width="1.2"
                            >
                              <rect width="37" height="42" stroke="none" />
                              <rect x="0.6" y="0.6" width="35.8" height="40.8" fill="none" />
                            </g>
                            <g id="Group_53773" data-name="Group 53773" transform="translate(1 20)">
                              <rect
                                id="Rectangle_71977"
                                data-name="Rectangle 71977"
                                width="3.472"
                                height="6"
                                fill="#96a0b5"
                              />
                              <rect
                                id="Rectangle_71978"
                                data-name="Rectangle 71978"
                                width="2.2"
                                height="6"
                                transform="translate(0.5 5)"
                                fill="#96a0b5"
                              />
                            </g>
                            <g id="Group_53774" data-name="Group 53774" transform="translate(40.8 20)">
                              <rect
                                id="Rectangle_71976"
                                data-name="Rectangle 71976"
                                width="3.472"
                                height="6"
                                fill="#96a0b5"
                              />
                              <rect
                                id="Rectangle_71979"
                                data-name="Rectangle 71979"
                                width="2.2"
                                height="6"
                                transform="translate(0.5 5)"
                                fill="#96a0b5"
                              />
                            </g>
                            <g
                              id="Path_251373"
                              data-name="Path 251373"
                              transform="translate(5.173 24.618) rotate(-45)"
                              fill="#fff"
                            >
                              <path
                                d="M 0.1723389625549316 24.15252494812012 L 1.36932373046875 2.720723867416382 L 23.40343856811523 0.2147698849439621 L 22.53634643554688 22.10442733764648 L 0.1723389625549316 24.15252494812012 Z"
                                stroke="none"
                              />
                              <path
                                d="M 22.88075637817383 0.7774314880371094 L 1.845016479492188 3.169837951660156 L 0.7038764953613281 23.60176086425781 L 22.05409240722656 21.64650726318359 L 22.88075637817383 0.7774314880371094 M 23.92612075805664 -0.347900390625 L 23.01860046386719 22.56235885620117 L -0.3591995239257812 24.70329856872559 L 0.8936309814453125 2.271598815917969 L 23.92612075805664 -0.347900390625 Z"
                                stroke="none"
                                fill="#96a0b5"
                              />
                            </g>
                            <line
                              id="Line_1863"
                              data-name="Line 1863"
                              y1="3.644"
                              x2="3.766"
                              transform="translate(40.344 0.795)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1.2"
                            />
                            <line
                              id="Line_1864"
                              data-name="Line 1864"
                              y1="3.644"
                              x2="3.766"
                              transform="translate(1.136 45.128)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1.2"
                            />
                            <line
                              id="Line_1865"
                              data-name="Line 1865"
                              x2="3.991"
                              y2="3.991"
                              transform="translate(0.439 0.449)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1.2"
                            />
                            <line
                              id="Line_1866"
                              data-name="Line 1866"
                              x2="3.991"
                              y2="3.991"
                              transform="translate(40 45.17)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1.2"
                            />
                            <line
                              id="Line_1867"
                              data-name="Line 1867"
                              y2="40.905"
                              transform="translate(7.09 4.439)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <line
                              id="Line_1868"
                              data-name="Line 1868"
                              y2="40.905"
                              transform="translate(37.684 4.439)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                          </g>
                          <line
                            id="Line_1869"
                            data-name="Line 1869"
                            x2="30.594"
                            transform="translate(304.32 638.323)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <line
                            id="Line_1870"
                            data-name="Line 1870"
                            x2="30.594"
                            transform="translate(304.32 673.907)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                        </g>
                      </svg>`,
  },
  [IconPrefix.STEEL_OPENABLE]: {
    [designIconKeys.STEEL_LEFT_OPENABLE]: `<svg
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
    [designIconKeys.STEEL_FRENCH_OPENABLE]: `<svg xmlns="http://www.w3.org/2000/svg" width="53" height="50" viewBox="0 0 53 60">
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
};
