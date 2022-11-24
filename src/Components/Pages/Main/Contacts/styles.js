import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  padding: 0 ${LANDING_PADDING_X}px;
  background-color: ${themeGet('colors.bg.primary')};
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 80px;
  padding-bottom: 80px;
  max-width: ${LANDING_CONTENT_WIDTH}px;
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
