import styled from 'styled-components'
import { mapToTheme } from 'styled-map'
import { margin, MarginProps } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

type ContainerProps = MarginProps & {
  bgColor: string
  small: boolean
}

export const Container = styled.div<ContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${mapToTheme('tag.height')}px;
  width: max-content;
  gap: ${themeGet('space.1')}px;
  padding-inline: ${themeGet('space.3')}px;
  border-radius: ${mapToTheme('tag.borderRadius')}px;
  background-color: ${props => props.bgColor};

  & > * {
    color: ${props => props.color};
  }

  & > svg {
    flex-shrink: 0;
    height: ${mapToTheme('tag.iconSize')}px;
    width: ${mapToTheme('tag.iconSize')}px;
  }

  ${margin}
`
