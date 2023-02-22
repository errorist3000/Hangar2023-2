import styled, { css } from 'styled-components'
import { mapToTheme } from 'styled-map'
import { BackgroundColorProps, color, margin, MarginProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export type ContainerProps = BackgroundColorProps &
  MarginProps & {
    active?: boolean
    disabled?: boolean
  }

const activeCss = ({ active }: ContainerProps) =>
  active &&
  css`
    & .input-range__slider {
      outline: ${mapToTheme('range.trackSize')}px solid
        ${themeGet('colors.range.hover.track')};
      transform: scale(1);
      &::before {
        opacity: 1;
      }
    }
  `

const disabledCss = ({ disabled }: ContainerProps) =>
  disabled &&
  css`
    & .input-range__track {
      cursor: default;
      background: ${themeGet('colors.range.disabled.track')};
    }

    & .input-range__slider {
      background: ${themeGet('colors.range.disabled.slider')};
      outline: calc(${mapToTheme('range.trackSize')}px / 2) solid
        ${themeGet('colors.range.disabled.slider')};
      transform: scale(1);
      &::before {
        display: none;
      }
    }
  `

export const Container = styled.div<ContainerProps>`
  flex-direction: column;
  position: relative;
  width: 100%;

  & .input-range__label--min,
  .input-range__label--max {
    display: none;
  }

  & .input-range__track {
    display: flex;
    align-items: center;
    background: ${themeGet('colors.range.track')};
    height: ${mapToTheme('range.trackSize')}px;
    position: relative;
    border-radius: 999px;
    cursor: pointer;

    &:hover {
      & .input-range__slider {
        &::before {
          opacity: 1;
        }
      }
    }

    ${margin}
  }

  & .input-range__track--active {
    background: ${themeGet('colors.range.slider')};
  }

  & .input-range__slider {
    border: none;
    width: ${mapToTheme('range.sliderSize')}px;
    height: ${mapToTheme('range.sliderSize')}px;
    background: ${themeGet('colors.range.slider')};
    border-radius: 999px;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    transition: outline ${themeGet('defaultTransitionTime')};
    outline: calc(${mapToTheme('range.trackSize')}px / 2) solid
      ${themeGet('colors.range.hover.track')};
    cursor: pointer;

    &::before {
      content: '';
      height: ${mapToTheme('range.dotSize')}px;
      width: ${mapToTheme('range.dotSize')}px;
      border-radius: 999px;
      background: ${themeGet('colors.range.dot')};
      opacity: 0;
      transition: opacity ${themeGet('defaultTransitionTime')};
    }

    ${color}
  }

  & .input-range__label--value {
    display: none;
  }

  ${margin}

  ${activeCss}
  ${disabledCss}
`
