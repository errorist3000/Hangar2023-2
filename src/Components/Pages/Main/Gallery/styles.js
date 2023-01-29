import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'

import { motion } from 'framer-motion'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  background-color: ${themeGet('colors.bg.primary')};
`

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding-top: 80px;
  width: 100%;

  button {
    border-radius: 0;
  }
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

const cardHolderSizeCss = ({ size }) =>
  size &&
  css`
    width: ${size}px;
    height: ${size}px;
  `

export const CardHolder = styled.div`
  position: relative;

  ${cardHolderSizeCss}
`

const cardHoverCss = ({ canHover }) =>
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

export const Card = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: absolute;
  width: 100%;
  bottom: 0;
  transition: all ${themeGet('transitionTime.long')};

  img {
    filter: grayscale(100%);
    width: 100%;
    object-fit: cover;
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
  background-color: ${themeGet('colors.bg.default')};
`
