import defaultTheme from 'Themes/defaultTheme'

import merge from 'lodash/merge'

import button from './button'
import colors from './colors'
import text from './text'

const theme = merge({}, defaultTheme, {
  name: 'Main theme',

  shadow: {
    medium: `0px 1px 32px 2px rgba(0, 0, 0, 0.05)`,
    large: `0px 1px 64px -2px rgba(0, 0, 0, 0.1)`,
  },

  colors,
  text,
  button,
})

export default theme
