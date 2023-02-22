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
  alignTop?: boolean
  name?: string
  value?: string
  checked?: boolean
  caption?: React.ReactNode
  disabled?: boolean
  label?: React.ReactNode
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}

function Radio({
  alignTop,
  name,
  value,
  checked,
  disabled,
  label,
  onChange,
  onFocus,
  onBlur,
  ...rest
}: Props) {
  return (
    <Container {...rest} alignTop={alignTop}>
      <InvisibleRadio
        checked={checked}
        disabled={disabled}
        name={name}
        value={value}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
      />
      <RadioBorder large={rest.large} small={rest.small}>
        <Circle large={rest.large} small={rest.small} />
      </RadioBorder>
      <Column flexGrow={1} gap={1}>
        <Label text={label} />
      </Column>
    </Container>
  )
}

export default Radio
