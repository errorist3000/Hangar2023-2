import React from 'react'

import Text from 'Components/UI/Text'

import { Container } from './styles'

type Props = {
  counter?: string | number
}

function Badge({ counter, ...rest }: Props) {
  return <Container {...rest}>{counter && <Text>{counter}</Text>}</Container>
}

export default Badge
