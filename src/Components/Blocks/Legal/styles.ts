import styled from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  p {
    margin: 0;
    color: ${themeGet('colors.text.body')};
    font-size: ${themeGet('fontSize.3')}px;
  }

  li {
    font-size: ${themeGet('fontSize.3')}px;
  }

  ul {
    margin: 0;
    list-style: disc;
  }

  a {
    font-weight: ${themeGet('fontWeight.1')};
    color: ${themeGet('colors.primary')};
  }
`
