import React from 'react'

import { logoFull } from 'Assets/Svg'
import { ROOT } from 'Constants/routes'

import { Container, LogoFull } from './styles'

function Logo() {
  return (
    <Container href={ROOT}>
      <LogoFull>{logoFull()}</LogoFull>
    </Container>
  )
}

export default Logo
