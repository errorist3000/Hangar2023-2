import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'

type ContainerProps = {
  mobile: boolean
}

const containerMobileCss = ({ mobile }: ContainerProps) =>
  mobile &&
  css`
    flex-direction: column;
    gap: ${themeGet('space.6')}px;
    padding-block: ${themeGet('space.8')}px;
  `

export const Container = styled.div<ContainerProps>`
  display: flex;
  gap: ${themeGet('space.8')}px;

  ${containerMobileCss}
`

export const ItemButton = styled.button`
  cursor: pointer;

  &:hover {
    p {
      color: ${themeGet('colors.primary')};
    }
  }
`
