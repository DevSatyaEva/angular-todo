import { IconPrefix, IconPrefixType } from '../models/icon.model';

export const customIconKeys = {
  CIRCLE: 'circle',
  SEMI_CIRCLE: 'semiCircle',
  OVAL: 'oval',
  SEMI_OVAL: 'semiOval',
  QUADRANT: 'quadrant',
  CURVE: 'curve',
  GOTHIC_ARC: 'gothicArc',
  ISOSCELES_TRIANGLE: 'isoscelesTriangle',
  RIGHT_TRIANGLE: 'rightTriangle',
  RIGHT_TRAPEZIUM_WITH_ARC_IN_LEFT: 'rightTrapeziumWithArcInLeft',
  RIGHT_TRAPEZIUM_WITH_ARC_IN_RIGHT: 'rightTrapeziumWithArcInRight',
  RIGHT_PENTAGON: 'rightPentagon',
  PENTAGON_WITH_STAIRS_ON_LEFT: 'pentagonWithStairsOnLeft', //kept pentagon_with_stairs_on_left, for pentagon_with_stairs_on_right, use the mirror image of this
  PENTAGON: 'pentagon',
  RECTANGLE_WITH_GOTHIC_ARC: 'rectangleWithGothicArc',
  RECTANGLE_WITH_TWO_QUADRANTS: 'rectangleWithTwoQuadrants',
  RECTANGLE_WITH_ARC: 'RectangleWithArc',
  DESIGN_ONE: 'designOne',
  RIGHT_TRAPEXIUM_WITH_GOTHIC_ARC_IN_RIGHT: 'rightTrapexiumWithGothicArcInRight', //kept right_trapezium_with_gothic_arc_in_right, for right_trapezium_with_gothic_arc_in_left, use mirror image of this
  OCTAGON: 'octagon',
  DESIGN_THIRTEEN: 'DesignThirteen',
  TRAPEZIUM: 'trapezium',
  RHOMBUS: 'rhombus',
  DESIGN_SIXTEEN: 'designsixteen',
  DESIGN_SEVENTEEN: 'designseventeen',
  RIGHT_TRAPEZIUM_ON_RIGHT: 'rightTrapeziumOnRight', //kept rightTrapeziumOnRight, for rightTrapeziumOnLeft use mirror image of this
  DESIGN_TWENTY: 'designTwenty',
  RIGHT_HEXAGON: 'rightHexagon',
  HEXAGON: 'hexagon',
  DESIGN_TWENTY_THREE: 'designTwentyThree',
  HEAD_ICON_TWO: 'headIconTwo',
  SLIDE_AND_FOLD: 'slideAndFold',
} as const;

export type IconKey = typeof customIconKeys[keyof typeof customIconKeys];

