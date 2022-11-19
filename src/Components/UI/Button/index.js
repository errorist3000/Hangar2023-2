import { bool } from 'prop-types'

import styled, { css } from 'styled-components'
import { mapToTheme } from 'styled-map'
import themeGet from '@styled-system/theme-get'

const buttonOutlineCss = ({ outline }) =>
  outline &&
  css`
    background: none;

    &:hover,
    :focus,
    :active {
      background-color: ${themeGet('colors.button.outline.hover.bg')};
      color: ${themeGet('colors.button.outline.hover.color')};
      border-color: ${themeGet('colors.button.outline.hover.border')};
    }
  `

const Button = styled.button`
  height: ${mapToTheme('button.size')}px;
  background-color: ${themeGet('colors.button.primary.bg')};
  color: ${themeGet('colors.button.primary.color')};
  border: 1px solid ${themeGet('colors.button.primary.border')};
  min-width: 100px;
  font-size: ${mapToTheme('button.fontSize')}px;
  border-radius: ${mapToTheme('button.borderRadius')}px;

  &:hover,
  :focus,
  :active {
    background-color: ${themeGet('colors.button.primary.hover.bg')};
    color: ${themeGet('colors.button.primary.hover.color')};
    border-color: ${themeGet('colors.button.primary.hover.border')};
  }

  transition: all ${mapToTheme('transitionTime')};

  ${buttonOutlineCss}
`

Button.defaultProps = {
  big: undefined,
  outline: undefined,
  small: undefined,
}

Button.propTypes = {
  big: bool,
  outline: bool,
  small: bool,
}

export default Button
