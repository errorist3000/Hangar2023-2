import React, { ReactNode } from 'react'

import { MarginProps } from 'styled-system'

import Text from 'Components/UI/Text'

type Props = MarginProps & {
  danger?: boolean
  disabled?: boolean
  success?: boolean
  text?: string | ReactNode
}

function Caption({ disabled, danger, text, success, ...rest }: Props) {
  if (!text) return null

  return (
    <Text
      {...rest}
      body={!danger && !disabled && !success}
      caption5
      danger={danger}
      mute={disabled}
      success={success}
    >
      {text}
    </Text>
  )
}

export default Caption
