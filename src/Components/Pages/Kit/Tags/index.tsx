import React from 'react'

import capitalize from 'lodash/capitalize'

import { Column, Row, Tag, Text } from 'Components/UI'

import { TagKind } from 'Constants/tags'

function Checkboxes() {
  return (
    <Column gap={5}>
      <Text h3 heading>
        Tags
      </Text>

      <Row center fullWidth gap={4}>
        <Tag kind={TagKind.Default} text={capitalize(TagKind.Default)} />
        <Tag kind={TagKind.Default} small text={capitalize(TagKind.Default)} />
      </Row>
    </Column>
  )
}

export default Checkboxes
