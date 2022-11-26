import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import { mapToTheme } from 'styled-map'
import layout from '@styled-system/layout'
import themeGet from '@styled-system/theme-get'

const buttonOutlineCss = ({ outline }) =>
  outline &&
  css`
    background: none;
    border: 1px solid ${themeGet('colors.button.outline.hover.border')};

    &:hover,
    :focus,
    :active {
      background-color: ${themeGet('colors.button.outline.hover.bg')};
      border: 1px solid ${themeGet('colors.button.outline.hover.border')};
    }
  `

const buttonTertiaryCss = ({ tertiary }) =>
  tertiary &&
  css`
    background: ${themeGet('colors.button.tertery.bg')};
    border: 1px solid ${themeGet('colors.button.tertery.border')};
    color: ${themeGet('colors.button.tertery.color')};

    &:hover,
    :focus,
    :active {
      background-color: ${themeGet('colors.button.tertery.hover.bg')};
      border: 1px solid ${themeGet('colors.button.tertery.hover.border')};
      color: ${themeGet('colors.button.tertery.color')};
    }
  `
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${themeGet('space.1')}px;
  height: ${mapToTheme('button.size')}px;
  background-color: ${themeGet('colors.button.primary.bg')};
  color: ${themeGet('colors.button.primary.color')};
  border: 2px solid ${themeGet('colors.button.primary.border')};
  min-width: 100px;
  font-size: ${mapToTheme('button.fontSize')}px;
  border-radius: ${mapToTheme('button.borderRadius')}px;
  cursor: pointer;
  font-weight: 600;

  &:hover,
  :focus,
  :active {
    background-color: ${themeGet('colors.button.primary.hover.bg')};
    border-color: ${themeGet('colors.button.primary.hover.border')};
  }

  transition: all ${mapToTheme('transitionTime')};

  ${layout}

  ${buttonOutlineCss}
  ${buttonTertiaryCss}
`

Button.defaultProps = {
  big: undefined,
  outline: undefined,
  small: undefined,
  tertiary: undefined,
}

Button.propTypes = {
  big: PropTypes.bool,
  outline: PropTypes.bool,
  small: PropTypes.bool,
  tertiary: PropTypes.bool,
}

export default Button
