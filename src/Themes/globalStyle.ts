import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import globals from 'Themes/Styles/globals'
import modal from 'Themes/Styles/modal'
import swiper from 'Themes/Styles/swiper'

export default createGlobalStyle`
  ${styledNormalize}
  ${globals}
  ${modal}
  ${swiper}
`