export const CUSTOM_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.CUSTOM_DESIGNS]: {
    [customIconKeys.CIRCLE]: `<svg width="41" height="42" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="25" cy="25.1777" r="24.5" stroke="#96A0B5" />
                        <circle cx="25" cy="25.1777" r="20.5" stroke="#96A0B5" />
                        <line x1="25.5" y1="18.1777" x2="25.5" y2="31.1777" stroke="#96A0B5" />
                        <line x1="19" y1="24.6777" x2="31" y2="24.6777" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.SEMI_CIRCLE]: `<svg width="51" height="42" viewBox="0 0 103 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M101.983 51.3554H1C2.05631 30.4405 10.9293 16.315 25.2951 7.86455C40.2955 -0.959186 64.3786 -2.90981 83.8147 11.8785C99.3635 23.7092 102.124 43.1866 101.983 51.3554Z"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M96.4905 46.4962L6.49292 46.4963C8.39428 25.6105 20.4263 16.4297 28.4642 11.638C39.4498 5.08904 63.2016 2.19133 79.8008 15.0182C93.7441 25.7927 96.6166 40.0255 96.4905 46.4962Z"
                          stroke="#96A0B5"
                        />
                        <line x1="52.2029" y1="16.7378" x2="52.2029" y2="38.2865" stroke="#96A0B5" />
                        <line x1="62.6885" y1="28.2231" x2="41.1398" y2="28.2231" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.OVAL]: `<svg width="51" height="42" viewBox="0 0 52 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M25.9883 1.17773C9.57802 1.17774 0.988281 13.2393 0.988281 13.2393C0.988281 13.2393 8.8088 25.1777 25.9883 25.1777C43.1678 25.1777 50.9883 13.2393 50.9883 13.2393C50.9883 13.2393 42.3985 1.17773 25.9883 1.17773Z"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M26.3199 5.17773C13.6304 5.17774 6.98828 13.5052 6.98828 13.5052C6.98828 13.5052 13.0356 21.7477 26.3199 21.7477C39.6043 21.7477 45.6516 13.5052 45.6516 13.5052C45.6516 13.5052 39.0095 5.17773 26.3199 5.17773Z"
                          stroke="#96A0B5"
                        />
                        <line x1="27.4883" y1="8.17773" x2="27.4883" y2="19.1777" stroke="#96A0B5" />
                        <line x1="20.9883" y1="13.6777" x2="33.9883" y2="13.6777" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.SEMI_OVAL]: `<svg width="51" height="42" viewBox="0 0 102 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M100.988 34.9565H0.988281C0.988281 34.9565 13.134 1.80712 50.7859 1.40277C87.2231 1.01146 100.988 34.9565 100.988 34.9565Z"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M92.9346 30.9296H8.37085C8.37085 30.9296 21.3082 5.74089 50.5958 5.42899C79.4311 5.1219 92.9346 30.9296 92.9346 30.9296Z"
                          stroke="#96A0B5"
                        />
                        <line x1="51.1528" y1="14.8223" x2="51.1528" y2="22.876" stroke="#96A0B5" />
                        <line x1="46.626" y1="19.02" x2="55.3508" y2="19.02" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.QUADRANT]: `<svg width="41" height="42" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 51.3555V1.37602C1 1.37602 21.9575 0.185923 38.1392 15.9203C54.321 31.6547 51.9725 51.3555 51.9725 51.3555H1Z"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M5 47.3555V5.35547C5 5.35547 22.2114 5.69428 34.8975 18.0383C48 30.7876 48 47.3555 48 47.3555H5Z"
                          stroke="#96A0B5"
                        />
                        <line x1="23.5" y1="25.3555" x2="23.5" y2="37.3555" stroke="#96A0B5" />
                        <line x1="17" y1="30.8555" x2="29" y2="30.8555" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.CURVE]: `<svg width="41" height="42" viewBox="0 0 36 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1.09131 1.35547V49.3555H35.0889C35.0889 49.3555 35.5055 35.2428 25.3017 20.3555C15.098 5.46819 1.09131 1.35547 1.09131 1.35547Z"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M5.09131 7.35547V45.3555H31.0913C31.0913 45.3555 30.0629 34.3313 22.6361 23.3072C15.2093 12.2831 5.09131 7.35547 5.09131 7.35547Z"
                          stroke="#96A0B5"
                        />
                        <line x1="14.5913" y1="24.3555" x2="14.5913" y2="37.3555" stroke="#96A0B5" />
                        <line x1="7.09131" y1="30.8555" x2="22.0913" y2="30.8555" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.GOTHIC_ARC]: `<svg width="41" height="42" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M49.0807 49.3555H1.09174C1.09174 49.3555 0.929071 36.3385 6.94802 23.4843C13.8346 8.77717 25.1676 1.35547 25.1676 1.35547C25.1676 1.35547 36.0668 9.00293 42.5737 22.1826C49.643 36.5012 49.0807 49.3555 49.0807 49.3555Z"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M45.0913 45.3555H5.09131C5.09131 45.3555 5.41147 34.3492 10.675 23.9466C16.563 12.3097 25.1668 6.35547 25.1668 6.35547C25.1668 6.35547 33.8411 12.6753 39.1307 22.9293C44.9404 34.1913 45.0913 45.3555 45.0913 45.3555Z"
                          stroke="#96A0B5"
                        />
                        <line x1="25.5913" y1="20.3555" x2="25.5913" y2="41.3555" stroke="#96A0B5" />
                        <line x1="14.0913" y1="29.8555" x2="36.0913" y2="29.8555" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.ISOSCELES_TRIANGLE]: `<svg width="41" height="42" viewBox="0 0 36 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.1624 2.35547L1.09131 52.3555H35.0913L18.1624 2.35547Z" stroke="#96A0B5" />
                        <path d="M18.1376 12.3555L6.09131 48.3555H30.0913L18.1376 12.3555Z" stroke="#96A0B5" />
                        <line x1="18.5913" y1="32.3555" x2="18.5913" y2="41.3555" stroke="#96A0B5" />
                        <line x1="14.0913" y1="36.8555" x2="23.0913" y2="36.8555" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.RIGHT_TRIANGLE]: `<svg width="41" height="42" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 51.3555V1.35547L51 51.3555H1Z" stroke="#96A0B5" />
                        <path d="M5 47.3555V11.3555L41 47.3555H5Z" stroke="#96A0B5" />
                        <line x1="16.5" y1="30.3555" x2="16.5" y2="42.3555" stroke="#96A0B5" />
                        <line x1="10" y1="35.8555" x2="22" y2="35.8555" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.RIGHT_TRAPEZIUM_WITH_ARC_IN_LEFT]: `<svg width="41" height="42" viewBox="0 0 41 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M40.0913 55.3555V1.35547H20.6655C20.6655 1.35547 12.6578 1.35547 6.87458 6.69213C1.09131 12.0288 1.09131 19.418 1.09131 19.418V55.2694L40.0913 55.3555Z"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M36.0913 51.3555V5.35583H20.6543C20.6543 5.35583 14.1596 5.22594 9.43247 9.90184C4.70535 14.5777 5.09935 20.7423 5.09935 20.7423V51.2822L36.0913 51.3555Z"
                          stroke="#96A0B5"
                        />
                        <line x1="21.5913" y1="21.3555" x2="21.5913" y2="36.3555" stroke="#96A0B5" />
                        <line x1="14.0913" y1="28.8555" x2="29.0913" y2="28.8555" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.RIGHT_TRAPEZIUM_WITH_ARC_IN_RIGHT]: `<svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 31 52" fill="none">
                        <path
                          d="M1 51H30L29.8972 17.6311C29.8972 17.6311 28.6023 15.1991 27.2234 13.4733C25.7922 11.6821 24.425 10.1613 22.6986 8.67591C21.1643 7.35579 20.2949 6.77586 18.5851 5.71237C16.8753 4.64887 16.0092 4.14801 14.1631 3.36695C11.7368 2.34041 10.0651 1.86415 7.47872 1.42644C4.97665 1.00299 1 1 1 1V51Z"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M5 47H26L25.9255 18.9701C25.9255 18.9701 24.9152 16.9976 23.9167 15.5479C22.8803 14.0433 21.8335 12.9601 20.5833 11.7123C19.4723 10.6034 18.9048 10.1125 17.6667 9.21918C16.4286 8.32584 15.7535 7.95746 14.4167 7.30137C12.6597 6.43908 11.5395 5.94302 9.66667 5.57534C7.85482 5.21965 5 5 5 5V47Z"
                          stroke="#96A0B5"
                        />
                        <line
                          y1="-0.5"
                          x2="13"
                          y2="-0.5"
                          transform="matrix(4.37113e-08 1 1 -4.37113e-08 15 22)"
                          stroke="#96A0B5"
                        />
                        <line y1="-0.5" x2="12" y2="-0.5" transform="matrix(-1 0 0 1 21 29)" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.RIGHT_PENTAGON]: `<svg width="41" height="42" viewBox="0 0 38 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M37.0913 51.3555H1.09131V17.0417L18.0913 1.35547H37.0913V51.3555Z" stroke="#96A0B5" />
                        <path d="M33.0913 47.3555H5.09131V19.5777L19.7798 5.35547H33.0913V47.3555Z" stroke="#96A0B5" />
                        <line x1="20.5913" y1="21.3555" x2="20.5913" y2="35.3555" stroke="#96A0B5" />
                        <line x1="13.0913" y1="27.8555" x2="27.0913" y2="27.8555" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.PENTAGON_WITH_STAIRS_ON_LEFT]: `<svg width="41" height="42" viewBox="0 0 36 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35 51.3555H1L1.11148 27.8906L7.91148 11.3335L35 1.35547V51.3555Z" stroke="#96A0B5" />
                        <path d="M31 47.3555H5L5.08525 28.56L10.4764 14.9938L31 7.35547V47.3555Z" stroke="#96A0B5" />
                        <line x1="18.5" y1="24.3555" x2="18.5" y2="36.3555" stroke="#96A0B5" />
                        <line x1="12" y1="29.8555" x2="24" y2="29.8555" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.PENTAGON]: `<svg width="41" height="42" viewBox="0 0 36 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 36.0108V52.8555H35V36.1242L18 1.85547L1 36.0108Z" stroke="#96A0B5" />
                        <path d="M5 35.5707V48.8555H31V35.6541L18 8.85547L5 35.5707Z" stroke="#96A0B5" />
                        <line x1="18.5" y1="26.8555" x2="18.5" y2="40.8555" stroke="#96A0B5" />
                        <line x1="11" y1="34.3555" x2="25" y2="34.3555" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.RECTANGLE_WITH_GOTHIC_ARC]: `<svg width="41" height="42" viewBox="0 0 31 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M30 51.3555H1.13101L1 21.4038C1 21.4038 1.29607 14.5197 4.66817 9.80958C8.99137 3.77093 15.5417 1.35547 15.5417 1.35547C15.5417 1.35547 22.315 4.01247 26.2842 9.6888C30 15.0028 30 21.4038 30 21.4038V51.3555Z"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M25.9967 47.3555H5.09876L5 21.8039C5 21.8039 5.05537 16.5611 7.59753 12.6456C10.8567 7.62572 15.5298 5.35547 15.5298 5.35547C15.5298 5.35547 20.4069 7.81811 23.3992 12.5368C26.2005 16.9543 25.9967 21.8039 25.9967 21.8039V47.3555Z"
                          stroke="#96A0B5"
                        />
                        <line x1="15.5" y1="23.3555" x2="15.5" y2="34.3555" stroke="#96A0B5" />
                        <line x1="10" y1="28.8555" x2="21" y2="28.8555" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.RECTANGLE_WITH_TWO_QUADRANTS]: `<svg xmlns="http://www.w3.org/2000/svg" width="41" height="42" viewBox="0 0 37 55" fill="none">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M23.5393 1.18325H13.4607C6.68006 1.18325 1.18325 6.68007 1.18325 13.4607V53.4084H35.8168V13.4607C35.8168 6.68006 30.3199 1.18325 23.5393 1.18325ZM13.4607 1C6.57886 1 1 6.57886 1 13.4607V53.5916H36V13.4607C36 6.57886 30.4211 1 23.5393 1H13.4607Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M21.3403 5.39809H15.6597C9.48624 5.39809 4.48168 10.4027 4.48168 16.5761V49.1939H32.5183V16.5761C32.5183 10.4027 27.5138 5.39809 21.3403 5.39809ZM15.6597 5.21484C9.38504 5.21484 4.29843 10.3015 4.29843 16.5761V49.3772H32.7016V16.5761C32.7016 10.3015 27.615 5.21484 21.3403 5.21484H15.6597Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M18.4084 36.0002L18.4084 21.1572L18.5916 21.1572L18.5916 36.0002L18.4084 36.0002Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M25.9215 28.6701H11.0785V28.4868H25.9215V28.6701Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                        />
                      </svg>`,
    [customIconKeys.RECTANGLE_WITH_ARC]: `<svg width="41" height="42" viewBox="0 0 35 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M0.5 18.3555C0.5 8.96663 8.11116 1.35547 17.5 1.35547C26.8888 1.35547 34.5 8.96663 34.5 18.3555V51.3555H0.5V18.3555Z"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M4.5 18.557C4.5 11.266 10.4105 5.35547 17.7015 5.35547C24.7699 5.35547 30.5 11.0856 30.5 18.154V47.3555H4.5V18.557Z"
                          stroke="#96A0B5"
                        />
                        <line x1="17.5" y1="22.8555" x2="17.5" y2="36.8555" stroke="#96A0B5" />
                        <line x1="10" y1="29.3555" x2="25" y2="29.3555" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.DESIGN_ONE]: `<svg width="41" height="42" viewBox="0 0 30 56" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.2368 0.972723L15.0417 1.43311L14.8567 0.968593L15.0476 0.892578L15.2368 0.972723ZM29 23.0851L29 23.0824L28.9999 23.0696L28.9992 23.015C28.9984 22.9659 28.9966 22.892 28.9931 22.7951C28.9861 22.6014 28.972 22.316 28.9435 21.9547C28.8866 21.2318 28.7726 20.2067 28.5443 19.0047C28.0869 16.596 27.1751 13.5013 25.3645 10.7049C23.4288 7.71516 20.8009 5.50971 18.644 4.04811C17.5675 3.31863 16.6135 2.77789 15.9302 2.42026C15.5887 2.24151 15.3152 2.10871 15.1283 2.02113C15.0949 2.00549 15.0643 1.9913 15.0366 1.97854C15.0121 1.98933 14.9853 2.00121 14.9563 2.0142C14.7756 2.09519 14.5103 2.21907 14.1772 2.38835C13.5109 2.72702 12.5751 3.24675 11.5055 3.96734C9.36441 5.4099 6.70018 7.6489 4.58496 10.8398C2.95105 13.3046 2.05019 16.3618 1.56001 18.8294C1.31584 20.0586 1.17552 21.1312 1.09633 21.8956C1.05675 22.2777 1.03249 22.5822 1.01817 22.7902C1.01101 22.8942 1.00633 22.9741 1.00347 23.0274L1.00045 23.0871L1.00008 23.0952L1.12903 54.9331H29V23.0851ZM0.50004 23.0853C0.000436276 23.0654 0.000448018 23.0651 0.000448018 23.0651L0.000525773 23.0632L0.000733405 23.0583L0.00153509 23.0405L0.00490841 22.9737C0.00802916 22.9156 0.0130084 22.8308 0.0205294 22.7215C0.0355694 22.5031 0.0607848 22.1871 0.101653 21.7926C0.18335 21.004 0.327804 19.9 0.579171 18.6346C1.08005 16.1131 2.01327 12.9094 3.75146 10.2873C5.95944 6.95645 8.73195 4.63023 10.9468 3.13801C12.0552 2.39121 13.0271 1.85116 13.7241 1.49689C14.0727 1.31971 14.3529 1.18883 14.5473 1.10168C14.6445 1.0581 14.7203 1.02543 14.7726 1.00336C14.7988 0.992328 14.819 0.98394 14.8331 0.978159L14.8496 0.971437L14.8544 0.969532L14.8567 0.968593C14.8567 0.968593 14.8567 0.968593 15.0417 1.43311C15.2368 0.972723 15.2368 0.972723 15.2368 0.972723L15.239 0.973676L15.2437 0.975687L15.2604 0.982889C15.2747 0.989105 15.2954 0.998152 15.3221 1.01004C15.3755 1.03383 15.4532 1.069 15.5527 1.11565C15.7517 1.20893 16.0384 1.34821 16.3939 1.53428C17.1046 1.90626 18.092 2.46607 19.205 3.22028C21.4271 4.72608 24.1704 7.02063 26.2039 10.1614C28.1092 13.104 29.0553 16.3354 29.5268 18.8181C29.763 20.0617 29.8812 21.1236 29.9404 21.8762C29.9701 22.2527 29.985 22.5522 29.9925 22.7589C29.9962 22.8623 29.9981 22.9425 29.9991 22.9975C29.9994 23.0163 29.9996 23.0321 29.9997 23.0449C29.9998 23.051 29.9999 23.0563 29.9999 23.061L30 23.0781L30 23.083L30 23.0844C30 23.0844 30 23.0853 29.5 23.0853L30 23.0844V55.9331H0.133067L0 23.0763L0.000448018 23.0651C0.000448018 23.0651 0.999644 23.1052 0.50004 23.0853Z"
                          fill="#96A0B5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M15.258 4.98678L15.0326 5.43311L14.8142 4.98337L15.0369 4.87515L15.258 4.98678ZM26.9964 23.4571V51.9331H3.11014L3.00002 23.4428L3.00009 23.4408L3.00015 23.4367L3.00038 23.4224L3.00157 23.3695C3.00276 23.3237 3.00487 23.2571 3.00854 23.1715C3.01589 23.0004 3.02951 22.7529 3.05466 22.4434C3.10494 21.8246 3.20146 20.9558 3.38667 19.9504C3.75576 17.9468 4.48309 15.3671 5.92559 13.1453C7.75016 10.335 9.9674 8.29844 11.7252 6.96521C12.605 6.298 13.372 5.8051 13.9213 5.47795C14.196 5.31433 14.4165 5.19202 14.5696 5.10997C14.6462 5.06895 14.7059 5.03797 14.7472 5.01692C14.7679 5.00639 14.7839 4.99834 14.7951 4.99276L14.8083 4.98623L14.8122 4.98434L14.8142 4.98337C14.8142 4.98337 14.8142 4.98337 15.0326 5.43311C15.258 4.98678 15.258 4.98678 15.258 4.98678L15.2599 4.98774L15.2637 4.98969L15.2771 4.99657L15.3263 5.02222C15.3689 5.0446 15.4305 5.07754 15.5095 5.12098C15.6675 5.20785 15.8949 5.33679 16.1771 5.50738C16.7414 5.84843 17.5262 6.35671 18.4148 7.02898C20.1887 8.37113 22.3925 10.3794 24.0738 13.0306C25.6539 15.5224 26.3825 18.1285 26.7175 20.104C26.8852 21.0932 26.955 21.9287 26.9828 22.519C26.9967 22.8144 27.0002 23.0487 27 23.2108C27 23.2918 26.999 23.3548 26.9981 23.3983C26.9976 23.42 26.9971 23.4369 26.9967 23.4488L26.9964 23.4571ZM25.9969 23.4271L25.9969 23.4256L25.9972 23.4166L25.9983 23.3762C25.9991 23.3396 26 23.2837 26 23.21C26.0001 23.0627 25.997 22.8443 25.9839 22.5661C25.9577 22.0094 25.8915 21.2146 25.7316 20.2712C25.4111 18.3814 24.7172 15.9126 23.2293 13.5662C21.6332 11.0493 19.5276 9.12491 17.8114 7.82645C16.9549 7.17841 16.1995 6.68939 15.6598 6.36321C15.3912 6.20082 15.1762 6.07898 15.0293 5.99816C14.889 6.0736 14.6862 6.18628 14.433 6.3371C13.9111 6.64798 13.1755 7.12032 12.3295 7.76197C10.6359 9.04648 8.50931 11.0021 6.76432 13.6898C5.42254 15.7565 4.72742 18.192 4.37012 20.1316C4.19213 21.0978 4.09948 21.9325 4.05138 22.5244C4.02734 22.8201 4.01447 23.0548 4.00762 23.2144C4.0042 23.2942 4.00229 23.3552 4.00123 23.3956L4.00022 23.4406L4.00005 23.4505L4.10628 50.9331H25.9964V23.4376L25.9969 23.4271Z"
                          fill="#96A0B5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M0.500041 38.4331L0.50004 30.4331H3.50004L3.50004 38.4331H0.500041Z"
                          fill="#96A0B5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.50004 41.4331L3.50004 35.4331H5.50004L5.50004 41.4331H3.50004Z"
                          fill="#96A0B5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.5893 33.4651L1.50004 34.4331L1.07964 33.5258L3.1689 32.5578L3.5893 33.4651ZM11.9463 29.593L7.76782 31.5291L7.34743 30.6217L11.5259 28.6857L11.9463 29.593ZM20.3034 25.721L16.1249 27.657L15.7045 26.7497L19.883 24.8136L20.3034 25.721ZM26.5712 22.8169L24.4819 23.7849L24.0615 22.8776L26.1508 21.9096L26.5712 22.8169Z"
                          fill="#96A0B5"
                        />
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M2.67264 35.8758L0.50004 34.4331L1.05322 33.6L3.22581 35.0427L2.67264 35.8758ZM11.363 41.6465L7.01782 38.7611L7.571 37.9281L11.9162 40.8134L11.363 41.6465ZM20.0534 47.4171L15.7082 44.5318L16.2614 43.6987L20.6066 46.5841L20.0534 47.4171ZM26.5712 51.7451L24.3986 50.3025L24.9518 49.4694L27.1244 50.9121L26.5712 51.7451Z"
                          fill="#96A0B5"
                        />
                      </svg>`,
    [customIconKeys.RIGHT_TRAPEXIUM_WITH_GOTHIC_ARC_IN_RIGHT]: `<svg width="41" height="42" viewBox="0 0 27 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 51.1777H25.999V27.8822C25.999 27.8822 26.2439 17.0815 19.0481 9.40202C10.5118 0.292013 1 1.20304 1 1.20304V51.1777Z"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M5 47.1777H21.9999V27.9741C21.9999 27.9741 22.095 19.0353 16.8953 12.9132C10.9108 5.867 5 6.17981 5 6.17981V47.1777Z"
                          stroke="#96A0B5"
                        />
                        <line
                          y1="-0.5"
                          x2="12"
                          y2="-0.5"
                          transform="matrix(4.37114e-08 1 1 -4.37114e-08 14 23.1777)"
                          stroke="#96A0B5"
                        />
                        <line y1="-0.5" x2="11" y2="-0.5" transform="matrix(-1 0 0 1 19 29.1777)" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.OCTAGON]: `<svg width="41" height="42" viewBox="0 0 53 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M5.0509 17.9425L26.5942 3.67164L48.0036 18.0782L48.0036 32.3476L33.6915 46.6597L19.5008 46.6597L5.05092 32.2098L5.0509 17.9425Z"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M8.46212 19.1046L26.393 7.22661L44.2127 19.2176L44.2127 31.0712L32.2938 42.9901L20.4962 42.9901L8.46214 30.956L8.46212 19.1046Z"
                          stroke="#96A0B5"
                        />
                        <line x1="27.3242" y1="17.355" x2="27.3242" y2="36.355" stroke="#96A0B5" />
                        <line x1="16.8242" y1="25.855" x2="35.8242" y2="25.855" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.DESIGN_THIRTEEN]: `<svg width="41" height="42" viewBox="0 0 29 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1 51.9121H28V25.5671C28 25.5671 27.2379 20.6315 26.022 17.7133C24.4825 14.0186 23.1595 12.0385 20.3846 9.16357C17.3858 6.05655 15.0274 4.5402 11.2857 2.90041C7.34162 1.17193 1 0.912109 1 0.912109V51.9121Z"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M4 47.9121H25V25.6996C25 25.6996 24.862 22.3217 23.3235 18.8556C21.9702 15.8066 20.9897 14.4343 18.8235 12.0188C16.6047 9.54455 14.7631 8.27375 11.8529 6.89119C8.44453 5.27194 4 4.91211 4 4.91211V47.9121Z"
                          stroke="#96A0B5"
                        />
                        <line
                          x1="4.03593"
                          y1="28.4134"
                          x2="25.175"
                          y2="29.9364"
                          stroke="#96A0B5"
                          stroke-dasharray="3 3"
                        />
                        <line
                          x1="4.33451"
                          y1="28.5405"
                          x2="25.2948"
                          y2="47.4079"
                          stroke="#96A0B5"
                          stroke-dasharray="3 3"
                        />
                        <rect x="1.5" y="23.4121" width="2" height="7" fill="#96A0B5" stroke="#96A0B5" />
                        <rect x="4.5" y="28.4121" width="1" height="5" fill="#96A0B5" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.TRAPEZIUM]: `<svg width="41" height="42" viewBox="0 0 54 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M53 50.624H1L18.7656 0.624023H35.3828L53 50.624Z" stroke="#96A0B5" />
                        <path d="M48 46.624H6L20.356 4.62402H33.4917L48 46.624Z" stroke="#96A0B5" />
                        <line x1="27.5" y1="18.624" x2="27.5" y2="39.624" stroke="#96A0B5" />
                        <line x1="16" y1="29.124" x2="38" y2="29.124" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.RHOMBUS]: `<svg width="41" height="42" viewBox="0 0 36 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35 26.624L18 51.624L1 26.624L18 1.62402L35 26.624Z" stroke="#96A0B5" />
                        <path d="M31 26.624L18 46.624L5 26.624L18 6.62402L31 26.624Z" stroke="#96A0B5" />
                        <line x1="18.5" y1="19.624" x2="18.5" y2="33.624" stroke="#96A0B5" />
                        <line x1="11" y1="26.124" x2="25" y2="26.124" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.DESIGN_SIXTEEN]: `<svg width="41" height="42" viewBox="0 0 73 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M72 53.3555H1V1.35547L72 26.4619V53.3555Z" stroke="#96A0B5" />
                        <path d="M68 49.1535L5 49.3555V7.35547L68 29.567V49.1535Z" stroke="#96A0B5" />
                        <line x1="32.5" y1="27.3555" x2="32.5" y2="40.3555" stroke="#96A0B5" />
                        <line x1="26" y1="33.8555" x2="38" y2="33.8555" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.DESIGN_SEVENTEEN]: `<svg width="41" height="42" viewBox="0 0 73 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 53.3555H72V1.35547L1 26.4619V53.3555Z" stroke="#96A0B5" />
                        <path d="M5 49.1535L68 49.3555V7.35547L5 29.567V49.1535Z" stroke="#96A0B5" />
                        <line
                          y1="-0.5"
                          x2="13"
                          y2="-0.5"
                          transform="matrix(4.37114e-08 1 1 -4.37114e-08 41 27.3555)"
                          stroke="#96A0B5"
                        />
                        <line y1="-0.5" x2="12" y2="-0.5" transform="matrix(-1 0 0 1 47 34.3555)" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.RIGHT_TRAPEZIUM_ON_RIGHT]: `<svg width="41" height="42" viewBox="0 0 36 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M35 50.624H1.11296L1 0.624023H18.0565L35 50.624Z" stroke="#96A0B5" />
                        <path d="M30 46.624H5L5.11946 4.62402H15.3085L30 46.624Z" stroke="#96A0B5" />
                        <line x1="13.5" y1="21.624" x2="13.5" y2="32.624" stroke="#96A0B5" />
                        <line x1="8" y1="27.124" x2="19" y2="27.124" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.DESIGN_TWENTY]: `<svg width="41" height="42" viewBox="0 0 53 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M52 51.624H2L52 1.62402V51.624Z" stroke="#96A0B5" />
                        <path d="M48 47.624H12L48 11.624V47.624Z" stroke="#96A0B5" />
                        <line x1="39.5" y1="29.624" x2="39.5" y2="41.624" stroke="#96A0B5" />
                        <line x1="33" y1="35.124" x2="45" y2="35.124" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.RIGHT_HEXAGON]: `<svg width="41" height="42" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 34.6888V51.3555H51V34.6888L34.3877 1.35547H17.8254L1 34.6888Z" stroke="#96A0B5" />
                        <path d="M5 34.1174V47.3555H47V34.1174L32.6632 5.35547H19.224L5 34.1174Z" stroke="#96A0B5" />
                        <line x1="26.5" y1="19.3555" x2="26.5" y2="40.3555" stroke="#96A0B5" />
                        <line x1="15" y1="29.8555" x2="37" y2="29.8555" stroke="#96A0B5" />
                      </svg>`,
    [customIconKeys.HEXAGON]: `<svg width="41" height="42" viewBox="0 0 68 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M33.7455 13.2379V32.2379M25.2455 22.7379L43.2455 22.7379M23.0513 0.671722L44.9063 0.670898L66.9577 22.7223L44.9063 44.5768L22.9963 44.5768L1 22.7231L23.0513 0.671722ZM24.9376 4.4803L43.0052 4.47962L61.2351 22.7095L43.0052 40.7767H24.8921L6.70777 22.7102L24.9376 4.4803Z"
                          stroke="#96A0B5"
                        />
                      </svg>`,
    [customIconKeys.DESIGN_TWENTY_THREE]: `<svg width="41" height="42" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M25.6166 13.5981L25.6166 35.5981M16.1166 24.0981H35.1166M33.249 0.652848L49.181 16.5848L49.1809 32.6631L33.2489 48.5951H17.3169L1.38496 32.6631L1.23877 16.5851L17.1708 0.652832L33.249 0.652848ZM31.9454 4.54083L45.2905 17.8859L45.2904 31.3534L31.9454 44.6985L18.6003 44.6985L5.25527 31.3534L5.13282 17.8861L18.4779 4.54082L31.9454 4.54083Z"
                          stroke="#96A0B5"
                        />
                      </svg>`,
  },
  [IconPrefix.CUSTOM_SECTIONING]: {
    [customIconKeys.HEAD_ICON_TWO]: `<svg
                xmlns="http://www.w3.org/2000/svg"
                width="27.081"
                height="30.5"
                viewBox="0 0 27.081 30.5"
                class="position-relative custom-section"
              >
                <g transform="translate(-41.5 -513.5)">
                  <g>
                    <g transform="translate(-14 157)">
                      <g class="cls-2" transform="translate(60 361)" fill="none" stroke-width="1.5">
                        <rect width="18" height="22" stroke="none" />
                        <rect x="0.75" y="0.75" width="16.5" height="20.5" fill="none" />
                      </g>
                    </g>
                    <path
                      class="cls-2"
                      d="M0,0H27.081"
                      transform="translate(41.5 529)"
                      fill="none"
                      stroke-width="1"
                      stroke-dasharray="2 2"
                    />
                    <line
                      class="cls-2"
                      y2="30.5"
                      transform="translate(55 513.5)"
                      fill="none"
                      stroke-width="1"
                      stroke-dasharray="2 2"
                    />
                  </g>
                  <line class="cls-2" y2="13" transform="translate(55.041 522.25)" fill="none" stroke-width="1" />
                  <line class="cls-2" x1="10" transform="translate(50 529)" fill="none" stroke-width="1" />
                </g>
              </svg>`,
  },
  [IconPrefix.SLIDE_AND_FOLD]: {
    [customIconKeys.SLIDE_AND_FOLD]: `<svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlns:xlink="http://www.w3.org/1999/xlink"
                            width="70"
                            height="50"
                            viewBox="0 0 70 50"
                          >
                            <g id="Group_14406" data-name="Group 14406" transform="translate(-110 -815)">
                              <g
                                id="Rectangle_4508"
                                data-name="Rectangle 4508"
                                transform="translate(110 815)"
                                fill="#fff"
                                stroke="#96a0b5"
                                stroke-linejoin="round"
                                stroke-width="1"
                              >
                                <rect width="70" height="43.851" stroke="none" />
                                <rect x="0.5" y="0.5" width="69" height="42.851" fill="none" />
                              </g>
                              <g
                                id="Rectangle_4509"
                                data-name="Rectangle 4509"
                                transform="translate(113 817.631)"
                                fill="#fff"
                                stroke="#96a0b5"
                                stroke-linejoin="round"
                                stroke-width="1"
                              >
                                <rect width="64" height="38.589" stroke="none" />
                                <rect x="0.5" y="0.5" width="63" height="37.589" fill="none" />
                              </g>
                              <g
                                id="Path_20489"
                                data-name="Path 20489"
                                transform="translate(113 817.579)"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                fill="none"
                              >
                                <path
                                  d="M 18.02937316894531 46.60386276245117 L 0.5434843301773071 37.64010620117188 L 0.5467199087142944 1.18051552772522 L 18.14246940612793 8.731588363647461 L 18.02937316894531 46.60386276245117 Z"
                                  stroke="none"
                                />
                                <path
                                  d="M 1.046651840209961 1.939155578613281 L 1.043512344360352 37.33456039428711 L 17.53180694580078 45.78692245483398 L 17.64148330688477 9.060691833496094 L 1.046651840209961 1.939155578613281 M 0.04678726196289062 0.421875 L 18.64345741271973 8.402484893798828 L 18.52693748474121 47.42079544067383 L 0.04345703125 37.94564437866211 L 0.04678726196289062 0.421875 Z"
                                  stroke="none"
                                  fill="#96a0b5"
                                />
                              </g>
                              <g
                                id="Path_20494"
                                data-name="Path 20494"
                                transform="translate(155 817.579)"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                fill="none"
                              >
                                <path
                                  d="M 18.02937316894531 46.60386276245117 L 0.5434843301773071 37.64010620117188 L 0.5467199087142944 1.18051552772522 L 18.14246940612793 8.731588363647461 L 18.02937316894531 46.60386276245117 Z"
                                  stroke="none"
                                />
                                <path
                                  d="M 1.046651840209961 1.939155578613281 L 1.043512344360352 37.33456039428711 L 17.53180694580078 45.78692245483398 L 17.64148330688477 9.060691833496094 L 1.046651840209961 1.939155578613281 M 0.04678726196289062 0.421875 L 18.64345741271973 8.402484893798828 L 18.52693748474121 47.42079544067383 L 0.04345703125 37.94564437866211 L 0.04678726196289062 0.421875 Z"
                                  stroke="none"
                                  fill="#96a0b5"
                                />
                              </g>
                              <g
                                id="Path_20493"
                                data-name="Path 20493"
                                transform="translate(134.534 817.579)"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                fill="none"
                              >
                                <path
                                  d="M 0.6554335951805115 46.59688949584961 L 0.5444168448448181 8.729177474975586 L 17.79953193664551 1.186108946800232 L 17.80270767211914 37.6426887512207 L 0.6554335951805115 46.59688949584961 Z"
                                  stroke="none"
                                />
                                <path
                                  d="M 17.29959869384766 1.950347900390625 L 1.045379638671875 9.055873870849609 L 1.153022766113281 45.77298736572266 L 17.30268096923828 37.3397331237793 L 17.29959869384766 1.950347900390625 M 18.29946517944336 0.421875 L 18.302734375 37.94564437866211 L 0.1578445434570312 47.42079544067383 L 0.04345512390136719 8.402484893798828 L 18.29946517944336 0.421875 Z"
                                  stroke="none"
                                  fill="#96a0b5"
                                />
                              </g>
                              <line
                                id="Line_258"
                                data-name="Line 258"
                                x2="4"
                                transform="translate(131.5 832.102)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="1"
                              />
                              <line
                                id="Line_261"
                                data-name="Line 261"
                                x2="3"
                                transform="translate(152.5 832.102)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="1"
                              />
                              <line
                                id="Line_259"
                                data-name="Line 259"
                                x2="4"
                                transform="translate(131.5 844.533)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="1"
                              />
                              <line
                                id="Line_262"
                                data-name="Line 262"
                                x2="3"
                                transform="translate(152.5 844.533)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="1"
                              />
                              <path
                                id="Path_20491"
                                data-name="Path 20491"
                                d="M116.029,241.486l15.724-10.519L116.6,207"
                                transform="translate(-1.752 613.427)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="1"
                                stroke-dasharray="3 2"
                              />
                              <path
                                id="Path_20495"
                                data-name="Path 20495"
                                d="M116.029,241.486l15.724-10.519L116.6,207"
                                transform="translate(40.452 613.293)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="1"
                                stroke-dasharray="3 2"
                              />
                              <path
                                id="Path_20492"
                                data-name="Path 20492"
                                d="M131.455,241.22l-14.707-10.372L130.913,207"
                                transform="translate(19.889 613.427)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="1"
                                stroke-dasharray="3 2"
                              />
                              <g
                                id="Rectangle_4510"
                                data-name="Rectangle 4510"
                                transform="translate(176 833.418)"
                                fill="#6f7789"
                                stroke="#96a0b5"
                                stroke-width="1"
                              >
                                <rect width="4" height="8.77" stroke="none" />
                                <rect x="0.5" y="0.5" width="3" height="7.77" fill="none" />
                              </g>
                            </g>
                          </svg>`,
  },
};
