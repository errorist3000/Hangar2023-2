import React from 'react'
import { components, GroupHeadingProps } from 'react-select-five'

import { GroupHeadingWrapper } from './styles'

function GroupHeading(props: GroupHeadingProps) {
  return (
    // @ts-ignore
    <GroupHeadingWrapper {...props} as={components.GroupHeading} />
  )
}

export default GroupHeading
