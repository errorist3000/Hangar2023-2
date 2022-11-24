import styled from 'styled-components'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  padding: 0 ${LANDING_PADDING_X}px;
  background-color: gainsboro;
`

export const Content = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 224px;
  padding-bottom: 160px;
  max-width: ${LANDING_CONTENT_WIDTH}px;
`
