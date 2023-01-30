import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

const containerShrinkCss = ({ shrink }: { shrink: boolean }) =>
  shrink &&
  css`
    height: 56px;
  `

export const Container = styled.div<{ shrink: boolean }>`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-inline: ${LANDING_PADDING_X}px;
  background-color: ${themeGet('colors.bg.tertiary')}99;
  backdrop-filter: blur(6px);
  height: 72px;
  transition: height ${themeGet('transitionTime.modal')} linear;
  z-index: ${themeGet('zIndexes.landingHeader')};

  ${containerShrinkCss}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  max-width: ${LANDING_CONTENT_WIDTH}px;

  color: white;
`
