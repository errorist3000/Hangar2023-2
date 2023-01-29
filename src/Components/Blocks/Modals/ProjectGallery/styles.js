import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'

const headerRelativeCss = ({ relative }) =>
  relative &&
  css`
    position: relative;
  `

export const Header = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  background-color: ${themeGet('colors.bg.tertiary')}cc;
  width: 100%;
  min-height: 50px;
  z-index: ${themeGet('zIndexes.landingHeader')};
  padding: 8px 12px;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;

  ${headerRelativeCss}
  }
`

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 24px;
  cursor: pointer;
  color: ${themeGet('colors.text.inverse')};

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`

export const NavigationButton = styled.button`
  position: absolute;
  display: flex;
  justify-items: center;
  align-items: center;
  color: ${themeGet('colors.text.inverse')};
  cursor: pointer;
  z-index: 9999;
`

const swiperHolderLowCss = ({ low }) =>
  low &&
  css`
    max-height: 640px;
  `
const holderCss = css`
  max-width: 1170px;
  max-height: 690px;
  width: 90vw;
  height: 90vh;
  border-radius: inherit;
`

export const SwiperHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .swiper {
    border-radius: inherit;
    height: 100%;
  }

  .swiper-button-prev {
    left: 0;
  }

  .swiper-button-next {
    right: 0;
  }

  .swiper-pagination {
    position: absolute;
    display: flex;
    justify-content: center;
    width: 100%;
    bottom: 20px;
    gap: ${themeGet('space.3')}px;
    z-index: 9999;
  }

  > img {
    object-fit: cover;
  }

  ${holderCss}
  ${swiperHolderLowCss}
`

export const MapHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${holderCss}
`
