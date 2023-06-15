import React, { ReactNode, useMemo } from 'react'

import { useTheme } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

import { Container } from 'Components/UI/Tag/styles'
import Text from 'Components/UI/Text'

import { TagKind } from 'Constants/tags'

type Props = {
  kind?: TagKind
  renderAfter?: ReactNode
  renderBefore?: ReactNode
  small?: boolean
  text: string
}

function Tag({
  kind = TagKind.Default,
  text,
  small = false,
  renderBefore,
  renderAfter,
  ...rest
}: Props) {
  const theme = useTheme()

  const { bgColor, color } = useMemo(
    () => ({
      bgColor: themeGet(`colors.tag.${kind}.bg`)({ theme }),
      color: themeGet(`colors.tag.${kind}.color`)({ theme }),
    }),
    [kind, theme],
  )

  return (
    <Container {...rest} bgColor={bgColor} color={color} small={small}>
      {renderBefore}
      <Text caption2={!small} caption3={small}>
        {text}
      </Text>
      {renderAfter}
    </Container>
  )
}

export default Tag
