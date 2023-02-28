import React from 'react'

import styled, { css } from 'styled-components'
import { mapToTheme } from 'styled-map'
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
  border-radius: ${mapToTheme('checkbox.borderRadius')}px;
  width: ${mapToTheme('checkbox.size')}px;
  height: ${mapToTheme('checkbox.size')}px;
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
  user-select: none;
  gap: ${themeGet('space.2')}px;
  width: 100%;

  & > input {
    :enabled ~ ${CheckboxBorder} {
      cursor: pointer;
    }

    :not(:checked) ~ ${CheckboxBorder} > ${CheckIcon} {
      display: none;
    }

    :enabled:not(:checked) ~ ${CheckboxBorder} {
      border-color: ${themeGet('colors.checkbox.border')};
      color: ${themeGet('colors.checkbox.color')};
      background-color: ${themeGet('colors.checkbox.bg')};

      &:hover {
        background-color: ${themeGet('colors.checkbox.hover.bg')};
        border-color: ${themeGet('colors.checkbox.hover.border')};
      }
    }

    :enabled:checked ~ ${CheckboxBorder} {
      background-color: ${themeGet('colors.checkbox.checked.bg')};
      border-color: ${themeGet('colors.checkbox.checked.border')};
      color: ${themeGet('colors.checkbox.checked.color')};

      &:hover {
        border-color: ${themeGet('colors.checkbox.checked.hover.border')};
      }
    }

    :disabled:not(:checked) ~ ${CheckboxBorder} {
      background-color: ${themeGet('colors.checkbox.disabled.bg')};
      border-color: ${themeGet('colors.checkbox.disabled.border')};
      color: ${themeGet('colors.checkbox.disabled.color')};
      opacity: 50%;
    }

    :disabled:checked ~ ${CheckboxBorder} {
      background-color: ${themeGet('colors.checkbox.disabledChecked.bg')};
      border-color: ${themeGet('colors.checkbox.disabledChecked.border')};
      color: ${themeGet('colors.checkbox.disabledChecked.color')};
      opacity: 50%;
    }
  }

  ${space}
  ${layout}
  
  ${containerAlignTopCss}
`
