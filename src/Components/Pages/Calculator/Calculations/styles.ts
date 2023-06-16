import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { LANDING_HEADER_HEIGHT } from 'Constants/ids'

export const Container = styled.section`
  width: 100%;
  background-color: ${themeGet('colors.bg.primary')};
`

export const StickyContainer = styled.div`
  position: sticky;
  top: ${LANDING_HEADER_HEIGHT.DEFAULT}px;
  display: flex;
  width: 100%;
  max-width: 500px;
`
