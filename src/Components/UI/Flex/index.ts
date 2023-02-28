import styled, { css } from 'styled-components'
import {
  flexbox,
  FlexboxProps,
  layout,
  LayoutProps,
  margin,
  MarginProps,
  padding,
  PaddingProps,
  styleFn,
} from 'styled-system'

import { gap, GapProps } from 'Themes/system'

type SizeProps = number | string

type Props = Omit<FlexboxProps, 'flexDirection'> &
  MarginProps &
  FlexboxProps &
  LayoutProps &
  PaddingProps &
  GapProps & {
    center?: boolean
    fullHeight?: boolean
    fullWidth?: boolean
    grow?: boolean
    height?: SizeProps
    justifyCenter?: boolean
    justifyEnd?: boolean
    maxWidth?: SizeProps
    spaceBetween?: boolean
    width?: SizeProps
    wrap?: boolean
  }

const fullWidthCss: styleFn = ({ fullWidth }: Props) =>
  fullWidth &&
  css`
    width: 100%;
  `

const fullHeightCss: styleFn = ({ fullHeight }: Props) =>
  fullHeight &&
  css`
    height: 100%;
  `

const centerCss: styleFn = ({ center }: Props) =>
  center &&
  css`
    align-items: center;
  `

const spaceBetweenCss: styleFn = ({ spaceBetween }: Props) =>
  spaceBetween &&
  css`
    justify-content: space-between;
  `

const justifyCenterCss: styleFn = ({ justifyCenter }: Props) =>
  justifyCenter &&
  css`
    justify-content: center;
  `

const justifyEndCss: styleFn = ({ justifyEnd }: Props) =>
  justifyEnd &&
  css`
    justify-content: flex-end;
  `

const wrapCss: styleFn = ({ wrap }: Props) =>
  wrap &&
  css`
    flex-wrap: wrap;
  `

const Flex = styled.div<Props>`
  display: flex;

  ${flexbox}
  ${layout}
  ${margin}
  ${gap}
  ${padding}
  
  ${centerCss}
  ${fullHeightCss}
  ${fullWidthCss}
  ${spaceBetweenCss}
  ${justifyCenterCss}
  ${justifyEndCss}
  ${wrapCss}
`

export const Column = styled(Flex)`
  flex-direction: column;
`

export const Row = styled(Flex)``
