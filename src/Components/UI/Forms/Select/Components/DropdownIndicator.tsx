import React from 'react'
import { components, DropdownIndicatorProps } from 'react-select-five'

import { CaretDown } from 'phosphor-react'

import { Dropdown } from './styles'

function DropdownIndicator(props: DropdownIndicatorProps) {
  return (
    // TODO: Find a way to extend Theme with ReactSelect Theme....
    // @ts-ignore
    <Dropdown {...props} as={components.DropdownIndicator}>
      <CaretDown size={16} weight={'bold'} />
    </Dropdown>
  )
}

export default DropdownIndicator
