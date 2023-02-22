import React, { ReactNode } from 'react'

import Text from 'Components/UI/Text'

import { Item } from './styles'

type Props = {
  children: string | ReactNode
}

function NoOptionsMessage({ children }: Props) {
  return (
    <Item>
      <Text body4 center mute my={2}>
        {children}
      </Text>
    </Item>
  )
}

export default NoOptionsMessage
