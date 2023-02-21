import styled from 'styled-components'
import { typography, TypographyProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { SizeProps } from '../styles'

const sizes = {
  itemFontSize: {
    large: themeGet('fontSizes.2'),
    default: themeGet('fontSizes.1'),
    small: themeGet('fontSizes.0'),
  },
}

export const Clear = styled.div`
  font-size: 14px;
  color: ${themeGet('colors.primary')};
  cursor: pointer;
  line-height: 10px;
`

export const Dropdown = styled.div`
  font-size: 24px;
  cursor: pointer;

  svg {
    color: ${themeGet('colors.primary')};
    transition: all 0.2s ease;
  }
`

export const ControlWrapper = styled.div`
  outline: none !important;
  box-shadow: none !important;

  &:hover {
    border-color: ${themeGet('colors.primary500')} !important;
  }

  &.react-select__control--is-disabled {
    ${Dropdown} {
      svg {
        color: ${themeGet('colors.text.muted')};
      }
    }
  }

  &.react-select__control--menu-is-open {
    border-color: ${themeGet('colors.primary500')} !important;

    ${Dropdown} {
      svg {
        transform: rotate(-180deg);
      }
    }
  }
`

export const GroupWrapper = styled.div``

export const GroupHeadingWrapper = styled.div``

export const Indicators = styled.div`
  display: flex;
  flex-shrink: 0;

  .react-select__indicator {
    padding: 0;
  }
`

export const Separator = styled.div<any>``

export const InputWrapper = styled.div`
  color: ${themeGet('colors.text.heading')};
`

export const MenuWrapper = styled.div`
  border: 1px solid ${themeGet('colors.divider.lighter')} !important;
  z-index: 9 !important;
  border-radius: 6px !important;
  box-shadow: ${themeGet('shadow.large')} !important;
  background: ${themeGet('colors.background.block')};
  overflow: hidden;
`

export const MenuListWrapper = styled.div`
  border-radius: 0;
  padding: 0 !important;
`

export const Item = styled.div<TypographyProps & SizeProps>`
  display: flex !important;
  align-items: center;
  min-height: 32px;
  padding: 4px 12px !important;
  cursor: pointer !important;

  &.react-select__option {
    color: ${themeGet('colors.text.heading')};
    font-size: 10px;
  }

  &:hover {
    background: ${themeGet('colors.primary900')};
    color: ${themeGet('colors.primary500')} !important;
  }

  &.react-select__option--is-selected {
    background: ${themeGet('colors.primary500')};
    color: white !important;
  }

  ${typography};
`

export const MultiValueWrapper = styled.div``

export const MultiValueContainerWrapper = styled.div``

export const MultiValueLabelWrapper = styled.div`
  padding: 0 4px;
`

export const PlaceholderWrapper = styled.div`
  color: ${themeGet('colors.text.muted')};
`

export const SelectContainerWrapper = styled.div`
  outline: none !important;
  box-shadow: none !important;
`

export const Value = styled.div`
  color: ${themeGet('colors.text.heading')};
`

export const ValueContainerWrapper = styled.div<any>`
  padding: 0 !important;

  .react-select__single-value {
    font-weight: ${themeGet('fontWeights.1')};

    &--is-disabled {
      color: ${themeGet('colors.text.muted')};
    }
  }

  .react-select__multi-value {
    font-weight: ${themeGet('fontWeights.2')};
    font-size: 100%;
    color: ${themeGet('colors.text.heading')};

    &--is-disabled {
      color: ${themeGet('colors.text.muted')};
    }

    &__label {
      padding: 0 4px;
    }

    &__remove {
      cursor: pointer;
    }
  }
`
