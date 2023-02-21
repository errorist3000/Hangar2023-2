import React from 'react'
import { components, GroupProps } from 'react-select-five'

import { GroupWrapper } from './styles'

function Group(props: GroupProps) {
  return (
    // TODO: Find a way to extend Theme with ReactSelect Theme....
    // @ts-ignore
    <GroupWrapper {...props} as={components.Group} />
  )
}

export default Group
