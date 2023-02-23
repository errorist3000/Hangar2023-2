import styled from 'styled-components'
import { padding } from 'styled-system'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

export const Container = styled.section.attrs({
  px: LANDING_PADDING_X,
})`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;

  ${padding}
`

export const Content = styled.div.attrs({
  pt: [6, 6, 6, 13],
  pb: [6, 6, 6, 0],
})`
  display: flex;
  justify-content: center;
  gap: 32px;
  max-width: ${LANDING_CONTENT_WIDTH};

  ${padding}
`

export const ImageHolder = styled.div`
  height: 100%;
  width: 520px;
  overflow: hidden;
  flex-shrink: 0;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
