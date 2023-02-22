import MaskedInput, { MaskedInputProps } from 'react-text-mask'

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

export type VariantProps = {
  active?: boolean
  disabled?: boolean
}

export type SizeProps = {
  small?: boolean
  large?: boolean
}

export type ContainerProps = VariantProps & SizeProps

export type WrapperProps = ContainerProps & MarginProps & LayoutProps

export const Wrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: column;
  min-width: ${mapToTheme('input.minWidth')}px;

  & input {
    font-size: ${mapToTheme('input.fontSize')};
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
    resize: ${resize};
  `
}

const TextArea = styled.textarea`
  padding: ${mapToTheme('input.padding')}px;
  min-height: inherit;

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
  color: ${themeGet('colors.input.color')};
  padding-inline: ${mapToTheme('input.padding')}px;

  ::placeholder {
    color: ${themeGet('colors.input.placeholder')};
  }
`

export const PasswordIconWrapper = styled.div`
  position: absolute;
  height: 14px;
  width: 20px;
  right: 12px;
  user-select: none;
  cursor: pointer;
`

const containerDisabledCss: styleFn = ({ disabled }: ContainerProps) =>
  disabled &&
  css`
    cursor: default;
    border-color: ${themeGet('colors.input.disabled.border')};

    &:hover {
      border-color: ${themeGet('colors.input.disabled.border')};
    }
  `

export const Container = styled.div<ContainerProps>`
  display: flex;
  gap: ${themeGet('space.2')}px;
  min-height: ${mapToTheme('input.height')}px;
  background-color: ${themeGet('colors.input.bg')};
  border-width: 1px;
  border-style: solid;
  border-color: ${themeGet('colors.input.border')};
  border-radius: ${mapToTheme('input.borderRadius')}px;

  &:hover {
    border-color: ${themeGet('colors.input.hover.border')};
  }

  ${containerDisabledCss}
`
