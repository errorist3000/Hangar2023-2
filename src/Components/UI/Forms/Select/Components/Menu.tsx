import React from 'react'
import { components, MenuProps } from 'react-select-five'

import { MenuWrapper } from './styles'

function Menu(props: MenuProps) {
  return (
    // @ts-ignore
    <MenuWrapper {...props} as={components.Menu} />
  )
}

export default Menu
