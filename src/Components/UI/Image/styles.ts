import styled, { css } from 'styled-components'
import { styleFn } from 'styled-system'

export type BaseImageProps = {
  cover?: boolean
}
const imageCoverCss: styleFn = ({ cover }: BaseImageProps) =>
  cover &&
  css`
    object-fit: cover;
  `

export const BaseImage = styled.img<BaseImageProps>`
  width: 100%;
  height: 100%;

  ${imageCoverCss}
`
