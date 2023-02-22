import React, { ReactNode } from 'react'

import { MarginProps } from 'styled-system'

import Text from 'Components/UI/Text'

type Props = MarginProps & {
  disabled?: boolean
  required?: boolean
  text?: string | ReactNode
}

function Label({ disabled, text, required, ...rest }: Props) {
  if (!text) return null

  return (
    <Text {...rest} heading={!disabled} mute={disabled} subHeader5>
      {text} {required && '*'}
    </Text>
  )
}

export default Label
