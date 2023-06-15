import styled, { css } from 'styled-components'
import { layout, padding, space } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

type PopoverBlockProps = {
  withoutBackground?: boolean
}

type ArrowProps = {
  ref: any
}

export const Arrow = styled.div<ArrowProps>`
  position: absolute;
  width: 8px;
  height: 8px;

  &:before {
    position: absolute;
    width: 8px;
    height: 8px;
    content: '';
    background-color: ${themeGet('colors.bg.tooltip')};
    top: 0;
    left: 0;
    transform: rotateZ(45deg);
    border-radius: 1px;
  }
`

const popoverBlockWithoutBgCss = ({ withoutBackground }: PopoverBlockProps) =>
  withoutBackground &&
  css`
    background: none;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
  `

export const PopoverBlock = styled.div<PopoverBlockProps>`
  margin: 0;
  padding: 0;
  box-shadow: 0 0 15px ${themeGet('colors.black')}1A;
  border-radius: 10px;
  font-size: 13px;
  background-color: ${themeGet('colors.background.block')};

  &[data-placement^='top'] ${Arrow} {
    bottom: -4px;
  }

  &[data-placement^='bottom'] ${Arrow} {
    top: -4px;
  }

  &[data-placement^='left'] ${Arrow} {
    right: -4px;
  }

  &[data-placement^='right'] ${Arrow} {
    left: -4px;
  }

  ${space};
  ${layout};
  ${padding};

  ${popoverBlockWithoutBgCss};
`

export const ContentWrapper = styled.div`
  position: relative;
`
