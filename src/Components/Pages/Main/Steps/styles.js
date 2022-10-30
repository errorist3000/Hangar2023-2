import styled from 'styled-components'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/landing'

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
  align-items: center;
  width: 100%;
  max-width: ${LANDING_CONTENT_WIDTH}px;
`
