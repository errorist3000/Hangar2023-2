import ReactSelect, { Props as ReactSelectProps } from 'react-select-five'
import ReactSelectAsync from 'react-select-five/async'
import ReactSelectAsyncCreatable from 'react-select-five/async-creatable'
import ReactSelectCreatable from 'react-select-five/creatable'

import styled from 'styled-components'
import { mapToTheme } from 'styled-map'
import { layout, LayoutProps, margin, MarginProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export interface SelectVariantProps {
  danger?: boolean
}

export type WrapperProps = MarginProps & LayoutProps

export type SizeProps = {
  small?: boolean
  medium?: boolean
  large?: boolean
}

export type StyledSelectProps = ReactSelectProps &
  LayoutProps &
  MarginProps &
  SelectVariantProps &
  SizeProps & {
    async?: boolean
    creatable?: boolean
    className?: string
    classNamePrefix?: string
    onChange?: any
  }

function getSelectType({ async, creatable }: StyledSelectProps) {
  if (async && creatable) {
    return ReactSelectAsyncCreatable
  }
  if (async) {
    return ReactSelectAsync
  }
  if (creatable) {
    return ReactSelectCreatable
  }

  return ReactSelect
}

export const StyledSelect = styled.div.attrs(
  ({
    async,
    creatable,
    className = 'react-select-container',
    classNamePrefix = 'react-select',
  }: StyledSelectProps) => ({
    as: getSelectType({ async, creatable }),
    className,
    classNamePrefix,
  }),
)<StyledSelectProps>``

export const Wrapper = styled.div<WrapperProps>`
  min-width: ${mapToTheme('input.minWidth')}px;

  input {
    font-size: ${mapToTheme('input.fontSize')}px;
  }

  & .react-select-container {
    width: 100%;

    & .react-select__control {
      border-width: 1px;
      border-style: solid;
      border-color: ${themeGet('colors.input.border')};
      border-radius: ${mapToTheme('input.borderRadius')}px;
      min-height: ${mapToTheme('input.height')}px;
      padding-inline: ${mapToTheme('input.padding')}px;
      background-color: ${themeGet('colors.input.bg')};

      &:hover {
        border-color: ${themeGet('colors.input.hover.border')} !important;
      }
    }

    &:active,
    :focus-within {
      & .react-select__control {
      }
    }
  }

  & .react-select__control--is-disabled {
    cursor: default;
    color: ${themeGet('colors.input.disabled.color')} !important;
    border-color: ${themeGet('colors.input.disabled.border')} !important;
    background-color: ${themeGet('colors.input.bg')} !important;

    &:hover {
      border-color: ${themeGet('colors.input.disabled.border')} !important;
    }

    div {
      color: ${themeGet('colors.input.disabled.color')};
    }
  }

  & .react-select__dropdown-indicator {
    svg {
      transition: all ${themeGet('transitionTime.default')};
    }
  }

  & .react-select__control--menu-is-open {
    .react-select__dropdown-indicator {
      svg {
        transform: rotateZ(180deg);
      }
    }
  }

  & .react-select__menu {
    border-radius: 4px !important;
    box-shadow: ${themeGet('shadows.box')} !important;

    & .react-select__menu-list {
      padding: 0;
      color: ${themeGet('colors.text.header')};
      font-size: ${themeGet('fontSize.1')}px;
      font-weight: ${themeGet('fontWeight.0')};

      & .react-select__option--is-focused {
        background-color: ${themeGet('colors.bg.hover')};
        color: ${themeGet('colors.main')};
        cursor: pointer;
      }

      & .react-select__option--is-selected {
        background-color: ${themeGet('colors.main')};
        color: ${themeGet('colors.text.contrast')};
      }
    }
  }

  & .react-select__value-container--is-multi {
    gap: ${themeGet('space.2')}px;
  }

  & .react-select__multi-value {
    background: none;
    margin: 0;

    & .react-select__multi-value__remove {
      padding: 0;
      color: ${themeGet('colors.text.header')};
      cursor: pointer;

      svg {
        height: 16px;
        width: 16px;
      }

      &:hover {
        background: none;
      }
    }

    & .react-select__multi-value__label {
      font-size: ${themeGet('fontSize.2')}px;
      font-weight: ${themeGet('fontWeight.0')};
      color: ${themeGet('colors.text.header')};
      padding: 0;
    }
  }

  ${layout};
  ${margin};
  ${layout};
`

export const Caption = styled.div<MarginProps>`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 12px;
  color: ${themeGet('colors.danger400')};
  ${margin};
`
