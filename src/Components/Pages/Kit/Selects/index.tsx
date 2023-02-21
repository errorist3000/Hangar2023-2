import React from 'react'

import { Column, Row, Select, Text } from 'Components/UI'

function Selects() {
  return (
    <Column gap={5}>
      <Text h3 heading>
        Selects
      </Text>

      <Row fullWidth gap={4}>
        <Select
          caption={'Caption'}
          label={'Default'}
          placeholder={'Placeholder'}
        />
        <Select
          caption={'Caption'}
          disabled
          label={'Disabled'}
          placeholder={'Placeholder'}
        />
      </Row>
    </Column>
  )
}

export default Selects
