import styled from 'styled-components'
import { mapToTheme } from 'styled-map'
import { layout, LayoutProps, margin, MarginProps } from 'styled-system'
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

const ButtonText = styled.button<Props>`
  background: none;
  border: none;
  color: ${themeGet('colors.buttonText.primary.color')};
  font-size: ${mapToTheme('button.fontSize')}px;
  cursor: pointer;
  font-weight: ${themeGet('fontWeight.3')};

  &:hover {
    color: ${themeGet('colors.buttonText.primary.hover.color')};
  }

  &:disabled {
    cursor: default;
    color: ${themeGet('colors.buttonText.primary.disabled.color')};
  }

  transition: all ${mapToTheme('transitionTime')};

  ${layout}
  ${margin}
`

export default ButtonText
