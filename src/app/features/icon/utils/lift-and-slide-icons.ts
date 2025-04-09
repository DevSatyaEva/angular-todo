import { IconPrefix, IconPrefixType } from '../models/icon.model';

export const liftAndSlideIconKeys = {
  L_AND_S_TWO_TRACK_TWO_PANEL: 'lAndSTwoTrackTwoPanel',
  L_AND_S_TWO_TRACK_X_X_X_PANEL: 'lAndSTwoTrackXXXPanel',
  L_AND_S_THREE_TRACK_THREE_PANEL: 'lAndSThreeTrackThreePanel',
  L_AND_S_TWO_TRACK_FOUR_PANEL_MEETING: 'lAndSTwoTrackFourPanelMeeting',
  LIFT_AND_SLIDE_THREE_PANEL_SIDE_FIX_LEFT_OPEN: 'liftAndSlideThreePanelSideFixLeftOpen', //kept this, for liftAndSlideThreePanelSideFixRightOpen, do the mirror (flip) image of this
  L_AND_S_FOUR_TRACK_FOUR_PANEL: 'lAndSFourTrackFourPanel',
  L_AND_S_FIVE_TRACK_FIVE_PANEL: 'lAndSFiveTrackFivePanel',
  L_AND_S_TWO_TRACK_SIX_PANEL_MEETING: 'lAndSTwoTrackSixPanelMeeting',
  L_AND_S_THREE_TRACK_SIX_PANEL_MEETING: 'lAndSThreeTrackSixPanelMeeting',
  L_AND_S_SIX_TRACK_SIX_PANEL: 'lAndSSixTrackSixPanel',
  L_AND_S_FOUR_TRACK_EIGHT_PANEL_MEETING: 'lAndSFourTrackEightPanelMeeting',
  L_AND_S_FIVE_TRACK_TEN_PANEL_MEETING: 'lAndSFiveTrackTenPanelMeeting',
  L_AND_S_SIX_TRACK_TWELVE_PANEL_MEETING: 'lAndSSixTrackTwelvePanelMeeting',
} as const;

export type IconKey = typeof liftAndSlideIconKeys[keyof typeof liftAndSlideIconKeys];

