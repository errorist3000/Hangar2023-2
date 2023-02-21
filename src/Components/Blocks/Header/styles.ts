import styled, { css } from 'styled-components'
import { padding } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

type ContainerProps = {
  shrink?: boolean
}

export const Container = styled.div.attrs({})`
  position: fixed;
  display: flex;
  flex-direction: column;
  width: 100%;
  z-index: ${themeGet('zIndexes.landingHeader')};
`

const barContainerShrinkCss = ({ shrink }: ContainerProps) =>
  shrink &&
  css`
    height: 56px;
  `

export const BarContainer = styled.div.attrs({
  px: LANDING_PADDING_X,
})<ContainerProps>`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${themeGet('colors.bg.tertiary')}99;
  backdrop-filter: blur(6px);
  height: 72px;
  transition: height ${themeGet('transitionTime.modal')} linear;

  ${padding}

  ${barContainerShrinkCss}
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  max-width: ${LANDING_CONTENT_WIDTH}px;
`

export const BurgerButton = styled.button`
  color: ${themeGet('colors.text.inverse')};
  cursor: pointer;

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`

export const MobileMenuContainer = styled.div.attrs({
  px: LANDING_PADDING_X,
})`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${themeGet('colors.bg.default')}cc;
  backdrop-filter: blur(6px);
  box-shadow: ${themeGet('shadow.large')};

  ${padding}
`
