import React from 'react'
import { components, GroupProps } from 'react-select-five'

import { GroupWrapper } from './styles'

function Group(props: GroupProps) {
  return (
    // @ts-ignore
    <GroupWrapper {...props} as={components.Group} />
  )
}

export default Group
