import React from 'react'

import { X } from 'phosphor-react'

import { Container } from './styles'

type Props = {
  onClick?: () => void
}

function CloseButton({ onClick }: Props) {
  return (
    <Container onClick={onClick}>
      <X size={24} weight="bold" />
    </Container>
  )
}

export default CloseButton
