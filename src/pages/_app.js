import React from 'react'
import { I18nextProvider } from 'react-i18next'
import PropTypes from 'prop-types'

import { ThemeProvider } from 'styled-components'

import { ApolloProvider } from '@apollo/client'
import client from 'Services/DatoCMS/client'
import i18n from 'Services/i18n'
import { GlobalStyle, theme } from 'Themes'

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <I18nextProvider i18n={i18n}>
          <GlobalStyle />
          <Component {...pageProps} />
        </I18nextProvider>
      </ThemeProvider>
    </ApolloProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
}

export default MyApp
