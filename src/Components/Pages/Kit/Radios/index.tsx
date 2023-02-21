import React from 'react'

import { Column, Radio, Row, Text } from 'Components/UI'

function Radios() {
  return (
    <Column gap={5}>
      <Text h3 heading>
        Radio buttons
      </Text>

      <Row fullWidth gap={4}>
        <Radio label={'Default'} />
        <Radio disabled label={'Disabled'} />
      </Row>
    </Column>
  )
}

export default Radios
