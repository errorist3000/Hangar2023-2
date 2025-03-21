import React from 'react'

import {
  Checkboxes,
  Inputs,
  Radios,
  Ranges,
  Selects,
  Tags,
} from 'Components/Pages/Kit'
import { Column, Text } from 'Components/UI'

function Kit() {
  return (
    <Column fullWidth gap={5} p={7}>
      <Text h1 heading>
        UI Kit
      </Text>

      <Tags />
      <Inputs />
      <Selects />
      <Checkboxes />
      <Radios />
      <Ranges />
    </Column>
  )
}

export default Kit
