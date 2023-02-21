import styled from 'styled-components'
import { flexbox, layout, padding } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

export const Container = styled.div`
  width: 100%;
  background-color: ${themeGet('colors.bg.primary')};

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
  py: 11,
  minHeight: ['95vh', '95vh', '70vh'],
})`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: ${LANDING_CONTENT_WIDTH}px;
  margin: 0 auto;

  ${padding}
  ${layout}
`

export const PictureOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${themeGet('colors.bg.tertiary')}99;
  opacity: 70%;
`
export const ButtonHolder = styled.div.attrs({
  flexDirection: ['column', 'row'],
})`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${themeGet('space.7')}px;

  ${flexbox}
`
