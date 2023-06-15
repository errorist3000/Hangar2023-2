import defaultTheme from 'Themes/defaultTheme'

import merge from 'lodash/merge'

import badge from './badge'
import button from './button'
import checkbox from './checkbox'
import colors from './colors'
import input from './input'
import link from './link'
import radio from './radio'
import range from './range'
import select from './select'
import shadow from './shadow'
import switches from './switch'
import tag from './tag'

const theme = merge({}, defaultTheme, {
  name: 'Main theme',

  button,
  checkbox,
  colors,
  input,
  radio,
  range,
  badge,
  link,
  select,
  shadow,
  switch: switches,
  tag,
})

export default theme
