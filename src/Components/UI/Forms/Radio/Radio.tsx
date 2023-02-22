import React from 'react'

import { Column } from 'Components/UI/Flex'
import { Label } from 'Components/UI/Forms/ControlElements'

import {
  Circle,
  Container,
  ContainerProps,
  InvisibleRadio,
  RadioBorder,
} from './styles'

type Props = ContainerProps & {
  caption?: React.ReactNode
  checked?: boolean
  disabled?: boolean
  label?: React.ReactNode
  large?: boolean
  name?: string
  small?: boolean
  value?: string
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}

function Radio({
  checked,
  disabled,
  label,
  large,
  name,
  small,
  value,
  onChange,
  onFocus,
  onBlur,
  ...rest
}: Props) {
  return (
    <Container {...rest}>
      <InvisibleRadio
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
      />
      <RadioBorder large={large} small={small}>
        <Circle large={large} small={small} />
      </RadioBorder>
      <Column>
        <Label disabled={disabled} text={label} />
      </Column>
    </Container>
  )
}

export default Radio
