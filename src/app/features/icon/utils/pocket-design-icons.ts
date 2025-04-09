import { IconPrefix, IconPrefixType } from '../models/icon.model';

export const pocketDesignIconKeys = {
  SLIDING_POCKET_ONE_TRACK_ONE_PANEL_LEFT_OPENING: 'slidingPocketOneTrackOnePanelLeftOpening', // one is mirror of other (right opening) can be do by using same icon.(4 images)
  SLIDING_POCKET_ONE_TRACK_TWO_PANEL_CENTER_OPENING: 'slidingPocketOneTrackTwoPanelCenterOpening',
  SLIDING_POCKET_ONE_TRACK_TWO_PANEL_SIDE_OPENING: 'slidingPocketOneTrackTwoPanelSideOpening',
  SLIDING_POCKET_TWO_TRACK_FOUR_PANEL_CENTER_OPENING: 'slidingPocketTwoTrackFourPanelCenterOpening',
  SLIDING_POCKET_THREE_TRACK_SIX_PANEL_CENTER_OPENING: 'slidingPocketThreeTrackSixPanelCenterOpening',
  SLIDING_POCKET_FOUR_TRACK_EIGHT_PANEL_CENTER_OPENING: 'slidingPocketFourTrackEightPanelCenterOpening',

  // synchronizePocketDesignIconKeys
  SYNCHRONIZE_POCKET_ONE_TRACK_TWO_PANEL_CENTER_OPENING: 'synchronizePocketOneTrackTwoPanelCenterOpening',
  TELESCOPIC_SYNCHRONIZE_POCKET_TWO_TRACK_FOUR_PANEL_CENTER_OPENING:
    'telescopicSynchronizePocketTwoTrackFourPanelCenterOpening',
  TELESCOPIC_SYNCHRONIZE_POCKET_THREE_TRACK_SIX_PANEL_CENTER_OPENING:
    'telescopicSynchronizePocketThreeTrackSixPanelCenterOpening',
  TELESCOPIC_SYNCHRONIZE_POCKET_FOUR_TRACK_EIGHT_PANEL_CENTER_OPENING:
    'telescopicSynchronizePocketFourTrackEightPanelCenterOpening',

  //** telescopicPocketDesignIconKeys  */
  // This image can be mirrored for right opening ( both mirro of right and left opening)
  TELESCOPIC_POCKET_TWO_TRACK_TWO_PANEL_LEFT_OPENING: 'telescopicPocketTwoTrackTwoPanelLeftOpening',
  // This image can be mirrored for right opening ( both mirro of right and left opening)
  TELESCOPIC_POCKET_THREE_TRACK_THREE_PANEL_LEFT_OPENING: 'telescopicPocketThreeTrackThreePanelLeftOpening',
  // This image can be mirrored for right opening ( both mirro of right and left opening)
  TELESCOPIC_POCKET_FOUR_TRACK_FOUR_PANEL_LEFT_OPENING: 'telescopicPocketFourTrackFourPanelLeftOpening',

  TELESCOPIC_POCKET_TWO_TRACK_FOUR_PANEL_CENTER_OPENING: 'telescopicPocketTwoTrackFourPanelCenterOpening',
  TELESCOPIC_POCKET_THREE_TRACK_SIX_PANEL_CENTER_OPENING: 'telescopicPocketThreeTrackSixPanelCenterOpening',
  TELESCOPIC_POCKET_FOUR_TRACK_EIGHT_PANEL_CENTER_OPENING: 'telescopicPocketFourTrackEightPanelCenterOpening',
} as const;

export type IconKey = typeof pocketDesignIconKeys[keyof typeof pocketDesignIconKeys];

