import styled from 'styled-components'
import { layout, margin } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-block: ${themeGet('space.6')}px;
  background-color: ${themeGet('colors.bg.default')};
  width: 100%;
  gap: ${themeGet('space.6')}px;
  min-height: 200px;
  border-radius: 20px;
  box-shadow: ${themeGet('shadow.large')};

  ${layout}
  ${margin}
`
