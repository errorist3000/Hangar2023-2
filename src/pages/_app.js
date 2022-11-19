import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle, theme } from 'Themes'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
