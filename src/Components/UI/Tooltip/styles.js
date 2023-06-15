import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const ContentWrapper = styled.div`
  background-color: ${themeGet('colors.bg.tooltip')};
  border-radius: 4px;
  color: ${themeGet('colors.text.contrast')};
  font-size: ${themeGet('fontSize.2')}px;
  font-weight: ${themeGet('fontWeight.0')};
  line-height: 143%;
  padding: ${themeGet('space.1')}px ${themeGet('space.3')}px;
`
