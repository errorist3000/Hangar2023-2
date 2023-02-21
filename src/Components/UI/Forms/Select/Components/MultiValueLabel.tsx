import React from 'react'
import { components, MultiValueGenericProps } from 'react-select-five'

import { MultiValueLabelWrapper } from './styles'

function MultiValueLabel(props: MultiValueGenericProps) {
  return <MultiValueLabelWrapper {...props} as={components.MultiValueLabel} />
}

export default MultiValueLabel
