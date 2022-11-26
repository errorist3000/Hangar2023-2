import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  padding-inline: ${LANDING_PADDING_X}px;
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  max-width: ${LANDING_CONTENT_WIDTH}px;
  padding-top: ${themeGet('space.14')}px;
  padding-bottom: ${themeGet('space.14')}px;
`

export const Card = styled.div`
  width: 412px;
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  box-shadow: ${themeGet('shadow.medium')};
  z-index: 1;
  overflow: hidden;

  img {
    height: 240px;
    width: 100%;
    background-color: ${themeGet('colors.bg.primary')};
    object-fit: cover;
  }
  svg {
    width: 24px;
    height: 24px;
    color: ${themeGet('colors.text.muted')};
  }
`
