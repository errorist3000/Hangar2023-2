import styled from 'styled-components'
import { padding } from 'styled-system'
import themeGet from '@styled-system/theme-get'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

export const Container = styled.div`
  width: 100%;
  background-color: gainsboro;

  img {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: bottom;
  }

  .swiper-slide {
    position: relative;
  }
`

export const Content = styled.div.attrs({
  px: LANDING_PADDING_X,
})`
  position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  padding-top: 224px;
  padding-bottom: 160px;
  max-width: ${LANDING_CONTENT_WIDTH}px;
  margin: 0 auto;

  ${padding}
`

export const PictureOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${themeGet('colors.bg.tertiary')}99;
  opacity: 70%;
`
