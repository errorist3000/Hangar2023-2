import React from 'react'

import { Column, Input, Row, Text } from 'Components/UI'

function Inputs() {
  return (
    <Column gap={5}>
      <Text h3 heading>
        Inputs
      </Text>

      <Row fullWidth gap={4}>
        <Input
          caption={'Caption'}
          label={'Default'}
          placeholder={'Placeholder'}
        />
        <Input
          caption={'Caption'}
          disabled
          label={'Disabled'}
          placeholder={'Placeholder'}
        />
      </Row>
    </Column>
  )
}

export default Inputs
