import React from 'react'
import { components, MultiValueProps } from 'react-select-five'

import { MultiValueWrapper } from './styles'

function MultiValue(props: MultiValueProps) {
  return (
    // TODO: Find a way to extend Theme with ReactSelect Theme....
    // @ts-ignore
    <MultiValueWrapper {...props} as={components.MultiValue} />
  )
}

export default MultiValue
