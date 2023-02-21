import React from 'react'

import styled, { css } from 'styled-components'
import { layout, LayoutProps, space, SpaceProps, styleFn } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { Check } from 'phosphor-react'

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
  checkboxBorder: {
    large: 24,
    default: 20,
    small: 16,
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

export const CheckIcon = styled(Check).attrs({ weight: 'bold' })`
  color: white;
  width: 2em;
  height: 2em;
`

export const CheckboxBorder = styled.div<SizeProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid transparent;
  border-radius: 4px;
  width: 40px;
  height: 40px;
`

export const LabelText = styled.div`
  color: ${themeGet('colors.text.heading')};
  white-space: pre-wrap;
`

export const CaptionText = styled.div<SizeProps>`
  color: ${themeGet('colors.text.muted')};
  font-size: 10px;
  line-height: 300px;
  font-weight: ${themeGet('fontWeights.1')};
  white-space: pre-wrap;
`

export const ErrorText = styled.div<SizeProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: ${themeGet('colors.danger500')};
  font-size: 10px;
  line-height: 300px;
  font-weight: ${themeGet('fontWeights.1')};
  position: absolute;
  top: 100%;
  left: 0;
  height: 32px;
`

export const InvisibleCheckbox = styled.input.attrs({ type: 'checkbox' })<
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
  notCheckedBorderColor: {
    default: themeGet('colors.divider.contrast'),
    danger: themeGet('colors.danger500'),
  },
  notCheckedHoverBorderColor: {
    default: themeGet('colors.primary500'),
    danger: themeGet('colors.danger500'),
  },
  notCheckedHoverBackgroundColor: {
    default: themeGet('colors.primary900'),
    danger: themeGet('colors.danger900'),
  },
  notCheckedHoverOutlineColor: {
    danger: themeGet('colors.danger500'),
    default: themeGet('colors.primary500'),
  },
  checkedBackground: {
    danger: themeGet('colors.danger500'),
    default: themeGet('colors.primary500'),
  },
  disabledNotCheckedBorderColor: {
    danger: themeGet('colors.divider.default'),
    default: themeGet('colors.divider.default'),
  },
  disabledCheckedBackground: {
    danger: themeGet('colors.danger700'),
    default: themeGet('colors.primary700'),
  },
}

export interface ContainerProps
  extends VariantProps,
    SizeProps,
    SpaceProps,
    LayoutProps {}

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
  gap: 12px;
  font-weight: ${themeGet('fontWeights.2')};
  font-size: 10px;
  line-height: 300px;

  & > input {
    :enabled ~ ${CheckboxBorder} {
      cursor: pointer;
    }

    :not(:checked) ~ ${CheckboxBorder} > ${CheckIcon} {
      display: none;
    }

    :enabled:not(:checked) ~ ${CheckboxBorder} {
      border-color: tomato;

      &:hover {
        background-color: tomato;
        border-color: blue;
        outline: 1px solid green;
      }
    }

    :enabled:checked ~ ${CheckboxBorder} {
      background-color: tomato;

      &:hover {
        outline: 1px solid green;
      }
    }

    :disabled:not(:checked) ~ ${CheckboxBorder} {
      border-color: blue;
    }

    :disabled:checked ~ ${CheckboxBorder} {
      background-color: blue;
    }

    :focus-visible ~ ${CheckboxBorder} {
      outline: 2px solid green;
    }
  }

  ${space}
  ${layout}
  
  ${containerAlignTopCss}
`
