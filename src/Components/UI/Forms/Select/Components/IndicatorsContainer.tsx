import React from 'react'
import { components, IndicatorsContainerProps } from 'react-select-five'

import { Indicators } from './styles'

function IndicatorsContainer(props: IndicatorsContainerProps) {
  return (
    // @ts-ignore
    <Indicators {...props} as={components.IndicatorsContainer} />
  )
}

export default IndicatorsContainer
