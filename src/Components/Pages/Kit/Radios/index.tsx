import React from 'react'

import { Column, Radio, Row, Text } from 'Components/UI'

function Radios() {
  return (
    <Column gap={5}>
      <Text h3 heading>
        Radio buttons
      </Text>

      <Row fullWidth gap={4}>
        <Column gap={3}>
          <Radio label={'Default'} name={'name'} />
          <Radio label={'Default'} name={'name'} />
        </Column>
        <Radio disabled label={'Disabled'} />
        <Radio checked disabled label={'Disabled'} />
      </Row>
    </Column>
  )
}

export default Radios
