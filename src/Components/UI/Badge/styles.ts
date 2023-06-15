import styled from 'styled-components'
import { mapToTheme } from 'styled-map'
import { margin } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${mapToTheme('badge.size')}px;
  height: ${mapToTheme('badge.size')}px;
  padding-inline: ${mapToTheme('badge.padding')}px;
  border-radius: ${mapToTheme('badge.borderRadius')}px;
  background-color: ${themeGet('colors.badge.bg')};

  ${margin}
`
