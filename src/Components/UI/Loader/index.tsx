import React from 'react'

import { SpinnerGap } from 'phosphor-react'

import { Container, Content, Props } from './styles'

function Loader({ overflow }: Props) {
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

export default Loader
