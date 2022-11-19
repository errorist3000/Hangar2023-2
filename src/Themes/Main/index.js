import defaultTheme from 'Themes/defaultTheme'

import merge from 'lodash/merge'

import button from './button'
import colors from './colors'
import text from './text'

const theme = merge({}, defaultTheme, {
  name: 'Main theme',

  colors,
  text,
  button,
})

export default theme
