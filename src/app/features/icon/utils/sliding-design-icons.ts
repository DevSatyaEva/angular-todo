import { IconPrefix, IconPrefixType } from '../models/icon.model';
// *ngIf="viewHandleFromOutside" remove from the svg after added the conditional in the template

export const slidingDesignIconKeys = {
  TWO_TRACK_TWO_PANEL: 'twoTrackTwoPanel',
  TWO_TRACK_XTWO_XX_PANEL: 'twoTrackXtwoXXPanel',
  TWO_TRACK_X_X_X_PANEL: 'twoTrackXXXPanel',
  THREE_TRACK_THREE_PANEL: 'threeTrackThreePanel',
  TWO_TRACK_FOUR_PANEL_MEETING: 'twoTrackFourPanelMeeting', // this is outside view for inside need to be flipped(by conditional)
  FOUR_TRACK_FOUR_PANEL: 'fourTrackFourPanel',
  THREE_TRACK_FIVE_PANEL_MEETING_BOTH_LEFT: 'threeTrackFivePanelMeetingBothLeft', // this outside view for inside need to be flipped(by conditional)
  THREE_TRACK_FIVE_PANEL_MEETING_BOTH_RIGHT: 'threeTrackFivePanelMeetingBothRight', // this outside view for inside need to be flipped(by conditional)
  FIVE_TRACK_FIVE_PANEL: 'fiveTrackFivePanel',
  TWO_TRACK_SIX_PANEL_MEETING: 'twoTrackSixPanelMeeting', // this outside view for inside need to be flipped(by conditional)
  THREE_TRACK_SIX_PANEL_MEETING: 'threeTrackSixPanelMeeting', // this outside view for inside need to be flipped(by conditional)
  SIX_TRACK_SIX_PANEL: 'sixTrackSixPanel',
  SEVEN_TRACK_SEVEN_PANEL: 'sevenTrackSevenPanel',
  EIGHT_TRACK_EIGHT_PANEL: 'eightTrackEightPanel',
  FOUR_TRACK_EIGHT_PANEL_MEETING: 'fourTrackEightPanelMeeting', // this outside view for inside need to be flipped(by conditional)
  FIVE_TRACK_TEN_PANEL_MEETING: 'fiveTrackTenPanelMeeting', // this outside view for inside need to be flipped(by conditional)
  SIX_TRACK_TWELVE_PANEL_MEETING: 'sixTrackTwelvePanelMeeting', // this outside view for inside need to be flipped(by conditional)

  //verticalSlidingDesign
  VERTICAL_TWO_TRACK_TWO_PANEL_TOP_FIX: 'verticalTwoTrackTwoPanelTopFix',
  VERTICAL_TWO_TRACK_TWO_PANEL_BOTTOM_FIX: 'verticalTwoTrackTwoPanelBottomFix',

  VERTICAL_THREE_TRACK_THREE_PANEL_TOP_FIX: 'verticalThreeTrackThreePanelTopFix',
  VERTICAL_THREE_TRACK_THREE_PANEL_BOTTOM_FIX: 'verticalThreeTrackThreePanelBottomFix',

  VERTICAL_FOUR_TRACK_FOUR_PANEL_TOP_FIX: 'verticalFourTrackFourPanelTopFix',
  VERTICAL_FOUR_TRACK_FOUR_PANEL_BOTTOM_FIX: 'verticalFourTrackFourPanelBottomFix',

  VERTICAL_TWO_TRACK_THREE_PANEL_BOTTOM_MEETING: 'verticalTwoTrackThreePanelBottomMeeting',
  VERTICAL_TWO_TRACK_THREE_PANEL_TOP_MEETING: 'verticalTwoTrackThreePanelTopMeeting',

  // telescopicSlidingDesignIconKeys
  TELESCOPIC_THREE_TRACK_THREE_PANEL_LEFT_OPENING: 'telescopicThreeTrackThreePanelLeftOpening', //telescopicThreeTrackThreePanelRightOpening can  be done by its mirror ( and left's own mirror)
  TELESCOPIC_THREE_TRACK_THREE_PANEL: 'telescopicThreeTrackThreePanel',

  TELESCOPIC_FOUR_TRACK_FOUR_PANEL_LEFT_OPENING: 'telescopicFourTrackFourPanelLeftOpening', //telescopicFourTrackFourPanelRightOpening can  be done by its mirror ( and left's own mirror)
  TELESCOPIC_FOUR_TRACK_FOUR_PANEL: 'telescopicFourTrackFourPanel',

  TELESCOPIC_FIVE_TRACK_FIVE_PANEL_LEFT_OPENING: 'telescopicFiveTrackFivePanelLeftOpening', // telescopicFiveTrackFivePanelRightOpening can  be done by its mirror ( and left's own mirror)
  TELESCOPIC_FIVE_TRACK_FIVE_PANEL: 'telescopicFiveTrackFivePanel',

  TELESCOPIC_THREE_TRACK_SIX_PANEL: 'telescopicThreeTrackSixPanel', // This image can be mirrored for inside view

  TELESCOPIC_SIX_TRACK_SIX_PANEL_LEFT_OPENING: 'telescopicSixTrackSixPanelLeftOpening', // telescopicSixTrackSixPanelRightOpening can  be done by its mirror ( and left's own mirror)

  TELESCOPIC_SIX_TRACK_SIX_PANEL: 'telescopicSixTrackSixPanel',
  TELESCOPIC_FOUR_TRACK_EIGHT_PANEL: 'telescopicFourTrackEightPanel',

  //synchronizeDesignIconKeys  ( each of its mirror image can be done by its mirror) total 10 svgs
  SYNCHRONIZE_TWO_TRACK_FOUR_PANEL: 'synchronizeTwoTrackFourPanel',
  SYNCHRONIZE_THREE_TRACK_SIX_PANEL: 'synchronizeThreeTrackSixPanel',
  SYNCHRONIZE_FOUR_TRACK_EIGHT_PANEL: 'synchronizeFourTrackEightPanel',

  TELESCOPIC_SYNCHRONIZE_THREE_TRACK_SIX_PANEL: 'telescopicSynchronizeThreeTrackSixPanel',
  TELESCOPIC_SYNCHRONIZE_FOUR_TRACK_EIGHT_PANEL: 'telescopicSynchronizeFourTrackEightPanel',

  //InvisibleSlidingDesignIconKeys
  //kept invisibleSlidingLeftOpening, for invisibleSlidingLeftOpening and invisibleSlidingRightOpening do the mirror (flip) image of this and for invisibleSlidingRightOpening, keep the same svg (both invisibleSlidingLeftOpening, invisibleSlidingRightOpening have the same svg)
  INVISIBLE_SLIDING_LEFT_OPENING: 'invisibleSlidingLeftOpening',
  INVISIBLE_SLIDING_CENTER_OPENING: 'invisibleSlidingCenterOpening',
};

export type IconKey = typeof slidingDesignIconKeys[keyof typeof slidingDesignIconKeys];

