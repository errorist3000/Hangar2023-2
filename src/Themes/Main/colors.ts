import { darken } from 'polished'
import palette from 'Themes/palette'

import { TagKind } from 'Constants/tags'

import shadow from './shadow'

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
      color: palette.primaryNeutral0,
      bg: palette.primary80,
      border: palette.primary80,

      hover: {
        bg: palette.primary90,
        border: palette.primary90,
      },

      disabled: {
        bg: palette.americanSilver,
        border: palette.americanSilver,
      },
    },

    secondary: {
      color: palette.mediumBlack,
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

  buttonText: {
    primary: {
      color: palette.mediumBlack,

      hover: {
        color: palette.tiffanyBlue,
      },

      disabled: {
        mute: palette.spanishGray,
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

  radio: {
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

  range: {
    track: palette.americanSilver,
    slider: palette.tiffanyBlue,
    dot: palette.white,

    hover: {
      track: palette.tiffanyBlue,
    },

    disabled: {
      track: palette.brightGray,
      slider: palette.brightGray,
      dot: palette.brightGray,
    },
  },

  switch: {
    color: palette.primaryNeutral0,
    bg: palette.primaryNeutral20,
    hover: {
      bg: palette.primaryNeutral50,
    },
    focus: {
      bg: palette.primaryNeutral20,
      shadow: shadow.secondaryFocus,
    },
    disabled: {
      bg: palette.secondaryNeutral20,
    },

    on: {
      color: palette.primaryNeutral0,
      bg: palette.primary80,
      hover: {
        bg: palette.primary90,
      },
      focus: {
        bg: palette.primary100,
        shadow: shadow.primaryFocus,
      },
      disabled: {
        bg: palette.primary30,
      },
    },
  },

  badge: {
    bg: palette.primary80,
  },

  tag: {
    [TagKind.Default]: {
      bg: palette.primaryNeutral100,
      color: palette.primaryNeutral0,
    },
  },
}

export default colors
