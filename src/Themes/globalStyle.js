import { createGlobalStyle } from 'styled-components'
import styledNormalize from 'styled-normalize'

import globals from 'Themes/Styles/globals'

export default createGlobalStyle`
  ${styledNormalize}
  ${globals}
`
