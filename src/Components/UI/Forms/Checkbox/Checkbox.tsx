import React from 'react'

import { WarningCircle } from 'phosphor-react'

import { Column } from 'Components/UI/Flex'

import {
  CaptionText,
  CheckboxBorder,
  CheckIcon,
  Container,
  ContainerProps,
  ErrorText,
  InvisibleCheckbox,
  LabelText,
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
  caption,
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
        {label && <LabelText>{label}</LabelText>}
        {caption && (
          <CaptionText large={rest.large} small={rest.small}>
            {caption}
          </CaptionText>
        )}
      </Column>
      {error && (
        <ErrorText>
          <WarningCircle weight="bold" /> <span>{error}</span>
        </ErrorText>
      )}
    </Container>
  )
}

export default Checkbox
