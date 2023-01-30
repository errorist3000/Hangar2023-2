import defaultTheme from 'Themes/defaultTheme'
import button from 'Themes/Main/button'
import colors from 'Themes/Main/colors'

import merge from 'lodash/merge'

const theme = merge({}, defaultTheme, {
  name: 'Main theme',

  shadow: {
    medium: `0px 1px 32px 2px rgba(0, 0, 0, 0.05)`,
    large: `0px 1px 64px -2px rgba(0, 0, 0, 0.1)`,
  },

  colors,
  button,
})

export default theme
