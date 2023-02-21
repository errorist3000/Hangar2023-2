import React from 'react'

import { Checkbox, Column, Row, Text } from 'Components/UI'

function Checkboxes() {
  return (
    <Column gap={5}>
      <Text h3 heading>
        Checkboxes
      </Text>

      <Row fullWidth gap={4}>
        <Checkbox caption={'Caption'} label={'Default'} />
        <Checkbox caption={'Caption'} disabled label={'Disabled'} />
      </Row>
    </Column>
  )
}

export default Checkboxes
