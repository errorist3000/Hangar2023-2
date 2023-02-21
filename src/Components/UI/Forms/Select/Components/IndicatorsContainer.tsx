import React from 'react'
import { components, IndicatorsContainerProps } from 'react-select-five'

import { Indicators } from './styles'

function IndicatorsContainer(props: IndicatorsContainerProps) {
  return (
    // TODO: Find a way to extend Theme with ReactSelect Theme....
    // @ts-ignore
    <Indicators {...props} as={components.IndicatorsContainer} />
  )
}

export default IndicatorsContainer
