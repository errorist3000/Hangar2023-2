import styled from 'styled-components'
import themeGet from '@styled-system/theme-get'

export const Header = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${themeGet('colors.bg.tertiary')};
  max-height: 50px;
  max-width: 1170px;
  z-index: ${themeGet('zIndexes.landingHeader')};
  padding: 8px 12px;
  opacity: 0.6;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
`

export const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${themeGet('colors.text.inverse')};

  &:hover {
    color: ${themeGet('colors.primary')};
  }
`
