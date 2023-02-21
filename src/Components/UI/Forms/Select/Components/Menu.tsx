import React from 'react'
import { components, MenuProps } from 'react-select-five'

import { MenuWrapper } from './styles'

function Menu(props: MenuProps) {
  return (
    // TODO: Find a way to extend Theme with ReactSelect Theme....
    // @ts-ignore
    <MenuWrapper {...props} as={components.Menu} />
  )
}

export default Menu
