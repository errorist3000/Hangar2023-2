import MaskedInput, { MaskedInputProps } from 'react-text-mask'

import styled, { css } from 'styled-components'
import {
  layout,
  LayoutProps,
  margin,
  MarginProps,
  styleFn,
} from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export type VariantProps = {
  active?: boolean
  success?: boolean
  danger?: boolean
  disabled?: boolean
}

export type SizeProps = {
  small?: boolean
  medium?: boolean
  large?: boolean
}

export type ContainerProps = VariantProps & SizeProps

export type WrapperProps = ContainerProps & MarginProps & LayoutProps

const variants = {
  borderColor: {
    default: themeGet('colors.divider.default'),
    active: themeGet('colors.primary500'),
    success: themeGet('colors.success500'),
    danger: themeGet('colors.danger500'),
  },
  captionColor: {
    default: themeGet('colors.text.muted'),
    success: themeGet('colors.success400'),
    danger: themeGet('colors.danger400'),
  },
}

const sizes = {
  minHeight: {
    large: 48,
    default: 40,
    small: 32,
  },
  padding: {
    large: 12,
    default: 10,
    small: 8,
  },
  labelFontSize: {
    large: themeGet('fontSizes.2'),
    default: themeGet('fontSizes.1'),
    small: themeGet('fontSizes.0'),
  },
  inputFontSize: {
    large: themeGet('fontSizes.2'),
    default: themeGet('fontSizes.1'),
    small: themeGet('fontSizes.0'),
  },
}

const disabledCss: styleFn = ({ disabled }: ContainerProps) =>
  disabled &&
  css`
    color: ${themeGet('colors.text.muted')};
    input {
      color: ${themeGet('colors.text.muted')};
    }
  `

const hoverCss: styleFn = ({ active }: ContainerProps) =>
  !active &&
  css`
    :hover {
      border-color: ${themeGet('colors.divider.contrast')} !important;
    }
  `

export const Caption = styled.div<
  MarginProps & {
    danger?: boolean
    success?: boolean
  }
>`
  display: flex;
  align-items: flex-start;
  width: 100%;
  font-size: 12px;
  color: red;

  ${margin};
`

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;

  & input {
    font-size: 10px;
  }

  ${margin}
  ${layout}
`

type IsMultiProps = {
  isMulti?: boolean
  cols?: number
  rows?: number
  resize?: 'vertical' | 'horizontal' | 'both' | 'none'
}

type MaskProps = {
  mask?: MaskedInputProps['mask']
  showMask?: MaskedInputProps['showMask']
}

type NumberProps = {
  max?: number
  min?: number
}

export type StyledInputProps = IsMultiProps & MaskProps & NumberProps

function resizeTypeCss({ resize }: StyledInputProps) {
  return css`
    resize: ${resize || 'vertical'};
  `
}

const TextArea = styled.textarea`
  ${resizeTypeCss}
`

function getInputType({ isMulti, mask }: StyledInputProps) {
  if (isMulti) return TextArea

  if (mask) return MaskedInput

  return 'input'
}

export const StyledInput = styled.input.attrs((props: StyledInputProps) => ({
  as: getInputType(props),
}))<StyledInputProps>`
  position: relative;
  width: 100%;
  margin: 0;
  border: none;
  outline: none;
  appearance: none;
  background: transparent;
  color: ${themeGet('colors.text.heading')};
  font-weight: ${themeGet('fontWeights.1')};

  ::placeholder {
    color: ${themeGet('colors.text.muted')};
  }
`

export const PasswordIconWrapper = styled.div`
  position: absolute;
  height: 14px;
  width: 20px;
  right: 12px;
  user-select: none;
  cursor: pointer;

  svg {
    height: 14px;
    width: 20px;
    fill: none !important;
    stroke: ${themeGet('colors.neutral400')};
  }
`

export const Container = styled.div<ContainerProps>`
  display: flex;
  border: 1px solid blueviolet;
  border-radius: 6px;
  align-items: center;
  padding: 20px;
  min-height: 100px;
  position: relative;

  &:disabled {
    cursor: default;
  }

  ${disabledCss};
  ${hoverCss};
`
