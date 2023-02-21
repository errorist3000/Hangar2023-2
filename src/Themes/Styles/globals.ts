import { css } from 'styled-components'
import { themeGet } from '@styled-system/theme-get'

export default css`
  html {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: ${themeGet('font.fontFamily')};
    color: ${themeGet('colors.text.body')};
    font-size: 14px;
    line-height: 1.6;
    min-width: 100vw;
    min-height: 100vh;
    height: 100%;
    padding: 0;
    margin: 0;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    -webkit-overflow-scrolling: touch;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    padding: 0;
    border: none;
    outline: none;
    background: none;
  }
`
