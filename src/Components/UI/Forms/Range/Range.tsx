import React, { useState } from 'react'
import ReactInputRange, { InputRangeProps } from 'react-input-range'

import { Row } from 'Components/UI/Flex'

import { Container, ContainerProps, Label } from './styles'

type Props = ContainerProps &
  InputRangeProps & {
    label?: string
    labelLeft?: string
    labelRight?: string
    className?: string
    showValues?: boolean
    color?: string
  }

function Range({
  label,
  className,
  showValues,
  backgroundColor,
  bg,
  labelLeft,
  labelRight,
  ...rest
}: Props) {
  const [sliderActive, setSliderActive] = useState(false)

  return (
    <Container
      active={sliderActive}
      backgroundColor={backgroundColor}
      bg={bg}
      className={className}
    >
      {label && <Label>{label}</Label>}
      <ReactInputRange
        {...rest}
        onChangeComplete={() => setSliderActive(false)}
        onChangeStart={() => setSliderActive(true)}
      />
      {showValues && (
        <Row spaceBetween>
          <Label>{labelLeft ?? rest.minValue}</Label>
          <Label>{labelRight ?? rest.maxValue}</Label>
        </Row>
      )}
    </Container>
  )
}

export default Range
