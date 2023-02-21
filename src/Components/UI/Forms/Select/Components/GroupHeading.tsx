import React from 'react'
import { components, GroupHeadingProps } from 'react-select-five'

import { GroupHeadingWrapper } from './styles'

function GroupHeading(props: GroupHeadingProps) {
  return (
    // TODO: Find a way to extend Theme with ReactSelect Theme....
    // @ts-ignore
    <GroupHeadingWrapper {...props} as={components.GroupHeading} />
  )
}

export default GroupHeading
