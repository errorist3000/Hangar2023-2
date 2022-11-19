import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/landing'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-inline: ${LANDING_PADDING_X}px;
  background-color: ${themeGet('colors.bg.secondary')};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${LANDING_CONTENT_WIDTH}px;
  padding-top: ${themeGet('space.11')}px;
  padding-bottom: ${themeGet('space.4')}px;
`
