import React from 'react'
import { components, InputProps } from 'react-select-five'

import { InputWrapper } from './styles'

function Input(props: InputProps) {
  const { isHidden } = props

  if (isHidden) {
    return <components.Input {...props} />
  }
  // TODO: Find a way to extend Theme with ReactSelect Theme....
  // @ts-ignore
  return <InputWrapper {...props} as={components.Input} />
}

export default Input
