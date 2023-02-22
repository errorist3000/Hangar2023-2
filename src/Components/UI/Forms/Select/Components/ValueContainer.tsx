import React from 'react'
import { components, ValueContainerProps } from 'react-select-five'

import { ValueContainerWrapper } from './styles'

function ValueContainer(props: ValueContainerProps) {
  return (
    // @ts-ignore
    <ValueContainerWrapper {...props} as={components.ValueContainer} />
  )
}

export default ValueContainer
