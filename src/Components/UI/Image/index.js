import PropTypes from 'prop-types'

import styled from 'styled-components'

const Image = styled.img.attrs(props => ({
  src: props.src,
  alt: props.alt,
}))``

Image.defaultProps = {
  alt: 'Image description',
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string.isRequired,
}

export default Image
