import React, { ElementType } from 'react'
import { I18nextProvider } from 'react-i18next'

import { ThemeProvider } from 'styled-components'

import { ApolloProvider } from '@apollo/client'
import { GlobalStyle, theme } from 'Themes'

import client from 'Services/DatoCMS/client'
import i18n from 'Services/i18n'

type Props = {
  Component: ElementType
  pageProps: object
}
function MyApp({ Component, pageProps }: Props) {
  return (
    // @ts-ignore
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

export default MyApp
