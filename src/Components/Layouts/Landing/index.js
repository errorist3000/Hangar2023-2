import React from 'react'
import PropTypes from 'prop-types'

import { Footer, Header } from 'Components/Blocks'
import { Loader } from 'Components/UI'

import { Container } from './styles'

function LandingLayout({ footerData, children }) {
  if (!footerData) {
    return <Loader />
  }

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
