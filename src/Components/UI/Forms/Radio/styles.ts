import React from 'react'

import styled, { css } from 'styled-components'
import { space, SpaceProps, styleFn } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export interface SizeProps {
  large?: boolean
  small?: boolean
}

const sizes = {
  fontSize: {
    large: themeGet('fontSizes.2'),
    default: themeGet('fontSizes.1'),
    small: themeGet('fontSizes.0'),
  },
  lineHeight: {
    large: 24,
    default: 20,
    small: 16,
  },
  radioBorderSize: {
    large: 24,
    default: 20,
    small: 16,
  },
  circleSize: {
    large: 12,
    default: 10,
    small: 8,
  },
  captionFontSize: {
    large: themeGet('fontSizes.1'),
    default: themeGet('fontSizes.0'),
    small: themeGet('fontSizes.0'),
  },
  captionLineHeight: {
    large: 20,
    default: 16,
    small: 16,
  },
}

export const Circle = styled.div<SizeProps>`
  background: white;
  border-radius: 999px;
  width: 40px;
  height: 40px;
`

export const RadioBorder = styled.div<SizeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 999px;
  flex-shrink: 0;
  width: 40px;
  height: 40px;
`

export const LabelText = styled.div`
  color: ${themeGet('colors.text.heading')};
  white-space: pre-wrap;
`

export const CaptionText = styled.div<SizeProps>`
  color: ${themeGet('colors.text.muted')};
  font-weight: ${themeGet('fontWeights.1')};
  font-size: 10px;
  line-height: 300px;
  letter-spacing: -0.012em;
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

const variants = {
  notCheckedRadioBorderColor: {
    default: themeGet('colors.divider.contrast'),
    danger: themeGet('colors.danger500'),
  },
  notCheckedRadioBorderWidth: {
    default: 1,
    danger: 2,
  },
  notCheckedRadioBackground: {
    default: 'transparent',
    danger: themeGet('colors.danger500'),
  },
  notCheckedHoverRadioBorderWidth: {
    default: 2,
    danger: 2,
  },
  notCheckedHoverRadioBorderColor: {
    default: themeGet('colors.primary500'),
    danger: themeGet('colors.danger500'),
  },
  notCheckedHoverRadioBackground: {
    default: themeGet('colors.primary900'),
    danger: themeGet('colors.danger900'),
  },
  checkedRadioBorderBackground: {
    default: themeGet('colors.primary500'),
    danger: themeGet('colors.danger500'),
  },
  disabledNotCheckedRadioBorderColor: {
    default: themeGet('colors.divider.default'),
    danger: themeGet('colors.divider.default'),
  },
  disabledCheckedRadioBackground: {
    default: themeGet('colors.primary700'),
    danger: themeGet('colors.danger700'),
  },
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
  gap: 8px;
  font-weight: ${themeGet('fontWeights.2')};
  font-size: 10px;
  line-height: 300px;

  & > input {
    :enabled ~ ${RadioBorder} {
      cursor: pointer;
    }

    :not(:checked) ~ ${RadioBorder} > ${Circle} {
      display: none;
    }

    :enabled:not(:checked) ~ ${RadioBorder} {
      border: 1px solid crimson;
    }

    :enabled:not(:checked) ~ ${RadioBorder}:hover {
      border: 1px solid crimson;
      background: coral;
    }

    :enabled:checked ~ ${RadioBorder} {
      background: coral;
    }

    :disabled:not(:checked) ~ ${RadioBorder} {
      border: 1px solid crimson;
    }

    :disabled:checked ~ ${RadioBorder} {
      border: 1px solid crimson;
    }

    :focus-visible ~ ${RadioBorder} {
      outline: 2px solid ${themeGet('colors.primary700')};
    }
  }

  ${space}

  ${containerAlignTopCss}
`
