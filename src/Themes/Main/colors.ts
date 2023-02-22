import { darken } from 'polished'
import palette from 'Themes/palette'

const colors = {
  primary: palette.tiffanyBlue,
  bg: {
    default: palette.white,
    primary: palette.cultured,
    secondary: palette.raisinBlack,
    tertiary: palette.raisinBlack,
    hover: palette.cultured,
  },

  text: {
    body: palette.mediumBlack,
    heading: palette.darkGunmetalGrey,
    inverse: palette.white,
    mute: palette.spanishGray,
    muteInverse: palette.americanSilver,
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

    tertiary: {
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
        bg: `${palette.raisinBlack}50`,
        border: palette.white,
      },
    },
  },

  border: {
    default: palette.spanishGray,
    primary: palette.mediumBlack,
    secondary: palette.brightGray,
  },

  input: {
    color: palette.mediumBlack,
    border: palette.americanSilver,
    placeholder: palette.spanishGray,
    bg: palette.white,

    hover: {
      border: palette.mediumBlack,
    },

    active: {
      border: palette.mediumBlack,
    },

    disabled: {
      color: palette.spanishGray,
      border: palette.brightGray,
    },
  },

  checkbox: {
    bg: palette.white,
    border: palette.americanSilver,
    color: palette.mediumBlack,

    hover: {
      border: palette.mediumBlack,
    },

    checked: {
      bg: palette.tiffanyBlue,
      border: palette.tiffanyBlue,
      color: palette.white,

      hover: {
        border: palette.mediumBlack,
      },
    },

    disabled: {
      bg: palette.white,
      border: palette.americanSilver,
      color: palette.mediumBlack,
    },

    disabledChecked: {
      bg: palette.tiffanyBlue,
      border: palette.tiffanyBlue,
      color: palette.white,
    },
  },
}

export default colors
