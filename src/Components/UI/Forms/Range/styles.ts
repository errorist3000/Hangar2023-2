import styled, { css } from 'styled-components'
import {
  BackgroundColorProps,
  color,
  margin,
  MarginProps,
  space,
} from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export type ContainerProps = BackgroundColorProps &
  MarginProps & {
    active?: boolean
  }

const getActiveSliderStyle = ({ active }: ContainerProps) =>
  active &&
  css`
    & .input-range__label--value {
      opacity: 1;
    }
    & .input-range__slider {
      outline: 4px solid ${themeGet('colors.primary800')};
      transform: scale(1);
      &::before {
        opacity: 1;
      }
    }
  `

export const Container = styled.div<ContainerProps>`
  flex-direction: column;
  position: relative;
  width: 100%;

  & .input-range__track {
    background: ${themeGet('colors.divider.default')};
    height: 4px;

    &:hover {
      & .input-range__label--value {
        opacity: 1;
      }
      & .input-range__slider {
        &::before {
          opacity: 1;
        }
      }
    }
    ${space}
    ${getActiveSliderStyle}
  }

  & .input-range__track--active {
    background: ${themeGet('colors.primary500')};
    ${color}
  }

  & .input-range__slider {
    border: none;
    width: 16px;
    height: 16px;
    background: ${themeGet('colors.primary500')};
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    transition: outline ${themeGet('defaultTransitionTime')};
    &::before {
      content: '';
      height: 8px;
      width: 8px;
      border-radius: 100%;
      background: ${themeGet('colors.divider.default')};
      opacity: 0;
      transition: opacity ${themeGet('defaultTransitionTime')};
    }
    ${color}
  }

  & .input-range__label--value {
    opacity: 0;
    transition: opacity ${themeGet('defaultTransitionTime')};
  }

  & .input-range__label--value .input-range__label-container {
    background: ${themeGet('colors.white')};
    color: ${themeGet('colors.neutral100')};
    font-size: ${themeGet('fontSizes.0')}px;
    line-height: 20px;
    padding: 6px 12px 6px 12px;
    border-radius: 6px;
    position: relative;
    top: -22px;
    box-shadow: 0 8px 14px -4px rgba(0, 0, 0, 0.08);
    &::after {
      content: '';
      position: absolute;
      transform: translate(-50%, 100%);
      left: 50%;
      bottom: 0;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 8px solid ${themeGet('colors.white')};
    }
  }

  ${margin}
`
