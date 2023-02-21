import React from 'react'
import { components, SingleValueProps } from 'react-select-five'

import { Value } from './styles'

function SingleValue(props: SingleValueProps) {
  return (
    // TODO: Find a way to extend Theme with ReactSelect Theme....
    // @ts-ignore
    <Value {...props} as={components.SingleValue} />
  )
}

export default SingleValue
