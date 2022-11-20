import React from 'react'
import { I18nextProvider } from 'react-i18next'
import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components'

import i18n from 'Services/i18n'
import { GlobalStyle, theme } from 'Themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <I18nextProvider i18n={i18n}>
        <GlobalStyle />
        <Component {...pageProps} />
      </I18nextProvider>
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp
