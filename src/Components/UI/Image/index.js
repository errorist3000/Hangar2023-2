import React from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'

const imageCoverCss = ({ cover }) =>
  cover &&
  css`
    object-fit: cover;
  `

const BaseImage = styled.img`
  width: 100%;
  height: 100%;

  ${imageCoverCss}
`

function Image({ data, cover }) {
  return (
    <BaseImage
      alt={data?.alt}
      cover={cover}
      src={data?.jpeg}
      srcSet={`${data?.webp1x} 1x,${data?.webp2x} 2x`}
    />
  )
}

Image.defaultProps = {
  cover: false,
}

Image.propTypes = {
  cover: PropTypes.bool,
  data: PropTypes.object.isRequired,
}

export default Image
