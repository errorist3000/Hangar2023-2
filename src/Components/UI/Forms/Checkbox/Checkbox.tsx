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
  name?: string
  checked?: boolean
  defaultChecked?: boolean
  caption?: React.ReactNode
  disabled?: boolean
  label?: React.ReactNode
  error?: React.ReactNode
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  onFocus?: React.FocusEventHandler<HTMLInputElement>
  onBlur?: React.FocusEventHandler<HTMLInputElement>
}

function Checkbox({
  alignTop,
  name,
  checked,
  defaultChecked,
  disabled,
  label,
  error,
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
      <CheckboxBorder large={rest.large} small={rest.small}>
        <CheckIcon />
      </CheckboxBorder>
      <Column gap={1}>
        <Label text={label} />
      </Column>
      {error && <Caption danger text={error} />}
    </Container>
  )
}

export default Checkbox
