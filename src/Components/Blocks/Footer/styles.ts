import styled from 'styled-components'
import { padding } from 'styled-system'
import themeGet from '@styled-system/theme-get'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

export const Container = styled.div.attrs({
  px: LANDING_PADDING_X,
})`
  display: flex;
  justify-content: center;
  width: 100%;
  background-color: ${themeGet('colors.bg.secondary')};

  ${padding}
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${LANDING_CONTENT_WIDTH}px;
  padding-top: ${themeGet('space.11')}px;
  padding-bottom: ${themeGet('space.4')}px;
`
