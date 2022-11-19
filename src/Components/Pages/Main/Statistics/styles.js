import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  padding: 0 ${LANDING_PADDING_X}px;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: ${LANDING_CONTENT_WIDTH}px;
  gap: 20px;
  padding-top: 56px;
  padding-bottom: 56px;
  background-color: ${themeGet('colors.bg.default')};
`

export const Card = styled.div`
  background-color: ${themeGet('colors.bg.default')};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`
export const IconHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 64px;
    height: 64px;
    color: ${themeGet('colors.primary')};
    margin-bottom: ${themeGet('space.5')}px;
  }
`
