import defaultTheme from 'Themes/defaultTheme'

import merge from 'lodash/merge'

import text from './text'

import palette from '../palette'

const theme = merge({}, defaultTheme, {
  name: 'Main theme',

  colors: {
    bg: {
      default: palette.white,
    },
    shadow: {},
  },

  text,
})

export default theme
