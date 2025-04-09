import { IconPrefix, IconPrefixType } from '../models/icon.model';

export const zigzagDesignIconKeys = {
  ZIGZAG_TWO_TRACK_X_X_X_PANEL: 'zigzagTwoTrackXXXPanel',
  ZIGZAG_TWO_TRACK_FOUR_PANEL: 'zigzagTwoTrackFourPanel',
  ZIGZAG_TWO_TRACK_FIVE_PANEL: 'zigzagTwoTrackFivePanel',
  ZIGZAG_TWO_TRACK_SIX_PANEL: 'zigzagTwoTrackSixPanel',
  ZIGZAG_TWO_TRACK_EIGHT_PANEL: 'zigzagTwoTrackEightPanel',

  // all below images here used as mirror images // these are the inside view for outside need to be flipped(by conditional)
  ZIGZAG_TWO_TRACK_X_X_X_PANEL_LEFT: 'zigzagTwoTrackXXXPanelLeft',
  ZIGZAG_TWO_TRACK_X_X_X_PANEL_RIGHT: 'zigzagTwoTrackXXXPanelRight',
  ZIGZAG_TWO_TRACK_FOUR_PANEL_MEETING: 'zigzagTwoTrackFourPanelMeeting',
  ZIGZAG_THREE_TRACK_FIVE_PANEL_MEETING: 'zigzagThreeTrackFivePanelMeeting',
  ZIGZAG_TWO_TRACK_SIX_PANEL_MEETING: 'zigzagTwoTrackSixPanelMeeting',
  ZIGZAG_TWO_TRACK_EIGHT_PANEL_MEETING: 'zigzagTwoTrackEightPanelMeeting',
} as const;

export type IconKey = typeof zigzagDesignIconKeys[keyof typeof zigzagDesignIconKeys];

