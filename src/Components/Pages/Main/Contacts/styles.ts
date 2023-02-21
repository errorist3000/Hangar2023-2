import styled from 'styled-components'
import { flexbox, padding } from 'styled-system'
import themeGet from '@styled-system/theme-get'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

export const Container = styled.div.attrs({
  px: LANDING_PADDING_X,
})`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  background-color: ${themeGet('colors.bg.primary')};

  ${padding}
`

export const Content = styled.div.attrs({
  py: [7, 7, 9, 11],
})`
  display: flex;
  justify-content: center;
  text-align: center;
  max-width: ${LANDING_CONTENT_WIDTH}px;

  ${padding}
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 250px;
`
export const IconHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 54px;
    height: 54px;
    color: ${themeGet('colors.primary')};
  }
`

export const ContentWrapper = styled.div.attrs({
  flexDirection: ['column', 'column', 'row'],
  alignItems: ['center', 'center', 'flex-start'],
})`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: ${themeGet('space.7')}px;

  @media screen and (min-width: ${themeGet('breakpoints.2')}) {
    gap: 200px;
  }

  ${flexbox}
`
