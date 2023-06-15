import React from 'react'

import { Column, Row, Switch, Text } from 'Components/UI'

function Switches() {
  return (
    <Column gap={5}>
      <Text h3 heading>
        Switches
      </Text>

      <Row fullWidth gap={4}>
        <Switch />
      </Row>
    </Column>
  )
}

export default Switches
