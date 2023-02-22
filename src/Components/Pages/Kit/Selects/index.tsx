import React from 'react'

import { Column, Row, Select, Text } from 'Components/UI'

const OPTIONS = [
  { value: 1, label: 'Option 1' },
  { value: 2, label: 'Option 2' },
  { value: 3, label: 'Option 3' },
  { value: 4, label: 'Option 4' },
  { value: 5, label: 'Option 5' },
]

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
          options={OPTIONS}
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
