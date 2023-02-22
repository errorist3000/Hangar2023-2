import React from 'react'
import { components, MultiValueProps } from 'react-select-five'

import { MultiValueWrapper } from './styles'

function MultiValue(props: MultiValueProps) {
  return (
    // @ts-ignore
    <MultiValueWrapper {...props} as={components.MultiValue} />
  )
}

export default MultiValue
