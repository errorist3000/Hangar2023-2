import styled, { css } from 'styled-components'
import { mapToTheme } from 'styled-map'
import {
  layout,
  LayoutProps,
  margin,
  MarginProps,
  styleFn,
} from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

type SizeProps = {
  big?: boolean
  small?: boolean
}

type VariantProps = {
  outline?: boolean
  secondary?: boolean
}

type Props = VariantProps & SizeProps & LayoutProps & MarginProps
const buttonOutlineCss: styleFn = ({ outline }: VariantProps) =>
  outline &&
  css`
    background: none;
    border: 1px solid ${themeGet('colors.button.outline.hover.border')};

    &:hover {
      background-color: ${themeGet('colors.button.outline.hover.bg')};
      border: 1px solid ${themeGet('colors.button.outline.hover.border')};
    }
  `

const buttonSecondaryCss: styleFn = ({ secondary }: VariantProps) =>
  secondary &&
  css`
    background: ${themeGet('colors.button.secondary.bg')};
    border: 1px solid ${themeGet('colors.button.secondary.border')};
    color: ${themeGet('colors.button.secondary.color')};

    &:enabled:hover {
      background-color: ${themeGet('colors.button.secondary.hover.bg')};
      border: 1px solid ${themeGet('colors.button.secondary.hover.border')};
      color: ${themeGet('colors.button.secondary.color')};
    }
  `
const Button = styled.button<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${themeGet('space.1')}px;
  height: ${mapToTheme('button.size')}px;
  background-color: ${themeGet('colors.button.primary.bg')};
  color: ${themeGet('colors.button.primary.color')};
  border: 2px solid ${themeGet('colors.button.primary.border')};
  min-width: 180px;
  font-size: ${mapToTheme('button.fontSize')}px;
  border-radius: ${mapToTheme('button.borderRadius')}px;
  cursor: pointer;
  font-weight: ${themeGet('fontWeight.2')};

  &:enabled:hover {
    background-color: ${themeGet('colors.button.primary.hover.bg')};
    border-color: ${themeGet('colors.button.primary.hover.border')};
  }

  &:disabled {
    cursor: default;
    background-color: ${themeGet('colors.button.primary.disabled.bg')};
    border-color: ${themeGet('colors.button.primary.disabled.border')};
  }

  transition: all ${mapToTheme('transitionTime')};

  ${layout}
  ${margin}

  ${buttonOutlineCss}
  ${buttonSecondaryCss}
`

export default Button