export const POCKET_DESIGN_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.POCKET_SLIDING]: {
    [pocketDesignIconKeys.SLIDING_POCKET_ONE_TRACK_ONE_PANEL_LEFT_OPENING]: `<svg
                        *ngIf="viewHandleFromOutside"
                        width="70"
                        height="50"
                        viewBox="0 0 70 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="-0.5"
                          y="0.5"
                          width="69"
                          height="49"
                          transform="matrix(-1 0 0 1 69 0)"
                          stroke="#96A0B5"
                        />
                        <path d="M65.6908 18H70V25.692H65.6908V18Z" fill="#96A0B5" />
                        <path d="M64.6127 22H66.7417V30H64.6127V22Z" fill="#96A0B5" />
                        <rect
                          x="-0.5"
                          y="0.5"
                          width="32"
                          height="43"
                          transform="matrix(-1 0 0 1 66 3)"
                          stroke="#96A0B5"
                        />
                        <line
                          y1="-0.5"
                          x2="49"
                          y2="-0.5"
                          transform="matrix(4.37115e-08 1 1 -4.37115e-08 35 1)"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M43.4697 25.5303C43.1768 25.2374 43.1768 24.7626 43.4697 24.4697L48.2426 19.6967C48.5355 19.4038 49.0104 19.4038 49.3033 19.6967C49.5962 19.9896 49.5962 20.4645 49.3033 20.7574L45.0607 25L49.3033 29.2426C49.5962 29.5355 49.5962 30.0104 49.3033 30.3033C49.0104 30.5962 48.5355 30.5962 48.2426 30.3033L43.4697 25.5303ZM56 25.75L44 25.75V24.25L56 24.25V25.75Z"
                          fill="#96A0B5"
                        />
                      </svg>`,
    [pocketDesignIconKeys.SLIDING_POCKET_ONE_TRACK_TWO_PANEL_CENTER_OPENING]: `<svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="69"
                        height="49"
                        transform="matrix(-1 0 0 1 69 0)"
                        stroke="#96A0B5"
                      />
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="14"
                        height="43"
                        transform="matrix(-1 0 0 1 52 3)"
                        stroke="#96A0B5"
                      />
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="15"
                        height="43"
                        transform="matrix(-1 0 0 1 32 3)"
                        stroke="#96A0B5"
                      />
                      <path
                        d="M49.4243 25.4243C49.6586 25.1899 49.6586 24.8101 49.4243 24.5757L45.6059 20.7574C45.3716 20.523 44.9917 20.523 44.7574 20.7574C44.523 20.9917 44.523 21.3716 44.7574 21.6059L48.1515 25L44.7574 28.3941C44.523 28.6284 44.523 29.0083 44.7574 29.2426C44.9917 29.477 45.3716 29.477 45.6059 29.2426L49.4243 25.4243ZM42 25.6H49V24.4H42V25.6Z"
                        fill="#96A0B5"
                      />
                      <path
                        d="M21.5757 25.4243C21.3414 25.1899 21.3414 24.8101 21.5757 24.5757L25.3941 20.7574C25.6284 20.523 26.0083 20.523 26.2426 20.7574C26.477 20.9917 26.477 21.3716 26.2426 21.6059L22.8485 25L26.2426 28.3941C26.477 28.6284 26.477 29.0083 26.2426 29.2426C26.0083 29.477 25.6284 29.477 25.3941 29.2426L21.5757 25.4243ZM29 25.6H22V24.4H29V25.6Z"
                        fill="#96A0B5"
                      />
                      <path d="M31.952 21H36V28.692H31.952V21Z" fill="#96A0B5" />
                      <path d="M30 25H32V33H30V25Z" fill="#96A0B5" />
                      <path d="M39.048 21H35V28.692H39.048V21Z" fill="#96A0B5" />
                      <path d="M41 25H39V33H41V25Z" fill="#96A0B5" />
                      <line
                        y1="-0.5"
                        x2="49"
                        y2="-0.5"
                        transform="matrix(4.37115e-08 1 1 -4.37115e-08 36 0)"
                        stroke="#96A0B5"
                      />
                      <line
                        y1="-0.5"
                        x2="49"
                        y2="-0.5"
                        transform="matrix(4.37115e-08 1 1 -4.37115e-08 53 0)"
                        stroke="#96A0B5"
                      />
                      <line
                        y1="-0.5"
                        x2="49"
                        y2="-0.5"
                        transform="matrix(4.37115e-08 1 1 -4.37115e-08 18 1)"
                        stroke="#96A0B5"
                      />
                    </svg>`,
    [pocketDesignIconKeys.SLIDING_POCKET_ONE_TRACK_TWO_PANEL_SIDE_OPENING]: `<svg xmlns="http://www.w3.org/2000/svg" width="70" height="50" viewBox="0 0 70 50">
                        <g id="Group_178887" data-name="Group 178887" transform="translate(5480.5 -285)">
                          <line
                            id="Line_2000"
                            data-name="Line 2000"
                            x2="49"
                            transform="translate(-5459 285) rotate(90)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <line
                            id="Line_2001"
                            data-name="Line 2001"
                            x2="49"
                            transform="translate(-5431 285) rotate(90)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <rect
                            id="Rectangle_73891"
                            data-name="Rectangle 73891"
                            width="69"
                            height="49"
                            transform="translate(-5411 334.5) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <rect
                            id="Rectangle_73892"
                            data-name="Rectangle 73892"
                            width="14"
                            height="43"
                            transform="translate(-5414 331.5) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <rect
                            id="Rectangle_73893"
                            data-name="Rectangle 73893"
                            width="15"
                            height="43"
                            transform="translate(-5462 331.5) rotate(180)"
                            fill="none"
                            stroke="#96a0b5"
                            stroke-width="1"
                          />
                          <path
                            id="Path_254695"
                            data-name="Path 254695"
                            d="M42.176,25.424a.6.6,0,0,1,0-.849l3.818-3.818a.6.6,0,0,1,.849.848L43.449,25l3.394,3.394a.6.6,0,0,1-.849.848ZM49.6,25.6h-7V24.4h7Z"
                            transform="translate(-5466.5 285)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_254696"
                            data-name="Path 254696"
                            d="M7.424,4.843a.6.6,0,0,0,0-.849L3.606.176a.6.6,0,0,0-.849.848L6.152,4.418,2.757,7.812a.6.6,0,0,0,.849.848ZM0,5.018H7v-1.2H0Z"
                            transform="translate(-5473.1 305.582)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_254697"
                            data-name="Path 254697"
                            d="M31.952,21H35.68v7.692H31.952Z"
                            transform="translate(-5512.28 283.654)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_254698"
                            data-name="Path 254698"
                            d="M30,25h2v8H30Z"
                            transform="translate(-5507.5 283.5)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_254699"
                            data-name="Path 254699"
                            d="M38.435,21H35v7.692h3.435Z"
                            transform="translate(-5449.435 285)"
                            fill="#96a0b5"
                          />
                          <path
                            id="Path_254700"
                            data-name="Path 254700"
                            d="M41,25H39v8h2Z"
                            transform="translate(-5454.5 285)"
                            fill="#96a0b5"
                          />
                        </g>
                      </svg>`,
    [pocketDesignIconKeys.SLIDING_POCKET_TWO_TRACK_FOUR_PANEL_CENTER_OPENING]: `<svg width="96" height="50" viewBox="0 0 96 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="95"
                        height="49"
                        transform="matrix(-1 0 0 1 95 0)"
                        stroke="#96A0B5"
                      />
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="13"
                        height="43"
                        transform="matrix(-1 0 0 1 63 3)"
                        stroke="#96A0B5"
                      />
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="13"
                        height="43"
                        transform="matrix(-1 0 0 1 80 3)"
                        stroke="#96A0B5"
                      />
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="13"
                        height="43"
                        transform="matrix(-1 0 0 1 28 3)"
                        stroke="#96A0B5"
                      />
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="12"
                        height="43"
                        transform="matrix(-1 0 0 1 44 3)"
                        stroke="#96A0B5"
                      />
                      <line
                        y1="-0.5"
                        x2="49"
                        y2="-0.5"
                        transform="matrix(4.37115e-08 1 1 -4.37115e-08 48 0)"
                        stroke="#96A0B5"
                      />
                      <path d="M43.952 19H48V26.692H43.952V19Z" fill="#96A0B5" />
                      <path d="M42 23H44V31H42V23Z" fill="#96A0B5" />
                      <path d="M51.048 19H47V26.692H51.048V19Z" fill="#96A0B5" />
                      <path d="M53 23H51V31H53V23Z" fill="#96A0B5" />
                      <path
                        d="M61.4243 25.4243C61.6586 25.1899 61.6586 24.8101 61.4243 24.5757L57.6059 20.7574C57.3716 20.523 56.9917 20.523 56.7574 20.7574C56.523 20.9917 56.523 21.3716 56.7574 21.6059L60.1515 25L56.7574 28.3941C56.523 28.6284 56.523 29.0083 56.7574 29.2426C56.9917 29.477 57.3716 29.477 57.6059 29.2426L61.4243 25.4243ZM54 25.6H61V24.4H54V25.6Z"
                        fill="#96A0B5"
                      />
                      <path
                        d="M77.4243 25.4243C77.6586 25.1899 77.6586 24.8101 77.4243 24.5757L73.6059 20.7574C73.3716 20.523 72.9917 20.523 72.7574 20.7574C72.523 20.9917 72.523 21.3716 72.7574 21.6059L76.1515 25L72.7574 28.3941C72.523 28.6284 72.523 29.0083 72.7574 29.2426C72.9917 29.477 73.3716 29.477 73.6059 29.2426L77.4243 25.4243ZM70 25.6H77V24.4H70V25.6Z"
                        fill="#96A0B5"
                      />
                      <line
                        y1="-0.5"
                        x2="49"
                        y2="-0.5"
                        transform="matrix(4.37115e-08 1 1 -4.37115e-08 64 0)"
                        stroke="#96A0B5"
                      />
                      <line
                        y1="-0.5"
                        x2="49"
                        y2="-0.5"
                        transform="matrix(4.37115e-08 1 1 -4.37115e-08 81 0)"
                        stroke="#96A0B5"
                      />
                      <line
                        y1="-0.5"
                        x2="49"
                        y2="-0.5"
                        transform="matrix(4.37115e-08 1 1 -4.37115e-08 16 0)"
                        stroke="#96A0B5"
                      />
                      <path
                        d="M18.5757 25.4243C18.3414 25.1899 18.3414 24.8101 18.5757 24.5757L22.3941 20.7574C22.6284 20.523 23.0083 20.523 23.2426 20.7574C23.477 20.9917 23.477 21.3716 23.2426 21.6059L19.8485 25L23.2426 28.3941C23.477 28.6284 23.477 29.0083 23.2426 29.2426C23.0083 29.477 22.6284 29.477 22.3941 29.2426L18.5757 25.4243ZM26 25.6H19V24.4H26V25.6Z"
                        fill="#96A0B5"
                      />
                      <path
                        d="M33.5757 25.4243C33.3414 25.1899 33.3414 24.8101 33.5757 24.5757L37.3941 20.7574C37.6284 20.523 38.0083 20.523 38.2426 20.7574C38.477 20.9917 38.477 21.3716 38.2426 21.6059L34.8485 25L38.2426 28.3941C38.477 28.6284 38.477 29.0083 38.2426 29.2426C38.0083 29.477 37.6284 29.477 37.3941 29.2426L33.5757 25.4243ZM41 25.6H34V24.4H41V25.6Z"
                        fill="#96A0B5"
                      />
                      <line x1="32.5" y1="1" x2="32.5" y2="50" stroke="#96A0B5" />
                    </svg>`,
    [pocketDesignIconKeys.SLIDING_POCKET_THREE_TRACK_SIX_PANEL_CENTER_OPENING]: `<svg width="93" height="50" viewBox="0 0 93 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12.5" y1="1" x2="12.5" y2="50" stroke="#96A0B5" />
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="92"
                      height="49"
                      transform="matrix(-1 0 0 1 92 0)"
                      stroke="#96A0B5"
                    />
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="9"
                      height="43"
                      transform="matrix(-1 0 0 1 58 3)"
                      stroke="#96A0B5"
                    />
                    <path d="M43.952 20H48V27.692H43.952V20Z" fill="#96A0B5" />
                    <path d="M42 24H44V32H42V24Z" fill="#96A0B5" />
                    <path d="M50.048 20H46V27.692H50.048V20Z" fill="#96A0B5" />
                    <path d="M52 24H50V32H52V24Z" fill="#96A0B5" />
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="9"
                      height="43"
                      transform="matrix(-1 0 0 1 70 3)"
                      stroke="#96A0B5"
                    />
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="8"
                      height="43"
                      transform="matrix(-1 0 0 1 81 3)"
                      stroke="#96A0B5"
                    />
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="9"
                      height="43"
                      transform="matrix(-1 0 0 1 32 3)"
                      stroke="#96A0B5"
                    />
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="8"
                      height="43"
                      transform="matrix(-1 0 0 1 20 3)"
                      stroke="#96A0B5"
                    />
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="9"
                      height="43"
                      transform="matrix(-1 0 0 1 44 3)"
                      stroke="#96A0B5"
                    />
                    <line
                      y1="-0.5"
                      x2="49"
                      y2="-0.5"
                      transform="matrix(4.29175e-08 1 1 -4.45201e-08 47.4736 0)"
                      stroke="#96A0B5"
                    />
                    <path d="M58.5 0L58.5 49" stroke="#96A0B5" />
                    <line
                      y1="-0.5"
                      x2="49"
                      y2="-0.5"
                      transform="matrix(4.29175e-08 1 1 -4.45201e-08 71 0)"
                      stroke="#96A0B5"
                    />
                    <line
                      y1="-0.5"
                      x2="49"
                      y2="-0.5"
                      transform="matrix(4.29175e-08 1 1 -4.45201e-08 82 0)"
                      stroke="#96A0B5"
                    />
                    <line x1="35.3423" y1="1" x2="35.3423" y2="50" stroke="#96A0B5" />
                    <line x1="23.5" y1="1" x2="23.5" y2="50" stroke="#96A0B5" />
                    <path
                      d="M68.4243 25.4243C68.6586 25.1899 68.6586 24.8101 68.4243 24.5757L64.6059 20.7574C64.3716 20.523 63.9917 20.523 63.7574 20.7574C63.523 20.9917 63.523 21.3716 63.7574 21.6059L67.1515 25L63.7574 28.3941C63.523 28.6284 63.523 29.0083 63.7574 29.2426C63.9917 29.477 64.3716 29.477 64.6059 29.2426L68.4243 25.4243ZM63 25.6H68V24.4H63V25.6Z"
                      fill="#96A0B5"
                    />
                    <path
                      d="M57.4243 25.4243C57.6586 25.1899 57.6586 24.8101 57.4243 24.5757L53.6059 20.7574C53.3716 20.523 52.9917 20.523 52.7574 20.7574C52.523 20.9917 52.523 21.3716 52.7574 21.6059L56.1515 25L52.7574 28.3941C52.523 28.6284 52.523 29.0083 52.7574 29.2426C52.9917 29.477 53.3716 29.477 53.6059 29.2426L57.4243 25.4243ZM53 25.6H57V24.4H53V25.6Z"
                      fill="#96A0B5"
                    />
                    <path
                      d="M36.5757 25.4243C36.3414 25.1899 36.3414 24.8101 36.5757 24.5757L40.3941 20.7574C40.6284 20.523 41.0083 20.523 41.2426 20.7574C41.477 20.9917 41.477 21.3716 41.2426 21.6059L37.8485 25L41.2426 28.3941C41.477 28.6284 41.477 29.0083 41.2426 29.2426C41.0083 29.477 40.6284 29.477 40.3941 29.2426L36.5757 25.4243ZM41 25.6H37V24.4H41V25.6Z"
                      fill="#96A0B5"
                    />
                    <path
                      d="M25.5757 25.4243C25.3414 25.1899 25.3414 24.8101 25.5757 24.5757L29.3941 20.7574C29.6284 20.523 30.0083 20.523 30.2426 20.7574C30.477 20.9917 30.477 21.3716 30.2426 21.6059L26.8485 25L30.2426 28.3941C30.477 28.6284 30.477 29.0083 30.2426 29.2426C30.0083 29.477 29.6284 29.477 29.3941 29.2426L25.5757 25.4243ZM31 25.6H26V24.4H31V25.6Z"
                      fill="#96A0B5"
                    />
                    <path
                      d="M13.5757 25.4243C13.3414 25.1899 13.3414 24.8101 13.5757 24.5757L17.3941 20.7574C17.6284 20.523 18.0083 20.523 18.2426 20.7574C18.477 20.9917 18.477 21.3716 18.2426 21.6059L14.8485 25L18.2426 28.3941C18.477 28.6284 18.477 29.0083 18.2426 29.2426C18.0083 29.477 17.6284 29.477 17.3941 29.2426L13.5757 25.4243ZM19 25.6H14V24.4H19V25.6Z"
                      fill="#96A0B5"
                    />
                    <path
                      d="M80.4243 25.4243C80.6586 25.1899 80.6586 24.8101 80.4243 24.5757L76.6059 20.7574C76.3716 20.523 75.9917 20.523 75.7574 20.7574C75.523 20.9917 75.523 21.3716 75.7574 21.6059L79.1515 25L75.7574 28.3941C75.523 28.6284 75.523 29.0083 75.7574 29.2426C75.9917 29.477 76.3716 29.477 76.6059 29.2426L80.4243 25.4243ZM75 25.6H80V24.4H75V25.6Z"
                      fill="#96A0B5"
                    />
                  </svg>`,
    [pocketDesignIconKeys.SLIDING_POCKET_FOUR_TRACK_EIGHT_PANEL_CENTER_OPENING]: `<svg width="108" height="50" viewBox="0 0 108 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="21.6055" y1="1" x2="21.6055" y2="50" stroke="#96A0B5" />
                  <line x1="10.5" y1="1" x2="10.5" y2="50" stroke="#96A0B5" />
                  <rect
                    x="-0.5"
                    y="0.5"
                    width="107"
                    height="49"
                    transform="matrix(-1 0 0 1 107 0)"
                    stroke="#96A0B5"
                  />
                  <rect x="79.5" y="3.5" width="8" height="43" stroke="#96A0B5" />
                  <rect x="90.5" y="3.5" width="8" height="43" stroke="#96A0B5" />
                  <rect x="68.5" y="3.5" width="8" height="43" stroke="#96A0B5" />
                  <rect x="56.5" y="3.5" width="9" height="43" stroke="#96A0B5" />
                  <rect
                    x="-0.5"
                    y="0.5"
                    width="8"
                    height="43"
                    transform="matrix(-1 0 0 1 40 3)"
                    stroke="#96A0B5"
                  />
                  <rect
                    x="-0.5"
                    y="0.5"
                    width="8"
                    height="43"
                    transform="matrix(-1 0 0 1 29 3)"
                    stroke="#96A0B5"
                  />
                  <rect
                    x="-0.5"
                    y="0.5"
                    width="8"
                    height="43"
                    transform="matrix(-1 0 0 1 18 3)"
                    stroke="#96A0B5"
                  />
                  <rect
                    x="-0.5"
                    y="0.5"
                    width="8"
                    height="43"
                    transform="matrix(-1 0 0 1 51 3)"
                    stroke="#96A0B5"
                  />
                  <line
                    y1="-0.5"
                    x2="49"
                    y2="-0.5"
                    transform="matrix(4.12008e-08 1 1 -4.63751e-08 54.4946 0)"
                    stroke="#96A0B5"
                  />
                  <line x1="76.2471" y1="2.31876e-08" x2="76.2471" y2="49" stroke="#96A0B5" />
                  <line x1="87.5" y1="2.31876e-08" x2="87.5" y2="49" stroke="#96A0B5" />
                  <line x1="98.7104" y1="2.31876e-08" x2="98.7104" y2="49" stroke="#96A0B5" />
                  <line x1="65.5" y1="1" x2="65.5" y2="50" stroke="#96A0B5" />
                  <path d="M43.2998 1L43.2998 50" stroke="#96A0B5" />
                  <line x1="32.5" y1="1" x2="32.5" y2="50" stroke="#96A0B5" />
                  <path
                    d="M75.4062 25.3536C75.6014 25.1583 75.6014 24.8417 75.4062 24.6464L72.2242 21.4645C72.0289 21.2692 71.7124 21.2692 71.5171 21.4645C71.3218 21.6597 71.3218 21.9763 71.5171 22.1716L74.3455 25L71.5171 27.8284C71.3218 28.0237 71.3218 28.3403 71.5171 28.5355C71.7124 28.7308 72.0289 28.7308 72.2242 28.5355L75.4062 25.3536ZM70 25.5H75.0526V24.5H70V25.5Z"
                    fill="#96A0B5"
                  />
                  <path
                    d="M63.3536 25.3536C63.5488 25.1583 63.5488 24.8417 63.3536 24.6464L60.1716 21.4645C59.9763 21.2692 59.6597 21.2692 59.4645 21.4645C59.2692 21.6597 59.2692 21.9763 59.4645 22.1716L62.2929 25L59.4645 27.8284C59.2692 28.0237 59.2692 28.3403 59.4645 28.5355C59.6597 28.7308 59.9763 28.7308 60.1716 28.5355L63.3536 25.3536ZM59 25.5H63V24.5H59V25.5Z"
                    fill="#96A0B5"
                  />
                  <path
                    d="M44.6463 25.3536C44.451 25.1583 44.451 24.8417 44.6463 24.6464L47.8282 21.4645C48.0235 21.2692 48.3401 21.2692 48.5353 21.4645C48.7306 21.6597 48.7306 21.9763 48.5353 22.1716L45.7069 25L48.5353 27.8284C48.7306 28.0237 48.7306 28.3403 48.5353 28.5355C48.3401 28.7308 48.0235 28.7308 47.8282 28.5355L44.6463 25.3536ZM49.0498 25.5H44.9998V24.5H49.0498V25.5Z"
                    fill="#96A0B5"
                  />
                  <path
                    d="M33.92 25.3536C33.7247 25.1583 33.7247 24.8417 33.92 24.6464L37.102 21.4645C37.2972 21.2692 37.6138 21.2692 37.8091 21.4645C38.0043 21.6597 38.0043 21.9763 37.8091 22.1716L34.9806 25L37.8091 27.8284C38.0043 28.0237 38.0043 28.3403 37.8091 28.5355C37.6138 28.7308 37.2972 28.7308 37.102 28.5355L33.92 25.3536ZM39.3262 25.5H34.2735V24.5H39.3262V25.5Z"
                    fill="#96A0B5"
                  />
                  <path
                    d="M22.8043 25.3536C22.609 25.1583 22.609 24.8417 22.8043 24.6464L25.9862 21.4645C26.1815 21.2692 26.4981 21.2692 26.6934 21.4645C26.8886 21.6597 26.8886 21.9763 26.6934 22.1716L23.8649 25L26.6934 27.8284C26.8886 28.0237 26.8886 28.3403 26.6934 28.5355C26.4981 28.7308 26.1815 28.7308 25.9862 28.5355L22.8043 25.3536ZM28.2104 25.5H23.1578V24.5H28.2104V25.5Z"
                    fill="#96A0B5"
                  />
                  <path
                    d="M11.6993 25.3536C11.504 25.1583 11.504 24.8417 11.6993 24.6464L14.8813 21.4645C15.0765 21.2692 15.3931 21.2692 15.5884 21.4645C15.7836 21.6597 15.7836 21.9763 15.5884 22.1716L12.7599 25L15.5884 27.8284C15.7836 28.0237 15.7836 28.3403 15.5884 28.5355C15.3931 28.7308 15.0765 28.7308 14.8813 28.5355L11.6993 25.3536ZM17.1055 25.5H12.0528V24.5H17.1055V25.5Z"
                    fill="#96A0B5"
                  />
                  <path
                    d="M86.4062 25.3536C86.6014 25.1583 86.6014 24.8417 86.4062 24.6464L83.2242 21.4645C83.0289 21.2692 82.7124 21.2692 82.5171 21.4645C82.3218 21.6597 82.3218 21.9763 82.5171 22.1716L85.3455 25L82.5171 27.8284C82.3218 28.0237 82.3218 28.3403 82.5171 28.5355C82.7124 28.7308 83.0289 28.7308 83.2242 28.5355L86.4062 25.3536ZM81 25.5H86.0526V24.5H81V25.5Z"
                    fill="#96A0B5"
                  />
                  <path
                    d="M97.4272 25.3536C97.6224 25.1583 97.6224 24.8417 97.4272 24.6464L94.2452 21.4645C94.0499 21.2692 93.7334 21.2692 93.5381 21.4645C93.3428 21.6597 93.3428 21.9763 93.5381 22.1716L96.3665 25L93.5381 27.8284C93.3428 28.0237 93.3428 28.3403 93.5381 28.5355C93.7334 28.7308 94.0499 28.7308 94.2452 28.5355L97.4272 25.3536ZM92.021 25.5H97.0736V24.5H92.021V25.5Z"
                    fill="#96A0B5"
                  />
                  <path d="M56.048 20H52V27.692H56.048V20Z" fill="#96A0B5" />
                  <path d="M58 24H56V32H58V24Z" fill="#96A0B5" />
                  <path d="M51.952 20H56V27.692H51.952V20Z" fill="#96A0B5" />
                  <path d="M50 24H52V32H50V24Z" fill="#96A0B5" />
                </svg>`,
  },
  [IconPrefix.POCKET_SYNCHRONIZE_SLIDING]: {
    [pocketDesignIconKeys.SYNCHRONIZE_POCKET_ONE_TRACK_TWO_PANEL_CENTER_OPENING]: `<svg width="70" height="50" viewBox="0 0 70 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect
                          x="-0.5"
                          y="0.5"
                          width="69"
                          height="49"
                          transform="matrix(-1 0 0 1 69 0)"
                          stroke="#96A0B5"
                        />
                        <rect
                          x="-0.5"
                          y="0.5"
                          width="14"
                          height="43"
                          transform="matrix(-1 0 0 1 52 3)"
                          stroke="#96A0B5"
                        />
                        <rect
                          x="-0.5"
                          y="0.5"
                          width="15"
                          height="43"
                          transform="matrix(-1 0 0 1 32 3)"
                          stroke="#96A0B5"
                        />
                        <path
                          d="M49.4243 25.4243C49.6586 25.1899 49.6586 24.8101 49.4243 24.5757L45.6059 20.7574C45.3716 20.523 44.9917 20.523 44.7574 20.7574C44.523 20.9917 44.523 21.3716 44.7574 21.6059L48.1515 25L44.7574 28.3941C44.523 28.6284 44.523 29.0083 44.7574 29.2426C44.9917 29.477 45.3716 29.477 45.6059 29.2426L49.4243 25.4243ZM42 25.6H49V24.4H42V25.6Z"
                          fill="#96A0B5"
                        />
                        <path
                          d="M21.5757 25.4243C21.3414 25.1899 21.3414 24.8101 21.5757 24.5757L25.3941 20.7574C25.6284 20.523 26.0083 20.523 26.2426 20.7574C26.477 20.9917 26.477 21.3716 26.2426 21.6059L22.8485 25L26.2426 28.3941C26.477 28.6284 26.477 29.0083 26.2426 29.2426C26.0083 29.477 25.6284 29.477 25.3941 29.2426L21.5757 25.4243ZM29 25.6H22V24.4H29V25.6Z"
                          fill="#96A0B5"
                        />
                        <path d="M31.952 21H36V28.692H31.952V21Z" fill="#96A0B5" />
                        <path d="M30 25H32V33H30V25Z" fill="#96A0B5" />
                        <path d="M39.048 21H35V28.692H39.048V21Z" fill="#96A0B5" />
                        <path d="M41 25H39V33H41V25Z" fill="#96A0B5" />
                        <line
                          y1="-0.5"
                          x2="49"
                          y2="-0.5"
                          transform="matrix(4.37115e-08 1 1 -4.37115e-08 36 0)"
                          stroke="#96A0B5"
                        />
                        <line
                          y1="-0.5"
                          x2="49"
                          y2="-0.5"
                          transform="matrix(4.37115e-08 1 1 -4.37115e-08 53 0)"
                          stroke="#96A0B5"
                        />
                        <line
                          y1="-0.5"
                          x2="49"
                          y2="-0.5"
                          transform="matrix(4.37115e-08 1 1 -4.37115e-08 18 1)"
                          stroke="#96A0B5"
                        />
                      </svg>`,
    [pocketDesignIconKeys.TELESCOPIC_SYNCHRONIZE_POCKET_TWO_TRACK_FOUR_PANEL_CENTER_OPENING]: `<svg width="96" height="50" viewBox="0 0 96 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="95"
                        height="49"
                        transform="matrix(-1 0 0 1 95 0)"
                        stroke="#96A0B5"
                      />
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="13"
                        height="43"
                        transform="matrix(-1 0 0 1 63 3)"
                        stroke="#96A0B5"
                      />
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="13"
                        height="43"
                        transform="matrix(-1 0 0 1 80 3)"
                        stroke="#96A0B5"
                      />
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="13"
                        height="43"
                        transform="matrix(-1 0 0 1 28 3)"
                        stroke="#96A0B5"
                      />
                      <rect
                        x="-0.5"
                        y="0.5"
                        width="12"
                        height="43"
                        transform="matrix(-1 0 0 1 44 3)"
                        stroke="#96A0B5"
                      />
                      <line
                        y1="-0.5"
                        x2="49"
                        y2="-0.5"
                        transform="matrix(4.37115e-08 1 1 -4.37115e-08 48 0)"
                        stroke="#96A0B5"
                      />
                      <path d="M43.952 19H48V26.692H43.952V19Z" fill="#96A0B5" />
                      <path d="M42 23H44V31H42V23Z" fill="#96A0B5" />
                      <path d="M51.048 19H47V26.692H51.048V19Z" fill="#96A0B5" />
                      <path d="M53 23H51V31H53V23Z" fill="#96A0B5" />
                      <path
                        d="M61.4243 25.4243C61.6586 25.1899 61.6586 24.8101 61.4243 24.5757L57.6059 20.7574C57.3716 20.523 56.9917 20.523 56.7574 20.7574C56.523 20.9917 56.523 21.3716 56.7574 21.6059L60.1515 25L56.7574 28.3941C56.523 28.6284 56.523 29.0083 56.7574 29.2426C56.9917 29.477 57.3716 29.477 57.6059 29.2426L61.4243 25.4243ZM54 25.6H61V24.4H54V25.6Z"
                        fill="#96A0B5"
                      />
                      <path
                        d="M77.4243 25.4243C77.6586 25.1899 77.6586 24.8101 77.4243 24.5757L73.6059 20.7574C73.3716 20.523 72.9917 20.523 72.7574 20.7574C72.523 20.9917 72.523 21.3716 72.7574 21.6059L76.1515 25L72.7574 28.3941C72.523 28.6284 72.523 29.0083 72.7574 29.2426C72.9917 29.477 73.3716 29.477 73.6059 29.2426L77.4243 25.4243ZM70 25.6H77V24.4H70V25.6Z"
                        fill="#96A0B5"
                      />
                      <line
                        y1="-0.5"
                        x2="49"
                        y2="-0.5"
                        transform="matrix(4.37115e-08 1 1 -4.37115e-08 64 0)"
                        stroke="#96A0B5"
                      />
                      <line
                        y1="-0.5"
                        x2="49"
                        y2="-0.5"
                        transform="matrix(4.37115e-08 1 1 -4.37115e-08 81 0)"
                        stroke="#96A0B5"
                      />
                      <line
                        y1="-0.5"
                        x2="49"
                        y2="-0.5"
                        transform="matrix(4.37115e-08 1 1 -4.37115e-08 16 0)"
                        stroke="#96A0B5"
                      />
                      <path
                        d="M18.5757 25.4243C18.3414 25.1899 18.3414 24.8101 18.5757 24.5757L22.3941 20.7574C22.6284 20.523 23.0083 20.523 23.2426 20.7574C23.477 20.9917 23.477 21.3716 23.2426 21.6059L19.8485 25L23.2426 28.3941C23.477 28.6284 23.477 29.0083 23.2426 29.2426C23.0083 29.477 22.6284 29.477 22.3941 29.2426L18.5757 25.4243ZM26 25.6H19V24.4H26V25.6Z"
                        fill="#96A0B5"
                      />
                      <path
                        d="M33.5757 25.4243C33.3414 25.1899 33.3414 24.8101 33.5757 24.5757L37.3941 20.7574C37.6284 20.523 38.0083 20.523 38.2426 20.7574C38.477 20.9917 38.477 21.3716 38.2426 21.6059L34.8485 25L38.2426 28.3941C38.477 28.6284 38.477 29.0083 38.2426 29.2426C38.0083 29.477 37.6284 29.477 37.3941 29.2426L33.5757 25.4243ZM41 25.6H34V24.4H41V25.6Z"
                        fill="#96A0B5"
                      />
                      <line x1="32.5" y1="1" x2="32.5" y2="50" stroke="#96A0B5" />
                    </svg>`,
    [pocketDesignIconKeys.TELESCOPIC_SYNCHRONIZE_POCKET_THREE_TRACK_SIX_PANEL_CENTER_OPENING]: `<svg width="93" height="50" viewBox="0 0 93 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="12.5" y1="1" x2="12.5" y2="50" stroke="#96A0B5" />
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="92"
                      height="49"
                      transform="matrix(-1 0 0 1 92 0)"
                      stroke="#96A0B5"
                    />
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="9"
                      height="43"
                      transform="matrix(-1 0 0 1 58 3)"
                      stroke="#96A0B5"
                    />
                    <path d="M43.952 20H48V27.692H43.952V20Z" fill="#96A0B5" />
                    <path d="M42 24H44V32H42V24Z" fill="#96A0B5" />
                    <path d="M50.048 20H46V27.692H50.048V20Z" fill="#96A0B5" />
                    <path d="M52 24H50V32H52V24Z" fill="#96A0B5" />
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="9"
                      height="43"
                      transform="matrix(-1 0 0 1 70 3)"
                      stroke="#96A0B5"
                    />
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="8"
                      height="43"
                      transform="matrix(-1 0 0 1 81 3)"
                      stroke="#96A0B5"
                    />
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="9"
                      height="43"
                      transform="matrix(-1 0 0 1 32 3)"
                      stroke="#96A0B5"
                    />
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="8"
                      height="43"
                      transform="matrix(-1 0 0 1 20 3)"
                      stroke="#96A0B5"
                    />
                    <rect
                      x="-0.5"
                      y="0.5"
                      width="9"
                      height="43"
                      transform="matrix(-1 0 0 1 44 3)"
                      stroke="#96A0B5"
                    />
                    <line
                      y1="-0.5"
                      x2="49"
                      y2="-0.5"
                      transform="matrix(4.29175e-08 1 1 -4.45201e-08 47.4736 0)"
                      stroke="#96A0B5"
                    />
                    <path d="M58.5 0L58.5 49" stroke="#96A0B5" />
                    <line
                      y1="-0.5"
                      x2="49"
                      y2="-0.5"
                      transform="matrix(4.29175e-08 1 1 -4.45201e-08 71 0)"
                      stroke="#96A0B5"
                    />
                    <line
                      y1="-0.5"
                      x2="49"
                      y2="-0.5"
                      transform="matrix(4.29175e-08 1 1 -4.45201e-08 82 0)"
                      stroke="#96A0B5"
                    />
                    <line x1="35.3423" y1="1" x2="35.3423" y2="50" stroke="#96A0B5" />
                    <line x1="23.5" y1="1" x2="23.5" y2="50" stroke="#96A0B5" />
                    <path
                      d="M68.4243 25.4243C68.6586 25.1899 68.6586 24.8101 68.4243 24.5757L64.6059 20.7574C64.3716 20.523 63.9917 20.523 63.7574 20.7574C63.523 20.9917 63.523 21.3716 63.7574 21.6059L67.1515 25L63.7574 28.3941C63.523 28.6284 63.523 29.0083 63.7574 29.2426C63.9917 29.477 64.3716 29.477 64.6059 29.2426L68.4243 25.4243ZM63 25.6H68V24.4H63V25.6Z"
                      fill="#96A0B5"
                    />
                    <path
                      d="M57.4243 25.4243C57.6586 25.1899 57.6586 24.8101 57.4243 24.5757L53.6059 20.7574C53.3716 20.523 52.9917 20.523 52.7574 20.7574C52.523 20.9917 52.523 21.3716 52.7574 21.6059L56.1515 25L52.7574 28.3941C52.523 28.6284 52.523 29.0083 52.7574 29.2426C52.9917 29.477 53.3716 29.477 53.6059 29.2426L57.4243 25.4243ZM53 25.6H57V24.4H53V25.6Z"
                      fill="#96A0B5"
                    />
                    <path
                      d="M36.5757 25.4243C36.3414 25.1899 36.3414 24.8101 36.5757 24.5757L40.3941 20.7574C40.6284 20.523 41.0083 20.523 41.2426 20.7574C41.477 20.9917 41.477 21.3716 41.2426 21.6059L37.8485 25L41.2426 28.3941C41.477 28.6284 41.477 29.0083 41.2426 29.2426C41.0083 29.477 40.6284 29.477 40.3941 29.2426L36.5757 25.4243ZM41 25.6H37V24.4H41V25.6Z"
                      fill="#96A0B5"
                    />
                    <path
                      d="M25.5757 25.4243C25.3414 25.1899 25.3414 24.8101 25.5757 24.5757L29.3941 20.7574C29.6284 20.523 30.0083 20.523 30.2426 20.7574C30.477 20.9917 30.477 21.3716 30.2426 21.6059L26.8485 25L30.2426 28.3941C30.477 28.6284 30.477 29.0083 30.2426 29.2426C30.0083 29.477 29.6284 29.477 29.3941 29.2426L25.5757 25.4243ZM31 25.6H26V24.4H31V25.6Z"
                      fill="#96A0B5"
                    />
                    <path
                      d="M13.5757 25.4243C13.3414 25.1899 13.3414 24.8101 13.5757 24.5757L17.3941 20.7574C17.6284 20.523 18.0083 20.523 18.2426 20.7574C18.477 20.9917 18.477 21.3716 18.2426 21.6059L14.8485 25L18.2426 28.3941C18.477 28.6284 18.477 29.0083 18.2426 29.2426C18.0083 29.477 17.6284 29.477 17.3941 29.2426L13.5757 25.4243ZM19 25.6H14V24.4H19V25.6Z"
                      fill="#96A0B5"
                    />
                    <path
                      d="M80.4243 25.4243C80.6586 25.1899 80.6586 24.8101 80.4243 24.5757L76.6059 20.7574C76.3716 20.523 75.9917 20.523 75.7574 20.7574C75.523 20.9917 75.523 21.3716 75.7574 21.6059L79.1515 25L75.7574 28.3941C75.523 28.6284 75.523 29.0083 75.7574 29.2426C75.9917 29.477 76.3716 29.477 76.6059 29.2426L80.4243 25.4243ZM75 25.6H80V24.4H75V25.6Z"
                      fill="#96A0B5"
                    />
                  </svg>`,
    [pocketDesignIconKeys.TELESCOPIC_SYNCHRONIZE_POCKET_FOUR_TRACK_EIGHT_PANEL_CENTER_OPENING]: `<svg width="108" height="50" viewBox="0 0 108 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <line x1="21.6055" y1="1" x2="21.6055" y2="50" stroke="#96A0B5" />
                  <line x1="10.5" y1="1" x2="10.5" y2="50" stroke="#96A0B5" />
                  <rect
                    x="-0.5"
                    y="0.5"
                    width="107"
                    height="49"
                    transform="matrix(-1 0 0 1 107 0)"
                    stroke="#96A0B5"
                  />
                  <rect x="79.5" y="3.5" width="8" height="43" stroke="#96A0B5" />
                  <rect x="90.5" y="3.5" width="8" height="43" stroke="#96A0B5" />
                  <rect x="68.5" y="3.5" width="8" height="43" stroke="#96A0B5" />
                  <rect x="56.5" y="3.5" width="9" height="43" stroke="#96A0B5" />
                  <rect
                    x="-0.5"
                    y="0.5"
                    width="8"
                    height="43"
                    transform="matrix(-1 0 0 1 40 3)"
                    stroke="#96A0B5"
                  />
                  <rect
                    x="-0.5"
                    y="0.5"
                    width="8"
                    height="43"
                    transform="matrix(-1 0 0 1 29 3)"
                    stroke="#96A0B5"
                  />
                  <rect
                    x="-0.5"
                    y="0.5"
                    width="8"
                    height="43"
                    transform="matrix(-1 0 0 1 18 3)"
                    stroke="#96A0B5"
                  />
                  <rect
                    x="-0.5"
                    y="0.5"
                    width="8"
                    height="43"
                    transform="matrix(-1 0 0 1 51 3)"
                    stroke="#96A0B5"
                  />
                  <line
                    y1="-0.5"
                    x2="49"
                    y2="-0.5"
                    transform="matrix(4.12008e-08 1 1 -4.63751e-08 54.4946 0)"
                    stroke="#96A0B5"
                  />
                  <line x1="76.2471" y1="2.31876e-08" x2="76.2471" y2="49" stroke="#96A0B5" />
                  <line x1="87.5" y1="2.31876e-08" x2="87.5" y2="49" stroke="#96A0B5" />
                  <line x1="98.7104" y1="2.31876e-08" x2="98.7104" y2="49" stroke="#96A0B5" />
                  <line x1="65.5" y1="1" x2="65.5" y2="50" stroke="#96A0B5" />
                  <path d="M43.2998 1L43.2998 50" stroke="#96A0B5" />
                  <line x1="32.5" y1="1" x2="32.5" y2="50" stroke="#96A0B5" />
                  <path
                    d="M75.4062 25.3536C75.6014 25.1583 75.6014 24.8417 75.4062 24.6464L72.2242 21.4645C72.0289 21.2692 71.7124 21.2692 71.5171 21.4645C71.3218 21.6597 71.3218 21.9763 71.5171 22.1716L74.3455 25L71.5171 27.8284C71.3218 28.0237 71.3218 28.3403 71.5171 28.5355C71.7124 28.7308 72.0289 28.7308 72.2242 28.5355L75.4062 25.3536ZM70 25.5H75.0526V24.5H70V25.5Z"
                    fill="#96A0B5"
                  />
                  <path
                    d="M63.3536 25.3536C63.5488 25.1583 63.5488 24.8417 63.3536 24.6464L60.1716 21.4645C59.9763 21.2692 59.6597 21.2692 59.4645 21.4645C59.2692 21.6597 59.2692 21.9763 59.4645 22.1716L62.2929 25L59.4645 27.8284C59.2692 28.0237 59.2692 28.3403 59.4645 28.5355C59.6597 28.7308 59.9763 28.7308 60.1716 28.5355L63.3536 25.3536ZM59 25.5H63V24.5H59V25.5Z"
                    fill="#96A0B5"
                  />
                  <path
                    d="M44.6463 25.3536C44.451 25.1583 44.451 24.8417 44.6463 24.6464L47.8282 21.4645C48.0235 21.2692 48.3401 21.2692 48.5353 21.4645C48.7306 21.6597 48.7306 21.9763 48.5353 22.1716L45.7069 25L48.5353 27.8284C48.7306 28.0237 48.7306 28.3403 48.5353 28.5355C48.3401 28.7308 48.0235 28.7308 47.8282 28.5355L44.6463 25.3536ZM49.0498 25.5H44.9998V24.5H49.0498V25.5Z"
                    fill="#96A0B5"
                  />
                  <path
                    d="M33.92 25.3536C33.7247 25.1583 33.7247 24.8417 33.92 24.6464L37.102 21.4645C37.2972 21.2692 37.6138 21.2692 37.8091 21.4645C38.0043 21.6597 38.0043 21.9763 37.8091 22.1716L34.9806 25L37.8091 27.8284C38.0043 28.0237 38.0043 28.3403 37.8091 28.5355C37.6138 28.7308 37.2972 28.7308 37.102 28.5355L33.92 25.3536ZM39.3262 25.5H34.2735V24.5H39.3262V25.5Z"
                    fill="#96A0B5"
                  />
                  <path
                    d="M22.8043 25.3536C22.609 25.1583 22.609 24.8417 22.8043 24.6464L25.9862 21.4645C26.1815 21.2692 26.4981 21.2692 26.6934 21.4645C26.8886 21.6597 26.8886 21.9763 26.6934 22.1716L23.8649 25L26.6934 27.8284C26.8886 28.0237 26.8886 28.3403 26.6934 28.5355C26.4981 28.7308 26.1815 28.7308 25.9862 28.5355L22.8043 25.3536ZM28.2104 25.5H23.1578V24.5H28.2104V25.5Z"
                    fill="#96A0B5"
                  />
                  <path
                    d="M11.6993 25.3536C11.504 25.1583 11.504 24.8417 11.6993 24.6464L14.8813 21.4645C15.0765 21.2692 15.3931 21.2692 15.5884 21.4645C15.7836 21.6597 15.7836 21.9763 15.5884 22.1716L12.7599 25L15.5884 27.8284C15.7836 28.0237 15.7836 28.3403 15.5884 28.5355C15.3931 28.7308 15.0765 28.7308 14.8813 28.5355L11.6993 25.3536ZM17.1055 25.5H12.0528V24.5H17.1055V25.5Z"
                    fill="#96A0B5"
                  />
                  <path
                    d="M86.4062 25.3536C86.6014 25.1583 86.6014 24.8417 86.4062 24.6464L83.2242 21.4645C83.0289 21.2692 82.7124 21.2692 82.5171 21.4645C82.3218 21.6597 82.3218 21.9763 82.5171 22.1716L85.3455 25L82.5171 27.8284C82.3218 28.0237 82.3218 28.3403 82.5171 28.5355C82.7124 28.7308 83.0289 28.7308 83.2242 28.5355L86.4062 25.3536ZM81 25.5H86.0526V24.5H81V25.5Z"
                    fill="#96A0B5"
                  />
                  <path
                    d="M97.4272 25.3536C97.6224 25.1583 97.6224 24.8417 97.4272 24.6464L94.2452 21.4645C94.0499 21.2692 93.7334 21.2692 93.5381 21.4645C93.3428 21.6597 93.3428 21.9763 93.5381 22.1716L96.3665 25L93.5381 27.8284C93.3428 28.0237 93.3428 28.3403 93.5381 28.5355C93.7334 28.7308 94.0499 28.7308 94.2452 28.5355L97.4272 25.3536ZM92.021 25.5H97.0736V24.5H92.021V25.5Z"
                    fill="#96A0B5"
                  />
                  <path d="M56.048 20H52V27.692H56.048V20Z" fill="#96A0B5" />
                  <path d="M58 24H56V32H58V24Z" fill="#96A0B5" />
                  <path d="M51.952 20H56V27.692H51.952V20Z" fill="#96A0B5" />
                  <path d="M50 24H52V32H50V24Z" fill="#96A0B5" />
                </svg>`,
  },
  [IconPrefix.POCKET_TELESCOPIC_SLIDING]: {
    [pocketDesignIconKeys.TELESCOPIC_POCKET_TWO_TRACK_TWO_PANEL_LEFT_OPENING]: `<svg
    *ngIf="viewHandleFromOutside"
    width="70"
    height="50"
    viewBox="0 0 70 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect x="0.5" y="0.5" width="69" height="49" stroke="#96A0B5" />
    <path d="M22.9526 3.5H43.0847V46.5H22.9526V3.5Z" stroke="#96A0B5" />
    <rect x="46.7261" y="3.5" width="18.8113" height="43" stroke="#96A0B5" />
    <line x1="46.7261" y1="1" x2="46.7261" y2="50" stroke="#96A0B5" />
    <line x1="22.9526" y1="1.92327e-08" x2="22.9526" y2="49" stroke="#96A0B5" />
    <path d="M66 19H70V27H66V19Z" fill="#96A0B5" />
    <path d="M63.3331 23H65.9746V31H63.3331V23Z" fill="#96A0B5" />
    <path
      d="M51.0853 25.4243C50.851 25.1899 50.851 24.8101 51.0853 24.5757L54.9037 20.7574C55.138 20.523 55.5179 20.523 55.7522 20.7574C55.9866 20.9917 55.9866 21.3716 55.7522 21.6059L52.3581 25L55.7522 28.3941C55.9866 28.6284 55.9866 29.0083 55.7522 29.2426C55.5179 29.477 55.138 29.477 54.9037 29.2426L51.0853 25.4243ZM60.7549 25.6H51.5096V24.4H60.7549V25.6Z"
      fill="#96A0B5"
    />
    <path
      d="M28.6327 25.4243C28.3984 25.1899 28.3984 24.8101 28.6327 24.5757L32.4511 20.7574C32.6854 20.523 33.0653 20.523 33.2996 20.7574C33.5339 20.9917 33.5339 21.3716 33.2996 21.6059L29.9055 25L33.2996 28.3941C33.5339 28.6284 33.5339 29.0083 33.2996 29.2426C33.0653 29.477 32.6854 29.477 32.4511 29.2426L28.6327 25.4243ZM38.3022 25.6H29.057V24.4H38.3022V25.6Z"
      fill="#96A0B5"
    />
  </svg>`,
    [pocketDesignIconKeys.TELESCOPIC_POCKET_THREE_TRACK_THREE_PANEL_LEFT_OPENING]: `<svg
  *ngIf="viewHandleFromOutside"
  width="70"
  height="50"
  viewBox="0 0 70 50"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>
  <rect x="0.5" y="0.5" width="69" height="49" stroke="#96A0B5" />
  <rect x="34.4395" y="3.5" width="13.8485" height="43" stroke="#96A0B5" />
  <rect x="17.4697" y="3.5" width="12.7879" height="43" stroke="#96A0B5" />
  <rect x="52.4697" y="3.5" width="13.8485" height="43" stroke="#96A0B5" />
  <line x1="52.4697" y1="2.06068e-08" x2="52.4697" y2="49" stroke="#96A0B5" />
  <line x1="34.4395" y1="2.06068e-08" x2="34.4394" y2="49" stroke="#96A0B5" />
  <line x1="17.4697" y1="1" x2="17.4697" y2="50" stroke="#96A0B5" />
  <path
    d="M54.7272 24.4243C54.4929 24.1899 54.4929 23.8101 54.7272 23.5757L58.5456 19.7574C58.7799 19.523 59.1598 19.523 59.3941 19.7574C59.6284 19.9917 59.6284 20.3716 59.3941 20.6059L56 24L59.3941 27.3941C59.6284 27.6284 59.6284 28.0083 59.3941 28.2426C59.1598 28.477 58.7799 28.477 58.5456 28.2426L54.7272 24.4243ZM62.5757 24.6H55.1514V23.4H62.5757V24.6Z"
    fill="#96A0B5"
  />
  <path
    d="M37.7574 24.4243C37.5231 24.1899 37.5231 23.8101 37.7574 23.5757L41.5758 19.7574C41.8101 19.523 42.19 19.523 42.4244 19.7574C42.6587 19.9917 42.6587 20.3716 42.4244 20.6059L39.0302 24L42.4244 27.3941C42.6587 27.6284 42.6587 28.0083 42.4244 28.2426C42.19 28.477 41.8101 28.477 41.5758 28.2426L37.7574 24.4243ZM45.606 24.6H38.1817V23.4H45.606V24.6Z"
    fill="#96A0B5"
  />
  <path
    d="M19.7272 25.4243C19.4929 25.1899 19.4929 24.8101 19.7272 24.5757L23.5456 20.7574C23.7799 20.523 24.1598 20.523 24.3941 20.7574C24.6284 20.9917 24.6284 21.3716 24.3941 21.6059L21 25L24.3941 28.3941C24.6284 28.6284 24.6284 29.0083 24.3941 29.2426C24.1598 29.477 23.7799 29.477 23.5456 29.2426L19.7272 25.4243ZM27.5757 25.6H20.1514V24.4H27.5757V25.6Z"
    fill="#96A0B5"
  />
  <path d="M65.7067 18H70V25.692H65.7067V18Z" fill="#96A0B5" />
  <path d="M63.6366 22H65.7578V30H63.6366V22Z" fill="#96A0B5" />
</svg>`,
    [pocketDesignIconKeys.TELESCOPIC_POCKET_FOUR_TRACK_FOUR_PANEL_LEFT_OPENING]: `<svg
*ngIf="viewHandleFromOutside"
width="84"
height="50"
viewBox="0 0 84 50"
fill="none"
xmlns="http://www.w3.org/2000/svg"
>
<rect x="0.5" y="0.5" width="83" height="49" stroke="#96A0B5" />
<rect x="50.5" y="3.5" width="13" height="43" stroke="#96A0B5" />
<rect x="33.5" y="3.5" width="13" height="43" stroke="#96A0B5" />
<rect x="17.5" y="3.5" width="12" height="43" stroke="#96A0B5" />
<rect x="67.5" y="3.5" width="13" height="43" stroke="#96A0B5" />
<path d="M79.952 19H84V26.692H79.952V19Z" fill="#96A0B5" />
<path d="M78 23H80V31H78V23Z" fill="#96A0B5" />
<line x1="67.5" y1="2.18557e-08" x2="67.5" y2="49" stroke="#96A0B5" />
<line x1="50.5" y1="2.18557e-08" x2="50.5" y2="49" stroke="#96A0B5" />
<line x1="50.5" y1="2.18557e-08" x2="50.5" y2="49" stroke="#96A0B5" />
<line x1="33.5" y1="2.18557e-08" x2="33.5" y2="49" stroke="#96A0B5" />
<line x1="17.5" y1="1" x2="17.5" y2="50" stroke="#96A0B5" />
<path
  d="M69.5757 25.4243C69.3414 25.1899 69.3414 24.8101 69.5757 24.5757L73.3941 20.7574C73.6284 20.523 74.0083 20.523 74.2426 20.7574C74.477 20.9917 74.477 21.3716 74.2426 21.6059L70.8485 25L74.2426 28.3941C74.477 28.6284 74.477 29.0083 74.2426 29.2426C74.0083 29.477 73.6284 29.477 73.3941 29.2426L69.5757 25.4243ZM77 25.6H70V24.4H77V25.6Z"
  fill="#96A0B5"
/>
<path
  d="M53.5757 25.4243C53.3414 25.1899 53.3414 24.8101 53.5757 24.5757L57.3941 20.7574C57.6284 20.523 58.0083 20.523 58.2426 20.7574C58.477 20.9917 58.477 21.3716 58.2426 21.6059L54.8485 25L58.2426 28.3941C58.477 28.6284 58.477 29.0083 58.2426 29.2426C58.0083 29.477 57.6284 29.477 57.3941 29.2426L53.5757 25.4243ZM61 25.6H54V24.4H61V25.6Z"
  fill="#96A0B5"
/>
<path
  d="M35.5757 25.4243C35.3414 25.1899 35.3414 24.8101 35.5757 24.5757L39.3941 20.7574C39.6284 20.523 40.0083 20.523 40.2426 20.7574C40.477 20.9917 40.477 21.3716 40.2426 21.6059L36.8485 25L40.2426 28.3941C40.477 28.6284 40.477 29.0083 40.2426 29.2426C40.0083 29.477 39.6284 29.477 39.3941 29.2426L35.5757 25.4243ZM43 25.6H36V24.4H43V25.6Z"
  fill="#96A0B5"
/>
<path
  d="M19.5757 25.4243C19.3414 25.1899 19.3414 24.8101 19.5757 24.5757L23.3941 20.7574C23.6284 20.523 24.0083 20.523 24.2426 20.7574C24.477 20.9917 24.477 21.3716 24.2426 21.6059L20.8485 25L24.2426 28.3941C24.477 28.6284 24.477 29.0083 24.2426 29.2426C24.0083 29.477 23.6284 29.477 23.3941 29.2426L19.5757 25.4243ZM27 25.6H20V24.4H27V25.6Z"
  fill="#96A0B5"
/>
</svg>`,
    [pocketDesignIconKeys.TELESCOPIC_POCKET_TWO_TRACK_FOUR_PANEL_CENTER_OPENING]: `<svg width="96" height="50" viewBox="0 0 96 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect
  x="-0.5"
  y="0.5"
  width="95"
  height="49"
  transform="matrix(-1 0 0 1 95 0)"
  stroke="#96A0B5"
/>
<rect
  x="-0.5"
  y="0.5"
  width="13"
  height="43"
  transform="matrix(-1 0 0 1 63 3)"
  stroke="#96A0B5"
/>
<rect
  x="-0.5"
  y="0.5"
  width="13"
  height="43"
  transform="matrix(-1 0 0 1 80 3)"
  stroke="#96A0B5"
/>
<rect
  x="-0.5"
  y="0.5"
  width="13"
  height="43"
  transform="matrix(-1 0 0 1 28 3)"
  stroke="#96A0B5"
/>
<rect
  x="-0.5"
  y="0.5"
  width="12"
  height="43"
  transform="matrix(-1 0 0 1 44 3)"
  stroke="#96A0B5"
/>
<line
  y1="-0.5"
  x2="49"
  y2="-0.5"
  transform="matrix(4.37115e-08 1 1 -4.37115e-08 48 0)"
  stroke="#96A0B5"
/>
<path d="M43.952 19H48V26.692H43.952V19Z" fill="#96A0B5" />
<path d="M42 23H44V31H42V23Z" fill="#96A0B5" />
<path d="M51.048 19H47V26.692H51.048V19Z" fill="#96A0B5" />
<path d="M53 23H51V31H53V23Z" fill="#96A0B5" />
<path
  d="M61.4243 25.4243C61.6586 25.1899 61.6586 24.8101 61.4243 24.5757L57.6059 20.7574C57.3716 20.523 56.9917 20.523 56.7574 20.7574C56.523 20.9917 56.523 21.3716 56.7574 21.6059L60.1515 25L56.7574 28.3941C56.523 28.6284 56.523 29.0083 56.7574 29.2426C56.9917 29.477 57.3716 29.477 57.6059 29.2426L61.4243 25.4243ZM54 25.6H61V24.4H54V25.6Z"
  fill="#96A0B5"
/>
<path
  d="M77.4243 25.4243C77.6586 25.1899 77.6586 24.8101 77.4243 24.5757L73.6059 20.7574C73.3716 20.523 72.9917 20.523 72.7574 20.7574C72.523 20.9917 72.523 21.3716 72.7574 21.6059L76.1515 25L72.7574 28.3941C72.523 28.6284 72.523 29.0083 72.7574 29.2426C72.9917 29.477 73.3716 29.477 73.6059 29.2426L77.4243 25.4243ZM70 25.6H77V24.4H70V25.6Z"
  fill="#96A0B5"
/>
<line
  y1="-0.5"
  x2="49"
  y2="-0.5"
  transform="matrix(4.37115e-08 1 1 -4.37115e-08 64 0)"
  stroke="#96A0B5"
/>
<line
  y1="-0.5"
  x2="49"
  y2="-0.5"
  transform="matrix(4.37115e-08 1 1 -4.37115e-08 81 0)"
  stroke="#96A0B5"
/>
<line
  y1="-0.5"
  x2="49"
  y2="-0.5"
  transform="matrix(4.37115e-08 1 1 -4.37115e-08 16 0)"
  stroke="#96A0B5"
/>
<path
  d="M18.5757 25.4243C18.3414 25.1899 18.3414 24.8101 18.5757 24.5757L22.3941 20.7574C22.6284 20.523 23.0083 20.523 23.2426 20.7574C23.477 20.9917 23.477 21.3716 23.2426 21.6059L19.8485 25L23.2426 28.3941C23.477 28.6284 23.477 29.0083 23.2426 29.2426C23.0083 29.477 22.6284 29.477 22.3941 29.2426L18.5757 25.4243ZM26 25.6H19V24.4H26V25.6Z"
  fill="#96A0B5"
/>
<path
  d="M33.5757 25.4243C33.3414 25.1899 33.3414 24.8101 33.5757 24.5757L37.3941 20.7574C37.6284 20.523 38.0083 20.523 38.2426 20.7574C38.477 20.9917 38.477 21.3716 38.2426 21.6059L34.8485 25L38.2426 28.3941C38.477 28.6284 38.477 29.0083 38.2426 29.2426C38.0083 29.477 37.6284 29.477 37.3941 29.2426L33.5757 25.4243ZM41 25.6H34V24.4H41V25.6Z"
  fill="#96A0B5"
/>
<line x1="32.5" y1="1" x2="32.5" y2="50" stroke="#96A0B5" />
</svg>`,
    [pocketDesignIconKeys.TELESCOPIC_POCKET_THREE_TRACK_SIX_PANEL_CENTER_OPENING]: `<svg width="93" height="50" viewBox="0 0 93 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="12.5" y1="1" x2="12.5" y2="50" stroke="#96A0B5" />
<rect
  x="-0.5"
  y="0.5"
  width="92"
  height="49"
  transform="matrix(-1 0 0 1 92 0)"
  stroke="#96A0B5"
/>
<rect
  x="-0.5"
  y="0.5"
  width="9"
  height="43"
  transform="matrix(-1 0 0 1 58 3)"
  stroke="#96A0B5"
/>
<path d="M43.952 20H48V27.692H43.952V20Z" fill="#96A0B5" />
<path d="M42 24H44V32H42V24Z" fill="#96A0B5" />
<path d="M50.048 20H46V27.692H50.048V20Z" fill="#96A0B5" />
<path d="M52 24H50V32H52V24Z" fill="#96A0B5" />
<rect
  x="-0.5"
  y="0.5"
  width="9"
  height="43"
  transform="matrix(-1 0 0 1 70 3)"
  stroke="#96A0B5"
/>
<rect
  x="-0.5"
  y="0.5"
  width="8"
  height="43"
  transform="matrix(-1 0 0 1 81 3)"
  stroke="#96A0B5"
/>
<rect
  x="-0.5"
  y="0.5"
  width="9"
  height="43"
  transform="matrix(-1 0 0 1 32 3)"
  stroke="#96A0B5"
/>
<rect
  x="-0.5"
  y="0.5"
  width="8"
  height="43"
  transform="matrix(-1 0 0 1 20 3)"
  stroke="#96A0B5"
/>
<rect
  x="-0.5"
  y="0.5"
  width="9"
  height="43"
  transform="matrix(-1 0 0 1 44 3)"
  stroke="#96A0B5"
/>
<line
  y1="-0.5"
  x2="49"
  y2="-0.5"
  transform="matrix(4.29175e-08 1 1 -4.45201e-08 47.4736 0)"
  stroke="#96A0B5"
/>
<path d="M58.5 0L58.5 49" stroke="#96A0B5" />
<line
  y1="-0.5"
  x2="49"
  y2="-0.5"
  transform="matrix(4.29175e-08 1 1 -4.45201e-08 71 0)"
  stroke="#96A0B5"
/>
<line
  y1="-0.5"
  x2="49"
  y2="-0.5"
  transform="matrix(4.29175e-08 1 1 -4.45201e-08 82 0)"
  stroke="#96A0B5"
/>
<line x1="35.3423" y1="1" x2="35.3423" y2="50" stroke="#96A0B5" />
<line x1="23.5" y1="1" x2="23.5" y2="50" stroke="#96A0B5" />
<path
  d="M68.4243 25.4243C68.6586 25.1899 68.6586 24.8101 68.4243 24.5757L64.6059 20.7574C64.3716 20.523 63.9917 20.523 63.7574 20.7574C63.523 20.9917 63.523 21.3716 63.7574 21.6059L67.1515 25L63.7574 28.3941C63.523 28.6284 63.523 29.0083 63.7574 29.2426C63.9917 29.477 64.3716 29.477 64.6059 29.2426L68.4243 25.4243ZM63 25.6H68V24.4H63V25.6Z"
  fill="#96A0B5"
/>
<path
  d="M57.4243 25.4243C57.6586 25.1899 57.6586 24.8101 57.4243 24.5757L53.6059 20.7574C53.3716 20.523 52.9917 20.523 52.7574 20.7574C52.523 20.9917 52.523 21.3716 52.7574 21.6059L56.1515 25L52.7574 28.3941C52.523 28.6284 52.523 29.0083 52.7574 29.2426C52.9917 29.477 53.3716 29.477 53.6059 29.2426L57.4243 25.4243ZM53 25.6H57V24.4H53V25.6Z"
  fill="#96A0B5"
/>
<path
  d="M36.5757 25.4243C36.3414 25.1899 36.3414 24.8101 36.5757 24.5757L40.3941 20.7574C40.6284 20.523 41.0083 20.523 41.2426 20.7574C41.477 20.9917 41.477 21.3716 41.2426 21.6059L37.8485 25L41.2426 28.3941C41.477 28.6284 41.477 29.0083 41.2426 29.2426C41.0083 29.477 40.6284 29.477 40.3941 29.2426L36.5757 25.4243ZM41 25.6H37V24.4H41V25.6Z"
  fill="#96A0B5"
/>
<path
  d="M25.5757 25.4243C25.3414 25.1899 25.3414 24.8101 25.5757 24.5757L29.3941 20.7574C29.6284 20.523 30.0083 20.523 30.2426 20.7574C30.477 20.9917 30.477 21.3716 30.2426 21.6059L26.8485 25L30.2426 28.3941C30.477 28.6284 30.477 29.0083 30.2426 29.2426C30.0083 29.477 29.6284 29.477 29.3941 29.2426L25.5757 25.4243ZM31 25.6H26V24.4H31V25.6Z"
  fill="#96A0B5"
/>
<path
  d="M13.5757 25.4243C13.3414 25.1899 13.3414 24.8101 13.5757 24.5757L17.3941 20.7574C17.6284 20.523 18.0083 20.523 18.2426 20.7574C18.477 20.9917 18.477 21.3716 18.2426 21.6059L14.8485 25L18.2426 28.3941C18.477 28.6284 18.477 29.0083 18.2426 29.2426C18.0083 29.477 17.6284 29.477 17.3941 29.2426L13.5757 25.4243ZM19 25.6H14V24.4H19V25.6Z"
  fill="#96A0B5"
/>
<path
  d="M80.4243 25.4243C80.6586 25.1899 80.6586 24.8101 80.4243 24.5757L76.6059 20.7574C76.3716 20.523 75.9917 20.523 75.7574 20.7574C75.523 20.9917 75.523 21.3716 75.7574 21.6059L79.1515 25L75.7574 28.3941C75.523 28.6284 75.523 29.0083 75.7574 29.2426C75.9917 29.477 76.3716 29.477 76.6059 29.2426L80.4243 25.4243ZM75 25.6H80V24.4H75V25.6Z"
  fill="#96A0B5"
/>
</svg>`,
    [pocketDesignIconKeys.TELESCOPIC_POCKET_FOUR_TRACK_EIGHT_PANEL_CENTER_OPENING]: `<svg width="108" height="50" viewBox="0 0 108 50" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="21.6055" y1="1" x2="21.6055" y2="50" stroke="#96A0B5" />
<line x1="10.5" y1="1" x2="10.5" y2="50" stroke="#96A0B5" />
<rect
  x="-0.5"
  y="0.5"
  width="107"
  height="49"
  transform="matrix(-1 0 0 1 107 0)"
  stroke="#96A0B5"
/>
<rect x="79.5" y="3.5" width="8" height="43" stroke="#96A0B5" />
<rect x="90.5" y="3.5" width="8" height="43" stroke="#96A0B5" />
<rect x="68.5" y="3.5" width="8" height="43" stroke="#96A0B5" />
<rect x="56.5" y="3.5" width="9" height="43" stroke="#96A0B5" />
<rect
  x="-0.5"
  y="0.5"
  width="8"
  height="43"
  transform="matrix(-1 0 0 1 40 3)"
  stroke="#96A0B5"
/>
<rect
  x="-0.5"
  y="0.5"
  width="8"
  height="43"
  transform="matrix(-1 0 0 1 29 3)"
  stroke="#96A0B5"
/>
<rect
  x="-0.5"
  y="0.5"
  width="8"
  height="43"
  transform="matrix(-1 0 0 1 18 3)"
  stroke="#96A0B5"
/>
<rect
  x="-0.5"
  y="0.5"
  width="8"
  height="43"
  transform="matrix(-1 0 0 1 51 3)"
  stroke="#96A0B5"
/>
<line
  y1="-0.5"
  x2="49"
  y2="-0.5"
  transform="matrix(4.12008e-08 1 1 -4.63751e-08 54.4946 0)"
  stroke="#96A0B5"
/>
<line x1="76.2471" y1="2.31876e-08" x2="76.2471" y2="49" stroke="#96A0B5" />
<line x1="87.5" y1="2.31876e-08" x2="87.5" y2="49" stroke="#96A0B5" />
<line x1="98.7104" y1="2.31876e-08" x2="98.7104" y2="49" stroke="#96A0B5" />
<line x1="65.5" y1="1" x2="65.5" y2="50" stroke="#96A0B5" />
<path d="M43.2998 1L43.2998 50" stroke="#96A0B5" />
<line x1="32.5" y1="1" x2="32.5" y2="50" stroke="#96A0B5" />
<path
  d="M75.4062 25.3536C75.6014 25.1583 75.6014 24.8417 75.4062 24.6464L72.2242 21.4645C72.0289 21.2692 71.7124 21.2692 71.5171 21.4645C71.3218 21.6597 71.3218 21.9763 71.5171 22.1716L74.3455 25L71.5171 27.8284C71.3218 28.0237 71.3218 28.3403 71.5171 28.5355C71.7124 28.7308 72.0289 28.7308 72.2242 28.5355L75.4062 25.3536ZM70 25.5H75.0526V24.5H70V25.5Z"
  fill="#96A0B5"
/>
<path
  d="M63.3536 25.3536C63.5488 25.1583 63.5488 24.8417 63.3536 24.6464L60.1716 21.4645C59.9763 21.2692 59.6597 21.2692 59.4645 21.4645C59.2692 21.6597 59.2692 21.9763 59.4645 22.1716L62.2929 25L59.4645 27.8284C59.2692 28.0237 59.2692 28.3403 59.4645 28.5355C59.6597 28.7308 59.9763 28.7308 60.1716 28.5355L63.3536 25.3536ZM59 25.5H63V24.5H59V25.5Z"
  fill="#96A0B5"
/>
<path
  d="M44.6463 25.3536C44.451 25.1583 44.451 24.8417 44.6463 24.6464L47.8282 21.4645C48.0235 21.2692 48.3401 21.2692 48.5353 21.4645C48.7306 21.6597 48.7306 21.9763 48.5353 22.1716L45.7069 25L48.5353 27.8284C48.7306 28.0237 48.7306 28.3403 48.5353 28.5355C48.3401 28.7308 48.0235 28.7308 47.8282 28.5355L44.6463 25.3536ZM49.0498 25.5H44.9998V24.5H49.0498V25.5Z"
  fill="#96A0B5"
/>
<path
  d="M33.92 25.3536C33.7247 25.1583 33.7247 24.8417 33.92 24.6464L37.102 21.4645C37.2972 21.2692 37.6138 21.2692 37.8091 21.4645C38.0043 21.6597 38.0043 21.9763 37.8091 22.1716L34.9806 25L37.8091 27.8284C38.0043 28.0237 38.0043 28.3403 37.8091 28.5355C37.6138 28.7308 37.2972 28.7308 37.102 28.5355L33.92 25.3536ZM39.3262 25.5H34.2735V24.5H39.3262V25.5Z"
  fill="#96A0B5"
/>
<path
  d="M22.8043 25.3536C22.609 25.1583 22.609 24.8417 22.8043 24.6464L25.9862 21.4645C26.1815 21.2692 26.4981 21.2692 26.6934 21.4645C26.8886 21.6597 26.8886 21.9763 26.6934 22.1716L23.8649 25L26.6934 27.8284C26.8886 28.0237 26.8886 28.3403 26.6934 28.5355C26.4981 28.7308 26.1815 28.7308 25.9862 28.5355L22.8043 25.3536ZM28.2104 25.5H23.1578V24.5H28.2104V25.5Z"
  fill="#96A0B5"
/>
<path
  d="M11.6993 25.3536C11.504 25.1583 11.504 24.8417 11.6993 24.6464L14.8813 21.4645C15.0765 21.2692 15.3931 21.2692 15.5884 21.4645C15.7836 21.6597 15.7836 21.9763 15.5884 22.1716L12.7599 25L15.5884 27.8284C15.7836 28.0237 15.7836 28.3403 15.5884 28.5355C15.3931 28.7308 15.0765 28.7308 14.8813 28.5355L11.6993 25.3536ZM17.1055 25.5H12.0528V24.5H17.1055V25.5Z"
  fill="#96A0B5"
/>
<path
  d="M86.4062 25.3536C86.6014 25.1583 86.6014 24.8417 86.4062 24.6464L83.2242 21.4645C83.0289 21.2692 82.7124 21.2692 82.5171 21.4645C82.3218 21.6597 82.3218 21.9763 82.5171 22.1716L85.3455 25L82.5171 27.8284C82.3218 28.0237 82.3218 28.3403 82.5171 28.5355C82.7124 28.7308 83.0289 28.7308 83.2242 28.5355L86.4062 25.3536ZM81 25.5H86.0526V24.5H81V25.5Z"
  fill="#96A0B5"
/>
<path
  d="M97.4272 25.3536C97.6224 25.1583 97.6224 24.8417 97.4272 24.6464L94.2452 21.4645C94.0499 21.2692 93.7334 21.2692 93.5381 21.4645C93.3428 21.6597 93.3428 21.9763 93.5381 22.1716L96.3665 25L93.5381 27.8284C93.3428 28.0237 93.3428 28.3403 93.5381 28.5355C93.7334 28.7308 94.0499 28.7308 94.2452 28.5355L97.4272 25.3536ZM92.021 25.5H97.0736V24.5H92.021V25.5Z"
  fill="#96A0B5"
/>
<path d="M56.048 20H52V27.692H56.048V20Z" fill="#96A0B5" />
<path d="M58 24H56V32H58V24Z" fill="#96A0B5" />
<path d="M51.952 20H56V27.692H51.952V20Z" fill="#96A0B5" />
<path d="M50 24H52V32H50V24Z" fill="#96A0B5" />
</svg>`,
  },
};
