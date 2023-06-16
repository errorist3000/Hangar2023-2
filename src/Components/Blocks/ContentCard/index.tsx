import React from 'react'

import { LayoutProps, MarginProps } from 'styled-system'

import { Delimiter, Text } from 'Components/UI'

import { Container } from './styles'

type Props = LayoutProps &
  MarginProps & {
    children: React.ReactNode
    headerText?: String
  }

function ContentCard({ children, headerText, ...rest }: Props) {
  return (
    <Container {...rest}>
      {headerText && (
        <>
          <Text h4 heading mx={7}>
            {headerText}
          </Text>
          <Delimiter />
        </>
      )}

      {children}
    </Container>
  )
}

export default ContentCard
