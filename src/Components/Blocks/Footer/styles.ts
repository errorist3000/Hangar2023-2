import styled from 'styled-components'
import { flexbox, margin, MarginProps, padding } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

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

export const Content = styled.div.attrs({
  pt: [6, 6, 6, 11],
  pb: [3, 3, 3, 4],
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: ${LANDING_CONTENT_WIDTH}px;

  ${padding}
`

export const Wrapper = styled.div.attrs({
  flexDirection: ['column', 'column', 'row'],
})<MarginProps>`
  display: flex;
  justify-content: space-between;

  ${flexbox}
  ${margin}
`
