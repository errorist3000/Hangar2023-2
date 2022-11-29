import React from 'react'
import PropTypes from 'prop-types'

import { Footer, Header } from 'Components/Blocks'

import { Container } from './styles'

function LandingLayout({ footerData, children }) {
  return (
    <Container>
      <Header />
      {children}
      <Footer data={footerData} />
    </Container>
  )
}

LandingLayout.propTypes = {
  children: PropTypes.node.isRequired,
  footerData: PropTypes.object.isRequired,
}

export default LandingLayout
