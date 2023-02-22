import React, { useState } from 'react'

import { Column, Range, Row, Text } from 'Components/UI'

type RangeProp = {
  max: number
  min: number
}

const RANGE_VALUE = { maxValue: 40, minValue: 10 }

function Ranges() {
  const [range, setRange] = useState<{
    single: number | RangeProp
    double: number | RangeProp
  }>({
    single: 20,
    double: {
      min: 15,
      max: 25,
    },
  })

  return (
    <Column gap={5}>
      <Text h3 heading>
        Range inputs
      </Text>

      <Row fullWidth gap={4}>
        <Range
          label={'Single'}
          maxValue={RANGE_VALUE.maxValue}
          minValue={RANGE_VALUE.minValue}
          value={range.single}
          onChange={value => setRange({ ...range, single: value })}
        />
        <Range
          label={'Double'}
          maxValue={RANGE_VALUE.maxValue}
          minValue={RANGE_VALUE.minValue}
          value={range.double}
          onChange={value => setRange({ ...range, double: value })}
        />
        <Range
          disabled
          label={'Disabled'}
          maxValue={RANGE_VALUE.maxValue}
          minValue={RANGE_VALUE.minValue}
          value={range.single}
          onChange={value => setRange({ ...range, single: value })}
        />
      </Row>
    </Column>
  )
}

export default Ranges
