import styled from 'styled-components'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  padding: 0 ${LANDING_PADDING_X}px;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding-top: 80px;
  max-width: ${LANDING_CONTENT_WIDTH};
`

export const ImageHolder = styled.div`
  height: 100%;
  width: 520px;
  background-color: tomato;
  overflow: hidden;
  flex-shrink: 0;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
