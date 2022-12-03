import React from 'react'

import styled from 'styled-components'

import { motion } from 'framer-motion'
import { SpinnerGap } from 'phosphor-react'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`

const Content = styled(motion.div)``

function Loader() {
  return (
    <Container>
      <Content
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 2, ease: 'linear', delay: 0 }}
      >
        <SpinnerGap size={64} />
      </Content>
    </Container>
  )
}

export default Loader
