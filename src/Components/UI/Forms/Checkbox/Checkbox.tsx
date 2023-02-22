import React from 'react'

import { Column } from 'Components/UI/Flex'
import { Caption, Label } from 'Components/UI/Forms/ControlElements'

import {
  CheckboxBorder,
  CheckIcon,
  Container,
  ContainerProps,
  InvisibleCheckbox,
} from './styles'

type Props = ContainerProps & {
  alignTop?: boolean
  caption?: React.ReactNode
  checked?: boolean
  defaultChecked?: boolean
  disabled?: boolean
  error?: React.ReactNode
  label?: React.ReactNode
  large?: boolean
  name?: string
  small?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}

function Checkbox({
  alignTop,
  checked,
  defaultChecked,
  disabled,
  error,
  label,
  large,
  name,
  small,
  onChange,
  onFocus,
  onBlur,
  ...rest
}: Props) {
  return (
    <Container {...rest} alignTop={alignTop}>
      <InvisibleCheckbox
        checked={checked}
        defaultChecked={defaultChecked}
        disabled={disabled}
        name={name}
        onBlur={onBlur}
        onChange={onChange}
        onFocus={onFocus}
      />
      <CheckboxBorder large={large} small={small}>
        <CheckIcon />
      </CheckboxBorder>
      <Column>
        <Label disabled={disabled} text={label} />
      </Column>
      {error && <Caption danger text={error} />}
    </Container>
  )
}

export default Checkbox
