import React, { ReactNode } from 'react'

import { Column } from 'Components/UI/Flex'
import {
  Container,
  InvisibleCheckbox,
  StyledSwitch,
} from 'Components/UI/Forms/Switch/styles'
import Text from 'Components/UI/Text'

type Props = {
  checked?: boolean
  disabled?: boolean
  error?: string | ReactNode
  hasError?: boolean
  label?: string | ReactNode
  onBlur?: () => void
  onChange?: () => void
  onFocus?: () => void
}

function Switch({
  disabled,
  label,
  error,
  hasError,
  checked,
  onBlur,
  onChange,
  onFocus,
  ...rest
}: Props) {
  return (
    <Column>
      <Container {...rest}>
        <InvisibleCheckbox
          checked={checked}
          disabled={disabled}
          onBlur={onBlur}
          onChange={onChange}
          onFocus={onFocus}
        />

        <StyledSwitch />

        {label && (
          <Text as="div" h4 heading={!disabled} mute={disabled}>
            {label}
          </Text>
        )}
      </Container>

      {hasError && (
        <Text body4 danger>
          {error}
        </Text>
      )}
    </Column>
  )
}

export default Switch
