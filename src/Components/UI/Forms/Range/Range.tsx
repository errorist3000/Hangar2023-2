import React, { useCallback, useState } from 'react'
import ReactInputRange, { Range as RangeProp } from 'react-input-range'

import { MarginProps } from 'styled-system'

import { Row } from 'Components/UI/Flex'
import { Label } from 'Components/UI/Forms/ControlElements'
import Text from 'Components/UI/Text'

import { Container } from './styles'

type Props = MarginProps & {
  disabled?: boolean
  label?: string
  step?: number
  maxValue: number
  minValue: number
  value?: number
  range?: RangeProp
  onChangeValue?: (value: number) => void
  onChangeRange?: (value: RangeProp) => void
}

function Range({
  disabled,
  label,
  maxValue,
  minValue,
  step = 1,
  value,
  range,
  onChangeValue,
  onChangeRange,
  ...rest
}: Props) {
  const [sliderActive, setSliderActive] = useState(false)

  const handleChange = useCallback(
    (value: number | RangeProp) => {
      if (typeof value === 'number') {
        onChangeValue?.(value)
      } else {
        onChangeRange?.(value)
      }
    },
    [onChangeRange, onChangeValue],
  )

  return (
    <Container {...rest} active={sliderActive} disabled={disabled}>
      <Label disabled={disabled} text={label} />

      <Row fullWidth justifyCenter mb={3}>
        <Text action1 heading={!disabled} mute={disabled}>
          {range ? `${range.min} - ${range.max}` : value}
        </Text>
      </Row>

      <ReactInputRange
        disabled={disabled}
        maxValue={maxValue}
        minValue={minValue}
        step={step}
        value={value || range || 0}
        onChange={handleChange}
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
