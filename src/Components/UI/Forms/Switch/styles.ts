import styled from 'styled-components'
import { mapToTheme } from 'styled-map'
import { margin } from '@styled-system/space'
import { themeGet } from '@styled-system/theme-get'

const width = mapToTheme('switch.width')
const height = mapToTheme('switch.height')
const handleSize = mapToTheme('switch.handleSize')
const handleOffset = mapToTheme('switch.handleOffset')

export const StyledSwitch = styled.div`
  border-radius: ${mapToTheme('switch.borderRadius')}px;
  cursor: pointer;
  transition: all ${themeGet('transitionTime.default')};
  width: ${width}px;
  height: ${height}px;

  &:after {
    position: absolute;
    content: '';
    top: 50%;
    width: ${handleSize}px;
    height: ${handleSize}px;
    border-radius: calc(${handleSize}px / 2);
    transition: all ${themeGet('transitionTime.default')};
  }
`

export const InvisibleCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  background: none;
  border: none;
  opacity: 0;
  pointer-events: none;
`

export const Container = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  user-select: none;
  gap: ${themeGet('space.2')}px;
  width: max-content;

  > input {
    &:not(:checked) ~ ${StyledSwitch} {
      &:after {
        transform: translate(${handleOffset}px, -50%);
        background-color: ${themeGet('colors.switch.color')};
      }
    }

    &:checked ~ ${StyledSwitch} {
      &:after {
        --transform: calc(${width}px - ${handleSize}px - ${handleOffset}px);
        transform: translate(var(--transform), -50%);
        background-color: ${themeGet('colors.switch.color')};
      }
    }

    &:enabled:not(:checked) ~ ${StyledSwitch} {
      background-color: ${themeGet('colors.switch.bg')};

      &:hover {
        background-color: ${themeGet('colors.switch.hover.bg')};
      }

      &:focus {
        background-color: ${themeGet('colors.switch.focus.bg')};
        box-shadow: ${themeGet('colors.switch.focus.shadow')};
      }
    }

    &:enabled:checked ~ ${StyledSwitch} {
      background-color: ${themeGet('colors.switch.on.bg')};

      &:hover {
        background-color: ${themeGet('colors.switch.on.hover.bg')};
      }

      &:focus {
        background-color: ${themeGet('colors.switch.on.focus.bg')};
        box-shadow: ${themeGet('colors.switch.on.focus.shadow')};
      }
    }

    &:disabled ~ ${StyledSwitch} {
      cursor: default;
      background-color: ${themeGet('colors.switch.disabled.bg')};
    }

    &:disabled:checked ~ ${StyledSwitch} {
      background-color: ${themeGet('colors.switch.on.disabled.bg')};
    }
  }

  ${margin}
`
