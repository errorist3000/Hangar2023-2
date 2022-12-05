import { darken } from 'polished'
import palette from 'Themes/palette'

const colors = {
  primary: palette.tiffanyBlue,
  bg: {
    default: palette.white,
    primary: palette.cultured,
    secondary: palette.raisinBlack,
    tertiary: `${palette.raisinBlack}99`,
  },

  text: {
    body: palette.mediumBlack,
    heading: palette.darkGunmetalGrey,
    inverse: palette.white,
    muted: palette.spanishGray,
    inMuted: palette.americanSilver,
  },

  button: {
    primary: {
      color: palette.white,
      bg: palette.tiffanyBlue,
      border: palette.tiffanyBlue,

      hover: {
        bg: darken(0.05, palette.tiffanyBlue),
        border: darken(0.05, palette.tiffanyBlue),
      },
    },

    tertery: {
      color: palette.tiffanyBlue,
      bg: palette.brightGray,
      border: palette.brightGray,

      hover: {
        bg: darken(0.05, palette.brightGray),
        border: darken(0.05, palette.brightGray),
      },
    },

    outline: {
      hover: {
        bg: `${palette.raisinBlack}10`,
        border: palette.white,
      },
    },
  },

  border: {
    default: palette.spanishGray,
    primary: palette.mediumBlack,
    secondary: palette.brightGray,
  },
}

export default colors
