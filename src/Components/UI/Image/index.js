import React from 'react'
import PropTypes from 'prop-types'

import styled from 'styled-components'

const BaseImage = styled.img`
  width: 100%;
  height: 100%;
`

function Image({ data }) {
  return (
    <BaseImage
      alt={data?.alt}
      src={data?.jpeg}
      srcSet={`${data?.webp1x} 1x,${data?.webp2x} 2x`}
    />
  )
}

Image.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Image
