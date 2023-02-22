import React, { useState } from 'react'
import ReactInputRange, { Range as RangeProp } from 'react-input-range'

import { MarginProps } from 'styled-system'

import { Row } from 'Components/UI/Flex'
import { Label } from 'Components/UI/Forms/ControlElements'
import Text from 'Components/UI/Text'

import { Container } from './styles'

type Props = MarginProps & {
  disabled?: boolean
  label?: string
  maxValue: number
  minValue: number
  value: number | RangeProp
  onChange: (value: number | RangeProp) => void
}

function Range({
  disabled,
  label,
  maxValue,
  minValue,
  value,
  onChange,
  ...rest
}: Props) {
  const [sliderActive, setSliderActive] = useState(false)

  return (
    <Container {...rest} active={sliderActive} disabled={disabled}>
      <Label disabled={disabled} mb={3} text={label} />
      <ReactInputRange
        disabled={disabled}
        maxValue={maxValue}
        minValue={minValue}
        value={value}
        onChange={onChange}
        onChangeComplete={() => setSliderActive(false)}
        onChangeStart={() => setSliderActive(true)}
      />
      <Row mt={2} spaceBetween>
        <Text body caption3 mute={disabled}>
          {minValue}
        </Text>
        <Text body caption3 mute={disabled}>
          {maxValue}
        </Text>
      </Row>
    </Container>
  )
}

export default Range
