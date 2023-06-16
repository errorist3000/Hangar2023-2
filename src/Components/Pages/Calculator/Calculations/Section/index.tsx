import React from 'react'

import { Text } from 'Components/UI'

import { Container } from './styles'

type Props = {
  children: React.ReactNode
  headerText: String
}

function CalculationSection({ children, headerText }: Props) {
  return (
    <Container>
      <Text action1 heading>
        {headerText}
      </Text>

      {children}
    </Container>
  )
}

export default CalculationSection
