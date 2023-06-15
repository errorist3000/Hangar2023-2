import palette from 'Themes/palette'

const shadow = {
  medium: `0px 1px 32px 2px rgba(0, 0, 0, 0.05)`,
  large: `0px 1px 64px -2px rgba(0, 0, 0, 0.1)`,
  dangerFocus: `0px 0px 0px 2px ${palette.error20}80`,
  secondaryFocus: `0px 0px 0px 2px ${palette.primaryNeutral20}80`,
  primaryFocus: `0px 0px 0px 3px ${palette.primary10}`,
}

export default shadow
