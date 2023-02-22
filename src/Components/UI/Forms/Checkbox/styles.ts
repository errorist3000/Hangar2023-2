import React from 'react'

import styled, { css } from 'styled-components'
import { layout, LayoutProps, space, SpaceProps, styleFn } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { Check } from 'phosphor-react'

export interface SizeProps {
  large?: boolean
  small?: boolean
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
