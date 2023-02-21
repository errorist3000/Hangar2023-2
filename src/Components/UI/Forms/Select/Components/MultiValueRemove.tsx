import React from 'react'
import { components, MultiValueRemoveProps } from 'react-select-five'

import { X } from 'phosphor-react'

function MultiValueRemove(props: MultiValueRemoveProps) {
  return (
    <components.MultiValueRemove {...props}>
      <X />
    </components.MultiValueRemove>
  )
}

export default MultiValueRemove
