import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const Container = styled.button`
  cursor: pointer;
  color: ${themeGet('colors.text.muted')};

  &:hover {
    color: ${themeGet('colors.text.heading')};
  }
`
