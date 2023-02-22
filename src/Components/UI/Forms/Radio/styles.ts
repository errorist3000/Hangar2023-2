import React from 'react'

import styled, { css } from 'styled-components'
import { space, SpaceProps, styleFn } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export interface SizeProps {
  large?: boolean
  small?: boolean
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
