import React from 'react'

import { Item } from './styles'

function LoadingMessage({ children }: { children: React.ReactNode }) {
  return <Item textAlign="center">{children}</Item>
}

export default LoadingMessage
