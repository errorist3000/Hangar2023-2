import React from 'react'
import { components, ContainerProps } from 'react-select-five'

import { SelectContainerWrapper } from './styles'

function SelectContainer(props: ContainerProps) {
  return (
    // TODO: Find a way to extend Theme with ReactSelect Theme....
    // @ts-ignore
    <SelectContainerWrapper {...props} as={components.SelectContainer} />
  )
}

export default SelectContainer
