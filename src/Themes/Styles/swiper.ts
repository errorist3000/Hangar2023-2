import { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

const size = 10

const swiper = css`
  .swiper-pagination-bullet {
    width: ${size}px;
    height: ${size}px;
    border-radius: calc(${size}px / 2);
    background: ${themeGet('colors.bg.primary')};
    transition: all ${themeGet('transitionTime.long')};
    cursor: pointer;
  }

  .swiper-pagination-bullet-active {
    width: calc(${size}px * 2);
    background: ${themeGet('colors.primary')};
  }
`

export default swiper
