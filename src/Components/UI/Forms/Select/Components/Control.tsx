import React from 'react'
import { components, ControlProps } from 'react-select-five'

import { ControlWrapper } from './styles'

function Control(props: ControlProps) {
  return (
    // TODO: Find a way to extend Theme with ReactSelect Theme....
    // @ts-ignore
    <ControlWrapper {...props} as={components.Control} />
  )
}

export default Control
