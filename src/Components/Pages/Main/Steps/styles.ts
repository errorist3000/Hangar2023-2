import styled from 'styled-components'
import { margin, MarginProps, padding } from 'styled-system'
import themeGet from '@styled-system/theme-get'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
`

export const Content = styled.div.attrs({
  px: LANDING_PADDING_X,
  py: 13,
})`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: ${LANDING_CONTENT_WIDTH}px;
  gap: ${themeGet('space.7')}px;

  ${padding}
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-inline: ${themeGet('space.3')}px;
`

export const IconHolder = styled.div<MarginProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 64px;
  height: 64px;

  svg {
    width: 64px;
    height: 64px;
    color: ${themeGet('colors.primary')};
  }

  ${margin}
`
