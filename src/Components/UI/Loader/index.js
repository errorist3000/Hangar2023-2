import React from 'react'
import PropTypes from 'prop-types'

import styled, { css } from 'styled-components'
import themeGet from '@styled-system/theme-get'

import { motion } from 'framer-motion'
import { SpinnerGap } from 'phosphor-react'

const containerOverflowCss = ({ overflow }) =>
  overflow &&
  css`
    background-color: ${themeGet('colors.bg.secondary')}88;
    color: ${themeGet('colors.text.inverse')};
  `

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;

  ${containerOverflowCss}
`

const Content = styled(motion.div)``

function Loader({ overflow }) {
  return (
    <Container overflow={overflow}>
      <Content
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear', delay: 0 }}
      >
        <SpinnerGap size={64} />
      </Content>
    </Container>
  )
}

Loader.defaultProps = {
  overflow: false,
}

Loader.propTypes = {
  overflow: PropTypes.bool,
}

export default Loader
