import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'

import { motion } from 'framer-motion'

export type Props = {
  overflow?: boolean
}
const containerOverflowCss = ({ overflow }: Props) =>
  overflow &&
  css`
    background-color: ${themeGet('colors.bg.secondary')}88;
    color: ${themeGet('colors.text.inverse')};
  `

export const Container = styled.div<Props>`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  color: ${themeGet('colors.primary')};

  ${containerOverflowCss}
`

export const Content = styled(motion.div)``
