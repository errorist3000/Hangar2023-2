import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

function LandingLayout({ children }) {
  return <Container>{children}</Container>
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LandingLayout
