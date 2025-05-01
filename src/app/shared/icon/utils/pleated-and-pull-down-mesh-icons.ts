import { IconPrefix } from '../models/icon-prefix';
import { IconPrefixType } from '../models/icon.model';

export const pleatedAndPullDownMeshIconKeys = {
  LEFT_PLEATED_MESH: 'leftPleatedMesh',
  BOTH_SIDE_PLEATED_MESH: 'bothSidePleatedMesh',
  DOUBLE_CENTER_PLEATED_MESH: 'doubleCenterPleatedMesh',
  SINGLE_CENTER_PLEATED_MESH: 'singleCenterPleatedMesh',
  PULL_DOWN_MESH: 'pullDownMesh',
} as const;

export type IconKey = typeof pleatedAndPullDownMeshIconKeys[keyof typeof pleatedAndPullDownMeshIconKeys];

export const PLEATED_AND_PULL_DOWN_MESH_ICONS: Partial<Record<IconPrefixType, Partial<Record<IconKey, string>>>> = {
  [IconPrefix.PLEATED_AND_PULL_DOWN_MESH]: {
    [pleatedAndPullDownMeshIconKeys.LEFT_PLEATED_MESH]: `<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 30.072 30">
                        <g id="Group_37427" data-name="Group 37427" transform="translate(-125.928 -470)">
                          <g id="Group_37399" data-name="Group 37399" transform="translate(-10706.806 2249.078)">
                            <g id="Group_37396" data-name="Group 37396" transform="translate(10832.806 -1779.078)">
                              <g id="Path_74656" data-name="Path 74656" transform="translate(0 0)" fill="none">
                                <path d="M0,0H30V30H0Z" stroke="none" />
                                <path
                                  d="M 0.9999980926513672 0.9999980926513672 L 0.9999980926513672 28.99999809265137 L 29 28.99999809265137 L 29 0.9999980926513672 L 0.9999980926513672 0.9999980926513672 M -1.9073486328125e-06 -1.9073486328125e-06 L 30 -1.9073486328125e-06 L 30 29.99999809265137 L -1.9073486328125e-06 29.99999809265137 L -1.9073486328125e-06 -1.9073486328125e-06 Z"
                                  stroke="none"
                                  fill="#96a0b5"
                                />
                              </g>
                              <path
                                id="Path_74657"
                                data-name="Path 74657"
                                d="M416-296.765v2.235h2.4V-299H416Zm1.564,0v1.446h-.73v-2.892h.73Z"
                                transform="translate(-397 311.765)"
                                fill="#96a0b5"
                              />
                              <g id="Path_74662" data-name="Path 74662" transform="translate(0.026 0)" fill="none">
                                <path d="M0,0H19.808V29.841H0Z" stroke="none" />
                                <path
                                  d="M 1 1 L 1 28.84075927734375 L 18.80753898620605 28.84075927734375 L 18.80753898620605 1 L 1 1 M 0 0 L 19.80753898620605 0 L 19.80753898620605 29.84075927734375 L 0 29.84075927734375 L 0 0 Z"
                                  stroke="none"
                                  fill="#96a0b5"
                                />
                              </g>
                              <path
                                id="Path_74661"
                                data-name="Path 74661"
                                d="M0,20.162"
                                transform="translate(21.971 9.168)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="0.5"
                              />
                            </g>
                          </g>
                          <g id="Group_37419" data-name="Group 37419" transform="translate(126 470)">
                            <g id="Group_14072" data-name="Group 14072" transform="translate(0 0)">
                              <g id="Path_20426" data-name="Path 20426" fill="#fff">
                                <path
                                  d="M 19.33349800109863 29.5 L 0.4999980330467224 29.5 L 0.4999980330467224 0.4999990463256836 L 19.33349800109863 0.4999990463256836 L 19.33349800109863 29.5 Z"
                                  stroke="none"
                                />
                                <path
                                  d="M 0.9999980926513672 0.9999980926513672 L 0.9999980926513672 29 L 18.83349800109863 29 L 18.83349800109863 0.9999980926513672 L 0.9999980926513672 0.9999980926513672 M -1.9073486328125e-06 -1.9073486328125e-06 L 19.83349800109863 -1.9073486328125e-06 L 19.83349800109863 30 L -1.9073486328125e-06 30 L -1.9073486328125e-06 -1.9073486328125e-06 Z"
                                  stroke="none"
                                  fill="#96a0b5"
                                />
                              </g>
                              <g id="Steel_trash" data-name="Steel trash" transform="translate(0.311 0.709)">
                                <path
                                  id="Path_20426-2"
                                  data-name="Path 20426"
                                  d="M16.482,38.32l1.883-2.5,1.883,2.5-1.5,1.989h1.256l.869-1.155.869,1.155H23L21.5,38.32l1.883-2.5,1.883,2.5-1.5,1.989h1.255l4.724-6.278V32.363l-1.345,1.786-1.883-2.5,1.883-2.5,1.344,1.786V29.264l-.717-.952.717-.952V25.69l-1.344,1.787-1.883-2.5,1.883-2.5,1.344,1.787V22.591l-.717-.952.717-.952V19.018L28.408,20.8l-1.883-2.5,1.883-2.5,1.345,1.786V15.919L26.8,12H24.991l-1.6,2.132L21.782,12H19.97l-1.6,2.132L16.761,12H14.949L12,15.919v1.668L13.345,15.8l1.883,2.5-1.883,2.5L12,19.018v1.668l.717.952L12,22.591v1.668l1.344-1.787,1.883,2.5-1.883,2.5L12,25.69v1.668l.717.952L12,29.264v1.668l1.344-1.786,1.883,2.5-1.883,2.5L12,32.363v1.668l4.724,6.278h1.255Zm0-6.672,1.883-2.5,1.883,2.5-1.883,2.5ZM21.5,24.975l1.883-2.5,1.883,2.5-1.883,2.5Zm1.256,3.336-1.883,2.5-1.883-2.5,1.883-2.5Zm-1.883-4.17-1.883-2.5,1.883-2.5,1.883,2.5Zm-.628.834-1.883,2.5-1.883-2.5,1.883-2.5Zm.628,12.511-1.883-2.5,1.883-2.5,1.883,2.5Zm.628-5.839,1.883-2.5,1.883,2.5-1.883,2.5Zm6.276,3.336-1.883,2.5-1.883-2.5,1.883-2.5Zm0-6.672-1.883,2.5-1.883-2.5,1.883-2.5Zm0-6.673-1.883,2.5-1.883-2.5,1.883-2.5ZM25.9,12.464l1.883,2.5-1.883,2.5-1.883-2.5ZM25.27,18.3l-1.883,2.5L21.5,18.3l1.883-2.5Zm-4.394-5.839,1.883,2.5-1.883,2.5-1.883-2.5ZM20.248,18.3l-1.883,2.5-1.883-2.5,1.883-2.5Zm-6.276-3.336,1.883-2.5,1.883,2.5-1.883,2.5Zm0,6.672,1.883-2.5,1.883,2.5-1.883,2.5Zm0,6.673,1.883-2.5,1.883,2.5-1.883,2.5Zm0,6.672,1.883-2.5,1.883,2.5-1.883,2.5Z"
                                  transform="translate(-11.27 -12)"
                                  fill="#96a0b5"
                                />
                                <line
                                  id="Line_167"
                                  data-name="Line 167"
                                  x2="2.481"
                                  y2="2.481"
                                  transform="translate(16.695 22.591) rotate(3)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-width="1"
                                />
                                <line
                                  id="Line_169"
                                  data-name="Line 169"
                                  x2="2.481"
                                  y2="2.481"
                                  transform="matrix(0.996, 0.087, -0.087, 0.996, 0.216, 0.887)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-width="1"
                                />
                                <path
                                  id="Path_74665"
                                  data-name="Path 74665"
                                  d="M0,0,3.308,2.3"
                                  transform="translate(13.855 25.491) rotate(17)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-width="1"
                                />
                                <line
                                  id="Line_170"
                                  data-name="Line 170"
                                  y1="3.308"
                                  x2="2.481"
                                  transform="translate(2.689 25.569)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-width="1"
                                />
                                <line
                                  id="Line_171"
                                  data-name="Line 171"
                                  y1="3.308"
                                  x2="2.481"
                                  transform="translate(0.103 22.291)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-width="1"
                                />
                                <line
                                  id="Line_172"
                                  data-name="Line 172"
                                  y1="3.308"
                                  x2="2.481"
                                  transform="translate(16.628 0.465)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-width="1"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>`,
    [pleatedAndPullDownMeshIconKeys.BOTH_SIDE_PLEATED_MESH]: `<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 30.696 30">
                        <g id="Group_37429" data-name="Group 37429" transform="translate(-219.304 -470)">
                          <g id="Group_37405" data-name="Group 37405" transform="translate(220 470)">
                            <g id="Group_37396" data-name="Group 37396" transform="translate(0)">
                              <g id="Path_74656" data-name="Path 74656" transform="translate(0 0)" fill="none">
                                <path d="M30,0H0V30H30Z" stroke="none" />
                                <path
                                  d="M 0.9999980926513672 0.9999980926513672 L 0.9999980926513672 28.99999809265137 L 29 28.99999809265137 L 29 0.9999980926513672 L 0.9999980926513672 0.9999980926513672 M -1.9073486328125e-06 -1.9073486328125e-06 L 30 -1.9073486328125e-06 L 30 29.99999809265137 L -1.9073486328125e-06 29.99999809265137 L -1.9073486328125e-06 -1.9073486328125e-06 Z"
                                  stroke="none"
                                  fill="#96a0b5"
                                />
                              </g>
                              <path
                                id="Path_74661"
                                data-name="Path 74661"
                                d="M0,20.162"
                                transform="translate(8.029 9.168)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="0.5"
                              />
                              <g id="Group_37406" data-name="Group 37406">
                                <path
                                  id="Path_74657"
                                  data-name="Path 74657"
                                  d="M418.4-296.765v2.235H416V-299h2.4Zm-1.564,0v1.446h.73v-2.892h-.73Z"
                                  transform="translate(-399.398 311.546)"
                                  fill="#96a0b5"
                                />
                                <g id="Path_74662" data-name="Path 74662" transform="translate(18.257)" fill="none">
                                  <path d="M11.717,0H0V29.841H11.717Z" stroke="none" />
                                  <path
                                    d="M 0.9999990463256836 1 L 0.9999990463256836 28.84075927734375 L 10.71671962738037 28.84075927734375 L 10.71671962738037 1 L 0.9999990463256836 1 M -9.5367431640625e-07 0 L 11.71671962738037 0 L 11.71671962738037 29.84075927734375 L -9.5367431640625e-07 29.84075927734375 L -9.5367431640625e-07 0 Z"
                                    stroke="none"
                                    fill="#96a0b5"
                                  />
                                </g>
                              </g>
                              <g id="Group_37407" data-name="Group 37407" transform="translate(0 0.159)">
                                <path
                                  id="Path_74657-2"
                                  data-name="Path 74657"
                                  d="M416-296.765v2.235h2.4V-299H416Zm1.564,0v1.446h-.73v-2.892h.73Z"
                                  transform="translate(-405.026 311.546)"
                                  fill="#96a0b5"
                                />
                                <g id="Path_74662-2" data-name="Path 74662" transform="translate(0)" fill="none">
                                  <path d="M0,0H11.717V29.841H0Z" stroke="none" />
                                  <path
                                    d="M 1.000000953674316 1 L 1.000000953674316 28.84075927734375 L 10.71684074401855 28.84075927734375 L 10.71684074401855 1 L 1.000000953674316 1 M 9.5367431640625e-07 0 L 11.71684074401855 0 L 11.71684074401855 29.84075927734375 L 9.5367431640625e-07 29.84075927734375 L 9.5367431640625e-07 0 Z"
                                    stroke="none"
                                    fill="#96a0b5"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                          <g id="Group_37422" data-name="Group 37422">
                            <g id="Group_37421" data-name="Group 37421" transform="translate(219.5 470)">
                              <g id="Group_14072" data-name="Group 14072" transform="translate(0.5 0)">
                                <g id="Path_20426" data-name="Path 20426" fill="#fff">
                                  <path
                                    d="M 10.97949600219727 29.5 L 0.4999960958957672 29.5 L 0.4999960958957672 0.4999990463256836 L 10.97949600219727 0.4999990463256836 L 10.97949600219727 29.5 Z"
                                    stroke="none"
                                  />
                                  <path
                                    d="M 0.9999961853027344 0.9999980926513672 L 0.9999961853027344 29 L 10.47949600219727 29 L 10.47949600219727 0.9999980926513672 L 0.9999961853027344 0.9999980926513672 M -3.814697265625e-06 -1.9073486328125e-06 L 11.47949600219727 -1.9073486328125e-06 L 11.47949600219727 30 L -3.814697265625e-06 30 L -3.814697265625e-06 -1.9073486328125e-06 Z"
                                    stroke="none"
                                    fill="#96a0b5"
                                  />
                                </g>
                                <g id="Steel_trash" data-name="Steel trash" transform="translate(0.311 0.709)">
                                  <path
                                    id="Path_20426-2"
                                    data-name="Path 20426"
                                    d="M14.373,38.32l1-2.5,1,2.5-.792,1.989h.665l.46-1.155.46,1.155h.665l-.792-1.989,1-2.5,1,2.5-.792,1.989H18.9l2.5-6.278V32.363l-.712,1.786-1-2.5,1-2.5.712,1.786V29.264l-.379-.952.379-.952V25.69l-.712,1.787-1-2.5,1-2.5.712,1.787V22.591l-.379-.952.379-.952V19.018L20.686,20.8l-1-2.5,1-2.5.712,1.786V15.919L19.837,12h-.959l-.849,2.132L17.179,12h-.96l-.849,2.132L14.521,12h-.959L12,15.919v1.668l.712-1.786,1,2.5-1,2.5L12,19.018v1.668l.379.952L12,22.591v1.668l.712-1.787,1,2.5-1,2.5L12,25.69v1.668l.379.952L12,29.264v1.668l.712-1.786,1,2.5-1,2.5L12,32.363v1.668l2.5,6.278h.664Zm0-6.672,1-2.5,1,2.5-1,2.5Zm2.658-6.673,1-2.5,1,2.5-1,2.5Zm.665,3.336-1,2.5-1-2.5,1-2.5Zm-1-4.17-1-2.5,1-2.5,1,2.5Zm-.332.834-1,2.5-1-2.5,1-2.5ZM16.7,37.486l-1-2.5,1-2.5,1,2.5Zm.332-5.839,1-2.5,1,2.5-1,2.5Zm3.323,3.336-1,2.5-1-2.5,1-2.5Zm0-6.672-1,2.5-1-2.5,1-2.5Zm0-6.673-1,2.5-1-2.5,1-2.5Zm-1-9.174,1,2.5-1,2.5-1-2.5ZM19.025,18.3l-1,2.5-1-2.5,1-2.5ZM16.7,12.464l1,2.5-1,2.5-1-2.5ZM16.367,18.3l-1,2.5-1-2.5,1-2.5Zm-3.323-3.336,1-2.5,1,2.5-1,2.5Zm0,6.672,1-2.5,1,2.5-1,2.5Zm0,6.673,1-2.5,1,2.5-1,2.5Zm0,6.672,1-2.5,1,2.5-1,2.5Z"
                                    transform="translate(-11.27 -12)"
                                    fill="#96a0b5"
                                  />
                                  <path
                                    id="Path_74667"
                                    data-name="Path 74667"
                                    d="M-.115-2.2l2.6,4.678"
                                    transform="translate(8.341 22.591) rotate(3)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.6"
                                  />
                                  <path
                                    id="Path_74668"
                                    data-name="Path 74668"
                                    d="M-.229-.973,2,2.481"
                                    transform="translate(0.103 0.791) rotate(13)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.7"
                                  />
                                  <path
                                    id="Path_74665"
                                    data-name="Path 74665"
                                    d="M0,0,3.308,2.3"
                                    transform="translate(7.733 25.333) rotate(25)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.6"
                                  />
                                  <line
                                    id="Line_170"
                                    data-name="Line 170"
                                    y1="3.489"
                                    x2="0.998"
                                    transform="matrix(0.985, 0.174, -0.174, 0.985, 2.031, 25.439)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.7"
                                  />
                                  <path
                                    id="Path_74669"
                                    data-name="Path 74669"
                                    d="M.034,2.921,1.5,0"
                                    transform="matrix(0.996, -0.087, 0.087, 0.996, 9.049, 0.384)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.7"
                                  />
                                </g>
                              </g>
                            </g>
                            <path
                              id="Path_74666"
                              data-name="Path 74666"
                              d="M0,0-.153,13.784"
                              transform="translate(225.316 484.467) rotate(21)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="0.5"
                            />
                          </g>
                          <g id="Group_37423" data-name="Group 37423" transform="translate(18.367)">
                            <g id="Group_37421-2" data-name="Group 37421" transform="translate(219.5 470)">
                              <g id="Group_14072-2" data-name="Group 14072" transform="translate(0.5 0)">
                                <g id="Path_20426-3" data-name="Path 20426" fill="#fff">
                                  <path
                                    d="M 10.97949600219727 29.5 L 0.4999960958957672 29.5 L 0.4999960958957672 0.4999990463256836 L 10.97949600219727 0.4999990463256836 L 10.97949600219727 29.5 Z"
                                    stroke="none"
                                  />
                                  <path
                                    d="M 0.9999961853027344 0.9999980926513672 L 0.9999961853027344 29 L 10.47949600219727 29 L 10.47949600219727 0.9999980926513672 L 0.9999961853027344 0.9999980926513672 M -3.814697265625e-06 -1.9073486328125e-06 L 11.47949600219727 -1.9073486328125e-06 L 11.47949600219727 30 L -3.814697265625e-06 30 L -3.814697265625e-06 -1.9073486328125e-06 Z"
                                    stroke="none"
                                    fill="#96a0b5"
                                  />
                                </g>
                                <g id="Steel_trash-2" data-name="Steel trash" transform="translate(0.311 0.709)">
                                  <path
                                    id="Path_20426-4"
                                    data-name="Path 20426"
                                    d="M14.373,38.32l1-2.5,1,2.5-.792,1.989h.665l.46-1.155.46,1.155h.665l-.792-1.989,1-2.5,1,2.5-.792,1.989H18.9l2.5-6.278V32.363l-.712,1.786-1-2.5,1-2.5.712,1.786V29.264l-.379-.952.379-.952V25.69l-.712,1.787-1-2.5,1-2.5.712,1.787V22.591l-.379-.952.379-.952V19.018L20.686,20.8l-1-2.5,1-2.5.712,1.786V15.919L19.837,12h-.959l-.849,2.132L17.179,12h-.96l-.849,2.132L14.521,12h-.959L12,15.919v1.668l.712-1.786,1,2.5-1,2.5L12,19.018v1.668l.379.952L12,22.591v1.668l.712-1.787,1,2.5-1,2.5L12,25.69v1.668l.379.952L12,29.264v1.668l.712-1.786,1,2.5-1,2.5L12,32.363v1.668l2.5,6.278h.664Zm0-6.672,1-2.5,1,2.5-1,2.5Zm2.658-6.673,1-2.5,1,2.5-1,2.5Zm.665,3.336-1,2.5-1-2.5,1-2.5Zm-1-4.17-1-2.5,1-2.5,1,2.5Zm-.332.834-1,2.5-1-2.5,1-2.5ZM16.7,37.486l-1-2.5,1-2.5,1,2.5Zm.332-5.839,1-2.5,1,2.5-1,2.5Zm3.323,3.336-1,2.5-1-2.5,1-2.5Zm0-6.672-1,2.5-1-2.5,1-2.5Zm0-6.673-1,2.5-1-2.5,1-2.5Zm-1-9.174,1,2.5-1,2.5-1-2.5ZM19.025,18.3l-1,2.5-1-2.5,1-2.5ZM16.7,12.464l1,2.5-1,2.5-1-2.5ZM16.367,18.3l-1,2.5-1-2.5,1-2.5Zm-3.323-3.336,1-2.5,1,2.5-1,2.5Zm0,6.672,1-2.5,1,2.5-1,2.5Zm0,6.673,1-2.5,1,2.5-1,2.5Zm0,6.672,1-2.5,1,2.5-1,2.5Z"
                                    transform="translate(-11.27 -12)"
                                    fill="#96a0b5"
                                  />
                                  <path
                                    id="Path_74667-2"
                                    data-name="Path 74667"
                                    d="M-.115-2.2l2.6,4.678"
                                    transform="translate(8.341 22.591) rotate(3)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.6"
                                  />
                                  <path
                                    id="Path_74668-2"
                                    data-name="Path 74668"
                                    d="M-.229-.973,2,2.481"
                                    transform="translate(0.103 0.791) rotate(13)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.7"
                                  />
                                  <path
                                    id="Path_74665-2"
                                    data-name="Path 74665"
                                    d="M0,0,3.308,2.3"
                                    transform="translate(7.733 25.333) rotate(25)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.6"
                                  />
                                  <line
                                    id="Line_170-2"
                                    data-name="Line 170"
                                    y1="3.489"
                                    x2="0.998"
                                    transform="matrix(0.985, 0.174, -0.174, 0.985, 2.031, 25.439)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.7"
                                  />
                                  <path
                                    id="Path_74669-2"
                                    data-name="Path 74669"
                                    d="M.034,2.921,1.5,0"
                                    transform="matrix(0.996, -0.087, 0.087, 0.996, 9.049, 0.384)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.7"
                                  />
                                </g>
                              </g>
                            </g>
                            <path
                              id="Path_74666-2"
                              data-name="Path 74666"
                              d="M0,0-.153,13.784"
                              transform="translate(225.316 484.467) rotate(21)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="0.5"
                            />
                          </g>
                        </g>
                      </svg>`,
    [pleatedAndPullDownMeshIconKeys.DOUBLE_CENTER_PLEATED_MESH]: `<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 30 30">
                        <g id="Group_37430" data-name="Group 37430" transform="translate(-267 -470)">
                          <g id="Group_37408" data-name="Group 37408" transform="translate(267 470)">
                            <g id="Group_37396" data-name="Group 37396" transform="translate(0)">
                              <g id="Path_74656" data-name="Path 74656" transform="translate(0 0)" fill="none">
                                <path d="M30,0H0V30H30Z" stroke="none" />
                                <path
                                  d="M 0.9999980926513672 0.9999980926513672 L 0.9999980926513672 28.99999809265137 L 29 28.99999809265137 L 29 0.9999980926513672 L 0.9999980926513672 0.9999980926513672 M -1.9073486328125e-06 -1.9073486328125e-06 L 30 -1.9073486328125e-06 L 30 29.99999809265137 L -1.9073486328125e-06 29.99999809265137 L -1.9073486328125e-06 -1.9073486328125e-06 Z"
                                  stroke="none"
                                  fill="#96a0b5"
                                />
                              </g>
                              <path
                                id="Path_74661"
                                data-name="Path 74661"
                                d="M0,20.162"
                                transform="translate(8.029 9.168)"
                                fill="none"
                                stroke="#96a0b5"
                                stroke-width="0.5"
                              />
                              <g id="Group_37407" data-name="Group 37407" transform="translate(1 0)">
                                <path
                                  id="Path_74657"
                                  data-name="Path 74657"
                                  d="M416-296.765v2.235h2.4V-299H416Zm1.564,0v1.446h-.73v-2.892h.73Z"
                                  transform="translate(-415.026 311.546)"
                                  fill="#96a0b5"
                                />
                                <g id="Path_74662" data-name="Path 74662" transform="translate(2)" fill="none">
                                  <path d="M0,0H9.307V29.841H0Z" stroke="none" />
                                  <path
                                    d="M 1.000003814697266 1 L 1.000003814697266 28.84075927734375 L 8.306683540344238 28.84075927734375 L 8.306683540344238 1 L 1.000003814697266 1 M 3.814697265625e-06 0 L 9.306683540344238 0 L 9.306683540344238 29.84075927734375 L 3.814697265625e-06 29.84075927734375 L 3.814697265625e-06 0 Z"
                                    stroke="none"
                                    fill="#96a0b5"
                                  />
                                </g>
                              </g>
                              <g id="Group_37409" data-name="Group 37409" transform="translate(17)">
                                <path
                                  id="Path_74657-2"
                                  data-name="Path 74657"
                                  d="M418.4-296.765v2.235H416V-299h2.4Zm-1.564,0v1.446h.73v-2.892h-.73Z"
                                  transform="translate(-407.656 311.546)"
                                  fill="#96a0b5"
                                />
                                <g id="Path_74662-2" data-name="Path 74662" transform="translate(0 0)" fill="none">
                                  <path d="M9.307,0H0V29.841H9.307Z" stroke="none" />
                                  <path
                                    d="M 1.000002861022949 1 L 1.000002861022949 28.84075927734375 L 8.306802749633789 28.84075927734375 L 8.306802749633789 1 L 1.000002861022949 1 M 2.86102294921875e-06 0 L 9.306803703308105 0 L 9.306803703308105 29.84075927734375 L 2.86102294921875e-06 29.84075927734375 L 2.86102294921875e-06 0 Z"
                                    stroke="none"
                                    fill="#96a0b5"
                                  />
                                </g>
                              </g>
                            </g>
                          </g>
                          <g id="Group_37424" data-name="Group 37424" transform="translate(50.367)">
                            <g id="Group_37421" data-name="Group 37421" transform="translate(219.5 470)">
                              <g id="Group_14072" data-name="Group 14072" transform="translate(0.133 0)">
                                <g id="Path_20426" data-name="Path 20426" transform="translate(0.367)" fill="#fff">
                                  <path
                                    d="M 8.256343841552734 29.5 L 0.5000038146972656 29.5 L 0.5000038146972656 0.4999990463256836 L 8.256343841552734 0.4999990463256836 L 8.256343841552734 29.5 Z"
                                    stroke="none"
                                  />
                                  <path
                                    d="M 1.000003814697266 0.9999980926513672 L 1.000003814697266 29 L 7.756343841552734 29 L 7.756343841552734 0.9999980926513672 L 1.000003814697266 0.9999980926513672 M 3.814697265625e-06 -1.9073486328125e-06 L 8.756343841552734 -1.9073486328125e-06 L 8.756343841552734 30 L 3.814697265625e-06 30 L 3.814697265625e-06 -1.9073486328125e-06 Z"
                                    stroke="none"
                                    fill="#96a0b5"
                                  />
                                </g>
                                <g id="Path_74670" data-name="Path 74670" transform="translate(0.367)" fill="#fff">
                                  <path
                                    d="M 8.256343841552734 29.5 L 0.5000038146972656 29.5 L 0.5000038146972656 0.4999990463256836 L 8.256343841552734 0.4999990463256836 L 8.256343841552734 29.5 Z"
                                    stroke="none"
                                  />
                                  <path
                                    d="M 1.000003814697266 0.9999980926513672 L 1.000003814697266 29 L 7.756343841552734 29 L 7.756343841552734 0.9999980926513672 L 1.000003814697266 0.9999980926513672 M 3.814697265625e-06 -1.9073486328125e-06 L 8.756343841552734 -1.9073486328125e-06 L 8.756343841552734 30 L 3.814697265625e-06 30 L 3.814697265625e-06 -1.9073486328125e-06 Z"
                                    stroke="none"
                                    fill="#96a0b5"
                                  />
                                </g>
                                <g id="Steel_trash" data-name="Steel trash" transform="translate(0 0.5)">
                                  <path
                                    id="Path_20426-2"
                                    data-name="Path 20426"
                                    d="M13.685,38.32l.708-2.5.708,2.5-.563,1.989h.472l.327-1.155.327,1.155h.472l-.563-1.989.708-2.5.708,2.5-.563,1.989H16.9l1.776-6.278V32.363l-.506,1.786-.708-2.5.708-2.5.505,1.786V29.264l-.269-.952.269-.952V25.69l-.505,1.787-.708-2.5.708-2.5.505,1.787V22.591l-.269-.952.269-.952V19.018L18.169,20.8l-.708-2.5.708-2.5.506,1.786V15.919L17.566,12h-.681l-.6,2.132L15.678,12H15l-.6,2.132L13.79,12h-.681L12,15.919v1.668l.506-1.786.708,2.5-.708,2.5L12,19.018v1.668l.269.952L12,22.591v1.668l.505-1.787.708,2.5-.708,2.5L12,25.69v1.668l.269.952L12,29.264v1.668l.505-1.786.708,2.5-.708,2.5L12,32.363v1.668l1.776,6.278h.472Zm0-6.672.708-2.5.708,2.5-.708,2.5Zm1.888-6.673.708-2.5.708,2.5-.708,2.5Zm.472,3.336-.708,2.5-.708-2.5.708-2.5Zm-.708-4.17-.708-2.5.708-2.5.708,2.5Zm-.236.834-.708,2.5-.708-2.5.708-2.5Zm.236,12.511-.708-2.5.708-2.5.708,2.5Zm.236-5.839.708-2.5.708,2.5-.708,2.5Zm2.36,3.336-.708,2.5-.708-2.5.708-2.5Zm0-6.672-.708,2.5-.708-2.5.708-2.5Zm0-6.673-.708,2.5-.708-2.5.708-2.5Zm-.708-9.174.708,2.5-.708,2.5-.708-2.5ZM16.989,18.3l-.708,2.5-.708-2.5.708-2.5Zm-1.652-5.839.708,2.5-.708,2.5-.708-2.5ZM15.1,18.3l-.708,2.5-.708-2.5.708-2.5Zm-2.36-3.336.708-2.5.708,2.5-.708,2.5Zm0,6.672.708-2.5.708,2.5-.708,2.5Zm0,6.673.708-2.5.708,2.5-.708,2.5Zm0,6.672.708-2.5.708,2.5-.708,2.5Z"
                                    transform="translate(-10.592 -11.791)"
                                    fill="#96a0b5"
                                  />
                                  <path
                                    id="Path_74667"
                                    data-name="Path 74667"
                                    d="M1.2,1.84,2.6,4.678"
                                    transform="translate(6.296 20.6) rotate(3)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.5"
                                  />
                                  <path
                                    id="Path_74668"
                                    data-name="Path 74668"
                                    d="M0,0,2.229,3.454"
                                    transform="translate(0.777 0.25) rotate(13)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.5"
                                  />
                                  <path
                                    id="Path_74665"
                                    data-name="Path 74665"
                                    d="M.565-.309,3.308,2.3"
                                    transform="translate(5.688 25.542) rotate(25)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.5"
                                  />
                                  <line
                                    id="Line_170"
                                    data-name="Line 170"
                                    y1="3.489"
                                    x2="0.998"
                                    transform="translate(2.075 25.656) rotate(8)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.5"
                                  />
                                  <path
                                    id="Path_74669"
                                    data-name="Path 74669"
                                    d="M0,2.921,1.466,0"
                                    transform="matrix(0.996, -0.087, 0.087, 0.996, 7.037, 1.228)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.5"
                                  />
                                </g>
                              </g>
                            </g>
                            <path
                              id="Path_74666"
                              data-name="Path 74666"
                              d="M0,0-.153,13.784"
                              transform="translate(224.479 483.242) rotate(16)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="0.5"
                            />
                          </g>
                          <g id="Group_37425" data-name="Group 37425" transform="translate(64.367)">
                            <g id="Group_37421-2" data-name="Group 37421" transform="translate(219.5 470)">
                              <g id="Group_14072-2" data-name="Group 14072" transform="translate(0.133 0)">
                                <g id="Path_20426-3" data-name="Path 20426" transform="translate(0.367)" fill="#fff">
                                  <path
                                    d="M 8.256343841552734 29.5 L 0.5000038146972656 29.5 L 0.5000038146972656 0.4999990463256836 L 8.256343841552734 0.4999990463256836 L 8.256343841552734 29.5 Z"
                                    stroke="none"
                                  />
                                  <path
                                    d="M 1.000003814697266 0.9999980926513672 L 1.000003814697266 29 L 7.756343841552734 29 L 7.756343841552734 0.9999980926513672 L 1.000003814697266 0.9999980926513672 M 3.814697265625e-06 -1.9073486328125e-06 L 8.756343841552734 -1.9073486328125e-06 L 8.756343841552734 30 L 3.814697265625e-06 30 L 3.814697265625e-06 -1.9073486328125e-06 Z"
                                    stroke="none"
                                    fill="#96a0b5"
                                  />
                                </g>
                                <g id="Path_74670-2" data-name="Path 74670" transform="translate(0.367)" fill="#fff">
                                  <path
                                    d="M 8.256343841552734 29.5 L 0.5000038146972656 29.5 L 0.5000038146972656 0.4999990463256836 L 8.256343841552734 0.4999990463256836 L 8.256343841552734 29.5 Z"
                                    stroke="none"
                                  />
                                  <path
                                    d="M 1.000003814697266 0.9999980926513672 L 1.000003814697266 29 L 7.756343841552734 29 L 7.756343841552734 0.9999980926513672 L 1.000003814697266 0.9999980926513672 M 3.814697265625e-06 -1.9073486328125e-06 L 8.756343841552734 -1.9073486328125e-06 L 8.756343841552734 30 L 3.814697265625e-06 30 L 3.814697265625e-06 -1.9073486328125e-06 Z"
                                    stroke="none"
                                    fill="#96a0b5"
                                  />
                                </g>
                                <g id="Steel_trash-2" data-name="Steel trash" transform="translate(0 0.5)">
                                  <path
                                    id="Path_20426-4"
                                    data-name="Path 20426"
                                    d="M13.685,38.32l.708-2.5.708,2.5-.563,1.989h.472l.327-1.155.327,1.155h.472l-.563-1.989.708-2.5.708,2.5-.563,1.989H16.9l1.776-6.278V32.363l-.506,1.786-.708-2.5.708-2.5.505,1.786V29.264l-.269-.952.269-.952V25.69l-.505,1.787-.708-2.5.708-2.5.505,1.787V22.591l-.269-.952.269-.952V19.018L18.169,20.8l-.708-2.5.708-2.5.506,1.786V15.919L17.566,12h-.681l-.6,2.132L15.678,12H15l-.6,2.132L13.79,12h-.681L12,15.919v1.668l.506-1.786.708,2.5-.708,2.5L12,19.018v1.668l.269.952L12,22.591v1.668l.505-1.787.708,2.5-.708,2.5L12,25.69v1.668l.269.952L12,29.264v1.668l.505-1.786.708,2.5-.708,2.5L12,32.363v1.668l1.776,6.278h.472Zm0-6.672.708-2.5.708,2.5-.708,2.5Zm1.888-6.673.708-2.5.708,2.5-.708,2.5Zm.472,3.336-.708,2.5-.708-2.5.708-2.5Zm-.708-4.17-.708-2.5.708-2.5.708,2.5Zm-.236.834-.708,2.5-.708-2.5.708-2.5Zm.236,12.511-.708-2.5.708-2.5.708,2.5Zm.236-5.839.708-2.5.708,2.5-.708,2.5Zm2.36,3.336-.708,2.5-.708-2.5.708-2.5Zm0-6.672-.708,2.5-.708-2.5.708-2.5Zm0-6.673-.708,2.5-.708-2.5.708-2.5Zm-.708-9.174.708,2.5-.708,2.5-.708-2.5ZM16.989,18.3l-.708,2.5-.708-2.5.708-2.5Zm-1.652-5.839.708,2.5-.708,2.5-.708-2.5ZM15.1,18.3l-.708,2.5-.708-2.5.708-2.5Zm-2.36-3.336.708-2.5.708,2.5-.708,2.5Zm0,6.672.708-2.5.708,2.5-.708,2.5Zm0,6.673.708-2.5.708,2.5-.708,2.5Zm0,6.672.708-2.5.708,2.5-.708,2.5Z"
                                    transform="translate(-10.592 -11.791)"
                                    fill="#96a0b5"
                                  />
                                  <path
                                    id="Path_74667-2"
                                    data-name="Path 74667"
                                    d="M1.2,1.84,2.6,4.678"
                                    transform="translate(6.296 20.6) rotate(3)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.5"
                                  />
                                  <path
                                    id="Path_74668-2"
                                    data-name="Path 74668"
                                    d="M0,0,2.229,3.454"
                                    transform="translate(0.777 0.25) rotate(13)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.5"
                                  />
                                  <path
                                    id="Path_74665-2"
                                    data-name="Path 74665"
                                    d="M.565-.309,3.308,2.3"
                                    transform="translate(5.688 25.542) rotate(25)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.5"
                                  />
                                  <line
                                    id="Line_170-2"
                                    data-name="Line 170"
                                    y1="3.489"
                                    x2="0.998"
                                    transform="translate(2.075 25.656) rotate(8)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.5"
                                  />
                                  <path
                                    id="Path_74669-2"
                                    data-name="Path 74669"
                                    d="M0,2.921,1.466,0"
                                    transform="matrix(0.996, -0.087, 0.087, 0.996, 7.037, 1.228)"
                                    fill="none"
                                    stroke="#96a0b5"
                                    stroke-width="0.5"
                                  />
                                </g>
                              </g>
                            </g>
                            <path
                              id="Path_74666-2"
                              data-name="Path 74666"
                              d="M0,0-.153,13.784"
                              transform="translate(224.479 483.242) rotate(16)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="0.5"
                            />
                          </g>
                        </g>
                      </svg>`,
    [pleatedAndPullDownMeshIconKeys.SINGLE_CENTER_PLEATED_MESH]: `<svg width="43" height="43" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1 1V29H29V1H1ZM0 0H30V30H0V0Z" fill="#96A0B5" />
                        <path
                          d="M2.5 14.7809V17.0159H4.89999V12.5459H2.5V14.7809ZM4.064 14.7809V16.2269H3.33401V13.3349H4.064V14.7809Z"
                          fill="#96A0B5"
                        />
                        <path
                          d="M27.7437 14.7809V17.0159H25.3438V12.5459H27.7437V14.7809ZM26.1797 14.7809V16.2269H26.9098V13.3349H26.1797V14.7809Z"
                          fill="#96A0B5"
                        />
                        <rect x="5" y="0.5" width="19" height="29" stroke="#96A0B5" />
                        <mask id="path-5-inside-1_374_356" fill="white">
                          <path d="M5.5 0H25.5V30H5.5V0Z" />
                        </mask>
                        <path d="M23.5 0V30H27.5V0H23.5Z" fill="#96A0B5" mask="url(#path-5-inside-1_374_356)" />
                        <path
                          d="M10.0444 26.9625L11.9536 24.4014L13.8628 26.9625L12.3419 29H13.6154L14.4965 27.8168L15.3775 29H16.653L15.1322 26.9625L17.0414 24.4014L18.9506 26.9625L17.4297 29H18.7022L23.4919 22.5688V20.86L22.1282 22.6896L20.219 20.1286L22.1282 17.5676L23.4909 19.3972V17.6854L22.7639 16.7102L23.4909 15.7349V14.0242L22.1282 15.8548L20.219 13.2938L22.1282 10.7327L23.4909 12.5634V10.8495L22.7639 9.87428L23.4909 8.89904V7.1893L22.1363 9.0148L20.2271 6.45378L22.1363 3.89276L23.5 5.72235V4.01466L20.5059 0H18.6717L17.0495 2.18404L15.4181 0H13.5809L11.9586 2.18404L10.3272 0H8.49003L5.5 4.01466V5.72337L6.86371 3.89276L8.77291 6.45378L6.86371 9.0148L5.5 7.1893V8.89802L6.22698 9.87326L5.5 10.8495V12.5582L6.8627 10.7276L8.7719 13.2886L6.8627 15.8497L5.5 14.0242V15.7329L6.22698 16.7081L5.5 17.6854V19.3941L6.8627 17.5645L8.7719 20.1255L6.8627 22.6866L5.5 20.86V22.5688L10.2897 29H11.5622L10.0444 26.9625ZM10.0444 20.1276L11.9536 17.5666L13.8628 20.1276L11.9536 22.6886L10.0444 20.1276ZM15.1322 13.2917L17.0414 10.7307L18.9506 13.2917L17.0414 15.8527L15.1322 13.2917ZM16.4057 16.7091L14.4965 19.2702L12.5873 16.7091L14.4965 14.1481L16.4057 16.7091ZM14.4965 12.4374L12.5873 9.87633L14.4965 7.31531L16.4057 9.87633L14.4965 12.4374ZM13.8597 13.2917L11.9505 15.8527L10.0413 13.2917L11.9505 10.7307L13.8597 13.2917ZM14.4965 26.1081L12.5873 23.5471L14.4965 20.986L16.4057 23.5471L14.4965 26.1081ZM15.1332 20.1266L17.0424 17.5655L18.9516 20.1266L17.0424 22.6876L15.1332 20.1266ZM21.4965 23.544L19.5873 26.105L17.6781 23.544L19.5873 20.983L21.4965 23.544ZM21.4965 16.7091L19.5873 19.2702L17.6781 16.7091L19.5873 14.1481L21.4965 16.7091ZM21.4965 9.87326L19.5873 12.4343L17.6781 9.87326L19.5873 7.31223L21.4965 9.87326ZM19.5934 0.475326L21.5026 3.03635L19.5934 5.59737L17.6842 3.03635L19.5934 0.475326ZM18.9546 6.45378L17.0454 9.0148L15.1322 6.45378L17.0414 3.89276L18.9546 6.45378ZM14.4995 0.472253L16.4087 3.03328L14.4995 5.5943L12.5903 3.03328L14.4995 0.472253ZM13.8628 6.45378L11.9536 9.0148L10.0444 6.45378L11.9536 3.89276L13.8628 6.45378ZM7.49944 3.03635L9.40863 0.475326L11.3178 3.03635L9.40863 5.59737L7.49944 3.03635ZM7.49944 9.87121L9.40863 7.31018L11.3178 9.87121L9.40863 12.4322L7.49944 9.87121ZM7.49944 16.7071L9.40863 14.1461L11.3178 16.7071L9.40863 19.2681L7.49944 16.7071ZM7.49944 23.5419L9.40863 20.9809L11.3178 23.5419L9.40863 26.103L7.49944 23.5419Z"
                          fill="#96A0B5"
                        />
                        <path d="M12 16.5L5 26" stroke="#96A0B5" />
                        <path d="M14.5 20L7.5 29.5" stroke="#96A0B5" />
                        <path d="M17 23.5L21.5 29.5" stroke="#96A0B5" />
                        <path d="M20.1592 20.8872L24.3414 27.1129" stroke="#96A0B5" />
                      </svg>`,
    [pleatedAndPullDownMeshIconKeys.PULL_DOWN_MESH]: `<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 30.223 29.777">
                        <g id="Group_37431" data-name="Group 37431" transform="translate(-314 -470.724)">
                          <g id="Group_37412" data-name="Group 37412" transform="translate(21.147 -36.263)">
                            <g id="Group_37410" data-name="Group 37410" transform="translate(292.853 507.263)">
                              <g id="Group_37396" data-name="Group 37396" transform="translate(0 0)">
                                <g id="Path_74656" data-name="Path 74656" fill="none">
                                  <path d="M30,0H0V15H30Z" stroke="none" />
                                  <path
                                    d="M 0.9999980926513672 0.9999990463256836 L 0.9999980926513672 13.99999809265137 L 29 13.99999809265137 L 29 0.9999990463256836 L 0.9999980926513672 0.9999990463256836 M -1.9073486328125e-06 -9.5367431640625e-07 L 30 -9.5367431640625e-07 L 30 14.99999809265137 L -1.9073486328125e-06 14.99999809265137 L -1.9073486328125e-06 -9.5367431640625e-07 Z"
                                    stroke="none"
                                    fill="#96a0b5"
                                  />
                                </g>
                                <path
                                  id="Path_74661"
                                  data-name="Path 74661"
                                  d="M0,20.162"
                                  transform="translate(8.029 -5.832)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-width="0.5"
                                />
                              </g>
                              <g id="Group_37411" data-name="Group 37411" transform="translate(14.458 15)">
                                <path
                                  id="Path_74664"
                                  data-name="Path 74664"
                                  d="M0,0,.047,3.483"
                                  transform="translate(0.495)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-width="1"
                                />
                                <circle
                                  id="Ellipse_387"
                                  data-name="Ellipse 387"
                                  cx="2"
                                  cy="2"
                                  r="2"
                                  transform="translate(-1.458 2.803)"
                                  fill="#96a0b5"
                                />
                              </g>
                            </g>
                            <path
                              id="Path_74663"
                              data-name="Path 74663"
                              d="M12377.867-1805.6v11.7l29.223-.005V-1805.6"
                              transform="translate(-12084.515 2330.167)"
                              fill="none"
                              stroke="#96a0b5"
                              stroke-width="1"
                            />
                          </g>
                          <g id="Group_37426" data-name="Group 37426" transform="translate(344 470.5) rotate(90)">
                            <g id="Group_14072" data-name="Group 14072" transform="translate(0.5 0)">
                              <g id="Path_20426" data-name="Path 20426" fill="#fff">
                                <path
                                  d="M 14.3682222366333 29.5 L 0.5000025629997253 29.5 L 0.5000025629997253 0.4999990463256836 L 14.3682222366333 0.4999990463256836 L 14.3682222366333 29.5 Z"
                                  stroke="none"
                                />
                                <path
                                  d="M 1.000002861022949 0.9999980926513672 L 1.000002861022949 29 L 13.8682222366333 29 L 13.8682222366333 0.9999980926513672 L 1.000002861022949 0.9999980926513672 M 2.86102294921875e-06 -1.9073486328125e-06 L 14.8682222366333 -1.9073486328125e-06 L 14.8682222366333 30 L 2.86102294921875e-06 30 L 2.86102294921875e-06 -1.9073486328125e-06 Z"
                                  stroke="none"
                                  fill="#96a0b5"
                                />
                              </g>
                              <g id="Steel_trash" data-name="Steel trash" transform="translate(0.311 0.709)">
                                <path
                                  id="Path_20426-2"
                                  data-name="Path 20426"
                                  d="M15.229,38.32l1.356-2.5,1.356,2.5-1.078,1.989h.9l.626-1.155.626,1.155h.9L18.845,38.32l1.356-2.5,1.356,2.5L20.48,40.309h.9l3.4-6.278V32.363l-.969,1.786-1.356-2.5,1.356-2.5.968,1.786V29.264l-.516-.952.516-.952V25.69l-.968,1.787-1.356-2.5,1.356-2.5.968,1.787V22.591l-.516-.952.516-.952V19.018L23.818,20.8l-1.356-2.5,1.356-2.5.969,1.786V15.919L22.662,12H21.357L20.2,14.132,19.046,12H17.741l-1.156,2.132L15.429,12H14.124L12,15.919v1.668l.969-1.786,1.356,2.5-1.356,2.5L12,19.018v1.668l.516.952L12,22.591v1.668l.968-1.787,1.356,2.5-1.356,2.5L12,25.69v1.668l.516.952L12,29.264v1.668l.968-1.786,1.356,2.5-1.356,2.5L12,32.363v1.668l3.4,6.278h.9Zm0-6.672,1.356-2.5,1.356,2.5-1.356,2.5Zm3.617-6.673,1.356-2.5,1.356,2.5-1.356,2.5Zm.9,3.336-1.356,2.5-1.356-2.5,1.356-2.5Zm-1.356-4.17-1.356-2.5,1.356-2.5,1.356,2.5Zm-.452.834-1.356,2.5-1.356-2.5,1.356-2.5Zm.452,12.511-1.356-2.5,1.356-2.5,1.356,2.5Zm.452-5.839,1.356-2.5,1.356,2.5L20.2,34.15Zm4.521,3.336-1.356,2.5-1.356-2.5,1.356-2.5Zm0-6.672-1.356,2.5-1.356-2.5,1.356-2.5Zm0-6.673-1.356,2.5-1.356-2.5,1.357-2.5ZM22.01,12.464l1.356,2.5-1.356,2.5-1.356-2.5ZM21.558,18.3l-1.356,2.5-1.356-2.5L20.2,15.8Zm-3.165-5.839,1.356,2.5-1.356,2.5-1.356-2.5ZM17.941,18.3l-1.356,2.5-1.356-2.5,1.356-2.5Zm-4.521-3.336,1.356-2.5,1.356,2.5-1.356,2.5Zm0,6.672,1.356-2.5,1.356,2.5-1.356,2.5Zm0,6.673,1.356-2.5,1.356,2.5-1.357,2.5Zm0,6.672,1.356-2.5,1.356,2.5-1.356,2.5Z"
                                  transform="translate(-11.27 -12)"
                                  fill="#96a0b5"
                                />
                                <line
                                  id="Line_167"
                                  data-name="Line 167"
                                  x2="2.481"
                                  y2="2.481"
                                  transform="matrix(0.978, 0.208, -0.208, 0.978, 11.945, 21.948)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-width="0.7"
                                />
                                <line
                                  id="Line_169"
                                  data-name="Line 169"
                                  x2="2.481"
                                  y2="3"
                                  transform="translate(0.401 0.266) rotate(13)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-width="0.7"
                                />
                                <path
                                  id="Path_74665"
                                  data-name="Path 74665"
                                  d="M0,0,3.308,2.3"
                                  transform="matrix(0.899, 0.438, -0.438, 0.899, 10.155, 25.319)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-width="0.7"
                                />
                                <line
                                  id="Line_170"
                                  data-name="Line 170"
                                  y1="3.308"
                                  x2="2.481"
                                  transform="matrix(0.995, -0.105, 0.105, 0.995, 1.523, 25.622)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-width="0.74"
                                />
                                <line
                                  id="Line_171"
                                  data-name="Line 171"
                                  y1="3.308"
                                  x2="2.481"
                                  transform="translate(-0.14 22.197) rotate(-9)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-width="0.7"
                                />
                                <line
                                  id="Line_172"
                                  data-name="Line 172"
                                  y1="3.308"
                                  x2="2.481"
                                  transform="translate(11.446 0.677) rotate(-9)"
                                  fill="none"
                                  stroke="#96a0b5"
                                  stroke-width="0.7"
                                />
                              </g>
                            </g>
                          </g>
                        </g>
                      </svg>`,
  },
};