export const SLIDING_DESIGN_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.SLIDING_DESIGN]: {
    [slidingDesignIconKeys.TWO_TRACK_TWO_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="77" height="51" viewBox="0 0 77.215 51">
                        <g id="Group_41637" data-name="Group 41637" transform="translate(-90.343 -105.5)">
                          <g id="Group_37620" data-name="Group 37620" transform="translate(7619.163 13699.841)">
                            <g id="Group_37449" data-name="Group 37449">
                              <path
                                id="path90"
                                d="M186.151-910.8H172.48l3.121-3.12"
                                transform="translate(-7652.515 -12657.621)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <path
                                id="path92"
                                d="M172.48-907.2l3.121,3.121"
                                transform="translate(-7652.439 -12661.251)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                            </g>
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
                              id="path88"
                              d="M124.081-907.2l-3.121,3.121"
                              transform="translate(-7624.621 -12661.251)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path86"
                              d="M98.24-910.8h13.671l-3.121-3.12"
                              transform="translate(-7612.375 -12657.621)"
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
                          <g id="Group_37627" data-name="Group 37627">
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
                          <g id="Group_37628" data-name="Group 37628" transform="translate(162 126)">
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
    [slidingDesignIconKeys.TWO_TRACK_XTWO_XX_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="77" height="51" viewBox="0 0 77.215 51">
                      <g id="Group_41638" data-name="Group 41638" transform="translate(-180.392 -104.5)">
                        <g id="Group_14207" data-name="Group 14207" transform="translate(7252.732 13699)">
                          <path
                            id="path180"
                            d="M662.628-910.927H653.92l3.153-3.153"
                            transform="translate(-7666.209 -12657.637)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path182"
                            d="M653.92-907.36l3.153,3.153"
                            transform="translate(-7533.501 -12578.855) rotate(-8)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path188"
                            d="M664.035-912.061V-955.68H647.52v43.619h16.515"
                            transform="translate(-7662.813 -12635.092)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path190"
                            d="M640.64-962.56v50"
                            transform="translate(-7658.724 -12631.44)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path178"
                            d="M600-907.774l3.153-3.153L600-914.08"
                            transform="translate(-6816.044 -12498.003) rotate(-45)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path184"
                            d="M609.873-907.774l-3.153-3.153,3.153-3.153"
                            transform="translate(-6818.611 -12495.437) rotate(-45)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path192"
                            d="M572.64-962.56v50"
                            transform="translate(-7622.02 -12631.44)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path194"
                            d="M603.984-955.68h-30.75"
                            transform="translate(-7622.324 -12635.092)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path196"
                            d="M573.359-860.64h30.625"
                            transform="translate(-7622.324 -12686.513)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path176"
                            d="M554.833-907.36l-3.153,3.153"
                            transform="translate(-7610.718 -12661.268)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path174"
                            d="M540-910.927h8.633l-3.153-3.153"
                            transform="translate(-7604.258 -12657.637)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path186"
                            d="M530.72-912.061V-955.68h16.44v43.619H530.72"
                            transform="translate(-7599.332 -12635.092)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <path
                            id="path172"
                            d="M523.84-912.56v-50h76.215v50H523.84"
                            transform="translate(-7595.68 -12631.44)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                        </g>
                        <g id="Group_37629" data-name="Group 37629" transform="translate(90 -1)">
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
                        <g id="Group_37630" data-name="Group 37630" transform="translate(252 125)">
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
    [slidingDesignIconKeys.TWO_TRACK_X_X_X_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="71" height="51" viewBox="0 0 71 51">
                        <g id="Group_178871" data-name="Group 178871" transform="translate(-270.799 -203.5)">
                          <g id="Group_178857" data-name="Group 178857" transform="translate(271.299 204)">
                            <g id="Group_41729" data-name="Group 41729" transform="translate(0 0)">
                              <path
                                id="path66"
                                d="M0,50V0H70V50H0"
                                transform="translate(69.999 50) rotate(180)"
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
                                d="M0,50V0H22.682V50H0"
                                transform="translate(70 50) rotate(180)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <g id="Group_41720" data-name="Group 41720" transform="translate(0 20.014)">
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
                              <g id="Group_41726" data-name="Group 41726" transform="translate(64.999 21.014)">
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
                                id="path66-3"
                                data-name="path66"
                                d="M0,50V0H21.745V50H0"
                                transform="translate(21.745 50) rotate(180)"
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
                                d="M0,44.048V0H19.245V44.048H0"
                                transform="translate(21.745 47.038) rotate(180)"
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
                                d="M0,44.048V0H19.175V44.048H0"
                                transform="translate(44.021 47.038) rotate(180)"
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
                                d="M0,44.048V0H20.181V44.048H0"
                                transform="translate(67.499 47.024) rotate(180)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <g
                                id="Group_178858"
                                data-name="Group 178858"
                                transform="translate(34.452 21.244) rotate(45)"
                              >
                                <path
                                  id="path178"
                                  d="M0,5.265,2.632,2.633,0,0"
                                  transform="translate(0 0)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="1"
                                />
                                <path
                                  id="path184"
                                  d="M2.632,5.264,0,2.632,2.632,0"
                                  transform="translate(2.58 0.001)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-linecap="round"
                                  stroke-linejoin="round"
                                  stroke-miterlimit="10"
                                  stroke-width="1"
                                />
                              </g>
                            </g>
                            <g id="Group_53668" data-name="Group 53668" transform="translate(16.071 22.782) rotate(90)">
                              <path
                                id="path258"
                                d="M8.712,2.151H0L1.692,0"
                                transform="translate(4.381 0) rotate(90)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <path
                                id="path260"
                                d="M0,0,1.692,2.23"
                                transform="translate(2.23 0) rotate(90)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                            </g>
                            <g
                              id="Group_178859"
                              data-name="Group 178859"
                              transform="translate(61.718 22.783) rotate(90)"
                            >
                              <path
                                id="path258-2"
                                data-name="path258"
                                d="M8.712,0H0L1.692,2.151"
                                transform="translate(2.231 8.712) rotate(-90)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                              <path
                                id="path260-2"
                                data-name="path260"
                                d="M0,2.23,1.692,0"
                                transform="translate(0 8.712) rotate(-90)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-miterlimit="10"
                                stroke-width="1"
                              />
                            </g>
                          </g>
                        </g>
                      </svg>`,
    [slidingDesignIconKeys.THREE_TRACK_THREE_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="71" height="51" viewBox="0 0 71 51">
                      <g id="Group_53673" data-name="Group 53673" transform="translate(-570.5 -981.5)">
                        <g id="Group_41729" data-name="Group 41729" transform="translate(224.057 486.014)">
                          <path
                            id="path66"
                            d="M0,50V0H70V50H0"
                            transform="translate(416.943 545.986) rotate(180)"
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
                            transform="translate(416.943 545.986) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                          <g id="Group_41720" data-name="Group 41720" transform="translate(346.943 516)">
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
                          <g id="Group_41726" data-name="Group 41726" transform="translate(411.943 516)">
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
                            id="path66-3"
                            data-name="path66"
                            d="M0,50V0H23.333V50H0"
                            transform="translate(393.61 545.986) rotate(180)"
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
                            d="M0,50V0H23.333V50H0"
                            transform="translate(370.276 545.986) rotate(180)"
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
                            d="M0,44.048V0H17.292V44.048H0"
                            transform="translate(367.266 543.022) rotate(180)"
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
                            d="M0,44.048V0H20.361V44.048H0"
                            transform="translate(390.637 543.022) rotate(180)"
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
                            d="M0,44.048V0H20.336V44.048H0"
                            transform="translate(413.946 543.022) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-miterlimit="10"
                            stroke-width="1"
                          />
                        </g>
                        <g id="Group_53672" data-name="Group 53672" transform="translate(0.689)">
                          <g id="Group_53671" data-name="Group 53671" transform="translate(-270.015 11.575)">
                            <path
                              id="path100"
                              d="M389.519-680.8l-3.119,3.045"
                              transform="translate(491.328 1676.332)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path98"
                              d="M363.68-684.4h13.665l-3.119-3.119"
                              transform="translate(503.503 1679.959)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path106"
                              d="M366.8-681.356,363.68-684.4l3.119-3.119"
                              transform="translate(503.503 1679.945)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                          </g>
                          <g id="Group_53668" data-name="Group 53668" transform="translate(619.5 982.5) rotate(90)">
                            <path
                              id="path258"
                              d="M11.072,2.151H0L2.151,0"
                              transform="translate(26.881 31.117) rotate(90)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path260"
                              d="M0,0,2.151,2.23"
                              transform="translate(24.73 31.117) rotate(90)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                          </g>
                          <g id="Group_53666" data-name="Group 53666" transform="translate(641 982.5) rotate(90)">
                            <path
                              id="path258-2"
                              data-name="path258"
                              d="M11.072,0H0L2.151,2.151"
                              transform="translate(24.731 18.883) rotate(-90)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path260-2"
                              data-name="path260"
                              d="M0,2.23,2.151,0"
                              transform="translate(22.5 18.883) rotate(-90)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                          </g>
                        </g>
                      </g>
                    </svg>`,
    [slidingDesignIconKeys.TWO_TRACK_FOUR_PANEL_MEETING]: `<svg
                    *ngIf="viewHandleFromOutside"
                    width="77"
                    height="51"
                    viewBox="0 0 77 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_493_218)">
                      <path
                        d="M0.5 0.5V50.5"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.0576 3.53711H3.53761V47.3911H17.0576"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M59.6802 3.26514H73.2002V47.1191H59.6802"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.26074 28.7431L5.30875 26.7191L7.26074 24.7671"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M5.3084 26.7181H15.3584L13.3344 24.7661"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15.3584 26.7183L13.3344 28.7422"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M0.49762 0.5H17.0576"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M0.49762 50.5H17.0576"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22.5519 26.7349L24.5039 28.7589"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M32.5303 26.6971H22.5523L24.5043 24.7451"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M38.0977 50.5V0.5H17.0577V50.5H38.0977Z"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M34.9883 47.3911V3.53711H20.0943V47.3911H34.9883Z"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M56.0645 47.3901V3.53613H41.1705V47.3901H56.0645Z"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M43.4471 26.7352H53.4971L51.5451 24.7832"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M53.4971 26.7354L51.5451 28.7593"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M38.0977 50.5V0.5H59.1377V50.5H38.0977Z"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M61.4184 26.4644L63.4424 28.4883"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M71.4639 26.4642H61.4139L63.4379 24.5122"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M69.5119 28.4892L71.4639 26.4652L69.5119 24.5132"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M75.6943 0.5V50.5"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M75.6943 0.5H59.1373"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M75.6943 50.5H59.1373"
                        stroke="#96A0B5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path d="M72.6943 25.167H75.6943V33.167H72.6943V25.167Z" fill="#96A0B5" />
                      <path d="M70.6943 29.167H72.6943V35.167H70.6943V29.167Z" fill="#96A0B5" />
                      <path d="M0.694336 25.167H3.69434V33.167H0.694336V25.167Z" fill="#96A0B5" />
                      <path d="M3.69434 29.167H5.69434V35.167H3.69434V29.167Z" fill="#96A0B5" />
                      <path d="M35.1943 25.167H38.1943V33.167H35.1943V25.167Z" fill="#96A0B5" />
                      <path d="M33.6943 29.167H35.6943V35.167H33.6943V29.167Z" fill="#96A0B5" />
                    </g>
                    <defs>
                      <clipPath id="clip0_493_218">
                        <rect width="76.194" height="51" fill="white" transform="matrix(-1 0 0 1 76.1943 0)" />
                      </clipPath>
                    </defs>
                  </svg>`,
    [slidingDesignIconKeys.FOUR_TRACK_FOUR_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="77.053" height="51" viewBox="0 0 77.053 51">
                        <g id="Group_41641" data-name="Group 41641" transform="translate(-180.555 -174.501)">
                          <g id="Group_14219" data-name="Group 14219" transform="translate(7709.375 13316.041)">
                            <path
                              id="path112"
                              d="M194.4-502.88h14.549v43.754H194.4"
                              transform="translate(-7664.375 -12635.074)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path128"
                              d="M205.89-458.107h-8.45l3.013-3.013"
                              transform="translate(-7666.02 -12657.604)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path130"
                              d="M197.44-454.56l3.013,3.086"
                              transform="translate(-7666.02 -12661.146)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path134"
                              d="M194.4-509.6v50"
                              transform="translate(-7664.375 -12631.44)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path140"
                              d="M178.053-454.56l-3.013,3.086"
                              transform="translate(-7653.907 -12661.146)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path138"
                              d="M160.96-458.107h9.479l-3.013-3.013"
                              transform="translate(-7646.293 -12657.604)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path142"
                              d="M164.046-455.021l-3.086-3.086,3.086-3.013"
                              transform="translate(-7646.293 -12657.602)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path118"
                              d="M157.12-509.6v50"
                              transform="translate(-7644.217 -12631.44)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path136"
                              d="M157.12-502.88h14.035v43.754H157.12"
                              transform="translate(-7644.217 -12635.074)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path126"
                              d="M138.853-454.56l-3.013,3.086"
                              transform="translate(-7632.71 -12661.146)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path124"
                              d="M121.76-458.107h9.479l-3.013-3.013"
                              transform="translate(-7625.096 -12657.604)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path132"
                              d="M124.846-455.021l-3.086-3.086,3.086-3.013"
                              transform="translate(-7625.096 -12657.602)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path110"
                              d="M116-502.88h15.725v43.754H116"
                              transform="translate(-7621.981 -12635.074)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path122"
                              d="M98.213-454.56,95.2-451.474"
                              transform="translate(-7610.734 -12661.146)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path120"
                              d="M83.36-458.107h8.45L88.8-461.12"
                              transform="translate(-7604.332 -12657.604)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path116"
                              d="M74.08-459.126V-502.88H90.246v43.754H74.08"
                              transform="translate(-7599.313 -12635.074)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path108"
                              d="M67.36-459.6v-50h76.053v50H67.36"
                              transform="translate(-7595.68 -12631.44)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                            <path
                              id="path114"
                              d="M67.36-459.6v-50H89.7v50H67.36"
                              transform="translate(-7595.68 -12631.44)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-miterlimit="10"
                              stroke-width="1"
                            />
                          </g>
                          <g id="Group_37635" data-name="Group 37635" transform="translate(90 71)">
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
                          <g id="Group_37636" data-name="Group 37636" transform="translate(252 197)">
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
    [slidingDesignIconKeys.THREE_TRACK_FIVE_PANEL_MEETING_BOTH_LEFT]: `<svg
                      *ngIf="viewHandleFromOutside"
                      width="77"
                      height="51"
                      viewBox="0 0 77 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <mask
                        id="mask0_493_286"
                        style="mask-type: luminance"
                        maskUnits="userSpaceOnUse"
                        x="3"
                        y="0"
                        width="71"
                        height="51"
                      >
                        <path d="M3.405 0H74V51H3.405V0Z" fill="white" />
                      </mask>
                      <g mask="url(#mask0_493_286)">
                        <path
                          d="M73.5 50.5V0.5H3.9V50.5H73.5Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M46.7031 50.5V0.5H30.8551V50.5H46.7031Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M30.96 50.5V0.5H17.353V50.5H30.96Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.4502 50.5V0.5H3.90519V50.5H17.4502Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M17.4502 47.4691V3.49805H6.86119V47.4691H17.4502Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M73.5 50.5V0.5H60.2V50.5H73.5Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M60.3018 50.5V0.5H46.6018V50.5H60.3018Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M30.9453 47.4691V3.49805H20.3383V47.4691H30.9453Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M70.5 47.4691V3.49805H60.2V47.4691H70.5Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M57.2861 47.4691V3.49805H46.6141V47.4691H57.2861Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M43.6924 47.4691V3.49805H33.8054V47.4691H43.6924Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M64.4127 24.0338C64.504 24.0753 64.5771 24.1485 64.6187 24.2398C64.6483 24.3434 64.6462 24.4535 64.6127 24.5558C64.5967 24.5918 64.2687 24.9358 63.8717 25.3308L63.1577 26.0428L67.4057 26.0528L68.6527 26.0628L68.7277 26.1098C68.7778 26.1443 68.8214 26.1873 68.8567 26.2368C68.9004 26.2983 68.9193 26.374 68.9097 26.4488C68.9193 26.5236 68.9004 26.5993 68.8567 26.6608C68.8214 26.7104 68.7777 26.7533 68.7277 26.7878L68.6527 26.8348L67.4057 26.8448L63.1607 26.8548L63.8747 27.5668C64.2747 27.9668 64.6007 28.3058 64.6157 28.3418C64.6492 28.4442 64.6513 28.5542 64.6217 28.6578C64.5795 28.7527 64.502 28.8274 64.4057 28.8662C64.3095 28.905 64.2019 28.9049 64.1057 28.8658C64.0207 28.8258 61.9227 26.7658 61.8517 26.6518C61.8186 26.5882 61.8018 26.5173 61.8028 26.4456C61.8039 26.3738 61.8227 26.3035 61.8577 26.2408C61.9407 26.1158 64.0207 24.0738 64.1057 24.0348C64.1538 24.0127 64.2061 24.0012 64.2591 24.001C64.312 24.0008 64.3644 24.012 64.4127 24.0338Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M51.0152 24.5856C51.1065 24.6271 51.1797 24.7003 51.2212 24.7916C51.2508 24.8951 51.2487 25.0052 51.2152 25.1076C51.1992 25.1436 50.8712 25.4876 50.4742 25.8826L49.7602 26.5946L54.0082 26.6046L55.2552 26.6146L55.3302 26.6616C55.3803 26.696 55.4239 26.739 55.4592 26.7886C55.5029 26.8501 55.5218 26.9258 55.5122 27.0006C55.5218 27.0754 55.5029 27.1511 55.4592 27.2126C55.4239 27.2621 55.3803 27.3051 55.3302 27.3396L55.2552 27.3866L54.0082 27.3966L49.7632 27.4066L50.4772 28.1186C50.8772 28.5186 51.2032 28.8576 51.2182 28.8936C51.2517 28.996 51.2538 29.106 51.2242 29.2096C51.182 29.3044 51.1046 29.3792 51.0083 29.418C50.912 29.4568 50.8044 29.4566 50.7082 29.4176C50.6232 29.3776 48.5252 27.3176 48.4542 27.2036C48.4211 27.1399 48.4043 27.0691 48.4053 26.9973C48.4064 26.9256 48.4252 26.8552 48.4602 26.7926C48.5432 26.6676 50.6232 24.6256 50.7082 24.5866C50.7563 24.5645 50.8086 24.5529 50.8616 24.5527C50.9145 24.5526 50.9669 24.5638 51.0152 24.5856Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M52.8949 24.5335C52.8036 24.5751 52.7304 24.6482 52.6889 24.7395C52.6593 24.8431 52.6614 24.9532 52.6949 25.0555C52.7109 25.0915 53.0389 25.4355 53.4359 25.8305L54.1499 26.5425L49.9049 26.5526L48.6579 26.5625L48.5829 26.6095C48.5328 26.644 48.4891 26.687 48.4539 26.7365C48.4102 26.798 48.3913 26.8737 48.4009 26.9485C48.3913 27.0234 48.4102 27.0991 48.4539 27.1606C48.4891 27.2101 48.5328 27.2531 48.5829 27.2875L48.6579 27.3345L49.9049 27.3445L54.1499 27.3546L53.4359 28.0665C53.0359 28.4665 52.7099 28.8056 52.6949 28.8416C52.6614 28.9439 52.6593 29.054 52.6889 29.1575C52.7311 29.2524 52.8085 29.3271 52.9048 29.3659C53.0011 29.4048 53.1087 29.4046 53.2049 29.3655C53.2899 29.3255 55.3879 27.2656 55.4589 27.1516C55.492 27.0879 55.5088 27.017 55.5078 26.9453C55.5067 26.8735 55.4879 26.8032 55.4529 26.7405C55.3699 26.6155 53.2899 24.5735 53.2049 24.5345C53.1564 24.512 53.1035 24.5002 53.05 24.5C52.9965 24.4998 52.9436 24.5113 52.8949 24.5335Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M39.4964 24.0335C39.4051 24.0751 39.3319 24.1482 39.2904 24.2395C39.2608 24.3431 39.2629 24.4532 39.2964 24.5555C39.3124 24.5915 39.6404 24.9355 40.0374 25.3305L40.7514 26.0425L36.5064 26.0526L35.2594 26.0625L35.1844 26.1095C35.1343 26.144 35.0906 26.187 35.0554 26.2365C35.0117 26.298 34.9928 26.3737 35.0024 26.4485C34.9928 26.5234 35.0117 26.5991 35.0554 26.6606C35.0907 26.7101 35.1343 26.7531 35.1844 26.7875L35.2594 26.8345L36.5064 26.8445L40.7514 26.8546L40.0374 27.5665C39.6374 27.9665 39.3114 28.3056 39.2964 28.3416C39.2629 28.4439 39.2608 28.554 39.2904 28.6575C39.3326 28.7524 39.41 28.8271 39.5063 28.8659C39.6026 28.9048 39.7102 28.9046 39.8064 28.8655C39.8914 28.8255 41.9894 26.7656 42.0604 26.6516C42.0935 26.5879 42.1103 26.517 42.1093 26.4453C42.1082 26.3735 42.0894 26.3032 42.0544 26.2405C41.9714 26.1155 39.8914 24.0735 39.8064 24.0345C39.7579 24.012 39.705 24.0002 39.6515 24C39.598 23.9998 39.5451 24.0113 39.4964 24.0335Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M24.6988 24.0338C24.7901 24.0753 24.8633 24.1485 24.9048 24.2398C24.9344 24.3434 24.9323 24.4535 24.8988 24.5558C24.8828 24.5918 24.5548 24.9358 24.1578 25.3308L23.4438 26.0428L27.6918 26.0528L28.9388 26.0628L29.0138 26.1098C29.0639 26.1443 29.1076 26.1873 29.1428 26.2368C29.1865 26.2983 29.2054 26.374 29.1958 26.4488C29.2054 26.5236 29.1865 26.5993 29.1428 26.6608C29.1075 26.7104 29.0639 26.7533 29.0138 26.7878L28.9388 26.8348L27.6918 26.8448L23.4468 26.8548L24.1608 27.5668C24.5608 27.9668 24.8868 28.3058 24.9018 28.3418C24.9353 28.4442 24.9374 28.5542 24.9078 28.6578C24.8656 28.7527 24.7882 28.8274 24.6919 28.8662C24.5956 28.905 24.488 28.9049 24.3918 28.8658C24.3068 28.8258 22.2088 26.7658 22.1378 26.6518C22.1047 26.5882 22.0879 26.5173 22.0889 26.4456C22.09 26.3738 22.1088 26.3035 22.1438 26.2408C22.2268 26.1158 24.3068 24.0738 24.3918 24.0348C24.4399 24.0127 24.4922 24.0012 24.5452 24.001C24.5982 24.0008 24.6505 24.012 24.6988 24.0338Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M12.6966 24.0335C12.6053 24.0751 12.5321 24.1482 12.4906 24.2395C12.461 24.3431 12.4631 24.4532 12.4966 24.5555C12.5126 24.5915 12.8406 24.9355 13.2376 25.3305L13.9516 26.0425L9.70663 26.0526L8.45963 26.0625L8.38463 26.1095C8.33453 26.144 8.29083 26.187 8.25563 26.2365C8.21193 26.298 8.19303 26.3737 8.20263 26.4485C8.19303 26.5234 8.21193 26.5991 8.25563 26.6606C8.29093 26.7101 8.33453 26.7531 8.38463 26.7875L8.45963 26.8345L9.70663 26.8445L13.9516 26.8546L13.2376 27.5665C12.8376 27.9665 12.5116 28.3056 12.4966 28.3416C12.4631 28.4439 12.461 28.554 12.4906 28.6575C12.5328 28.7524 12.6102 28.8271 12.7065 28.8659C12.8028 28.9048 12.9104 28.9046 13.0066 28.8655C13.0916 28.8255 15.1896 26.7656 15.2606 26.6516C15.2937 26.5879 15.3105 26.517 15.3095 26.4453C15.3084 26.3735 15.2896 26.3032 15.2546 26.2405C15.1716 26.1155 13.0916 24.0735 13.0066 24.0345C12.9581 24.012 12.9052 24.0002 12.8517 24C12.7982 23.9998 12.7453 24.0113 12.6966 24.0335Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path d="M70.9053 24.499H73.9053V32.499H70.9053V24.499Z" fill="#96A0B5" />
                        <path d="M68.9053 28.499H70.9053V34.499H68.9053V28.499Z" fill="#96A0B5" />
                        <path d="M31.1523 24.499H34.1523V32.499H31.1523V24.499Z" fill="#96A0B5" />
                        <path d="M29.1523 28.499H31.1523V34.499H29.1523V28.499Z" fill="#96A0B5" />
                        <path d="M4.30957 24.499H7.30957V32.499H4.30957V24.499Z" fill="#96A0B5" />
                        <path d="M7.30957 28.499H9.30957V34.499H7.30957V28.499Z" fill="#96A0B5" />
                      </g>
                    </svg>`,
    [slidingDesignIconKeys.THREE_TRACK_FIVE_PANEL_MEETING_BOTH_RIGHT]: `<svg
                    *ngIf="viewHandleFromOutside"
                    width="77"
                    height="51"
                    viewBox="0 0 77 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M72.8271 50.0194V0.980957H4.56561V50.0194H72.8271Z"
                      stroke="#96A0B5"
                      stroke-width="0.980769"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M46.5449 50.0194V0.980957H31.0017V50.0194H46.5449Z"
                      stroke="#96A0B5"
                      stroke-width="0.980769"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.1055 50.0194V0.980957H17.7601V50.0194H31.1055Z"
                      stroke="#96A0B5"
                      stroke-width="0.980769"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.8545 50.0194V0.980957H4.56997V50.0194H17.8545Z"
                      stroke="#96A0B5"
                      stroke-width="0.980769"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.8545 47.0468V3.92139H7.46913V47.0468H17.8545Z"
                      stroke="#96A0B5"
                      stroke-width="0.980769"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M72.8271 50.0194V0.980957H59.7829V50.0194H72.8271Z"
                      stroke="#96A0B5"
                      stroke-width="0.980769"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M59.8818 50.0194V0.980957H46.4453V50.0194H59.8818Z"
                      stroke="#96A0B5"
                      stroke-width="0.980769"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.0898 47.0468V3.92139H20.6868V47.0468H31.0898Z"
                      stroke="#96A0B5"
                      stroke-width="0.980769"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M69.8848 47.0468V3.92139H59.7828V47.0468H69.8848Z"
                      stroke="#96A0B5"
                      stroke-width="0.980769"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M56.9248 47.0468V3.92139H46.458V47.0468H56.9248Z"
                      stroke="#96A0B5"
                      stroke-width="0.980769"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M43.5918 47.0468V3.92139H33.8949V47.0468H43.5918Z"
                      stroke="#96A0B5"
                      stroke-width="0.980769"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M63.9133 24.062C64.0028 24.1027 64.0746 24.1745 64.1153 24.264C64.1443 24.3656 64.1423 24.4736 64.1094 24.5739C64.0937 24.6092 63.772 24.9466 63.3827 25.334L62.6824 26.0323L66.8487 26.0421L68.0717 26.0519L68.1453 26.098C68.1944 26.1319 68.2372 26.174 68.2718 26.2226C68.3146 26.2829 68.3332 26.3572 68.3238 26.4305C68.3332 26.5039 68.3146 26.5781 68.2718 26.6384C68.2372 26.6871 68.1944 26.7292 68.1453 26.763L68.0717 26.8091L66.8487 26.8189L62.6853 26.8287L63.3856 27.527C63.7779 27.9193 64.0976 28.2518 64.1123 28.2871C64.1452 28.3875 64.1473 28.4954 64.1182 28.597C64.0768 28.6901 64.0009 28.7634 63.9065 28.8014C63.812 28.8395 63.7065 28.8394 63.6122 28.801C63.5288 28.7618 61.4711 26.7414 61.4015 26.6296C61.3691 26.5672 61.3526 26.4977 61.3536 26.4274C61.3546 26.357 61.3731 26.288 61.4074 26.2265C61.4888 26.1039 63.5288 24.1012 63.6122 24.0629C63.6593 24.0413 63.7106 24.03 63.7626 24.0298C63.8145 24.0296 63.8659 24.0406 63.9133 24.062Z"
                      fill="#96A0B5"
                      stroke="#96A0B5"
                      stroke-width="0.196154"
                    />
                    <path
                      d="M25.2599 23.6226C25.3495 23.6633 25.4212 23.7351 25.462 23.8246C25.491 23.9261 25.489 24.0341 25.4561 24.1346C25.4404 24.1699 25.1187 24.5073 24.7293 24.8947L24.0291 25.593L28.1954 25.6028L29.4184 25.6126L29.492 25.6587C29.541 25.6924 29.5839 25.7346 29.6185 25.7832C29.6612 25.8436 29.6799 25.9178 29.6705 25.9912C29.6799 26.0645 29.6612 26.1388 29.6185 26.1991C29.5839 26.2476 29.541 26.2898 29.492 26.3236L29.4184 26.3697L28.1954 26.3795L24.032 26.3894L24.7323 27.0877C25.1246 27.48 25.4443 27.8124 25.459 27.8478C25.4919 27.9482 25.494 28.0561 25.4649 28.1577C25.4235 28.2507 25.3475 28.324 25.2531 28.3621C25.1586 28.4001 25.0531 28.3999 24.9588 28.3617C24.8755 28.3224 22.8178 26.3021 22.7482 26.1903C22.7156 26.1278 22.6992 26.0583 22.7002 25.9879C22.7012 25.9176 22.7197 25.8486 22.7541 25.7872C22.8355 25.6646 24.8755 23.6618 24.9588 23.6236C25.006 23.6019 25.0573 23.5905 25.1092 23.5903C25.1612 23.5902 25.2126 23.6012 25.2599 23.6226Z"
                      fill="#96A0B5"
                      stroke="#96A0B5"
                      stroke-width="0.196154"
                    />
                    <path
                      d="M27.1043 23.5714C27.0147 23.6122 26.9431 23.6839 26.9023 23.7735C26.8732 23.8751 26.8753 23.9831 26.9081 24.0834C26.9238 24.1187 27.2455 24.4561 27.6349 24.8435L28.3352 25.5418L24.1718 25.5517L22.9488 25.5614L22.8752 25.6075C22.8262 25.6413 22.7833 25.6835 22.7487 25.7321C22.7059 25.7924 22.6873 25.8666 22.6967 25.94C22.6873 26.0134 22.7059 26.0877 22.7487 26.148C22.7833 26.1966 22.8262 26.2387 22.8752 26.2725L22.9488 26.3186L24.1718 26.3284L28.3352 26.3383L27.6349 27.0365C27.2426 27.4288 26.9228 27.7614 26.9081 27.7967C26.8753 27.897 26.8732 28.005 26.9023 28.1065C26.9436 28.1996 27.0196 28.2728 27.1141 28.3109C27.2085 28.3491 27.3141 28.3489 27.4083 28.3105C27.4917 28.2713 29.5493 26.251 29.619 26.1392C29.6515 26.0767 29.668 26.0072 29.6669 25.9369C29.666 25.8664 29.6474 25.7975 29.6131 25.736C29.5317 25.6134 27.4917 23.6107 27.4083 23.5724C27.3608 23.5503 27.309 23.5388 27.2565 23.5386C27.2039 23.5384 27.1521 23.5497 27.1043 23.5714Z"
                      fill="#96A0B5"
                      stroke="#96A0B5"
                      stroke-width="0.196154"
                    />
                    <path
                      d="M52.2265 24.0617C52.1369 24.1025 52.0651 24.1742 52.0244 24.2637C51.9953 24.3653 51.9973 24.4733 52.0303 24.5736C52.046 24.6089 52.3677 24.9463 52.7571 25.3337L53.4573 26.032L49.294 26.0419L48.0709 26.0516L47.9974 26.0977C47.9482 26.1316 47.9054 26.1738 47.8709 26.2223C47.828 26.2826 47.8094 26.3569 47.8189 26.4302C47.8094 26.5037 47.828 26.5779 47.8709 26.6382C47.9054 26.6868 47.9482 26.729 47.9974 26.7627L48.0709 26.8088L49.294 26.8186L53.4573 26.8285L52.7571 27.5267C52.3647 27.919 52.045 28.2516 52.0303 28.2869C51.9973 28.3873 51.9953 28.4952 52.0244 28.5967C52.0658 28.6898 52.1417 28.7631 52.2362 28.8011C52.3306 28.8393 52.4361 28.8391 52.5305 28.8007C52.6139 28.7615 54.6715 26.7412 54.7411 26.6294C54.7736 26.5669 54.7901 26.4974 54.789 26.4271C54.788 26.3567 54.7695 26.2877 54.7353 26.2262C54.6539 26.1036 52.6139 24.1009 52.5305 24.0626C52.4828 24.0406 52.431 24.029 52.3786 24.0288C52.3261 24.0286 52.2741 24.0399 52.2265 24.0617Z"
                      fill="#96A0B5"
                      stroke="#96A0B5"
                      stroke-width="0.196154"
                    />
                    <path
                      d="M37.714 24.062C37.8035 24.1027 37.8753 24.1745 37.916 24.264C37.9452 24.3656 37.9431 24.4736 37.9102 24.5739C37.8945 24.6092 37.5728 24.9466 37.1834 25.334L36.4831 26.0323L40.6494 26.0421L41.8725 26.0519L41.946 26.098C41.9952 26.1319 42.038 26.174 42.0725 26.2226C42.1154 26.2829 42.134 26.3572 42.1245 26.4305C42.134 26.5039 42.1154 26.5781 42.0725 26.6384C42.038 26.6871 41.9952 26.7292 41.946 26.763L41.8725 26.8091L40.6494 26.8189L36.4861 26.8287L37.1863 27.527C37.5787 27.9193 37.8984 28.2518 37.9131 28.2871C37.9461 28.3875 37.9481 28.4954 37.919 28.597C37.8776 28.6901 37.8017 28.7634 37.7072 28.8014C37.6128 28.8395 37.5073 28.8394 37.4129 28.801C37.3295 28.7618 35.2719 26.7414 35.2023 26.6296C35.1698 26.5672 35.1533 26.4977 35.1544 26.4274C35.1554 26.357 35.1739 26.288 35.2081 26.2265C35.2895 26.1039 37.3295 24.1012 37.4129 24.0629C37.4602 24.0413 37.5115 24.03 37.5634 24.0298C37.6153 24.0296 37.6667 24.0406 37.714 24.062Z"
                      fill="#96A0B5"
                      stroke="#96A0B5"
                      stroke-width="0.196154"
                    />
                    <path
                      d="M13.1922 24.0617C13.1026 24.1025 13.0309 24.1742 12.9902 24.2637C12.9611 24.3653 12.9632 24.4733 12.996 24.5736C13.0117 24.6089 13.3334 24.9463 13.7228 25.3337L14.4231 26.032L10.2597 26.0419L9.03667 26.0516L8.96312 26.0977C8.91398 26.1316 8.87111 26.1738 8.83659 26.2223C8.79373 26.2826 8.7752 26.3569 8.78462 26.4302C8.7752 26.5037 8.79373 26.5779 8.83659 26.6382C8.87121 26.6868 8.91398 26.729 8.96312 26.7627L9.03667 26.8088L10.2597 26.8186L14.4231 26.8285L13.7228 27.5267C13.3305 27.919 13.0107 28.2516 12.996 28.2869C12.9632 28.3873 12.9611 28.4952 12.9902 28.5967C13.0315 28.6898 13.1075 28.7631 13.2019 28.8011C13.2963 28.8393 13.4019 28.8391 13.4962 28.8007C13.5796 28.7615 15.6372 26.7412 15.7069 26.6294C15.7393 26.5669 15.7558 26.4974 15.7548 26.4271C15.7538 26.3567 15.7353 26.2877 15.701 26.2262C15.6196 26.1036 13.5796 24.1009 13.4962 24.0626C13.4487 24.0406 13.3968 24.029 13.3443 24.0288C13.2918 24.0286 13.24 24.0399 13.1922 24.0617Z"
                      fill="#96A0B5"
                      stroke="#96A0B5"
                      stroke-width="0.196154"
                    />
                    <path d="M43.0626 24.5181H46.0049V32.3642H43.0626V24.5181Z" fill="#96A0B5" />
                    <path d="M41.101 28.4414H43.0625V34.326H41.101V28.4414Z" fill="#96A0B5" />
                  </svg>`,
    [slidingDesignIconKeys.FIVE_TRACK_FIVE_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="76" height="51" viewBox="0 0 76 51">
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
        <rect id="Rectangle_10006" data-name="Rectangle 10006" width="2" height="8" fill="#96a0b5" />
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
        d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
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
        d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.468.468,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
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
          d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
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
          d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
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
          d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
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
          d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
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
          d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
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
          d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
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
</svg>
`,
    [slidingDesignIconKeys.TWO_TRACK_SIX_PANEL_MEETING]: `<svg
*ngIf="viewHandleFromOutside"
width="89"
height="51"
viewBox="0 0 89 51"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<path
  d="M0.847581 4.30957V46.6905H88.1523V4.30957H0.847581Z"
  stroke="#96A0B5"
  stroke-width="0.847619"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M75.4379 6.85254V44.1478H85.6094V6.85254H75.4379Z"
  stroke="#96A0B5"
  stroke-width="0.847619"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M63.5717 6.85254V44.1478H72.8955V6.85254H63.5717Z"
  stroke="#96A0B5"
  stroke-width="0.847619"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M47.4663 6.85254V44.1478H58.4854V6.85254H47.4663Z"
  stroke="#96A0B5"
  stroke-width="0.847619"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M31.3618 6.85254V44.1478H42.3809V6.85254H31.3618Z"
  stroke="#96A0B5"
  stroke-width="0.847619"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M16.9526 6.85254V44.1478H26.2764V6.85254H16.9526Z"
  stroke="#96A0B5"
  stroke-width="0.847619"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M3.39022 6.85254V44.1478H14.4092V6.85254H3.39022Z"
  stroke="#96A0B5"
  stroke-width="0.847619"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M78.7767 23.8376C78.8597 23.8754 78.9261 23.9418 78.9639 24.0248C78.9911 24.1191 78.9893 24.2193 78.9588 24.3125C78.8203 24.5079 78.6601 24.687 78.4815 24.8464L77.8319 25.4942L81.6953 25.5036L82.8299 25.5128L82.8982 25.5559C82.9437 25.5872 82.9834 25.6263 83.0154 25.6714C83.0553 25.7271 83.0727 25.7957 83.0644 25.8637C83.0727 25.9317 83.0553 26.0004 83.0154 26.056C82.9833 26.1009 82.9436 26.1397 82.8982 26.1708L82.8299 26.2138L81.6953 26.2231L77.8319 26.2324L78.4815 26.8802C78.8433 27.2404 78.7573 27.1729 78.7716 27.2058C78.802 27.299 78.8038 27.3992 78.7767 27.4934C78.7385 27.58 78.6679 27.6482 78.5802 27.6835C78.4924 27.7188 78.3943 27.7184 78.3069 27.6824C78.2292 27.6461 76.7041 26.1514 76.64 26.0468C76.6097 25.9888 76.5943 25.9242 76.5952 25.8589C76.5961 25.7935 76.6132 25.7294 76.6451 25.6722C76.721 25.5593 78.4165 23.8713 78.4933 23.8359C78.5377 23.8154 78.5861 23.8047 78.635 23.8047C78.6839 23.8047 78.7323 23.8154 78.7767 23.8359V23.8376Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.847619"
/>
<path
  d="M65.2664 25.6938L67.1523 27.6255"
  stroke="#96A0B5"
  stroke-width="0.847619"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M71.2002 25.6906H65.2669L67.1528 23.8047"
  stroke="#96A0B5"
  stroke-width="0.847619"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M69.2686 27.6242L71.2002 25.6926L69.2686 23.8066"
  stroke="#96A0B5"
  stroke-width="0.847619"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M54.6086 23.8376C54.5256 23.8754 54.459 23.9418 54.4212 24.0248C54.3941 24.1191 54.3959 24.2193 54.4263 24.3125C54.5649 24.5079 54.725 24.687 54.9038 24.8464L55.5533 25.4942L51.6899 25.5036L50.5553 25.5128L50.487 25.5559C50.4415 25.5872 50.4018 25.6263 50.3698 25.6714C50.33 25.7271 50.3125 25.7957 50.3209 25.8637C50.3125 25.9317 50.33 26.0004 50.3698 26.056C50.4019 26.1009 50.4416 26.1397 50.487 26.1708L50.5553 26.2138L51.6899 26.2231L55.5533 26.2324L54.9038 26.8802C54.5419 27.2404 54.628 27.1729 54.6136 27.2058C54.5831 27.299 54.5814 27.3992 54.6086 27.4934C54.6467 27.58 54.7172 27.6482 54.805 27.6835C54.8928 27.7188 54.9909 27.7184 55.0784 27.6824C55.156 27.6461 56.6811 26.1514 56.7452 26.0468C56.7755 25.9888 56.7909 25.9242 56.79 25.8589C56.7892 25.7935 56.772 25.7294 56.7402 25.6722C56.6642 25.5593 54.9687 23.8713 54.8919 23.8359C54.8475 23.8154 54.7992 23.8047 54.7503 23.8047C54.7013 23.8047 54.653 23.8154 54.6086 23.8359V23.8376Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.847619"
/>
<path
  d="M35.5482 23.8376C35.6311 23.8754 35.6976 23.9418 35.7354 24.0248C35.7625 24.1191 35.7608 24.2193 35.7303 24.3125C35.5918 24.5079 35.4316 24.687 35.2529 24.8464L34.6034 25.4942L38.4668 25.5036L39.6013 25.5128L39.6696 25.5559C39.7152 25.5872 39.7549 25.6263 39.7869 25.6714C39.8267 25.7271 39.8442 25.7957 39.8359 25.8637C39.8442 25.9317 39.8267 26.0004 39.7869 26.056C39.7548 26.1009 39.7151 26.1397 39.6696 26.1708L39.6013 26.2138L38.4668 26.2231L34.6034 26.2324L35.2529 26.8802C35.6148 27.2404 35.5288 27.1729 35.5431 27.2058C35.5735 27.299 35.5753 27.3992 35.5482 27.4934C35.51 27.58 35.4394 27.6482 35.3516 27.6835C35.2639 27.7188 35.1658 27.7184 35.0783 27.6824C35.0007 27.6461 33.4756 26.1514 33.4115 26.0468C33.3812 25.9888 33.3657 25.9242 33.3667 25.8589C33.3675 25.7935 33.3847 25.7294 33.4165 25.6722C33.4925 25.5593 35.1879 23.8713 35.2647 23.8359C35.3092 23.8154 35.3575 23.8047 35.4065 23.8047C35.4554 23.8047 35.5038 23.8154 35.5482 23.8359V23.8376Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.847619"
/>
<path
  d="M18.6473 25.6938L20.5332 27.6255"
  stroke="#96A0B5"
  stroke-width="0.847619"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M24.5811 25.6906H18.6477L20.5337 23.8047"
  stroke="#96A0B5"
  stroke-width="0.847619"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M22.6494 27.6242L24.5811 25.6926L22.6494 23.8066"
  stroke="#96A0B5"
  stroke-width="0.847619"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M10.5324 23.8376C10.4494 23.8754 10.3829 23.9418 10.3451 24.0248C10.3179 24.1191 10.3197 24.2193 10.3502 24.3125C10.4887 24.5079 10.6489 24.687 10.8276 24.8464L11.4772 25.4942L7.6137 25.5036L6.47917 25.5128L6.41084 25.5559C6.36533 25.5872 6.32566 25.6263 6.29362 25.6714C6.25378 25.7271 6.23632 25.7957 6.24471 25.8637C6.23632 25.9317 6.25378 26.0004 6.29362 26.056C6.32574 26.1009 6.36541 26.1397 6.41084 26.1708L6.47917 26.2138L7.6137 26.2231L11.4772 26.2324L10.8276 26.8802C10.4657 27.2404 10.5518 27.1729 10.5374 27.2058C10.507 27.299 10.5053 27.3992 10.5324 27.4934C10.5705 27.58 10.6411 27.6482 10.7289 27.6835C10.8166 27.7188 10.9148 27.7184 11.0022 27.6824C11.0798 27.6461 12.6049 26.1514 12.6691 26.0468C12.6993 25.9888 12.7148 25.9242 12.7138 25.8589C12.713 25.7935 12.6959 25.7294 12.664 25.6722C12.588 25.5593 10.8925 23.8713 10.8158 23.8359C10.7713 23.8154 10.723 23.8047 10.6741 23.8047C10.6251 23.8047 10.5768 23.8154 10.5324 23.8359V23.8376Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.847619"
/>
<path d="M75.4385 4.30957V46.4862" stroke="#96A0B5" stroke-width="0.847619" />
<path d="M61.0283 4.30957V46.4862" stroke="#96A0B5" stroke-width="0.847619" />
<path d="M44.9238 4.30957V46.4862" stroke="#96A0B5" stroke-width="0.847619" />
<path d="M28.8193 4.30957V46.4862" stroke="#96A0B5" stroke-width="0.847619" />
<path d="M14.4092 4.30957V46.4862" stroke="#96A0B5" stroke-width="0.847619" />
<path d="M0.856557 22.957H3.39941V29.7053H0.856557V22.957Z" fill="#96A0B5" />
<path d="M3.3907 26.3477H5.08594V31.4334H3.3907V26.3477Z" fill="#96A0B5" />
<path d="M44.9238 22.957H42.381V29.7053H44.9238V22.957Z" fill="#96A0B5" />
<path d="M42.3809 26.3477H40.6856V31.4334H42.3809V26.3477Z" fill="#96A0B5" />
<path d="M88.1523 23.8047H85.6095V30.5856H88.1523V23.8047Z" fill="#96A0B5" />
<path d="M85.6094 27.1953H83.9141V32.281H85.6094V27.1953Z" fill="#96A0B5" />
</svg>`,
    [slidingDesignIconKeys.THREE_TRACK_SIX_PANEL_MEETING]: `<svg
*ngIf="viewHandleFromOutside"
width="89"
height="51"
viewBox="0 0 89 51"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<g clip-path="url(#clip0_493_459)">
  <path
    d="M14.1699 4.16602H3.60394V47.322H14.1699"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M14.1699 0.5V50.5"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M6.04004 26.7196H12.2471L10.178 24.7246"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M12.2471 26.7119L10.178 28.7809"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M19.415 28.2324L17.9631 26.7264L19.415 25.2744"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M17.9634 26.7244H22.4805L20.9744 25.2725"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M22.4805 26.7246L20.9744 28.2306"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M32.6398 26.7119L34.6348 28.7809"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M41.3594 47.3226V3.60254H30.1994V47.3226H41.3594Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M24.4297 47.3224V3.86133H16.3577V47.3224H24.4297Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M38.8477 26.7196H32.6417L34.6367 24.7246"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M44.4629 50.5V0.5H0.499878V50.5H44.4629Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M44.4629 50.5V0.5H27.0259V50.5H44.4629Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M50.1524 26.7196H56.3584L54.2894 24.7246"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M56.3584 26.7119L54.2894 28.7809"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M47.6399 47.3226V3.60254H58.7969V47.3226H47.6399Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M64.5256 47.5814V3.86133H72.0566V47.5814H64.5256Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M44.4604 50.5V0.5H61.9004V50.5H44.4604Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M65.7534 26.729L67.0234 28.046"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M70.6035 26.728H65.7535L67.3125 25.458"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M69.2865 28.045L70.6035 26.728L69.2865 25.458"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M74.8301 0.5V50.5"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M76.6027 26.7119L78.5977 28.7809"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M82.8105 26.7196H76.6046L78.5995 24.7246"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M44.459 50.5V0.5H88.499V50.5H44.459Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M74.8303 3.60254H85.3223V47.3226H74.8303"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path d="M85.499 24.167H88.499V32.167H85.499V24.167Z" fill="#96A0B5" />
  <path d="M83.499 28.167H85.499V34.167H83.499V28.167Z" fill="#96A0B5" />
  <path d="M0.499023 24.167H3.49902V32.167H0.499023V24.167Z" fill="#96A0B5" />
  <path d="M3.49902 28.167H5.49902V34.167H3.49902V28.167Z" fill="#96A0B5" />
  <path d="M40.999 24.167H43.999V32.167H40.999V24.167Z" fill="#96A0B5" />
  <path d="M39.499 28.167H41.499V34.167H39.499V28.167Z" fill="#96A0B5" />
</g>
<defs>
  <clipPath id="clip0_493_459">
    <rect width="88.999" height="51" fill="white" transform="matrix(-1 0 0 1 88.999 0)" />
  </clipPath>
</defs>
</svg>`,
    [slidingDesignIconKeys.SIX_TRACK_SIX_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="90" height="51" viewBox="0 0 90.436 51">
  <g id="Group_53809" data-name="Group 53809" transform="translate(-627.747 -161)">
    <g id="Group_41704" data-name="Group 41704" transform="translate(398.914 -130.5)">
      <g id="Group_41702" data-name="Group 41702" transform="translate(229.333 292)">
        <path
          id="path66"
          d="M0,50V0H89.436V50H0"
          transform="translate(89.436 50) rotate(180)"
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
      transform="translate(642.633 209.25) rotate(180)"
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
      transform="translate(656.918 209.1) rotate(180)"
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
      transform="translate(671.554 209.359) rotate(180)"
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
      transform="translate(686.191 209.359) rotate(180)"
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
      transform="translate(700.828 209.1) rotate(180)"
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
      d="M0,45.2V0H12.386V45.2H0"
      transform="translate(715.464 209.1) rotate(180)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <g id="Group_53795" data-name="Group 53795" transform="translate(633.053 184.371)">
      <path
        id="Path_78161"
        data-name="Path 78161"
        d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
        transform="translate(-3.5 379.688)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <g id="Group_53805" data-name="Group 53805" transform="translate(645.521 184.37)">
      <g id="Group_53803" data-name="Group 53803">
        <path
          id="Path_78161-2"
          data-name="Path 78161"
          d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
          transform="translate(-3.5 379.687)"
          fill="#96a0b5"
          stroke="#96a0b5"
          stroke-width="0.2"
        />
      </g>
      <g id="Group_53804" data-name="Group 53804" transform="translate(2.596)">
        <path
          id="Path_78161-3"
          data-name="Path 78161"
          d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
          transform="translate(-3.5 379.687)"
          fill="#96a0b5"
          stroke="#96a0b5"
          stroke-width="0.2"
        />
      </g>
    </g>
    <g id="Group_53806" data-name="Group 53806" transform="translate(660.158 184.37)">
      <g id="Group_53803-2" data-name="Group 53803">
        <path
          id="Path_78161-4"
          data-name="Path 78161"
          d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
          transform="translate(-3.5 379.687)"
          fill="#96a0b5"
          stroke="#96a0b5"
          stroke-width="0.2"
        />
      </g>
      <g id="Group_53804-2" data-name="Group 53804" transform="translate(2.596)">
        <path
          id="Path_78161-5"
          data-name="Path 78161"
          d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
          transform="translate(-3.5 379.687)"
          fill="#96a0b5"
          stroke="#96a0b5"
          stroke-width="0.2"
        />
      </g>
    </g>
    <g id="Group_53807" data-name="Group 53807" transform="translate(674.795 184.37)">
      <g id="Group_53803-3" data-name="Group 53803">
        <path
          id="Path_78161-6"
          data-name="Path 78161"
          d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
          transform="translate(-3.5 379.687)"
          fill="#96a0b5"
          stroke="#96a0b5"
          stroke-width="0.2"
        />
      </g>
      <g id="Group_53804-3" data-name="Group 53804" transform="translate(2.596)">
        <path
          id="Path_78161-7"
          data-name="Path 78161"
          d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
          transform="translate(-3.5 379.687)"
          fill="#96a0b5"
          stroke="#96a0b5"
          stroke-width="0.2"
        />
      </g>
    </g>
    <g id="Group_53808" data-name="Group 53808" transform="translate(689.97 184.37)">
      <g id="Group_53803-4" data-name="Group 53803">
        <path
          id="Path_78161-8"
          data-name="Path 78161"
          d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
          transform="translate(-3.5 379.687)"
          fill="#96a0b5"
          stroke="#96a0b5"
          stroke-width="0.2"
        />
      </g>
      <g id="Group_53804-4" data-name="Group 53804" transform="translate(2.596)">
        <path
          id="Path_78161-9"
          data-name="Path 78161"
          d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
          transform="translate(-3.5 379.687)"
          fill="#96a0b5"
          stroke="#96a0b5"
          stroke-width="0.2"
        />
      </g>
    </g>
    <g id="Group_53802" data-name="Group 53802" transform="translate(704.607 184.371)">
      <path
        id="Path_78161-10"
        data-name="Path 78161"
        d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
        transform="translate(-3.5 379.688)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <g id="Group_53796" data-name="Group 53796">
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
    <g id="Group_53797" data-name="Group 53797" transform="translate(14.637 -0.259)">
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
    <g id="Group_53798" data-name="Group 53798" transform="translate(29.273)">
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
    <g id="Group_53799" data-name="Group 53799" transform="translate(43.91)">
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
    <g id="Group_53800" data-name="Group 53800" transform="translate(58.547 0)">
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
    <g id="Group_53801" data-name="Group 53801" transform="translate(73.183 -0.259)">
      <line
        id="Line_1872-6"
        data-name="Line 1872"
        y2="50"
        transform="translate(644.5 161.5)"
        fill="none"
        stroke="#96a0b5"
        stroke-width="1"
      />
    </g>
    <g id="Group_53634" data-name="Group 53634" transform="translate(628.156 183.334)">
      <rect id="Rectangle_10006" data-name="Rectangle 10006" width="2" height="8" fill="#96a0b5" />
      <rect
        id="Rectangle_10024"
        data-name="Rectangle 10024"
        width="2"
        height="5"
        transform="translate(2 4)"
        fill="#96a0b5"
      />
    </g>
    <g id="Group_53909" data-name="Group 53909" transform="translate(713.574 183.334)">
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
</svg>
`,
    [slidingDesignIconKeys.SEVEN_TRACK_SEVEN_PANEL]: `<svg width="124" height="51" viewBox="0 0 124 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M123 1L123 51L0.999975 51L0.999975 1L123 1Z"
  stroke="#96A0B5"
  stroke-width="0.995179"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M17.2 4L17.2 48H4.17144L4.17144 4H17.2Z"
  stroke="#96A0B5"
  stroke-width="0.995179"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M106.8 4V48H119.829V4H106.8Z"
  stroke="#96A0B5"
  stroke-width="0.995179"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M34.4857 4L34.4857 48H20.3715L20.3715 4H34.4857Z"
  stroke="#96A0B5"
  stroke-width="0.995179"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M51.7715 4L51.7715 48H37.6572L37.6572 4H51.7715Z"
  stroke="#96A0B5"
  stroke-width="0.995179"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M69.0572 4V48H54.9429L54.9429 4H69.0572Z"
  stroke="#96A0B5"
  stroke-width="0.995179"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M86.3429 4V48H72.2286V4H86.3429Z"
  stroke="#96A0B5"
  stroke-width="0.995179"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M103.629 4V48H89.5143V4H103.629Z"
  stroke="#96A0B5"
  stroke-width="0.995179"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M11.8376 24.0388C11.7313 24.0834 11.6461 24.1618 11.5977 24.2597C11.563 24.3709 11.5652 24.4891 11.6042 24.5991C11.7817 24.8296 11.9868 25.0409 12.2158 25.229L13.0477 25.9933L8.09914 26.0043L6.64589 26.0152L6.55837 26.066C6.50003 26.103 6.4492 26.1491 6.40819 26.2023C6.35717 26.268 6.3348 26.349 6.34552 26.4292C6.3348 26.5094 6.35717 26.5904 6.40819 26.6561C6.44931 26.709 6.50014 26.7548 6.55837 26.7915L6.64589 26.8422L8.09914 26.8532L13.0477 26.8641L12.2158 27.6284C11.7522 28.0534 11.8624 27.9737 11.8441 28.0125C11.8051 28.1225 11.8028 28.2407 11.8376 28.3519C11.8865 28.454 11.9768 28.5345 12.0893 28.5761C12.2017 28.6178 12.3274 28.6173 12.4394 28.5748C12.5388 28.532 14.4923 26.7686 14.5745 26.6452C14.6133 26.5768 14.633 26.5006 14.6319 26.4235C14.6307 26.3464 14.6088 26.2707 14.568 26.2033C14.4707 26.07 12.299 24.0786 12.2006 24.0368C12.1437 24.0126 12.0818 24 12.0191 24C11.9564 24 11.8945 24.0126 11.8376 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M111.851 24.0388C111.958 24.0834 112.043 24.1618 112.091 24.2597C112.126 24.3709 112.124 24.4891 112.085 24.5991C111.907 24.8296 111.702 25.0409 111.473 25.229L110.641 25.9933L115.59 26.0043L117.043 26.0152L117.131 26.066C117.189 26.103 117.24 26.1491 117.281 26.2023C117.332 26.268 117.354 26.349 117.344 26.4292C117.354 26.5094 117.332 26.5904 117.281 26.6561C117.24 26.709 117.189 26.7548 117.131 26.7915L117.043 26.8422L115.59 26.8532L110.641 26.8641L111.473 27.6284C111.937 28.0534 111.827 27.9737 111.845 28.0125C111.884 28.1225 111.886 28.2407 111.851 28.3519C111.803 28.454 111.712 28.5345 111.6 28.5761C111.487 28.6178 111.362 28.6173 111.25 28.5748C111.15 28.532 109.197 26.7686 109.115 26.6452C109.076 26.5768 109.056 26.5006 109.057 26.4235C109.058 26.3464 109.08 26.2707 109.121 26.2033C109.218 26.07 111.39 24.0786 111.488 24.0368C111.545 24.0126 111.607 24 111.67 24C111.733 24 111.795 24.0126 111.851 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M24.2515 24.0388C24.3578 24.0834 24.4429 24.1618 24.4913 24.2597C24.5261 24.3709 24.5238 24.4891 24.4849 24.5991C24.3074 24.8296 24.1022 25.0409 23.8733 25.229L23.0413 25.9933L27.9899 26.0043L29.4432 26.0152L29.5307 26.066C29.589 26.103 29.6399 26.1491 29.6809 26.2023C29.7319 26.268 29.7543 26.349 29.7436 26.4292C29.7543 26.5094 29.7319 26.5904 29.6809 26.6561C29.6398 26.709 29.5889 26.7548 29.5307 26.7915L29.4432 26.8422L27.9899 26.8532L23.0413 26.8641L23.8733 27.6284C24.3368 28.0534 24.2266 27.9737 24.245 28.0125C24.284 28.1225 24.2862 28.2407 24.2515 28.3519C24.2025 28.454 24.1122 28.5345 23.9998 28.5761C23.8874 28.6178 23.7617 28.6173 23.6497 28.5748C23.5502 28.532 21.5967 26.7686 21.5146 26.6452C21.4758 26.5768 21.4561 26.5006 21.4572 26.4235C21.4583 26.3464 21.4803 26.2707 21.5211 26.2033C21.6183 26.07 23.7901 24.0786 23.8884 24.0368C23.9453 24.0126 24.0073 24 24.07 24C24.1326 24 24.1946 24.0126 24.2515 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M29.7543 24.0388C29.6481 24.0834 29.5629 24.1618 29.5145 24.2597C29.4797 24.3709 29.482 24.4891 29.521 24.5991C29.6984 24.8296 29.9036 25.0409 30.1325 25.229L30.9645 25.9933L26.0159 26.0043L24.5626 26.0152L24.4751 26.066C24.4168 26.103 24.3659 26.1491 24.3249 26.2023C24.2739 26.268 24.2516 26.349 24.2623 26.4292C24.2516 26.5094 24.2739 26.5904 24.3249 26.6561C24.3661 26.709 24.4169 26.7548 24.4751 26.7915L24.5626 26.8422L26.0159 26.8532L30.9645 26.8641L30.1325 27.6284C29.669 28.0534 29.7792 27.9737 29.7608 28.0125C29.7219 28.1225 29.7196 28.2407 29.7543 28.3519C29.8033 28.454 29.8936 28.5345 30.006 28.5761C30.1185 28.6178 30.2441 28.6173 30.3562 28.5748C30.4556 28.532 32.4091 26.7686 32.4912 26.6452C32.53 26.5768 32.5498 26.5006 32.5486 26.4235C32.5475 26.3464 32.5255 26.2707 32.4847 26.2033C32.3875 26.07 30.2157 24.0786 30.1174 24.0368C30.0605 24.0126 29.9986 24 29.9359 24C29.8732 24 29.8112 24.0126 29.7543 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M41.5372 24.0388C41.6435 24.0834 41.7287 24.1618 41.7771 24.2597C41.8118 24.3709 41.8096 24.4891 41.7706 24.5991C41.5931 24.8296 41.388 25.0409 41.159 25.229L40.3271 25.9933L45.2757 26.0043L46.7289 26.0152L46.8164 26.066C46.8748 26.103 46.9256 26.1491 46.9666 26.2023C47.0176 26.268 47.04 26.349 47.0293 26.4292C47.04 26.5094 47.0176 26.5904 46.9666 26.6561C46.9255 26.709 46.8747 26.7548 46.8164 26.7915L46.7289 26.8422L45.2757 26.8532L40.3271 26.8641L41.159 27.6284C41.6226 28.0534 41.5124 27.9737 41.5307 28.0125C41.5697 28.1225 41.572 28.2407 41.5372 28.3519C41.4883 28.454 41.398 28.5345 41.2855 28.5761C41.1731 28.6178 41.0475 28.6173 40.9354 28.5748C40.836 28.532 38.8825 26.7686 38.8004 26.6452C38.7615 26.5768 38.7418 26.5006 38.7429 26.4235C38.7441 26.3464 38.766 26.2707 38.8068 26.2033C38.9041 26.07 41.0759 24.0786 41.1742 24.0368C41.2311 24.0126 41.293 24 41.3557 24C41.4184 24 41.4803 24.0126 41.5372 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M47.04 24.0388C46.9338 24.0834 46.8486 24.1618 46.8002 24.2597C46.7654 24.3709 46.7677 24.4891 46.8067 24.5991C46.9841 24.8296 47.1893 25.0409 47.4182 25.229L48.2502 25.9933L43.3016 26.0043L41.8483 26.0152L41.7608 26.066C41.7025 26.103 41.6517 26.1491 41.6106 26.2023C41.5596 26.268 41.5373 26.349 41.548 26.4292C41.5373 26.5094 41.5596 26.5904 41.6106 26.6561C41.6518 26.709 41.7026 26.7548 41.7608 26.7915L41.8483 26.8422L43.3016 26.8532L48.2502 26.8641L47.4182 27.6284C46.9547 28.0534 47.0649 27.9737 47.0465 28.0125C47.0076 28.1225 47.0053 28.2407 47.04 28.3519C47.089 28.454 47.1793 28.5345 47.2917 28.5761C47.4042 28.6178 47.5298 28.6173 47.6419 28.5748C47.7413 28.532 49.6948 26.7686 49.7769 26.6452C49.8157 26.5768 49.8355 26.5006 49.8343 26.4235C49.8332 26.3464 49.8112 26.2707 49.7704 26.2033C49.6732 26.07 47.5014 24.0786 47.4031 24.0368C47.3462 24.0126 47.2843 24 47.2216 24C47.1589 24 47.0969 24.0126 47.04 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M58.8229 24.0388C58.9292 24.0834 59.0144 24.1618 59.0628 24.2597C59.0975 24.3709 59.0953 24.4891 59.0563 24.5991C58.8788 24.8296 58.6737 25.0409 58.4448 25.229L57.6128 25.9933L62.5614 26.0043L64.0146 26.0152L64.1021 26.066C64.1605 26.103 64.2113 26.1491 64.2523 26.2023C64.3033 26.268 64.3257 26.349 64.315 26.4292C64.3257 26.5094 64.3033 26.5904 64.2523 26.6561C64.2112 26.709 64.1604 26.7548 64.1021 26.7915L64.0146 26.8422L62.5614 26.8532L57.6128 26.8641L58.4448 27.6284C58.9083 28.0534 58.7981 27.9737 58.8164 28.0125C58.8554 28.1225 58.8577 28.2407 58.8229 28.3519C58.774 28.454 58.6837 28.5345 58.5712 28.5761C58.4588 28.6178 58.3332 28.6173 58.2211 28.5748C58.1217 28.532 56.1682 26.7686 56.0861 26.6452C56.0472 26.5768 56.0275 26.5006 56.0286 26.4235C56.0298 26.3464 56.0517 26.2707 56.0925 26.2033C56.1898 26.07 58.3616 24.0786 58.4599 24.0368C58.5168 24.0126 58.5787 24 58.6414 24C58.7041 24 58.766 24.0126 58.8229 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M64.3258 24.0388C64.2195 24.0834 64.1343 24.1618 64.0859 24.2597C64.0512 24.3709 64.0534 24.4891 64.0924 24.5991C64.2699 24.8296 64.475 25.0409 64.704 25.229L65.5359 25.9933L60.5873 26.0043L59.1341 26.0152L59.0466 26.066C58.9882 26.103 58.9374 26.1491 58.8964 26.2023C58.8454 26.268 58.823 26.349 58.8337 26.4292C58.823 26.5094 58.8454 26.5904 58.8964 26.6561C58.9375 26.709 58.9883 26.7548 59.0466 26.7915L59.1341 26.8422L60.5873 26.8532L65.5359 26.8641L64.704 27.6284C64.2404 28.0534 64.3506 27.9737 64.3323 28.0125C64.2933 28.1225 64.291 28.2407 64.3258 28.3519C64.3747 28.454 64.465 28.5345 64.5775 28.5761C64.6899 28.6178 64.8155 28.6173 64.9276 28.5748C65.027 28.532 66.9805 26.7686 67.0626 26.6452C67.1015 26.5768 67.1212 26.5006 67.1201 26.4235C67.1189 26.3464 67.097 26.2707 67.0562 26.2033C66.9589 26.07 64.7872 24.0786 64.6888 24.0368C64.6319 24.0126 64.57 24 64.5073 24C64.4446 24 64.3827 24.0126 64.3258 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M76.1086 24.0388C76.2149 24.0834 76.3001 24.1618 76.3485 24.2597C76.3832 24.3709 76.381 24.4891 76.342 24.5991C76.1645 24.8296 75.9594 25.0409 75.7305 25.229L74.8985 25.9933L79.8471 26.0043L81.3003 26.0152L81.3878 26.066C81.4462 26.103 81.497 26.1491 81.538 26.2023C81.5891 26.268 81.6114 26.349 81.6007 26.4292C81.6114 26.5094 81.5891 26.5904 81.538 26.6561C81.4969 26.709 81.4461 26.7548 81.3878 26.7915L81.3003 26.8422L79.8471 26.8532L74.8985 26.8641L75.7305 27.6284C76.194 28.0534 76.0838 27.9737 76.1021 28.0125C76.1411 28.1225 76.1434 28.2407 76.1086 28.3519C76.0597 28.454 75.9694 28.5345 75.8569 28.5761C75.7445 28.6178 75.6189 28.6173 75.5068 28.5748C75.4074 28.532 73.4539 26.7686 73.3718 26.6452C73.3329 26.5768 73.3132 26.5006 73.3143 26.4235C73.3155 26.3464 73.3374 26.2707 73.3783 26.2033C73.4755 26.07 75.6473 24.0786 75.7456 24.0368C75.8025 24.0126 75.8644 24 75.9271 24C75.9898 24 76.0517 24.0126 76.1086 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M81.6115 24.0388C81.5052 24.0834 81.42 24.1618 81.3716 24.2597C81.3369 24.3709 81.3391 24.4891 81.3781 24.5991C81.5556 24.8296 81.7607 25.0409 81.9897 25.229L82.8216 25.9933L77.873 26.0043L76.4198 26.0152L76.3323 26.066C76.2739 26.103 76.2231 26.1491 76.1821 26.2023C76.1311 26.268 76.1087 26.349 76.1194 26.4292C76.1087 26.5094 76.1311 26.5904 76.1821 26.6561C76.2232 26.709 76.274 26.7548 76.3323 26.7915L76.4198 26.8422L77.873 26.8532L82.8216 26.8641L81.9897 27.6284C81.5261 28.0534 81.6363 27.9737 81.618 28.0125C81.579 28.1225 81.5767 28.2407 81.6115 28.3519C81.6604 28.454 81.7507 28.5345 81.8632 28.5761C81.9756 28.6178 82.1013 28.6173 82.2133 28.5748C82.3127 28.532 84.2662 26.7686 84.3483 26.6452C84.3872 26.5768 84.4069 26.5006 84.4058 26.4235C84.4046 26.3464 84.3827 26.2707 84.3419 26.2033C84.2446 26.07 82.0729 24.0786 81.9745 24.0368C81.9176 24.0126 81.8557 24 81.793 24C81.7303 24 81.6684 24.0126 81.6115 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M93.3943 24.0388C93.5006 24.0834 93.5858 24.1618 93.6342 24.2597C93.6689 24.3709 93.6667 24.4891 93.6277 24.5991C93.4502 24.8296 93.2451 25.0409 93.0162 25.229L92.1842 25.9933L97.1328 26.0043L98.586 26.0152L98.6736 26.066C98.7319 26.103 98.7827 26.1491 98.8237 26.2023C98.8748 26.268 98.8971 26.349 98.8864 26.4292C98.8971 26.5094 98.8748 26.5904 98.8237 26.6561C98.7826 26.709 98.7318 26.7548 98.6736 26.7915L98.586 26.8422L97.1328 26.8532L92.1842 26.8641L93.0162 27.6284C93.4797 28.0534 93.3695 27.9737 93.3878 28.0125C93.4268 28.1225 93.4291 28.2407 93.3943 28.3519C93.3454 28.454 93.2551 28.5345 93.1426 28.5761C93.0302 28.6178 92.9046 28.6173 92.7925 28.5748C92.6931 28.532 90.7396 26.7686 90.6575 26.6452C90.6187 26.5768 90.5989 26.5006 90.6001 26.4235C90.6012 26.3464 90.6231 26.2707 90.664 26.2033C90.7612 26.07 92.933 24.0786 93.0313 24.0368C93.0882 24.0126 93.1501 24 93.2128 24C93.2755 24 93.3374 24.0126 93.3943 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M98.8972 24.0388C98.7909 24.0834 98.7057 24.1618 98.6573 24.2597C98.6226 24.3709 98.6248 24.4891 98.6638 24.5991C98.8413 24.8296 99.0464 25.0409 99.2754 25.229L100.107 25.9933L95.1587 26.0043L93.7055 26.0152L93.618 26.066C93.5596 26.103 93.5088 26.1491 93.4678 26.2023C93.4168 26.268 93.3944 26.349 93.4051 26.4292C93.3944 26.5094 93.4168 26.5904 93.4678 26.6561C93.5089 26.709 93.5597 26.7548 93.618 26.7915L93.7055 26.8422L95.1587 26.8532L100.107 26.8641L99.2754 27.6284C98.8118 28.0534 98.922 27.9737 98.9037 28.0125C98.8647 28.1225 98.8625 28.2407 98.8972 28.3519C98.9461 28.454 99.0365 28.5345 99.1489 28.5761C99.2613 28.6178 99.387 28.6173 99.499 28.5748C99.5984 28.532 101.552 26.7686 101.634 26.6452C101.673 26.5768 101.693 26.5006 101.691 26.4235C101.69 26.3464 101.668 26.2707 101.628 26.2033C101.53 26.07 99.3586 24.0786 99.2602 24.0368C99.2033 24.0126 99.1414 24 99.0787 24C99.016 24 98.9541 24.0126 98.8972 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path d="M20.3715 1V50.7589" stroke="#96A0B5" stroke-width="0.995179" />
<path d="M37.6572 1V50.7589" stroke="#96A0B5" stroke-width="0.995179" />
<path d="M54.9429 1V50.7589" stroke="#96A0B5" stroke-width="0.995179" />
<path d="M72.2286 1V50.7589" stroke="#96A0B5" stroke-width="0.995179" />
<path d="M106.8 1V50.7589" stroke="#96A0B5" stroke-width="0.995179" />
<path d="M89.5143 1V50.7589" stroke="#96A0B5" stroke-width="0.995179" />
<path d="M123 24H120V32H123V24Z" fill="#96A0B5" />
<path d="M119.818 27.9805H117.657V32.9564H119.818V27.9805Z" fill="#96A0B5" />
<path d="M1 24H4V32H1V24Z" fill="#96A0B5" />
<path d="M4.60967 27.9805H6.77063V32.9564H4.60967V27.9805Z" fill="#96A0B5" />
</svg>`,
    [slidingDesignIconKeys.EIGHT_TRACK_EIGHT_PANEL]: `<svg width="131" height="51" viewBox="0 0 131 52" fill="none" xmlns="http://www.w3.org/2000/svg">
<path
  d="M130 1V51L1 51V1L130 1Z"
  stroke="#96A0B5"
  stroke-width="1"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M16.0001 4L16.0001 48H4.00009L4.00009 4H16.0001Z"
  stroke="#96A0B5"
  stroke-width="1"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M115 4V48H127V4H115Z"
  stroke="#96A0B5"
  stroke-width="1"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M32.0001 4L32.0001 48H19.0001L19.0001 4H32.0001Z"
  stroke="#96A0B5"
  stroke-width="1"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M48.0001 4L48.0001 48H35.0001L35.0001 4H48.0001Z"
  stroke="#96A0B5"
  stroke-width="1"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M64.0001 4V48H51.0001L51.0001 4H64.0001Z"
  stroke="#96A0B5"
  stroke-width="1"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M80.0001 4V48H67.0001V4H80.0001Z"
  stroke="#96A0B5"
  stroke-width="1"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M96.0001 4V48H83.0001V4H96.0001Z"
  stroke="#96A0B5"
  stroke-width="1"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M112 4V48H99.0001V4H112Z"
  stroke="#96A0B5"
  stroke-width="1"
  stroke-miterlimit="10"
  stroke-linecap="round"
  stroke-linejoin="round"
/>
<path
  d="M11.0609 24.0388C10.963 24.0834 10.8846 24.1618 10.84 24.2597C10.808 24.3709 10.8101 24.4891 10.846 24.5991C11.0094 24.8296 11.1984 25.0409 11.4092 25.229L12.1755 25.9933L7.61759 26.0043L6.27907 26.0152L6.19847 26.066C6.14473 26.103 6.09791 26.1491 6.06014 26.2023C6.01315 26.268 5.99255 26.349 6.00242 26.4292C5.99255 26.5094 6.01315 26.5904 6.06014 26.6561C6.09801 26.709 6.14483 26.7548 6.19847 26.7915L6.27907 26.8422L7.61759 26.8532L12.1755 26.8641L11.4092 27.6284C10.9823 28.0534 11.0838 27.9737 11.0669 28.0125C11.031 28.1225 11.0289 28.2407 11.0609 28.3519C11.106 28.454 11.1892 28.5345 11.2927 28.5761C11.3963 28.6178 11.512 28.6173 11.6152 28.5748C11.7068 28.532 13.5061 26.7686 13.5817 26.6452C13.6175 26.5768 13.6356 26.5006 13.6346 26.4235C13.6335 26.3464 13.6133 26.2707 13.5757 26.2033C13.4862 26.07 11.4859 24.0786 11.3953 24.0368C11.3429 24.0126 11.2858 24 11.2281 24C11.1704 24 11.1133 24.0126 11.0609 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M119.574 24.0388C119.672 24.0834 119.75 24.1618 119.795 24.2597C119.827 24.3709 119.825 24.4891 119.789 24.5991C119.625 24.8296 119.436 25.0409 119.226 25.229L118.459 25.9933L123.017 26.0043L124.356 26.0152L124.436 26.066C124.49 26.103 124.537 26.1491 124.575 26.2023C124.622 26.268 124.642 26.349 124.632 26.4292C124.642 26.5094 124.622 26.5904 124.575 26.6561C124.537 26.709 124.49 26.7548 124.436 26.7915L124.356 26.8422L123.017 26.8532L118.459 26.8641L119.226 27.6284C119.652 28.0534 119.551 27.9737 119.568 28.0125C119.604 28.1225 119.606 28.2407 119.574 28.3519C119.529 28.454 119.446 28.5345 119.342 28.5761C119.238 28.6178 119.123 28.6173 119.02 28.5748C118.928 28.532 117.129 26.7686 117.053 26.6452C117.017 26.5768 116.999 26.5006 117 26.4235C117.001 26.3464 117.021 26.2707 117.059 26.2033C117.149 26.07 119.149 24.0786 119.239 24.0368C119.292 24.0126 119.349 24 119.407 24C119.464 24 119.521 24.0126 119.574 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M22.5738 24.0388C22.6717 24.0834 22.7502 24.1618 22.7947 24.2597C22.8267 24.3709 22.8247 24.4891 22.7888 24.5991C22.6253 24.8296 22.4364 25.0409 22.2255 25.229L21.4592 25.9933L26.0171 26.0043L27.3556 26.0152L27.4363 26.066C27.49 26.103 27.5368 26.1491 27.5746 26.2023C27.6216 26.268 27.6422 26.349 27.6323 26.4292C27.6422 26.5094 27.6216 26.5904 27.5746 26.6561C27.5367 26.709 27.4899 26.7548 27.4363 26.7915L27.3556 26.8422L26.0171 26.8532L21.4592 26.8641L22.2255 27.6284C22.6524 28.0534 22.5509 27.9737 22.5678 28.0125C22.6037 28.1225 22.6058 28.2407 22.5738 28.3519C22.5287 28.454 22.4456 28.5345 22.342 28.5761C22.2384 28.6178 22.1227 28.6173 22.0195 28.5748C21.9279 28.532 20.1287 26.7686 20.053 26.6452C20.0173 26.5768 19.9991 26.5006 20.0001 26.4235C20.0012 26.3464 20.0214 26.2707 20.059 26.2033C20.1486 26.07 22.1489 24.0786 22.2394 24.0368C22.2918 24.0126 22.3489 24 22.4066 24C22.4644 24 22.5214 24.0126 22.5738 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M27.6422 24.0388C27.5444 24.0834 27.4659 24.1618 27.4213 24.2597C27.3893 24.3709 27.3914 24.4891 27.4273 24.5991C27.5907 24.8296 27.7797 25.0409 27.9906 25.229L28.7568 25.9933L24.1989 26.0043L22.8604 26.0152L22.7798 26.066C22.7261 26.103 22.6792 26.1491 22.6415 26.2023C22.5945 26.268 22.5739 26.349 22.5837 26.4292C22.5739 26.5094 22.5945 26.5904 22.6415 26.6561C22.6793 26.709 22.7262 26.7548 22.7798 26.7915L22.8604 26.8422L24.1989 26.8532L28.7568 26.8641L27.9906 27.6284C27.5636 28.0534 27.6651 27.9737 27.6482 28.0125C27.6123 28.1225 27.6102 28.2407 27.6422 28.3519C27.6873 28.454 27.7705 28.5345 27.8741 28.5761C27.9776 28.6178 28.0933 28.6173 28.1966 28.5748C28.2881 28.532 30.0874 26.7686 30.163 26.6452C30.1988 26.5768 30.217 26.5006 30.2159 26.4235C30.2149 26.3464 30.1946 26.2707 30.1571 26.2033C30.0675 26.07 28.0672 24.0786 27.9766 24.0368C27.9242 24.0126 27.8672 24 27.8094 24C27.7517 24 27.6946 24.0126 27.6422 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M38.5738 24.0388C38.6717 24.0834 38.7502 24.1618 38.7947 24.2597C38.8267 24.3709 38.8247 24.4891 38.7888 24.5991C38.6253 24.8296 38.4364 25.0409 38.2255 25.229L37.4592 25.9933L42.0171 26.0043L43.3556 26.0152L43.4363 26.066C43.49 26.103 43.5368 26.1491 43.5746 26.2023C43.6216 26.268 43.6422 26.349 43.6323 26.4292C43.6422 26.5094 43.6216 26.5904 43.5746 26.6561C43.5367 26.709 43.4899 26.7548 43.4363 26.7915L43.3556 26.8422L42.0171 26.8532L37.4592 26.8641L38.2255 27.6284C38.6524 28.0534 38.5509 27.9737 38.5678 28.0125C38.6037 28.1225 38.6058 28.2407 38.5738 28.3519C38.5287 28.454 38.4456 28.5345 38.342 28.5761C38.2384 28.6178 38.1227 28.6173 38.0195 28.5748C37.9279 28.532 36.1287 26.7686 36.053 26.6452C36.0173 26.5768 35.9991 26.5006 36.0001 26.4235C36.0012 26.3464 36.0214 26.2707 36.059 26.2033C36.1486 26.07 38.1489 24.0786 38.2394 24.0368C38.2918 24.0126 38.3489 24 38.4066 24C38.4644 24 38.5214 24.0126 38.5738 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M43.6422 24.0388C43.5444 24.0834 43.4659 24.1618 43.4213 24.2597C43.3893 24.3709 43.3914 24.4891 43.4273 24.5991C43.5907 24.8296 43.7797 25.0409 43.9906 25.229L44.7568 25.9933L40.1989 26.0043L38.8604 26.0152L38.7798 26.066C38.7261 26.103 38.6792 26.1491 38.6415 26.2023C38.5945 26.268 38.5739 26.349 38.5837 26.4292C38.5739 26.5094 38.5945 26.5904 38.6415 26.6561C38.6793 26.709 38.7262 26.7548 38.7798 26.7915L38.8604 26.8422L40.1989 26.8532L44.7568 26.8641L43.9906 27.6284C43.5636 28.0534 43.6651 27.9737 43.6482 28.0125C43.6123 28.1225 43.6102 28.2407 43.6422 28.3519C43.6873 28.454 43.7705 28.5345 43.8741 28.5761C43.9776 28.6178 44.0933 28.6173 44.1966 28.5748C44.2881 28.532 46.0874 26.7686 46.163 26.6452C46.1988 26.5768 46.217 26.5006 46.2159 26.4235C46.2149 26.3464 46.1946 26.2707 46.1571 26.2033C46.0675 26.07 44.0672 24.0786 43.9766 24.0368C43.9242 24.0126 43.8672 24 43.8094 24C43.7517 24 43.6946 24.0126 43.6422 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M54.5738 24.0388C54.6717 24.0834 54.7502 24.1618 54.7947 24.2597C54.8267 24.3709 54.8247 24.4891 54.7888 24.5991C54.6253 24.8296 54.4364 25.0409 54.2255 25.229L53.4592 25.9933L58.0171 26.0043L59.3556 26.0152L59.4363 26.066C59.49 26.103 59.5368 26.1491 59.5746 26.2023C59.6216 26.268 59.6422 26.349 59.6323 26.4292C59.6422 26.5094 59.6216 26.5904 59.5746 26.6561C59.5367 26.709 59.4899 26.7548 59.4363 26.7915L59.3556 26.8422L58.0171 26.8532L53.4592 26.8641L54.2255 27.6284C54.6524 28.0534 54.5509 27.9737 54.5678 28.0125C54.6037 28.1225 54.6058 28.2407 54.5738 28.3519C54.5287 28.454 54.4456 28.5345 54.342 28.5761C54.2384 28.6178 54.1227 28.6173 54.0195 28.5748C53.9279 28.532 52.1287 26.7686 52.053 26.6452C52.0173 26.5768 51.9991 26.5006 52.0001 26.4235C52.0012 26.3464 52.0214 26.2707 52.059 26.2033C52.1486 26.07 54.1489 24.0786 54.2394 24.0368C54.2918 24.0126 54.3489 24 54.4066 24C54.4644 24 54.5214 24.0126 54.5738 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M59.6422 24.0388C59.5444 24.0834 59.4659 24.1618 59.4213 24.2597C59.3893 24.3709 59.3914 24.4891 59.4273 24.5991C59.5907 24.8296 59.7797 25.0409 59.9906 25.229L60.7568 25.9933L56.1989 26.0043L54.8604 26.0152L54.7798 26.066C54.7261 26.103 54.6792 26.1491 54.6415 26.2023C54.5945 26.268 54.5739 26.349 54.5837 26.4292C54.5739 26.5094 54.5945 26.5904 54.6415 26.6561C54.6793 26.709 54.7262 26.7548 54.7798 26.7915L54.8604 26.8422L56.1989 26.8532L60.7568 26.8641L59.9906 27.6284C59.5636 28.0534 59.6651 27.9737 59.6482 28.0125C59.6123 28.1225 59.6102 28.2407 59.6422 28.3519C59.6873 28.454 59.7705 28.5345 59.8741 28.5761C59.9776 28.6178 60.0933 28.6173 60.1966 28.5748C60.2881 28.532 62.0874 26.7686 62.163 26.6452C62.1988 26.5768 62.217 26.5006 62.2159 26.4235C62.2149 26.3464 62.1946 26.2707 62.1571 26.2033C62.0675 26.07 60.0672 24.0786 59.9766 24.0368C59.9242 24.0126 59.8672 24 59.8094 24C59.7517 24 59.6946 24.0126 59.6422 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M70.5738 24.0388C70.6717 24.0834 70.7502 24.1618 70.7947 24.2597C70.8267 24.3709 70.8247 24.4891 70.7888 24.5991C70.6253 24.8296 70.4364 25.0409 70.2255 25.229L69.4592 25.9933L74.0171 26.0043L75.3556 26.0152L75.4363 26.066C75.49 26.103 75.5368 26.1491 75.5746 26.2023C75.6216 26.268 75.6422 26.349 75.6323 26.4292C75.6422 26.5094 75.6216 26.5904 75.5746 26.6561C75.5367 26.709 75.4899 26.7548 75.4363 26.7915L75.3556 26.8422L74.0171 26.8532L69.4592 26.8641L70.2255 27.6284C70.6524 28.0534 70.5509 27.9737 70.5678 28.0125C70.6037 28.1225 70.6058 28.2407 70.5738 28.3519C70.5287 28.454 70.4456 28.5345 70.342 28.5761C70.2384 28.6178 70.1227 28.6173 70.0195 28.5748C69.9279 28.532 68.1287 26.7686 68.053 26.6452C68.0173 26.5768 67.9991 26.5006 68.0001 26.4235C68.0012 26.3464 68.0214 26.2707 68.059 26.2033C68.1486 26.07 70.1489 24.0786 70.2394 24.0368C70.2918 24.0126 70.3489 24 70.4066 24C70.4644 24 70.5214 24.0126 70.5738 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M75.6422 24.0388C75.5444 24.0834 75.4659 24.1618 75.4213 24.2597C75.3893 24.3709 75.3914 24.4891 75.4273 24.5991C75.5907 24.8296 75.7797 25.0409 75.9906 25.229L76.7568 25.9933L72.1989 26.0043L70.8604 26.0152L70.7798 26.066C70.7261 26.103 70.6792 26.1491 70.6415 26.2023C70.5945 26.268 70.5739 26.349 70.5837 26.4292C70.5739 26.5094 70.5945 26.5904 70.6415 26.6561C70.6793 26.709 70.7262 26.7548 70.7798 26.7915L70.8604 26.8422L72.1989 26.8532L76.7568 26.8641L75.9906 27.6284C75.5636 28.0534 75.6651 27.9737 75.6482 28.0125C75.6123 28.1225 75.6102 28.2407 75.6422 28.3519C75.6873 28.454 75.7705 28.5345 75.8741 28.5761C75.9776 28.6178 76.0933 28.6173 76.1966 28.5748C76.2881 28.532 78.0874 26.7686 78.163 26.6452C78.1988 26.5768 78.217 26.5006 78.2159 26.4235C78.2149 26.3464 78.1946 26.2707 78.1571 26.2033C78.0675 26.07 76.0672 24.0786 75.9766 24.0368C75.9242 24.0126 75.8672 24 75.8094 24C75.7517 24 75.6946 24.0126 75.6422 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M87.5738 24.0388C87.6717 24.0834 87.7502 24.1618 87.7947 24.2597C87.8267 24.3709 87.8247 24.4891 87.7888 24.5991C87.6253 24.8296 87.4364 25.0409 87.2255 25.229L86.4592 25.9933L91.0171 26.0043L92.3556 26.0152L92.4363 26.066C92.49 26.103 92.5368 26.1491 92.5746 26.2023C92.6216 26.268 92.6422 26.349 92.6323 26.4292C92.6422 26.5094 92.6216 26.5904 92.5746 26.6561C92.5367 26.709 92.4899 26.7548 92.4363 26.7915L92.3556 26.8422L91.0171 26.8532L86.4592 26.8641L87.2255 27.6284C87.6524 28.0534 87.5509 27.9737 87.5678 28.0125C87.6037 28.1225 87.6058 28.2407 87.5738 28.3519C87.5287 28.454 87.4456 28.5345 87.342 28.5761C87.2384 28.6178 87.1227 28.6173 87.0195 28.5748C86.9279 28.532 85.1287 26.7686 85.053 26.6452C85.0173 26.5768 84.9991 26.5006 85.0001 26.4235C85.0012 26.3464 85.0214 26.2707 85.059 26.2033C85.1486 26.07 87.1489 24.0786 87.2394 24.0368C87.2918 24.0126 87.3489 24 87.4066 24C87.4644 24 87.5214 24.0126 87.5738 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M92.6422 24.0388C92.5444 24.0834 92.4659 24.1618 92.4213 24.2597C92.3893 24.3709 92.3914 24.4891 92.4273 24.5991C92.5907 24.8296 92.7797 25.0409 92.9906 25.229L93.7568 25.9933L89.1989 26.0043L87.8604 26.0152L87.7798 26.066C87.7261 26.103 87.6792 26.1491 87.6415 26.2023C87.5945 26.268 87.5739 26.349 87.5837 26.4292C87.5739 26.5094 87.5945 26.5904 87.6415 26.6561C87.6793 26.709 87.7262 26.7548 87.7798 26.7915L87.8604 26.8422L89.1989 26.8532L93.7568 26.8641L92.9906 27.6284C92.5636 28.0534 92.6651 27.9737 92.6482 28.0125C92.6123 28.1225 92.6102 28.2407 92.6422 28.3519C92.6873 28.454 92.7705 28.5345 92.8741 28.5761C92.9776 28.6178 93.0933 28.6173 93.1966 28.5748C93.2881 28.532 95.0874 26.7686 95.163 26.6452C95.1988 26.5768 95.217 26.5006 95.2159 26.4235C95.2149 26.3464 95.1946 26.2707 95.1571 26.2033C95.0675 26.07 93.0672 24.0786 92.9766 24.0368C92.9242 24.0126 92.8672 24 92.8094 24C92.7517 24 92.6946 24.0126 92.6422 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M102.574 24.0388C102.672 24.0834 102.75 24.1618 102.795 24.2597C102.827 24.3709 102.825 24.4891 102.789 24.5991C102.625 24.8296 102.436 25.0409 102.226 25.229L101.459 25.9933L106.017 26.0043L107.356 26.0152L107.436 26.066C107.49 26.103 107.537 26.1491 107.575 26.2023C107.622 26.268 107.642 26.349 107.632 26.4292C107.642 26.5094 107.622 26.5904 107.575 26.6561C107.537 26.709 107.49 26.7548 107.436 26.7915L107.356 26.8422L106.017 26.8532L101.459 26.8641L102.226 27.6284C102.652 28.0534 102.551 27.9737 102.568 28.0125C102.604 28.1225 102.606 28.2407 102.574 28.3519C102.529 28.454 102.446 28.5345 102.342 28.5761C102.238 28.6178 102.123 28.6173 102.019 28.5748C101.928 28.532 100.129 26.7686 100.053 26.6452C100.017 26.5768 99.9991 26.5006 100 26.4235C100.001 26.3464 100.021 26.2707 100.059 26.2033C100.149 26.07 102.149 24.0786 102.239 24.0368C102.292 24.0126 102.349 24 102.407 24C102.464 24 102.521 24.0126 102.574 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path
  d="M107.642 24.0388C107.544 24.0834 107.466 24.1618 107.421 24.2597C107.389 24.3709 107.391 24.4891 107.427 24.5991C107.591 24.8296 107.78 25.0409 107.991 25.229L108.757 25.9933L104.199 26.0043L102.86 26.0152L102.78 26.066C102.726 26.103 102.679 26.1491 102.641 26.2023C102.594 26.268 102.574 26.349 102.584 26.4292C102.574 26.5094 102.594 26.5904 102.641 26.6561C102.679 26.709 102.726 26.7548 102.78 26.7915L102.86 26.8422L104.199 26.8532L108.757 26.8641L107.991 27.6284C107.564 28.0534 107.665 27.9737 107.648 28.0125C107.612 28.1225 107.61 28.2407 107.642 28.3519C107.687 28.454 107.77 28.5345 107.874 28.5761C107.978 28.6178 108.093 28.6173 108.197 28.5748C108.288 28.532 110.087 26.7686 110.163 26.6452C110.199 26.5768 110.217 26.5006 110.216 26.4235C110.215 26.3464 110.195 26.2707 110.157 26.2033C110.067 26.07 108.067 24.0786 107.977 24.0368C107.924 24.0126 107.867 24 107.809 24C107.752 24 107.695 24.0126 107.642 24.0368V24.0388Z"
  fill="#96A0B5"
  stroke="#96A0B5"
  stroke-width="0.199036"
/>
<path d="M19.0001 1V50.7589" stroke="#96A0B5" stroke-width="1" />
<path d="M35.0001 1V50.7589" stroke="#96A0B5" stroke-width="1" />
<path d="M51.0001 1V50.7589" stroke="#96A0B5" stroke-width="1" />
<path d="M67.0001 1V50.7589" stroke="#96A0B5" stroke-width="1" />
<path d="M83.0001 1V50.7589" stroke="#96A0B5" stroke-width="1" />
<path d="M99.0001 1V50.7589" stroke="#96A0B5" stroke-width="1" />
<path d="M115 1V50.7589" stroke="#96A0B5" stroke-width="1" />
<path d="M129.99 23H126.99V30.9614H129.99V23Z" fill="#96A0B5" />
<path d="M126.99 26.9805H125V31.9564H126.99V26.9805Z" fill="#96A0B5" />
<path d="M1 24H4V32H1V24Z" fill="#96A0B5" />
<path d="M4.40356 27.9805H6.39392V32.9564H4.40356V27.9805Z" fill="#96A0B5" />
</svg>`,
    [slidingDesignIconKeys.FOUR_TRACK_EIGHT_PANEL_MEETING]: `<svg
*ngIf="viewHandleFromOutside"
width="93"
height="52"
viewBox="0 0 93 52"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<g clip-path="url(#clip0_493_557)">
  <path
    d="M4.61908 27.1639H9.20508L7.71207 25.6709"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M9.20508 27.167L7.71207 28.66"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M10.6191 0.5H0.659149V51.361H10.6191"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M20.8818 0.5V51.361"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M15.0117 28.6602L13.5117 27.1602L15.0117 25.6602"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M14.4252 27.1641H19.5352L18.0352 25.6641"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M19.5352 27.166L18.0352 28.666"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M25.7988 28.6602L24.5268 27.3882L25.7988 26.1162"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M25.7415 27.3882H29.6484L28.3764 26.1162"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M29.6484 27.3896L28.3764 28.6617"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M40.7988 27.1646H35.9918L37.5588 25.5996"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M35.9926 27.165L37.5576 28.73"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M46.5 51.361H30.845V0.5H46.5H10.62V51.361H46.5Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M49.9726 48.8137V2.97168H59.6826V48.8137H49.9726Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M33.54 49.0383V3.19629H43.25V49.0383H33.54Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M52.8685 27.1656H57.5625L56.1095 25.6006"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M57.5625 27.166L56.1095 28.731"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M46.4993 51.361V0.5H62.1543V51.361H46.4993Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M67.2471 27.1646H63.3411L64.5271 25.8926"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M63.3405 27.166L64.5215 28.438"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M67.187 28.4356L68.459 27.1636L67.187 25.8916"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M62.1545 2.97168H69.6445V48.8137H62.1545"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M30.4961 3.19629H23.0061V49.0393H30.4961"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M19.7588 3.19629H12.2688V49.0393H19.7588"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M10.7686 3.19629H3.27853V49.0393H10.7686"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M72.1172 0.5V51.361"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M77.3584 27.1656H73.4524L74.7244 25.8936"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M73.4507 27.166L74.7227 28.438"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M77.2983 28.4366L78.5703 27.1646L77.2983 25.8926"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M46.4989 51.361V0.5H82.3789V51.361H46.4989Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M72.1163 2.97168H79.9062V48.8137H72.1163"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M87.8154 27.1656H83.9094L85.1814 25.8936"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M83.9096 27.166L85.1816 28.438"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M82.3792 2.97168H89.8691V48.8137H82.3781"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M82.3798 0.5H92.3418V51.361H82.3798"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path d="M89.5078 24.5H92.5078V32.5H89.5078V24.5Z" fill="#96A0B5" />
  <path d="M87.5078 28.5H89.5078V34.5H87.5078V28.5Z" fill="#96A0B5" />
  <path d="M0.507812 24.5H3.50781V32.5H0.507812V24.5Z" fill="#96A0B5" />
  <path d="M3.50781 28.5H5.50781V34.5H3.50781V28.5Z" fill="#96A0B5" />
  <path d="M43.0078 24.5H46.0078V32.5H43.0078V24.5Z" fill="#96A0B5" />
  <path d="M41.5078 28.5H43.5078V34.5H41.5078V28.5Z" fill="#96A0B5" />
</g>
<defs>
  <clipPath id="clip0_493_557">
    <rect width="93" height="51.861" fill="white" transform="matrix(-1 0 0 1 93 0)" />
  </clipPath>
</defs>
</svg>`,
    [slidingDesignIconKeys.FIVE_TRACK_TEN_PANEL_MEETING]: `<svg width="97" height="51" viewBox="0 0 97 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_493_705)">
                            <path
                              d="M0.496094 0.711786L0.496094 50.2881L96.5036 50.2881V0.711786L0.496094 0.711786Z"
                              stroke="#96A0B5"
                              stroke-width="0.991526"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M87.1729 3.09123V47.9082H94.1135V3.09123H87.1729Z"
                              stroke="#96A0B5"
                              stroke-width="0.991526"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M90.693 23.0508C90.7716 23.0866 90.8346 23.1497 90.8705 23.2282C90.8979 23.3174 90.8979 23.4127 90.8705 23.5019C90.739 23.6873 90.587 23.8572 90.4174 24.0086L89.8007 24.6243L91.4862 24.6332L92.564 24.6422L92.6295 24.6828C92.6726 24.7124 92.7102 24.7493 92.7405 24.7919C92.7783 24.8447 92.795 24.9098 92.7871 24.9743C92.7951 25.0388 92.7784 25.104 92.7405 25.1568C92.7101 25.1993 92.6725 25.2362 92.6295 25.2658L92.564 25.3065L91.4862 25.3154L89.8007 25.3243L90.4174 25.9401C90.7605 26.2821 90.6791 26.2187 90.693 26.2494C90.722 26.3381 90.7238 26.4334 90.698 26.5231C90.6616 26.6052 90.5946 26.6699 90.5113 26.7034C90.428 26.7369 90.3349 26.7366 90.2518 26.7026C90.1784 26.6688 88.7298 25.248 88.6654 25.1488C88.6358 25.0942 88.6204 25.033 88.6204 24.9709C88.6204 24.9087 88.6358 24.8476 88.6654 24.7929C88.7367 24.6848 90.351 23.0825 90.4213 23.0488C90.4639 23.0289 90.5102 23.0186 90.5572 23.0186C90.6041 23.0186 90.6505 23.0289 90.693 23.0488V23.0508Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path
                              d="M52.9391 23.0508C52.8605 23.0866 52.7975 23.1497 52.7616 23.2282C52.7342 23.3174 52.7342 23.4127 52.7616 23.5019C52.8931 23.6873 53.0451 23.8572 53.2147 24.0086L53.8315 24.6243L52.1459 24.6332L51.0681 24.6422L51.0026 24.6828C50.9595 24.7124 50.9219 24.7493 50.8916 24.7919C50.8538 24.8447 50.8372 24.9098 50.845 24.9743C50.8371 25.0388 50.8537 25.104 50.8916 25.1568C50.922 25.1993 50.9596 25.2362 51.0026 25.2658L51.0681 25.3065L52.1459 25.3154L53.8315 25.3243L53.2147 25.9401C52.8717 26.2821 52.953 26.2187 52.9391 26.2494C52.9101 26.3381 52.9084 26.4334 52.9341 26.5231C52.9705 26.6052 53.0375 26.6699 53.1208 26.7034C53.2041 26.7369 53.2972 26.7366 53.3803 26.7026C53.4537 26.6688 54.9023 25.248 54.9668 25.1488C54.9963 25.0942 55.0117 25.033 55.0117 24.9709C55.0117 24.9087 54.9963 24.8476 54.9668 24.7929C54.8954 24.6848 53.2812 23.0825 53.2108 23.0488C53.1683 23.0289 53.1219 23.0186 53.0749 23.0186C53.028 23.0186 52.9816 23.0289 52.9391 23.0488V23.0508Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path
                              d="M42.3073 23.0508C42.3859 23.0866 42.4489 23.1497 42.4848 23.2282C42.5122 23.3174 42.5122 23.4127 42.4848 23.5019C42.3533 23.6873 42.2012 23.8572 42.0316 24.0086L41.4149 24.6243L43.1005 24.6332L44.1783 24.6422L44.2437 24.6828C44.2868 24.7124 44.3244 24.7493 44.3548 24.7919C44.3926 24.8447 44.4092 24.9098 44.4014 24.9743C44.4093 25.0388 44.3927 25.104 44.3548 25.1568C44.3244 25.1993 44.2868 25.2362 44.2437 25.2658L44.1783 25.3065L43.1005 25.3154L41.4149 25.3243L42.0316 25.9401C42.3747 26.2821 42.2934 26.2187 42.3073 26.2494C42.3363 26.3381 42.338 26.4334 42.3122 26.5231C42.2758 26.6052 42.2089 26.6699 42.1256 26.7034C42.0423 26.7369 41.9492 26.7366 41.8661 26.7026C41.7927 26.6688 40.3441 25.248 40.2796 25.1488C40.2501 25.0942 40.2347 25.033 40.2347 24.9709C40.2347 24.9087 40.2501 24.8476 40.2796 24.7929C40.351 24.6848 41.9652 23.0825 42.0356 23.0488C42.0781 23.0289 42.1245 23.0186 42.1714 23.0186C42.2184 23.0186 42.2648 23.0289 42.3073 23.0488V23.0508Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path
                              d="M5.76234 23.0508C5.68374 23.0866 5.62073 23.1497 5.58485 23.2282C5.55747 23.3174 5.55747 23.4127 5.58485 23.5019C5.71637 23.6873 5.86837 23.8572 6.03798 24.0086L6.65471 24.6243L4.96912 24.6332L3.89133 24.6422L3.82589 24.6828C3.78278 24.7124 3.74519 24.7493 3.71483 24.7919C3.67703 24.8447 3.6604 24.9098 3.66823 24.9743C3.66031 25.0388 3.67694 25.104 3.71483 25.1568C3.74524 25.1993 3.78282 25.2362 3.82589 25.2658L3.89133 25.3065L4.96912 25.3154L6.65471 25.3243L6.03798 25.9401C5.69491 26.2821 5.77622 26.2187 5.76234 26.2494C5.73333 26.3381 5.7316 26.4334 5.75738 26.5231C5.79378 26.6052 5.86074 26.6699 5.94405 26.7034C6.02737 26.7369 6.12046 26.7366 6.20356 26.7026C6.27694 26.6688 7.72556 25.248 7.79001 25.1488C7.81951 25.0942 7.83496 25.033 7.83496 24.9709C7.83496 24.9087 7.81951 24.8476 7.79001 24.7929C7.71862 24.6848 6.10441 23.0825 6.03401 23.0488C5.9915 23.0289 5.94512 23.0186 5.89817 23.0186C5.85123 23.0186 5.80485 23.0289 5.76234 23.0488V23.0508Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path d="M87.1729 0.786133V50.3624" stroke="#96A0B5" stroke-width="0.991526" />
                            <path
                              d="M77.2939 3.01701V47.834H85.1776V3.01701H77.2939Z"
                              stroke="#96A0B5"
                              stroke-width="0.991526"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M81.7023 23.181C81.6266 23.2181 81.5668 23.2811 81.5337 23.3585C81.508 23.448 81.508 23.5428 81.5337 23.6322C81.6575 23.8166 81.8015 23.9865 81.963 24.1389L82.547 24.7546L80.9497 24.7635L79.9294 24.7725L79.8679 24.8131C79.8268 24.8431 79.7913 24.88 79.7628 24.9222C79.727 24.9758 79.7115 25.0405 79.7192 25.1046C79.7115 25.1687 79.7269 25.2334 79.7628 25.2871C79.7913 25.3292 79.8269 25.3661 79.8679 25.3961L79.9294 25.4368L80.9497 25.4457L82.547 25.4546L81.963 26.0704C81.6378 26.4124 81.7152 26.349 81.7023 26.3797C81.6766 26.4691 81.6766 26.564 81.7023 26.6534C81.7178 26.6932 81.7412 26.7295 81.771 26.7602C81.8008 26.7908 81.8364 26.8152 81.8758 26.8319C81.9152 26.8485 81.9575 26.857 82.0002 26.857C82.043 26.857 82.0853 26.8485 82.1247 26.8319C82.1941 26.7981 83.5653 25.3773 83.6238 25.2781C83.6516 25.2229 83.666 25.162 83.666 25.1002C83.666 25.0384 83.6516 24.9774 83.6238 24.9222C83.5554 24.8141 82.0305 23.2118 81.9611 23.1781C81.9209 23.1579 81.8766 23.1475 81.8317 23.1475C81.7867 23.1475 81.7424 23.1579 81.7023 23.1781V23.181Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path
                              d="M80.6898 23.1801C80.7655 23.2171 80.8253 23.2801 80.8584 23.3576C80.884 23.447 80.884 23.5418 80.8584 23.6312C80.7345 23.8156 80.5905 23.9855 80.429 24.1379L79.845 24.7536L81.4424 24.7626L82.4626 24.7715L82.5241 24.8122C82.5652 24.8421 82.6008 24.879 82.6292 24.9212C82.665 24.9749 82.6805 25.0396 82.6728 25.1036C82.6806 25.1677 82.6651 25.2325 82.6292 25.2861C82.6008 25.3283 82.5652 25.3652 82.5241 25.3951L82.4626 25.4358L81.4424 25.4447L79.845 25.4536L80.429 26.0694C80.7542 26.4115 80.6769 26.348 80.6898 26.3787C80.7155 26.4682 80.7155 26.563 80.6898 26.6524C80.6743 26.6922 80.6509 26.7285 80.6211 26.7592C80.5913 26.7898 80.5557 26.8142 80.5163 26.8309C80.4769 26.8475 80.4346 26.8561 80.3918 26.8561C80.3491 26.8561 80.3068 26.8475 80.2674 26.8309C80.198 26.7972 78.8267 25.3763 78.7682 25.2772C78.7405 25.2219 78.726 25.161 78.726 25.0992C78.726 25.0374 78.7405 24.9764 78.7682 24.9212C78.8366 24.8131 80.3616 23.2108 80.431 23.1771C80.4712 23.157 80.5155 23.1465 80.5604 23.1465C80.6053 23.1465 80.6496 23.157 80.6898 23.1771V23.1801Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path d="M77.2939 0.711914V50.2882" stroke="#96A0B5" stroke-width="0.991526" />
                            <path
                              d="M67.6836 3.09123V47.9082H75.4175V3.09123H67.6836Z"
                              stroke="#96A0B5"
                              stroke-width="0.991526"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M71.9864 23.2553C71.9108 23.2923 71.851 23.3553 71.8179 23.4328C71.7922 23.5222 71.7922 23.617 71.8179 23.7064C71.9417 23.8908 72.0857 24.0607 72.2472 24.2131L72.8312 24.8288L71.2339 24.8378L70.2136 24.8467L70.1521 24.8873C70.111 24.9173 70.0754 24.9542 70.047 24.9964C70.0112 25.0501 69.9957 25.1148 70.0034 25.1788C69.9956 25.2429 70.0111 25.3077 70.047 25.3613C70.0755 25.4035 70.111 25.4403 70.1521 25.4703L70.2136 25.511L71.2339 25.5199L72.8312 25.5288L72.2472 26.1446C71.922 26.4867 71.9993 26.4232 71.9864 26.4539C71.9608 26.5434 71.9608 26.6382 71.9864 26.7276C72.002 26.7674 72.0254 26.8037 72.0552 26.8344C72.085 26.865 72.1206 26.8894 72.16 26.9061C72.1993 26.9227 72.2417 26.9312 72.2844 26.9312C72.3271 26.9312 72.3694 26.9227 72.4088 26.9061C72.4782 26.8724 73.8495 25.4515 73.908 25.3524C73.9358 25.2971 73.9502 25.2362 73.9502 25.1744C73.9502 25.1126 73.9358 25.0516 73.908 24.9964C73.8396 24.8883 72.3146 23.286 72.2452 23.2523C72.2051 23.2322 72.1608 23.2217 72.1158 23.2217C72.0709 23.2217 72.0266 23.2322 71.9864 23.2523V23.2553Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path
                              d="M70.974 23.2543C71.0496 23.2913 71.1095 23.3543 71.1425 23.4318C71.1682 23.5212 71.1682 23.616 71.1425 23.7055C71.0187 23.8898 70.8747 24.0597 70.7132 24.2121L70.1292 24.8278L71.7265 24.8368L72.7468 24.8457L72.8083 24.8864C72.8494 24.9163 72.885 24.9532 72.9134 24.9954C72.9492 25.0491 72.9647 25.1138 72.957 25.1779C72.9648 25.2419 72.9493 25.3067 72.9134 25.3603C72.8849 25.4025 72.8494 25.4394 72.8083 25.4694L72.7468 25.51L71.7265 25.519L70.1292 25.5279L70.7132 26.1436C71.0384 26.4857 70.9611 26.4222 70.974 26.453C70.9997 26.5424 70.9997 26.6372 70.974 26.7266C70.9584 26.7665 70.9351 26.8028 70.9053 26.8334C70.8755 26.8641 70.8398 26.8884 70.8005 26.9051C70.7611 26.9217 70.7188 26.9303 70.676 26.9303C70.6333 26.9303 70.591 26.9217 70.5516 26.9051C70.4822 26.8714 69.1109 25.4505 69.0524 25.3514C69.0247 25.2962 69.0102 25.2352 69.0102 25.1734C69.0102 25.1116 69.0247 25.0507 69.0524 24.9954C69.1208 24.8873 70.6458 23.285 70.7152 23.2513C70.7553 23.2312 70.7997 23.2207 70.8446 23.2207C70.8895 23.2207 70.9338 23.2312 70.974 23.2513V23.2543Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path d="M67.6836 0.786133V50.3624" stroke="#96A0B5" stroke-width="0.991526" />
                            <path
                              d="M58.375 3.09123L58.375 47.9082H65.7014V3.09123H58.375Z"
                              stroke="#96A0B5"
                              stroke-width="0.991526"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M62.5655 23.2553C62.4899 23.2923 62.4301 23.3553 62.397 23.4328C62.3713 23.5222 62.3713 23.617 62.397 23.7064C62.5208 23.8908 62.6648 24.0607 62.8263 24.2131L63.4103 24.8288L61.813 24.8378L60.7927 24.8467L60.7312 24.8873C60.6901 24.9173 60.6545 24.9542 60.6261 24.9964C60.5903 25.0501 60.5748 25.1148 60.5825 25.1788C60.5747 25.2429 60.5902 25.3077 60.6261 25.3613C60.6546 25.4035 60.6901 25.4403 60.7312 25.4703L60.7927 25.511L61.813 25.5199L63.4103 25.5288L62.8263 26.1446C62.5011 26.4867 62.5784 26.4232 62.5655 26.4539C62.5399 26.5434 62.5399 26.6382 62.5655 26.7276C62.5811 26.7674 62.6045 26.8037 62.6343 26.8344C62.6641 26.865 62.6997 26.8894 62.7391 26.9061C62.7784 26.9227 62.8208 26.9312 62.8635 26.9312C62.9062 26.9312 62.9485 26.9227 62.9879 26.9061C63.0573 26.8724 64.4286 25.4515 64.4871 25.3524C64.5149 25.2971 64.5293 25.2362 64.5293 25.1744C64.5293 25.1126 64.5149 25.0516 64.4871 24.9964C64.4187 24.8883 62.8937 23.286 62.8243 23.2523C62.7842 23.2322 62.7399 23.2217 62.6949 23.2217C62.65 23.2217 62.6057 23.2322 62.5655 23.2523V23.2553Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path
                              d="M61.5531 23.2543C61.6287 23.2913 61.6886 23.3543 61.7216 23.4318C61.7473 23.5212 61.7473 23.616 61.7216 23.7055C61.5978 23.8898 61.4538 24.0597 61.2923 24.2121L60.7083 24.8278L62.3056 24.8368L63.3259 24.8457L63.3874 24.8864C63.4285 24.9163 63.4641 24.9532 63.4925 24.9954C63.5283 25.0491 63.5438 25.1138 63.5361 25.1779C63.5439 25.2419 63.5284 25.3067 63.4925 25.3603C63.464 25.4025 63.4285 25.4394 63.3874 25.4694L63.3259 25.51L62.3056 25.519L60.7083 25.5279L61.2923 26.1436C61.6175 26.4857 61.5402 26.4222 61.5531 26.453C61.5788 26.5424 61.5788 26.6372 61.5531 26.7266C61.5375 26.7665 61.5142 26.8028 61.4844 26.8334C61.4546 26.8641 61.4189 26.8884 61.3796 26.9051C61.3402 26.9217 61.2979 26.9303 61.2551 26.9303C61.2124 26.9303 61.1701 26.9217 61.1307 26.9051C61.0613 26.8714 59.69 25.4505 59.6315 25.3514C59.6038 25.2962 59.5893 25.2352 59.5893 25.1734C59.5893 25.1116 59.6038 25.0507 59.6315 24.9954C59.6999 24.8873 61.2249 23.285 61.2943 23.2513C61.3344 23.2312 61.3788 23.2207 61.4237 23.2207C61.4686 23.2207 61.5129 23.2312 61.5531 23.2513V23.2543Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path d="M58.1572 0.786133V50.3624" stroke="#96A0B5" stroke-width="0.991526" />
                            <path
                              d="M39.2578 3.09123L39.2578 47.9082H45.6631L45.6631 3.09123H39.2578Z"
                              stroke="#96A0B5"
                              stroke-width="0.991526"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path d="M37.0576 0.786133V50.3624" stroke="#96A0B5" stroke-width="0.991526" />
                            <path
                              d="M30.1172 3.06682L30.1172 47.8838H37.0579L37.0579 3.06682H30.1172Z"
                              stroke="#96A0B5"
                              stroke-width="0.991526"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M34.0909 22.7592C34.0153 22.7962 33.9554 22.8592 33.9224 22.9367C33.8967 23.0261 33.8967 23.1209 33.9224 23.2103C34.0462 23.3947 34.1902 23.5646 34.3517 23.717L34.9357 24.3327L33.3384 24.3417L32.3181 24.3506L32.2566 24.3913C32.2155 24.4212 32.1799 24.4581 32.1515 24.5003C32.1157 24.554 32.1002 24.6187 32.1079 24.6827C32.1001 24.7468 32.1156 24.8116 32.1515 24.8652C32.18 24.9074 32.2155 24.9443 32.2566 24.9743L32.3181 25.0149L33.3384 25.0238L34.9357 25.0327L34.3517 25.6485C34.0265 25.9906 34.1038 25.9271 34.0909 25.9578C34.0653 26.0473 34.0653 26.1421 34.0909 26.2315C34.1065 26.2713 34.1298 26.3076 34.1596 26.3383C34.1894 26.3689 34.2251 26.3933 34.2645 26.41C34.3038 26.4266 34.3461 26.4352 34.3889 26.4352C34.4316 26.4352 34.4739 26.4266 34.5133 26.41C34.5827 26.3763 35.954 24.9554 36.0125 24.8563C36.0402 24.801 36.0547 24.7401 36.0547 24.6783C36.0547 24.6165 36.0402 24.5555 36.0125 24.5003C35.9441 24.3922 34.4191 22.7899 34.3497 22.7562C34.3096 22.7361 34.2653 22.7256 34.2203 22.7256C34.1754 22.7256 34.1311 22.7361 34.0909 22.7562V22.7592Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path
                              d="M33.0785 22.7582C33.1541 22.7952 33.214 22.8582 33.247 22.9357C33.2727 23.0251 33.2727 23.1199 33.247 23.2094C33.1232 23.3937 32.9792 23.5636 32.8177 23.716L32.2337 24.3318L33.831 24.3407L34.8513 24.3496L34.9128 24.3903C34.9539 24.4202 34.9895 24.4571 35.0179 24.4993C35.0537 24.553 35.0692 24.6177 35.0615 24.6818C35.0693 24.7458 35.0538 24.8106 35.0179 24.8642C34.9894 24.9064 34.9539 24.9433 34.9128 24.9733L34.8513 25.0139L33.831 25.0229L32.2337 25.0318L32.8177 25.6475C33.1429 25.9896 33.0656 25.9261 33.0785 25.9569C33.1041 26.0463 33.1041 26.1411 33.0785 26.2305C33.0629 26.2704 33.0396 26.3067 33.0098 26.3373C32.98 26.368 32.9443 26.3923 32.905 26.409C32.8656 26.4256 32.8233 26.4342 32.7805 26.4342C32.7378 26.4342 32.6955 26.4256 32.6561 26.409C32.5867 26.3753 31.2154 24.9544 31.1569 24.8553C31.1292 24.8001 31.1147 24.7391 31.1147 24.6773C31.1147 24.6155 31.1292 24.5546 31.1569 24.4993C31.2253 24.3913 32.7503 22.7889 32.8197 22.7552C32.8598 22.7351 32.9041 22.7246 32.9491 22.7246C32.994 22.7246 33.0383 22.7351 33.0785 22.7552V22.7582Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path d="M27.917 0.290527V49.8668" stroke="#96A0B5" stroke-width="0.991526" />
                            <path
                              d="M20.9775 2.84416L20.9775 47.6611H27.9182L27.9182 2.84416H20.9775Z"
                              stroke="#96A0B5"
                              stroke-width="0.991526"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M24.9513 23.0072C24.8756 23.0442 24.8158 23.1072 24.7827 23.1847C24.7571 23.2741 24.7571 23.369 24.7827 23.4584C24.9065 23.6427 25.0505 23.8127 25.2121 23.965L25.7961 24.5808L24.1987 24.5897L23.1784 24.5986L23.117 24.6393C23.0758 24.6693 23.0403 24.7062 23.0119 24.7484C22.976 24.802 22.9606 24.8667 22.9682 24.9308C22.9605 24.9949 22.976 25.0596 23.0119 25.1132C23.0403 25.1554 23.0759 25.1923 23.117 25.2223L23.1784 25.263L24.1987 25.2719L25.7961 25.2808L25.2121 25.8965C24.8868 26.2386 24.9642 26.1752 24.9513 26.2059C24.9256 26.2953 24.9256 26.3901 24.9513 26.4796C24.9668 26.5194 24.9902 26.5557 25.02 26.5863C25.0498 26.617 25.0854 26.6414 25.1248 26.658C25.1642 26.6746 25.2065 26.6832 25.2492 26.6832C25.292 26.6832 25.3343 26.6746 25.3737 26.658C25.4431 26.6243 26.8144 25.2035 26.8729 25.1043C26.9006 25.0491 26.915 24.9881 26.915 24.9263C26.915 24.8645 26.9006 24.8036 26.8729 24.7484C26.8044 24.6403 25.2795 23.038 25.2101 23.0043C25.1699 22.9841 25.1256 22.9736 25.0807 22.9736C25.0358 22.9736 24.9914 22.9841 24.9513 23.0043V23.0072Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path
                              d="M23.9388 23.0062C24.0145 23.0433 24.0743 23.1063 24.1074 23.1837C24.1331 23.2732 24.1331 23.368 24.1074 23.4574C23.9836 23.6417 23.8396 23.8117 23.678 23.9641L23.094 24.5798L24.6914 24.5887L25.7117 24.5977L25.7731 24.6383C25.8143 24.6683 25.8498 24.7052 25.8782 24.7474C25.9141 24.801 25.9295 24.8657 25.9219 24.9298C25.9296 24.9939 25.9142 25.0586 25.8782 25.1123C25.8498 25.1544 25.8142 25.1913 25.7731 25.2213L25.7117 25.262L24.6914 25.2709L23.094 25.2798L23.678 25.8956C24.0033 26.2376 23.9259 26.1742 23.9388 26.2049C23.9645 26.2943 23.9645 26.3892 23.9388 26.4786C23.9233 26.5184 23.8999 26.5547 23.8701 26.5854C23.8403 26.616 23.8047 26.6404 23.7653 26.657C23.7259 26.6737 23.6836 26.6822 23.6409 26.6822C23.5981 26.6822 23.5558 26.6737 23.5164 26.657C23.447 26.6233 22.0757 25.2025 22.0172 25.1033C21.9895 25.0481 21.9751 24.9872 21.9751 24.9254C21.9751 24.8636 21.9895 24.8026 22.0172 24.7474C22.0857 24.6393 23.6106 23.037 23.68 23.0033C23.7202 22.9831 23.7645 22.9727 23.8094 22.9727C23.8544 22.9727 23.8987 22.9831 23.9388 23.0033V23.0062Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path d="M18.7773 0.538574V50.1149" stroke="#96A0B5" stroke-width="0.991526" />
                            <path
                              d="M11.8369 3.09123L11.8369 47.9082H18.7776L18.7776 3.09123H11.8369Z"
                              stroke="#96A0B5"
                              stroke-width="0.991526"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M15.8107 23.2553C15.735 23.2923 15.6752 23.3553 15.6421 23.4328C15.6164 23.5222 15.6164 23.617 15.6421 23.7064C15.7659 23.8908 15.9099 24.0607 16.0714 24.2131L16.6554 24.8288L15.0581 24.8378L14.0378 24.8467L13.9763 24.8873C13.9352 24.9173 13.8997 24.9542 13.8712 24.9964C13.8354 25.0501 13.8199 25.1148 13.8276 25.1788C13.8199 25.2429 13.8353 25.3077 13.8712 25.3613C13.8997 25.4035 13.9353 25.4403 13.9763 25.4703L14.0378 25.511L15.0581 25.5199L16.6554 25.5288L16.0714 26.1446C15.7462 26.4867 15.8235 26.4232 15.8107 26.4539C15.785 26.5434 15.785 26.6382 15.8107 26.7276C15.8262 26.7674 15.8496 26.8037 15.8794 26.8344C15.9092 26.865 15.9448 26.8894 15.9842 26.9061C16.0236 26.9227 16.0659 26.9312 16.1086 26.9312C16.1514 26.9312 16.1937 26.9227 16.2331 26.9061C16.3025 26.8724 17.6737 25.4515 17.7322 25.3524C17.76 25.2971 17.7744 25.2362 17.7744 25.1744C17.7744 25.1126 17.76 25.0516 17.7322 24.9964C17.6638 24.8883 16.1389 23.286 16.0694 23.2523C16.0293 23.2322 15.985 23.2217 15.9401 23.2217C15.8951 23.2217 15.8508 23.2322 15.8107 23.2523V23.2553Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path
                              d="M14.7982 23.2543C14.8739 23.2913 14.9337 23.3543 14.9668 23.4318C14.9924 23.5212 14.9924 23.616 14.9668 23.7055C14.8429 23.8898 14.6989 24.0597 14.5374 24.2121L13.9534 24.8278L15.5508 24.8368L16.571 24.8457L16.6325 24.8864C16.6736 24.9163 16.7092 24.9532 16.7376 24.9954C16.7734 25.0491 16.7889 25.1138 16.7812 25.1779C16.789 25.2419 16.7735 25.3067 16.7376 25.3603C16.7092 25.4025 16.6736 25.4394 16.6325 25.4694L16.571 25.51L15.5508 25.519L13.9534 25.5279L14.5374 26.1436C14.8626 26.4857 14.7853 26.4222 14.7982 26.453C14.8239 26.5424 14.8239 26.6372 14.7982 26.7266C14.7826 26.7665 14.7593 26.8028 14.7295 26.8334C14.6997 26.8641 14.664 26.8884 14.6247 26.9051C14.5853 26.9217 14.543 26.9303 14.5002 26.9303C14.4575 26.9303 14.4152 26.9217 14.3758 26.9051C14.3064 26.8714 12.9351 25.4505 12.8766 25.3514C12.8489 25.2962 12.8344 25.2352 12.8344 25.1734C12.8344 25.1116 12.8489 25.0507 12.8766 24.9954C12.945 24.8873 14.47 23.285 14.5394 23.2513C14.5796 23.2312 14.6239 23.2207 14.6688 23.2207C14.7137 23.2207 14.758 23.2312 14.7982 23.2513V23.2543Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198305"
                            />
                            <path d="M9.63672 0.786133V50.3624" stroke="#96A0B5" stroke-width="0.991526" />
                            <path
                              d="M2.69629 3.01701L2.69629 47.834H9.63697L9.63697 3.01701H2.69629Z"
                              stroke="#96A0B5"
                              stroke-width="0.991526"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path d="M0.496094 0.711914V50.2882" stroke="#96A0B5" stroke-width="0.991526" />
                            <path
                              d="M49.6533 3.09123L49.6533 47.9082H56.2073L56.2073 3.09123H49.6533Z"
                              stroke="#96A0B5"
                              stroke-width="0.991526"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path d="M47.6738 0.786133V50.3624" stroke="#96A0B5" stroke-width="0.991526" />
                            <path d="M94.1156 22.0293H96.0986V29.9615H94.1156V22.0293Z" fill="#96A0B5" />
                            <path d="M92.5902 25.9951H94.5732V30.9527H92.5902V25.9951Z" fill="#96A0B5" />
                            <path d="M0.495464 22.0293H2.47852V29.9615H0.495464V22.0293Z" fill="#96A0B5" />
                            <path d="M2.36167 25.9951H4.34473V30.9527H2.36167V25.9951Z" fill="#96A0B5" />
                            <path d="M45.8207 22.0293H47.8037V29.9615H45.8207V22.0293Z" fill="#96A0B5" />
                            <path d="M44.2035 25.9951H46.1865V30.9527H44.2035V25.9951Z" fill="#96A0B5" />
                          </g>
                          <defs>
                            <clipPath id="clip0_493_705">
                              <rect width="97" height="51" fill="white" transform="matrix(-1 0 0 1 97 0)" />
                            </clipPath>
                          </defs>
                        </svg>`,
    [slidingDesignIconKeys.SIX_TRACK_TWELVE_PANEL_MEETING]: `<svg
                          width="104"
                          height="51"
                          viewBox="0 0 104 51"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <g clip-path="url(#clip0_493_904)">
                            <path
                              d="M0.49707 0.644176L0.49707 50.3555L103.499 50.3555V0.644176L0.49707 0.644176Z"
                              stroke="#96A0B5"
                              stroke-width="0.994226"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M95.582 3.10494V48.0439H101.547V3.10494H95.582Z"
                              stroke="#96A0B5"
                              stroke-width="0.994226"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M87.4639 3.10494V48.0439H93.4292V3.10494H87.4639Z"
                              stroke="#96A0B5"
                              stroke-width="0.994226"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M79.2217 3.10494V48.0439H85.187V3.10494H79.2217Z"
                              stroke="#96A0B5"
                              stroke-width="0.994226"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M70.9785 3.10494V48.0439H76.9439V3.10494H70.9785Z"
                              stroke="#96A0B5"
                              stroke-width="0.994226"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M62.9258 3.10494L62.9258 48.0439H68.8911V3.10494H62.9258Z"
                              stroke="#96A0B5"
                              stroke-width="0.994226"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M34.6152 3.03072L34.6152 47.9697H40.5806L40.5806 3.03072H34.6152Z"
                              stroke="#96A0B5"
                              stroke-width="0.994226"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M26.6318 3.03072L26.6318 47.9697H32.5972L32.5972 3.03072H26.6318Z"
                              stroke="#96A0B5"
                              stroke-width="0.994226"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M18.6465 3.26997L18.6465 48.209H24.6118L24.6118 3.26997H18.6465Z"
                              stroke="#96A0B5"
                              stroke-width="0.994226"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M10.499 3.03072L10.499 47.9697H16.4644L16.4644 3.03072H10.499Z"
                              stroke="#96A0B5"
                              stroke-width="0.994226"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M2.51563 3.03072L2.51562 47.9697H8.48098L8.48098 3.03072H2.51563Z"
                              stroke="#96A0B5"
                              stroke-width="0.994226"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M53.8418 3.10494L53.8418 48.0439H60.8014L60.8014 3.10494H53.8418Z"
                              stroke="#96A0B5"
                              stroke-width="0.994226"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M42.7344 3.10494L42.7344 48.0439H49.687L49.687 3.10494H42.7344Z"
                              stroke="#96A0B5"
                              stroke-width="0.994226"
                              stroke-miterlimit="10"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                            <path
                              d="M98.4578 23.044C98.5366 23.08 98.5998 23.1432 98.6358 23.222C98.6633 23.3114 98.6633 23.407 98.6358 23.4964C98.5039 23.6823 98.3515 23.8527 98.1814 24.0044L97.563 24.6218L99.2532 24.6308L100.334 24.6397L100.4 24.6805C100.443 24.7102 100.48 24.7472 100.511 24.7899C100.549 24.8429 100.565 24.9081 100.558 24.9728C100.566 25.0375 100.549 25.1028 100.511 25.1558C100.48 25.1984 100.443 25.2354 100.4 25.2651L100.334 25.3059L99.2532 25.3148L97.563 25.3238L98.1814 25.9412C98.5254 26.2842 98.4439 26.2206 98.4578 26.2514C98.4869 26.3403 98.4886 26.4359 98.4628 26.5258C98.4263 26.6081 98.3592 26.673 98.2756 26.7066C98.1921 26.7402 98.0987 26.7399 98.0154 26.7057C97.9418 26.6719 96.4893 25.2472 96.4246 25.1478C96.395 25.093 96.3796 25.0316 96.3796 24.9693C96.3796 24.907 96.395 24.8457 96.4246 24.7909C96.4962 24.6825 98.1148 23.0758 98.1854 23.042C98.228 23.0221 98.2745 23.0117 98.3216 23.0117C98.3687 23.0117 98.4152 23.0221 98.4578 23.042V23.044Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M90.9733 23.0449C90.9104 23.0874 90.8641 23.1503 90.842 23.2229C90.8217 23.3132 90.8217 23.407 90.842 23.4973C90.9363 23.6777 91.0489 23.848 91.1781 24.0053L91.6344 24.6228L90.3857 24.6317L89.5903 24.6407L89.5426 24.6814C89.5091 24.713 89.4812 24.75 89.4601 24.7908C89.4315 24.8473 89.4198 24.9108 89.4263 24.9737C89.4198 25.0367 89.4315 25.1002 89.4601 25.1567C89.4812 25.1975 89.5091 25.2344 89.5426 25.266L89.5903 25.3068L90.3857 25.3158L91.6344 25.3247L91.1781 25.9421C90.9236 26.2851 90.9792 26.2215 90.9792 26.2523C90.959 26.3426 90.959 26.4364 90.9792 26.5267C90.9846 26.5627 90.9983 26.597 91.0192 26.6268C91.04 26.6567 91.0676 26.6813 91.0995 26.6987C91.1315 26.7162 91.1671 26.7259 91.2035 26.7273C91.2399 26.7287 91.2761 26.7216 91.3093 26.7067C91.364 26.6729 92.4358 25.2481 92.4815 25.1487C92.5257 25.0338 92.5257 24.9067 92.4815 24.7918C92.4288 24.6834 91.2357 23.0767 91.1821 23.0429C91.152 23.0226 91.1165 23.0117 91.0801 23.0117C91.0438 23.0117 91.0083 23.0226 90.9782 23.0429L90.9733 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M89.9669 23.0449C90.0297 23.0874 90.0761 23.1503 90.0981 23.2229C90.1184 23.3132 90.1184 23.407 90.0981 23.4973C90.0038 23.6777 89.8912 23.848 89.7621 24.0053L89.3057 24.6228L90.5545 24.6317L91.3499 24.6407L91.3976 24.6814C91.431 24.713 91.4589 24.75 91.4801 24.7908C91.5086 24.8473 91.5203 24.9108 91.5139 24.9737C91.5203 25.0367 91.5086 25.1002 91.4801 25.1567C91.4589 25.1975 91.431 25.2344 91.3976 25.266L91.3499 25.3068L90.5545 25.3158L89.3057 25.3247L89.7621 25.9421C90.0166 26.2851 89.9609 26.2215 89.9609 26.2523C89.9812 26.3426 89.9812 26.4364 89.9609 26.5267C89.9555 26.5627 89.9419 26.597 89.921 26.6268C89.9001 26.6567 89.8726 26.6813 89.8406 26.6987C89.8086 26.7162 89.7731 26.7259 89.7367 26.7273C89.7003 26.7287 89.664 26.7216 89.6308 26.7067C89.5762 26.6729 88.5044 25.2481 88.4586 25.1487C88.4145 25.0338 88.4145 24.9067 88.4586 24.7918C88.5113 24.6834 89.7044 23.0767 89.7581 23.0429C89.7882 23.0226 89.8237 23.0117 89.86 23.0117C89.8963 23.0117 89.9318 23.0226 89.9619 23.0429L89.9669 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M82.7301 23.0449C82.6673 23.0874 82.6209 23.1503 82.5989 23.2229C82.5786 23.3132 82.5786 23.407 82.5989 23.4973C82.6932 23.6777 82.8058 23.848 82.9349 24.0053L83.3913 24.6228L82.1425 24.6317L81.3471 24.6407L81.2994 24.6814C81.266 24.713 81.2381 24.75 81.2169 24.7908C81.1884 24.8473 81.1766 24.9108 81.1831 24.9737C81.1766 25.0367 81.1884 25.1002 81.2169 25.1567C81.2381 25.1975 81.266 25.2344 81.2994 25.266L81.3471 25.3068L82.1425 25.3158L83.3913 25.3247L82.9349 25.9421C82.6804 26.2851 82.7361 26.2215 82.7361 26.2523C82.7158 26.3426 82.7158 26.4364 82.7361 26.5267C82.7415 26.5627 82.7551 26.597 82.776 26.6268C82.7969 26.6567 82.8244 26.6813 82.8564 26.6987C82.8883 26.7162 82.9239 26.7259 82.9603 26.7273C82.9967 26.7287 83.033 26.7216 83.0662 26.7067C83.1208 26.6729 84.1926 25.2481 84.2383 25.1487C84.2825 25.0338 84.2825 24.9067 84.2383 24.7918C84.1857 24.6834 82.9926 23.0767 82.9389 23.0429C82.9088 23.0226 82.8733 23.0117 82.837 23.0117C82.8007 23.0117 82.7652 23.0226 82.7351 23.0429L82.7301 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M81.7237 23.0449C81.7866 23.0874 81.8329 23.1503 81.855 23.2229C81.8752 23.3132 81.8752 23.407 81.855 23.4973C81.7607 23.6777 81.6481 23.848 81.5189 24.0053L81.0626 24.6228L82.3113 24.6317L83.1067 24.6407L83.1544 24.6814C83.1879 24.713 83.2157 24.75 83.2369 24.7908C83.2655 24.8473 83.2772 24.9108 83.2707 24.9737C83.2772 25.0367 83.2655 25.1002 83.2369 25.1567C83.2157 25.1975 83.1879 25.2344 83.1544 25.266L83.1067 25.3068L82.3113 25.3158L81.0626 25.3247L81.5189 25.9421C81.7734 26.2851 81.7178 26.2215 81.7178 26.2523C81.738 26.3426 81.738 26.4364 81.7178 26.5267C81.7124 26.5627 81.6987 26.597 81.6778 26.6268C81.6569 26.6567 81.6294 26.6813 81.5975 26.6987C81.5655 26.7162 81.5299 26.7259 81.4935 26.7273C81.4571 26.7287 81.4209 26.7216 81.3877 26.7067C81.333 26.6729 80.2612 25.2481 80.2155 25.1487C80.1713 25.0338 80.1713 24.9067 80.2155 24.7918C80.2682 24.6834 81.4612 23.0767 81.5149 23.0429C81.545 23.0226 81.5805 23.0117 81.6168 23.0117C81.6532 23.0117 81.6887 23.0226 81.7188 23.0429L81.7237 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M74.4645 23.0449C74.4016 23.0874 74.3553 23.1503 74.3332 23.2229C74.313 23.3132 74.313 23.407 74.3332 23.4973C74.4275 23.6777 74.5402 23.848 74.6693 24.0053L75.1256 24.6228L73.8769 24.6317L73.0815 24.6407L73.0338 24.6814C73.0004 24.713 72.9725 24.75 72.9513 24.7908C72.9227 24.8473 72.911 24.9108 72.9175 24.9737C72.911 25.0367 72.9227 25.1002 72.9513 25.1567C72.9725 25.1975 73.0004 25.2344 73.0338 25.266L73.0815 25.3068L73.8769 25.3158L75.1256 25.3247L74.6693 25.9421C74.4148 26.2851 74.4704 26.2215 74.4704 26.2523C74.4502 26.3426 74.4502 26.4364 74.4704 26.5267C74.4758 26.5627 74.4895 26.597 74.5104 26.6268C74.5313 26.6567 74.5588 26.6813 74.5907 26.6987C74.6227 26.7162 74.6583 26.7259 74.6947 26.7273C74.7311 26.7287 74.7673 26.7216 74.8005 26.7067C74.8552 26.6729 75.927 25.2481 75.9727 25.1487C76.0169 25.0338 76.0169 24.9067 75.9727 24.7918C75.92 24.6834 74.727 23.0767 74.6733 23.0429C74.6432 23.0226 74.6077 23.0117 74.5714 23.0117C74.535 23.0117 74.4995 23.0226 74.4695 23.0429L74.4645 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M73.4581 23.0449C73.5209 23.0874 73.5673 23.1503 73.5893 23.2229C73.6096 23.3132 73.6096 23.407 73.5893 23.4973C73.495 23.6777 73.3824 23.848 73.2533 24.0053L72.7969 24.6228L74.0457 24.6317L74.8411 24.6407L74.8888 24.6814C74.9222 24.713 74.9501 24.75 74.9713 24.7908C74.9998 24.8473 75.0116 24.9108 75.0051 24.9737C75.0116 25.0367 74.9998 25.1002 74.9713 25.1567C74.9501 25.1975 74.9222 25.2344 74.8888 25.266L74.8411 25.3068L74.0457 25.3158L72.7969 25.3247L73.2533 25.9421C73.5078 26.2851 73.4521 26.2215 73.4521 26.2523C73.4724 26.3426 73.4724 26.4364 73.4521 26.5267C73.4467 26.5627 73.4331 26.597 73.4122 26.6268C73.3913 26.6567 73.3638 26.6813 73.3318 26.6987C73.2999 26.7162 73.2643 26.7259 73.2279 26.7273C73.1915 26.7287 73.1553 26.7216 73.122 26.7067C73.0674 26.6729 71.9956 25.2481 71.9499 25.1487C71.9057 25.0338 71.9057 24.9067 71.9499 24.7918C72.0026 24.6834 73.1956 23.0767 73.2493 23.0429C73.2794 23.0226 73.3149 23.0117 73.3512 23.0117C73.3875 23.0117 73.423 23.0226 73.4531 23.0429L73.4581 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M66.4117 23.0449C66.3489 23.0874 66.3026 23.1503 66.2805 23.2229C66.2602 23.3132 66.2602 23.407 66.2805 23.4973C66.3748 23.6777 66.4874 23.848 66.6166 24.0053L67.0729 24.6228L65.8242 24.6317L65.0288 24.6407L64.9811 24.6814C64.9476 24.713 64.9197 24.75 64.8985 24.7908C64.87 24.8473 64.8583 24.9108 64.8647 24.9737C64.8583 25.0367 64.87 25.1002 64.8985 25.1567C64.9197 25.1975 64.9476 25.2344 64.9811 25.266L65.0288 25.3068L65.8242 25.3158L67.0729 25.3247L66.6166 25.9421C66.362 26.2851 66.4177 26.2215 66.4177 26.2523C66.3974 26.3426 66.3974 26.4364 66.4177 26.5267C66.4231 26.5627 66.4368 26.597 66.4577 26.6268C66.4785 26.6567 66.506 26.6813 66.538 26.6987C66.57 26.7162 66.6056 26.7259 66.642 26.7273C66.6784 26.7287 66.7146 26.7216 66.7478 26.7067C66.8025 26.6729 67.8743 25.2481 67.92 25.1487C67.9642 25.0338 67.9642 24.9067 67.92 24.7918C67.8673 24.6834 66.6742 23.0767 66.6205 23.0429C66.5904 23.0226 66.5549 23.0117 66.5186 23.0117C66.4823 23.0117 66.4468 23.0226 66.4167 23.0429L66.4117 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M65.4054 23.0449C65.4682 23.0874 65.5145 23.1503 65.5366 23.2229C65.5569 23.3132 65.5569 23.407 65.5366 23.4973C65.4423 23.6777 65.3297 23.848 65.2006 24.0053L64.7442 24.6228L65.993 24.6317L66.7883 24.6407L66.8361 24.6814C66.8695 24.713 66.8974 24.75 66.9186 24.7908C66.9471 24.8473 66.9588 24.9108 66.9524 24.9737C66.9588 25.0367 66.9471 25.1002 66.9186 25.1567C66.8974 25.1975 66.8695 25.2344 66.8361 25.266L66.7883 25.3068L65.993 25.3158L64.7442 25.3247L65.2006 25.9421C65.4551 26.2851 65.3994 26.2215 65.3994 26.2523C65.4197 26.3426 65.4197 26.4364 65.3994 26.5267C65.394 26.5627 65.3803 26.597 65.3595 26.6268C65.3386 26.6567 65.3111 26.6813 65.2791 26.6987C65.2471 26.7162 65.2115 26.7259 65.1751 26.7273C65.1387 26.7287 65.1025 26.7216 65.0693 26.7067C65.0146 26.6729 63.9429 25.2481 63.8971 25.1487C63.8529 25.0338 63.8529 24.9067 63.8971 24.7918C63.9498 24.6834 65.1429 23.0767 65.1966 23.0429C65.2267 23.0226 65.2622 23.0117 65.2985 23.0117C65.3348 23.0117 65.3703 23.0226 65.4004 23.0429L65.4054 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M46.202 23.1732C46.2778 23.2104 46.3378 23.2735 46.371 23.3512C46.3971 23.4408 46.3971 23.536 46.371 23.6256C46.2465 23.8105 46.1018 23.9809 45.9395 24.1337L45.3529 24.7511L46.9556 24.76L47.9796 24.769L48.0413 24.8098C48.0825 24.8398 48.1182 24.8768 48.1467 24.9191C48.1827 24.9729 48.1982 25.0378 48.1904 25.102C48.1982 25.1663 48.1827 25.2312 48.1467 25.285C48.1181 25.3273 48.0825 25.3643 48.0413 25.3943L47.9796 25.4351L46.9556 25.4441L45.3529 25.453L45.9395 26.0704C46.2656 26.4134 46.1881 26.3498 46.202 26.3806C46.228 26.4702 46.228 26.5654 46.202 26.655C46.1864 26.695 46.163 26.7314 46.1331 26.7621C46.1032 26.7928 46.0675 26.8173 46.028 26.834C45.9885 26.8506 45.9461 26.8592 45.9032 26.8592C45.8603 26.8592 45.8179 26.8506 45.7784 26.834C45.7088 26.8002 44.3318 25.3755 44.2732 25.276C44.2454 25.2207 44.2309 25.1595 44.2309 25.0976C44.2309 25.0356 44.2454 24.9745 44.2732 24.9191C44.3418 24.8107 45.8719 23.2041 45.9425 23.1703C45.9828 23.1501 46.0272 23.1396 46.0722 23.1396C46.1173 23.1396 46.1617 23.1501 46.202 23.1703V23.1732Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M38.1012 23.0449C38.0383 23.0874 37.992 23.1503 37.97 23.2229C37.9497 23.3132 37.9497 23.407 37.97 23.4973C38.0643 23.6777 38.1769 23.848 38.306 24.0053L38.7624 24.6228L37.5136 24.6317L36.7182 24.6407L36.6705 24.6814C36.6371 24.713 36.6092 24.75 36.588 24.7908C36.5595 24.8473 36.5477 24.9108 36.5542 24.9737C36.5477 25.0367 36.5595 25.1002 36.588 25.1567C36.6092 25.1975 36.6371 25.2344 36.6705 25.266L36.7182 25.3068L37.5136 25.3158L38.7624 25.3247L38.306 25.9421C38.0515 26.2851 38.1072 26.2215 38.1072 26.2523C38.0869 26.3426 38.0869 26.4364 38.1072 26.5267C38.1126 26.5627 38.1262 26.597 38.1471 26.6268C38.168 26.6567 38.1955 26.6813 38.2275 26.6987C38.2594 26.7162 38.295 26.7259 38.3314 26.7273C38.3678 26.7287 38.404 26.7216 38.4372 26.7067C38.4919 26.6729 39.5637 25.2481 39.6094 25.1487C39.6536 25.0338 39.6536 24.9067 39.6094 24.7918C39.5567 24.6834 38.3637 23.0767 38.31 23.0429C38.2799 23.0226 38.2444 23.0117 38.2081 23.0117C38.1718 23.0117 38.1363 23.0226 38.1062 23.0429L38.1012 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M37.0948 23.0449C37.1577 23.0874 37.204 23.1503 37.2261 23.2229C37.2463 23.3132 37.2463 23.407 37.2261 23.4973C37.1318 23.6777 37.0191 23.848 36.89 24.0053L36.4337 24.6228L37.6824 24.6317L38.4778 24.6407L38.5255 24.6814C38.5589 24.713 38.5868 24.75 38.608 24.7908C38.6365 24.8473 38.6483 24.9108 38.6418 24.9737C38.6483 25.0367 38.6365 25.1002 38.608 25.1567C38.5868 25.1975 38.5589 25.2344 38.5255 25.266L38.4778 25.3068L37.6824 25.3158L36.4337 25.3247L36.89 25.9421C37.1445 26.2851 37.0889 26.2215 37.0889 26.2523C37.1091 26.3426 37.1091 26.4364 37.0889 26.5267C37.0835 26.5627 37.0698 26.597 37.0489 26.6268C37.028 26.6567 37.0005 26.6813 36.9685 26.6987C36.9366 26.7162 36.901 26.7259 36.8646 26.7273C36.8282 26.7287 36.792 26.7216 36.7588 26.7067C36.7041 26.6729 35.6323 25.2481 35.5866 25.1487C35.5424 25.0338 35.5424 24.9067 35.5866 24.7918C35.6393 24.6834 36.8323 23.0767 36.886 23.0429C36.9161 23.0226 36.9516 23.0117 36.9879 23.0117C37.0243 23.0117 37.0598 23.0226 37.0898 23.0429L37.0948 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M30.1168 23.0449C30.054 23.0874 30.0076 23.1503 29.9856 23.2229C29.9653 23.3132 29.9653 23.407 29.9856 23.4973C30.0799 23.6777 30.1925 23.848 30.3216 24.0053L30.778 24.6228L29.5292 24.6317L28.7339 24.6407L28.6861 24.6814C28.6527 24.713 28.6248 24.75 28.6036 24.7908C28.5751 24.8473 28.5634 24.9108 28.5698 24.9737C28.5634 25.0367 28.5751 25.1002 28.6036 25.1567C28.6248 25.1975 28.6527 25.2344 28.6861 25.266L28.7339 25.3068L29.5292 25.3158L30.778 25.3247L30.3216 25.9421C30.0671 26.2851 30.1228 26.2215 30.1228 26.2523C30.1025 26.3426 30.1025 26.4364 30.1228 26.5267C30.1282 26.5627 30.1419 26.597 30.1627 26.6268C30.1836 26.6567 30.2111 26.6813 30.2431 26.6987C30.2751 26.7162 30.3106 26.7259 30.347 26.7273C30.3834 26.7287 30.4197 26.7216 30.4529 26.7067C30.5076 26.6729 31.5793 25.2481 31.6251 25.1487C31.6692 25.0338 31.6692 24.9067 31.6251 24.7918C31.5724 24.6834 30.3793 23.0767 30.3256 23.0429C30.2955 23.0226 30.26 23.0117 30.2237 23.0117C30.1874 23.0117 30.1519 23.0226 30.1218 23.0429L30.1168 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M29.1104 23.0449C29.1733 23.0874 29.2196 23.1503 29.2417 23.2229C29.262 23.3132 29.262 23.407 29.2417 23.4973C29.1474 23.6777 29.0348 23.848 28.9056 24.0053L28.4493 24.6228L29.698 24.6317L30.4934 24.6407L30.5411 24.6814C30.5746 24.713 30.6025 24.75 30.6237 24.7908C30.6522 24.8473 30.6639 24.9108 30.6575 24.9737C30.6639 25.0367 30.6522 25.1002 30.6237 25.1567C30.6025 25.1975 30.5746 25.2344 30.5411 25.266L30.4934 25.3068L29.698 25.3158L28.4493 25.3247L28.9056 25.9421C29.1602 26.2851 29.1045 26.2215 29.1045 26.2523C29.1248 26.3426 29.1248 26.4364 29.1045 26.5267C29.0991 26.5627 29.0854 26.597 29.0645 26.6268C29.0437 26.6567 29.0162 26.6813 28.9842 26.6987C28.9522 26.7162 28.9166 26.7259 28.8802 26.7273C28.8438 26.7287 28.8076 26.7216 28.7744 26.7067C28.7197 26.6729 27.6479 25.2481 27.6022 25.1487C27.558 25.0338 27.558 24.9067 27.6022 24.7918C27.6549 24.6834 28.848 23.0767 28.9017 23.0429C28.9317 23.0226 28.9672 23.0117 29.0036 23.0117C29.0399 23.0117 29.0754 23.0226 29.1055 23.0429L29.1104 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M22.1334 23.0449C22.0706 23.0874 22.0242 23.1503 22.0022 23.2229C21.9819 23.3132 21.9819 23.407 22.0022 23.4973C22.0965 23.6777 22.2091 23.848 22.3382 24.0053L22.7946 24.6228L21.5458 24.6317L20.7505 24.6407L20.7027 24.6814C20.6693 24.713 20.6414 24.75 20.6202 24.7908C20.5917 24.8473 20.58 24.9108 20.5864 24.9737C20.58 25.0367 20.5917 25.1002 20.6202 25.1567C20.6414 25.1975 20.6693 25.2344 20.7027 25.266L20.7505 25.3068L21.5458 25.3158L22.7946 25.3247L22.3382 25.9421C22.0837 26.2851 22.1394 26.2215 22.1394 26.2523C22.1191 26.3426 22.1191 26.4364 22.1394 26.5267C22.1448 26.5627 22.1585 26.597 22.1793 26.6268C22.2002 26.6567 22.2277 26.6813 22.2597 26.6987C22.2917 26.7162 22.3272 26.7259 22.3636 26.7273C22.4 26.7287 22.4363 26.7216 22.4695 26.7067C22.5242 26.6729 23.5959 25.2481 23.6417 25.1487C23.6859 25.0338 23.6859 24.9067 23.6417 24.7918C23.589 24.6834 22.3959 23.0767 22.3422 23.0429C22.3121 23.0226 22.2766 23.0117 22.2403 23.0117C22.204 23.0117 22.1685 23.0226 22.1384 23.0429L22.1334 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M21.127 23.0449C21.1899 23.0874 21.2362 23.1503 21.2583 23.2229C21.2786 23.3132 21.2786 23.407 21.2583 23.4973C21.164 23.6777 21.0514 23.848 20.9222 24.0053L20.4659 24.6228L21.7146 24.6317L22.51 24.6407L22.5577 24.6814C22.5912 24.713 22.6191 24.75 22.6403 24.7908C22.6688 24.8473 22.6805 24.9108 22.6741 24.9737C22.6805 25.0367 22.6688 25.1002 22.6403 25.1567C22.6191 25.1975 22.5912 25.2344 22.5577 25.266L22.51 25.3068L21.7146 25.3158L20.4659 25.3247L20.9222 25.9421C21.1768 26.2851 21.1211 26.2215 21.1211 26.2523C21.1414 26.3426 21.1414 26.4364 21.1211 26.5267C21.1157 26.5627 21.102 26.597 21.0811 26.6268C21.0603 26.6567 21.0328 26.6813 21.0008 26.6987C20.9688 26.7162 20.9332 26.7259 20.8968 26.7273C20.8604 26.7287 20.8242 26.7216 20.791 26.7067C20.7363 26.6729 19.6645 25.2481 19.6188 25.1487C19.5746 25.0338 19.5746 24.9067 19.6188 24.7918C19.6715 24.6834 20.8646 23.0767 20.9183 23.0429C20.9483 23.0226 20.9838 23.0117 21.0202 23.0117C21.0565 23.0117 21.092 23.0226 21.1221 23.0429L21.127 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M13.985 23.0449C13.9221 23.0874 13.8758 23.1503 13.8537 23.2229C13.8335 23.3132 13.8335 23.407 13.8537 23.4973C13.948 23.6777 14.0607 23.848 14.1898 24.0053L14.6461 24.6228L13.3974 24.6317L12.602 24.6407L12.5543 24.6814C12.5209 24.713 12.493 24.75 12.4718 24.7908C12.4433 24.8473 12.4315 24.9108 12.438 24.9737C12.4315 25.0367 12.4433 25.1002 12.4718 25.1567C12.493 25.1975 12.5209 25.2344 12.5543 25.266L12.602 25.3068L13.3974 25.3158L14.6461 25.3247L14.1898 25.9421C13.9353 26.2851 13.991 26.2215 13.991 26.2523C13.9707 26.3426 13.9707 26.4364 13.991 26.5267C13.9963 26.5627 14.01 26.597 14.0309 26.6268C14.0518 26.6567 14.0793 26.6813 14.1113 26.6987C14.1432 26.7162 14.1788 26.7259 14.2152 26.7273C14.2516 26.7287 14.2878 26.7216 14.321 26.7067C14.3757 26.6729 15.4475 25.2481 15.4932 25.1487C15.5374 25.0338 15.5374 24.9067 15.4932 24.7918C15.4405 24.6834 14.2475 23.0767 14.1938 23.0429C14.1637 23.0226 14.1282 23.0117 14.0919 23.0117C14.0555 23.0117 14.0201 23.0226 13.99 23.0429L13.985 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M12.9786 23.0449C13.0415 23.0874 13.0878 23.1503 13.1098 23.2229C13.1301 23.3132 13.1301 23.407 13.1098 23.4973C13.0155 23.6777 12.9029 23.848 12.7738 24.0053L12.3174 24.6228L13.5662 24.6317L14.3616 24.6407L14.4093 24.6814C14.4427 24.713 14.4706 24.75 14.4918 24.7908C14.5203 24.8473 14.5321 24.9108 14.5256 24.9737C14.5321 25.0367 14.5203 25.1002 14.4918 25.1567C14.4706 25.1975 14.4427 25.2344 14.4093 25.266L14.3616 25.3068L13.5662 25.3158L12.3174 25.3247L12.7738 25.9421C13.0283 26.2851 12.9726 26.2215 12.9726 26.2523C12.9929 26.3426 12.9929 26.4364 12.9726 26.5267C12.9672 26.5627 12.9536 26.597 12.9327 26.6268C12.9118 26.6567 12.8843 26.6813 12.8523 26.6987C12.8204 26.7162 12.7848 26.7259 12.7484 26.7273C12.712 26.7287 12.6758 26.7216 12.6426 26.7067C12.5879 26.6729 11.5161 25.2481 11.4704 25.1487C11.4262 25.0338 11.4262 24.9067 11.4704 24.7918C11.5231 24.6834 12.7161 23.0767 12.7698 23.0429C12.7999 23.0226 12.8354 23.0117 12.8717 23.0117C12.9081 23.0117 12.9435 23.0226 12.9736 23.0429L12.9786 23.0449Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M5.62746 23.0444C5.55319 23.0821 5.49496 23.1453 5.46341 23.2223C5.43819 23.3121 5.43819 23.407 5.46341 23.4968C5.58341 23.681 5.72345 23.8514 5.88099 24.0048L6.44969 24.6222L4.89671 24.6312L3.90248 24.6401L3.84283 24.6809C3.80367 24.7114 3.77004 24.7484 3.7434 24.7902C3.70831 24.8444 3.69319 24.9091 3.70065 24.9732C3.69319 25.0373 3.70831 25.102 3.7434 25.1561C3.77005 25.198 3.80368 25.235 3.84283 25.2655L3.90248 25.3062L4.89671 25.3152L6.44969 25.3241L5.88099 25.9415C5.56483 26.2845 5.63939 26.2209 5.62746 26.2517C5.60224 26.3415 5.60224 26.4364 5.62746 26.5262C5.64149 26.5657 5.66345 26.602 5.69201 26.6328C5.72056 26.6635 5.75509 26.6882 5.7935 26.7051C5.83211 26.7218 5.87372 26.7304 5.91579 26.7304C5.95785 26.7304 5.99947 26.7218 6.03808 26.7051C6.10568 26.6713 7.43994 25.2466 7.49661 25.1472C7.5239 25.0916 7.53809 25.0306 7.53809 24.9687C7.53809 24.9068 7.5239 24.8458 7.49661 24.7902C7.42999 24.6819 5.94661 23.0752 5.879 23.0414C5.84013 23.0213 5.797 23.0107 5.75323 23.0107C5.70946 23.0107 5.66633 23.0213 5.62746 23.0414V23.0444Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path
                              d="M57.3684 23.0441C57.2909 23.0806 57.2291 23.1438 57.1944 23.2221C57.1692 23.3121 57.1709 23.4075 57.1994 23.4965C57.328 23.6819 57.4771 23.8524 57.6438 24.0045L58.2483 24.6219L56.5959 24.6309L55.54 24.6398L55.4764 24.6806C55.4339 24.7104 55.3968 24.7474 55.367 24.79C55.3302 24.8434 55.3143 24.9085 55.3223 24.9729C55.3143 25.0373 55.3302 25.1024 55.367 25.1559C55.3968 25.1984 55.4338 25.2354 55.4764 25.2652L55.54 25.306L56.5959 25.3149L58.2483 25.3239L57.6438 25.9413C57.3068 26.2843 57.3873 26.2207 57.3734 26.2515C57.3449 26.3405 57.3432 26.4359 57.3684 26.5259C57.4027 26.6077 57.468 26.6725 57.55 26.7062C57.632 26.74 57.724 26.7398 57.8059 26.7058C57.8775 26.672 59.2972 25.2473 59.3569 25.1479C59.385 25.0925 59.3993 25.031 59.3984 24.9688C59.3975 24.9066 59.3816 24.8456 59.3519 24.791C59.2813 24.6826 57.7035 23.0759 57.6309 23.0421C57.5899 23.0227 57.545 23.0127 57.4996 23.0127C57.4543 23.0127 57.4094 23.0227 57.3684 23.0421V23.0441Z"
                              fill="#96A0B5"
                              stroke="#96A0B5"
                              stroke-width="0.198845"
                            />
                            <path d="M95.582 0.71875V50.43" stroke="#96A0B5" stroke-width="0.994226" />
                            <path d="M87.3398 0.71875V50.43" stroke="#96A0B5" stroke-width="0.994226" />
                            <path d="M79.0967 0.71875V50.43" stroke="#96A0B5" stroke-width="0.994226" />
                            <path d="M71.043 0.71875V50.43" stroke="#96A0B5" stroke-width="0.994226" />
                            <path d="M62.7617 0.71875V50.43" stroke="#96A0B5" stroke-width="0.994226" />
                            <path d="M40.5801 0.71875V50.43" stroke="#96A0B5" stroke-width="0.994226" />
                            <path d="M32.5967 0.644531V50.3558" stroke="#96A0B5" stroke-width="0.994226" />
                            <path d="M24.6123 0.644531V50.3558" stroke="#96A0B5" stroke-width="0.994226" />
                            <path d="M16.6289 0.883789V50.5951" stroke="#96A0B5" stroke-width="0.994226" />
                            <path d="M8.48047 0.644531V50.3558" stroke="#96A0B5" stroke-width="0.994226" />
                            <path d="M0.496094 0.147461V49.8588" stroke="#96A0B5" stroke-width="0.994226" />
                            <path d="M51.7646 0.71875V50.43" stroke="#96A0B5" stroke-width="0.994226" />
                            <path d="M0.495923 22.7568H2.48438V30.7106H0.495923V22.7568Z" fill="#96A0B5" />
                            <path d="M2.03206 26.7334H4.02051V31.7045H2.03206V26.7334Z" fill="#96A0B5" />
                            <path d="M49.6483 21.2656H51.6367V29.2194H49.6483V21.2656Z" fill="#96A0B5" />
                            <path d="M48.1639 26.2363H50.1523V31.2075H48.1639V26.2363Z" fill="#96A0B5" />
                            <path d="M101.601 22.7568H103.59V30.7106H101.601V22.7568Z" fill="#96A0B5" />
                            <path d="M99.8641 26.7334H101.853V31.7045H99.8641V26.7334Z" fill="#96A0B5" />
                          </g>
                          <defs>
                            <clipPath id="clip0_493_904">
                              <rect width="104" height="51" fill="white" transform="matrix(-1 0 0 1 104 0)" />
                            </clipPath>
                          </defs>
                        </svg>`,
  },
  [IconPrefix.VERTICAL_SLIDING_DESIGN]: {
    [slidingDesignIconKeys.VERTICAL_TWO_TRACK_TWO_PANEL_TOP_FIX]: `<svg xmlns="http://www.w3.org/2000/svg" width="57" height="51" viewBox="0 0 57.575 51.656">
    <g id="Group_178832" data-name="Group 178832" transform="translate(-594.5 -245.453)">
      <path
        id="path66"
        d="M0,56.575V0H27V56.575H0"
        transform="translate(595 296.609) rotate(-90)"
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
        d="M0,48.126V0H20.769V48.126H0"
        transform="translate(599.224 293.677) rotate(-90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <rect
        id="Rectangle_10006"
        data-name="Rectangle 10006"
        width="2.59"
        height="9.829"
        transform="translate(633.773 291.177) rotate(90)"
        fill="#96a0b5"
      />
      <rect
        id="Rectangle_10024"
        data-name="Rectangle 10024"
        width="3.033"
        height="7.372"
        transform="translate(627.667 293.367) rotate(90)"
        fill="#96a0b5"
      />
      <g id="Group_178831" data-name="Group 178831" transform="translate(0.383 2)">
        <path
          id="path232"
          d="M0,0H8.168L5.445,2.625"
          transform="translate(623.33 285.192) rotate(-90)"
          fill="none"
          stroke="#96a0b5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <path
          id="path234"
          d="M2.723,2.723,0,0"
          transform="translate(620.617 279.747) rotate(-90)"
          fill="none"
          stroke="#96a0b5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
      <path
        id="path66-3"
        data-name="path66"
        d="M0,56.575V0H23.66V56.575H0"
        transform="translate(595 269.613) rotate(-90)"
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
        d="M0,48.126V0H20.828V48.126H0"
        transform="translate(599.226 269.613) rotate(-90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="Path_78155"
        data-name="Path 78155"
        d="M7.878.793,7.084,0,3.939,3.145.793,0,0,.793,3.145,3.939,0,7.084l.793.793L3.939,4.732,7.084,7.878l.793-.793L4.732,3.939Z"
        transform="translate(629.641 259) rotate(135)"
        fill="#96a0b5"
        stroke="#97a1b5"
        stroke-width="0.3"
      />
    </g>
  </svg>`,
    [slidingDesignIconKeys.VERTICAL_TWO_TRACK_TWO_PANEL_BOTTOM_FIX]: `<svg xmlns="http://www.w3.org/2000/svg" width="57" height="51" viewBox="0 0 57.575 51.656">
  <g
    id="Group_178833"
    data-name="Group 178833"
    transform="translate(652.075 297.109) rotate(180)"
  >
    <path
      id="path66"
      d="M0,56.575V0H23.7V56.575H0"
      transform="translate(595 296.609) rotate(-90)"
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
      d="M0,48.126V0H20.769V48.126H0"
      transform="translate(599.224 293.677) rotate(-90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <rect
      id="Rectangle_10006"
      data-name="Rectangle 10006"
      width="2.59"
      height="9.829"
      transform="translate(623.981 291.087) rotate(90)"
      fill="#96a0b5"
    />
    <rect
      id="Rectangle_10024"
      data-name="Rectangle 10024"
      width="2.722"
      height="7.372"
      transform="translate(627.667 293.677) rotate(90)"
      fill="#96a0b5"
    />
    <g id="Group_178831" data-name="Group 178831" transform="translate(0 2)">
      <path
        id="path232"
        d="M0,0H8.168L5.445,2.625"
        transform="translate(623.33 285.192) rotate(-90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="path234"
        d="M2.723,2.723,0,0"
        transform="translate(620.617 279.747) rotate(-90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
    <path
      id="path66-3"
      data-name="path66"
      d="M0,56.575V0H26.955V56.575H0"
      transform="translate(595 272.908) rotate(-90)"
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
      d="M0,48.126V0H20.828V48.126H0"
      transform="translate(599.226 269.613) rotate(-90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="Path_78155"
      data-name="Path 78155"
      d="M7.878.793,7.084,0,3.939,3.145.793,0,0,.793,3.145,3.939,0,7.084l.793.793L3.939,4.732,7.084,7.878l.793-.793L4.732,3.939Z"
      transform="translate(628.858 259) rotate(135)"
      fill="#96a0b5"
      stroke="#97a1b5"
      stroke-width="0.3"
    />
  </g>
</svg>`,
    [slidingDesignIconKeys.VERTICAL_THREE_TRACK_THREE_PANEL_TOP_FIX]: `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 40.817 52.931">
<g
  id="Group_178838"
  data-name="Group 178838"
  transform="translate(453.317 170.442) rotate(180)"
>
  <g id="Group_37490" data-name="Group 37490" transform="translate(452.817 137.247) rotate(90)">
    <g id="Group_37486" data-name="Group 37486" transform="translate(15.655) rotate(90)">
      <g id="Group_37459" data-name="Group 37459" transform="translate(0 0.016)">
        <path
          id="path66"
          d="M0,39.817V0H16.1V39.817H0"
          transform="translate(39.817 0) rotate(90)"
          fill="none"
          stroke="#96a0b5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
      <g id="Group_37484" data-name="Group 37484" transform="translate(2.974 2.449)">
        <path
          id="path66-2"
          data-name="path66"
          d="M0,33.871V0H13.7V33.871H0"
          transform="translate(33.871 0) rotate(90)"
          fill="none"
          stroke="#96a0b5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
    </g>
  </g>
  <g
    id="Group_37486-2"
    data-name="Group 37486"
    transform="translate(452.817 169.942) rotate(180)"
  >
    <g id="Group_37459-2" data-name="Group 37459" transform="translate(0 0)">
      <path
        id="path66-3"
        data-name="path66"
        d="M0,39.817V0H16.9V39.817H0"
        transform="translate(39.817 0) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
    <g id="Group_37484-2" data-name="Group 37484" transform="translate(2.974 3.013)">
      <path
        id="path66-4"
        data-name="path66"
        d="M0,33.871V0H14.835V33.871H0"
        transform="translate(33.871 -1) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </g>
  <g id="Group_37490-2" data-name="Group 37490" transform="translate(452.817 118) rotate(90)">
    <g id="Group_37486-3" data-name="Group 37486" transform="translate(19.54) rotate(90)">
      <g id="Group_37459-3" data-name="Group 37459" transform="translate(0 0)">
        <path
          id="path66-5"
          data-name="path66"
          d="M0,39.817V0H18.822V39.817H0"
          transform="translate(39.817 0.707) rotate(90)"
          fill="none"
          stroke="#96a0b5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
      <g id="Group_37484-3" data-name="Group 37484" transform="translate(2.972 1.772)">
        <path
          id="path66-6"
          data-name="path66"
          d="M0,33.871V0H13.292V33.871H0"
          transform="translate(33.871 1.715) rotate(90)"
          fill="none"
          stroke="#96a0b5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
    </g>
  </g>
  <g id="Group_178837" data-name="Group 178837" transform="translate(0 -0.33)">
    <path
      id="path232"
      d="M676.48-681.512h5.748l-1.916-1.848"
      transform="translate(-248.573 -551.503) rotate(90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path234"
      d="M678.4-679.04l-1.916,1.916"
      transform="translate(-246.094 -547.671) rotate(90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <g id="Group_178836" data-name="Group 178836" transform="translate(0 -0.254)">
    <path
      id="path232-2"
      data-name="path232"
      d="M676.48-681.512h5.748l-1.916-1.848"
      transform="translate(-248.573 -534.68) rotate(90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path234-2"
      data-name="path234"
      d="M678.4-679.04l-1.916,1.916"
      transform="translate(-246.094 -530.848) rotate(90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <g id="Group_178839" data-name="Group 178839">
    <path
      id="Path_254626"
      data-name="Path 254626"
      d="M0,0H2.594V6.918H0Z"
      transform="translate(432.4 120.3) rotate(90)"
      fill="#96a0b5"
    />
    <rect
      id="Rectangle_10024"
      data-name="Rectangle 10024"
      width="2.946"
      height="5.188"
      transform="translate(435.13 117.954) rotate(90)"
      fill="#96a0b5"
    />
  </g>
  <g id="Group_178835" data-name="Group 178835" transform="translate(0 0.868)">
    <path
      id="path178"
      d="M0,4.771,2.385,2.385,0,0"
      transform="translate(433.093 156.413) rotate(45)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1.2"
    />
    <path
      id="path184"
      d="M2.385,4.771,0,2.385,2.385,0"
      transform="translate(434.746 158.066) rotate(45)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1.2"
    />
  </g>
</g>
</svg>`,
    [slidingDesignIconKeys.VERTICAL_THREE_TRACK_THREE_PANEL_BOTTOM_FIX]: `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 40.817 52.931">
<g id="Group_178834" data-name="Group 178834" transform="translate(-412.5 -117.511)">
  <g id="Group_37490" data-name="Group 37490" transform="translate(452.817 136.873) rotate(90)">
    <g id="Group_37486" data-name="Group 37486" transform="translate(16.745) rotate(90)">
      <g id="Group_37459" data-name="Group 37459" transform="translate(0 0.717)">
        <path
          id="path66"
          d="M0,39.817V0H17.014V39.817H0"
          transform="translate(39.817 0) rotate(90)"
          fill="none"
          stroke="#96a0b5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
      <g id="Group_37484" data-name="Group 37484" transform="translate(2.974 2.375)">
        <path
          id="path66-2"
          data-name="path66"
          d="M0,33.871V0H14.011V33.871H0"
          transform="translate(33.871 -1.658) rotate(90)"
          fill="none"
          stroke="#96a0b5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
    </g>
  </g>
  <g
    id="Group_37486-2"
    data-name="Group 37486"
    transform="translate(452.817 169.942) rotate(180)"
  >
    <g id="Group_37459-2" data-name="Group 37459" transform="translate(0 0)">
      <path
        id="path66-3"
        data-name="path66"
        d="M0,39.817V0H16.9V39.817H0"
        transform="translate(39.817 0) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
    <g id="Group_37484-2" data-name="Group 37484" transform="translate(2.974 3.013)">
      <path
        id="path66-4"
        data-name="path66"
        d="M0,33.871V0H12.4V33.871H0"
        transform="translate(33.871 -1) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </g>
  <g id="Group_37490-2" data-name="Group 37490" transform="translate(452.817 118) rotate(90)">
    <g id="Group_37486-3" data-name="Group 37486" transform="translate(19.54) rotate(90)">
      <g id="Group_37459-3" data-name="Group 37459" transform="translate(0 0)">
        <path
          id="path66-5"
          data-name="path66"
          d="M0,39.817V0H17.757V39.817H0"
          transform="translate(39.817 1.772) rotate(90)"
          fill="none"
          stroke="#96a0b5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
      <g id="Group_37484-3" data-name="Group 37484" transform="translate(2.972 1.772)">
        <path
          id="path66-6"
          data-name="path66"
          d="M0,33.871V0H14.785V33.871H0"
          transform="translate(33.871 0) rotate(90)"
          fill="none"
          stroke="#96a0b5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
    </g>
  </g>
  <g id="Group_178837" data-name="Group 178837" transform="translate(0 1)">
    <path
      id="path232"
      d="M676.48-681.512h5.748l-1.916-1.848"
      transform="translate(-248.573 -551.503) rotate(90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path234"
      d="M678.4-679.04l-1.916,1.916"
      transform="translate(-246.094 -547.671) rotate(90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <g id="Group_178836" data-name="Group 178836" transform="translate(0 1)">
    <path
      id="path232-2"
      data-name="path232"
      d="M676.48-681.512h5.748l-1.916-1.848"
      transform="translate(-248.573 -534.68) rotate(90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path234-2"
      data-name="path234"
      d="M678.4-679.04l-1.916,1.916"
      transform="translate(-246.094 -530.848) rotate(90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <rect
    id="Rectangle_10006"
    data-name="Rectangle 10006"
    width="2.594"
    height="6.918"
    transform="translate(439.13 120.501) rotate(90)"
    fill="#96a0b5"
  />
  <rect
    id="Rectangle_10024"
    data-name="Rectangle 10024"
    width="2.946"
    height="5.188"
    transform="translate(435.671 117.954) rotate(90)"
    fill="#96a0b5"
  />
  <g id="Group_178835" data-name="Group 178835" transform="translate(0 2)">
    <path
      id="path178"
      d="M0,4.771,2.385,2.385,0,0"
      transform="translate(433.093 156.413) rotate(45)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1.2"
    />
    <path
      id="path184"
      d="M2.385,4.771,0,2.385,2.385,0"
      transform="translate(434.746 158.066) rotate(45)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1.2"
    />
  </g>
</g>
</svg>`,
    [slidingDesignIconKeys.VERTICAL_FOUR_TRACK_FOUR_PANEL_TOP_FIX]: `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 40.817 52.931">
<g id="Group_178847" data-name="Group 178847" transform="translate(-435.5 -315.453)">
  <g id="Group_37486" data-name="Group 37486" transform="translate(436 328.34)">
    <g id="Group_37459" data-name="Group 37459" transform="translate(0 0.016)">
      <path
        id="path66"
        d="M0,39.817V0H12.529V39.817H0"
        transform="translate(39.817 0) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
    <g id="Group_37484" data-name="Group 37484" transform="translate(2.974 2.102)">
      <path
        id="path66-2"
        data-name="path66"
        d="M0,33.871V0H10.443V33.871H0"
        transform="translate(33.871 0) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </g>
  <g id="Group_178845" data-name="Group 178845" transform="translate(436 340.89)">
    <g id="Group_37459-2" data-name="Group 37459" transform="translate(0 0.016)">
      <path
        id="path66-3"
        data-name="path66"
        d="M0,39.817V0H12.608V39.817H0"
        transform="translate(39.817 0) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
    <g id="Group_37484-2" data-name="Group 37484" transform="translate(2.974 2.181)">
      <path
        id="path66-4"
        data-name="path66"
        d="M0,33.871V0H10.443V33.871H0"
        transform="translate(33.871 0) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </g>
  <g id="Group_37459-3" data-name="Group 37459" transform="translate(436 315.953)">
    <path
      id="path66-5"
      data-name="path66"
      d="M0,39.817V0H12.4V39.817H0"
      transform="translate(39.817 0) rotate(90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <g id="Group_37484-3" data-name="Group 37484" transform="translate(438.974 318.966)">
    <path
      id="path66-6"
      data-name="path66"
      d="M0,33.871V0H10.389V33.871H0"
      transform="translate(33.871 -1) rotate(90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <g id="Group_37486-2" data-name="Group 37486" transform="translate(436 349.909)">
    <g id="Group_37459-4" data-name="Group 37459" transform="translate(0 3.604)">
      <path
        id="path66-7"
        data-name="path66"
        d="M0,39.817V0H14.371V39.817H0"
        transform="translate(39.817 0) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
    <g id="Group_37484-4" data-name="Group 37484" transform="translate(2.972 5.846)">
      <path
        id="path66-8"
        data-name="path66"
        d="M0,33.871V0H10.059V33.871H0"
        transform="translate(33.871 0) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </g>
  <g id="Group_178844" data-name="Group 178844" transform="translate(0 3)">
    <path
      id="path232"
      d="M0,1.474H4.584L3.056,0"
      transform="translate(454.03 360.085) rotate(-90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path234"
      d="M1.528,0,0,1.528"
      transform="translate(455.498 357.028) rotate(-90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <g id="Group_178843" data-name="Group 178843" transform="translate(0 -5)">
    <path
      id="path232-2"
      data-name="path232"
      d="M0,1.474H4.584L3.056,0"
      transform="translate(454.03 343.185) rotate(-90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path234-2"
      data-name="path234"
      d="M1.528,0,0,1.528"
      transform="translate(455.498 340.128) rotate(-90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <g id="Group_178846" data-name="Group 178846" transform="translate(0 7.628)">
    <path
      id="path232-3"
      data-name="path232"
      d="M0,1.474H4.584L3.056,0"
      transform="translate(454.03 343.185) rotate(-90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path234-3"
      data-name="path234"
      d="M1.528,0,0,1.528"
      transform="translate(455.498 340.128) rotate(-90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <path
    id="Path_254626"
    data-name="Path 254626"
    d="M0,0H2.594V6.918H0Z"
    transform="translate(455.528 366.314) rotate(-90)"
    fill="#96a0b5"
  />
  <rect
    id="Rectangle_10024"
    data-name="Rectangle 10024"
    width="2.347"
    height="5.188"
    transform="translate(452.687 367.941) rotate(-90)"
    fill="#96a0b5"
  />
  <g id="Group_178842" data-name="Group 178842" transform="translate(0 -1.4)">
    <path
      id="path178"
      d="M0,4.153,2.076,2.076,0,0"
      transform="translate(455.291 327.744) rotate(-135)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1.2"
    />
    <path
      id="path184"
      d="M2.076,4.153,0,2.076,2.076,0"
      transform="translate(453.852 326.305) rotate(-135)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1.2"
    />
  </g>
</g>
</svg>`,
    [slidingDesignIconKeys.VERTICAL_FOUR_TRACK_FOUR_PANEL_BOTTOM_FIX]: `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 40.817 52.931">
<g id="Group_178848" data-name="Group 178848" transform="translate(-495.5 -315.51)">
  <g
    id="Group_37486"
    data-name="Group 37486"
    transform="translate(535.817 355.554) rotate(180)"
  >
    <g id="Group_37459" data-name="Group 37459" transform="translate(0 1.577)">
      <path
        id="path66"
        d="M0,39.817V0H13.391V39.817H0"
        transform="translate(39.817 0) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
    <g id="Group_37484" data-name="Group 37484" transform="translate(2.974 1.577)">
      <path
        id="path66-2"
        data-name="path66"
        d="M0,33.871V0H11.078V33.871H0"
        transform="translate(33.871 0) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </g>
  <g
    id="Group_178845"
    data-name="Group 178845"
    transform="translate(535.817 343.005) rotate(180)"
  >
    <g id="Group_37459-2" data-name="Group 37459" transform="translate(0 2.502)">
      <path
        id="path66-3"
        data-name="path66"
        d="M0,39.817V0H12.929V39.817H0"
        transform="translate(39.817 0) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
    <g id="Group_37484-2" data-name="Group 37484" transform="translate(2.974 2.502)">
      <path
        id="path66-4"
        data-name="path66"
        d="M0,33.871V0H10.443V33.871H0"
        transform="translate(33.871 0) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </g>
  <g
    id="Group_37459-3"
    data-name="Group 37459"
    transform="translate(535.817 367.941) rotate(180)"
  >
    <path
      id="path66-5"
      data-name="path66"
      d="M0,39.817V0H13.964V39.817H0"
      transform="translate(39.817 0) rotate(90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <g
    id="Group_37484-3"
    data-name="Group 37484"
    transform="translate(532.843 364.859) rotate(180)"
  >
    <path
      id="path66-6"
      data-name="path66"
      d="M0,33.871V0H9.807V33.871H0"
      transform="translate(33.871 -1) rotate(90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <g
    id="Group_37486-2"
    data-name="Group 37486"
    transform="translate(535.817 331.178) rotate(180)"
  >
    <g id="Group_37459-4" data-name="Group 37459" transform="translate(0 3.604)">
      <path
        id="path66-7"
        data-name="path66"
        d="M0,39.817V0H11.564V39.817H0"
        transform="translate(39.817 0) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
    <g id="Group_37484-4" data-name="Group 37484" transform="translate(2.972 3.691)">
      <path
        id="path66-8"
        data-name="path66"
        d="M0,33.871V0H9.249V33.871H0"
        transform="translate(33.871 0) rotate(90)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </g>
  <g
    id="Group_178844"
    data-name="Group 178844"
    transform="translate(971.817 680.894) rotate(180)"
  >
    <path
      id="path232"
      d="M0,1.474H4.584L3.056,0"
      transform="translate(454.03 360.085) rotate(-90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path234"
      d="M1.528,0,0,1.528"
      transform="translate(455.498 357.028) rotate(-90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <g
    id="Group_178843"
    data-name="Group 178843"
    transform="translate(971.817 689.485) rotate(180)"
  >
    <path
      id="path232-2"
      data-name="path232"
      d="M0,1.474H4.584L3.056,0"
      transform="translate(454.03 343.185) rotate(-90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path234-2"
      data-name="path234"
      d="M1.528,0,0,1.528"
      transform="translate(455.498 340.128) rotate(-90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <g
    id="Group_178846"
    data-name="Group 178846"
    transform="translate(971.817 676.184) rotate(180)"
  >
    <path
      id="path232-3"
      data-name="path232"
      d="M0,1.474H4.584L3.056,0"
      transform="translate(454.03 343.185) rotate(-90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path234-3"
      data-name="path234"
      d="M1.528,0,0,1.528"
      transform="translate(455.498 340.128) rotate(-90)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <path
    id="Path_254626"
    data-name="Path 254626"
    d="M0,0H2.594V6.918H0Z"
    transform="translate(523.206 317.75) rotate(90)"
    fill="#96a0b5"
  />
  <rect
    id="Rectangle_10024"
    data-name="Rectangle 10024"
    width="2.347"
    height="5.188"
    transform="translate(519.13 315.953) rotate(90)"
    fill="#96a0b5"
  />
  <g
    id="Group_178842"
    data-name="Group 178842"
    transform="translate(971.817 686.044) rotate(180)"
  >
    <path
      id="path178"
      d="M0,4.153,2.076,2.076,0,0"
      transform="translate(455.291 327.744) rotate(-135)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1.2"
    />
    <path
      id="path184"
      d="M2.076,4.153,0,2.076,2.076,0"
      transform="translate(453.852 326.305) rotate(-135)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1.2"
    />
  </g>
</g>
</svg>`,
    [slidingDesignIconKeys.VERTICAL_TWO_TRACK_THREE_PANEL_BOTTOM_MEETING]: `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 40.817 52.932">
<g id="Group_178840" data-name="Group 178840" transform="translate(-481.5 -47.904)">
  <g
    id="Group_178795"
    data-name="Group 178795"
    transform="translate(521.817 48.393) rotate(90)"
  >
    <g id="Group_37499" data-name="Group 37499" transform="translate(0)">
      <g id="Group_37496" data-name="Group 37496">
        <g id="Group_37492" data-name="Group 37492" transform="translate(19.542)">
          <g id="Group_37490" data-name="Group 37490" transform="translate(-0.001 0)">
            <g
              id="Group_37486"
              data-name="Group 37486"
              transform="translate(16.078 0) rotate(90)"
            >
              <g id="Group_37459" data-name="Group 37459" transform="translate(0 0)">
                <path
                  id="path66"
                  d="M0,39.817V0H17.3V39.817H0"
                  transform="translate(39.817 0) rotate(90)"
                  fill="none"
                  stroke="#96a0b5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
              <g id="Group_37484" data-name="Group 37484" transform="translate(2.974 2.237)">
                <path
                  id="path66-2"
                  data-name="path66"
                  d="M0,33.871V0H12.838V33.871H0"
                  transform="translate(33.871 0) rotate(90)"
                  fill="none"
                  stroke="#96a0b5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="Group_37497" data-name="Group 37497" transform="translate(23.614)">
          <g id="Group_37490-2" data-name="Group 37490" transform="translate(12.008 0)">
            <g
              id="Group_37486-2"
              data-name="Group 37486"
              transform="translate(16.321 0) rotate(90)"
            >
              <g id="Group_37459-2" data-name="Group 37459" transform="translate(0 0)">
                <path
                  id="path66-3"
                  data-name="path66"
                  d="M0,39.817V0H16.319V39.817H0"
                  transform="translate(39.817 0) rotate(90)"
                  fill="none"
                  stroke="#96a0b5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
              <g id="Group_37484-2" data-name="Group 37484" transform="translate(2.974 3.013)">
                <path
                  id="path66-4"
                  data-name="path66"
                  d="M0,33.871V0H11.883V33.871H0"
                  transform="translate(33.871 -0.895) rotate(90)"
                  fill="none"
                  stroke="#96a0b5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
            </g>
          </g>
          <g
            id="Group_178796"
            data-name="Group 178796"
            transform="translate(6.134 21.787) rotate(180)"
          >
            <path
              id="path232"
              d="M0,0H5.748L3.832,1.848"
              transform="translate(0 1.909)"
              fill="none"
              stroke="#96a0b5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <path
              id="path234"
              d="M1.916,1.916,0,0"
              transform="translate(3.832)"
              fill="none"
              stroke="#96a0b5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="1"
            />
          </g>
          <g
            id="Group_178797"
            data-name="Group 178797"
            transform="translate(17.294 19.892) rotate(-45)"
          >
            <path
              id="path178"
              d="M0,4.771,2.385,2.385,0,0"
              transform="translate(0 0)"
              fill="none"
              stroke="#96a0b5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="1.2"
            />
            <path
              id="path184"
              d="M2.385,4.771,0,2.385,2.385,0"
              transform="translate(2.338 0)"
              fill="none"
              stroke="#96a0b5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="1.2"
            />
          </g>
        </g>
        <g id="Group_37491" data-name="Group 37491">
          <g id="Group_37490-3" data-name="Group 37490" transform="translate(0 0)">
            <g
              id="Group_37486-3"
              data-name="Group 37486"
              transform="translate(19.54 0) rotate(90)"
            >
              <g id="Group_37459-3" data-name="Group 37459" transform="translate(0 0)">
                <path
                  id="path66-5"
                  data-name="path66"
                  d="M0,39.817V0H18.31V39.817H0"
                  transform="translate(39.817 1.219) rotate(90)"
                  fill="none"
                  stroke="#96a0b5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
              <g id="Group_37484-3" data-name="Group 37484" transform="translate(2.972 2.865)">
                <path
                  id="path66-6"
                  data-name="path66"
                  d="M0,33.871V0H15.751V33.871H0"
                  transform="translate(33.871 -1.646) rotate(90)"
                  fill="none"
                  stroke="#96a0b5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
    <g id="Group_178792" data-name="Group 178792" transform="translate(7.976 18.031)">
      <path
        id="path232-2"
        data-name="path232"
        d="M0,1.848H5.748L3.832,0"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="path234-2"
        data-name="path234"
        d="M1.916,0,0,1.916"
        transform="translate(3.832 1.841)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </g>
  <g
    id="Group_178818"
    data-name="Group 178818"
    transform="translate(508.391 78.945) rotate(90)"
  >
    <rect
      id="Rectangle_10006"
      data-name="Rectangle 10006"
      width="2.594"
      height="6.918"
      transform="translate(0.728 -1)"
      fill="#96a0b5"
    />
    <rect
      id="Rectangle_10024"
      data-name="Rectangle 10024"
      width="2.838"
      height="5.188"
      transform="translate(2.594 3.459)"
      fill="#96a0b5"
    />
  </g>
  <g
    id="Group_178828"
    data-name="Group 178828"
    transform="translate(499.743 54.272) rotate(-90)"
  >
    <rect
      id="Rectangle_10006-2"
      data-name="Rectangle 10006"
      width="2.594"
      height="6.918"
      transform="translate(1.185 2.729)"
      fill="#96a0b5"
    />
    <rect
      id="Rectangle_10024-2"
      data-name="Rectangle 10024"
      width="2.205"
      height="5.188"
      transform="translate(3.228 0)"
      fill="#96a0b5"
    />
  </g>
</g>
</svg>`,
    [slidingDesignIconKeys.VERTICAL_TWO_TRACK_THREE_PANEL_TOP_MEETING]: `<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 40.817 52.932">
<g
  id="Group_178841"
  data-name="Group 178841"
  transform="translate(522.317 100.835) rotate(180)"
>
  <g
    id="Group_178795"
    data-name="Group 178795"
    transform="translate(521.817 48.393) rotate(90)"
  >
    <g id="Group_37499" data-name="Group 37499" transform="translate(0)">
      <g id="Group_37496" data-name="Group 37496">
        <g id="Group_37492" data-name="Group 37492" transform="translate(19.542)">
          <g id="Group_37490" data-name="Group 37490" transform="translate(-0.001 0)">
            <g
              id="Group_37486"
              data-name="Group 37486"
              transform="translate(16.078 0) rotate(90)"
            >
              <g id="Group_37459" data-name="Group 37459" transform="translate(0 0)">
                <path
                  id="path66"
                  d="M0,39.817V0H16.526V39.817H0"
                  transform="translate(39.817 0) rotate(90)"
                  fill="none"
                  stroke="#96a0b5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
              <g id="Group_37484" data-name="Group 37484" transform="translate(2.974 2.237)">
                <path
                  id="path66-2"
                  data-name="path66"
                  d="M0,33.871V0H14.4V33.871H0"
                  transform="translate(33.871 0) rotate(90)"
                  fill="none"
                  stroke="#96a0b5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
            </g>
          </g>
        </g>
        <g id="Group_37497" data-name="Group 37497" transform="translate(23.614)">
          <g id="Group_37490-2" data-name="Group 37490" transform="translate(12.008 0)">
            <g
              id="Group_37486-2"
              data-name="Group 37486"
              transform="translate(16.321 0) rotate(90)"
            >
              <g id="Group_37459-2" data-name="Group 37459" transform="translate(0 0)">
                <path
                  id="path66-3"
                  data-name="path66"
                  d="M0,39.817V0H16.319V39.817H0"
                  transform="translate(39.817 0) rotate(90)"
                  fill="none"
                  stroke="#96a0b5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
              <g id="Group_37484-2" data-name="Group 37484" transform="translate(2.974 3.013)">
                <path
                  id="path66-4"
                  data-name="path66"
                  d="M0,33.871V0H11.883V33.871H0"
                  transform="translate(33.871 -0.895) rotate(90)"
                  fill="none"
                  stroke="#96a0b5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
            </g>
          </g>
          <g
            id="Group_178796"
            data-name="Group 178796"
            transform="translate(5.134 21.787) rotate(180)"
          >
            <path
              id="path232"
              d="M0,0H5.748L3.832,1.848"
              transform="translate(0 1.909)"
              fill="none"
              stroke="#96a0b5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="1"
            />
            <path
              id="path234"
              d="M1.916,1.916,0,0"
              transform="translate(3.832)"
              fill="none"
              stroke="#96a0b5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="1"
            />
          </g>
          <g
            id="Group_178797"
            data-name="Group 178797"
            transform="translate(17.126 19.892) rotate(-45)"
          >
            <path
              id="path178"
              d="M0,4.771,2.385,2.385,0,0"
              transform="translate(0 0)"
              fill="none"
              stroke="#96a0b5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="1.2"
            />
            <path
              id="path184"
              d="M2.385,4.771,0,2.385,2.385,0"
              transform="translate(2.338 0)"
              fill="none"
              stroke="#96a0b5"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-miterlimit="10"
              stroke-width="1.2"
            />
          </g>
        </g>
        <g id="Group_37491" data-name="Group 37491">
          <g id="Group_37490-3" data-name="Group 37490" transform="translate(0 0)">
            <g
              id="Group_37486-3"
              data-name="Group 37486"
              transform="translate(19.54 0) rotate(90)"
            >
              <g id="Group_37459-3" data-name="Group 37459" transform="translate(0 0)">
                <path
                  id="path66-5"
                  data-name="path66"
                  d="M0,39.817V0H18.975V39.817H0"
                  transform="translate(39.817 0.554) rotate(90)"
                  fill="none"
                  stroke="#96a0b5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
              <g id="Group_37484-3" data-name="Group 37484" transform="translate(2.972 2.865)">
                <path
                  id="path66-6"
                  data-name="path66"
                  d="M0,33.871V0H13.865V33.871H0"
                  transform="translate(33.871 0.24) rotate(90)"
                  fill="none"
                  stroke="#96a0b5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-miterlimit="10"
                  stroke-width="1"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </g>
    <g id="Group_178792" data-name="Group 178792" transform="translate(6.505 18.031)">
      <path
        id="path232-2"
        data-name="path232"
        d="M0,1.848H5.748L3.832,0"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
      <path
        id="path234-2"
        data-name="path234"
        d="M1.916,0,0,1.916"
        transform="translate(3.832 1.841)"
        fill="none"
        stroke="#96a0b5"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-miterlimit="10"
        stroke-width="1"
      />
    </g>
  </g>
  <g
    id="Group_178818"
    data-name="Group 178818"
    transform="translate(504.391 79.673) rotate(90)"
  >
    <rect
      id="Rectangle_10006"
      data-name="Rectangle 10006"
      width="2.594"
      height="6.918"
      transform="translate(0 2.729)"
      fill="#96a0b5"
    />
    <rect
      id="Rectangle_10024"
      data-name="Rectangle 10024"
      width="2.838"
      height="5.188"
      transform="translate(1.867 0)"
      fill="#96a0b5"
    />
  </g>
  <g
    id="Group_178828"
    data-name="Group 178828"
    transform="translate(494.743 53.087) rotate(-90)"
  >
    <rect
      id="Rectangle_10006-2"
      data-name="Rectangle 10006"
      width="2.594"
      height="6.918"
      transform="translate(0 0)"
      fill="#96a0b5"
    />
    <rect
      id="Rectangle_10024-2"
      data-name="Rectangle 10024"
      width="2.205"
      height="5.188"
      transform="translate(2.043 4.459)"
      fill="#96a0b5"
    />
  </g>
</g>
</svg>`,
  },
  [IconPrefix.TELESCOPIC_SLIDING_DESIGN]: {
    [slidingDesignIconKeys.TELESCOPIC_THREE_TRACK_THREE_PANEL_LEFT_OPENING]: `<svg
    *ngIf="viewHandleFromOutside"
    xmlns="http://www.w3.org/2000/svg"
    width="71"
    height="51"
    viewBox="0 0 71 51"
  >
    <g id="Group_53726" data-name="Group 53726" transform="translate(-211.5 -179.5)">
      <path
        id="path70"
        d="M137.36-912.4v-50h-70v50h70"
        transform="translate(144.64 1142.4)"
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
        transform="translate(144.64 1142.4)"
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
        d="M91.893-912.4v-50H67.36v50H91.893"
        transform="translate(167.973 1142.4)"
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
        d="M89.494-912.4v-50H67.36v50H89.494"
        transform="translate(192.506 1142.4)"
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
        transform="translate(147.622 1145.41)"
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
        d="M89.173-918.436V-962.4H67.36v43.964H89.173"
        transform="translate(167.973 1145.418)"
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
        d="M86.583-918.436V-962.4H67.36v43.964H86.583"
        transform="translate(192.506 1145.41)"
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
        d="M4.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,3.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-3.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,4.113-379.841Z"
        transform="translate(263.614 582.376)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
      <path
        id="Path_98974"
        data-name="Path 98974"
        d="M4.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,3.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-3.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,4.113-379.841Z"
        transform="translate(240.614 582.376)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
      <g id="Group_53592" data-name="Group 53592" transform="translate(276.589 200)">
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
      <path
        id="Path_98972"
        data-name="Path 98972"
        d="M6.256,5.626l-.63.63-2.5-2.5-2.5,2.5L0,5.626l2.5-2.5L0,.63.63,0l2.5,2.5L5.626,0l.63.63-2.5,2.5Z"
        transform="translate(224.006 209.424) rotate(-135)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.3"
      />
    </g>
  </svg>`,
    [slidingDesignIconKeys.TELESCOPIC_THREE_TRACK_THREE_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="71" height="50" viewBox="0 0 71 51">
  <g id="Group_178870" data-name="Group 178870" transform="translate(-122.652 -203.5)">
    <g id="Group_53673" data-name="Group 53673" transform="translate(-447.848 -778)">
      <g id="Group_41729" data-name="Group 41729" transform="translate(224.057 486.014)">
        <path
          id="path66"
          d="M0,50V0H70V50H0"
          transform="translate(416.943 545.986) rotate(180)"
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
          transform="translate(416.943 545.986) rotate(180)"
          fill="none"
          stroke="#96a0b5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1"
        />
        <g id="Group_41720" data-name="Group 41720" transform="translate(346.943 516)">
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
        <g id="Group_41726" data-name="Group 41726" transform="translate(411.943 516)">
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
          id="path66-3"
          data-name="path66"
          d="M0,50V0H23.333V50H0"
          transform="translate(393.61 545.986) rotate(180)"
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
          d="M0,50V0H23.333V50H0"
          transform="translate(370.276 545.986) rotate(180)"
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
          d="M0,44.048V0H17.292V44.048H0"
          transform="translate(367.266 543.022) rotate(180)"
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
          d="M0,44.048V0H20.361V44.048H0"
          transform="translate(390.637 543.022) rotate(180)"
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
          d="M0,44.048V0H20.336V44.048H0"
          transform="translate(413.946 543.022) rotate(180)"
          fill="none"
          stroke="#96a0b5"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-miterlimit="10"
          stroke-width="1"
        />
      </g>
      <g id="Group_53672" data-name="Group 53672" transform="translate(0.689)">
        <g id="Group_53671" data-name="Group 53671" transform="translate(-270.015 11.575)">
          <path
            id="path100"
            d="M389.519-680.8l-3.119,3.045"
            transform="translate(491.328 1676.332)"
            fill="none"
            stroke="#96a0b5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <path
            id="path98"
            d="M363.68-684.4h13.665l-3.119-3.119"
            transform="translate(503.503 1679.959)"
            fill="none"
            stroke="#96a0b5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <path
            id="path106"
            d="M366.8-681.356,363.68-684.4l3.119-3.119"
            transform="translate(503.503 1679.945)"
            fill="none"
            stroke="#96a0b5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1"
          />
        </g>
        <g id="Group_53668" data-name="Group 53668" transform="translate(619.5 982.5) rotate(90)">
          <path
            id="path258"
            d="M11.072,2.151H0L2.151,0"
            transform="translate(26.881 31.117) rotate(90)"
            fill="none"
            stroke="#96a0b5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <path
            id="path260"
            d="M0,0,2.151,2.23"
            transform="translate(24.73 31.117) rotate(90)"
            fill="none"
            stroke="#96a0b5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1"
          />
        </g>
        <g id="Group_53666" data-name="Group 53666" transform="translate(641 982.5) rotate(90)">
          <path
            id="path258-2"
            data-name="path258"
            d="M11.072,0H0L2.151,2.151"
            transform="translate(24.731 18.883) rotate(-90)"
            fill="none"
            stroke="#96a0b5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1"
          />
          <path
            id="path260-2"
            data-name="path260"
            d="M0,2.23,2.151,0"
            transform="translate(22.5 18.883) rotate(-90)"
            fill="none"
            stroke="#96a0b5"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-miterlimit="10"
            stroke-width="1"
          />
        </g>
      </g>
    </g>
  </g>
</svg>`,
    [slidingDesignIconKeys.TELESCOPIC_FOUR_TRACK_FOUR_PANEL_LEFT_OPENING]: `<svg
*ngIf="viewHandleFromOutside"
xmlns="http://www.w3.org/2000/svg"
width="70.501"
height="51.001"
viewBox="0 0 70.501 51.001"
>
<g id="Group_53728" data-name="Group 53728" transform="translate(-367.5 -189.5)">
  <path
    id="path70"
    d="M87.148-912.4v-50H67.36v50H87.148"
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
    d="M83.34-912.4v-50H67.36v50H83.34"
    transform="translate(354.161 1152.4)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <g id="Group_53592" data-name="Group 53592" transform="translate(432.5 210)">
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
  <path
    id="path70-4"
    data-name="path70"
    d="M85.305-912.4v-50H67.36v50H85.305"
    transform="translate(336.216 1152.4)"
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
    d="M83.147-912.4v-50H67.36v50H83.147"
    transform="translate(320.428 1152.4)"
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
    d="M80.332-918.4v-44H67.36v44H80.332"
    transform="translate(354.161 1155.393)"
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
    d="M82.519-918.4v-44H67.36v44H82.519"
    transform="translate(336.216 1155.393)"
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
    d="M80.663-918.4v-44H67.36v44h13.3"
    transform="translate(320.428 1155.393)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <path
    id="Path_99516"
    data-name="Path 99516"
    d="M5.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,2.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-2.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,5.113-379.841Z"
    transform="translate(388.172 592.375)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.2"
  />
  <path
    id="Path_99517"
    data-name="Path 99517"
    d="M5.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,2.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-2.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,5.113-379.841Z"
    transform="translate(405.172 592.375)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.2"
  />
  <path
    id="Path_99518"
    data-name="Path 99518"
    d="M5.545,4.986l-.558.558L2.772,3.331.558,5.545,0,4.986,2.214,2.772,0,.558.558,0,2.772,2.214,4.986,0l.558.558L3.331,2.772Z"
    transform="translate(378.476 219.341) rotate(-135)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.3"
  />
  <path
    id="Path_99519"
    data-name="Path 99519"
    d="M5.113-379.841a.415.415,0,0,1,.206.206.539.539,0,0,1-.006.316c-.016.036-.344.38-.741.775l-.714.712,4.245.01,2.247.01.075.047a.52.52,0,0,1,.129.127.3.3,0,0,1,.053.212.3.3,0,0,1-.053.212.521.521,0,0,1-.129.127l-.075.047-2.247.01-4.245.01.714.712c.4.4.726.739.741.775a.539.539,0,0,1,.006.316.4.4,0,0,1-.516.208c-.085-.04-2.183-2.1-2.254-2.214a.433.433,0,0,1,.006-.411c.083-.125,2.163-2.167,2.248-2.206A.37.37,0,0,1,5.113-379.841Z"
    transform="translate(421.172 592.375)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.2"
  />
</g>
</svg>`,
    [slidingDesignIconKeys.TELESCOPIC_FOUR_TRACK_FOUR_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="77" height="51" viewBox="0 0 77.053 51">
<g id="Group_41641" data-name="Group 41641" transform="translate(-180.555 -174.501)">
  <g id="Group_14219" data-name="Group 14219" transform="translate(7709.375 13316.041)">
    <path
      id="path112"
      d="M194.4-502.88h14.549v43.754H194.4"
      transform="translate(-7664.375 -12635.074)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path128"
      d="M205.89-458.107h-8.45l3.013-3.013"
      transform="translate(-7666.02 -12657.604)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path130"
      d="M197.44-454.56l3.013,3.086"
      transform="translate(-7666.02 -12661.146)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path134"
      d="M194.4-509.6v50"
      transform="translate(-7664.375 -12631.44)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path140"
      d="M178.053-454.56l-3.013,3.086"
      transform="translate(-7653.907 -12661.146)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path138"
      d="M160.96-458.107h9.479l-3.013-3.013"
      transform="translate(-7646.293 -12657.604)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path142"
      d="M164.046-455.021l-3.086-3.086,3.086-3.013"
      transform="translate(-7646.293 -12657.602)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path118"
      d="M157.12-509.6v50"
      transform="translate(-7644.217 -12631.44)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path136"
      d="M157.12-502.88h14.035v43.754H157.12"
      transform="translate(-7644.217 -12635.074)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path126"
      d="M138.853-454.56l-3.013,3.086"
      transform="translate(-7632.71 -12661.146)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path124"
      d="M121.76-458.107h9.479l-3.013-3.013"
      transform="translate(-7625.096 -12657.604)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path132"
      d="M124.846-455.021l-3.086-3.086,3.086-3.013"
      transform="translate(-7625.096 -12657.602)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path110"
      d="M116-502.88h15.725v43.754H116"
      transform="translate(-7621.981 -12635.074)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path122"
      d="M98.213-454.56,95.2-451.474"
      transform="translate(-7610.734 -12661.146)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path120"
      d="M83.36-458.107h8.45L88.8-461.12"
      transform="translate(-7604.332 -12657.604)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path116"
      d="M74.08-459.126V-502.88H90.246v43.754H74.08"
      transform="translate(-7599.313 -12635.074)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path108"
      d="M67.36-459.6v-50h76.053v50H67.36"
      transform="translate(-7595.68 -12631.44)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <path
      id="path114"
      d="M67.36-459.6v-50H89.7v50H67.36"
      transform="translate(-7595.68 -12631.44)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
  </g>
  <g id="Group_37635" data-name="Group 37635" transform="translate(90 71)">
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
  <g id="Group_37636" data-name="Group 37636" transform="translate(252 197)">
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
    [slidingDesignIconKeys.TELESCOPIC_FIVE_TRACK_FIVE_PANEL_LEFT_OPENING]: `<svg xmlns="http://www.w3.org/2000/svg" width="75.8" height="51" viewBox="0 0 75.8 51">
<g id="Group_53883" data-name="Group 53883" transform="translate(-627.746 -161)">
  <g id="Group_41704" data-name="Group 41704" transform="translate(398.914 -130.5)">
    <g id="Group_41702" data-name="Group 41702" transform="translate(229.333 292)">
      <path
        id="path66"
        d="M0,50V0H74.8V50H0"
        transform="translate(74.799 50) rotate(180)"
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
    transform="translate(642.633 209.25) rotate(180)"
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
    transform="translate(656.918 209.1) rotate(180)"
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
    transform="translate(671.554 209.359) rotate(180)"
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
    transform="translate(686.191 209.359) rotate(180)"
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
    transform="translate(700.828 209.1) rotate(180)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <g id="Group_41707" data-name="Group 41707" transform="translate(628.247 181.5)">
    <g id="Group_53927" data-name="Group 53927" transform="translate(-0.153 1.5)">
      <g id="Group_53916" data-name="Group 53916">
        <rect id="Rectangle_10006" data-name="Rectangle 10006" width="2" height="8" fill="#96a0b5" />
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
    <g id="Group_53928" data-name="Group 53928" transform="translate(70.847 2.5)">
      <g id="Group_53916-2" data-name="Group 53916">
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
  </g>
  <g id="Group_53880" data-name="Group 53880" transform="translate(676.135 185)">
    <path
      id="Path_78161"
      data-name="Path 78161"
      d="M6.125-379.649a.455.455,0,0,1,.225.225.59.59,0,0,1-.006.346,3.828,3.828,0,0,1-.575.643l-.782.78,4.65.011,1.366.011.082.052a.57.57,0,0,1,.141.139.329.329,0,0,1,.058.232.328.328,0,0,1-.058.232.572.572,0,0,1-.141.139l-.082.052-1.366.011-4.65.011.782.78c.435.433.332.353.349.392a.59.59,0,0,1,.006.346.437.437,0,0,1-.565.227c-.093-.043-1.928-1.843-2.006-1.968a.475.475,0,0,1,.006-.45c.091-.136,2.132-2.167,2.225-2.211a.406.406,0,0,1,.341,0Z"
      transform="translate(-3.5 379.688)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
  </g>
  <g id="Group_53884" data-name="Group 53884" transform="translate(690.682 185)">
    <path
      id="Path_78161-2"
      data-name="Path 78161"
      d="M6.125-379.649a.455.455,0,0,1,.225.225.59.59,0,0,1-.006.346,3.828,3.828,0,0,1-.575.643l-.782.78,4.65.011,1.366.011.082.052a.57.57,0,0,1,.141.139.329.329,0,0,1,.058.232.328.328,0,0,1-.058.232.572.572,0,0,1-.141.139l-.082.052-1.366.011-4.65.011.782.78c.435.433.332.353.349.392a.59.59,0,0,1,.006.346.437.437,0,0,1-.565.227c-.093-.043-1.928-1.843-2.006-1.968a.475.475,0,0,1,.006-.45c.091-.136,2.132-2.167,2.225-2.211a.406.406,0,0,1,.341,0Z"
      transform="translate(-3.5 379.688)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
  </g>
  <g id="Group_53881" data-name="Group 53881" transform="translate(661.498 185)">
    <path
      id="Path_78161-3"
      data-name="Path 78161"
      d="M6.125-379.649a.455.455,0,0,1,.225.225.59.59,0,0,1-.006.346,3.828,3.828,0,0,1-.575.643l-.782.78,4.65.011,1.366.011.082.052a.57.57,0,0,1,.141.139.329.329,0,0,1,.058.232.328.328,0,0,1-.058.232.572.572,0,0,1-.141.139l-.082.052-1.366.011-4.65.011.782.78c.435.433.332.353.349.392a.59.59,0,0,1,.006.346.437.437,0,0,1-.565.227c-.093-.043-1.928-1.843-2.006-1.968a.475.475,0,0,1,.006-.45c.091-.136,2.132-2.167,2.225-2.211a.406.406,0,0,1,.341,0Z"
      transform="translate(-3.5 379.688)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
  </g>
  <g id="Group_53882" data-name="Group 53882" transform="translate(646.861 185)">
    <path
      id="Path_78161-4"
      data-name="Path 78161"
      d="M6.125-379.649a.455.455,0,0,1,.225.225.59.59,0,0,1-.006.346,3.828,3.828,0,0,1-.575.643l-.782.78,4.65.011,1.366.011.082.052a.57.57,0,0,1,.141.139.329.329,0,0,1,.058.232.328.328,0,0,1-.058.232.572.572,0,0,1-.141.139l-.082.052-1.366.011-4.65.011.782.78c.435.433.332.353.349.392a.59.59,0,0,1,.006.346.437.437,0,0,1-.565.227c-.093-.043-1.928-1.843-2.006-1.968a.475.475,0,0,1,.006-.45c.091-.136,2.132-2.167,2.225-2.211a.406.406,0,0,1,.341,0Z"
      transform="translate(-3.5 379.688)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
  </g>
  <g id="Group_53796" data-name="Group 53796">
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
  <g id="Group_53797" data-name="Group 53797" transform="translate(14.637 -0.259)">
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
  <g id="Group_53798" data-name="Group 53798" transform="translate(29.273)">
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
  <g id="Group_53799" data-name="Group 53799" transform="translate(43.91)">
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
  <g id="Group_53800" data-name="Group 53800" transform="translate(58.546 -0.259)">
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
  <path
    id="Path_251417"
    data-name="Path 251417"
    d="M5.545,4.986l-.558.558L2.772,3.331.558,5.545,0,4.986,2.214,2.772,0,.558.558,0,2.772,2.214,4.986,0l.558.558L3.331,2.772Z"
    transform="translate(636.088 191.271) rotate(-135)"
    fill="#96a0b5"
    stroke="#96a0b5"
    stroke-width="0.3"
  />
</g>
</svg>
`,
    [slidingDesignIconKeys.TELESCOPIC_FIVE_TRACK_FIVE_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="76" height="51" viewBox="0 0 76 51">
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
      d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
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
      d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.468.468,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
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
        d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
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
        d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
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
        d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
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
        d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
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
        d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
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
        d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
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
    [slidingDesignIconKeys.TELESCOPIC_THREE_TRACK_SIX_PANEL]: `<svg
*ngIf="viewHandleFromOutside"
width="71"
height="51"
viewBox="0 0 71 51"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<g clip-path="url(#clip0_493_1425)">
  <path
    d="M70.3936 50.5V0.5H0.606552V50.5H70.3936Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M70.3936 50.5V0.5H57.3936V50.5H70.3936Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M45.1006 50.5V0.5H34.8126V50.5H45.1006Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M23.8984 50.5V0.5H13.4774V50.5H23.8984Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M13.4775 50.5V0.5H0.606537V50.5H13.4775Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M57.3926 50.5V0.5H45.1006V50.5H57.3926Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M34.8555 50.5V0.5H23.8555V50.5H34.8555Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M68.3896 47.5347V3.5127H59.4046V47.5347H68.3896Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M45.1006 47.5347V3.5127H36.7826V47.5347H45.1006Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M21.8477 47.5347V3.5127H13.4777V47.5347H21.8477Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M11.4639 47.5347V3.5127H2.65387V47.5347H11.4639Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M57.3926 47.5347V3.5127H47.1046V47.5347H57.3926Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M32.3867 47.5347V3.5127H23.8557V47.5347H32.3867Z"
    stroke="#96A0B5"
    stroke-miterlimit="10"
    stroke-linecap="round"
    stroke-linejoin="round"
  />
  <path
    d="M52.9066 23.0335C52.8153 23.0751 52.7421 23.1482 52.7006 23.2395C52.671 23.3431 52.6731 23.4532 52.7066 23.5555C52.7226 23.5915 53.0506 23.9355 53.4476 24.3305L54.1616 25.0425L49.9166 25.0526L49.6696 25.0625L49.5946 25.1095C49.5445 25.144 49.5009 25.187 49.4656 25.2365C49.4219 25.298 49.403 25.3737 49.4126 25.4485C49.403 25.5234 49.4219 25.5991 49.4656 25.6606C49.5009 25.7101 49.5445 25.7531 49.5946 25.7875L49.6696 25.8345L49.9166 25.8445L54.1616 25.8546L53.4476 26.5665C53.0476 26.9665 52.7216 27.3056 52.7066 27.3416C52.6731 27.4439 52.671 27.554 52.7006 27.6575C52.7428 27.7524 52.8202 27.8271 52.9165 27.8659C53.0128 27.9048 53.1204 27.9046 53.2166 27.8655C53.3016 27.8255 55.3996 25.7656 55.4706 25.6516C55.5037 25.5879 55.5205 25.517 55.5195 25.4453C55.5184 25.3735 55.4996 25.3032 55.4646 25.2405C55.3816 25.1155 53.3016 23.0735 53.2166 23.0345C53.1681 23.012 53.1152 23.0002 53.0617 23C53.0082 22.9998 52.9553 23.0113 52.9066 23.0335Z"
    fill="#96A0B5"
    stroke="#96A0B5"
    stroke-width="0.2"
  />
  <path
    d="M41.7338 23.0335C41.6425 23.0751 41.5693 23.1482 41.5278 23.2395C41.4981 23.3431 41.5002 23.4532 41.5338 23.5555C41.5498 23.5915 41.8778 23.9355 42.2748 24.3305L42.9888 25.0425L38.7438 25.0526L38.4968 25.0625L38.4218 25.1095C38.3717 25.144 38.328 25.187 38.2928 25.2365C38.2491 25.298 38.2301 25.3737 38.2398 25.4485C38.2301 25.5234 38.2491 25.5991 38.2928 25.6606C38.328 25.7101 38.3717 25.7531 38.4218 25.7875L38.4968 25.8345L38.7438 25.8445L42.9888 25.8546L42.2748 26.5665C41.8748 26.9665 41.5488 27.3056 41.5338 27.3416C41.5002 27.4439 41.4981 27.554 41.5278 27.6575C41.57 27.7524 41.6474 27.8271 41.7437 27.8659C41.84 27.9048 41.9476 27.9046 42.0438 27.8655C42.1288 27.8255 44.2268 25.7656 44.2978 25.6516C44.3309 25.5879 44.3477 25.517 44.3466 25.4453C44.3456 25.3735 44.3267 25.3032 44.2918 25.2405C44.2088 25.1155 42.1288 23.0735 42.0438 23.0345C41.9952 23.012 41.9424 23.0002 41.8889 23C41.8353 22.9998 41.7824 23.0113 41.7338 23.0335Z"
    fill="#96A0B5"
    stroke="#96A0B5"
    stroke-width="0.2"
  />
  <path d="M34.2822 23.499H37.2822V31.499H34.2822V23.499Z" fill="#96A0B5" />
  <path d="M37.2822 27.499H39.2822V33.499H37.2822V27.499Z" fill="#96A0B5" />
  <path
    d="M27.7691 23.0338C27.8604 23.0753 27.9336 23.1485 27.9751 23.2398C28.0047 23.3434 28.0026 23.4535 27.9691 23.5558C27.9531 23.5918 27.6251 23.9358 27.2281 24.3308L26.5141 25.0428L30.7621 25.0528L31.0091 25.0628L31.0841 25.1098C31.1342 25.1443 31.1779 25.1873 31.2131 25.2368C31.2568 25.2983 31.2757 25.374 31.2661 25.4488C31.2757 25.5236 31.2568 25.5993 31.2131 25.6608C31.1778 25.7104 31.1342 25.7533 31.0841 25.7878L31.0091 25.8348L30.7621 25.8448L26.5171 25.8548L27.2311 26.5668C27.6311 26.9668 27.9571 27.3058 27.9721 27.3418C28.0056 27.4442 28.0077 27.5542 27.9781 27.6578C27.9359 27.7527 27.8585 27.8274 27.7622 27.8662C27.6659 27.905 27.5583 27.9049 27.4621 27.8658C27.3771 27.8258 25.2791 25.7658 25.2081 25.6518C25.175 25.5882 25.1582 25.5173 25.1592 25.4456C25.1603 25.3738 25.1791 25.3035 25.2141 25.2408C25.2971 25.1158 27.3771 23.0738 27.4621 23.0348C27.5102 23.0127 27.5625 23.0012 27.6155 23.001C27.6685 23.0008 27.7208 23.012 27.7691 23.0338Z"
    fill="#96A0B5"
    stroke="#96A0B5"
    stroke-width="0.2"
  />
  <path
    d="M17.2222 23.0338C17.3135 23.0753 17.3867 23.1485 17.4282 23.2398C17.4579 23.3434 17.4558 23.4535 17.4222 23.5558C17.4062 23.5918 17.0782 23.9358 16.6812 24.3308L15.9672 25.0428L20.2152 25.0528L20.4622 25.0628L20.5372 25.1098C20.5873 25.1443 20.631 25.1873 20.6662 25.2368C20.7099 25.2983 20.7288 25.374 20.7192 25.4488C20.7288 25.5236 20.7099 25.5993 20.6662 25.6608C20.631 25.7104 20.5873 25.7533 20.5372 25.7878L20.4622 25.8348L20.2152 25.8448L15.9702 25.8548L16.6842 26.5668C17.0842 26.9668 17.4102 27.3058 17.4252 27.3418C17.4588 27.4442 17.4609 27.5542 17.4312 27.6578C17.389 27.7527 17.3116 27.8274 17.2153 27.8662C17.119 27.905 17.0114 27.9049 16.9152 27.8658C16.8302 27.8258 14.7322 25.7658 14.6612 25.6518C14.6281 25.5882 14.6113 25.5173 14.6124 25.4456C14.6134 25.3738 14.6323 25.3035 14.6672 25.2408C14.7502 25.1158 16.8302 23.0738 16.9152 23.0348C16.9634 23.0127 17.0157 23.0012 17.0686 23.001C17.1216 23.0008 17.174 23.012 17.2222 23.0338Z"
    fill="#96A0B5"
  />
  <path
    d="M64.199 22.7961H63.5881V25.2187L61.1655 25.2187L61.1655 25.8296H63.5881L63.5881 28.2521H64.199L64.199 25.8296H66.6216L66.6216 25.2187L64.199 25.2187V22.7961Z"
    fill="#96A0B5"
    stroke="#96A0B5"
    stroke-width="0.3"
  />
  <path
    d="M7.56914 22.7961H6.9582V25.2187L4.53565 25.2187L4.53565 25.8296H6.9582L6.9582 28.2521H7.56914L7.56914 25.8296H9.99169L9.99169 25.2187L7.56914 25.2187V22.7961Z"
    fill="#96A0B5"
    stroke="#96A0B5"
    stroke-width="0.3"
  />
</g>
<defs>
  <clipPath id="clip0_493_1425">
    <rect width="71" height="51" fill="white" transform="matrix(-1 0 0 1 71 0)" />
  </clipPath>
</defs>
</svg>`,
    [slidingDesignIconKeys.TELESCOPIC_SIX_TRACK_SIX_PANEL_LEFT_OPENING]: `<svg xmlns="http://www.w3.org/2000/svg" width="80.215" height="51.3" viewBox="0 0 80.215 51.3">
<g id="Group_53891" data-name="Group 53891" transform="translate(-632.23 -1194.968)">
  <g id="Group_53885" data-name="Group 53885" transform="translate(632.595 1195.241)">
    <g id="Group_41704" data-name="Group 41704" transform="translate(0.135 0.23)">
      <g id="Group_41702" data-name="Group 41702">
        <path
          id="path66"
          d="M0,50.3V0H79.215V50.3H0"
          transform="translate(79.215 50.297) rotate(180)"
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
      d="M0,46.046V0H10.658V46.046H0"
      transform="translate(12.565 48.534) rotate(180)"
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
      d="M0,46.046V0H10.97V46.046H0"
      transform="translate(25.529 48.401) rotate(180)"
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
      d="M0,46.046V0H10.97V46.046H0"
      transform="translate(38.493 48.631) rotate(180)"
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
      d="M0,46.046V0H10.97V46.046H0"
      transform="translate(51.457 48.631) rotate(180)"
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
      d="M0,46.046V0H10.97V46.046H0"
      transform="translate(64.421 48.401) rotate(180)"
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
      d="M0,46.046V0H10.97V46.046H0"
      transform="translate(77.385 48.401) rotate(180)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <g id="Group_41707" data-name="Group 41707" transform="translate(0 22.522)">
      <g id="Group_53931" data-name="Group 53931">
        <g id="Group_53916" data-name="Group 53916">
          <rect id="Rectangle_10006" data-name="Rectangle 10006" width="1.771" height="7.086" fill="#96a0b5" />
          <rect
            id="Rectangle_10024"
            data-name="Rectangle 10024"
            width="1.771"
            height="4.429"
            transform="translate(1.771 3.543)"
            fill="#96a0b5"
          />
        </g>
      </g>
      <g id="Group_53932" data-name="Group 53932" transform="translate(75.286 0.886)">
        <g id="Group_53916-2" data-name="Group 53916">
          <rect
            id="Rectangle_10006-2"
            data-name="Rectangle 10006"
            width="1.771"
            height="7.086"
            transform="translate(1.844)"
            fill="#96a0b5"
          />
          <rect
            id="Rectangle_10024-2"
            data-name="Rectangle 10024"
            width="1.771"
            height="4.429"
            transform="translate(0 3.543)"
            fill="#96a0b5"
          />
        </g>
      </g>
    </g>
    <g id="Group_53795" data-name="Group 53795" transform="translate(55.404 23.216)">
      <path
        id="Path_78161"
        data-name="Path 78161"
        d="M6.23-379.647a.474.474,0,0,1,.234.234.614.614,0,0,1-.007.36,3.987,3.987,0,0,1-.6.668l-.813.811,4.835.011,1.42.011.086.054a.592.592,0,0,1,.146.144.342.342,0,0,1,.061.241.342.342,0,0,1-.061.241.593.593,0,0,1-.146.144l-.086.054-1.42.011-4.835.011.813.811c.453.45.345.367.363.407a.613.613,0,0,1,.007.36.454.454,0,0,1-.588.236c-.1-.045-2.005-1.916-2.086-2.047a.494.494,0,0,1,.007-.468c.095-.142,2.217-2.254,2.314-2.3a.422.422,0,0,1,.356.006Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <g id="Group_53892" data-name="Group 53892" transform="translate(68.368 23.216)">
      <path
        id="Path_78161-2"
        data-name="Path 78161"
        d="M6.23-379.647a.474.474,0,0,1,.234.234.614.614,0,0,1-.007.36,3.987,3.987,0,0,1-.6.668l-.813.811,4.835.011,1.42.011.086.054a.592.592,0,0,1,.146.144.342.342,0,0,1,.061.241.342.342,0,0,1-.061.241.593.593,0,0,1-.146.144l-.086.054-1.42.011-4.835.011.813.811c.453.45.345.367.363.407a.613.613,0,0,1,.007.36.454.454,0,0,1-.588.236c-.1-.045-2.005-1.916-2.086-2.047a.494.494,0,0,1,.007-.468c.095-.142,2.217-2.254,2.314-2.3a.422.422,0,0,1,.356.006Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <g id="Group_53886" data-name="Group 53886" transform="translate(43.743 23.216)">
      <path
        id="Path_78161-3"
        data-name="Path 78161"
        d="M6.23-379.647a.474.474,0,0,1,.234.234.614.614,0,0,1-.007.36,3.987,3.987,0,0,1-.6.668l-.813.811,4.835.011,1.42.011.086.054a.592.592,0,0,1,.146.144.342.342,0,0,1,.061.241.342.342,0,0,1-.061.241.593.593,0,0,1-.146.144l-.086.054-1.42.011-4.835.011.813.811c.453.45.345.367.363.407a.613.613,0,0,1,.007.36.454.454,0,0,1-.588.236c-.1-.045-2.005-1.916-2.086-2.047a.494.494,0,0,1,.007-.468c.095-.142,2.217-2.254,2.314-2.3a.422.422,0,0,1,.356.006Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <g id="Group_53887" data-name="Group 53887" transform="translate(29.72 23.216)">
      <path
        id="Path_78161-4"
        data-name="Path 78161"
        d="M6.23-379.647a.474.474,0,0,1,.234.234.614.614,0,0,1-.007.36,3.987,3.987,0,0,1-.6.668l-.813.811,4.835.011,1.42.011.086.054a.592.592,0,0,1,.146.144.342.342,0,0,1,.061.241.342.342,0,0,1-.061.241.593.593,0,0,1-.146.144l-.086.054-1.42.011-4.835.011.813.811c.453.45.345.367.363.407a.613.613,0,0,1,.007.36.454.454,0,0,1-.588.236c-.1-.045-2.005-1.916-2.086-2.047a.494.494,0,0,1,.007-.468c.095-.142,2.217-2.254,2.314-2.3a.422.422,0,0,1,.356.006Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <g id="Group_53888" data-name="Group 53888" transform="translate(16.756 23.216)">
      <path
        id="Path_78161-5"
        data-name="Path 78161"
        d="M6.23-379.647a.474.474,0,0,1,.234.234.614.614,0,0,1-.007.36,3.987,3.987,0,0,1-.6.668l-.813.811,4.835.011,1.42.011.086.054a.592.592,0,0,1,.146.144.342.342,0,0,1,.061.241.342.342,0,0,1-.061.241.593.593,0,0,1-.146.144l-.086.054-1.42.011-4.835.011.813.811c.453.45.345.367.363.407a.613.613,0,0,1,.007.36.454.454,0,0,1-.588.236c-.1-.045-2.005-1.916-2.086-2.047a.494.494,0,0,1,.007-.468c.095-.142,2.217-2.254,2.314-2.3a.422.422,0,0,1,.356.006Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <g id="Group_53796" data-name="Group 53796" transform="translate(12.565 0.23)">
      <line id="Line_1872" data-name="Line 1872" y2="50.297" fill="none" stroke="#96a0b5" stroke-width="1" />
    </g>
    <g id="Group_53797" data-name="Group 53797" transform="translate(25.529)">
      <line id="Line_1872-2" data-name="Line 1872" y2="50.297" fill="none" stroke="#96a0b5" stroke-width="1" />
    </g>
    <g id="Group_53798" data-name="Group 53798" transform="translate(38.493 0.23)">
      <line id="Line_1872-3" data-name="Line 1872" y2="50.297" fill="none" stroke="#96a0b5" stroke-width="1" />
    </g>
    <g id="Group_53799" data-name="Group 53799" transform="translate(51.457 0.23)">
      <line id="Line_1872-4" data-name="Line 1872" y2="50.297" fill="none" stroke="#96a0b5" stroke-width="1" />
    </g>
    <g id="Group_53800" data-name="Group 53800" transform="translate(64.421)">
      <line id="Line_1872-5" data-name="Line 1872" y2="50.297" fill="none" stroke="#96a0b5" stroke-width="1" />
    </g>
    <g id="Group_53801" data-name="Group 53801" transform="translate(77.385)">
      <line
        id="Line_1872-6"
        data-name="Line 1872"
        y2="50.297"
        transform="translate(1.965)"
        fill="none"
        stroke="#96a0b5"
        stroke-width="1"
      />
    </g>
    <path
      id="Path_251416"
      data-name="Path 251416"
      d="M4.911,4.416l-.495.495L2.456,2.95.5,4.911,0,4.416l1.961-1.96L0,.5.5,0,2.456,1.961,4.416,0l.495.5L2.95,2.456Z"
      transform="translate(7.111 29.136) rotate(-135)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.3"
    />
  </g>
</g>
</svg>
`,
    [slidingDesignIconKeys.TELESCOPIC_SIX_TRACK_SIX_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="90" height="51" viewBox="0 0 90.436 51">
<g id="Group_53809" data-name="Group 53809" transform="translate(-627.747 -161)">
  <g id="Group_41704" data-name="Group 41704" transform="translate(398.914 -130.5)">
    <g id="Group_41702" data-name="Group 41702" transform="translate(229.333 292)">
      <path
        id="path66"
        d="M0,50V0H89.436V50H0"
        transform="translate(89.436 50) rotate(180)"
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
    transform="translate(642.633 209.25) rotate(180)"
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
    transform="translate(656.918 209.1) rotate(180)"
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
    transform="translate(671.554 209.359) rotate(180)"
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
    transform="translate(686.191 209.359) rotate(180)"
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
    transform="translate(700.828 209.1) rotate(180)"
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
    d="M0,45.2V0H12.386V45.2H0"
    transform="translate(715.464 209.1) rotate(180)"
    fill="none"
    stroke="#96a0b5"
    stroke-linecap="round"
    stroke-linejoin="round"
    stroke-miterlimit="10"
    stroke-width="1"
  />
  <g id="Group_53795" data-name="Group 53795" transform="translate(633.053 184.371)">
    <path
      id="Path_78161"
      data-name="Path 78161"
      d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
      transform="translate(-3.5 379.688)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
  </g>
  <g id="Group_53805" data-name="Group 53805" transform="translate(645.521 184.37)">
    <g id="Group_53803" data-name="Group 53803">
      <path
        id="Path_78161-2"
        data-name="Path 78161"
        d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <g id="Group_53804" data-name="Group 53804" transform="translate(2.596)">
      <path
        id="Path_78161-3"
        data-name="Path 78161"
        d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
  </g>
  <g id="Group_53806" data-name="Group 53806" transform="translate(660.158 184.37)">
    <g id="Group_53803-2" data-name="Group 53803">
      <path
        id="Path_78161-4"
        data-name="Path 78161"
        d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <g id="Group_53804-2" data-name="Group 53804" transform="translate(2.596)">
      <path
        id="Path_78161-5"
        data-name="Path 78161"
        d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
  </g>
  <g id="Group_53807" data-name="Group 53807" transform="translate(674.795 184.37)">
    <g id="Group_53803-3" data-name="Group 53803">
      <path
        id="Path_78161-6"
        data-name="Path 78161"
        d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <g id="Group_53804-3" data-name="Group 53804" transform="translate(2.596)">
      <path
        id="Path_78161-7"
        data-name="Path 78161"
        d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
  </g>
  <g id="Group_53808" data-name="Group 53808" transform="translate(689.97 184.37)">
    <g id="Group_53803-4" data-name="Group 53803">
      <path
        id="Path_78161-8"
        data-name="Path 78161"
        d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <g id="Group_53804-4" data-name="Group 53804" transform="translate(2.596)">
      <path
        id="Path_78161-9"
        data-name="Path 78161"
        d="M8.582-379.65a.448.448,0,0,0-.222.222.581.581,0,0,0,.006.341,3.775,3.775,0,0,0,.566.633l.77.768-4.58.011-1.345.011-.081.051a.56.56,0,0,0-.139.137.324.324,0,0,0-.058.228.324.324,0,0,0,.058.228.561.561,0,0,0,.139.136l.081.051,1.345.011,4.58.011-.77.768c-.429.427-.327.347-.344.386a.581.581,0,0,0-.006.341.43.43,0,0,0,.557.224c.092-.043,1.9-1.815,1.976-1.939a.467.467,0,0,0-.006-.444c-.09-.134-2.1-2.135-2.191-2.177a.4.4,0,0,0-.336,0Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
  </g>
  <g id="Group_53802" data-name="Group 53802" transform="translate(704.607 184.371)">
    <path
      id="Path_78161-10"
      data-name="Path 78161"
      d="M6.085-379.65a.448.448,0,0,1,.222.222.581.581,0,0,1-.006.341,3.775,3.775,0,0,1-.566.633l-.77.768,4.58.011,1.345.011.081.051a.56.56,0,0,1,.139.137.324.324,0,0,1,.058.228.324.324,0,0,1-.058.228.561.561,0,0,1-.139.136l-.081.051-1.345.011-4.58.011.77.768c.429.427.327.347.344.386a.581.581,0,0,1,.006.341.43.43,0,0,1-.557.224c-.092-.043-1.9-1.815-1.976-1.939a.467.467,0,0,1,.006-.444c.09-.134,2.1-2.135,2.191-2.177a.4.4,0,0,1,.336,0Z"
      transform="translate(-3.5 379.688)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.2"
    />
  </g>
  <g id="Group_53796" data-name="Group 53796">
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
  <g id="Group_53797" data-name="Group 53797" transform="translate(14.637 -0.259)">
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
  <g id="Group_53798" data-name="Group 53798" transform="translate(29.273)">
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
  <g id="Group_53799" data-name="Group 53799" transform="translate(43.91)">
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
  <g id="Group_53800" data-name="Group 53800" transform="translate(58.547 0)">
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
  <g id="Group_53801" data-name="Group 53801" transform="translate(73.183 -0.259)">
    <line
      id="Line_1872-6"
      data-name="Line 1872"
      y2="50"
      transform="translate(644.5 161.5)"
      fill="none"
      stroke="#96a0b5"
      stroke-width="1"
    />
  </g>
  <g id="Group_53634" data-name="Group 53634" transform="translate(628.156 183.334)">
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
  <g id="Group_53909" data-name="Group 53909" transform="translate(713.574 183.334)">
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
    [slidingDesignIconKeys.TELESCOPIC_FOUR_TRACK_EIGHT_PANEL]: `<svg xmlns="http://www.w3.org/2000/svg" width="93" height="51" viewBox="0 0 93 51">
<g id="Group_53729" data-name="Group 53729" transform="translate(-288.432 -668.501)">
  <g id="Group_53622" data-name="Group 53622" transform="translate(288.932 669.001)">
    <path
      id="path70"
      d="M67.36-912.462V-962.4H78.2v49.938H67.36"
      transform="translate(-32.233 962.4)"
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
      d="M67.36-912.462V-962.4h12v49.938h-12"
      transform="translate(-10.408 962.4)"
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
      d="M67.36-912.462V-962.4h12v49.938h-12"
      transform="translate(12.64 962.425)"
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
      d="M67.36-912.462V-962.4h11v49.938h-11"
      transform="translate(1.427 962.4)"
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
      d="M67.36-912.462V-962.4H79.076v49.938H67.36"
      transform="translate(-43.949 962.4)"
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
      d="M67.36-912.462V-962.4h11v49.938h-11"
      transform="translate(-21.398 962.4)"
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
      d="M67.36-918.44V-962.4h9.988v43.96H67.36"
      transform="translate(-8.561 965.414)"
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
      d="M67.36-918.44V-962.4h8.37v43.96H67.36"
      transform="translate(14.455 965.438)"
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
      d="M67.36-918.44V-962.4H76.3v43.96H67.36"
      transform="translate(3.486 965.414)"
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
      d="M67.36-918.44V-962.4H76.6v43.96H67.36"
      transform="translate(-19.642 965.414)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <g id="Group_53606" data-name="Group 53606" transform="translate(59.855 22.983)">
      <path
        id="Path_78161"
        data-name="Path 78161"
        d="M7.607-379.657a.362.362,0,0,0-.179.179.47.47,0,0,0,.005.276,3.049,3.049,0,0,0,.457.511l.622.621-3.7.009-1.087.009-.066.041a.453.453,0,0,0-.112.11.262.262,0,0,0-.047.184.261.261,0,0,0,.047.184.454.454,0,0,0,.112.11l.066.041,1.087.009,3.7.009-.622.621c-.346.345-.264.281-.278.312a.47.47,0,0,0-.005.276.348.348,0,0,0,.45.181c.074-.034,1.535-1.467,1.6-1.567a.378.378,0,0,0-.005-.359c-.072-.109-1.7-1.725-1.771-1.759A.323.323,0,0,0,7.607-379.657Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <g id="Group_53607" data-name="Group 53607" transform="translate(25.124 22.982)">
      <path
        id="Path_78161-2"
        data-name="Path 78161"
        d="M5.589-379.657a.362.362,0,0,1,.179.179.47.47,0,0,1-.005.276,3.049,3.049,0,0,1-.457.511l-.622.621,3.7.009,1.087.009.066.041a.453.453,0,0,1,.112.11.262.262,0,0,1,.047.184.261.261,0,0,1-.047.184.454.454,0,0,1-.112.11l-.066.041-1.087.009-3.7.009.622.621c.346.345.264.281.278.312a.47.47,0,0,1,.005.276.348.348,0,0,1-.45.181c-.074-.034-1.535-1.467-1.6-1.567a.378.378,0,0,1,.005-.359c.072-.109,1.7-1.725,1.771-1.759A.323.323,0,0,1,5.589-379.657Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <g id="Group_53620" data-name="Group 53620" transform="translate(36.726 22.983)">
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
    <g id="Group_53621" data-name="Group 53621" transform="translate(48.718 23.103)">
      <path
        id="Path_78162-2"
        data-name="Path 78162"
        d="M7.649-379.519a.362.362,0,0,0-.179.179.47.47,0,0,0,.005.276c.014.031.068.046.415.391l.622.621-3.7.009-1.087.009-.066.041a.453.453,0,0,0-.112.11.261.261,0,0,0-.047.184.261.261,0,0,0,.047.184.455.455,0,0,0,.112.11l.066.041,1.087.009,3.7.009-.391.475c-.346.345-.633.645-.646.676a.47.47,0,0,0-.005.276.348.348,0,0,0,.45.181c.074-.034,1.671-1.685,1.733-1.785a.378.378,0,0,0-.005-.359c-.072-.109-1.654-1.6-1.728-1.639A.323.323,0,0,0,7.649-379.519Z"
        transform="translate(-3.5 379.549)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <path
      id="path70-11"
      data-name="path70"
      d="M67.36-912.437V-962.4H80.025v49.963H67.36"
      transform="translate(-67.36 962.437)"
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
      d="M67.36-912.462V-962.4H78.106v49.938H67.36"
      transform="translate(-54.695 962.4)"
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
      d="M67.36-918.44V-962.4h8.972v43.96H67.36"
      transform="translate(-65.497 965.414)"
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
      d="M67.36-918.44V-962.4h8.812v43.96H67.36"
      transform="translate(-54.695 965.414)"
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
      d="M67.36-918.44V-962.4h9.7v43.96h-9.7"
      transform="translate(-43.949 965.414)"
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
      d="M67.36-918.44V-962.4h9.016v43.96H67.36"
      transform="translate(-32.233 965.414)"
      fill="none"
      stroke="#96a0b5"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      stroke-width="1"
    />
    <g id="Group_53632" data-name="Group 53632" transform="translate(14.133 22.983)">
      <path
        id="Path_78161-3"
        data-name="Path 78161"
        d="M5.589-379.657a.362.362,0,0,1,.179.179.47.47,0,0,1-.005.276,3.049,3.049,0,0,1-.457.511l-.622.621,3.7.009,1.087.009.066.041a.453.453,0,0,1,.112.11.262.262,0,0,1,.047.184.261.261,0,0,1-.047.184.454.454,0,0,1-.112.11l-.066.041-1.087.009-3.7.009.622.621c.346.345.264.281.278.312a.47.47,0,0,1,.005.276.348.348,0,0,1-.45.181c-.074-.034-1.535-1.467-1.6-1.567a.378.378,0,0,1,.005-.359c.072-.109,1.7-1.725,1.771-1.759A.323.323,0,0,1,5.589-379.657Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <g id="Group_53633" data-name="Group 53633" transform="translate(71.846 22.983)">
      <path
        id="Path_78161-4"
        data-name="Path 78161"
        d="M7.607-379.657a.362.362,0,0,0-.179.179.47.47,0,0,0,.005.276,3.049,3.049,0,0,0,.457.511l.622.621-3.7.009-1.087.009-.066.041a.453.453,0,0,0-.112.11.262.262,0,0,0-.047.184.261.261,0,0,0,.047.184.454.454,0,0,0,.112.11l.066.041,1.087.009,3.7.009-.622.621c-.346.345-.264.281-.278.312a.47.47,0,0,0-.005.276.348.348,0,0,0,.45.181c.074-.034,1.535-1.467,1.6-1.567a.378.378,0,0,0-.005-.359c-.072-.109-1.7-1.725-1.771-1.759A.323.323,0,0,0,7.607-379.657Z"
        transform="translate(-3.5 379.687)"
        fill="#96a0b5"
        stroke="#96a0b5"
        stroke-width="0.2"
      />
    </g>
    <path
      id="Path_99522"
      data-name="Path 99522"
      d="M4.29,3.858l-.432.432L2.145,2.577.432,4.29,0,3.858,1.713,2.145,0,.432.432,0,2.145,1.713,3.858,0,4.29.432,2.577,2.145Z"
      transform="translate(86 28.056) rotate(-135)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.3"
    />
    <path
      id="Path_99523"
      data-name="Path 99523"
      d="M4.29,3.858l-.432.432L2.145,2.577.432,4.29,0,3.858,1.713,2.145,0,.432.432,0,2.145,1.713,3.858,0,4.29.432,2.577,2.145Z"
      transform="translate(6.549 28.056) rotate(-135)"
      fill="#96a0b5"
      stroke="#96a0b5"
      stroke-width="0.3"
    />
  </g>
</g>
</svg>`,
  },
  [IconPrefix.SYNCHRONIZE_SLIDING_DESIGN]: {
    [slidingDesignIconKeys.SYNCHRONIZE_TWO_TRACK_FOUR_PANEL]: `<svg
                        *ngIf="viewHandleFromOutside"
                        width="71"
                        height="51"
                        viewBox="0 0 71 51"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clip-path="url(#clip0_493_1450)">
                          <path
                            d="M50.462 50.5V0.5H70.25V50.5H50.462Z"
                            stroke="#96A0B5"
                            stroke-width="0.99998"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M53.25 47.4932V3.49316H67.25V47.4932H53.25Z"
                            stroke="#96A0B5"
                            stroke-width="0.99998"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M0.751991 50.5V0.5H15.792V50.5H0.751991Z"
                            stroke="#96A0B5"
                            stroke-width="0.99998"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path d="M31.751 20.5H34.751V28.5H31.751V20.5Z" fill="#96A0B5" />
                          <path d="M29.751 24.5H31.751V30.5H29.751V24.5Z" fill="#96A0B5" />
                          <path
                            d="M15.7908 50.5V0.5H34.6748V50.5H15.7908Z"
                            stroke="#96A0B5"
                            stroke-width="0.99998"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M34.6759 50.5V0.5H50.4629V50.5H34.6759Z"
                            stroke="#96A0B5"
                            stroke-width="0.99998"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.759 47.4932V3.49316H15.792V47.4932H3.759Z"
                            stroke="#96A0B5"
                            stroke-width="0.99998"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.578 47.4932V3.49316H32.043V47.4932H18.578Z"
                            stroke="#96A0B5"
                            stroke-width="0.99998"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M37.1599 47.4932V3.49316H50.4629V47.4932H37.1629"
                            stroke="#96A0B5"
                            stroke-width="0.99998"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M44.9652 23.0335C44.8739 23.0751 44.8007 23.1482 44.7592 23.2395C44.7296 23.3431 44.7317 23.4532 44.7652 23.5555C44.7812 23.5915 45.1092 23.9355 45.5062 24.3305L46.2202 25.0425L41.9752 25.0526L39.7282 25.0625L39.6532 25.1095C39.6031 25.144 39.5594 25.187 39.5242 25.2365C39.4805 25.298 39.4616 25.3737 39.4712 25.4485C39.4616 25.5234 39.4805 25.5991 39.5242 25.6606C39.5595 25.7101 39.6031 25.7531 39.6532 25.7875L39.7282 25.8345L41.9752 25.8445L46.2202 25.8546L45.5062 26.5665C45.1062 26.9665 44.7802 27.3056 44.7652 27.3416C44.7317 27.4439 44.7296 27.554 44.7592 27.6575C44.8014 27.7524 44.8788 27.8271 44.9751 27.8659C45.0714 27.9048 45.179 27.9046 45.2752 27.8655C45.3602 27.8255 47.4582 25.7656 47.5292 25.6516C47.5623 25.5879 47.5791 25.517 47.5781 25.4453C47.577 25.3735 47.5582 25.3032 47.5232 25.2405C47.4402 25.1155 45.3602 23.0735 45.2752 23.0345C45.2267 23.012 45.1738 23.0002 45.1203 23C45.0668 22.9998 45.0139 23.0113 44.9652 23.0335Z"
                            fill="#96A0B5"
                            stroke="#96A0B5"
                            stroke-width="0.199996"
                          />
                          <path
                            d="M23.0855 23.0338C23.1768 23.0753 23.25 23.1485 23.2915 23.2398C23.3211 23.3434 23.319 23.4535 23.2855 23.5558C23.2695 23.5918 22.9415 23.9358 22.5445 24.3308L21.8305 25.0428L26.0785 25.0528L28.3255 25.0628L28.4005 25.1098C28.4506 25.1443 28.4943 25.1873 28.5295 25.2368C28.5732 25.2983 28.5921 25.374 28.5825 25.4488C28.5921 25.5236 28.5732 25.5993 28.5295 25.6608C28.4943 25.7104 28.4506 25.7533 28.4005 25.7878L28.3255 25.8348L26.0785 25.8448L21.8335 25.8548L22.5475 26.5668C22.9475 26.9668 23.2735 27.3058 23.2885 27.3418C23.322 27.4442 23.3241 27.5542 23.2945 27.6578C23.2523 27.7527 23.1749 27.8274 23.0786 27.8662C22.9823 27.905 22.8747 27.9049 22.7785 27.8658C22.6935 27.8258 20.5955 25.7658 20.5245 25.6518C20.4914 25.5882 20.4746 25.5173 20.4756 25.4456C20.4767 25.3738 20.4955 25.3035 20.5305 25.2408C20.6135 25.1158 22.6935 23.0738 22.7785 23.0348C22.8266 23.0127 22.8789 23.0012 22.9319 23.001C22.9849 23.0008 23.0373 23.012 23.0855 23.0338Z"
                            fill="#96A0B5"
                            stroke="#96A0B5"
                            stroke-width="0.199996"
                          />
                          <path
                            d="M10.1707 22.3943H9.38153L9.38012 25.5253L6.24905 25.5253L6.24976 26.3152H9.38082L9.38083 29.4463H10.17L10.17 26.3152H13.301L13.301 25.5261L10.1707 25.5253V22.3943Z"
                            fill="#96A0B5"
                            stroke="#96A0B5"
                            stroke-width="0.299994"
                          />
                          <path
                            d="M60.1697 22.3943H59.3806L59.3791 25.5253L56.2481 25.5253L56.2488 26.3152H59.3798L59.3798 29.4463H60.169L60.169 26.3152H63.3L63.3 25.5261L60.1697 25.5253V22.3943Z"
                            fill="#96A0B5"
                            stroke="#96A0B5"
                            stroke-width="0.299994"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_493_1450">
                            <rect width="71" height="51" fill="white" transform="matrix(-1 0 0 1 71 0)" />
                          </clipPath>
                        </defs>
                      </svg>`,
    [slidingDesignIconKeys.SYNCHRONIZE_THREE_TRACK_SIX_PANEL]: `<svg
                      *ngIf="viewHandleFromOutside"
                      width="71"
                      height="51"
                      viewBox="0 0 71 51"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clip-path="url(#clip0_493_1528)">
                        <path
                          d="M70.3936 50.5V0.5H0.606552V50.5H70.3936Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M70.3936 50.5V0.5H57.3936V50.5H70.3936Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M45.1006 50.5V0.5H34.8126V50.5H45.1006Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M23.8984 50.5V0.5H13.4774V50.5H23.8984Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M13.4775 50.5V0.5H0.606537V50.5H13.4775Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M57.3926 50.5V0.5H45.1006V50.5H57.3926Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M34.8555 50.5V0.5H23.8555V50.5H34.8555Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M68.3896 47.5347V3.5127H59.4046V47.5347H68.3896Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M45.1006 47.5347V3.5127H36.7826V47.5347H45.1006Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M21.8477 47.5347V3.5127H13.4777V47.5347H21.8477Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M11.4639 47.5347V3.5127H2.65387V47.5347H11.4639Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M57.3926 47.5347V3.5127H47.1046V47.5347H57.3926Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M32.3867 47.5347V3.5127H23.8557V47.5347H32.3867Z"
                          stroke="#96A0B5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M41.7338 23.0335C41.6425 23.0751 41.5693 23.1482 41.5278 23.2395C41.4981 23.3431 41.5002 23.4532 41.5338 23.5555C41.5498 23.5915 41.8778 23.9355 42.2748 24.3305L42.9888 25.0425L38.7438 25.0526L38.4968 25.0625L38.4218 25.1095C38.3717 25.144 38.328 25.187 38.2928 25.2365C38.2491 25.298 38.2301 25.3737 38.2398 25.4485C38.2301 25.5234 38.2491 25.5991 38.2928 25.6606C38.328 25.7101 38.3717 25.7531 38.4218 25.7875L38.4968 25.8345L38.7438 25.8445L42.9888 25.8546L42.2748 26.5665C41.8748 26.9665 41.5488 27.3056 41.5338 27.3416C41.5002 27.4439 41.4981 27.554 41.5278 27.6575C41.57 27.7524 41.6474 27.8271 41.7437 27.8659C41.84 27.9048 41.9476 27.9046 42.0438 27.8655C42.1288 27.8255 44.2268 25.7656 44.2978 25.6516C44.3309 25.5879 44.3477 25.517 44.3466 25.4453C44.3456 25.3735 44.3267 25.3032 44.2918 25.2405C44.2088 25.1155 42.1288 23.0735 42.0438 23.0345C41.9952 23.012 41.9424 23.0002 41.8889 23C41.8353 22.9998 41.7824 23.0113 41.7338 23.0335Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path d="M31.7734 23.8945H34.7734V31.8945H31.7734V23.8945Z" fill="#96A0B5" />
                        <path d="M29.7734 27.8945H31.7734V33.8945H29.7734V27.8945Z" fill="#96A0B5" />
                        <path
                          d="M27.7691 23.0338C27.8604 23.0753 27.9336 23.1485 27.9751 23.2398C28.0047 23.3434 28.0026 23.4535 27.9691 23.5558C27.9531 23.5918 27.6251 23.9358 27.2281 24.3308L26.5141 25.0428L30.7621 25.0528L31.0091 25.0628L31.0841 25.1098C31.1342 25.1443 31.1779 25.1873 31.2131 25.2368C31.2568 25.2983 31.2757 25.374 31.2661 25.4488C31.2757 25.5236 31.2568 25.5993 31.2131 25.6608C31.1778 25.7104 31.1342 25.7533 31.0841 25.7878L31.0091 25.8348L30.7621 25.8448L26.5171 25.8548L27.2311 26.5668C27.6311 26.9668 27.9571 27.3058 27.9721 27.3418C28.0056 27.4442 28.0077 27.5542 27.9781 27.6578C27.9359 27.7527 27.8585 27.8274 27.7622 27.8662C27.6659 27.905 27.5583 27.9049 27.4621 27.8658C27.3771 27.8258 25.2791 25.7658 25.2081 25.6518C25.175 25.5882 25.1582 25.5173 25.1592 25.4456C25.1603 25.3738 25.1791 25.3035 25.2141 25.2408C25.2971 25.1158 27.3771 23.0738 27.4621 23.0348C27.5102 23.0127 27.5625 23.0012 27.6155 23.001C27.6685 23.0008 27.7208 23.012 27.7691 23.0338Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.2"
                        />
                        <path
                          d="M64.199 22.7961H63.5881V25.2187L61.1655 25.2187L61.1655 25.8296H63.5881L63.5881 28.2521H64.199L64.199 25.8296H66.6216L66.6216 25.2187L64.199 25.2187V22.7961Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.3"
                        />
                        <path
                          d="M7.56914 22.7961H6.9582V25.2187L4.53565 25.2187L4.53565 25.8296H6.9582L6.9582 28.2521H7.56914L7.56914 25.8296H9.99169L9.99169 25.2187L7.56914 25.2187V22.7961Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.3"
                        />
                        <path
                          d="M52.199 22.7961H51.5881V25.2187L49.1655 25.2187L49.1655 25.8296H51.5881L51.5881 28.2521H52.199L52.199 25.8296H54.6216L54.6216 25.2187L52.199 25.2187V22.7961Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.3"
                        />
                        <path
                          d="M17.9676 22.7961H17.3566V25.2187L14.9341 25.2187L14.9341 25.8296H17.3566L17.3566 28.2521H17.9676L17.9676 25.8296H20.3901L20.3901 25.2187L17.9676 25.2187V22.7961Z"
                          fill="#96A0B5"
                          stroke="#96A0B5"
                          stroke-width="0.3"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_493_1528">
                          <rect width="71" height="51" fill="white" transform="matrix(-1 0 0 1 71 0)" />
                        </clipPath>
                      </defs>
                    </svg>`,
    [slidingDesignIconKeys.SYNCHRONIZE_FOUR_TRACK_EIGHT_PANEL]: `<svg
                    *ngIf="viewHandleFromOutside"
                    width="92"
                    height="51"
                    viewBox="0 0 92 51"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_493_1586)">
                      <path
                        d="M56.7568 50.1696V0.768555H46.0334V50.1696H56.7568Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M35.166 50.1696V0.768555H23.295V50.1696H35.166Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.3662 50.1941V0.792969H0.495243V50.1941H12.3662Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M23.459 50.1696V0.768555H12.5773V50.1696H23.459Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M68.3467 50.1696V0.768555H56.7567V50.1696H68.3467Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M46.0381 50.1696V0.768555H35.1564V50.1696H46.0381Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M33.3389 47.2373V3.75H23.4583V47.2373H33.3389Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5703 47.2608V3.77344H2.29031V47.2608H10.5703Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.4219 47.2373V3.75H12.578V47.2373H21.4219Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M44.3008 47.2373V3.75H35.1601V47.2373H44.3008Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M53.1499 23.6535C53.0715 23.6893 53.0087 23.7522 52.9729 23.8306C52.9471 23.9201 52.9489 24.0152 52.9778 24.1036C52.9917 24.1343 53.0451 24.1491 53.3883 24.4904L54.0037 25.1048L50.3434 25.1137L49.2681 25.1226L49.2028 25.1631C49.1599 25.1927 49.1224 25.2295 49.092 25.2719C49.0542 25.3246 49.0376 25.3896 49.0455 25.454C49.0376 25.5183 49.0542 25.5833 49.092 25.636C49.1224 25.6784 49.1599 25.7152 49.2028 25.7448L49.2681 25.7853L50.3434 25.7942L54.0037 25.8032L53.6169 26.2731C53.2746 26.6143 52.9907 26.9111 52.9778 26.9418C52.9489 27.0302 52.9471 27.1254 52.9729 27.2148C53.0092 27.2967 53.076 27.3612 53.1591 27.3947C53.2422 27.4281 53.3351 27.4278 53.418 27.3939C53.4912 27.3602 55.0711 25.727 55.1324 25.6281C55.1611 25.5731 55.1756 25.5119 55.1748 25.4499C55.1739 25.3879 55.1576 25.3271 55.1274 25.2729C55.0562 25.1651 53.4912 23.6901 53.418 23.6516C53.3759 23.6324 53.33 23.6227 53.2838 23.6231C53.2375 23.6234 53.1918 23.6338 53.1499 23.6535Z"
                        fill="#96A0B5"
                        stroke="#96A0B5"
                        stroke-width="0.197849"
                      />
                      <path
                        d="M39.2072 23.6525C39.2856 23.6883 39.3484 23.7512 39.3842 23.8296C39.41 23.9191 39.4082 24.0142 39.3793 24.1027C39.3654 24.1333 39.312 24.1482 38.9688 24.4895L38.3534 25.1038L42.0137 25.1127L43.089 25.1216L43.1543 25.1621C43.1972 25.1917 43.2347 25.2285 43.2651 25.271C43.3029 25.3236 43.3195 25.3886 43.3115 25.453C43.3195 25.5173 43.3029 25.5823 43.2651 25.635C43.2347 25.6774 43.1972 25.7142 43.1543 25.7438L43.089 25.7844L42.0137 25.7933L38.3534 25.8022L38.7402 26.2721C39.0825 26.6134 39.3664 26.9101 39.3793 26.9408C39.4082 27.0293 39.41 27.1244 39.3842 27.2138C39.3479 27.2957 39.2811 27.3603 39.198 27.3937C39.1149 27.4271 39.022 27.4268 38.9391 27.3929C38.8659 27.3593 37.286 25.726 37.2247 25.6271C37.196 25.5721 37.1815 25.5109 37.1823 25.4489C37.1832 25.3869 37.1995 25.3261 37.2297 25.272C37.3009 25.1641 38.8659 23.6892 38.9391 23.6506C38.9812 23.6315 39.027 23.6217 39.0733 23.6221C39.1196 23.6224 39.1653 23.6328 39.2072 23.6525Z"
                        fill="#96A0B5"
                        stroke="#96A0B5"
                        stroke-width="0.197849"
                      />
                      <path
                        d="M91.5059 50.2305V0.804688H78.977V50.2305H91.5059Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M78.9766 50.1696V0.768555H68.3461V50.1696H78.9766Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M89.6631 47.2373V3.75H80.7876V47.2373H89.6631Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M78.9766 47.2373V3.75H70.2593V47.2373H78.9766Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M68.3467 47.2373V3.75H58.751V47.2373H68.3467Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M56.7568 47.2373V3.75H47.8378V47.2373H56.7568Z"
                        stroke="#96A0B5"
                        stroke-width="0.989247"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.73285 22.8229H6.12848V25.2194L3.73198 25.2194L3.73198 25.8238H6.12848L6.12848 28.2203H6.73285L6.73285 25.8238H9.12935L9.12935 25.2194L6.73285 25.2194V22.8229Z"
                        fill="#96A0B5"
                        stroke="#96A0B5"
                        stroke-width="0.296774"
                      />
                      <path
                        d="M85.3295 22.8229H84.7252V25.2194L82.3287 25.2194L82.3287 25.8238H84.7252L84.7252 28.2203H85.3295L85.3295 25.8238H87.726L87.726 25.2194L85.3295 25.2194V22.8229Z"
                        fill="#96A0B5"
                        stroke="#96A0B5"
                        stroke-width="0.296774"
                      />
                      <path
                        d="M74.4477 22.8229H73.8433V25.2194L71.4468 25.2194L71.4468 25.8238H73.8433L73.8433 28.2203H74.4477L74.4477 25.8238H76.8442L76.8442 25.2194L74.4477 25.2194V22.8229Z"
                        fill="#96A0B5"
                        stroke="#96A0B5"
                        stroke-width="0.296774"
                      />
                      <path
                        d="M63.5659 22.8229H62.9615V25.2194L60.565 25.2194L60.565 25.8238H62.9615L62.9615 28.2203H63.5659L63.5659 25.8238H65.9624L65.9624 25.2194L63.5659 25.2194V22.8229Z"
                        fill="#96A0B5"
                        stroke="#96A0B5"
                        stroke-width="0.296774"
                      />
                      <path
                        d="M28.9428 22.8229H28.3384V25.2194L25.9419 25.2194L25.9419 25.8238H28.3384L28.3384 28.2203H28.9428L28.9428 25.8238H31.3393L31.3393 25.2194L28.9428 25.2194V22.8229Z"
                        fill="#96A0B5"
                        stroke="#96A0B5"
                        stroke-width="0.296774"
                      />
                      <path
                        d="M17.0717 22.8229H16.4673V25.2194L14.0708 25.2194L14.0708 25.8238H16.4673L16.4673 28.2203H17.0717L17.0717 25.8238H19.4682L19.4682 25.2194L17.0717 25.2194V22.8229Z"
                        fill="#96A0B5"
                        stroke="#96A0B5"
                        stroke-width="0.296774"
                      />
                      <path d="M44.2696 23.9131H46.248V31.8271H44.2696V23.9131Z" fill="#96A0B5" />
                      <path d="M42.291 27.8701H44.2695V33.8056H42.291V27.8701Z" fill="#96A0B5" />
                    </g>
                    <defs>
                      <clipPath id="clip0_493_1586">
                        <rect width="92" height="51" fill="white" transform="matrix(-1 0 0 1 92 0)" />
                      </clipPath>
                    </defs>
                  </svg>`,
    [slidingDesignIconKeys.TELESCOPIC_SYNCHRONIZE_THREE_TRACK_SIX_PANEL]: `<svg width="90" height="51" viewBox="0 0 90 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_493_1830)">
                    <path
                      d="M0.49707 0.620936L0.49707 50.3799L89.5019 50.3799V0.620936L0.49707 0.620936Z"
                      stroke="#96A0B5"
                      stroke-width="0.995179"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M75.5352 3.15854V48.1406H87.5111V3.15854H75.5352Z"
                      stroke="#96A0B5"
                      stroke-width="0.995179"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M60.9688 3.00912L60.9688 47.9912H73.295V3.00912H60.9688Z"
                      stroke="#96A0B5"
                      stroke-width="0.995179"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M47.8506 3.26693L47.8506 48.249H58.7289L58.7289 3.26693H47.8506Z"
                      stroke="#96A0B5"
                      stroke-width="0.995179"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M31.8369 3.26693L31.8369 48.249H43.4716L43.4716 3.26693H31.8369Z"
                      stroke="#96A0B5"
                      stroke-width="0.995179"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.2705 3.00912L17.2705 47.9912H29.5968L29.5968 3.00912H17.2705Z"
                      stroke="#96A0B5"
                      stroke-width="0.995179"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.70508 2.85092L2.70508 47.833H15.0314L15.0314 2.85092H2.70508Z"
                      stroke="#96A0B5"
                      stroke-width="0.995179"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path d="M87.1044 21.0234H89.0947V28.9849H87.1044V21.0234Z" fill="#96A0B5" />
                    <path d="M86.0214 25.0039H88.0117V29.9798H86.0214V25.0039Z" fill="#96A0B5" />
                    <path d="M0.34265 20.5244H2.33301V28.4858H0.34265V20.5244Z" fill="#96A0B5" />
                    <path d="M2.33288 24.5049H4.32324V29.4808H2.33288V24.5049Z" fill="#96A0B5" />
                    <path d="M43.1356 21.0225H46.1211V28.9839H43.1356V21.0225Z" fill="#96A0B5" />
                    <path d="M41.9852 25.0029H43.9756V29.9788H41.9852V25.0029Z" fill="#96A0B5" />
                    <path
                      d="M53.8242 23.1941C53.7317 23.2363 53.6575 23.3105 53.6152 23.4031C53.5851 23.5084 53.5872 23.6204 53.6212 23.7245C53.776 23.943 53.9549 24.1433 54.1546 24.3216L54.8811 25.0461L50.562 25.056L49.2932 25.066L49.2166 25.1138C49.166 25.1487 49.1218 25.1921 49.0862 25.2421C49.0417 25.3044 49.0221 25.3811 49.0315 25.4571C49.0221 25.5331 49.0417 25.6098 49.0862 25.6721C49.1219 25.7221 49.166 25.7655 49.2166 25.8004L49.2932 25.8492L50.562 25.8592L54.8811 25.8691L54.1546 26.5936C53.7506 26.9917 53.8461 26.921 53.8302 26.9578C53.7961 27.062 53.7941 27.1739 53.8242 27.2793C53.8671 27.3759 53.946 27.4521 54.0441 27.4915C54.1422 27.5309 54.2519 27.5304 54.3497 27.4903C54.4363 27.4505 56.141 25.7785 56.2137 25.6621C56.2475 25.5973 56.2647 25.525 56.2636 25.4519C56.2626 25.3787 56.2434 25.307 56.2077 25.2432C56.1231 25.1168 54.2273 23.2299 54.1407 23.1901C54.0911 23.1672 54.0371 23.1553 53.9825 23.1553C53.9278 23.1553 53.8738 23.1672 53.8242 23.1901V23.1941Z"
                      fill="#96A0B5"
                      stroke="#96A0B5"
                      stroke-width="0.199036"
                    />
                    <path
                      d="M68.2149 22.9655C68.1223 23.0078 68.0481 23.082 68.0059 23.1746C67.9757 23.2799 67.9778 23.3918 68.0118 23.496C68.1666 23.7145 68.3456 23.9147 68.5453 24.0931L69.2717 24.8176L64.9527 24.8275L63.6838 24.8375L63.6072 24.8853C63.5566 24.9201 63.5125 24.9636 63.4768 25.0136C63.4323 25.0759 63.4127 25.1526 63.4221 25.2286C63.4127 25.3046 63.4323 25.3813 63.4768 25.4436C63.5125 25.4936 63.5566 25.537 63.6072 25.5719L63.6838 25.6207L64.9527 25.6306L69.2717 25.6406L68.5453 26.3651C68.1412 26.7632 68.2368 26.6925 68.2208 26.7293C68.1868 26.8335 68.1847 26.9454 68.2149 27.0508C68.2577 27.1474 68.3366 27.2236 68.4347 27.263C68.5329 27.3024 68.6425 27.3019 68.7403 27.2617C68.8269 27.2219 70.5316 25.55 70.6043 25.4336C70.6381 25.3687 70.6553 25.2965 70.6543 25.2233C70.6532 25.1502 70.634 25.0785 70.5983 25.0146C70.5137 24.8882 68.6179 23.0014 68.5313 22.9616C68.4817 22.9386 68.4277 22.9268 68.3731 22.9268C68.3184 22.9268 68.2645 22.9386 68.2149 22.9616V22.9655Z"
                      fill="#96A0B5"
                      stroke="#96A0B5"
                      stroke-width="0.199036"
                    />
                    <path
                      d="M22.162 23.0944C22.2545 23.1367 22.3287 23.2109 22.371 23.3035C22.4011 23.4088 22.399 23.5208 22.365 23.6249C22.2102 23.8434 22.0313 24.0436 21.8316 24.222L21.1051 24.9465L25.4242 24.9564L26.693 24.9664L26.7696 25.0142C26.8202 25.0491 26.8644 25.0925 26.9 25.1425C26.9445 25.2048 26.9641 25.2815 26.9548 25.3575C26.9641 25.4335 26.9445 25.5102 26.9 25.5725C26.8643 25.6225 26.8202 25.6659 26.7696 25.7008L26.693 25.7496L25.4242 25.7595L21.1051 25.7695L21.8316 26.494C22.2356 26.8921 22.1401 26.8214 22.156 26.8582C22.1901 26.9624 22.1921 27.0743 22.162 27.1797C22.1191 27.2763 22.0402 27.3525 21.9421 27.3919C21.844 27.4313 21.7343 27.4308 21.6365 27.3907C21.5499 27.3508 19.8452 25.6789 19.7725 25.5625C19.7387 25.4977 19.7215 25.4254 19.7226 25.3522C19.7236 25.2791 19.7428 25.2074 19.7785 25.1435C19.8631 25.0172 21.7589 23.1303 21.8455 23.0905C21.8951 23.0675 21.9491 23.0557 22.0037 23.0557C22.0584 23.0557 22.1124 23.0675 22.162 23.0905V23.0944Z"
                      fill="#96A0B5"
                      stroke="#96A0B5"
                      stroke-width="0.199036"
                    />
                    <path
                      d="M36.4764 23.1941C36.569 23.2363 36.6431 23.3105 36.6854 23.4031C36.7156 23.5084 36.7135 23.6204 36.6794 23.7245C36.5247 23.943 36.3457 24.1433 36.146 24.3216L35.4195 25.0461L39.7386 25.056L41.0075 25.066L41.0841 25.1138C41.1347 25.1487 41.1788 25.1921 41.2145 25.2421C41.259 25.3044 41.2785 25.3811 41.2692 25.4571C41.2785 25.5331 41.259 25.6098 41.2145 25.6721C41.1788 25.7221 41.1347 25.7655 41.0841 25.8004L41.0075 25.8492L39.7386 25.8592L35.4195 25.8691L36.146 26.5936C36.5501 26.9917 36.4545 26.921 36.4705 26.9578C36.5045 27.062 36.5066 27.1739 36.4764 27.2793C36.4336 27.3759 36.3547 27.4521 36.2565 27.4915C36.1584 27.5309 36.0488 27.5304 35.951 27.4903C35.8644 27.4505 34.1596 25.7785 34.087 25.6621C34.0532 25.5973 34.036 25.525 34.037 25.4519C34.0381 25.3787 34.0573 25.307 34.093 25.2432C34.1776 25.1168 36.0734 23.2299 36.16 23.1901C36.2096 23.1672 36.2635 23.1553 36.3182 23.1553C36.3728 23.1553 36.4268 23.1672 36.4764 23.1901V23.1941Z"
                      fill="#96A0B5"
                      stroke="#96A0B5"
                      stroke-width="0.199036"
                    />
                    <path d="M75.5352 0.621094V50.38" stroke="#96A0B5" stroke-width="0.995179" />
                    <path d="M60.9688 0.363281V50.1222" stroke="#96A0B5" stroke-width="0.995179" />
                    <path d="M45.7607 0.621094V50.38" stroke="#96A0B5" stroke-width="0.995179" />
                    <path d="M31.8369 0.621094V50.38" stroke="#96A0B5" stroke-width="0.995179" />
                    <path d="M17.2705 0.363281V50.1222" stroke="#96A0B5" stroke-width="0.995179" />
                    <path d="M0.49707 0.363281V50.1222" stroke="#96A0B5" stroke-width="0.995179" />
                    <path
                      d="M81.2098 22.1519H80.4244L80.423 25.2678L77.3071 25.2678L77.3078 26.0539H80.4237L80.4237 29.1698H81.2091L81.2091 26.0539H84.325L84.325 25.2685L81.2098 25.2678L81.2098 22.1519Z"
                      fill="#96A0B5"
                      stroke="#96A0B5"
                      stroke-width="0.298554"
                    />
                    <path
                      d="M9.55645 22.1519H8.77113L8.76972 25.2678L5.65375 25.2678L5.65445 26.0539H8.77042L8.77042 29.1698H9.55575L9.55575 26.0539H12.6717L12.6717 25.2685L9.55645 25.2678L9.55645 22.1519Z"
                      fill="#96A0B5"
                      stroke="#96A0B5"
                      stroke-width="0.298554"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_493_1830">
                      <rect width="90" height="51" fill="white" transform="matrix(-1 0 0 1 90 0)" />
                    </clipPath>
                  </defs>
                </svg>`,
    [slidingDesignIconKeys.TELESCOPIC_SYNCHRONIZE_FOUR_TRACK_EIGHT_PANEL]: `<svg width="86" height="51" viewBox="0 0 86 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_493_1956)">
                  <path
                    d="M0.496094 0.663258L0.496094 50.3369L85.5026 50.3369V0.663258L0.496094 0.663258Z"
                    stroke="#96A0B5"
                    stroke-width="0.993473"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M75.3359 3.15654V48.0615H83.2837V3.15654H75.3359Z"
                    stroke="#96A0B5"
                    stroke-width="0.993473"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path d="M73.3301 0.920898V50.5946" stroke="#96A0B5" stroke-width="0.993473" />
                  <path
                    d="M65.3818 3.30497V48.21H73.3296V3.30497H65.3818Z"
                    stroke="#96A0B5"
                    stroke-width="0.993473"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M70.0345 23.3561C69.9421 23.3983 69.868 23.4724 69.8258 23.5648C69.7957 23.6699 69.7978 23.7817 69.8318 23.8856C69.9863 24.1037 70.1649 24.3037 70.3643 24.4817L71.0895 25.205L67.7713 25.2149L66.5047 25.2248L66.4282 25.2725C66.3777 25.3074 66.3336 25.3507 66.298 25.4007C66.2536 25.4628 66.2341 25.5394 66.2434 25.6153C66.2341 25.6911 66.2536 25.7677 66.298 25.8299C66.3336 25.8798 66.3777 25.9232 66.4282 25.958L66.5047 26.0067L67.7713 26.0166L71.0895 26.0266L70.3643 26.7498C69.961 27.1472 70.0563 27.0767 70.0404 27.1134C70.0064 27.2174 70.0043 27.3292 70.0345 27.4343C70.0773 27.5308 70.156 27.6068 70.254 27.6462C70.3519 27.6855 70.4614 27.6851 70.559 27.6449C70.6455 27.6052 72.3473 25.9362 72.4198 25.8199C72.4536 25.7552 72.4707 25.683 72.4697 25.61C72.4686 25.537 72.4494 25.4654 72.4138 25.4017C72.3294 25.2755 70.4368 23.3919 70.3504 23.3521C70.3009 23.3292 70.247 23.3174 70.1924 23.3174C70.1379 23.3174 70.084 23.3292 70.0345 23.3521V23.3561Z"
                    fill="#96A0B5"
                    stroke="#96A0B5"
                    stroke-width="0.198695"
                  />
                  <path d="M63.1777 0.772461V50.4461" stroke="#96A0B5" stroke-width="0.993473" />
                  <path
                    d="M55.2295 3.27079L55.2295 48.1758H63.1773L63.1773 3.27079H55.2295Z"
                    stroke="#96A0B5"
                    stroke-width="0.993473"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M59.8821 23.3219C59.7898 23.3641 59.7157 23.4382 59.6735 23.5306C59.6434 23.6357 59.6455 23.7475 59.6795 23.8515C59.834 24.0696 60.0126 24.2695 60.212 24.4475L60.9372 25.1708L57.619 25.1807L56.3523 25.1907L56.2758 25.2383C56.2253 25.2732 56.1813 25.3165 56.1457 25.3665C56.1012 25.4287 56.0817 25.5052 56.091 25.5811C56.0817 25.6569 56.1012 25.7335 56.1457 25.7957C56.1813 25.8456 56.2253 25.889 56.2758 25.9238L56.3523 25.9725L57.619 25.9824L60.9372 25.9924L60.212 26.7156C59.8086 27.113 59.904 27.0425 59.8881 27.0792C59.8541 27.1832 59.852 27.295 59.8821 27.4001C59.9249 27.4966 60.0037 27.5726 60.1016 27.612C60.1996 27.6513 60.309 27.6509 60.4067 27.6108C60.4931 27.571 62.1949 25.902 62.2675 25.7857C62.3012 25.721 62.3184 25.6489 62.3173 25.5758C62.3163 25.5028 62.2971 25.4313 62.2615 25.3675C62.177 25.2413 60.2845 23.3577 60.198 23.3179C60.1485 23.2951 60.0946 23.2832 60.0401 23.2832C59.9855 23.2832 59.9316 23.2951 59.8821 23.3179V23.3219Z"
                    fill="#96A0B5"
                    stroke="#96A0B5"
                    stroke-width="0.198695"
                  />
                  <path d="M53.0254 0.738281V50.4119" stroke="#96A0B5" stroke-width="0.993473" />
                  <path
                    d="M45.0771 3.27079L45.0771 48.1758H53.0249L53.0249 3.27079H45.0771Z"
                    stroke="#96A0B5"
                    stroke-width="0.993473"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M49.7298 23.3219C49.6374 23.3641 49.5633 23.4382 49.5212 23.5306C49.491 23.6357 49.4931 23.7475 49.5271 23.8515C49.6816 24.0696 49.8603 24.2695 50.0596 24.4475L50.7848 25.1708L47.4666 25.1807L46.2 25.1907L46.1235 25.2383C46.073 25.2732 46.0289 25.3165 45.9933 25.3665C45.9489 25.4287 45.9294 25.5052 45.9387 25.5811C45.9294 25.6569 45.9489 25.7335 45.9933 25.7957C46.0289 25.8456 46.073 25.889 46.1235 25.9238L46.2 25.9725L47.4666 25.9824L50.7848 25.9924L50.0596 26.7156C49.6563 27.113 49.7516 27.0425 49.7357 27.0792C49.7017 27.1832 49.6997 27.295 49.7298 27.4001C49.7726 27.4966 49.8513 27.5726 49.9493 27.612C50.0472 27.6513 50.1567 27.6509 50.2543 27.6108C50.3408 27.571 52.0426 25.902 52.1151 25.7857C52.1489 25.721 52.166 25.6489 52.165 25.5758C52.164 25.5028 52.1448 25.4313 52.1091 25.3675C52.0247 25.2413 50.1321 23.3577 50.0457 23.3179C49.9962 23.2951 49.9423 23.2832 49.8877 23.2832C49.8332 23.2832 49.7793 23.2951 49.7298 23.3179V23.3219Z"
                    fill="#96A0B5"
                    stroke="#96A0B5"
                    stroke-width="0.198695"
                  />
                  <path d="M42.873 0.738281V50.4119" stroke="#96A0B5" stroke-width="0.993473" />
                  <path d="M30.9512 0.886719V50.5604" stroke="#96A0B5" stroke-width="0.993473" />
                  <path
                    d="M23.0039 3.12138L23.0039 48.0264H30.9517L30.9517 3.12138H23.0039Z"
                    stroke="#96A0B5"
                    stroke-width="0.993473"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.8525 3.26786L12.8525 48.1729H20.8003L20.8003 3.26786H12.8525Z"
                    stroke="#96A0B5"
                    stroke-width="0.993473"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M2.7002 3.26786L2.7002 48.1729H10.648L10.648 3.26786H2.7002Z"
                    stroke="#96A0B5"
                    stroke-width="0.993473"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26.2994 23.1725C26.3918 23.2147 26.4658 23.2888 26.508 23.3812C26.5382 23.4863 26.5361 23.5981 26.5021 23.702C26.3476 23.9201 26.1689 24.1201 25.9696 24.2981L25.2443 25.0214L28.5625 25.0313L29.8292 25.0412L29.9057 25.0889C29.9562 25.1238 30.0003 25.1671 30.0359 25.2171C30.0803 25.2792 30.0998 25.3558 30.0905 25.4317C30.0998 25.5075 30.0803 25.5841 30.0359 25.6463C30.0002 25.6962 29.9562 25.7396 29.9057 25.7744L29.8292 25.8231L28.5625 25.833L25.2443 25.843L25.9696 26.5662C26.3729 26.9636 26.2775 26.8931 26.2934 26.9298C26.3274 27.0338 26.3295 27.1456 26.2994 27.2507C26.2566 27.3472 26.1779 27.4232 26.0799 27.4626C25.9819 27.5019 25.8725 27.5015 25.7749 27.4613C25.6884 27.4216 23.9866 25.7526 23.9141 25.6363C23.8803 25.5716 23.8632 25.4995 23.8642 25.4264C23.8652 25.3534 23.8844 25.2818 23.92 25.2181C24.0045 25.0919 25.897 23.2083 25.9835 23.1685C26.033 23.1456 26.0869 23.1338 26.1414 23.1338C26.196 23.1338 26.2499 23.1456 26.2994 23.1685V23.1725Z"
                    fill="#96A0B5"
                    stroke="#96A0B5"
                    stroke-width="0.198695"
                  />
                  <path
                    d="M16.1471 23.32C16.2394 23.3622 16.3135 23.4362 16.3557 23.5286C16.3858 23.6338 16.3837 23.7455 16.3497 23.8495C16.1952 24.0676 16.0166 24.2675 15.8172 24.4456L15.092 25.1688L18.4102 25.1788L19.6769 25.1887L19.7534 25.2364C19.8039 25.2712 19.8479 25.3146 19.8835 25.3645C19.928 25.4267 19.9475 25.5033 19.9382 25.5791C19.9475 25.655 19.928 25.7316 19.8835 25.7937C19.8479 25.8437 19.8039 25.887 19.7534 25.9219L19.6769 25.9706L18.4102 25.9805L15.092 25.9904L15.8172 26.7137C16.2206 27.1111 16.1252 27.0405 16.1411 27.0773C16.1751 27.1813 16.1772 27.293 16.1471 27.3982C16.1043 27.4947 16.0255 27.5707 15.9276 27.61C15.8296 27.6494 15.7202 27.6489 15.6225 27.6088C15.5361 27.5691 13.8343 25.9 13.7617 25.7838C13.728 25.7191 13.7108 25.6469 13.7118 25.5739C13.7129 25.5009 13.7321 25.4293 13.7677 25.3655C13.8521 25.2394 15.7447 23.3557 15.8311 23.316C15.8807 23.2931 15.9346 23.2812 15.9891 23.2812C16.0436 23.2812 16.0975 23.2931 16.1471 23.316V23.32Z"
                    fill="#96A0B5"
                    stroke="#96A0B5"
                    stroke-width="0.198695"
                  />
                  <path d="M20.7998 0.588867V50.2625" stroke="#96A0B5" stroke-width="0.993473" />
                  <path d="M10.6475 0.737305V50.411" stroke="#96A0B5" stroke-width="0.993473" />
                  <path d="M0.496094 0.737305V50.411" stroke="#96A0B5" stroke-width="0.993473" />
                  <path
                    d="M40.6699 3.19434V48.0993H32.7221V3.19434H40.6699Z"
                    stroke="#96A0B5"
                    stroke-width="0.993473"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M36.0172 23.2457C36.1095 23.2879 36.1836 23.362 36.2258 23.4544C36.2559 23.5596 36.2539 23.6713 36.2198 23.7753C36.0653 23.9934 35.8867 24.1933 35.6873 24.3713L34.9621 25.0946L38.2803 25.1045L39.547 25.1145L39.6235 25.1622C39.674 25.197 39.718 25.2404 39.7536 25.2903C39.7981 25.3525 39.8176 25.4291 39.8083 25.5049C39.8176 25.5808 39.7981 25.6574 39.7536 25.7195C39.718 25.7695 39.674 25.8128 39.6235 25.8477L39.547 25.8963L38.2803 25.9063L34.9621 25.9162L35.6873 26.6395C36.0907 27.0369 35.9953 26.9663 36.0112 27.0031C36.0452 27.107 36.0473 27.2188 36.0172 27.324C35.9744 27.4205 35.8956 27.4965 35.7977 27.5358C35.6997 27.5751 35.5903 27.5747 35.4926 27.5346C35.4062 27.4948 33.7044 25.8258 33.6319 25.7096C33.5981 25.6448 33.5809 25.5727 33.582 25.4997C33.583 25.4267 33.6022 25.3551 33.6378 25.2913C33.7223 25.1652 35.6148 23.2815 35.7013 23.2418C35.7508 23.2189 35.8047 23.207 35.8592 23.207C35.9138 23.207 35.9677 23.2189 36.0172 23.2418V23.2457Z"
                    fill="#96A0B5"
                    stroke="#96A0B5"
                    stroke-width="0.198695"
                  />
                  <path d="M42.874 0.663086V50.3367" stroke="#96A0B5" stroke-width="0.993473" />
                  <path d="M83.515 22.2803H85.502V30.2281H83.515V22.2803Z" fill="#96A0B5" />
                  <path d="M81.5277 26.2539H83.5146V31.2213H81.5277V26.2539Z" fill="#96A0B5" />
                  <path d="M0.495476 22.2803H2.48242V30.2281H0.495476V22.2803Z" fill="#96A0B5" />
                  <path d="M2.48278 26.2539H4.46973V31.2213H2.48278V26.2539Z" fill="#96A0B5" />
                  <path
                    d="M79.9163 22.8086H79.277V25.3376H76.7481L76.7453 25.9796L79.2742 25.9796L79.277 28.5114H79.9163L79.9163 25.9825L82.4481 25.9796L82.4481 25.3404L79.9191 25.3404L79.9163 22.8086Z"
                    fill="#96A0B5"
                    stroke="#96A0B5"
                    stroke-width="0.298042"
                  />
                  <path
                    d="M7.29327 22.7412H6.654V25.2702H4.12503L4.12222 25.9123L6.65119 25.9123L6.654 28.444H7.29327L7.29327 25.9151L9.82505 25.9123L9.82505 25.273L7.29608 25.273L7.29327 22.7412Z"
                    fill="#96A0B5"
                    stroke="#96A0B5"
                    stroke-width="0.298042"
                  />
                  <path d="M41.0121 21.1904H42.999V29.1382H41.0121V21.1904Z" fill="#96A0B5" />
                  <path d="M39.0248 26.1582H41.0117V31.1256H39.0248V26.1582Z" fill="#96A0B5" />
                </g>
                <defs>
                  <clipPath id="clip0_493_1956">
                    <rect width="86" height="51" fill="white" transform="matrix(-1 0 0 1 86 0)" />
                  </clipPath>
                </defs>
              </svg>`,
  },
  [IconPrefix.INVISIBLE_SLIDING]: {
    [slidingDesignIconKeys.INVISIBLE_SLIDING_LEFT_OPENING]: `<svg
                        *ngIf="!viewHandleFromOutside"
                        width="40"
                        height="50"
                        viewBox="0 0 41 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="-0.5"
                          y="0.5"
                          width="40"
                          height="49"
                          transform="matrix(-1 0 0 1 40 0)"
                          stroke="#96A0B5"
                        />
                        <rect
                          x="-0.5"
                          y="0.5"
                          width="32.7647"
                          height="43"
                          transform="matrix(-1 0 0 1 36.3823 3)"
                          stroke="#96A0B5"
                        />
                        <line
                          y1="-0.5"
                          x2="49"
                          y2="-0.5"
                          transform="matrix(5.27109e-08 1 1 -3.62485e-08 1.20605 1)"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M25.1447 25.4243C25.3791 25.1899 25.3791 24.8101 25.1447 24.5757L21.3264 20.7574C21.092 20.523 20.7121 20.523 20.4778 20.7574C20.2435 20.9917 20.2435 21.3716 20.4778 21.6059L23.8719 25L20.4778 28.3941C20.2435 28.6284 20.2435 29.0083 20.4778 29.2426C20.7121 29.477 21.092 29.477 21.3264 29.2426L25.1447 25.4243ZM16.2793 25.6H24.7205V24.4H16.2793V25.6Z"
                          fill="#96A0B5"
                        />
                      </svg>`,
    [slidingDesignIconKeys.INVISIBLE_SLIDING_CENTER_OPENING]: `<svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="0.5" y="0.5" width="69" height="49" stroke="#96A0B5" />
                        <rect x="3.8335" y="3.5" width="27.8889" height="43" stroke="#96A0B5" />
                        <rect x="38.2778" y="3.5" width="27.8889" height="43" stroke="#96A0B5" />
                        <path
                          d="M55.9799 25.4243C56.2142 25.1899 56.2142 24.8101 55.9799 24.5757L52.1615 20.7574C51.9272 20.523 51.5473 20.523 51.313 20.7574C51.0787 20.9917 51.0787 21.3716 51.313 21.6059L54.7071 25L51.313 28.3941C51.0787 28.6284 51.0787 29.0083 51.313 29.2426C51.5473 29.477 51.9272 29.477 52.1615 29.2426L55.9799 25.4243ZM47.7778 25.6H55.5556V24.4H47.7778V25.6Z"
                          fill="#96A0B5"
                        />
                        <path
                          d="M12.9093 26.4243C12.675 26.1899 12.675 25.8101 12.9093 25.5757L16.7277 21.7574C16.962 21.523 17.3419 21.523 17.5762 21.7574C17.8105 21.9917 17.8105 22.3716 17.5762 22.6059L14.1821 26L17.5762 29.3941C17.8105 29.6284 17.8105 30.0083 17.5762 30.2426C17.3419 30.477 16.962 30.477 16.7277 30.2426L12.9093 26.4243ZM21.1113 26.6H13.3336V25.4H21.1113V26.6Z"
                          fill="#96A0B5"
                        />
                        <line x1="34.9443" y1="1" x2="34.9443" y2="50" stroke="#96A0B5" />
                      </svg>`,
  },
};
