import React from 'react'

import styled, { css } from 'styled-components'
import { mapToTheme } from 'styled-map'
import { space, SpaceProps, styleFn } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export interface SizeProps {
  large?: boolean
  small?: boolean
}

export const Circle = styled.div<SizeProps>`
  background: ${themeGet('colors.radio.checked.color')};
  border-radius: 999px;
  width: ${mapToTheme('radio.circleSize')}px;
  height: ${mapToTheme('radio.circleSize')}px;
`

export const RadioBorder = styled.div<SizeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  flex-shrink: 0;
  width: ${mapToTheme('radio.size')}px;
  height: ${mapToTheme('radio.size')}px;
`

export const InvisibleRadio = styled.input.attrs({ type: 'radio' })<
  React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
>`
  position: absolute;
  background: none;
  border: none;
  opacity: 0;
  pointer-events: none;
`

export interface VariantProps {
  alignTop?: boolean
  danger?: boolean
}

export interface ContainerProps extends VariantProps, SizeProps, SpaceProps {}

const containerAlignTopCss: styleFn = ({ alignTop }: VariantProps) =>
  alignTop &&
  css`
    align-items: flex-start;
  `

export const Container = styled.label<ContainerProps>`
  display: flex;
  align-items: center;
  position: relative;
  width: max-content;
  user-select: none;
  gap: ${themeGet('space.2')}px;

  & > input {
    :enabled ~ ${RadioBorder} {
      cursor: pointer;
    }

    :not(:checked) ~ ${RadioBorder} > ${Circle} {
      display: none;
    }

    :enabled:not(:checked) ~ ${RadioBorder} {
      background-color: ${themeGet('colors.radio.bg')};
      border: 1px solid ${themeGet('colors.radio.border')};
    }

    :enabled:not(:checked) ~ ${RadioBorder}:hover {
      background-color: ${themeGet('colors.radio.hover.bg')};
      border: 1px solid ${themeGet('colors.radio.hover.border')};
    }

    :enabled:checked ~ ${RadioBorder} {
      background-color: ${themeGet('colors.radio.checked.bg')};
      border: 1px solid ${themeGet('colors.radio.checked.border')};
    }

    :disabled:not(:checked) ~ ${RadioBorder} {
      background-color: ${themeGet('colors.radio.disabled.bg')};
      border: 1px solid ${themeGet('colors.radio.disabled.border')};
      opacity: 50%;
    }

    :disabled:checked ~ ${RadioBorder} {
      background-color: ${themeGet('colors.radio.disabledChecked.bg')};
      border: 1px solid ${themeGet('colors.radio.disabledChecked.border')};
      opacity: 50%;
    }
  }

  ${space}

  ${containerAlignTopCss}
`
