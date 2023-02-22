import React from 'react'
import { components, PlaceholderProps } from 'react-select-five'

import { PlaceholderWrapper } from './styles'

function Placeholder(props: PlaceholderProps) {
  return (
    // @ts-ignore
    <PlaceholderWrapper {...props} as={components.Placeholder} />
  )
}

export default Placeholder
