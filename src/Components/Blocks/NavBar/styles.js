import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const ItemButton = styled.button`
  cursor: pointer;
  color: ${themeGet('colors.text.inverse')};

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`
