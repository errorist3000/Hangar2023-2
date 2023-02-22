import React, { useState } from 'react'
import ReactInputRange, { InputRangeProps } from 'react-input-range'

import { Row } from 'Components/UI/Flex'
import { Label } from 'Components/UI/Forms/ControlElements'
import Text from 'Components/UI/Text'

import { Container, ContainerProps } from './styles'

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
      <Label text={label} />
      <ReactInputRange
        {...rest}
        onChangeComplete={() => setSliderActive(false)}
        onChangeStart={() => setSliderActive(true)}
      />
      {showValues && (
        <Row spaceBetween>
          <Text>{labelLeft ?? rest.minValue}</Text>
          <Text>{labelRight ?? rest.maxValue}</Text>
        </Row>
      )}
    </Container>
  )
}

export default Range