export const ZIGZAG_DESIGNS_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.ZIGZAG_SIDE_OPENING_SLIDING]: {
    [zigzagDesignIconKeys.ZIGZAG_TWO_TRACK_X_X_X_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="71" height="51" viewBox="0 0 71 51">
                        <g id="Group_53614" data-name="Group 53614" transform="translate(-351.5 -50.5)">
                          <path
                            id="path70"
                            d="M137.36-912.4v-50h-70v50h70"
                            transform="translate(284.64 1013.4)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-2"
                            data-name="path70"
                            d="M90.693-912.4v-50H67.36v50H90.693"
                            transform="translate(284.64 1013.4)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-3"
                            data-name="path70"
                            d="M90.693-912.4v-50H67.36v50H90.693"
                            transform="translate(307.973 1013.4)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-4"
                            data-name="path70"
                            d="M90.693-912.4v-50H67.36v50H90.693"
                            transform="translate(331.307 1013.4)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-5"
                            data-name="path70"
                            d="M84.753-918.436V-962.4H67.36v43.964H84.753"
                            transform="translate(287.622 1016.41)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-6"
                            data-name="path70"
                            d="M90.693-918.436V-962.4H67.36v43.964H90.693"
                            transform="translate(307.973 1016.418)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-7"
                            data-name="path70"
                            d="M84.784-918.436V-962.4H67.36v43.964H84.784"
                            transform="translate(334.305 1016.41)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="Path_98973"
                            data-name="Path 98973"
                            d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-3.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,3.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
                            transform="translate(357.614 453.376)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.2"
                          />
                          <path
                            id="Path_98975"
                            data-name="Path 98975"
                            d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-3.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,3.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
                            transform="translate(404.614 453.376)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.2"
                          />
                          <g id="Group_53591" data-name="Group 53591" transform="translate(-121.836 -131.439)">
                            <rect
                              id="Rectangle_10035"
                              data-name="Rectangle 10035"
                              width="3"
                              height="8"
                              transform="translate(540.836 202.439)"
                              fill="#96a0b5"
                            />
                            <rect
                              id="Rectangle_10036"
                              data-name="Rectangle 10036"
                              width="2"
                              height="6"
                              transform="translate(538.836 206.439)"
                              fill="#96a0b5"
                            />
                          </g>
                          <g id="Group_53592" data-name="Group 53592" transform="translate(-76.817 -131.439)">
                            <rect
                              id="Rectangle_10006"
                              data-name="Rectangle 10006"
                              width="3"
                              height="8"
                              transform="translate(429.151 202.439)"
                              fill="#96a0b5"
                            />
                            <rect
                              id="Rectangle_10024"
                              data-name="Rectangle 10024"
                              width="2"
                              height="6"
                              transform="translate(432.151 206.439)"
                              fill="#96a0b5"
                            />
                          </g>
                          <g id="Group_53615" data-name="Group 53615">
                            <path
                              id="Path_98974"
                              data-name="Path 98974"
                              d="M4.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,3.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-3.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,4.113-379.841Z"
                              transform="translate(380.614 453.376)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Path_98987"
                              data-name="Path 98987"
                              d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-3.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,3.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
                              transform="translate(380.614 453.376)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                        </g>
                      </svg>`,
    [zigzagDesignIconKeys.ZIGZAG_TWO_TRACK_FOUR_PANEL]: `<svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="70.501"
                      height="51.001"
                      viewBox="0 0 70.501 51.001"
                    >
                      <g id="Group_53616" data-name="Group 53616" transform="translate(-367.5 -189.5)">
                        <path
                          id="path70"
                          d="M84.36-912.4v-50h-17v50h17"
                          transform="translate(300.64 1152.4)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-2"
                          data-name="path70"
                          d="M81.36-918.4v-44h-14v44h14"
                          transform="translate(303.64 1155.393)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-3"
                          data-name="path70"
                          d="M85.36-912.4v-50h-18v50h18"
                          transform="translate(352.141 1152.4)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="Path_98973"
                          data-name="Path 98973"
                          d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-2.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,2.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
                          transform="translate(372.172 592.376)"
                          fill="#96a0b5"
                          stroke="#96a0b5"
                          stroke-width="0.2"
                        />
                        <g id="Group_53592" data-name="Group 53592" transform="translate(368.5 210)">
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
                          id="path70-4"
                          data-name="path70"
                          d="M84.36-912.4v-50h-17v50h17"
                          transform="translate(335.313 1152.4)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-5"
                          data-name="path70"
                          d="M85.36-912.4v-50h-18v50h18"
                          transform="translate(317.478 1152.4)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-6"
                          data-name="path70"
                          d="M79.393-918.4v-44H67.36v44H79.393"
                          transform="translate(355.099 1155.393)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-7"
                          data-name="path70"
                          d="M84.195-918.4v-44H67.36v44H84.195"
                          transform="translate(335.478 1155.393)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-8"
                          data-name="path70"
                          d="M79.393-918.4v-44H67.36v44H79.393"
                          transform="translate(320.428 1155.393)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <g id="Group_53599" data-name="Group 53599" transform="translate(433 210)">
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
                        <path
                          id="Path_98978"
                          data-name="Path 98978"
                          d="M5.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,2.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-2.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,5.113-379.841Z"
                          transform="translate(421.672 592.376)"
                          fill="#96a0b5"
                          stroke="#96a0b5"
                          stroke-width="0.2"
                        />
                        <g id="Group_53617" data-name="Group 53617">
                          <path
                            id="Path_98976"
                            data-name="Path 98976"
                            d="M5.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,2.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-2.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,5.113-379.841Z"
                            transform="translate(386.998 592.376)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.2"
                          />
                          <path
                            id="Path_98988"
                            data-name="Path 98988"
                            d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-2.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,2.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
                            transform="translate(386.998 592.376)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.2"
                          />
                        </g>
                        <g id="Group_53618" data-name="Group 53618" transform="translate(18)">
                          <path
                            id="Path_98976-2"
                            data-name="Path 98976"
                            d="M5.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,2.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-2.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,5.113-379.841Z"
                            transform="translate(386.998 592.376)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.2"
                          />
                          <path
                            id="Path_98988-2"
                            data-name="Path 98988"
                            d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-2.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,2.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
                            transform="translate(386.998 592.376)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.2"
                          />
                        </g>
                      </g>
                    </svg>`,
    [zigzagDesignIconKeys.ZIGZAG_TWO_TRACK_FIVE_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="76" height="51" viewBox="0 0 76 51">
                    <g id="Group_53918" data-name="Group 53918" transform="translate(-636.119 -745.13)">
                      <g id="Group_41704" data-name="Group 41704" transform="translate(407.286 453.63)">
                        <g id="Group_41702" data-name="Group 41702" transform="translate(229.333 292)">
                          <path
                            id="path66"
                            d="M0,50V0H75V50H0"
                            transform="translate(75 50) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                        </g>
                      </g>
                      <path
                        id="path66-2"
                        data-name="path66"
                        d="M0,45.2V0H12.386V45.2H0"
                        transform="translate(651.005 793.38) rotate(180)"
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
                        d="M0,45.2V0H12.386V45.2H0"
                        transform="translate(665.29 793.229) rotate(180)"
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
                        d="M0,45.2V0H12.386V45.2H0"
                        transform="translate(679.927 793.488) rotate(180)"
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
                        d="M0,45.2V0H12.386V45.2H0"
                        transform="translate(694.563 793.488) rotate(180)"
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
                        d="M0,45.2V0H12.386V45.2H0"
                        transform="translate(709.2 793.229) rotate(180)"
                        fill="none"
                        stroke="#96a0b5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-miterlimit="10"
                        stroke-width="1"
                      />
                      <g id="Group_41707" data-name="Group 41707" transform="translate(636.62 766.629)">
                        <g id="Group_53916" data-name="Group 53916" transform="translate(0.037 0.371)">
                          <rect
                            id="Rectangle_10006"
                            data-name="Rectangle 10006"
                            width="2"
                            height="8"
                            fill="#96a0b5"
                          />
                          <rect
                            id="Rectangle_10024"
                            data-name="Rectangle 10024"
                            width="2"
                            height="5"
                            transform="translate(2 4)"
                            fill="#96a0b5"
                          />
                        </g>
                      </g>
                      <g id="Group_53795" data-name="Group 53795" transform="translate(641.426 768.5)">
                        <path
                          id="Path_78161"
                          data-name="Path 78161"
                          d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.776,3.776,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
                          transform="translate(-3.5 379.688)"
                          fill="#96a0b5"
                          stroke="#96a0b5"
                          stroke-width="0.2"
                        />
                      </g>
                      <g id="Group_53908" data-name="Group 53908" transform="translate(698.343 768.056)">
                        <path
                          id="Path_78161-2"
                          data-name="Path 78161"
                          d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.776,3.776,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.468.468,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
                          transform="translate(-3.5 379.688)"
                          fill="#96a0b5"
                          stroke="#96a0b5"
                          stroke-width="0.2"
                        />
                      </g>
                      <g id="Group_53805" data-name="Group 53805" transform="translate(653.894 768.5)">
                        <g id="Group_53803" data-name="Group 53803">
                          <path
                            id="Path_78161-3"
                            data-name="Path 78161"
                            d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.776,3.776,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
                            transform="translate(-3.5 379.687)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.2"
                          />
                        </g>
                        <g id="Group_53804" data-name="Group 53804" transform="translate(2.596)">
                          <path
                            id="Path_78161-4"
                            data-name="Path 78161"
                            d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.776,3.776,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
                            transform="translate(-3.5 379.687)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.2"
                          />
                        </g>
                      </g>
                      <g id="Group_53806" data-name="Group 53806" transform="translate(668.53 768.5)">
                        <g id="Group_53803-2" data-name="Group 53803">
                          <path
                            id="Path_78161-5"
                            data-name="Path 78161"
                            d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.776,3.776,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
                            transform="translate(-3.5 379.687)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.2"
                          />
                        </g>
                        <g id="Group_53804-2" data-name="Group 53804" transform="translate(2.596)">
                          <path
                            id="Path_78161-6"
                            data-name="Path 78161"
                            d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.776,3.776,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
                            transform="translate(-3.5 379.687)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.2"
                          />
                        </g>
                      </g>
                      <g id="Group_53807" data-name="Group 53807" transform="translate(683.167 768.5)">
                        <g id="Group_53803-3" data-name="Group 53803">
                          <path
                            id="Path_78161-7"
                            data-name="Path 78161"
                            d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.776,3.776,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
                            transform="translate(-3.5 379.687)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.2"
                          />
                        </g>
                        <g id="Group_53804-3" data-name="Group 53804" transform="translate(2.596)">
                          <path
                            id="Path_78161-8"
                            data-name="Path 78161"
                            d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.776,3.776,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
                            transform="translate(-3.5 379.687)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.2"
                          />
                        </g>
                      </g>
                      <g id="Group_53796" data-name="Group 53796" transform="translate(8.372 584.13)">
                        <line
                          id="Line_1872"
                          data-name="Line 1872"
                          y2="50"
                          transform="translate(644.5 161.5)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                      </g>
                      <g id="Group_53797" data-name="Group 53797" transform="translate(23.009 583.87)">
                        <line
                          id="Line_1872-2"
                          data-name="Line 1872"
                          y2="50"
                          transform="translate(644.5 161.5)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                      </g>
                      <g id="Group_53798" data-name="Group 53798" transform="translate(37.645 584.129)">
                        <line
                          id="Line_1872-3"
                          data-name="Line 1872"
                          y2="50"
                          transform="translate(644.5 161.5)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                      </g>
                      <g id="Group_53799" data-name="Group 53799" transform="translate(52.282 584.129)">
                        <line
                          id="Line_1872-4"
                          data-name="Line 1872"
                          y2="50"
                          transform="translate(644.5 161.5)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                      </g>
                      <g id="Group_53800" data-name="Group 53800" transform="translate(66.919 583.87)">
                        <path
                          id="Path_78150"
                          data-name="Path 78150"
                          d="M.342.109"
                          transform="translate(641.939 208.791)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                        <line
                          id="Line_1872-5"
                          data-name="Line 1872"
                          y2="50"
                          transform="translate(644.5 161.5)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-width="1"
                        />
                      </g>
                      <g id="Group_53917" data-name="Group 53917" transform="translate(707.143 766.388)">
                        <rect
                          id="Rectangle_10006-2"
                          data-name="Rectangle 10006"
                          width="2"
                          height="8"
                          transform="translate(2)"
                          fill="#96a0b5"
                        />
                        <rect
                          id="Rectangle_10024-2"
                          data-name="Rectangle 10024"
                          width="2"
                          height="5"
                          transform="translate(0 4)"
                          fill="#96a0b5"
                        />
                      </g>
                    </g>
                  </svg>`,
    [zigzagDesignIconKeys.ZIGZAG_TWO_TRACK_SIX_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="70.787" height="51" viewBox="0 0 70.787 51">
                        <g id="Group_53619" data-name="Group 53619" transform="translate(-402.5 -261.501)">
                          <path
                            id="path70"
                            d="M67.36-912.4v-50h69.787v50H67.36"
                            transform="translate(335.64 1224.401)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-2"
                            data-name="path70"
                            d="M67.36-912.4v-50H79.693v50H67.36"
                            transform="translate(335.64 1224.401)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-3"
                            data-name="path70"
                            d="M67.36-912.4v-50H79.693v50H67.36"
                            transform="translate(358.887 1224.401)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-4"
                            data-name="path70"
                            d="M67.36-912.4v-50H79.693v50H67.36"
                            transform="translate(382.135 1224.401)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-5"
                            data-name="path70"
                            d="M67.36-912.4v-50h11v50h-11"
                            transform="translate(394.427 1224.401)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-6"
                            data-name="path70"
                            d="M67.36-912.4v-50h11v50h-11"
                            transform="translate(347.929 1224.401)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-7"
                            data-name="path70"
                            d="M67.36-912.4v-50h11v50h-11"
                            transform="translate(371.178 1224.401)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-8"
                            data-name="path70"
                            d="M67.36-918.378V-962.4h8.366v44.022H67.36"
                            transform="translate(337.644 1227.414)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-9"
                            data-name="path70"
                            d="M67.36-918.378V-962.4h8.333v44.022H67.36"
                            transform="translate(360.933 1227.414)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-10"
                            data-name="path70"
                            d="M67.36-918.378V-962.4h8.37v44.022H67.36"
                            transform="translate(384.186 1227.414)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-11"
                            data-name="path70"
                            d="M67.36-918.378V-962.4h8.953v44.022H67.36"
                            transform="translate(394.427 1227.414)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-12"
                            data-name="path70"
                            d="M67.36-918.378V-962.4h11v44.022h-11"
                            transform="translate(347.929 1227.414)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path70-13"
                            data-name="path70"
                            d="M67.36-918.378V-962.4h11v44.022h-11"
                            transform="translate(371.178 1227.414)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="Path_98979"
                            data-name="Path 98979"
                            d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
                            transform="translate(401.634 664.376)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.2"
                          />
                          <g id="Group_53604" data-name="Group 53604" transform="translate(403 285)">
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
                          <g id="Group_53605" data-name="Group 53605" transform="translate(468 285)">
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
                          <path
                            id="Path_98982"
                            data-name="Path 98982"
                            d="M7.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,7.113-379.841Z"
                            transform="translate(458.421 663.876)"
                            fill="#96a0b5"
                          />
                          <g id="Group_53606" data-name="Group 53606" transform="translate(452.571 285)">
                            <path
                              id="Path_78161"
                              data-name="Path 78161"
                              d="M7.607-379.657a.362.362,0,0,0-.179.179.47.47,0,0,0,.005.276,3.049,3.049,0,0,0,.457.511l.622.621-3.7.009-1.087.009-.066.041a.453.453,0,0,0-.112.11.262.262,0,0,0-.047.184.261.261,0,0,0,.047.184.454.454,0,0,0,.112.11l.066.041,1.087.009,3.7.009-.622.621c-.346.345-.264.281-.278.312a.47.47,0,0,0-.005.276.348.348,0,0,0,.45.181c.074-.034,1.535-1.467,1.6-1.567a.378.378,0,0,0-.005-.359c-.072-.109-1.7-1.725-1.771-1.759A.323.323,0,0,0,7.607-379.657Z"
                              transform="translate(-3.5 379.687)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Path_78162"
                              data-name="Path 78162"
                              d="M5.547-379.519a.362.362,0,0,1,.179.179.47.47,0,0,1-.005.276c-.014.031-.068.046-.415.391l-.622.621,3.7.009,1.087.009.066.041a.453.453,0,0,1,.112.11.261.261,0,0,1,.047.184.261.261,0,0,1-.047.184.455.455,0,0,1-.112.11l-.066.041-1.087.009-3.7.009.391.475c.346.345.633.645.646.676a.47.47,0,0,1,.005.276.348.348,0,0,1-.45.181c-.074-.034-1.671-1.685-1.733-1.785a.378.378,0,0,1,.005-.359c.072-.109,1.654-1.6,1.728-1.639A.323.323,0,0,1,5.547-379.519Z"
                              transform="translate(-3.5 379.67)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                          <g id="Group_53607" data-name="Group 53607" transform="translate(417.688 285)">
                            <path
                              id="Path_78161-2"
                              data-name="Path 78161"
                              d="M7.607-379.657a.362.362,0,0,0-.179.179.47.47,0,0,0,.005.276,3.049,3.049,0,0,0,.457.511l.622.621-3.7.009-1.087.009-.066.041a.453.453,0,0,0-.112.11.262.262,0,0,0-.047.184.261.261,0,0,0,.047.184.454.454,0,0,0,.112.11l.066.041,1.087.009,3.7.009-.622.621c-.346.345-.264.281-.278.312a.47.47,0,0,0-.005.276.348.348,0,0,0,.45.181c.074-.034,1.535-1.467,1.6-1.567a.378.378,0,0,0-.005-.359c-.072-.109-1.7-1.725-1.771-1.759A.323.323,0,0,0,7.607-379.657Z"
                              transform="translate(-3.5 379.687)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Path_78162-2"
                              data-name="Path 78162"
                              d="M5.547-379.519a.362.362,0,0,1,.179.179.47.47,0,0,1-.005.276c-.014.031-.068.046-.415.391l-.622.621,3.7.009,1.087.009.066.041a.453.453,0,0,1,.112.11.261.261,0,0,1,.047.184.261.261,0,0,1-.047.184.455.455,0,0,1-.112.11l-.066.041-1.087.009-3.7.009.391.475c.346.345.633.645.646.676a.47.47,0,0,1,.005.276.348.348,0,0,1-.45.181c-.074-.034-1.671-1.685-1.733-1.785a.378.378,0,0,1,.005-.359c.072-.109,1.654-1.6,1.728-1.639A.323.323,0,0,1,5.547-379.519Z"
                              transform="translate(-3.5 379.67)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                          <g id="Group_53620" data-name="Group 53620" transform="translate(429.688 285)">
                            <path
                              id="Path_78161-3"
                              data-name="Path 78161"
                              d="M7.607-379.657a.362.362,0,0,0-.179.179.47.47,0,0,0,.005.276,3.049,3.049,0,0,0,.457.511l.622.621-3.7.009-1.087.009-.066.041a.453.453,0,0,0-.112.11.262.262,0,0,0-.047.184.261.261,0,0,0,.047.184.454.454,0,0,0,.112.11l.066.041,1.087.009,3.7.009-.622.621c-.346.345-.264.281-.278.312a.47.47,0,0,0-.005.276.348.348,0,0,0,.45.181c.074-.034,1.535-1.467,1.6-1.567a.378.378,0,0,0-.005-.359c-.072-.109-1.7-1.725-1.771-1.759A.323.323,0,0,0,7.607-379.657Z"
                              transform="translate(-3.5 379.687)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Path_78162-3"
                              data-name="Path 78162"
                              d="M5.547-379.519a.362.362,0,0,1,.179.179.47.47,0,0,1-.005.276c-.014.031-.068.046-.415.391l-.622.621,3.7.009,1.087.009.066.041a.453.453,0,0,1,.112.11.261.261,0,0,1,.047.184.261.261,0,0,1-.047.184.455.455,0,0,1-.112.11l-.066.041-1.087.009-3.7.009.391.475c.346.345.633.645.646.676a.47.47,0,0,1,.005.276.348.348,0,0,1-.45.181c-.074-.034-1.671-1.685-1.733-1.785a.378.378,0,0,1,.005-.359c.072-.109,1.654-1.6,1.728-1.639A.323.323,0,0,1,5.547-379.519Z"
                              transform="translate(-3.5 379.67)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                          <g id="Group_53621" data-name="Group 53621" transform="translate(440.688 285)">
                            <path
                              id="Path_78161-4"
                              data-name="Path 78161"
                              d="M7.607-379.657a.362.362,0,0,0-.179.179.47.47,0,0,0,.005.276,3.049,3.049,0,0,0,.457.511l.622.621-3.7.009-1.087.009-.066.041a.453.453,0,0,0-.112.11.262.262,0,0,0-.047.184.261.261,0,0,0,.047.184.454.454,0,0,0,.112.11l.066.041,1.087.009,3.7.009-.622.621c-.346.345-.264.281-.278.312a.47.47,0,0,0-.005.276.348.348,0,0,0,.45.181c.074-.034,1.535-1.467,1.6-1.567a.378.378,0,0,0-.005-.359c-.072-.109-1.7-1.725-1.771-1.759A.323.323,0,0,0,7.607-379.657Z"
                              transform="translate(-3.5 379.687)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Path_78162-4"
                              data-name="Path 78162"
                              d="M5.547-379.519a.362.362,0,0,1,.179.179.47.47,0,0,1-.005.276c-.014.031-.068.046-.415.391l-.622.621,3.7.009,1.087.009.066.041a.453.453,0,0,1,.112.11.261.261,0,0,1,.047.184.261.261,0,0,1-.047.184.455.455,0,0,1-.112.11l-.066.041-1.087.009-3.7.009.391.475c.346.345.633.645.646.676a.47.47,0,0,1,.005.276.348.348,0,0,1-.45.181c-.074-.034-1.671-1.685-1.733-1.785a.378.378,0,0,1,.005-.359c.072-.109,1.654-1.6,1.728-1.639A.323.323,0,0,1,5.547-379.519Z"
                              transform="translate(-3.5 379.67)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                        </g>
                      </svg>`,
    [zigzagDesignIconKeys.ZIGZAG_TWO_TRACK_EIGHT_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="71" height="51" viewBox="0 0 71 51">
                      <g id="Group_53631" data-name="Group 53631" transform="translate(-74.5 -664.459)">
                        <path
                          id="path70"
                          d="M67.36-912.442V-962.4h70v49.958h-70"
                          transform="translate(7.64 1627.401)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-2"
                          data-name="path70"
                          d="M67.36-912.442V-962.4h8.25v49.958H67.36"
                          transform="translate(7.64 1627.401)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-3"
                          data-name="path70"
                          d="M67.36-912.442V-962.4h8.15v49.958H67.36"
                          transform="translate(25.39 1627.401)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-4"
                          data-name="path70"
                          d="M67.36-912.442V-962.4h8.15v49.958H67.36"
                          transform="translate(42.94 1627.401)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-5"
                          data-name="path70"
                          d="M67.36-912.442V-962.4h8.15v49.958H67.36"
                          transform="translate(60.49 1627.359)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-6"
                          data-name="path70"
                          d="M67.36-912.442V-962.4h9.5v49.958h-9.5"
                          transform="translate(15.89 1627.38)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-7"
                          data-name="path70"
                          d="M67.36-912.442V-962.4h9.4v49.958h-9.4"
                          transform="translate(33.54 1627.401)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-8"
                          data-name="path70"
                          d="M67.36-912.442V-962.4h9.4v49.958h-9.4"
                          transform="translate(51.09 1627.401)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-9"
                          data-name="path70"
                          d="M67.36-912.442V-962.4h9v49.958h-9"
                          transform="translate(68.64 1627.401)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-10"
                          data-name="path70"
                          d="M67.36-918.394V-962.4h6.31v44.006H67.36"
                          transform="translate(9.58 1630.356)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-11"
                          data-name="path70"
                          d="M67.36-918.394V-962.4h8.15v44.006H67.36"
                          transform="translate(25.39 1630.356)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-12"
                          data-name="path70"
                          d="M67.36-918.394V-962.4h8.15v44.006H67.36"
                          transform="translate(42.94 1630.356)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-13"
                          data-name="path70"
                          d="M67.36-918.394V-962.4h8.15v44.006H67.36"
                          transform="translate(60.49 1630.315)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-14"
                          data-name="path70"
                          d="M67.36-918.394V-962.4h6.023v44.006H67.36"
                          transform="translate(17.693 1630.335)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-15"
                          data-name="path70"
                          d="M67.36-918.394V-962.4h6.234v44.006H67.36"
                          transform="translate(35.207 1630.356)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-16"
                          data-name="path70"
                          d="M67.36-918.394V-962.4h6.151v44.006H67.36"
                          transform="translate(52.665 1630.356)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="path70-17"
                          data-name="path70"
                          d="M67.36-918.394V-962.4h5.677v44.006H67.36"
                          transform="translate(70.291 1630.356)"
                          fill="none"
                          stroke="#96a0b5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-miterlimit="10"
                          stroke-width="1"
                        />
                        <path
                          id="Path_98989"
                          data-name="Path 98989"
                          d="M7.605-379.846a.351.351,0,0,0-.174.174.455.455,0,0,0,.005.267c.013.03.291.321.626.654l.6.6-2.74.008-.208.008-.063.04a.439.439,0,0,0-.109.107.253.253,0,0,0-.045.179.253.253,0,0,0,.045.179.439.439,0,0,0,.109.107l.063.04.208.008,2.74.008-.6.6c-.336.334-.613.624-.626.654a.455.455,0,0,0-.005.267.337.337,0,0,0,.436.175c.072-.033,1.843-1.773,1.9-1.87a.366.366,0,0,0-.005-.347c-.07-.105-1.826-1.83-1.9-1.863A.313.313,0,0,0,7.605-379.846Z"
                          transform="translate(72.439 1067.855)"
                          fill="#96a0b5"
                        />
                        <g id="Group_53623" data-name="Group 53623" transform="translate(85.939 688.979)">
                          <path
                            id="Path_98990"
                            data-name="Path 98990"
                            d="M8.063-379.206l-.145.121-.028.052a.18.18,0,0,0,0,.165c.013.03-.027-.025.308.309l.468.408-2.74.008-.208.008-.063.04a.439.439,0,0,0-.109.107.253.253,0,0,0-.045.179.253.253,0,0,0,.045.179.439.439,0,0,0,.109.107l.063.04.208.008,2.74.008-.328.428c-.336.334-.262.26-.275.29a.455.455,0,0,0-.005.267.337.337,0,0,0,.436.175c.072-.033,1.217-1.236,1.277-1.332a.366.366,0,0,0-.005-.347c-.07-.105-1.369-1.19-1.441-1.223A.313.313,0,0,0,8.063-379.206Z"
                            transform="translate(-5.5 379.236)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_98991"
                            data-name="Path 98991"
                            d="M7.249-379.206l.145.121.028.052a.18.18,0,0,1,0,.165c-.013.03.027-.025-.308.309l-.468.408,2.74.008.208.008.063.04a.439.439,0,0,1,.109.107.253.253,0,0,1,.045.179.253.253,0,0,1-.045.179.439.439,0,0,1-.109.107l-.063.04-.208.008-2.74.008.328.428c.336.334.262.26.275.29a.455.455,0,0,1,.005.267.337.337,0,0,1-.436.175c-.072-.033-1.217-1.236-1.277-1.332a.366.366,0,0,1,.005-.347c.07-.105,1.369-1.19,1.441-1.223A.313.313,0,0,1,7.249-379.206Z"
                            transform="translate(-5.5 379.236)"
                            fill="#96a0b5"
                          />
                        </g>
                        <g id="Group_53624" data-name="Group 53624" transform="translate(94.939 688.979)">
                          <path
                            id="Path_98990-2"
                            data-name="Path 98990"
                            d="M8.063-379.206l-.145.121-.028.052a.18.18,0,0,0,0,.165c.013.03-.027-.025.308.309l.468.408-2.74.008-.208.008-.063.04a.439.439,0,0,0-.109.107.253.253,0,0,0-.045.179.253.253,0,0,0,.045.179.439.439,0,0,0,.109.107l.063.04.208.008,2.74.008-.328.428c-.336.334-.262.26-.275.29a.455.455,0,0,0-.005.267.337.337,0,0,0,.436.175c.072-.033,1.217-1.236,1.277-1.332a.366.366,0,0,0-.005-.347c-.07-.105-1.369-1.19-1.441-1.223A.313.313,0,0,0,8.063-379.206Z"
                            transform="translate(-5.5 379.236)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_98991-2"
                            data-name="Path 98991"
                            d="M7.249-379.206l.145.121.028.052a.18.18,0,0,1,0,.165c-.013.03.027-.025-.308.309l-.468.408,2.74.008.208.008.063.04a.439.439,0,0,1,.109.107.253.253,0,0,1,.045.179.253.253,0,0,1-.045.179.439.439,0,0,1-.109.107l-.063.04-.208.008-2.74.008.328.428c.336.334.262.26.275.29a.455.455,0,0,1,.005.267.337.337,0,0,1-.436.175c-.072-.033-1.217-1.236-1.277-1.332a.366.366,0,0,1,.005-.347c.07-.105,1.369-1.19,1.441-1.223A.313.313,0,0,1,7.249-379.206Z"
                            transform="translate(-5.5 379.236)"
                            fill="#96a0b5"
                          />
                        </g>
                        <g id="Group_53625" data-name="Group 53625" transform="translate(103.528 688.979)">
                          <path
                            id="Path_98990-3"
                            data-name="Path 98990"
                            d="M8.063-379.206l-.145.121-.028.052a.18.18,0,0,0,0,.165c.013.03-.027-.025.308.309l.468.408-2.74.008-.208.008-.063.04a.439.439,0,0,0-.109.107.253.253,0,0,0-.045.179.253.253,0,0,0,.045.179.439.439,0,0,0,.109.107l.063.04.208.008,2.74.008-.328.428c-.336.334-.262.26-.275.29a.455.455,0,0,0-.005.267.337.337,0,0,0,.436.175c.072-.033,1.217-1.236,1.277-1.332a.366.366,0,0,0-.005-.347c-.07-.105-1.369-1.19-1.441-1.223A.313.313,0,0,0,8.063-379.206Z"
                            transform="translate(-5.5 379.236)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_98991-3"
                            data-name="Path 98991"
                            d="M7.249-379.206l.145.121.028.052a.18.18,0,0,1,0,.165c-.013.03.027-.025-.308.309l-.468.408,2.74.008.208.008.063.04a.439.439,0,0,1,.109.107.253.253,0,0,1,.045.179.253.253,0,0,1-.045.179.439.439,0,0,1-.109.107l-.063.04-.208.008-2.74.008.328.428c.336.334.262.26.275.29a.455.455,0,0,1,.005.267.337.337,0,0,1-.436.175c-.072-.033-1.217-1.236-1.277-1.332a.366.366,0,0,1,.005-.347c.07-.105,1.369-1.19,1.441-1.223A.313.313,0,0,1,7.249-379.206Z"
                            transform="translate(-5.5 379.236)"
                            fill="#96a0b5"
                          />
                        </g>
                        <g id="Group_53626" data-name="Group 53626" transform="translate(112.219 688.979)">
                          <path
                            id="Path_98990-4"
                            data-name="Path 98990"
                            d="M8.063-379.206l-.145.121-.028.052a.18.18,0,0,0,0,.165c.013.03-.027-.025.308.309l.468.408-2.74.008-.208.008-.063.04a.439.439,0,0,0-.109.107.253.253,0,0,0-.045.179.253.253,0,0,0,.045.179.439.439,0,0,0,.109.107l.063.04.208.008,2.74.008-.328.428c-.336.334-.262.26-.275.29a.455.455,0,0,0-.005.267.337.337,0,0,0,.436.175c.072-.033,1.217-1.236,1.277-1.332a.366.366,0,0,0-.005-.347c-.07-.105-1.369-1.19-1.441-1.223A.313.313,0,0,0,8.063-379.206Z"
                            transform="translate(-5.5 379.236)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_98991-4"
                            data-name="Path 98991"
                            d="M7.249-379.206l.145.121.028.052a.18.18,0,0,1,0,.165c-.013.03.027-.025-.308.309l-.468.408,2.74.008.208.008.063.04a.439.439,0,0,1,.109.107.253.253,0,0,1,.045.179.253.253,0,0,1-.045.179.439.439,0,0,1-.109.107l-.063.04-.208.008-2.74.008.328.428c.336.334.262.26.275.29a.455.455,0,0,1,.005.267.337.337,0,0,1-.436.175c-.072-.033-1.217-1.236-1.277-1.332a.366.366,0,0,1,.005-.347c.07-.105,1.369-1.19,1.441-1.223A.313.313,0,0,1,7.249-379.206Z"
                            transform="translate(-5.5 379.236)"
                            fill="#96a0b5"
                          />
                        </g>
                        <g id="Group_53627" data-name="Group 53627" transform="translate(120.994 688.979)">
                          <path
                            id="Path_98990-5"
                            data-name="Path 98990"
                            d="M8.063-379.206l-.145.121-.028.052a.18.18,0,0,0,0,.165c.013.03-.027-.025.308.309l.468.408-2.74.008-.208.008-.063.04a.439.439,0,0,0-.109.107.253.253,0,0,0-.045.179.253.253,0,0,0,.045.179.439.439,0,0,0,.109.107l.063.04.208.008,2.74.008-.328.428c-.336.334-.262.26-.275.29a.455.455,0,0,0-.005.267.337.337,0,0,0,.436.175c.072-.033,1.217-1.236,1.277-1.332a.366.366,0,0,0-.005-.347c-.07-.105-1.369-1.19-1.441-1.223A.313.313,0,0,0,8.063-379.206Z"
                            transform="translate(-5.5 379.236)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_98991-5"
                            data-name="Path 98991"
                            d="M7.249-379.206l.145.121.028.052a.18.18,0,0,1,0,.165c-.013.03.027-.025-.308.309l-.468.408,2.74.008.208.008.063.04a.439.439,0,0,1,.109.107.253.253,0,0,1,.045.179.253.253,0,0,1-.045.179.439.439,0,0,1-.109.107l-.063.04-.208.008-2.74.008.328.428c.336.334.262.26.275.29a.455.455,0,0,1,.005.267.337.337,0,0,1-.436.175c-.072-.033-1.217-1.236-1.277-1.332a.366.366,0,0,1,.005-.347c.07-.105,1.369-1.19,1.441-1.223A.313.313,0,0,1,7.249-379.206Z"
                            transform="translate(-5.5 379.236)"
                            fill="#96a0b5"
                          />
                        </g>
                        <g id="Group_53628" data-name="Group 53628" transform="translate(129.994 688.979)">
                          <path
                            id="Path_98990-6"
                            data-name="Path 98990"
                            d="M8.063-379.206l-.145.121-.028.052a.18.18,0,0,0,0,.165c.013.03-.027-.025.308.309l.468.408-2.74.008-.208.008-.063.04a.439.439,0,0,0-.109.107.253.253,0,0,0-.045.179.253.253,0,0,0,.045.179.439.439,0,0,0,.109.107l.063.04.208.008,2.74.008-.328.428c-.336.334-.262.26-.275.29a.455.455,0,0,0-.005.267.337.337,0,0,0,.436.175c.072-.033,1.217-1.236,1.277-1.332a.366.366,0,0,0-.005-.347c-.07-.105-1.369-1.19-1.441-1.223A.313.313,0,0,0,8.063-379.206Z"
                            transform="translate(-5.5 379.236)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_98991-6"
                            data-name="Path 98991"
                            d="M7.249-379.206l.145.121.028.052a.18.18,0,0,1,0,.165c-.013.03.027-.025-.308.309l-.468.408,2.74.008.208.008.063.04a.439.439,0,0,1,.109.107.253.253,0,0,1,.045.179.253.253,0,0,1-.045.179.439.439,0,0,1-.109.107l-.063.04-.208.008-2.74.008.328.428c.336.334.262.26.275.29a.455.455,0,0,1,.005.267.337.337,0,0,1-.436.175c-.072-.033-1.217-1.236-1.277-1.332a.366.366,0,0,1,.005-.347c.07-.105,1.369-1.19,1.441-1.223A.313.313,0,0,1,7.249-379.206Z"
                            transform="translate(-5.5 379.236)"
                            fill="#96a0b5"
                          />
                        </g>
                        <path
                          id="Path_98992"
                          data-name="Path 98992"
                          d="M7.707-379.846a.351.351,0,0,1,.174.174.455.455,0,0,1-.005.267c-.013.03-.291.321-.626.654l-.6.6,2.74.008.208.008.063.04a.439.439,0,0,1,.109.107.253.253,0,0,1,.045.179.253.253,0,0,1-.045.179.439.439,0,0,1-.109.107l-.063.04-.208.008-2.74.008.6.6c.336.334.613.624.626.654a.455.455,0,0,1,.005.267.337.337,0,0,1-.436.175c-.072-.033-1.843-1.773-1.9-1.87a.366.366,0,0,1,.005-.347c.07-.105,1.826-1.83,1.9-1.863A.313.313,0,0,1,7.707-379.846Z"
                          transform="translate(132.834 1067.855)"
                          fill="#96a0b5"
                        />
                        <g id="Group_53629" data-name="Group 53629" transform="translate(75 687.976)">
                          <rect
                            id="Rectangle_10006"
                            data-name="Rectangle 10006"
                            width="2"
                            height="8"
                            fill="#96a0b5"
                          />
                          <rect
                            id="Rectangle_10024"
                            data-name="Rectangle 10024"
                            width="2"
                            height="6"
                            transform="translate(2 4)"
                            fill="#96a0b5"
                          />
                        </g>
                        <g id="Group_53630" data-name="Group 53630" transform="translate(141 687.976)">
                          <rect
                            id="Rectangle_10006-2"
                            data-name="Rectangle 10006"
                            width="2"
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
                    </svg>`,
  },
  [IconPrefix.ZIGZAG_CENTER_OPENING_SLIDING]: {
    [zigzagDesignIconKeys.ZIGZAG_TWO_TRACK_X_X_X_PANEL_LEFT]: `<svg
    *ngIf="!viewHandleFromOutside"
    xmlns="http://www.w3.org/2000/svg"
    width="71"
    height="51"
    viewBox="0 0 71 51"
  >
    <g id="Group_53594" data-name="Group 53594" transform="translate(-351.5 -50.5)">
      <path
        id="path70"
        d="M137.36-912.4v-50h-70v50h70"
        transform="translate(284.64 1013.4)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="path70-2"
        data-name="path70"
        d="M90.693-912.4v-50H67.36v50H90.693"
        transform="translate(284.64 1013.4)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="path70-3"
        data-name="path70"
        d="M90.693-912.4v-50H67.36v50H90.693"
        transform="translate(307.973 1013.4)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="path70-4"
        data-name="path70"
        d="M90.693-912.4v-50H67.36v50H90.693"
        transform="translate(331.307 1013.4)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="path70-5"
        data-name="path70"
        d="M84.753-918.436V-962.4H67.36v43.964H84.753"
        transform="translate(287.622 1016.41)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="path70-6"
        data-name="path70"
        d="M90.693-918.436V-962.4H67.36v43.964H90.693"
        transform="translate(307.973 1016.418)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="path70-7"
        data-name="path70"
        d="M84.784-918.436V-962.4H67.36v43.964H84.784"
        transform="translate(334.305 1016.41)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="Path_98973"
        data-name="Path 98973"
        d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-3.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,3.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
        transform="translate(357.614 453.376)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
      <path
        id="Path_98974"
        data-name="Path 98974"
        d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-3.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,3.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
        transform="translate(380.614 453.376)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
      <path
        id="Path_98975"
        data-name="Path 98975"
        d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-3.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,3.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
        transform="translate(416.72 -301.479) rotate(180)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
      <g id="Group_53591" data-name="Group 53591" transform="translate(-121.836 -131.439)">
        <rect
          id="Rectangle_10035"
          data-name="Rectangle 10035"
          width="3"
          height="8"
          transform="translate(540.836 202.439)"
          fill="#96a0b5"
        />
        <rect
          id="Rectangle_10036"
          data-name="Rectangle 10036"
          width="2"
          height="6"
          transform="translate(538.836 206.439)"
          fill="#96a0b5"
        />
      </g>
      <g id="Group_53592" data-name="Group 53592" transform="translate(-76.817 -131.439)">
        <rect
          id="Rectangle_10006"
          data-name="Rectangle 10006"
          width="3"
          height="8"
          transform="translate(429.151 202.439)"
          fill="#96a0b5"
        />
        <rect
          id="Rectangle_10024"
          data-name="Rectangle 10024"
          width="2"
          height="6"
          transform="translate(432.151 206.439)"
          fill="#96a0b5"
        />
      </g>
      <g id="Group_53593" data-name="Group 53593" transform="translate(-56.817 -131.439)">
        <rect
          id="Rectangle_10006-2"
          data-name="Rectangle 10006"
          width="3"
          height="8"
          transform="translate(429.151 202.439)"
          fill="#96a0b5"
        />
        <rect
          id="Rectangle_10024-2"
          data-name="Rectangle 10024"
          width="2"
          height="6"
          transform="translate(432.151 206.439)"
          fill="#96a0b5"
        />
      </g>
    </g>
  </svg>`,
    [zigzagDesignIconKeys.ZIGZAG_TWO_TRACK_X_X_X_PANEL_RIGHT]: `<svg
  *ngIf="!viewHandleFromOutside"
  xmlns="http://www.w3.org/2000/svg"
  width="71"
  height="51"
  viewBox="0 0 71 51"
>
  <g id="Group_53595" data-name="Group 53595" transform="translate(-351.5 -50.5)">
    <path
      id="path70"
      d="M137.36-912.4v-50h-70v50h70"
      transform="translate(284.64 1013.4)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-2"
      data-name="path70"
      d="M90.693-912.4v-50H67.36v50H90.693"
      transform="translate(284.64 1013.4)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-3"
      data-name="path70"
      d="M90.693-912.4v-50H67.36v50H90.693"
      transform="translate(307.973 1013.4)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-4"
      data-name="path70"
      d="M90.693-912.4v-50H67.36v50H90.693"
      transform="translate(331.307 1013.4)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-5"
      data-name="path70"
      d="M84.753-918.436V-962.4H67.36v43.964H84.753"
      transform="translate(287.622 1016.41)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-6"
      data-name="path70"
      d="M90.693-918.436V-962.4H67.36v43.964H90.693"
      transform="translate(307.973 1016.418)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-7"
      data-name="path70"
      d="M84.784-918.436V-962.4H67.36v43.964H84.784"
      transform="translate(334.305 1016.41)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="Path_98973"
      data-name="Path 98973"
      d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-3.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,3.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
      transform="translate(357.614 453.376)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
    <path
      id="Path_98974"
      data-name="Path 98974"
      d="M4.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,3.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-3.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,4.113-379.841Z"
      transform="translate(380.614 453.376)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
    <path
      id="Path_98975"
      data-name="Path 98975"
      d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-3.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,3.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
      transform="translate(416.72 -301.479) rotate(180)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
    <g id="Group_53591" data-name="Group 53591" transform="translate(-121.836 -131.439)">
      <rect
        id="Rectangle_10035"
        data-name="Rectangle 10035"
        width="3"
        height="8"
        transform="translate(540.836 202.439)"
        fill="#96a0b5"
      />
      <rect
        id="Rectangle_10036"
        data-name="Rectangle 10036"
        width="2"
        height="6"
        transform="translate(538.836 206.439)"
        fill="#96a0b5"
      />
    </g>
    <g id="Group_53592" data-name="Group 53592" transform="translate(-76.817 -131.439)">
      <rect
        id="Rectangle_10006"
        data-name="Rectangle 10006"
        width="3"
        height="8"
        transform="translate(429.151 202.439)"
        fill="#96a0b5"
      />
      <rect
        id="Rectangle_10024"
        data-name="Rectangle 10024"
        width="2"
        height="6"
        transform="translate(432.151 206.439)"
        fill="#96a0b5"
      />
    </g>
    <g id="Group_53593" data-name="Group 53593" transform="translate(396.333 71)">
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
</svg>`,
    [zigzagDesignIconKeys.ZIGZAG_TWO_TRACK_FOUR_PANEL_MEETING]: `<svg
*ngIf="!viewHandleFromOutside"
xmlns="http://www.w3.org/2000/svg"
width="70.501"
height="51.001"
viewBox="0 0 70.501 51.001"
>
<g id="Group_53601" data-name="Group 53601" transform="translate(-367.5 -189.5)">
  <path
    id="path70"
    d="M84.36-912.4v-50h-17v50h17"
    transform="translate(300.64 1152.4)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-2"
    data-name="path70"
    d="M81.36-918.4v-44h-14v44h14"
    transform="translate(303.64 1155.393)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-3"
    data-name="path70"
    d="M85.36-912.4v-50h-18v50h18"
    transform="translate(352.141 1152.4)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="Path_98973"
    data-name="Path 98973"
    d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-2.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,2.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
    transform="translate(372.172 592.376)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.2"
  />
  <g id="Group_53592" data-name="Group 53592" transform="translate(368.5 210)">
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
    id="path70-4"
    data-name="path70"
    d="M84.36-912.4v-50h-17v50h17"
    transform="translate(335.313 1152.4)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-5"
    data-name="path70"
    d="M85.36-912.4v-50h-18v50h18"
    transform="translate(317.478 1152.4)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-6"
    data-name="path70"
    d="M79.393-918.4v-44H67.36v44H79.393"
    transform="translate(355.099 1155.393)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-7"
    data-name="path70"
    d="M84.195-918.4v-44H67.36v44H84.195"
    transform="translate(335.478 1155.393)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-8"
    data-name="path70"
    d="M79.393-918.4v-44H67.36v44H79.393"
    transform="translate(320.428 1155.393)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="Path_98976"
    data-name="Path 98976"
    d="M5.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,2.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-2.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,5.113-379.841Z"
    transform="translate(386.998 592.376)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.2"
  />
  <path
    id="Path_98977"
    data-name="Path 98977"
    d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-2.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,2.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
    transform="translate(404.854 592.376)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.2"
  />
  <g id="Group_53598" data-name="Group 53598" transform="translate(399.26 210)">
    <rect
      id="Rectangle_10006-2"
      data-name="Rectangle 10006"
      width="3"
      height="8"
      fill="#96a0b5"
    />
    <rect
      id="Rectangle_10024-2"
      data-name="Rectangle 10024"
      width="2"
      height="6"
      transform="translate(3 4)"
      fill="#96a0b5"
    />
  </g>
  <g id="Group_53599" data-name="Group 53599" transform="translate(433 210)">
    <rect
      id="Rectangle_10006-3"
      data-name="Rectangle 10006"
      width="3"
      height="8"
      transform="translate(2)"
      fill="#96a0b5"
    />
    <rect
      id="Rectangle_10024-3"
      data-name="Rectangle 10024"
      width="2"
      height="6"
      transform="translate(0 4)"
      fill="#96a0b5"
    />
  </g>
  <path
    id="Path_98978"
    data-name="Path 98978"
    d="M5.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,2.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-2.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,5.113-379.841Z"
    transform="translate(421.672 592.376)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.2"
  />
</g>
</svg>`,
    [zigzagDesignIconKeys.ZIGZAG_THREE_TRACK_FIVE_PANEL_MEETING]: `<svg
*ngIf="!viewHandleFromOutside"
xmlns="http://www.w3.org/2000/svg"
width="70.595"
height="51"
viewBox="0 0 70.595 51"
>
<g id="Group_53613" data-name="Group 53613" transform="translate(-386.5 -384.501)">
  <path
    id="path70"
    d="M67.36-912.4v-50h69.6v50H67.36"
    transform="translate(319.64 1347.401)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-2"
    data-name="path70"
    d="M67.36-912.4v-50H83.208v50H67.36"
    transform="translate(346.437 1347.401)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-3"
    data-name="path70"
    d="M67.36-912.4v-50H80.967v50H67.36"
    transform="translate(362.18 1347.401)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-4"
    data-name="path70"
    d="M67.36-912.4v-50H80.905v50H67.36"
    transform="translate(375.69 1347.401)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-5"
    data-name="path70"
    d="M67.36-918.429V-962.4H77.949v43.971H67.36"
    transform="translate(375.69 1350.399)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-6"
    data-name="path70"
    d="M67.36-912.4v-50h13.3v50H67.36"
    transform="translate(319.64 1347.401)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-7"
    data-name="path70"
    d="M67.36-912.4v-50h13.7v50H67.36"
    transform="translate(332.839 1347.401)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-8"
    data-name="path70"
    d="M67.36-918.429V-962.4H77.967v43.971H67.36"
    transform="translate(362.195 1350.399)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-9"
    data-name="path70"
    d="M67.36-918.429V-962.4h10.3v43.971H67.36"
    transform="translate(322.64 1350.399)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-10"
    data-name="path70"
    d="M67.36-918.429V-962.4H78.032v43.971H67.36"
    transform="translate(335.854 1350.399)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-11"
    data-name="path70"
    d="M67.36-918.429V-962.4h9.887v43.971H67.36"
    transform="translate(349.448 1350.399)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="Path_98983"
    data-name="Path 98983"
    d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-1.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,1.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
    transform="translate(388.095 788.376)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.2"
  />
  <g id="Group_53609" data-name="Group 53609" transform="translate(404.992 409)">
    <path
      id="Path_78161"
      data-name="Path 78161"
      d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-1.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,1.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
      transform="translate(-3.5 379.928)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
    <path
      id="Path_78162"
      data-name="Path 78162"
      d="M6.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,1.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-1.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,6.113-379.841Z"
      transform="translate(-3.5 379.876)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
  </g>
  <path
    id="Path_98984"
    data-name="Path 98984"
    d="M6.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,1.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-1.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,6.113-379.841Z"
    transform="translate(414.891 788.376)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.2"
  />
  <path
    id="Path_98985"
    data-name="Path 98985"
    d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-1.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047,1.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
    transform="translate(427.808 788.376)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.2"
  />
  <path
    id="Path_98986"
    data-name="Path 98986"
    d="M6.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,1.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-1.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,6.113-379.841Z"
    transform="translate(441.691 788.376)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.2"
  />
  <g id="Group_53610" data-name="Group 53610" transform="translate(386.595 409)">
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
  <g id="Group_53611" data-name="Group 53611" transform="translate(426.348 409)">
    <rect
      id="Rectangle_10006-2"
      data-name="Rectangle 10006"
      width="3"
      height="8"
      fill="#96a0b5"
    />
    <rect
      id="Rectangle_10024-2"
      data-name="Rectangle 10024"
      width="2"
      height="6"
      transform="translate(3 4)"
      fill="#96a0b5"
    />
  </g>
  <g id="Group_53612" data-name="Group 53612" transform="translate(451.191 409)">
    <rect
      id="Rectangle_10006-3"
      data-name="Rectangle 10006"
      width="3"
      height="8"
      transform="translate(2)"
      fill="#96a0b5"
    />
    <rect
      id="Rectangle_10024-3"
      data-name="Rectangle 10024"
      width="2"
      height="6"
      transform="translate(0 4)"
      fill="#96a0b5"
    />
  </g>
</g>
</svg>`,
    [zigzagDesignIconKeys.ZIGZAG_TWO_TRACK_SIX_PANEL_MEETING]: `<svg
*ngIf="!viewHandleFromOutside"
xmlns="http://www.w3.org/2000/svg"
width="70.787"
height="51"
viewBox="0 0 70.787 51"
>
<g id="Group_53608" data-name="Group 53608" transform="translate(-402.5 -261.501)">
  <path
    id="path70"
    d="M67.36-912.4v-50h69.787v50H67.36"
    transform="translate(335.64 1224.401)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-2"
    data-name="path70"
    d="M67.36-912.4v-50H79.693v50H67.36"
    transform="translate(335.64 1224.401)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-3"
    data-name="path70"
    d="M67.36-912.4v-50H79.693v50H67.36"
    transform="translate(358.887 1224.401)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-4"
    data-name="path70"
    d="M67.36-912.4v-50H79.693v50H67.36"
    transform="translate(382.135 1224.401)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-5"
    data-name="path70"
    d="M67.36-912.4v-50h11v50h-11"
    transform="translate(394.427 1224.401)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-6"
    data-name="path70"
    d="M67.36-912.4v-50h11v50h-11"
    transform="translate(347.929 1224.401)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-7"
    data-name="path70"
    d="M67.36-912.4v-50h11v50h-11"
    transform="translate(371.178 1224.401)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-8"
    data-name="path70"
    d="M67.36-918.378V-962.4h8.366v44.022H67.36"
    transform="translate(337.644 1227.414)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-9"
    data-name="path70"
    d="M67.36-918.378V-962.4h8.333v44.022H67.36"
    transform="translate(360.933 1227.414)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-10"
    data-name="path70"
    d="M67.36-918.378V-962.4h8.37v44.022H67.36"
    transform="translate(384.186 1227.414)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-11"
    data-name="path70"
    d="M67.36-918.378V-962.4h8.953v44.022H67.36"
    transform="translate(394.427 1227.414)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-12"
    data-name="path70"
    d="M67.36-918.378V-962.4h11v44.022h-11"
    transform="translate(347.929 1227.414)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="path70-13"
    data-name="path70"
    d="M67.36-918.378V-962.4h11v44.022h-11"
    transform="translate(371.178 1227.414)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="Path_98979"
    data-name="Path 98979"
    d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
    transform="translate(401.634 664.376)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.2"
  />
  <path
    id="Path_98980"
    data-name="Path 98980"
    d="M7.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,7.113-379.841Z"
    transform="translate(424.547 664.376)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.2"
  />
  <g id="Group_53603" data-name="Group 53603" transform="translate(434.111 285)">
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
  <g id="Group_53604" data-name="Group 53604" transform="translate(403 285)">
    <rect
      id="Rectangle_10006-2"
      data-name="Rectangle 10006"
      width="3"
      height="8"
      fill="#96a0b5"
    />
    <rect
      id="Rectangle_10024-2"
      data-name="Rectangle 10024"
      width="2"
      height="6"
      transform="translate(3 4)"
      fill="#96a0b5"
    />
  </g>
  <g id="Group_53605" data-name="Group 53605" transform="translate(468 285)">
    <rect
      id="Rectangle_10006-3"
      data-name="Rectangle 10006"
      width="3"
      height="8"
      transform="translate(2)"
      fill="#96a0b5"
    />
    <rect
      id="Rectangle_10024-3"
      data-name="Rectangle 10024"
      width="2"
      height="6"
      transform="translate(0 4)"
      fill="#96a0b5"
    />
  </g>
  <path
    id="Path_98981"
    data-name="Path 98981"
    d="M7.993-379.841a.415.415,0,0,0-.206.206.539.539,0,0,0,.006.316c.016.036.344.38.741.775l.714.712L5-377.822l-.247.01-.075.047a.52.52,0,0,0-.129.127.3.3,0,0,0-.053.212.3.3,0,0,0,.053.212.521.521,0,0,0,.129.127l.075.047.247.01,4.245.01-.714.712c-.4.4-.726.739-.741.775a.539.539,0,0,0-.006.316.4.4,0,0,0,.516.208c.085-.04,2.183-2.1,2.254-2.214a.433.433,0,0,0-.006-.411c-.083-.125-2.163-2.167-2.248-2.206A.37.37,0,0,0,7.993-379.841Z"
    transform="translate(436.507 664.376)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.2"
  />
  <path
    id="Path_98982"
    data-name="Path 98982"
    d="M7.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,7.113-379.841Z"
    transform="translate(458.421 663.876)"
    fill="#96a0b5"
  />
  <g id="Group_53606" data-name="Group 53606" transform="translate(452.571 285)">
    <path
      id="Path_78161"
      data-name="Path 78161"
      d="M7.607-379.657a.362.362,0,0,0-.179.179.47.47,0,0,0,.005.276,3.049,3.049,0,0,0,.457.511l.622.621-3.7.009-1.087.009-.066.041a.453.453,0,0,0-.112.11.262.262,0,0,0-.047.184.261.261,0,0,0,.047.184.454.454,0,0,0,.112.11l.066.041,1.087.009,3.7.009-.622.621c-.346.345-.264.281-.278.312a.47.47,0,0,0-.005.276.348.348,0,0,0,.45.181c.074-.034,1.535-1.467,1.6-1.567a.378.378,0,0,0-.005-.359c-.072-.109-1.7-1.725-1.771-1.759A.323.323,0,0,0,7.607-379.657Z"
      transform="translate(-3.5 379.687)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
    <path
      id="Path_78162"
      data-name="Path 78162"
      d="M5.547-379.519a.362.362,0,0,1,.179.179.47.47,0,0,1-.005.276c-.014.031-.068.046-.415.391l-.622.621,3.7.009,1.087.009.066.041a.453.453,0,0,1,.112.11.261.261,0,0,1,.047.184.261.261,0,0,1-.047.184.455.455,0,0,1-.112.11l-.066.041-1.087.009-3.7.009.391.475c.346.345.633.645.646.676a.47.47,0,0,1,.005.276.348.348,0,0,1-.45.181c-.074-.034-1.671-1.685-1.733-1.785a.378.378,0,0,1,.005-.359c.072-.109,1.654-1.6,1.728-1.639A.323.323,0,0,1,5.547-379.519Z"
      transform="translate(-3.5 379.67)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
  </g>
  <g id="Group_53607" data-name="Group 53607" transform="translate(417.688 285)">
    <path
      id="Path_78161-2"
      data-name="Path 78161"
      d="M7.607-379.657a.362.362,0,0,0-.179.179.47.47,0,0,0,.005.276,3.049,3.049,0,0,0,.457.511l.622.621-3.7.009-1.087.009-.066.041a.453.453,0,0,0-.112.11.262.262,0,0,0-.047.184.261.261,0,0,0,.047.184.454.454,0,0,0,.112.11l.066.041,1.087.009,3.7.009-.622.621c-.346.345-.264.281-.278.312a.47.47,0,0,0-.005.276.348.348,0,0,0,.45.181c.074-.034,1.535-1.467,1.6-1.567a.378.378,0,0,0-.005-.359c-.072-.109-1.7-1.725-1.771-1.759A.323.323,0,0,0,7.607-379.657Z"
      transform="translate(-3.5 379.687)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
    <path
      id="Path_78162-2"
      data-name="Path 78162"
      d="M5.547-379.519a.362.362,0,0,1,.179.179.47.47,0,0,1-.005.276c-.014.031-.068.046-.415.391l-.622.621,3.7.009,1.087.009.066.041a.453.453,0,0,1,.112.11.261.261,0,0,1,.047.184.261.261,0,0,1-.047.184.455.455,0,0,1-.112.11l-.066.041-1.087.009-3.7.009.391.475c.346.345.633.645.646.676a.47.47,0,0,1,.005.276.348.348,0,0,1-.45.181c-.074-.034-1.671-1.685-1.733-1.785a.378.378,0,0,1,.005-.359c.072-.109,1.654-1.6,1.728-1.639A.323.323,0,0,1,5.547-379.519Z"
      transform="translate(-3.5 379.67)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
  </g>
</g>
</svg>`,
    [zigzagDesignIconKeys.ZIGZAG_TWO_TRACK_EIGHT_PANEL_MEETING]: `<svg
*ngIf="!viewHandleFromOutside"
xmlns="http://www.w3.org/2000/svg"
width="71"
height="51"
viewBox="0 0 71 51"
>
<g id="Group_53641" data-name="Group 53641" transform="translate(-398.498 -326.5)">
  <g id="Group_53639" data-name="Group 53639" transform="translate(433.068 351)">
    <rect
      id="Rectangle_10006"
      data-name="Rectangle 10006"
      width="2"
      height="8"
      fill="#96a0b5"
    />
    <rect
      id="Rectangle_10024"
      data-name="Rectangle 10024"
      width="2"
      height="6"
      transform="translate(1.932 4)"
      fill="#96a0b5"
    />
  </g>
  <g id="Group_53638" data-name="Group 53638" transform="translate(323.998 -337.959)">
    <path
      id="path70"
      d="M67.36-912.442V-962.4h70v49.958h-70"
      transform="translate(7.64 1627.401)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-2"
      data-name="path70"
      d="M67.36-912.442V-962.4h8.25v49.958H67.36"
      transform="translate(7.64 1627.401)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-3"
      data-name="path70"
      d="M67.36-912.442V-962.4h8.15v49.958H67.36"
      transform="translate(25.39 1627.401)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-4"
      data-name="path70"
      d="M67.36-912.442V-962.4h8.15v49.958H67.36"
      transform="translate(42.94 1627.401)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-5"
      data-name="path70"
      d="M67.36-912.442V-962.4h8.15v49.958H67.36"
      transform="translate(60.49 1627.359)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-6"
      data-name="path70"
      d="M67.36-912.442V-962.4h9.5v49.958h-9.5"
      transform="translate(15.89 1627.38)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-7"
      data-name="path70"
      d="M67.36-912.442V-962.4h9.4v49.958h-9.4"
      transform="translate(33.54 1627.401)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-8"
      data-name="path70"
      d="M67.36-912.442V-962.4h9.4v49.958h-9.4"
      transform="translate(51.09 1627.401)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-9"
      data-name="path70"
      d="M67.36-912.442V-962.4h9v49.958h-9"
      transform="translate(68.64 1627.401)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-10"
      data-name="path70"
      d="M67.36-918.394V-962.4h6.31v44.006H67.36"
      transform="translate(9.58 1630.356)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-11"
      data-name="path70"
      d="M67.36-918.394V-962.4h8.15v44.006H67.36"
      transform="translate(25.39 1630.356)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-12"
      data-name="path70"
      d="M67.36-918.394V-962.4h8.15v44.006H67.36"
      transform="translate(42.94 1630.356)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-13"
      data-name="path70"
      d="M67.36-918.394V-962.4h8.15v44.006H67.36"
      transform="translate(60.49 1630.315)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-14"
      data-name="path70"
      d="M67.36-918.394V-962.4h6.023v44.006H67.36"
      transform="translate(17.693 1630.335)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-15"
      data-name="path70"
      d="M67.36-918.394V-962.4h6.234v44.006H67.36"
      transform="translate(35.207 1630.356)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-16"
      data-name="path70"
      d="M67.36-918.394V-962.4h6.151v44.006H67.36"
      transform="translate(52.665 1630.356)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path70-17"
      data-name="path70"
      d="M67.36-918.394V-962.4h5.677v44.006H67.36"
      transform="translate(70.291 1630.356)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="Path_98989"
      data-name="Path 98989"
      d="M7.605-379.846a.351.351,0,0,0-.174.174.455.455,0,0,0,.005.267c.013.03.291.321.626.654l.6.6-2.74.008-.208.008-.063.04a.439.439,0,0,0-.109.107.253.253,0,0,0-.045.179.253.253,0,0,0,.045.179.439.439,0,0,0,.109.107l.063.04.208.008,2.74.008-.6.6c-.336.334-.613.624-.626.654a.455.455,0,0,0-.005.267.337.337,0,0,0,.436.175c.072-.033,1.843-1.773,1.9-1.87a.366.366,0,0,0-.005-.347c-.07-.105-1.826-1.83-1.9-1.863A.313.313,0,0,0,7.605-379.846Z"
      transform="translate(72.439 1067.855)"
      fill="#96a0b5"
    />
    <g id="Group_53623" data-name="Group 53623" transform="translate(85.939 688.979)">
      <path
        id="Path_98990"
        data-name="Path 98990"
        d="M8.063-379.206l-.145.121-.028.052a.18.18,0,0,0,0,.165c.013.03-.027-.025.308.309l.468.408-2.74.008-.208.008-.063.04a.439.439,0,0,0-.109.107.253.253,0,0,0-.045.179.253.253,0,0,0,.045.179.439.439,0,0,0,.109.107l.063.04.208.008,2.74.008-.328.428c-.336.334-.262.26-.275.29a.455.455,0,0,0-.005.267.337.337,0,0,0,.436.175c.072-.033,1.217-1.236,1.277-1.332a.366.366,0,0,0-.005-.347c-.07-.105-1.369-1.19-1.441-1.223A.313.313,0,0,0,8.063-379.206Z"
        transform="translate(-5.5 379.236)"
        fill="#96a0b5"
      />
      <path
        id="Path_98991"
        data-name="Path 98991"
        d="M7.249-379.206l.145.121.028.052a.18.18,0,0,1,0,.165c-.013.03.027-.025-.308.309l-.468.408,2.74.008.208.008.063.04a.439.439,0,0,1,.109.107.253.253,0,0,1,.045.179.253.253,0,0,1-.045.179.439.439,0,0,1-.109.107l-.063.04-.208.008-2.74.008.328.428c.336.334.262.26.275.29a.455.455,0,0,1,.005.267.337.337,0,0,1-.436.175c-.072-.033-1.217-1.236-1.277-1.332a.366.366,0,0,1,.005-.347c.07-.105,1.369-1.19,1.441-1.223A.313.313,0,0,1,7.249-379.206Z"
        transform="translate(-5.5 379.236)"
        fill="#96a0b5"
      />
    </g>
    <g id="Group_53624" data-name="Group 53624" transform="translate(94.939 688.979)">
      <path
        id="Path_98990-2"
        data-name="Path 98990"
        d="M8.063-379.206l-.145.121-.028.052a.18.18,0,0,0,0,.165c.013.03-.027-.025.308.309l.468.408-2.74.008-.208.008-.063.04a.439.439,0,0,0-.109.107.253.253,0,0,0-.045.179.253.253,0,0,0,.045.179.439.439,0,0,0,.109.107l.063.04.208.008,2.74.008-.328.428c-.336.334-.262.26-.275.29a.455.455,0,0,0-.005.267.337.337,0,0,0,.436.175c.072-.033,1.217-1.236,1.277-1.332a.366.366,0,0,0-.005-.347c-.07-.105-1.369-1.19-1.441-1.223A.313.313,0,0,0,8.063-379.206Z"
        transform="translate(-5.5 379.236)"
        fill="#96a0b5"
      />
      <path
        id="Path_98991-2"
        data-name="Path 98991"
        d="M7.249-379.206l.145.121.028.052a.18.18,0,0,1,0,.165c-.013.03.027-.025-.308.309l-.468.408,2.74.008.208.008.063.04a.439.439,0,0,1,.109.107.253.253,0,0,1,.045.179.253.253,0,0,1-.045.179.439.439,0,0,1-.109.107l-.063.04-.208.008-2.74.008.328.428c.336.334.262.26.275.29a.455.455,0,0,1,.005.267.337.337,0,0,1-.436.175c-.072-.033-1.217-1.236-1.277-1.332a.366.366,0,0,1,.005-.347c.07-.105,1.369-1.19,1.441-1.223A.313.313,0,0,1,7.249-379.206Z"
        transform="translate(-5.5 379.236)"
        fill="#96a0b5"
      />
    </g>
    <g id="Group_53625" data-name="Group 53625" transform="translate(103.528 688.979)">
      <path
        id="Path_98991-3"
        data-name="Path 98991"
        d="M7.249-379.206l.145.121.028.052a.18.18,0,0,1,0,.165c-.013.03.027-.025-.308.309l-.468.408,2.74.008.208.008.063.04a.439.439,0,0,1,.109.107.253.253,0,0,1,.045.179.253.253,0,0,1-.045.179.439.439,0,0,1-.109.107l-.063.04-.208.008-2.74.008.328.428c.336.334.262.26.275.29a.455.455,0,0,1,.005.267.337.337,0,0,1-.436.175c-.072-.033-1.217-1.236-1.277-1.332a.366.366,0,0,1,.005-.347c.07-.105,1.369-1.19,1.441-1.223A.313.313,0,0,1,7.249-379.206Z"
        transform="translate(-5.5 379.236)"
        fill="#96a0b5"
      />
    </g>
    <g id="Group_53626" data-name="Group 53626" transform="translate(112.219 688.979)">
      <path
        id="Path_98990-3"
        data-name="Path 98990"
        d="M8.063-379.206l-.145.121-.028.052a.18.18,0,0,0,0,.165c.013.03-.027-.025.308.309l.468.408-2.74.008-.208.008-.063.04a.439.439,0,0,0-.109.107.253.253,0,0,0-.045.179.253.253,0,0,0,.045.179.439.439,0,0,0,.109.107l.063.04.208.008,2.74.008-.328.428c-.336.334-.262.26-.275.29a.455.455,0,0,0-.005.267.337.337,0,0,0,.436.175c.072-.033,1.217-1.236,1.277-1.332a.366.366,0,0,0-.005-.347c-.07-.105-1.369-1.19-1.441-1.223A.313.313,0,0,0,8.063-379.206Z"
        transform="translate(-5.5 379.236)"
        fill="#96a0b5"
      />
    </g>
    <g id="Group_53627" data-name="Group 53627" transform="translate(120.994 688.979)">
      <path
        id="Path_98990-4"
        data-name="Path 98990"
        d="M8.063-379.206l-.145.121-.028.052a.18.18,0,0,0,0,.165c.013.03-.027-.025.308.309l.468.408-2.74.008-.208.008-.063.04a.439.439,0,0,0-.109.107.253.253,0,0,0-.045.179.253.253,0,0,0,.045.179.439.439,0,0,0,.109.107l.063.04.208.008,2.74.008-.328.428c-.336.334-.262.26-.275.29a.455.455,0,0,0-.005.267.337.337,0,0,0,.436.175c.072-.033,1.217-1.236,1.277-1.332a.366.366,0,0,0-.005-.347c-.07-.105-1.369-1.19-1.441-1.223A.313.313,0,0,0,8.063-379.206Z"
        transform="translate(-5.5 379.236)"
        fill="#96a0b5"
      />
      <path
        id="Path_98991-4"
        data-name="Path 98991"
        d="M7.249-379.206l.145.121.028.052a.18.18,0,0,1,0,.165c-.013.03.027-.025-.308.309l-.468.408,2.74.008.208.008.063.04a.439.439,0,0,1,.109.107.253.253,0,0,1,.045.179.253.253,0,0,1-.045.179.439.439,0,0,1-.109.107l-.063.04-.208.008-2.74.008.328.428c.336.334.262.26.275.29a.455.455,0,0,1,.005.267.337.337,0,0,1-.436.175c-.072-.033-1.217-1.236-1.277-1.332a.366.366,0,0,1,.005-.347c.07-.105,1.369-1.19,1.441-1.223A.313.313,0,0,1,7.249-379.206Z"
        transform="translate(-5.5 379.236)"
        fill="#96a0b5"
      />
    </g>
    <g id="Group_53628" data-name="Group 53628" transform="translate(129.994 688.979)">
      <path
        id="Path_98990-5"
        data-name="Path 98990"
        d="M8.063-379.206l-.145.121-.028.052a.18.18,0,0,0,0,.165c.013.03-.027-.025.308.309l.468.408-2.74.008-.208.008-.063.04a.439.439,0,0,0-.109.107.253.253,0,0,0-.045.179.253.253,0,0,0,.045.179.439.439,0,0,0,.109.107l.063.04.208.008,2.74.008-.328.428c-.336.334-.262.26-.275.29a.455.455,0,0,0-.005.267.337.337,0,0,0,.436.175c.072-.033,1.217-1.236,1.277-1.332a.366.366,0,0,0-.005-.347c-.07-.105-1.369-1.19-1.441-1.223A.313.313,0,0,0,8.063-379.206Z"
        transform="translate(-5.5 379.236)"
        fill="#96a0b5"
      />
      <path
        id="Path_98991-5"
        data-name="Path 98991"
        d="M7.249-379.206l.145.121.028.052a.18.18,0,0,1,0,.165c-.013.03.027-.025-.308.309l-.468.408,2.74.008.208.008.063.04a.439.439,0,0,1,.109.107.253.253,0,0,1,.045.179.253.253,0,0,1-.045.179.439.439,0,0,1-.109.107l-.063.04-.208.008-2.74.008.328.428c.336.334.262.26.275.29a.455.455,0,0,1,.005.267.337.337,0,0,1-.436.175c-.072-.033-1.217-1.236-1.277-1.332a.366.366,0,0,1,.005-.347c.07-.105,1.369-1.19,1.441-1.223A.313.313,0,0,1,7.249-379.206Z"
        transform="translate(-5.5 379.236)"
        fill="#96a0b5"
      />
    </g>
    <path
      id="Path_98992"
      data-name="Path 98992"
      d="M7.707-379.846a.351.351,0,0,1,.174.174.455.455,0,0,1-.005.267c-.013.03-.291.321-.626.654l-.6.6,2.74.008.208.008.063.04a.439.439,0,0,1,.109.107.253.253,0,0,1,.045.179.253.253,0,0,1-.045.179.439.439,0,0,1-.109.107l-.063.04-.208.008-2.74.008.6.6c.336.334.613.624.626.654a.455.455,0,0,1,.005.267.337.337,0,0,1-.436.175c-.072-.033-1.843-1.773-1.9-1.87a.366.366,0,0,1,.005-.347c.07-.105,1.826-1.83,1.9-1.863A.313.313,0,0,1,7.707-379.846Z"
      transform="translate(132.834 1067.855)"
      fill="#96a0b5"
    />
    <g id="Group_53629" data-name="Group 53629" transform="translate(75 687.976)">
      <rect
        id="Rectangle_10006-2"
        data-name="Rectangle 10006"
        width="2"
        height="8"
        fill="#96a0b5"
      />
      <rect
        id="Rectangle_10024-2"
        data-name="Rectangle 10024"
        width="2"
        height="6"
        transform="translate(2 4)"
        fill="#96a0b5"
      />
    </g>
    <g id="Group_53630" data-name="Group 53630" transform="translate(141 687.976)">
      <rect
        id="Rectangle_10006-3"
        data-name="Rectangle 10006"
        width="2"
        height="8"
        transform="translate(2)"
        fill="#96a0b5"
      />
      <rect
        id="Rectangle_10024-3"
        data-name="Rectangle 10024"
        width="2"
        height="6"
        transform="translate(0 4)"
        fill="#96a0b5"
      />
    </g>
  </g>
</g>
</svg>`,
  },
};
