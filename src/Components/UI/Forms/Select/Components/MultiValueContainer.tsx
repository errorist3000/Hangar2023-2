import React from 'react'
import { components, MultiValueGenericProps } from 'react-select-five'

import { MultiValueContainerWrapper } from './styles'

function MultiValueContainer(props: MultiValueGenericProps) {
  return (
    // TODO: Find a way to extend Theme with ReactSelect Theme....
    // @ts-ignore
    <MultiValueContainerWrapper
      {...props}
      as={components.MultiValueContainer}
    />
  )
}

export default MultiValueContainer
