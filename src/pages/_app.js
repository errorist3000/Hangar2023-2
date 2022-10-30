import React from 'react'
import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from 'Themes'
import themes from 'Themes/themes'

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={themes.main}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}
