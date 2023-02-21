import React from 'react'

import { Column } from 'Components/UI/Flex'

import {
  CaptionText,
  Circle,
  Container,
  ContainerProps,
  InvisibleRadio,
  LabelText,
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
  caption,
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
        {label && <LabelText>{label}</LabelText>}
        {caption && (
          <CaptionText large={rest.large} small={rest.small}>
            {caption}
          </CaptionText>
        )}
      </Column>
    </Container>
  )
}

export default Radio
