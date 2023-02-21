import styled, { css } from 'styled-components'
import { styleFn } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export type Props = {
  vertical?: boolean
}
const contentVerticalCss: styleFn = ({ vertical }: Props) =>
  vertical &&
  css`
    width: 1px;
    height: 100%;
  `

export const StyledDelimiter = styled.div<Props>`
  width: 100%;
  height: 1px;
  background-color: ${themeGet('colors.border.secondary')};

  ${contentVerticalCss}
`
