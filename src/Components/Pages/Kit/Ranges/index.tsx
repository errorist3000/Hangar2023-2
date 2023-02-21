import React from 'react'

import { Column, Range, Row, Text } from 'Components/UI'

function Ranges() {
  return (
    <Column gap={5}>
      <Text h3 heading>
        Range inputs
      </Text>

      <Row fullWidth gap={4}>
        <Range label={'Default'} value={20} onChange={() => {}} />
        <Range disabled label={'Disabled'} value={20} onChange={() => {}} />
      </Row>
    </Column>
  )
}

export default Ranges
