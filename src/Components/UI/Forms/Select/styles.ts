import ReactSelect, { Props as ReactSelectProps } from 'react-select-five'
import ReactSelectAsync from 'react-select-five/async'
import ReactSelectAsyncCreatable from 'react-select-five/async-creatable'
import ReactSelectCreatable from 'react-select-five/creatable'

import styled from 'styled-components'
import { layout, LayoutProps, margin, MarginProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import {
  ControlWrapper,
  Indicators,
  ValueContainerWrapper,
} from './Components/styles'

export interface SelectVariantProps {
  danger?: boolean
}

export type WrapperProps = MarginProps & LayoutProps

export type SizeProps = {
  small?: boolean
  medium?: boolean
  large?: boolean
}

const sizes = {
  fontSize: {
    large: themeGet('fontSizes.2'),
    default: themeGet('fontSizes.1'),
    small: themeGet('fontSizes.0'),
  },
  indicatorPadding: {
    large: '4px',
    default: '4px',
    small: '2px',
  },
  valueContainerPadding: {
    large: '0 12px',
    default: '0 10px',
    small: '0 8px',
  },
  controlWrapperMinHeight: {
    large: '48px',
    default: '40px',
    small: '32px',
  },
  labelFontSize: {
    large: themeGet('fontSizes.2'),
    default: themeGet('fontSizes.1'),
    small: themeGet('fontSizes.0'),
  },
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
)<StyledSelectProps>`
  font-size: 10px;

  // These styles applies only for child components, not working for items inside PORTAL
  ${ControlWrapper} {
    border-color: red !important;
  }

  ${Indicators} {
    padding: 20px;
  }

  ${ValueContainerWrapper} {
    padding: 20px !important;
  }

  ${ControlWrapper} {
    &.react-select__control {
      min-height: 100px;
    }
  }

  ${layout};
`

export const Wrapper = styled.div<WrapperProps>`
  width: 100%;

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
