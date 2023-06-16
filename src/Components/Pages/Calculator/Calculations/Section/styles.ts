import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: ${themeGet('space.6')}px;
  width: 100%;
  gap: ${themeGet('space.3')}px;
`
