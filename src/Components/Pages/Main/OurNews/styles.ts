import styled from 'styled-components'
import { layout, padding } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

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
  py: [10, 10, 12, 14],
})`
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;

  .swiper-wrapper {
    padding-bottom: ${themeGet('space.7')}px;
  }

  .swiper-slide {
    width: min-content;
  }

  .swiper-scrollbar-horizontal {
    background-color: ${themeGet('colors.bg.primary')};
    height: 6px;
    border-radius: 3px;
  }

  .swiper-scrollbar-drag {
    background-color: ${themeGet('colors.primary')};
    height: 100%;
    border-radius: inherit;
  }
  ${padding}
`

export const SwiperHolder = styled.div`
  width: 100%;
  max-width: ${LANDING_CONTENT_WIDTH}px;
  overflow: hidden;
  margin: 0 auto;
`

export const Card = styled.div.attrs({
  maxWidth: ['unset', 'unset', 'unset', 412],
})`
  display: flex;
  flex-direction: column;
  align-items: start;
  text-align: start;
  box-shadow: ${themeGet('shadow.medium')};
  z-index: 1;
  overflow: hidden;

  > img {
    height: 236px;
    width: 100%;
    background-color: ${themeGet('colors.bg.primary')};
    object-fit: cover;
  }
  svg {
    width: 24px;
    height: 24px;
    color: ${themeGet('colors.text.muted')};
  }

  ${layout}
`
