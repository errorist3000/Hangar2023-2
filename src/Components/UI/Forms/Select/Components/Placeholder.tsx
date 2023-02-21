import React from 'react'
import { components, PlaceholderProps } from 'react-select-five'

import { PlaceholderWrapper } from './styles'

function Placeholder(props: PlaceholderProps) {
  return (
    // TODO: Find a way to extend Theme with ReactSelect Theme....
    // @ts-ignore
    <PlaceholderWrapper {...props} as={components.Placeholder} />
  )
}

export default Placeholder
