import palette from 'Themes/palette'

const colors = {
  primary: palette.tiffanyBlue,
  bg: {
    default: palette.white,
    primary: palette.cultured,
    secondary: palette.raisinBlack,
  },

  shadow: {},

  text: {
    body: palette.mediumBlack,
    heading: palette.darkGunmetalGrey,
    inverse: palette.white,
    muted: palette.spanishGray,
  },

  button: {
    primary: {
      color: palette.white,
      bg: palette.tiffanyBlue,
      border: palette.tiffanyBlue,

      hover: {
        color: palette.tiffanyBlue,
        bg: palette.white,
        border: palette.white,
      },
    },

    outline: {
      hover: {
        color: palette.white,
        bg: palette.tiffanyBlue,
        border: palette.tiffanyBlue,
      },
    },
  },
}

export default colors
