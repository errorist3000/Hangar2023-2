import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'

import { LANDING_CONTENT_WIDTH, LANDING_PADDING_X } from 'Constants/ids'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-start;
  width: 100%;
  padding: 0 ${LANDING_PADDING_X}px;
  position: relative;
  overflow: hidden;
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  max-width: ${LANDING_CONTENT_WIDTH}px;
  gap: 20px;
  padding: 56px ${LANDING_PADDING_X}px;
  box-sizing: content-box;
  position: relative;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
`
export const IconHolder = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 64px;
    height: 64px;
    color: ${themeGet('colors.primary')};
    margin-bottom: ${themeGet('space.5')}px;
  }
`

const styledImageTopCss = ({ top }: { top?: number }) =>
  top &&
  css`
    top: ${top}px;
  `

export const StyledImage = styled.img<{ top?: number }>`
  position: absolute;
  left: 0;
  opacity: 0.25;
  min-width: 100%;
  object-fit: contain;
  object-position: bottom;

  ${styledImageTopCss}
`