export const LIFT_AND_SLIDE_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.LIFT_AND_SLIDE]: {
    [liftAndSlideIconKeys.L_AND_S_TWO_TRACK_TWO_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="71" height="51" viewBox="0 0 71 51">
                        <g id="Group_41687" data-name="Group 41687" transform="translate(-4.688 -466.149)">
                          <g id="Group_37643" data-name="Group 37643" transform="translate(-85.457 361)">
                            <rect
                              id="Rectangle_10006"
                              data-name="Rectangle 10006"
                              width="3"
                              height="8"
                              transform="translate(91 126)"
                              fill="#96a0b5"
                            />
                            <rect
                              id="Rectangle_10024"
                              data-name="Rectangle 10024"
                              width="2"
                              height="6"
                              transform="translate(94 130)"
                              fill="#96a0b5"
                            />
                          </g>
                          <g id="Group_41675" data-name="Group 41675" transform="translate(70.189 487)">
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
                          <g id="Group_41684" data-name="Group 41684" transform="translate(52.483 479.743) rotate(90)">
                            <g id="Group_37459" data-name="Group 37459" transform="translate(0 0)">
                              <path
                                id="path66"
                                d="M0,50V0H35V50H0"
                                transform="translate(36.905 12.295) rotate(90)"
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
                                d="M0,50V0H35V50H0"
                                transform="translate(36.905 -22.705) rotate(90)"
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
                            id="path66-3"
                            data-name="path66"
                            d="M0,44V0H31.963V44H0"
                            transform="translate(72.152 513.673) rotate(180)"
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
                            d="M0,44V0H29V44H0"
                            transform="translate(37.188 513.673) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78121"
                            data-name="Path 78121"
                            d="M3.108,3.215.342.109"
                            transform="translate(71.919 513.434)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78124"
                            data-name="Path 78124"
                            d="M3.242.109.342,3.034"
                            transform="translate(71.664 466.891)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78125"
                            data-name="Path 78125"
                            d="M.342.109,3.492,3.385"
                            transform="translate(4.919 466.564)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78126"
                            data-name="Path 78126"
                            d="M3.242.109.342,3.034"
                            transform="translate(36.665 466.891)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78127"
                            data-name="Path 78127"
                            d="M.342,3.084,3.233.109"
                            transform="translate(4.919 513.564)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78128"
                            data-name="Path 78128"
                            d="M3.108,3.215.342.109"
                            transform="translate(36.919 513.434)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <g id="Group_41685" data-name="Group 41685" transform="translate(52.326 487)">
                            <path
                              id="Path_77836"
                              data-name="Path 77836"
                              d="M5.27-343.344a.287.287,0,0,0,.167-.3v-.14l-.863-1.151-.672-.874,4.674.011h2.687l.1-.1a.518.518,0,0,0-.006-.6l-.083-.095-2.7-.014-4.686-.014.905-.9c.5-.5.922-.942.945-.994a.313.313,0,0,0-.347-.427,11.565,11.565,0,0,0-1.341,1.272c-1.206,1.209-1.252,1.258-1.252,1.361a.469.469,0,0,0,.04.186c.063.12,2.076,2.753,2.168,2.787A.257.257,0,0,0,5.27-343.344Z"
                              transform="translate(-2.801 348.945)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Subtraction_8"
                              data-name="Subtraction 8"
                              d="M6.959,0H.19l-.1.1A.4.4,0,0,0,.1.622L.183.715l2.7.015L6.959.739V0Z"
                              transform="translate(7.905 9.621) rotate(-90)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                          <g id="Group_41686" data-name="Group 41686" transform="translate(18.326 487)">
                            <path
                              id="Path_77836-2"
                              data-name="Path 77836"
                              d="M8.985-343.344a.287.287,0,0,1-.167-.3v-.14l.863-1.151.672-.874-4.674.011H2.992l-.1-.1a.518.518,0,0,1,.006-.6l.083-.095,2.7-.014,4.686-.014-.905-.9c-.5-.5-.922-.942-.945-.994a.313.313,0,0,1,.347-.427,11.565,11.565,0,0,1,1.341,1.272c1.206,1.209,1.252,1.258,1.252,1.361a.469.469,0,0,1-.04.186c-.063.12-2.076,2.753-2.168,2.787A.257.257,0,0,1,8.985-343.344Z"
                              transform="translate(-2.801 348.945)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Subtraction_8-2"
                              data-name="Subtraction 8"
                              d="M6.959.739H.19l-.1-.1A.4.4,0,0,1,.1.117L.183.024l2.7-.015L6.959,0V.739Z"
                              transform="translate(0.009 9.621) rotate(-90)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                        </g>
                      </svg>`,
    [liftAndSlideIconKeys.L_AND_S_TWO_TRACK_X_X_X_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="71" height="51" viewBox="0 0 71 51">
                        <g id="Group_41703" data-name="Group 41703" transform="translate(-225.5 -291.5)">
                          <g id="Group_41702" data-name="Group 41702" transform="translate(154.721 -64.905)">
                            <path
                              id="path66"
                              d="M0,50V0H23.333V50H0"
                              transform="translate(141.279 406.906) rotate(180)"
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
                              d="M0,50V0H23.333V50H0"
                              transform="translate(117.945 406.906) rotate(180)"
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
                              d="M0,50V0H23.333V50H0"
                              transform="translate(94.612 406.906) rotate(180)"
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
                              d="M0,44V0H17.349V44H0"
                              transform="translate(138.289 403.906) rotate(180)"
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
                              d="M0,44V0H23.333V44H0"
                              transform="translate(117.945 403.906) rotate(180)"
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
                              d="M0,44V0H17.354V44H0"
                              transform="translate(91.622 403.906) rotate(180)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="Path_78129"
                              data-name="Path 78129"
                              d="M3.242.109.342,3.034"
                              transform="translate(138.037 356.872)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <path
                              id="Path_78130"
                              data-name="Path 78130"
                              d="M3.111.109.342,3.152"
                              transform="translate(91.167 356.872)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <path
                              id="Path_78131"
                              data-name="Path 78131"
                              d="M.342.109,3.1,3.258"
                              transform="translate(71.167 356.872)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <path
                              id="Path_78132"
                              data-name="Path 78132"
                              d="M.342,3.109l2.886-3"
                              transform="translate(71.041 403.797)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <path
                              id="Path_78133"
                              data-name="Path 78133"
                              d="M3.116,3.109.342.109"
                              transform="translate(91.28 403.797)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <g id="Group_41696" data-name="Group 41696" transform="translate(136.279 377)">
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
                            <g id="Group_41697" data-name="Group 41697" transform="translate(71.768 377)">
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
                            <g id="Group_41698" data-name="Group 41698" transform="translate(80.137 377.379)">
                              <path
                                id="Path_77836"
                                data-name="Path 77836"
                                d="M8.985-343.344a.287.287,0,0,1-.167-.3v-.14l.863-1.151.672-.874-4.674.011H2.992l-.1-.1a.518.518,0,0,1,.006-.6l.083-.095,2.7-.014,4.686-.014-.905-.9c-.5-.5-.922-.942-.945-.994a.313.313,0,0,1,.347-.427,11.565,11.565,0,0,1,1.341,1.272c1.206,1.209,1.252,1.258,1.252,1.361a.469.469,0,0,1-.04.186c-.063.12-2.076,2.753-2.168,2.787A.257.257,0,0,1,8.985-343.344Z"
                                transform="translate(-2.801 348.945)"
                                fill="#96a0b5"
                                stroke="#96a0b5"
                                stroke-width="0.2"
                              />
                              <path
                                id="Subtraction_8"
                                data-name="Subtraction 8"
                                d="M6.959.739H.19l-.1-.1A.4.4,0,0,1,.1.117L.183.024l2.7-.015L6.959,0V.739Z"
                                transform="translate(0.009 9.621) rotate(-90)"
                                fill="#96a0b5"
                                stroke="#96a0b5"
                                stroke-width="0.2"
                              />
                            </g>
                            <g id="Group_41700" data-name="Group 41700" transform="translate(124.137 377.379)">
                              <path
                                id="Path_77836-2"
                                data-name="Path 77836"
                                d="M5.27-343.344a.287.287,0,0,0,.167-.3v-.14l-.863-1.151-.672-.874,4.674.011h2.687l.1-.1a.518.518,0,0,0-.006-.6l-.083-.095-2.7-.014-4.686-.014.905-.9c.5-.5.922-.942.945-.994a.313.313,0,0,0-.347-.427,11.565,11.565,0,0,0-1.341,1.272c-1.206,1.209-1.252,1.258-1.252,1.361a.469.469,0,0,0,.04.186c.063.12,2.076,2.753,2.168,2.787A.257.257,0,0,0,5.27-343.344Z"
                                transform="translate(-2.801 348.945)"
                                fill="#96a0b5"
                                stroke="#96a0b5"
                                stroke-width="0.2"
                              />
                              <path
                                id="Subtraction_8-2"
                                data-name="Subtraction 8"
                                d="M6.959,0H.19l-.1.1A.4.4,0,0,0,.1.622L.183.715l2.7.015L6.959.739V0Z"
                                transform="translate(7.905 9.621) rotate(-90)"
                                fill="#96a0b5"
                                stroke="#96a0b5"
                                stroke-width="0.2"
                              />
                            </g>
                            <path
                              id="Path_78136"
                              data-name="Path 78136"
                              d="M.342.109l3.43,3.149"
                              transform="translate(117.167 356.872)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <path
                              id="Path_78137"
                              data-name="Path 78137"
                              d="M.342,3.109l2.994-3"
                              transform="translate(117.603 403.797)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <path
                              id="Path_78138"
                              data-name="Path 78138"
                              d="M3.332,3.109l-2.99-3"
                              transform="translate(137.947 403.797)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <path
                              id="close_FILL0_wght400_GRAD0_opsz48_1_"
                              data-name="close_FILL0_wght400_GRAD0_opsz48 (1)"
                              d="M207.531,309.9,207,309.37l2.92-2.92-2.92-2.92.531-.531,2.92,2.92,2.92-2.92.531.531-2.92,2.92,2.92,2.92-.531.531-2.92-2.92Z"
                              transform="translate(-104.529 75.455)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.3"
                            />
                            <path
                              id="Path_78141"
                              data-name="Path 78141"
                              d="M.342.109l3.43,3.149"
                              transform="translate(117.167 356.872)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                            <path
                              id="Path_78142"
                              data-name="Path 78142"
                              d="M.342,3.109l2.994-3"
                              transform="translate(117.603 403.797)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                          </g>
                        </g>
                      </svg>`,
    [liftAndSlideIconKeys.L_AND_S_THREE_TRACK_THREE_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="71" height="51" viewBox="0 0 71 51">
                        <g id="Group_41701" data-name="Group 41701" transform="translate(-70.779 -356.406)">
                          <path
                            id="path66"
                            d="M0,50V0H23.333V50H0"
                            transform="translate(141.279 406.906) rotate(180)"
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
                            d="M0,50V0H23.333V50H0"
                            transform="translate(117.945 406.906) rotate(180)"
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
                            d="M0,50V0H23.333V50H0"
                            transform="translate(94.612 406.906) rotate(180)"
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
                            d="M0,44V0H20.344V44H0"
                            transform="translate(138.289 403.906) rotate(180)"
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
                            d="M0,44V0H20.344V44H0"
                            transform="translate(114.955 403.906) rotate(180)"
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
                            d="M0,44V0H17.354V44H0"
                            transform="translate(91.622 403.906) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78129"
                            data-name="Path 78129"
                            d="M3.242.109.342,3.034"
                            transform="translate(138.037 356.872)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78130"
                            data-name="Path 78130"
                            d="M3.111.109.342,3.152"
                            transform="translate(91.167 356.872)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78131"
                            data-name="Path 78131"
                            d="M.342.109,3.1,3.258"
                            transform="translate(71.167 356.872)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78132"
                            data-name="Path 78132"
                            d="M.342,3.109l2.886-3"
                            transform="translate(71.041 403.797)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78133"
                            data-name="Path 78133"
                            d="M3.116,3.109.342.109"
                            transform="translate(91.28 403.797)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78134"
                            data-name="Path 78134"
                            d="M3.034.109.342,2.555"
                            transform="translate(114.614 357.35)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78135"
                            data-name="Path 78135"
                            d="M3.031,2.939.342.109"
                            transform="translate(114.614 403.797)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <g id="Group_41696" data-name="Group 41696" transform="translate(136.279 377)">
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
                          <g id="Group_41697" data-name="Group 41697" transform="translate(71.768 377)">
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
                          <g id="Group_41698" data-name="Group 41698" transform="translate(80.137 377.379)">
                            <path
                              id="Path_77836"
                              data-name="Path 77836"
                              d="M8.985-343.344a.287.287,0,0,1-.167-.3v-.14l.863-1.151.672-.874-4.674.011H2.992l-.1-.1a.518.518,0,0,1,.006-.6l.083-.095,2.7-.014,4.686-.014-.905-.9c-.5-.5-.922-.942-.945-.994a.313.313,0,0,1,.347-.427,11.565,11.565,0,0,1,1.341,1.272c1.206,1.209,1.252,1.258,1.252,1.361a.469.469,0,0,1-.04.186c-.063.12-2.076,2.753-2.168,2.787A.257.257,0,0,1,8.985-343.344Z"
                              transform="translate(-2.801 348.945)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Subtraction_8"
                              data-name="Subtraction 8"
                              d="M6.959.739H.19l-.1-.1A.4.4,0,0,1,.1.117L.183.024l2.7-.015L6.959,0V.739Z"
                              transform="translate(0.009 9.621) rotate(-90)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                          <g id="Group_41699" data-name="Group 41699" transform="translate(100.137 377.379)">
                            <path
                              id="Path_77836-2"
                              data-name="Path 77836"
                              d="M5.27-343.344a.287.287,0,0,0,.167-.3v-.14l-.863-1.151-.672-.874,4.674.011h2.687l.1-.1a.518.518,0,0,0-.006-.6l-.083-.095-2.7-.014-4.686-.014.905-.9c.5-.5.922-.942.945-.994a.313.313,0,0,0-.347-.427,11.565,11.565,0,0,0-1.341,1.272c-1.206,1.209-1.252,1.258-1.252,1.361a.469.469,0,0,0,.04.186c.063.12,2.076,2.753,2.168,2.787A.257.257,0,0,0,5.27-343.344Z"
                              transform="translate(-2.801 348.945)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Subtraction_8-2"
                              data-name="Subtraction 8"
                              d="M6.959,0H.19l-.1.1A.4.4,0,0,0,.1.622L.183.715l2.7.015L6.959.739V0Z"
                              transform="translate(7.905 9.621) rotate(-90)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                          <g id="Group_41700" data-name="Group 41700" transform="translate(124.137 377.379)">
                            <path
                              id="Path_77836-3"
                              data-name="Path 77836"
                              d="M5.27-343.344a.287.287,0,0,0,.167-.3v-.14l-.863-1.151-.672-.874,4.674.011h2.687l.1-.1a.518.518,0,0,0-.006-.6l-.083-.095-2.7-.014-4.686-.014.905-.9c.5-.5.922-.942.945-.994a.313.313,0,0,0-.347-.427,11.565,11.565,0,0,0-1.341,1.272c-1.206,1.209-1.252,1.258-1.252,1.361a.469.469,0,0,0,.04.186c.063.12,2.076,2.753,2.168,2.787A.257.257,0,0,0,5.27-343.344Z"
                              transform="translate(-2.801 348.945)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Subtraction_8-3"
                              data-name="Subtraction 8"
                              d="M6.959,0H.19l-.1.1A.4.4,0,0,0,.1.622L.183.715l2.7.015L6.959.739V0Z"
                              transform="translate(7.905 9.621) rotate(-90)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                        </g>
                      </svg>`,
    [liftAndSlideIconKeys.L_AND_S_TWO_TRACK_FOUR_PANEL_MEETING]: `<svg xmlns="http://www.w3.org/2000/svg" width="71" height="51" viewBox="0 0 71 51">
                        <g id="Group_41713" data-name="Group 41713" transform="translate(-305.833 -295.5)">
                          <g id="Group_41704" data-name="Group 41704" transform="translate(77 4)">
                            <g id="Group_41702" data-name="Group 41702" transform="translate(229.333 292)">
                              <path
                                id="path66"
                                d="M0,50V0H17.5V50H0"
                                transform="translate(17.5 50) rotate(180)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                            </g>
                          </g>
                          <g id="Group_41705" data-name="Group 41705" transform="translate(94.5 4)">
                            <g id="Group_41702-2" data-name="Group 41702" transform="translate(229.333 292)">
                              <path
                                id="path66-2"
                                data-name="path66"
                                d="M0,50V0H17.5V50H0"
                                transform="translate(17.5 50) rotate(180)"
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
                            id="path66-3"
                            data-name="path66"
                            d="M0,44V0H14.468V44H0"
                            transform="translate(323.833 343) rotate(180)"
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
                            d="M0,44V0H11.464V44H0"
                            transform="translate(338.329 343) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78139"
                            data-name="Path 78139"
                            d="M.342.109,3.1,3.258"
                            transform="translate(306.264 295.966)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78140"
                            data-name="Path 78140"
                            d="M.342,3.109l2.886-3"
                            transform="translate(306.137 342.891)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78143"
                            data-name="Path 78143"
                            d="M.342.109l3.43,3.149"
                            transform="translate(323.492 295.966)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78144"
                            data-name="Path 78144"
                            d="M.342,3.109l2.994-3"
                            transform="translate(323.928 342.891)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78145"
                            data-name="Path 78145"
                            d="M3.013.109.342,3.282"
                            transform="translate(337.987 295.966)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78146"
                            data-name="Path 78146"
                            d="M3.08,2.912.342.109"
                            transform="translate(337.987 342.891)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="path66-5"
                            data-name="path66"
                            d="M0,50V0H17.5V50H0"
                            transform="translate(358.833 346) rotate(180)"
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
                            d="M0,44V0H11.464V44H0"
                            transform="translate(355.829 343) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78147"
                            data-name="Path 78147"
                            d="M.342.109,3.55,3.282"
                            transform="translate(340.992 295.966)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78148"
                            data-name="Path 78148"
                            d="M.342,2.912,2.99.109"
                            transform="translate(341.376 342.891)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78149"
                            data-name="Path 78149"
                            d="M3.013.109.342,3.034"
                            transform="translate(355.487 295.966)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78150"
                            data-name="Path 78150"
                            d="M3.332,3.109l-2.99-3"
                            transform="translate(355.168 342.891)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="path66-7"
                            data-name="path66"
                            d="M0,50V0H17.5V50H0"
                            transform="translate(376.333 346) rotate(180)"
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
                            d="M0,44V0H14.5V44H0"
                            transform="translate(373.329 343) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78151"
                            data-name="Path 78151"
                            d="M2.894.109.342,2.793"
                            transform="translate(372.987 296.207)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78152"
                            data-name="Path 78152"
                            d="M3.037,2.921.342.109"
                            transform="translate(372.987 342.891)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <g id="Group_41706" data-name="Group 41706" transform="translate(371.333 316)">
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
                          <g id="Group_41707" data-name="Group 41707" transform="translate(306.333 316)">
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
                          <g id="Group_41708" data-name="Group 41708" transform="translate(341.333 316)">
                            <rect
                              id="Rectangle_10006-3"
                              data-name="Rectangle 10006"
                              width="3"
                              height="8"
                              fill="#96a0b5"
                            />
                            <rect
                              id="Rectangle_10024-3"
                              data-name="Rectangle 10024"
                              width="2"
                              height="6"
                              transform="translate(3 4)"
                              fill="#96a0b5"
                            />
                          </g>
                          <g id="Group_41709" data-name="Group 41709" transform="translate(361.534 317)">
                            <path
                              id="Path_77836"
                              data-name="Path 77836"
                              d="M4.885-344.219a.242.242,0,0,0,.141-.251v-.118l-.728-.971L3.73-346.3l3.944.009H9.942l.082-.082a.437.437,0,0,0,0-.506l-.07-.08-2.275-.012-3.955-.012.764-.762c.421-.418.778-.8.8-.839a.265.265,0,0,0-.292-.36,9.755,9.755,0,0,0-1.131,1.073c-1.018,1.02-1.056,1.061-1.056,1.148a.4.4,0,0,0,.034.157c.053.1,1.752,2.323,1.829,2.352A.216.216,0,0,0,4.885-344.219Z"
                              transform="translate(-2.801 348.945)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Subtraction_8"
                              data-name="Subtraction 8"
                              d="M5.872,0H.161L.079.083A.34.34,0,0,0,.084.525L.154.6,2.428.616,5.872.624V0Z"
                              transform="translate(6.67 8.118) rotate(-90)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                          <g id="Group_41710" data-name="Group 41710" transform="translate(347.534 317)">
                            <path
                              id="Path_77836-2"
                              data-name="Path 77836"
                              d="M8.02-344.219a.242.242,0,0,1-.141-.251v-.118l.728-.971.567-.737-3.944.009H2.962l-.082-.082a.437.437,0,0,1,0-.506l.07-.08,2.275-.012,3.955-.012-.764-.762c-.421-.418-.778-.8-.8-.839a.265.265,0,0,1,.292-.36,9.755,9.755,0,0,1,1.131,1.073c1.018,1.02,1.056,1.061,1.056,1.148a.4.4,0,0,1-.034.157c-.053.1-1.752,2.323-1.829,2.352A.216.216,0,0,1,8.02-344.219Z"
                              transform="translate(-2.801 348.945)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Subtraction_8-2"
                              data-name="Subtraction 8"
                              d="M5.872.624H.161L.079.541A.34.34,0,0,1,.084.1L.154.02,2.428.007,5.872,0V.622Z"
                              transform="translate(0.007 8.118) rotate(-90)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                          <g id="Group_41711" data-name="Group 41711" transform="translate(328.534 317)">
                            <path
                              id="Path_77836-3"
                              data-name="Path 77836"
                              d="M4.885-344.219a.242.242,0,0,0,.141-.251v-.118l-.728-.971L3.73-346.3l3.944.009H9.942l.082-.082a.437.437,0,0,0,0-.506l-.07-.08-2.275-.012-3.955-.012.764-.762c.421-.418.778-.8.8-.839a.265.265,0,0,0-.292-.36,9.755,9.755,0,0,0-1.131,1.073c-1.018,1.02-1.056,1.061-1.056,1.148a.4.4,0,0,0,.034.157c.053.1,1.752,2.323,1.829,2.352A.216.216,0,0,0,4.885-344.219Z"
                              transform="translate(-2.801 348.945)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Subtraction_8-3"
                              data-name="Subtraction 8"
                              d="M5.872,0H.161L.079.083A.34.34,0,0,0,.084.525L.154.6,2.428.616,5.872.624V0Z"
                              transform="translate(6.67 8.118) rotate(-90)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                          <g id="Group_41712" data-name="Group 41712" transform="translate(312.534 317)">
                            <path
                              id="Path_77836-4"
                              data-name="Path 77836"
                              d="M8.02-344.219a.242.242,0,0,1-.141-.251v-.118l.728-.971.567-.737-3.944.009H2.962l-.082-.082a.437.437,0,0,1,0-.506l.07-.08,2.275-.012,3.955-.012-.764-.762c-.421-.418-.778-.8-.8-.839a.265.265,0,0,1,.292-.36,9.755,9.755,0,0,1,1.131,1.073c1.018,1.02,1.056,1.061,1.056,1.148a.4.4,0,0,1-.034.157c-.053.1-1.752,2.323-1.829,2.352A.216.216,0,0,1,8.02-344.219Z"
                              transform="translate(-2.801 348.945)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Subtraction_8-4"
                              data-name="Subtraction 8"
                              d="M5.872.624H.161L.079.541A.34.34,0,0,1,.084.1L.154.02,2.428.007,5.872,0V.622Z"
                              transform="translate(0.007 8.118) rotate(-90)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                        </g>
                      </svg>`,
    [liftAndSlideIconKeys.LIFT_AND_SLIDE_THREE_PANEL_SIDE_FIX_LEFT_OPEN]: `<svg xmlns="http://www.w3.org/2000/svg" width="71" height="51" viewBox="0 0 71 51">
                        <g id="Group_41718" data-name="Group 41718" transform="translate(-70.779 -356.406)">
                          <path
                            id="path66"
                            d="M0,50V0H23.333V50H0"
                            transform="translate(141.279 406.906) rotate(180)"
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
                            d="M0,50V0H23.333V50H0"
                            transform="translate(117.945 406.906) rotate(180)"
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
                            d="M0,50V0H23.333V50H0"
                            transform="translate(94.612 406.906) rotate(180)"
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
                            d="M0,44V0H20.344V44H0"
                            transform="translate(138.289 403.906) rotate(180)"
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
                            d="M0,44V0H17.379V44H0"
                            transform="translate(114.955 403.906) rotate(180)"
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
                            d="M0,44V0H17.354V44H0"
                            transform="translate(91.622 403.906) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78129"
                            data-name="Path 78129"
                            d="M3.242.109.342,3.034"
                            transform="translate(138.037 356.872)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78130"
                            data-name="Path 78130"
                            d="M3.111.109.342,3.152"
                            transform="translate(91.167 356.872)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78131"
                            data-name="Path 78131"
                            d="M.342.109,3.1,3.258"
                            transform="translate(71.167 356.872)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78132"
                            data-name="Path 78132"
                            d="M.342,3.109l2.886-3"
                            transform="translate(71.041 403.797)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78133"
                            data-name="Path 78133"
                            d="M3.116,3.109.342.109"
                            transform="translate(91.28 403.797)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78134"
                            data-name="Path 78134"
                            d="M3.034.109.342,2.555"
                            transform="translate(114.614 357.35)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78135"
                            data-name="Path 78135"
                            d="M3.031,2.939.342.109"
                            transform="translate(114.614 403.797)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <g id="Group_41697" data-name="Group 41697" transform="translate(94.278 376.905)">
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
                          <g id="Group_41699" data-name="Group 41699" transform="translate(102.137 376.905)">
                            <path
                              id="Path_77836"
                              data-name="Path 77836"
                              d="M8.985-343.344a.287.287,0,0,1-.167-.3v-.14l.863-1.151.672-.874-4.674.011H2.992l-.1-.1a.518.518,0,0,1,.006-.6l.083-.095,2.7-.014,4.686-.014-.905-.9c-.5-.5-.922-.942-.945-.994a.313.313,0,0,1,.347-.427,11.565,11.565,0,0,1,1.341,1.272c1.206,1.209,1.252,1.258,1.252,1.361a.469.469,0,0,1-.04.186c-.063.12-2.076,2.753-2.168,2.787A.257.257,0,0,1,8.985-343.344Z"
                              transform="translate(-2.801 348.945)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                            <path
                              id="Subtraction_8"
                              data-name="Subtraction 8"
                              d="M6.959.739H.19l-.1-.1A.4.4,0,0,1,.1.117L.183.024l2.7-.015L6.959,0V.739Z"
                              transform="translate(0.009 9.621) rotate(-90)"
                              fill="#96a0b5"
                              stroke="#96a0b5"
                              stroke-width="0.2"
                            />
                          </g>
                          <path
                            id="Path_78153"
                            data-name="Path 78153"
                            d="M.342.109l2.729,3.2"
                            transform="translate(94.505 356.872)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_78154"
                            data-name="Path 78154"
                            d="M.342,3.109l2.965-3"
                            transform="translate(94.27 403.797)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="close_FILL0_wght400_GRAD0_opsz48_1_"
                            data-name="close_FILL0_wght400_GRAD0_opsz48 (1)"
                            d="M207.531,309.9,207,309.37l2.92-2.92-2.92-2.92.531-.531,2.92,2.92,2.92-2.92.531.531-2.92,2.92,2.92,2.92-.531.531-2.92-2.92Z"
                            transform="translate(-127.505 75.405)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.3"
                          />
                          <path
                            id="close_FILL0_wght400_GRAD0_opsz48_1_2"
                            data-name="close_FILL0_wght400_GRAD0_opsz48 (1)"
                            d="M207.531,309.9,207,309.37l2.92-2.92-2.92-2.92.531-.531,2.92,2.92,2.92-2.92.531.531-2.92,2.92,2.92,2.92-.531.531-2.92-2.92Z"
                            transform="translate(-82.505 75.405)"
                            fill="#96a0b5"
                            stroke="#96a0b5"
                            stroke-width="0.3"
                          />
                        </g>
                      </svg>`,
    [liftAndSlideIconKeys.L_AND_S_FOUR_TRACK_FOUR_PANEL]: `<svg width="73" height="52" viewBox="0 0 73 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.35547 21H1.35547V29H4.35547V21Z" fill="#96A0B5" />
                        <path d="M6.35547 25H4.35547V31H6.35547V25Z" fill="#96A0B5" />
                        <path d="M72 21H69V29H72V21Z" fill="#96A0B5" />
                        <path d="M69 25H67V31H69V25Z" fill="#96A0B5" />
                        <path
                          d="M21 1L21 51H0.999999L0.999999 1H21Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M38 1L38 51H21L21 1H38Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M55 1L55 51H38L38 1H55Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M72 1V51H55L55 1H72Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M34.9639 4.0249L34.9639 48.0249H20.9639L20.9639 4.0249H34.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M51.9639 4.0249L51.9639 48.0249H37.9639L37.9639 4.0249H51.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M68.9639 4.0249V48.0249H54.9639L54.9639 4.0249H68.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M18 4L18 48H4L4 4H18Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M37.8392 51.001L35.0732 47.895" stroke="#96A0B5" />
                        <path d="M54.8392 51.001L52.0732 47.895" stroke="#96A0B5" />
                        <path d="M71.8392 51.001L69.0732 47.895" stroke="#96A0B5" />
                        <path d="M37.7184 1.35205L34.8184 4.27705" stroke="#96A0B5" />
                        <path d="M54.7184 1.35205L51.8184 4.27705" stroke="#96A0B5" />
                        <path d="M71.7184 1.35205L68.8184 4.27705" stroke="#96A0B5" />
                        <path d="M1.07324 1.0249L4.22324 4.3009" stroke="#96A0B5" />
                        <path d="M20.7193 1.35205L17.8193 4.27705" stroke="#96A0B5" />
                        <path d="M1.07324 50.9999L3.96424 48.0249" stroke="#96A0B5" />
                        <path d="M20.8392 51.001L18.0732 47.895" stroke="#96A0B5" />
                        <path
                          d="M59.472 28.6034C59.5285 28.578 59.5752 28.5351 59.6053 28.4811C59.6354 28.427 59.6472 28.3647 59.639 28.3033V28.1634L58.776 27.0124L58.104 26.1384L62.778 26.1493H65.465L65.565 26.0493C65.6264 25.9611 65.6588 25.8559 65.6577 25.7484C65.6566 25.6409 65.6221 25.5364 65.559 25.4494L65.476 25.3544L62.776 25.3404L58.09 25.3263L58.995 24.4264C59.495 23.9264 59.917 23.4843 59.94 23.4323C59.9615 23.3802 59.9685 23.3234 59.9603 23.2676C59.9522 23.2118 59.9291 23.1593 59.8936 23.1156C59.858 23.0719 59.8113 23.0385 59.7584 23.0191C59.7055 22.9997 59.6484 22.995 59.593 23.0054C59.1128 23.3929 58.6643 23.8182 58.252 24.2773C57.046 25.4863 57 25.5354 57 25.6384C57.0005 25.7024 57.0141 25.7657 57.04 25.8244C57.103 25.9444 59.116 28.5774 59.208 28.6114C59.2486 28.634 59.2946 28.6453 59.3411 28.6439C59.3876 28.6424 59.4328 28.6285 59.472 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M64.9082 25.6643V32.4333L65.0082 32.5333C65.082 32.5944 65.1753 32.627 65.2711 32.6252C65.3669 32.6233 65.4588 32.5872 65.5302 32.5233L65.6232 32.4403L65.6382 29.7403L65.6472 25.6643H64.9082Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M14.1862 28.6034C14.1297 28.578 14.083 28.5351 14.0529 28.4811C14.0228 28.427 14.011 28.3647 14.0192 28.3033V28.1634L14.8822 27.0124L15.5542 26.1384L10.8802 26.1493H8.1932L8.0932 26.0493C8.03181 25.9611 7.99941 25.8559 8.00048 25.7484C8.00156 25.6409 8.03606 25.5364 8.0992 25.4494L8.1822 25.3544L10.8822 25.3404L15.5682 25.3263L14.6632 24.4264C14.1632 23.9264 13.7412 23.4843 13.7182 23.4323C13.6967 23.3802 13.6897 23.3234 13.6979 23.2676C13.706 23.2118 13.7291 23.1593 13.7646 23.1156C13.8002 23.0719 13.8469 23.0385 13.8998 23.0191C13.9527 22.9997 14.0098 22.995 14.0652 23.0054C14.5454 23.3929 14.9939 23.8182 15.4062 24.2773C16.6122 25.4863 16.6582 25.5354 16.6582 25.6384C16.6577 25.7024 16.6441 25.7657 16.6182 25.8244C16.5552 25.9444 14.5422 28.5774 14.4502 28.6114C14.4096 28.634 14.3636 28.6453 14.3171 28.6439C14.2706 28.6424 14.2254 28.6285 14.1862 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M8.75 25.6643V32.4333L8.65 32.5333C8.57622 32.5944 8.48294 32.627 8.38714 32.6252C8.29134 32.6233 8.19939 32.5872 8.128 32.5233L8.035 32.4403L8.02 29.7403L8.011 25.6643H8.75Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M33.0455 25.9519L31.0215 27.9759"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23 25.952H33.05L31.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M24.952 27.977L23 25.953L24.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M50.0455 25.9519L48.0215 27.9759"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M40 25.952H50.05L48.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M41.952 27.977L40 25.953L41.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>`,
    [liftAndSlideIconKeys.L_AND_S_FIVE_TRACK_FIVE_PANEL]: `<svg width="100" height="52" viewBox="0 0 100 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.35547 22H1.35547V30H4.35547V22Z" fill="#96A0B5" />
                        <path d="M6.35547 26H4.35547V32H6.35547V26Z" fill="#96A0B5" />
                        <path d="M99 22H96V30H99V22Z" fill="#96A0B5" />
                        <path d="M96 26H94V32H96V26Z" fill="#96A0B5" />
                        <path
                          d="M23 1L23 51H0.999999L0.999999 1H23Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42 1L42 51H23L23 1H42Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M61 1L61 51H42L42 1H61Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M80 1V51H61L61 1H80Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M99 1V51H80V1H99Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M38.9639 4.0249L38.9639 48.0249H22.9639L22.9639 4.0249H38.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M57.9639 4.0249L57.9639 48.0249H41.9639L41.9639 4.0249H57.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M76.9639 4.0249V48.0249H60.9639L60.9639 4.0249H76.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M95.9639 4.0249V48.0249H79.9639V4.0249H95.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 4L20 48H4L4 4H20Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M41.8392 51.001L39.0732 47.895" stroke="#96A0B5" />
                        <path d="M60.8392 51.001L58.0732 47.895" stroke="#96A0B5" />
                        <path d="M79.8392 51.001L77.0732 47.895" stroke="#96A0B5" />
                        <path d="M98.8392 51.001L96.0732 47.895" stroke="#96A0B5" />
                        <path d="M41.7184 1.35205L38.8184 4.27705" stroke="#96A0B5" />
                        <path d="M60.7184 1.35205L57.8184 4.27705" stroke="#96A0B5" />
                        <path d="M79.7184 1.35205L76.8184 4.27705" stroke="#96A0B5" />
                        <path d="M98.7184 1.35205L95.8184 4.27705" stroke="#96A0B5" />
                        <path d="M1.07324 1.0249L4.22324 4.3009" stroke="#96A0B5" />
                        <path d="M22.7193 1.35205L19.8193 4.27705" stroke="#96A0B5" />
                        <path d="M1.07324 50.9999L3.96424 48.0249" stroke="#96A0B5" />
                        <path d="M22.8392 51.001L20.0732 47.895" stroke="#96A0B5" />
                        <path
                          d="M85.472 28.6034C85.5285 28.578 85.5752 28.5351 85.6053 28.4811C85.6354 28.427 85.6472 28.3647 85.639 28.3033V28.1634L84.776 27.0124L84.104 26.1384L88.778 26.1493H91.465L91.565 26.0493C91.6264 25.9611 91.6588 25.8559 91.6577 25.7484C91.6566 25.6409 91.6221 25.5364 91.559 25.4494L91.476 25.3544L88.776 25.3404L84.09 25.3263L84.995 24.4264C85.495 23.9264 85.917 23.4843 85.94 23.4323C85.9615 23.3802 85.9685 23.3234 85.9603 23.2676C85.9522 23.2118 85.9291 23.1593 85.8936 23.1156C85.858 23.0719 85.8113 23.0385 85.7584 23.0191C85.7055 22.9997 85.6484 22.995 85.593 23.0054C85.1128 23.3929 84.6643 23.8182 84.252 24.2773C83.046 25.4863 83 25.5354 83 25.6384C83.0005 25.7024 83.0141 25.7657 83.04 25.8244C83.103 25.9444 85.116 28.5774 85.208 28.6114C85.2486 28.634 85.2946 28.6453 85.3411 28.6439C85.3876 28.6424 85.4328 28.6285 85.472 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M90.9082 25.6643V32.4333L91.0082 32.5333C91.082 32.5944 91.1753 32.627 91.2711 32.6252C91.3669 32.6233 91.4588 32.5872 91.5302 32.5233L91.6232 32.4403L91.6382 29.7403L91.6472 25.6643H90.9082Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M15.1862 28.6034C15.1297 28.578 15.083 28.5351 15.0529 28.4811C15.0228 28.427 15.011 28.3647 15.0192 28.3033V28.1634L15.8822 27.0124L16.5542 26.1384L11.8802 26.1493H9.1932L9.0932 26.0493C9.03181 25.9611 8.99941 25.8559 9.00048 25.7484C9.00156 25.6409 9.03606 25.5364 9.0992 25.4494L9.1822 25.3544L11.8822 25.3404L16.5682 25.3263L15.6632 24.4264C15.1632 23.9264 14.7412 23.4843 14.7182 23.4323C14.6967 23.3802 14.6897 23.3234 14.6979 23.2676C14.706 23.2118 14.7291 23.1593 14.7646 23.1156C14.8002 23.0719 14.8469 23.0385 14.8998 23.0191C14.9527 22.9997 15.0098 22.995 15.0652 23.0054C15.5454 23.3929 15.9939 23.8182 16.4062 24.2773C17.6122 25.4863 17.6582 25.5354 17.6582 25.6384C17.6577 25.7024 17.6441 25.7657 17.6182 25.8244C17.5552 25.9444 15.5422 28.5774 15.4502 28.6114C15.4096 28.634 15.3636 28.6453 15.3171 28.6439C15.2706 28.6424 15.2254 28.6285 15.1862 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M9.75 25.6643V32.4333L9.65 32.5333C9.57622 32.5944 9.48294 32.627 9.38714 32.6252C9.29134 32.6233 9.19939 32.5872 9.128 32.5233L9.035 32.4403L9.02 29.7403L9.011 25.6643H9.75Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M36.0455 25.9519L34.0215 27.9759"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26 25.952H36.05L34.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M27.952 27.977L26 25.953L27.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M55.0455 25.9519L53.0215 27.9759"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M45 25.952H55.05L53.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M46.952 27.977L45 25.953L46.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M74.0455 25.9519L72.0215 27.9759"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M64 25.952H74.05L72.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M65.952 27.977L64 25.953L65.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>`,
    [liftAndSlideIconKeys.L_AND_S_TWO_TRACK_SIX_PANEL_MEETING]: `<svg width="105" height="52" viewBox="0 0 105 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M104 1L104 51L1 51L1 1L104 1Z"
                          stroke="#96A0B5"
                          stroke-width="0.995179"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M16.0001 4L16.0001 48H4.00009L4.00009 4H16.0001Z"
                          stroke="#96A0B5"
                          stroke-width="0.995179"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M30 4L30 48H19L19 4H30Z"
                          stroke="#96A0B5"
                          stroke-width="0.995179"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M49.0001 4L49.0001 48H36.0001L36.0001 4H49.0001Z"
                          stroke="#96A0B5"
                          stroke-width="0.995179"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M68.0001 4V48H55.0001L55.0001 4H68.0001Z"
                          stroke="#96A0B5"
                          stroke-width="0.995179"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M85.0001 4V48H74.0001V4H85.0001Z"
                          stroke="#96A0B5"
                          stroke-width="0.995179"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M101 4V48H88.0001V4H101Z"
                          stroke="#96A0B5"
                          stroke-width="0.995179"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M12.3783 27.6761C12.3353 27.655 12.2997 27.6192 12.2768 27.5741C12.2539 27.5289 12.245 27.4769 12.2512 27.4257V27.3089L12.9077 26.3484L13.419 25.619L9.86317 25.6282H7.819L7.74292 25.5447C7.69622 25.4711 7.67157 25.3833 7.67238 25.2936C7.6732 25.2039 7.69945 25.1167 7.74749 25.044L7.81063 24.9648L9.86469 24.9531L13.4296 24.9414L12.7411 24.1903C12.3608 23.7731 12.0397 23.4042 12.0222 23.3608C12.0059 23.3173 12.0005 23.2698 12.0067 23.2233C12.013 23.1768 12.0305 23.133 12.0575 23.0965C12.0846 23.06 12.1201 23.0322 12.1603 23.016C12.2006 22.9998 12.2441 22.9958 12.2862 23.0045C12.6515 23.3279 12.9927 23.6828 13.3064 24.066C14.2239 25.0749 14.2589 25.1158 14.2589 25.2018C14.2585 25.2552 14.2481 25.3081 14.2284 25.357C14.1805 25.4571 12.6491 27.6544 12.5791 27.6828C12.5482 27.7017 12.5132 27.7111 12.4778 27.7099C12.4425 27.7087 12.408 27.6971 12.3783 27.6761Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M8.03604 25.0266C8.23182 25.0266 8.39054 25.1853 8.39054 25.3811V30.0537C8.39054 30.1311 8.35515 30.2042 8.29447 30.2523V30.2523C8.22358 30.2988 8.13396 30.3236 8.04192 30.3222C7.94989 30.3208 7.86154 30.2933 7.79295 30.2447V30.2447C7.73686 30.205 7.70331 30.1408 7.70283 30.0721L7.68919 28.1275L7.68153 25.3821C7.68099 25.1859 7.83986 25.0266 8.03604 25.0266V25.0266Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M27.9999 26.2285L25.7749 28.5074"
                          stroke="#96A0B5"
                          stroke-width="0.999312"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21 26.225H28L25.775 24"
                          stroke="#96A0B5"
                          stroke-width="0.999312"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.2789 28.5059L21 26.227L23.2789 24.002"
                          stroke="#96A0B5"
                          stroke-width="0.999312"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M40.553 27.6761C40.5959 27.655 40.6315 27.6192 40.6544 27.5741C40.6773 27.5289 40.6863 27.4769 40.68 27.4257V27.3089L40.0235 26.3484L39.5122 25.619L43.068 25.6282H45.1122L45.1883 25.5447C45.235 25.4711 45.2596 25.3833 45.2588 25.2936C45.258 25.2039 45.2318 25.1167 45.1837 25.044L45.1206 24.9648L43.0665 24.9531L39.5016 24.9414L40.1901 24.1903C40.5705 23.7731 40.8915 23.4042 40.909 23.3608C40.9253 23.3173 40.9307 23.2698 40.9245 23.2233C40.9183 23.1768 40.9007 23.133 40.8737 23.0965C40.8466 23.06 40.8111 23.0322 40.7709 23.016C40.7306 22.9998 40.6871 22.9958 40.645 23.0045C40.2797 23.3279 39.9385 23.6828 39.6248 24.066C38.7073 25.0749 38.6724 25.1158 38.6724 25.2018C38.6727 25.2552 38.6831 25.3081 38.7028 25.357C38.7507 25.4571 40.2821 27.6544 40.3521 27.6828C40.383 27.7017 40.418 27.7111 40.4534 27.7099C40.4888 27.7087 40.5232 27.6971 40.553 27.6761Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M44.8952 25.0266C44.6994 25.0266 44.5407 25.1853 44.5407 25.3811V30.0537C44.5407 30.1311 44.5761 30.2042 44.6367 30.2523V30.2523C44.7076 30.2988 44.7972 30.3236 44.8893 30.3222C44.9813 30.3208 45.0697 30.2933 45.1383 30.2447V30.2447C45.1944 30.205 45.2279 30.1408 45.2284 30.0721L45.242 28.1275L45.2497 25.3821C45.2502 25.1859 45.0914 25.0266 44.8952 25.0266V25.0266Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M63.3783 27.6761C63.3353 27.655 63.2997 27.6192 63.2768 27.5741C63.2539 27.5289 63.245 27.4769 63.2512 27.4257V27.3089L63.9077 26.3484L64.419 25.619L60.8632 25.6282H58.819L58.7429 25.5447C58.6962 25.4711 58.6716 25.3833 58.6724 25.2936C58.6732 25.2039 58.6994 25.1167 58.7475 25.044L58.8106 24.9648L60.8647 24.9531L64.4296 24.9414L63.7411 24.1903C63.3608 23.7731 63.0397 23.4042 63.0222 23.3608C63.0059 23.3173 63.0005 23.2698 63.0067 23.2233C63.013 23.1768 63.0305 23.133 63.0575 23.0965C63.0846 23.06 63.1201 23.0322 63.1603 23.016C63.2006 22.9998 63.2441 22.9958 63.2862 23.0045C63.6515 23.3279 63.9927 23.6828 64.3064 24.066C65.2239 25.0749 65.2589 25.1158 65.2589 25.2018C65.2585 25.2552 65.2481 25.3081 65.2284 25.357C65.1805 25.4571 63.6491 27.6544 63.5791 27.6828C63.5482 27.7017 63.5132 27.7111 63.4778 27.7099C63.4425 27.7087 63.408 27.6971 63.3783 27.6761Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M59.036 25.0266C59.2318 25.0266 59.3905 25.1853 59.3905 25.3811V30.0537C59.3905 30.1311 59.3552 30.2042 59.2945 30.2523V30.2523C59.2236 30.2988 59.134 30.3236 59.0419 30.3222C58.9499 30.3208 58.8615 30.2933 58.793 30.2447V30.2447C58.7369 30.205 58.7033 30.1408 58.7028 30.0721L58.6892 28.1275L58.6815 25.3821C58.681 25.1859 58.8399 25.0266 59.036 25.0266V25.0266Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M82.9999 26.2285L80.7749 28.5074"
                          stroke="#96A0B5"
                          stroke-width="0.999312"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M76 26.225H83L80.775 24"
                          stroke="#96A0B5"
                          stroke-width="0.999312"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M78.2789 28.5059L76 26.227L78.2789 24.002"
                          stroke="#96A0B5"
                          stroke-width="0.999312"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M92.553 27.6761C92.5959 27.655 92.6315 27.6192 92.6544 27.5741C92.6773 27.5289 92.6863 27.4769 92.68 27.4257V27.3089L92.0235 26.3484L91.5122 25.619L95.068 25.6282H97.1122L97.1883 25.5447C97.235 25.4711 97.2596 25.3833 97.2588 25.2936C97.258 25.2039 97.2318 25.1167 97.1837 25.044L97.1206 24.9648L95.0665 24.9531L91.5016 24.9414L92.1901 24.1903C92.5705 23.7731 92.8915 23.4042 92.909 23.3608C92.9253 23.3173 92.9307 23.2698 92.9245 23.2233C92.9183 23.1768 92.9007 23.133 92.8737 23.0965C92.8466 23.06 92.8111 23.0322 92.7709 23.016C92.7306 22.9998 92.6871 22.9958 92.645 23.0045C92.2797 23.3279 91.9385 23.6828 91.6248 24.066C90.7073 25.0749 90.6724 25.1158 90.6724 25.2018C90.6727 25.2552 90.6831 25.3081 90.7028 25.357C90.7507 25.4571 92.2821 27.6544 92.3521 27.6828C92.383 27.7017 92.418 27.7111 92.4534 27.7099C92.4888 27.7087 92.5232 27.6971 92.553 27.6761Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M96.8952 25.0266C96.6994 25.0266 96.5407 25.1853 96.5407 25.3811V30.0537C96.5407 30.1311 96.5761 30.2042 96.6367 30.2523V30.2523C96.7076 30.2988 96.7972 30.3236 96.8893 30.3222C96.9813 30.3208 97.0697 30.2933 97.1383 30.2447V30.2447C97.1944 30.205 97.2279 30.1408 97.2284 30.0721L97.242 28.1275L97.2497 25.3821C97.2502 25.1859 97.0914 25.0266 96.8952 25.0266V25.0266Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path d="M16.0001 1V50.7589" stroke="#96A0B5" stroke-width="0.995179" />
                        <path d="M33.0001 1V50.7589" stroke="#96A0B5" stroke-width="0.995179" />
                        <path d="M52.0001 1V50.7589" stroke="#96A0B5" stroke-width="0.995179" />
                        <path d="M71.0001 1V50.7589" stroke="#96A0B5" stroke-width="0.995179" />
                        <path d="M88.0001 1V50.7589" stroke="#96A0B5" stroke-width="0.995179" />
                        <path d="M103.99 23H100.99V30.9614H103.99V23Z" fill="#96A0B5" />
                        <path d="M101 27H99V33H101V27Z" fill="#96A0B5" />
                        <path d="M52.0001 23H55.0001V30.9614H52.0001V23Z" fill="#96A0B5" />
                        <path d="M55 27H57V33H55V27Z" fill="#96A0B5" />
                        <path d="M1 24H4V32H1V24Z" fill="#96A0B5" />
                        <path d="M4 28H6V34H4V28Z" fill="#96A0B5" />
                      </svg>`,
    [liftAndSlideIconKeys.L_AND_S_THREE_TRACK_SIX_PANEL_MEETING]: `<svg width="122" height="52" viewBox="0 0 122 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.35547 22H1.35547V30H4.35547V22Z" fill="#96A0B5" />
                        <path d="M6.35547 26H4.35547V32H6.35547V26Z" fill="#96A0B5" />
                        <path d="M121 22H118V30H121V22Z" fill="#96A0B5" />
                        <path d="M118 26H116V32H118V26Z" fill="#96A0B5" />
                        <path d="M61 22H58V30H61V22Z" fill="#96A0B5" />
                        <path d="M58 26H56V32H58V26Z" fill="#96A0B5" />
                        <path
                          d="M39 1L39 51H20L20 1H39Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 1L20 51H0.999999L0.999999 1H20Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M61 1L61 51H39L39 1H61Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M83 1V51H61L61 1H83Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M102 1V51H83V1H102Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M121 1V51H102V1H121Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M57.9639 4.0249L57.9639 48.0249H41.9639L41.9639 4.0249H57.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M79.9639 4.0249V48.0249H63.9639L63.9639 4.0249H79.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M98.9639 4.0249V48.0249H82.9639V4.0249H98.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M117.964 4.0249V48.0249H101.964V4.0249H117.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M39 4L39 48H23L23 4H39Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 4L20 48H4L4 4H20Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M60.8392 51.001L58.0732 47.895" stroke="#96A0B5" />
                        <path d="M82.8392 51.001L80.0732 47.895" stroke="#96A0B5" />
                        <path d="M39 51L42 48" stroke="#96A0B5" />
                        <path d="M61 51L64 48" stroke="#96A0B5" />
                        <path d="M101.839 51.001L99.0732 47.895" stroke="#96A0B5" />
                        <path d="M120.839 51.001L118.073 47.895" stroke="#96A0B5" />
                        <path d="M60.7184 1.35205L57.8184 4.27705" stroke="#96A0B5" />
                        <path d="M82.7184 1.35205L79.8184 4.27705" stroke="#96A0B5" />
                        <path d="M38.9389 1.35205L41.8389 4.27705" stroke="#96A0B5" />
                        <path d="M60.9389 1.35205L63.8389 4.27705" stroke="#96A0B5" />
                        <path d="M101.718 1.35205L98.8184 4.27705" stroke="#96A0B5" />
                        <path d="M120.718 1.35205L117.818 4.27705" stroke="#96A0B5" />
                        <path d="M20.0732 1.0249L23.2232 4.3009" stroke="#96A0B5" />
                        <path d="M1.07324 1.0249L4.22324 4.3009" stroke="#96A0B5" />
                        <path d="M20.0732 50.9999L22.9642 48.0249" stroke="#96A0B5" />
                        <path d="M1.07324 50.9999L3.96424 48.0249" stroke="#96A0B5" />
                        <path
                          d="M107.472 28.6034C107.528 28.578 107.575 28.5351 107.605 28.4811C107.635 28.427 107.647 28.3647 107.639 28.3033V28.1634L106.776 27.0124L106.104 26.1384L110.778 26.1493H113.465L113.565 26.0493C113.626 25.9611 113.659 25.8559 113.658 25.7484C113.657 25.6409 113.622 25.5364 113.559 25.4494L113.476 25.3544L110.776 25.3404L106.09 25.3263L106.995 24.4264C107.495 23.9264 107.917 23.4843 107.94 23.4323C107.961 23.3802 107.969 23.3234 107.96 23.2676C107.952 23.2118 107.929 23.1593 107.894 23.1156C107.858 23.0719 107.811 23.0385 107.758 23.0191C107.706 22.9997 107.648 22.995 107.593 23.0054C107.113 23.3929 106.664 23.8182 106.252 24.2773C105.046 25.4863 105 25.5354 105 25.6384C105 25.7024 105.014 25.7657 105.04 25.8244C105.103 25.9444 107.116 28.5774 107.208 28.6114C107.249 28.634 107.295 28.6453 107.341 28.6439C107.388 28.6424 107.433 28.6285 107.472 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M112.908 25.6645V32.4335L113.008 32.5335C113.082 32.5946 113.175 32.6273 113.271 32.6254C113.367 32.6236 113.459 32.5874 113.53 32.5235L113.623 32.4405L113.638 29.7405L113.647 25.6645H112.908Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M15.1862 28.6034C15.1297 28.578 15.083 28.5351 15.0529 28.4811C15.0228 28.427 15.011 28.3647 15.0192 28.3033V28.1634L15.8822 27.0124L16.5542 26.1384L11.8802 26.1493H9.1932L9.0932 26.0493C9.03181 25.9611 8.99941 25.8559 9.00048 25.7484C9.00156 25.6409 9.03606 25.5364 9.0992 25.4494L9.1822 25.3544L11.8822 25.3404L16.5682 25.3263L15.6632 24.4264C15.1632 23.9264 14.7412 23.4843 14.7182 23.4323C14.6967 23.3802 14.6897 23.3234 14.6979 23.2676C14.706 23.2118 14.7291 23.1593 14.7646 23.1156C14.8002 23.0719 14.8469 23.0385 14.8998 23.0191C14.9527 22.9997 15.0098 22.995 15.0652 23.0054C15.5454 23.3929 15.9939 23.8182 16.4062 24.2773C17.6122 25.4863 17.6582 25.5354 17.6582 25.6384C17.6577 25.7024 17.6441 25.7657 17.6182 25.8244C17.5552 25.9444 15.5422 28.5774 15.4502 28.6114C15.4096 28.634 15.3636 28.6453 15.3171 28.6439C15.2706 28.6424 15.2254 28.6285 15.1862 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M9.75 25.6645V32.4335L9.65 32.5335C9.57622 32.5946 9.48294 32.6273 9.38714 32.6254C9.29134 32.6236 9.19939 32.5874 9.128 32.5235L9.035 32.4405L9.02 29.7405L9.011 25.6645H9.75Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M48.472 28.6034C48.5285 28.578 48.5752 28.5351 48.6053 28.4811C48.6354 28.427 48.6472 28.3647 48.639 28.3033V28.1634L47.776 27.0124L47.104 26.1384L51.778 26.1493H54.465L54.565 26.0493C54.6264 25.9611 54.6588 25.8559 54.6577 25.7484C54.6566 25.6409 54.6221 25.5364 54.559 25.4494L54.476 25.3544L51.776 25.3404L47.09 25.3263L47.995 24.4264C48.495 23.9264 48.917 23.4843 48.94 23.4323C48.9615 23.3802 48.9685 23.3234 48.9603 23.2676C48.9522 23.2118 48.9291 23.1593 48.8936 23.1156C48.858 23.0719 48.8113 23.0385 48.7584 23.0191C48.7055 22.9997 48.6484 22.995 48.593 23.0054C48.1128 23.3929 47.6643 23.8182 47.252 24.2773C46.046 25.4863 46 25.5354 46 25.6384C46.0005 25.7024 46.0141 25.7657 46.04 25.8244C46.103 25.9444 48.116 28.5774 48.208 28.6114C48.2486 28.634 48.2946 28.6453 48.3411 28.6439C48.3876 28.6424 48.4328 28.6285 48.472 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M53.9082 25.6645V32.4335L54.0082 32.5335C54.082 32.5946 54.1753 32.6273 54.2711 32.6254C54.3669 32.6236 54.4588 32.5874 54.5302 32.5235L54.6232 32.4405L54.6382 29.7405L54.6472 25.6645H53.9082Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M36.0455 25.9521L34.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26 25.952H36.05L34.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M27.952 27.977L26 25.953L27.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M74.1862 28.6034C74.1297 28.578 74.083 28.5351 74.0529 28.4811C74.0228 28.427 74.011 28.3647 74.0192 28.3033V28.1634L74.8822 27.0124L75.5542 26.1384L70.8802 26.1493H68.1932L68.0932 26.0493C68.0318 25.9611 67.9994 25.8559 68.0005 25.7484C68.0016 25.6409 68.0361 25.5364 68.0992 25.4494L68.1822 25.3544L70.8822 25.3404L75.5682 25.3263L74.6632 24.4264C74.1632 23.9264 73.7412 23.4843 73.7182 23.4323C73.6967 23.3802 73.6897 23.3234 73.6979 23.2676C73.706 23.2118 73.7291 23.1593 73.7646 23.1156C73.8002 23.0719 73.8469 23.0385 73.8998 23.0191C73.9527 22.9997 74.0098 22.995 74.0652 23.0054C74.5454 23.3929 74.9939 23.8182 75.4062 24.2773C76.6122 25.4863 76.6582 25.5354 76.6582 25.6384C76.6577 25.7024 76.6441 25.7657 76.6182 25.8244C76.5552 25.9444 74.5422 28.5774 74.4502 28.6114C74.4096 28.634 74.3636 28.6453 74.3171 28.6439C74.2706 28.6424 74.2254 28.6285 74.1862 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M68.75 25.6645V32.4335L68.65 32.5335C68.5762 32.5946 68.4829 32.6273 68.3871 32.6254C68.2913 32.6236 68.1994 32.5874 68.128 32.5235L68.035 32.4405L68.02 29.7405L68.011 25.6645H68.75Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M96.0455 25.9521L94.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M86 25.952H96.05L94.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M87.952 27.977L86 25.953L87.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>`,
    [liftAndSlideIconKeys.L_AND_S_SIX_TRACK_SIX_PANEL]: `<svg width="119" height="52" viewBox="0 0 119 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.35547 22H1.35547V30H4.35547V22Z" fill="#96A0B5" />
                        <path d="M6.35547 26H4.35547V32H6.35547V26Z" fill="#96A0B5" />
                        <path d="M118 22H115V30H118V22Z" fill="#96A0B5" />
                        <path d="M115 26H113V32H115V26Z" fill="#96A0B5" />
                        <path
                          d="M23 1L23 51H0.999999L0.999999 1H23Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M42 1L42 51H23L23 1H42Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M61 1L61 51H42L42 1H61Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M80 1V51H61L61 1H80Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M99 1V51H80V1H99Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M118 1V51H99V1H118Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M38.9639 4.0249L38.9639 48.0249H22.9639L22.9639 4.0249H38.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M57.9639 4.0249L57.9639 48.0249H41.9639L41.9639 4.0249H57.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M76.9639 4.0249V48.0249H60.9639L60.9639 4.0249H76.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M95.9639 4.0249V48.0249H79.9639V4.0249H95.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M114.964 4.0249V48.0249H98.9639V4.0249H114.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 4L20 48H4L4 4H20Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M41.8392 51.001L39.0732 47.895" stroke="#96A0B5" />
                        <path d="M60.8392 51.001L58.0732 47.895" stroke="#96A0B5" />
                        <path d="M79.8392 51.001L77.0732 47.895" stroke="#96A0B5" />
                        <path d="M98.8392 51.001L96.0732 47.895" stroke="#96A0B5" />
                        <path d="M117.839 51.001L115.073 47.895" stroke="#96A0B5" />
                        <path d="M41.7184 1.35205L38.8184 4.27705" stroke="#96A0B5" />
                        <path d="M60.7184 1.35205L57.8184 4.27705" stroke="#96A0B5" />
                        <path d="M79.7184 1.35205L76.8184 4.27705" stroke="#96A0B5" />
                        <path d="M98.7184 1.35205L95.8184 4.27705" stroke="#96A0B5" />
                        <path d="M117.718 1.35205L114.818 4.27705" stroke="#96A0B5" />
                        <path d="M1.07324 1.0249L4.22324 4.3009" stroke="#96A0B5" />
                        <path d="M22.7193 1.35205L19.8193 4.27705" stroke="#96A0B5" />
                        <path d="M1.07324 50.9999L3.96424 48.0249" stroke="#96A0B5" />
                        <path d="M22.8392 51.001L20.0732 47.895" stroke="#96A0B5" />
                        <path
                          d="M104.472 28.6034C104.528 28.578 104.575 28.5351 104.605 28.4811C104.635 28.427 104.647 28.3647 104.639 28.3033V28.1634L103.776 27.0124L103.104 26.1384L107.778 26.1493H110.465L110.565 26.0493C110.626 25.9611 110.659 25.8559 110.658 25.7484C110.657 25.6409 110.622 25.5364 110.559 25.4494L110.476 25.3544L107.776 25.3404L103.09 25.3263L103.995 24.4264C104.495 23.9264 104.917 23.4843 104.94 23.4323C104.961 23.3802 104.969 23.3234 104.96 23.2676C104.952 23.2118 104.929 23.1593 104.894 23.1156C104.858 23.0719 104.811 23.0385 104.758 23.0191C104.706 22.9997 104.648 22.995 104.593 23.0054C104.113 23.3929 103.664 23.8182 103.252 24.2773C102.046 25.4863 102 25.5354 102 25.6384C102 25.7024 102.014 25.7657 102.04 25.8244C102.103 25.9444 104.116 28.5774 104.208 28.6114C104.249 28.634 104.295 28.6453 104.341 28.6439C104.388 28.6424 104.433 28.6285 104.472 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M109.908 25.6645V32.4335L110.008 32.5335C110.082 32.5946 110.175 32.6273 110.271 32.6254C110.367 32.6236 110.459 32.5874 110.53 32.5235L110.623 32.4405L110.638 29.7405L110.647 25.6645H109.908Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M15.1862 28.6034C15.1297 28.578 15.083 28.5351 15.0529 28.4811C15.0228 28.427 15.011 28.3647 15.0192 28.3033V28.1634L15.8822 27.0124L16.5542 26.1384L11.8802 26.1493H9.1932L9.0932 26.0493C9.03181 25.9611 8.99941 25.8559 9.00048 25.7484C9.00156 25.6409 9.03606 25.5364 9.0992 25.4494L9.1822 25.3544L11.8822 25.3404L16.5682 25.3263L15.6632 24.4264C15.1632 23.9264 14.7412 23.4843 14.7182 23.4323C14.6967 23.3802 14.6897 23.3234 14.6979 23.2676C14.706 23.2118 14.7291 23.1593 14.7646 23.1156C14.8002 23.0719 14.8469 23.0385 14.8998 23.0191C14.9527 22.9997 15.0098 22.995 15.0652 23.0054C15.5454 23.3929 15.9939 23.8182 16.4062 24.2773C17.6122 25.4863 17.6582 25.5354 17.6582 25.6384C17.6577 25.7024 17.6441 25.7657 17.6182 25.8244C17.5552 25.9444 15.5422 28.5774 15.4502 28.6114C15.4096 28.634 15.3636 28.6453 15.3171 28.6439C15.2706 28.6424 15.2254 28.6285 15.1862 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M9.75 25.6645V32.4335L9.65 32.5335C9.57622 32.5946 9.48294 32.6273 9.38714 32.6254C9.29134 32.6236 9.19939 32.5874 9.128 32.5235L9.035 32.4405L9.02 29.7405L9.011 25.6645H9.75Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M36.0455 25.9521L34.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26 25.952H36.05L34.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M27.952 27.977L26 25.953L27.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M55.0455 25.9521L53.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M45 25.952H55.05L53.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M46.952 27.977L45 25.953L46.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M74.0455 25.9521L72.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M64 25.952H74.05L72.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M65.952 27.977L64 25.953L65.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M93.0455 25.9521L91.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M83 25.952H93.05L91.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M84.952 27.977L83 25.953L84.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>`,
    [liftAndSlideIconKeys.L_AND_S_FOUR_TRACK_EIGHT_PANEL_MEETING]: `<svg width="160" height="52" viewBox="0 0 160 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.35547 22H1.35547V30H4.35547V22Z" fill="#96A0B5" />
                        <path d="M6.35547 26H4.35547V32H6.35547V26Z" fill="#96A0B5" />
                        <path d="M159 22H156V30H159V22Z" fill="#96A0B5" />
                        <path d="M156 26H154V32H156V26Z" fill="#96A0B5" />
                        <path d="M80 22H77V30H80V22Z" fill="#96A0B5" />
                        <path d="M77 26H75V32H77V26Z" fill="#96A0B5" />
                        <path
                          d="M58 1L58 51H39L39 1H58Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M39 1L39 51H20L20 1H39Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 1L20 51H0.999999L0.999999 1H20Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M80 1V51H58L58 1H80Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M102 1V51H80V1H102Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M121 1V51H102V1H121Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M140 1V51H121V1H140Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M159 1V51H140V1H159Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M76.9639 4.0249V48.0249H60.9639L60.9639 4.0249H76.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M98.9639 4.0249V48.0249H82.9639V4.0249H98.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M117.964 4.0249V48.0249H101.964V4.0249H117.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M136.964 4.0249V48.0249H120.964V4.0249H136.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M155.964 4.0249V48.0249H139.964V4.0249H155.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M58 4L58 48H42L42 4H58Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M39 4L39 48H23L23 4H39Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 4L20 48H4L4 4H20Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M79.8392 51.001L77.0732 47.895" stroke="#96A0B5" />
                        <path d="M101.839 51.001L99.0732 47.895" stroke="#96A0B5" />
                        <path d="M58 51L61 48" stroke="#96A0B5" />
                        <path d="M80 51L83 48" stroke="#96A0B5" />
                        <path d="M120.839 51.001L118.073 47.895" stroke="#96A0B5" />
                        <path d="M139.839 51.001L137.073 47.895" stroke="#96A0B5" />
                        <path d="M158.839 51.001L156.073 47.895" stroke="#96A0B5" />
                        <path d="M79.7184 1.35205L76.8184 4.27705" stroke="#96A0B5" />
                        <path d="M101.718 1.35205L98.8184 4.27705" stroke="#96A0B5" />
                        <path d="M57.9389 1.35205L60.8389 4.27705" stroke="#96A0B5" />
                        <path d="M79.9389 1.35205L82.8389 4.27705" stroke="#96A0B5" />
                        <path d="M120.718 1.35205L117.818 4.27705" stroke="#96A0B5" />
                        <path d="M139.718 1.35205L136.818 4.27705" stroke="#96A0B5" />
                        <path d="M158.718 1.35205L155.818 4.27705" stroke="#96A0B5" />
                        <path d="M39.0732 1.0249L42.2232 4.3009" stroke="#96A0B5" />
                        <path d="M20.0732 1.0249L23.2232 4.3009" stroke="#96A0B5" />
                        <path d="M1.07324 1.0249L4.22324 4.3009" stroke="#96A0B5" />
                        <path d="M39.0732 50.9999L41.9642 48.0249" stroke="#96A0B5" />
                        <path d="M20.0732 50.9999L22.9642 48.0249" stroke="#96A0B5" />
                        <path d="M1.07324 50.9999L3.96424 48.0249" stroke="#96A0B5" />
                        <path
                          d="M145.472 28.6034C145.528 28.578 145.575 28.5351 145.605 28.4811C145.635 28.427 145.647 28.3647 145.639 28.3033V28.1634L144.776 27.0124L144.104 26.1384L148.778 26.1493H151.465L151.565 26.0493C151.626 25.9611 151.659 25.8559 151.658 25.7484C151.657 25.6409 151.622 25.5364 151.559 25.4494L151.476 25.3544L148.776 25.3404L144.09 25.3263L144.995 24.4264C145.495 23.9264 145.917 23.4843 145.94 23.4323C145.961 23.3802 145.969 23.3234 145.96 23.2676C145.952 23.2118 145.929 23.1593 145.894 23.1156C145.858 23.0719 145.811 23.0385 145.758 23.0191C145.706 22.9997 145.648 22.995 145.593 23.0054C145.113 23.3929 144.664 23.8182 144.252 24.2773C143.046 25.4863 143 25.5354 143 25.6384C143 25.7024 143.014 25.7657 143.04 25.8244C143.103 25.9444 145.116 28.5774 145.208 28.6114C145.249 28.634 145.295 28.6453 145.341 28.6439C145.388 28.6424 145.433 28.6285 145.472 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M150.908 25.6645V32.4335L151.008 32.5335C151.082 32.5946 151.175 32.6273 151.271 32.6254C151.367 32.6236 151.459 32.5874 151.53 32.5235L151.623 32.4405L151.638 29.7405L151.647 25.6645H150.908Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M15.1862 28.6034C15.1297 28.578 15.083 28.5351 15.0529 28.4811C15.0228 28.427 15.011 28.3647 15.0192 28.3033V28.1634L15.8822 27.0124L16.5542 26.1384L11.8802 26.1493H9.1932L9.0932 26.0493C9.03181 25.9611 8.99941 25.8559 9.00048 25.7484C9.00156 25.6409 9.03606 25.5364 9.0992 25.4494L9.1822 25.3544L11.8822 25.3404L16.5682 25.3263L15.6632 24.4264C15.1632 23.9264 14.7412 23.4843 14.7182 23.4323C14.6967 23.3802 14.6897 23.3234 14.6979 23.2676C14.706 23.2118 14.7291 23.1593 14.7646 23.1156C14.8002 23.0719 14.8469 23.0385 14.8998 23.0191C14.9527 22.9997 15.0098 22.995 15.0652 23.0054C15.5454 23.3929 15.9939 23.8182 16.4062 24.2773C17.6122 25.4863 17.6582 25.5354 17.6582 25.6384C17.6577 25.7024 17.6441 25.7657 17.6182 25.8244C17.5552 25.9444 15.5422 28.5774 15.4502 28.6114C15.4096 28.634 15.3636 28.6453 15.3171 28.6439C15.2706 28.6424 15.2254 28.6285 15.1862 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M9.75 25.6645V32.4335L9.65 32.5335C9.57622 32.5946 9.48294 32.6273 9.38714 32.6254C9.29134 32.6236 9.19939 32.5874 9.128 32.5235L9.035 32.4405L9.02 29.7405L9.011 25.6645H9.75Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M67.472 28.6034C67.5285 28.578 67.5752 28.5351 67.6053 28.4811C67.6354 28.427 67.6472 28.3647 67.639 28.3033V28.1634L66.776 27.0124L66.104 26.1384L70.778 26.1493H73.465L73.565 26.0493C73.6264 25.9611 73.6588 25.8559 73.6577 25.7484C73.6566 25.6409 73.6221 25.5364 73.559 25.4494L73.476 25.3544L70.776 25.3404L66.09 25.3263L66.995 24.4264C67.495 23.9264 67.917 23.4843 67.94 23.4323C67.9615 23.3802 67.9685 23.3234 67.9603 23.2676C67.9522 23.2118 67.9291 23.1593 67.8936 23.1156C67.858 23.0719 67.8113 23.0385 67.7584 23.0191C67.7055 22.9997 67.6484 22.995 67.593 23.0054C67.1128 23.3929 66.6643 23.8182 66.252 24.2773C65.046 25.4863 65 25.5354 65 25.6384C65.0005 25.7024 65.0141 25.7657 65.04 25.8244C65.103 25.9444 67.116 28.5774 67.208 28.6114C67.2486 28.634 67.2946 28.6453 67.3411 28.6439C67.3876 28.6424 67.4328 28.6285 67.472 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M72.9082 25.6645V32.4335L73.0082 32.5335C73.082 32.5946 73.1753 32.6273 73.2711 32.6254C73.3669 32.6236 73.4588 32.5874 73.5302 32.5235L73.6232 32.4405L73.6382 29.7405L73.6472 25.6645H72.9082Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M55.0455 25.9521L53.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M45 25.952H55.05L53.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M46.952 27.977L45 25.953L46.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M36.0455 25.9521L34.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26 25.952H36.05L34.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M27.952 27.977L26 25.953L27.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M93.1862 28.6034C93.1297 28.578 93.083 28.5351 93.0529 28.4811C93.0228 28.427 93.011 28.3647 93.0192 28.3033V28.1634L93.8822 27.0124L94.5542 26.1384L89.8802 26.1493H87.1932L87.0932 26.0493C87.0318 25.9611 86.9994 25.8559 87.0005 25.7484C87.0016 25.6409 87.0361 25.5364 87.0992 25.4494L87.1822 25.3544L89.8822 25.3404L94.5682 25.3263L93.6632 24.4264C93.1632 23.9264 92.7412 23.4843 92.7182 23.4323C92.6967 23.3802 92.6897 23.3234 92.6979 23.2676C92.706 23.2118 92.7291 23.1593 92.7646 23.1156C92.8002 23.0719 92.8469 23.0385 92.8998 23.0191C92.9527 22.9997 93.0098 22.995 93.0652 23.0054C93.5454 23.3929 93.9939 23.8182 94.4062 24.2773C95.6122 25.4863 95.6582 25.5354 95.6582 25.6384C95.6577 25.7024 95.6441 25.7657 95.6182 25.8244C95.5552 25.9444 93.5422 28.5774 93.4502 28.6114C93.4096 28.634 93.3636 28.6453 93.3171 28.6439C93.2706 28.6424 93.2254 28.6285 93.1862 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M87.75 25.6645V32.4335L87.65 32.5335C87.5762 32.5946 87.4829 32.6273 87.3871 32.6254C87.2913 32.6236 87.1994 32.5874 87.128 32.5235L87.035 32.4405L87.02 29.7405L87.011 25.6645H87.75Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M115.045 25.9521L113.021 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M105 25.952H115.05L113.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M106.952 27.977L105 25.953L106.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M134.045 25.9521L132.021 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M124 25.952H134.05L132.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M125.952 27.977L124 25.953L125.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>`,
    [liftAndSlideIconKeys.L_AND_S_FIVE_TRACK_TEN_PANEL_MEETING]: `<svg width="198" height="52" viewBox="0 0 198 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.35547 22H1.35547V30H4.35547V22Z" fill="#96A0B5" />
                        <path d="M6.35547 26H4.35547V32H6.35547V26Z" fill="#96A0B5" />
                        <path d="M197 22H194V30H197V22Z" fill="#96A0B5" />
                        <path d="M194 26H192V32H194V26Z" fill="#96A0B5" />
                        <path d="M99 22H96V30H99V22Z" fill="#96A0B5" />
                        <path d="M96 26H94V32H96V26Z" fill="#96A0B5" />
                        <path
                          d="M77 1V51H58L58 1H77Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M58 1L58 51H39L39 1H58Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M39 1L39 51H20L20 1H39Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 1L20 51H0.999999L0.999999 1H20Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M99 1V51H77V1H99Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M121 1V51H99V1H121Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M140 1V51H121V1H140Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M159 1V51H140V1H159Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M178 1V51H159V1H178Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M197 1V51H178V1H197Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M95.9639 4.0249V48.0249H79.9639V4.0249H95.9639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M117.964 4.0249V48.0249H101.964V4.0249H117.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M136.964 4.0249V48.0249H120.964V4.0249H136.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M155.964 4.0249V48.0249H139.964V4.0249H155.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M174.964 4.0249V48.0249H158.964V4.0249H174.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M193.964 4.0249V48.0249H177.964V4.0249H193.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M77 4V48H61L61 4H77Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M58 4L58 48H42L42 4H58Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M39 4L39 48H23L23 4H39Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 4L20 48H4L4 4H20Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M98.8392 51.001L96.0732 47.895" stroke="#96A0B5" />
                        <path d="M120.839 51.001L118.073 47.895" stroke="#96A0B5" />
                        <path d="M77 51L80 48" stroke="#96A0B5" />
                        <path d="M99 51L102 48" stroke="#96A0B5" />
                        <path d="M139.839 51.001L137.073 47.895" stroke="#96A0B5" />
                        <path d="M158.839 51.001L156.073 47.895" stroke="#96A0B5" />
                        <path d="M177.839 51.001L175.073 47.895" stroke="#96A0B5" />
                        <path d="M196.839 51.001L194.073 47.895" stroke="#96A0B5" />
                        <path d="M98.7184 1.35205L95.8184 4.27705" stroke="#96A0B5" />
                        <path d="M120.718 1.35205L117.818 4.27705" stroke="#96A0B5" />
                        <path d="M76.9389 1.35205L79.8389 4.27705" stroke="#96A0B5" />
                        <path d="M98.9389 1.35205L101.839 4.27705" stroke="#96A0B5" />
                        <path d="M139.718 1.35205L136.818 4.27705" stroke="#96A0B5" />
                        <path d="M158.718 1.35205L155.818 4.27705" stroke="#96A0B5" />
                        <path d="M177.718 1.35205L174.818 4.27705" stroke="#96A0B5" />
                        <path d="M196.718 1.35205L193.818 4.27705" stroke="#96A0B5" />
                        <path d="M58.0732 1.0249L61.2232 4.3009" stroke="#96A0B5" />
                        <path d="M39.0732 1.0249L42.2232 4.3009" stroke="#96A0B5" />
                        <path d="M20.0732 1.0249L23.2232 4.3009" stroke="#96A0B5" />
                        <path d="M1.07324 1.0249L4.22324 4.3009" stroke="#96A0B5" />
                        <path d="M58.0732 50.9999L60.9642 48.0249" stroke="#96A0B5" />
                        <path d="M39.0732 50.9999L41.9642 48.0249" stroke="#96A0B5" />
                        <path d="M20.0732 50.9999L22.9642 48.0249" stroke="#96A0B5" />
                        <path d="M1.07324 50.9999L3.96424 48.0249" stroke="#96A0B5" />
                        <path
                          d="M183.472 28.6034C183.528 28.578 183.575 28.5351 183.605 28.4811C183.635 28.427 183.647 28.3647 183.639 28.3033V28.1634L182.776 27.0124L182.104 26.1384L186.778 26.1493H189.465L189.565 26.0493C189.626 25.9611 189.659 25.8559 189.658 25.7484C189.657 25.6409 189.622 25.5364 189.559 25.4494L189.476 25.3544L186.776 25.3404L182.09 25.3263L182.995 24.4264C183.495 23.9264 183.917 23.4843 183.94 23.4323C183.961 23.3802 183.969 23.3234 183.96 23.2676C183.952 23.2118 183.929 23.1593 183.894 23.1156C183.858 23.0719 183.811 23.0385 183.758 23.0191C183.706 22.9997 183.648 22.995 183.593 23.0054C183.113 23.3929 182.664 23.8182 182.252 24.2773C181.046 25.4863 181 25.5354 181 25.6384C181 25.7024 181.014 25.7657 181.04 25.8244C181.103 25.9444 183.116 28.5774 183.208 28.6114C183.249 28.634 183.295 28.6453 183.341 28.6439C183.388 28.6424 183.433 28.6285 183.472 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M188.908 25.6645V32.4335L189.008 32.5335C189.082 32.5946 189.175 32.6273 189.271 32.6254C189.367 32.6236 189.459 32.5874 189.53 32.5235L189.623 32.4405L189.638 29.7405L189.647 25.6645H188.908Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M15.1862 28.6034C15.1297 28.578 15.083 28.5351 15.0529 28.4811C15.0228 28.427 15.011 28.3647 15.0192 28.3033V28.1634L15.8822 27.0124L16.5542 26.1384L11.8802 26.1493H9.1932L9.0932 26.0493C9.03181 25.9611 8.99941 25.8559 9.00048 25.7484C9.00156 25.6409 9.03606 25.5364 9.0992 25.4494L9.1822 25.3544L11.8822 25.3404L16.5682 25.3263L15.6632 24.4264C15.1632 23.9264 14.7412 23.4843 14.7182 23.4323C14.6967 23.3802 14.6897 23.3234 14.6979 23.2676C14.706 23.2118 14.7291 23.1593 14.7646 23.1156C14.8002 23.0719 14.8469 23.0385 14.8998 23.0191C14.9527 22.9997 15.0098 22.995 15.0652 23.0054C15.5454 23.3929 15.9939 23.8182 16.4062 24.2773C17.6122 25.4863 17.6582 25.5354 17.6582 25.6384C17.6577 25.7024 17.6441 25.7657 17.6182 25.8244C17.5552 25.9444 15.5422 28.5774 15.4502 28.6114C15.4096 28.634 15.3636 28.6453 15.3171 28.6439C15.2706 28.6424 15.2254 28.6285 15.1862 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M9.75 25.6645V32.4335L9.65 32.5335C9.57622 32.5946 9.48294 32.6273 9.38714 32.6254C9.29134 32.6236 9.19939 32.5874 9.128 32.5235L9.035 32.4405L9.02 29.7405L9.011 25.6645H9.75Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M86.472 28.6034C86.5285 28.578 86.5752 28.5351 86.6053 28.4811C86.6354 28.427 86.6472 28.3647 86.639 28.3033V28.1634L85.776 27.0124L85.104 26.1384L89.778 26.1493H92.465L92.565 26.0493C92.6264 25.9611 92.6588 25.8559 92.6577 25.7484C92.6566 25.6409 92.6221 25.5364 92.559 25.4494L92.476 25.3544L89.776 25.3404L85.09 25.3263L85.995 24.4264C86.495 23.9264 86.917 23.4843 86.94 23.4323C86.9615 23.3802 86.9685 23.3234 86.9603 23.2676C86.9522 23.2118 86.9291 23.1593 86.8936 23.1156C86.858 23.0719 86.8113 23.0385 86.7584 23.0191C86.7055 22.9997 86.6484 22.995 86.593 23.0054C86.1128 23.3929 85.6643 23.8182 85.252 24.2773C84.046 25.4863 84 25.5354 84 25.6384C84.0005 25.7024 84.0141 25.7657 84.04 25.8244C84.103 25.9444 86.116 28.5774 86.208 28.6114C86.2486 28.634 86.2946 28.6453 86.3411 28.6439C86.3876 28.6424 86.4328 28.6285 86.472 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M91.9082 25.6645V32.4335L92.0082 32.5335C92.082 32.5946 92.1753 32.6273 92.2711 32.6254C92.3669 32.6236 92.4588 32.5874 92.5302 32.5235L92.6232 32.4405L92.6382 29.7405L92.6472 25.6645H91.9082Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M74.0455 25.9521L72.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M64 25.952H74.05L72.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M65.952 27.977L64 25.953L65.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M55.0455 25.9521L53.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M45 25.952H55.05L53.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M46.952 27.977L45 25.953L46.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M36.0455 25.9521L34.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26 25.952H36.05L34.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M27.952 27.977L26 25.953L27.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M112.186 28.6034C112.13 28.578 112.083 28.5351 112.053 28.4811C112.023 28.427 112.011 28.3647 112.019 28.3033V28.1634L112.882 27.0124L113.554 26.1384L108.88 26.1493H106.193L106.093 26.0493C106.032 25.9611 105.999 25.8559 106 25.7484C106.002 25.6409 106.036 25.5364 106.099 25.4494L106.182 25.3544L108.882 25.3404L113.568 25.3263L112.663 24.4264C112.163 23.9264 111.741 23.4843 111.718 23.4323C111.697 23.3802 111.69 23.3234 111.698 23.2676C111.706 23.2118 111.729 23.1593 111.765 23.1156C111.8 23.0719 111.847 23.0385 111.9 23.0191C111.953 22.9997 112.01 22.995 112.065 23.0054C112.545 23.3929 112.994 23.8182 113.406 24.2773C114.612 25.4863 114.658 25.5354 114.658 25.6384C114.658 25.7024 114.644 25.7657 114.618 25.8244C114.555 25.9444 112.542 28.5774 112.45 28.6114C112.41 28.634 112.364 28.6453 112.317 28.6439C112.271 28.6424 112.225 28.6285 112.186 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M106.75 25.6645V32.4335L106.65 32.5335C106.576 32.5946 106.483 32.6273 106.387 32.6254C106.291 32.6236 106.199 32.5874 106.128 32.5235L106.035 32.4405L106.02 29.7405L106.011 25.6645H106.75Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M134.045 25.9521L132.021 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M124 25.952H134.05L132.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M125.952 27.977L124 25.953L125.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M153.045 25.9521L151.021 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M143 25.952H153.05L151.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M144.952 27.977L143 25.953L144.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M172.045 25.9521L170.021 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M162 25.952H172.05L170.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M163.952 27.977L162 25.953L163.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>`,
    [liftAndSlideIconKeys.L_AND_S_SIX_TRACK_TWELVE_PANEL_MEETING]: `<svg width="236" height="52" viewBox="0 0 236 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.35547 22H1.35547V30H4.35547V22Z" fill="#96A0B5" />
                        <path d="M6.35547 26H4.35547V32H6.35547V26Z" fill="#96A0B5" />
                        <path d="M235 22H232V30H235V22Z" fill="#96A0B5" />
                        <path d="M232 26H230V32H232V26Z" fill="#96A0B5" />
                        <path d="M118 22H115V30H118V22Z" fill="#96A0B5" />
                        <path d="M115 26H113V32H115V26Z" fill="#96A0B5" />
                        <path
                          d="M96 1V51H77V1H96Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M77 1V51H58L58 1H77Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M58 1L58 51H39L39 1H58Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M39 1L39 51H20L20 1H39Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 1L20 51H0.999999L0.999999 1H20Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M118 1V51H96V1H118Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M140 1V51H118V1H140Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M159 1V51H140V1H159Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M178 1V51H159V1H178Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M197 1V51H178V1H197Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M216 1V51H197V1H216Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M235 1V51H216V1H235Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M114.964 4.0249V48.0249H98.9639V4.0249H114.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M136.964 4.0249V48.0249H120.964V4.0249H136.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M155.964 4.0249V48.0249H139.964V4.0249H155.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M174.964 4.0249V48.0249H158.964V4.0249H174.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M193.964 4.0249V48.0249H177.964V4.0249H193.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M212.964 4.0249V48.0249H196.964V4.0249H212.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M231.964 4.0249V48.0249H215.964V4.0249H231.964Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M96 4V48H80V4H96Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M77 4V48H61L61 4H77Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M58 4L58 48H42L42 4H58Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M39 4L39 48H23L23 4H39Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M20 4L20 48H4L4 4H20Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path d="M117.839 51.001L115.073 47.895" stroke="#96A0B5" />
                        <path d="M139.839 51.001L137.073 47.895" stroke="#96A0B5" />
                        <path d="M96 51L99 48" stroke="#96A0B5" />
                        <path d="M118 51L121 48" stroke="#96A0B5" />
                        <path d="M158.839 51.001L156.073 47.895" stroke="#96A0B5" />
                        <path d="M177.839 51.001L175.073 47.895" stroke="#96A0B5" />
                        <path d="M196.839 51.001L194.073 47.895" stroke="#96A0B5" />
                        <path d="M215.839 51.001L213.073 47.895" stroke="#96A0B5" />
                        <path d="M234.839 51.001L232.073 47.895" stroke="#96A0B5" />
                        <path d="M117.718 1.35205L114.818 4.27705" stroke="#96A0B5" />
                        <path d="M139.718 1.35205L136.818 4.27705" stroke="#96A0B5" />
                        <path d="M95.9389 1.35205L98.8389 4.27705" stroke="#96A0B5" />
                        <path d="M117.939 1.35205L120.839 4.27705" stroke="#96A0B5" />
                        <path d="M158.718 1.35205L155.818 4.27705" stroke="#96A0B5" />
                        <path d="M177.718 1.35205L174.818 4.27705" stroke="#96A0B5" />
                        <path d="M196.718 1.35205L193.818 4.27705" stroke="#96A0B5" />
                        <path d="M215.718 1.35205L212.818 4.27705" stroke="#96A0B5" />
                        <path d="M234.718 1.35205L231.818 4.27705" stroke="#96A0B5" />
                        <path d="M77.0732 1.0249L80.2232 4.3009" stroke="#96A0B5" />
                        <path d="M58.0732 1.0249L61.2232 4.3009" stroke="#96A0B5" />
                        <path d="M39.0732 1.0249L42.2232 4.3009" stroke="#96A0B5" />
                        <path d="M20.0732 1.0249L23.2232 4.3009" stroke="#96A0B5" />
                        <path d="M1.07324 1.0249L4.22324 4.3009" stroke="#96A0B5" />
                        <path d="M77.0732 50.9999L79.9642 48.0249" stroke="#96A0B5" />
                        <path d="M58.0732 50.9999L60.9642 48.0249" stroke="#96A0B5" />
                        <path d="M39.0732 50.9999L41.9642 48.0249" stroke="#96A0B5" />
                        <path d="M20.0732 50.9999L22.9642 48.0249" stroke="#96A0B5" />
                        <path d="M1.07324 50.9999L3.96424 48.0249" stroke="#96A0B5" />
                        <path
                          d="M221.472 28.6034C221.528 28.578 221.575 28.5351 221.605 28.4811C221.635 28.427 221.647 28.3647 221.639 28.3033V28.1634L220.776 27.0124L220.104 26.1384L224.778 26.1493H227.465L227.565 26.0493C227.626 25.9611 227.659 25.8559 227.658 25.7484C227.657 25.6409 227.622 25.5364 227.559 25.4494L227.476 25.3544L224.776 25.3404L220.09 25.3263L220.995 24.4264C221.495 23.9264 221.917 23.4843 221.94 23.4323C221.961 23.3802 221.969 23.3234 221.96 23.2676C221.952 23.2118 221.929 23.1593 221.894 23.1156C221.858 23.0719 221.811 23.0385 221.758 23.0191C221.706 22.9997 221.648 22.995 221.593 23.0054C221.113 23.3929 220.664 23.8182 220.252 24.2773C219.046 25.4863 219 25.5354 219 25.6384C219 25.7024 219.014 25.7657 219.04 25.8244C219.103 25.9444 221.116 28.5774 221.208 28.6114C221.249 28.634 221.295 28.6453 221.341 28.6439C221.388 28.6424 221.433 28.6285 221.472 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M226.908 25.6645V32.4335L227.008 32.5335C227.082 32.5946 227.175 32.6273 227.271 32.6254C227.367 32.6236 227.459 32.5874 227.53 32.5235L227.623 32.4405L227.638 29.7405L227.647 25.6645H226.908Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M15.1862 28.6034C15.1297 28.578 15.083 28.5351 15.0529 28.4811C15.0228 28.427 15.011 28.3647 15.0192 28.3033V28.1634L15.8822 27.0124L16.5542 26.1384L11.8802 26.1493H9.1932L9.0932 26.0493C9.03181 25.9611 8.99941 25.8559 9.00048 25.7484C9.00156 25.6409 9.03606 25.5364 9.0992 25.4494L9.1822 25.3544L11.8822 25.3404L16.5682 25.3263L15.6632 24.4264C15.1632 23.9264 14.7412 23.4843 14.7182 23.4323C14.6967 23.3802 14.6897 23.3234 14.6979 23.2676C14.706 23.2118 14.7291 23.1593 14.7646 23.1156C14.8002 23.0719 14.8469 23.0385 14.8998 23.0191C14.9527 22.9997 15.0098 22.995 15.0652 23.0054C15.5454 23.3929 15.9939 23.8182 16.4062 24.2773C17.6122 25.4863 17.6582 25.5354 17.6582 25.6384C17.6577 25.7024 17.6441 25.7657 17.6182 25.8244C17.5552 25.9444 15.5422 28.5774 15.4502 28.6114C15.4096 28.634 15.3636 28.6453 15.3171 28.6439C15.2706 28.6424 15.2254 28.6285 15.1862 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M9.75 25.6645V32.4335L9.65 32.5335C9.57622 32.5946 9.48294 32.6273 9.38714 32.6254C9.29134 32.6236 9.19939 32.5874 9.128 32.5235L9.035 32.4405L9.02 29.7405L9.011 25.6645H9.75Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M105.472 28.6034C105.528 28.578 105.575 28.5351 105.605 28.4811C105.635 28.427 105.647 28.3647 105.639 28.3033V28.1634L104.776 27.0124L104.104 26.1384L108.778 26.1493H111.465L111.565 26.0493C111.626 25.9611 111.659 25.8559 111.658 25.7484C111.657 25.6409 111.622 25.5364 111.559 25.4494L111.476 25.3544L108.776 25.3404L104.09 25.3263L104.995 24.4264C105.495 23.9264 105.917 23.4843 105.94 23.4323C105.961 23.3802 105.969 23.3234 105.96 23.2676C105.952 23.2118 105.929 23.1593 105.894 23.1156C105.858 23.0719 105.811 23.0385 105.758 23.0191C105.706 22.9997 105.648 22.995 105.593 23.0054C105.113 23.3929 104.664 23.8182 104.252 24.2773C103.046 25.4863 103 25.5354 103 25.6384C103 25.7024 103.014 25.7657 103.04 25.8244C103.103 25.9444 105.116 28.5774 105.208 28.6114C105.249 28.634 105.295 28.6453 105.341 28.6439C105.388 28.6424 105.433 28.6285 105.472 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M110.908 25.6645V32.4335L111.008 32.5335C111.082 32.5946 111.175 32.6273 111.271 32.6254C111.367 32.6236 111.459 32.5874 111.53 32.5235L111.623 32.4405L111.638 29.7405L111.647 25.6645H110.908Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M93.0455 25.9521L91.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M83 25.952H93.05L91.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M84.952 27.977L83 25.953L84.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M74.0455 25.9521L72.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M64 25.952H74.05L72.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M65.952 27.977L64 25.953L65.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M55.0455 25.9521L53.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M45 25.952H55.05L53.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M46.952 27.977L45 25.953L46.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M36.0455 25.9521L34.0215 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M26 25.952H36.05L34.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M27.952 27.977L26 25.953L27.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M131.186 28.6034C131.13 28.578 131.083 28.5351 131.053 28.4811C131.023 28.427 131.011 28.3647 131.019 28.3033V28.1634L131.882 27.0124L132.554 26.1384L127.88 26.1493H125.193L125.093 26.0493C125.032 25.9611 124.999 25.8559 125 25.7484C125.002 25.6409 125.036 25.5364 125.099 25.4494L125.182 25.3544L127.882 25.3404L132.568 25.3263L131.663 24.4264C131.163 23.9264 130.741 23.4843 130.718 23.4323C130.697 23.3802 130.69 23.3234 130.698 23.2676C130.706 23.2118 130.729 23.1593 130.765 23.1156C130.8 23.0719 130.847 23.0385 130.9 23.0191C130.953 22.9997 131.01 22.995 131.065 23.0054C131.545 23.3929 131.994 23.8182 132.406 24.2773C133.612 25.4863 133.658 25.5354 133.658 25.6384C133.658 25.7024 133.644 25.7657 133.618 25.8244C133.555 25.9444 131.542 28.5774 131.45 28.6114C131.41 28.634 131.364 28.6453 131.317 28.6439C131.271 28.6424 131.225 28.6285 131.186 28.6034Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M125.75 25.6645V32.4335L125.65 32.5335C125.576 32.5946 125.483 32.6273 125.387 32.6254C125.291 32.6236 125.199 32.5874 125.128 32.5235L125.035 32.4405L125.02 29.7405L125.011 25.6645H125.75Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M153.045 25.9521L151.021 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M143 25.952H153.05L151.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M144.952 27.977L143 25.953L144.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M172.045 25.9521L170.021 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M162 25.952H172.05L170.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M163.952 27.977L162 25.953L163.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M191.045 25.9521L189.021 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M181 25.952H191.05L189.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M182.952 27.977L181 25.953L182.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M210.045 25.9521L208.021 27.9761"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M200 25.952H210.05L208.026 24"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M201.952 27.977L200 25.953L201.952 24.001"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>`,
  },
};
