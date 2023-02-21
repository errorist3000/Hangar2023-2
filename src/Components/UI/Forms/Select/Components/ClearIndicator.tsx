import React from 'react'
import { ClearIndicatorProps } from 'react-select-five'

import { X } from 'phosphor-react'

import { Clear } from './styles'

const ClearIndicator = React.forwardRef<HTMLDivElement, ClearIndicatorProps>(
  ({ innerProps }, ref) => (
    <Clear {...innerProps} ref={ref}>
      <X />
    </Clear>
  ),
)

export default ClearIndicator
