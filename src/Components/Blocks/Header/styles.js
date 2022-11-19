import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

export const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-inline: ${LANDING_PADDING_X}px;
  background-color: ${themeGet('colors.bg.secondary')};
  backdrop-filter: blur(20px);
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 72px;
  max-width: ${LANDING_CONTENT_WIDTH}px;

  color: white;
`
