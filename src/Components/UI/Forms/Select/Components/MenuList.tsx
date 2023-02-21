import React from 'react'
import { components, MenuListProps } from 'react-select-five'

import { MenuListWrapper } from './styles'

function MenuList(props: MenuListProps) {
  return (
    // TODO: Find a way to extend Theme with ReactSelect Theme....
    // @ts-ignore
    <MenuListWrapper {...props} as={components.MenuList} />
  )
}

export default MenuList
