import styled from 'styled-components'
import { padding } from 'styled-system'
import { themeGet } from '@styled-system/theme-get'

export const Container = styled.div.attrs({
  p: [3, 3, 4, 5],
})`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  overflow-y: auto;
  position: relative;
  border-radius: inherit;

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

  ${padding}
`
