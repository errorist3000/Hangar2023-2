import styled, { css } from 'styled-components'
import { padding, styleFn } from 'styled-system'
import themeGet from '@styled-system/theme-get'

import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  background-color: ${themeGet('colors.bg.primary')};
`

export const Content = styled.div.attrs({
  pt: [8, 8, 10, 13],
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  width: 100%;

  button {
    border-radius: 0;
  }

  ${padding}
`

export const TopHolder = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  flex-shrink: 0;
`

export const BottomHolder = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  flex-shrink: 0;
`

const cardHolderSizeCss: styleFn = ({ size }: { size: number }) =>
  size &&
  css`
    width: ${size}px;
    height: ${size}px;
  `

export const CardHolder = styled.div<{ size: number }>`
  position: relative;

  ${cardHolderSizeCss}
`

const cardHoverCss = ({ canHover }: { canHover: boolean }) =>
  canHover &&
  css`
    cursor: pointer;
    &:hover {
      z-index: 1;
      box-shadow: ${themeGet('shadow.large')};

      img {
        filter: grayscale(0);
        width: 100%;
      }

      div {
        height: 96px;
      }

      p {
        opacity: 1;
      }
    }
  `

export const Card = styled.button<{ canHover: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  background-color: ${themeGet('colors.bg.default')};
  transition: all ${themeGet('transitionTime.long')};

  img {
    width: 100%;
    object-fit: cover;

    @media screen and (min-width: ${themeGet('breakpoints.2')}) {
      filter: grayscale(100%);
    }
  }

  p {
    transition: opacity ${themeGet('transitionTime.long')} ease-in;
    opacity: 0;
  }

  ${cardHoverCss}
`

export const CaptionHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  overflow: hidden;
  height: 0;
  transition: height ${themeGet('transitionTime.long')};
`

export const CaptionOverlay = styled.button`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  background-color: ${themeGet('colors.bg.tertiary')}44;
  padding: ${themeGet('space.3')}px ${themeGet('space.1')}px;
  cursor: pointer;
`
