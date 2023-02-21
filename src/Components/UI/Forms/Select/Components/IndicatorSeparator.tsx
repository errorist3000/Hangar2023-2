import React from 'react'
import { IndicatorSeparatorProps } from 'react-select-five'

import { Separator } from './styles'

function IndicatorSeparator({ innerProps }: IndicatorSeparatorProps) {
  return <Separator {...innerProps} />
}

export default IndicatorSeparator
