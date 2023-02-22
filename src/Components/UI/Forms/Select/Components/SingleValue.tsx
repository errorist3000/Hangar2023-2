import React from 'react'
import { components, SingleValueProps } from 'react-select-five'

import { Value } from './styles'

function SingleValue(props: SingleValueProps) {
  return (
    // @ts-ignore
    <Value {...props} as={components.SingleValue} />
  )
}

export default SingleValue
