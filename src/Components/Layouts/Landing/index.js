import React from 'react'
import PropTypes from 'prop-types'

import { Footer, Header } from 'Components/Blocks'

import { Container } from './styles'

function LandingLayout({ children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  )
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LandingLayout
